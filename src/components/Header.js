import React from 'react';
import './Header.css';

const Header = (props) => (
    <div className="header"
      style={{
      backgroundColor: '#fed420'
    }}>
      <h1 style={{color: props.titleColor }}>{props.title}</h1>
      <img src={props.image} alt={props.title}/>
    </div>
)

export default Header;
