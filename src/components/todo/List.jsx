import React from "react";
import { BsCircle, BsCheckCircleFill, BsFillTrashFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { toggleTodo, selectFilterTodo, removeTodo} from "../../store/todo";
import { selectFilter } from "../../store/filter";
import {motion, AnimatePresence} from "framer-motion";

export default function List() {
    const filter = useSelector(selectFilter);
    const todos = useSelector(state => selectFilterTodo(state, filter));
    const dispatch = useDispatch();
    
    return (
        <AnimatePresence>
            {todos.map((todo, i) => (
                <motion.li
                    key={todo.id}
                    className={`${i === 0 ? "rounded-t-[5px]" : null} h-[50px] p-[10px] text-[16px] text-[var(--text-color)] border-b-[1px] border-b-[var(--border-color)] leading-[30px] bg-[var(--bg-input)]`}

                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ 
                        opacity: 0,
                        transition: { duration: 0.5 },
                        x: 400,
                    }}
                >
                    <div className="flex items-center gap-[10px]">
                        <button onClick={() => dispatch(toggleTodo(todo.id))}>
                            {todo.completed ? (
                                <BsCheckCircleFill
                                    size={20}
                                    color="var(--icon-check)"
                                />
                            ) : (
                                <BsCircle size={20} color="var(--icon-check)" />
                            )}
                        </button>
                        <span
                            style={{
                                color: !todo.completed
                                    ? "var(--todo-color)"
                                    : "gray",
                                textDecoration: todo.completed
                                    ? "line-through"
                                    : "none",
                            }}
                        >
                            {todo.text}
                        </span>
                        <button
                            onClick={() => dispatch(removeTodo(todo.id))}
                            className="ml-auto"
                        >
                            <BsFillTrashFill color="var(--icon-check)" />
                        </button>
                    </div>
                </motion.li>
            ))}
        </AnimatePresence>
    );
}
