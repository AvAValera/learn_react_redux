import {combineReducers} from "redux";
import todo from "./todo-reducer";

export const rootTodo = combineReducers(todo);