import { useRef } from 'react';

const NewTodo: React.FC<{onAddTodo: (text: string) => void}> = (props) => {
    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredText = todoTextInputRef.current!.value;

        if (enteredText.trim().length === 0) {
            // throw an error
            return;
        }

        props.onAddTodo(enteredText);

    };

    const todoTextInputRef= useRef<HTMLInputElement>(null);

    return <form onSubmit={submitHandler}>
        <label htmlFor="text"></label>
        <input type="text" id="text" ref={todoTextInputRef}/>
        <button>Add</button>
    </form>
};

export default NewTodo;