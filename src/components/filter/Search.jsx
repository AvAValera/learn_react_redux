import React from "react";
import { useDispatch } from "react-redux";
import { addSearch } from "../../store/filter-slice";

export default function Search() {
	const dispatch = useDispatch();

	const search = (event) => {
    dispatch(addSearch(event.target.value))
  }
    return (
        <div >
            <input
                onChange={search}
                className="bg-white h-[38px] rounded px-[5px] border-[#cccccc] border-[1px]"
                type="search"
                placeholder={"search"}
            />
        </div>
    );
}
