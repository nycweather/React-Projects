from flask import Flask, jsonify, request
import json
import sqlite3

app = Flask(__name__)

def connection():
    con = None
    try: 
        con = sqlite3.connect("mydatabase.db")
    except sqlite3.Error as e:
        print(e)
    return con


@app.route('/books', methods=['GET', 'POST'])
def books():
    con = connection()
    cur = con.cursor()
    if request.method == 'GET':
        cur.execute("Select * from books")
        books = [
            dict(id=row[0], author=row[1], language=row[2], title=row[3])
            for row in cur.fetchall()
        ]
        if books is not None or len(books) > 0:
            return jsonify(books), 201
        else:
            'Nothing found', 404

    if request.method == 'POST':
        new_title = request.form['title']
        new_author = request.form['author']
        new_year = request.form['year']
        sql = "INSERT INTO books (title, author, year) VALUES (?, ?, ?)"
        cur.execute(sql, (new_title, new_author, new_year))
        con.commit()
        return "Book added successfully"

@app.route('/books/<int:id>', methods=['GET', 'PUT', 'DELETE'])
def single_book(id):
    con = connection()
    cur = con.cursor()
    book = None
    if request.method == 'GET':
        cur.execute("SELECT * FROM books WHERE id=?", (id,))
        book = cur.fetchone()
        if book is not None:
            book_dict = {
                "id": book[0],
                "title": book[1],
                "author": book[2],
                "year": book[3]
            }
            return json.dumps(book_dict), 200
        else:
            return 'Not found', 404
        
    if request.method == 'PUT':
        data = request.get_json()
        if data is None:
            return 'Invalid JSON data', 400
        
        try:
            cur.execute("SELECT * FROM books WHERE id=?", (id,))
            existing_book = cur.fetchone()
            if existing_book is None:
                return 'Book not found', 404
            
            # Update book details with the new data
            updated_book = {
                "id": id,
                "title": data.get("title", existing_book[1]),
                "author": data.get("author", existing_book[2]),
                "year": data.get("year", existing_book[3])
            }
            
            # Update the book record in the database
            cur.execute("UPDATE books SET title=?, author=?, year=? WHERE id=?", (
                updated_book["title"],
                updated_book["author"],
                updated_book["year"],
                updated_book["id"]
            ))
            con.commit()
            
            return json.dumps(updated_book), 200
        except Exception as e:
            return str(e), 500
        

    if request.method == 'DELETE':
        con = connection()
        cur = con.cursor()
        try:
            cur.execute("SELECT * FROM books WHERE id=?", (id,))
            existing_book = cur.fetchone()
            if existing_book is None:
                return 'Book not found', 404
            cur.execute("DELETE FROM books WHERE id=?", (id,))
            con.commit()
            return 'Book deleted', 200
        except Exception as e:
            return str(e), 500

        

if __name__ == '__main__':
    app.run(debug=True, port=8080)