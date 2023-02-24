import React from 'react';

function Layout({children}) {
  return (
    <div className="layout min-w-[650px]">
      <div className="layout__container">
        <div>
          {children}
        </div>
      </div>
    </div>
  );
}

export default Layout;