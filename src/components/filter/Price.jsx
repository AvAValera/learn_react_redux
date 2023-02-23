import React from 'react'
import Select from 'react-select'
import { addPrice } from '../../store/filter-slice'
import { useDispatch } from 'react-redux'

export default function Price() {
	const dispatch = useDispatch();
	const options = [
		{value: "", label: "Featured"},
		{value: "Low", label: "Price: Low to High"},
		{value: "High", label: "Price: High to Low"},
	]

	return (
		<Select  
			className="w-[200px]"
			options={options}
			defaultValue={options[0]}
			onChange={(select) => dispatch(addPrice(select.value))}
		/>
  )
}
