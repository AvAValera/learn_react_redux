import React, {useEffect, useState} from 'react';
import Card from "../card/Card";
import {getProducts, selectData, selectFilterData} from "../../store/data-slice";
import { selectFilter } from '../../store/filter-slice';
import {useDispatch, useSelector} from "react-redux";
import ContainerPagination from './ContainerPagination';


function Container() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const {search, category, price} = filter;

  const {error, status} = useSelector(selectData);
  const entities = useSelector(state => selectFilterData(state.shop.entities, {search, category, price}));

  const [page, setPage] = useState(0)

  const setNumPage = (e, value) => {
    if(value === 1){
      setPage(0)
    }
    else{
      setPage(value * 10 - 10)
    }
  }

  useEffect(() => {
    dispatch(getProducts())
  },[dispatch])

  useEffect(() => {
    setPage(0)
  }, [filter]);

  return (
    <div className="py-[50px]">
      <div className={"flex flex-col gap-[30px] mb-[30px]"}>
        {error && <h1>{error}</h1>}
        {status === "loading" && Array.from({length: 10}).map((el, i) => <Card key={i} status={"loading"}/>)}
        {entities.splice(page, 10).map((product) => <Card key={product.id} {...product} />)}
      </div>
      <ContainerPagination status={status} page={page} setNumPage={setNumPage} entities={entities} />
    </div>
  );
}

export default Container;