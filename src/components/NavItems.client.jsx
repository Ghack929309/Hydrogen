import React from 'react';


import Dropdown from './Dropdown.client';

const NavItems = ({items}) => {
  return (
    <li className='menu-items'>
        {items.submenu? (
            <> 
                <button 
                type='button' 
                aria-haspopup='menu' 
                >
                    {items.title}{' '}
                </button>
                <Dropdown submenus={items.submenu} />
            </>
        ): (
            <a href={items.url}>{items.title}</a>
        )}
    </li>
  )
}

export default NavItems;