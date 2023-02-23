import React from 'react';
import Header from "./header/Header";

function Layout({children}) {
  return (
    <div className="layout">
      <div className="layout__container">
        <Header/>
        <div>
          {children}
        </div>
      </div>
    </div>
  );
}

export default Layout;