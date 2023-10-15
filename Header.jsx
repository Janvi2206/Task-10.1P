import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-left">
          <h1 className="logo">DEVDeakin</h1>
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
            <button className="header-button" style={{marginLeft: '10px'}}>Post</button>
            <button className="header-button">Login</button>
          </div>
        </div>
        </div>
        <img className="header-image" src="https://storage-prtl-co.imgix.net/endor/organisations/11000/images/1533828576_3262_150116_BC_Building_Burwod_01.jpg" alt="Header" />
      
    </header>
  );
}

export default Header;
