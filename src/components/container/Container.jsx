import React, {useEffect} from 'react';
import Card from "../card/Card";
import {getProducts, selectData} from "../../store/data-slice";
import {useDispatch, useSelector} from "react-redux";

function Container(props) {
  const dispatch = useDispatch();
  const {entities, status, error} = useSelector(selectData);

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
    </div>
  );
}

export default Container;