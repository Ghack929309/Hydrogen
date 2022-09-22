import React from 'react';
import {Image} from '@shopify/hydrogen';
import rotaryPhone from '../assets/images/rotary-phone.png';

const SecondHeroSection = () => {
  return (
    <div>
      <div className="flex flex-col">
        <Image
          src={rotaryPhone}
          width="100%"
          height="auto"
          alt="rotary-phone"
          className=" w-full h-86 "
        />
      </div>

      <div className="book-appointment pt-32 pb-32 flex flex-col gap-y-6">
        <p className="font-santral font-light text-sm leading-4">
          Book an Appointment
        </p>
        <h1 className="font-bold text-4xl">A Personalized Appointment</h1>
        <p className="text-sm leading-4">
          We’re happy to help with in-store or virtual appointments.
        </p>
        <div className="flex flex-row justify-center items-center gap-x-3">
          <p className=" font-santral font-light text-base leading-4">
            Book now{' '}
          </p>
          <ArrowRightIcon />
        </div>
      </div>
    </div>
  );
};

export default SecondHeroSection;

const ArrowRightIcon = () => {
  return (
    <>
      <svg
        width="7"
        height="12"
        viewBox="0 0 7 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 1L6 6L1 11"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
};
