import { createSlice, nanoid } from "@reduxjs/toolkit";
import {clearAll} from "./clear";

const todo = createSlice({
    name: "@@todo",
    initialState: [],
    reducers: {
        addTodo: {
            reducer: (state, action) => {
                state.push(action.payload);
            },
            prepare: (text) => ({
                payload: {
                    id: nanoid(),
                    text,
                    completed: false,
                }
            })
        },
        toggleTodo: (state, action) => {
            const id = action.payload;
            const todo = state.find((todo) => todo.id === id);
            todo.completed = !todo.completed;
        },
        removeTodo: (state, action) => {
            return state.filter((todo) => todo.id !== action.payload);
        }
    },
    extraReducers: 
        (builder) => {
                builder.addCase(clearAll, (state, action) => {
                    return [];
                })
        }
    
});

export const { addTodo, removeTodo, toggleTodo } = todo.actions;
export const selectAllTodo = (state) => state.todo;
export const selectFilterTodo = (state, filter) => {
    switch (filter) {
        case "all":
            return state.todo;
        case "active":
            return state.todo.filter((todo) =>!todo.completed);
        case "completed":
            return state.todo.filter((todo) => todo.completed);
        default:
            return state.todd
    }
}

export default todo.reducer;
