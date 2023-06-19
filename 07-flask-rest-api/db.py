import sqlite3

con = sqlite3.connect("mydatabase.db")
cur = con.cursor()

cur.execute("CREATE TABLE IF NOT EXISTS books (id INTEGER PRIMARY KEY, title TEXT, author TEXT, year INTEGER)")
con.commit()
con.close()
