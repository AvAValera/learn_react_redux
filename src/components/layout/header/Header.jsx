import React from 'react';
import { SiRedux } from "react-icons/si";

function Header() {
  return (
    <header className="w-full h-[50px]">
      <div className="flex w-full h-full items-center px-[20px]">
        <div className="mr-[50px]">
          <SiRedux size={40}/>
        </div>
        <menu>
          <nav>Главная</nav>
        </menu>
        <div className="ml-auto">
          <input className="bg-gray-200 h-[25px] rounded px-[5px]" type="search" placeholder={"search"}  />
        </div>
      </div>
    </header>
  );
}

export default Header;