class Todo {
    id: number;
    title: string;
    completed: boolean;

    constructor(title: string) {
        this.id = Math.random()
        this.title = title;
        this.completed = false;
    }
}

export default Todo;