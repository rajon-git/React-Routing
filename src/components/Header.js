import React from 'react';

const Header = () => {
    return (
        <div  className="navbar bg-dark" data-bs-theme="dark">
            <div className='header'>
            <a href='/about'>About</a>
            <a href='/'>Home</a>
            <a href='/contact'>Contact</a> 
            <a href='/countries'>Countries</a>
            
        </div>
        </div>
    );
};

export default Header;