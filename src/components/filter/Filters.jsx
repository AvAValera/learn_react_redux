import React from 'react';
import Price from './Price';
import Category from './Category';

function Filters() {
  return (
    <div className="filters">
      <div className="filters__container w-[70%] h-[30px] mx-auto mb-[50px] flex gap-[10px]">
        <Price />
        <Category />
      </div>
    </div>
  );
}

export default Filters;