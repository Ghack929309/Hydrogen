import React from 'react';
import {
  SearchIcon,
  LocationIcon,
  ContactIcon,
  BixlersLogo,
  AccountIcon,
  WishlistIcon,
  CartIcon,
} from './Icons';
import Navbar from './Navbar.client';

const Header = () => {
  return (
    <>
      <div className="header-container flex flex-row justify-start items-center gap-x-96 pt-16">
        <div className="icons-left flex flex-row gap-x-20 justify-center items-center ml-32">
          <SearchIcon />
          <LocationIcon />
          <ContactIcon />
        </div>
        <div className="bixlers-logo mr-5">
          <BixlersLogo />
        </div>
        <div className="icons-right flex flex-row gap-x-20 justify-center items-center mr-14">
          <AccountIcon />
          <WishlistIcon />
          <CartIcon />
        </div>
      </div>
      <div className="navbar font-normal text-2xl leading-6 pt-24">
        <Navbar />
      </div>
    </>
  );
};

export default Header;
