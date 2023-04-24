import React from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";

const AddUser = (props) => {

    const addUserHandler = (event) => {
        event.preventDefault();
    };

    return (
        <Card>
        <form onSubmit={addUserHandler} className={classes.input}>
            <label htmlFor="username">Username: </label>
            <input type="text" id="username" />
            <label htmlFor="age">Age: </label>
            <input min='0' type="number" id="age" />
            <button type="submit">Add User</button>
        </form>
        </Card>
    );
}

export default AddUser;