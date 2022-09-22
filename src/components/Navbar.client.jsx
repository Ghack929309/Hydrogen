import React from 'react';
import { navbarItems } from '../navbarItems';
import NavItems from './NavItems.client';


const Navbar = () => {
  return (
    <nav>
      <ul className='nav flex flex-row gap-x-20 justify-center items-center ml-40 pb-14'>
        {navbarItems.map((item, index)=>{
          return (
            <NavItems items={item} key={index} />
          )
        })}
      </ul>
    </nav>
  )
}

export default Navbar;