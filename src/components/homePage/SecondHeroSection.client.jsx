import React from 'react';
import {Image} from '@shopify/hydrogen';
import rotaryPhone1 from '../../assets/images/rotary-phone1.png';
import rotaryPhone2 from '../../assets/images/rotary-Phone2.png';
import { ArrowRightIcon } from './Icons';

const SecondHeroSection = () => {
  return (
    <div className="w-full">
      <div className="phone-image  w-full ">
        <div className="rotary-phone1">
          <Image
            src={rotaryPhone1}
            width="100%"
            height="auto"
            alt="rotary-phone"
            className=" w-full h-86 "
          />
        </div>
        <div className="rotary-phone2">
          <Image
            src={rotaryPhone2}
            width="100%"
            height="auto"
            alt="rotary-phone"
            className=" w-full h-86 "
          />
        </div>
      </div>

      <div className="book-appointment pt-32 pb-32 flex flex-col gap-y-6 w-full">
        <p className="font-santral font-light text-sm leading-4">
          Book an Appointment
        </p>
        <h1 className="font-bold text-4xl pl-10 pr-10">
          A Personalized Appointment
        </h1>
        <p className="text-sm leading-4 pl-10 pr-10">
          We’re happy to help with in-store or virtual appointments.
        </p>
        <a href="#" alt="book-now">
          <div className="flex flex-row justify-center items-center gap-x-3">
            <p className=" font-santral font-light text-base leading-4">
              Book now{' '}
            </p>
            <ArrowRightIcon />
          </div>
        </a>
      </div>
    </div>
  );
};

export default SecondHeroSection;
