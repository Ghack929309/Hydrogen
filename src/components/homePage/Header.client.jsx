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
    <div className="header-container">
      <div className="header-top-section ">
        <div className="icons-left ">
          <SearchIcon />
          <LocationIcon />
          <ContactIcon />
        </div>
        <div className="hamburger-button">
          <HamburgerIcon />
        </div>
        <div className="bixlers-logo">
          <BixlersLogo />
        </div>
        <div className="icons-right">
          <AccountIcon />
          <WishlistIcon />
          <CartIcon />
        </div>
        <div className="cartWish-button">
          <CartWishlistIcon />
        </div>
      </div>
      <div className="navbar">
        <Navbar />
      </div>
    </div>
  );
};

export default Header;

export const CartWishlistIcon = () => {
  return (
    <svg
      width="45"
      height="45"
      viewBox="0 0 30 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path width="21" height="18" fill="#F5F5F5" d="M0 0H21V18H0V0z" />
      <g clipPath="url(#clip0_0_1)">
        <path
          width="428"
          height="9626"
          transform="translate(-382 -51)"
          fill="white"
          d="M0 0H428V9626H0V0z"
        />
        <path
          x="-382"
          y="-51"
          width="428"
          height="114"
          fill="white"
          d="M-382 -51H46V63H-382V-51z"
        />
        <path
          d="M17.439 1.04H3.881C3.461 1.04 3.105 1.351 3.049 1.768L1.128 16.048C1.06 16.552 1.452 17 1.961 17H19.36C19.868 17 20.26 16.552 20.192 16.048L18.271 1.768C18.215 1.351 17.859 1.04 17.439 1.04Z"
          stroke="black"
          strokeWidth="0.95"
          strokeLinejoin="round"
        />
        <path
          d="M14.44 5.24V-0.22C14.44 -2.308 12.748 -4 10.66 -4V-4C8.572 -4 6.88 -2.308 6.88 -0.22V5.24"
          stroke="black"
          strokeWidth="0.95"
        />
        <path
          d="M26.373 13.134H26.372C26.375 13.088 26.376 13.042 26.376 12.995C26.376 11.13 24.808 9.513 22.873 9.513C21.459 9.513 20.242 10.427 19.689 11.591H19.688C19.135 10.426 17.917 9.513 16.503 9.513C14.569 9.513 13.001 11.13 13.001 12.995C13.001 13.041 13.002 13.088 13.004 13.134H13.004C13.004 13.134 12.806 15.35 15.264 17.769C16.381 18.893 17.631 19.96 19.688 21.638C21.745 19.96 22.995 18.893 24.112 17.769C26.57 15.35 26.372 13.134 26.372 13.134L26.373 13.134Z"
          fill="white"
          stroke="#272726"
          strokeWidth="0.95"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_0_1">
          <path
            width="428"
            height="9626"
            fill="white"
            transform="translate(-382 -51)"
            d="M0 0H428V9626H0V0z"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export const HamburgerIcon = () => {
  return (
    <>
      <svg
        width="35"
        height="35"
        viewBox="0 0 20 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1 1H19" stroke="black" strokeLinecap="round" />
        <path d="M1 8H19" stroke="black" strokeLinecap="round" />
        <path d="M1 15H19" stroke="black" strokeLinecap="round" />
      </svg>
    </>
  );
};
