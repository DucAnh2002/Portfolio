import { assets } from '../../assets/assets.ts';
import React, {FC} from 'react';
import './Header.css';

const Header:FC = () => {
  return (
    <div className='header' id='home'>
        <h1>Hà Đức Anh</h1>
        <h3>I'm A Front-end Developer</h3>
        <img src={assets.logo3} alt="logo3" />
        <div className="icon">
          
        </div>
    </div>
  );
};

export default Header;