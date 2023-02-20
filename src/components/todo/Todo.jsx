import React from "react";
import { BsSun, BsMoon} from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { addTodo} from "../../store/todo";
import { selectTheme, setTheme } from "../../store/theme";
import Filter from "./Filter";
import List from "./List";

export default function Todo() {
    const dispatch = useDispatch();
    const theme = useSelector(selectTheme);

    const add = (event) => {
        event.preventDefault();
        const text = event.target.todo.value;
        if(text.length <= 40) {
            dispatch(addTodo(text));
            event.target.reset()
        }
    }

    return (
        <div className="todo absolute top-[100px] left-1/2 px-[10px] translate-x-[-50%] w-[300px] md:w-[500px]">
            <div className="flex flex-col ">
                <div className="flex items-center justify-between mb-[50px]">
                    <h1 className="font-bold text-[50px] text-[var(--text-color)]">TODO</h1>
                    <button onClick={() => dispatch(setTheme())}>
                        {
                            theme === "dark"? <BsSun size={30} color="white" /> : <BsMoon size={30} color="black" />
                        }
                    </button>
                </div>
                <div className="w-full">
                    <form className="mb-[50px]" onSubmit={add}>
                        <input className="w-full h-[50px] p-[10px] bg-[var(--bg-input)] text-[16px] text-[var(--text-color)] rounded-[5px]" type="text" name="todo" placeholder="ADD TODO" />
                    </form>
                    <div >
                        <ul className="w-full rounded-[5px]">
                            <List />
                            <Filter />
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
