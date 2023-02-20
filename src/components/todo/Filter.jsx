import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectFilter, setFilter } from "../../store/filter";
import { clearAll } from "../../store/clear";

export default function Filter() {
    const filter = useSelector(selectFilter);
    const dispatch = useDispatch();
    return (
        <li className="flex items-center justify-center gap-3 text-[14px] h-[30px] p-[10px] font-bold text-[var(--filter-color)] leading-[30px] bg-[var(--bg-input)] rounded-b-[5px]">
            <button
                style={{
                    color:
                        filter === "all"
                            ? "var(--active-color)"
                            : "var(--filter-color)",
                }}
                onClick={() => dispatch(setFilter("all"))}
            >
                All
            </button>
            <button
                style={{
                    color:
                        filter === "active"
                            ? "var(--active-color)"
                            : "var(--filter-color)",
                }}
                onClick={() => dispatch(setFilter("active"))}
            >
                Active
            </button>
            <button
                style={{
                    color:
                        filter === "completed"
                            ? "var(--active-color)"
                            : "var(--filter-color)",
                }}
                onClick={() => dispatch(setFilter("completed"))}
            >
                Completed
            </button>
            <button className="hover:text-[var(--active-color)]" onClick={() => dispatch(clearAll())}>Clear all</button>
        </li>
    );
}
