import React, {useEffect} from 'react';
import Card from "../card/Card";
import {getProducts, selectData, selectFilterData} from "../../store/data-slice";
import { selectFilter } from '../../store/filter-slice';
import {useDispatch, useSelector} from "react-redux";
import Pagination from '@mui/material/Pagination';

function Container() {
  const dispatch = useDispatch();
  const {search, category, price} = useSelector(selectFilter);
  const {error, status} = useSelector(selectData);
  const entities = useSelector(state => selectFilterData(state.shop.entities, {search, category, price}));

  useEffect(() => {
    dispatch(getProducts())
  },[dispatch])

  return (
    <div className="">
      <div className={"flex flex-col gap-[30px]"}>
        {status === "loading" && <h1>Loading...</h1>}
        {error && <h1>{error}</h1>}
        {entities.map((product) => <Card key={product.id} {...product} />)}
      </div>
      {status === "received" && <Pagination count={Math.round(entities.length / 10)} variant="outlined" />}
    </div>
  );
}

export default Container;