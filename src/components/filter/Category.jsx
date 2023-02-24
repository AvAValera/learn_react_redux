import React from 'react'
import Select from 'react-select'
import { useDispatch } from 'react-redux'
import { addCategory } from '../../store/filter-slice';

export default function Category() {
  const dispatch = useDispatch();

	const options = [
		{value: "", label: "All"},
		{value: "Clothes", label: "Clothes"},
		{value: "Electronics", label: "Electronics"},
		{value: "Change title", label: "Change title"},
		{value: "Shoes", label: "Shoes"},
		{value: "Other", label: "Other"},
	]

	return (
		<Select  
			className="w-[130px]"
			options={options}
      defaultValue={options[0]}
      onChange={(select) => dispatch(addCategory(select.value))}
		/>
  )
}
