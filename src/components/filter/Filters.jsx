import React from 'react';
import Price from './Price';
import Category from './Category';
import Search from './Search';

function Filters() {
  return (
    <div className="filters">
      <div className="filters__container w-[70%] h-[30px] mt-[20px] mx-auto flex gap-[10px]">
        <Price />
        <Category />
        <Search />
      </div>
    </div>
  );
}

export default Filters;