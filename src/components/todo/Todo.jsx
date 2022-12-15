import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../store/todo/todo-actions";

export default function Todo() {
    const todo = useSelector(state => state.todo)
    const dispatch = useDispatch()
    
    return (
        <div>
            <div>
                <button onClick={() => dispatch(addTodo("test"))}>ADD</button>
            </div>
        </div>
    );
}
