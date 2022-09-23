import React from 'react';

import NavItems from './NavItems.client';
import { navbarItems } from './navbarItems';

const Navbar = () => {
  return (
    <nav>
      <ul className="nav flex flex-row xl:gap-x-20 lg:gap-x-16 md:gap-x-14 justify-left items-center">
        {navbarItems.map((item, index) => {
          return <NavItems items={item} key={index} />;
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
