import React from 'react';
import {Image} from '@shopify/hydrogen';
import madeInAmerica from '../../assets/images/made-in-america.png';
import {ArrowRightIcon} from './Icons';

const MadeInAmerica = () => {
  return (
    <div className="flex xl:flex-row md: xl:gap-x-32 lg:gap-x-20 md:flex-row sm:flex-col sm-max:flex-col justify-center items-center xl:p-24 lg:p-16 md:p-14 sm-max:p-10 ">
      <div>
        <Image
          src={madeInAmerica}
          width="100%"
          height="auto"
          alt="made-in-america-image"
        />
      </div>
      <div className="flex flex-col gap-y-4 xl:text-left lg:text-left md:text-center text-center">
        <p className="font-santral font-light text-sm leading-4">
          Bixlers™ Lifetime Warranty
        </p>
        <h1 className="font-bold text-4xl xl:pr-10 ">Made in North America</h1>
        <p className="text-sm leading-4 xl:max-w-lg sm:max-w-sm">
          We work with expert jewelers who use high-quality and enduring
          materials, from precious metals - such as recycled and resposibly
          mined gold - to technically sourced diamonds and AAA-grade gemstones.
        </p>
        <a href="#" alt="know-more">
          <div className="flex flex-row xl:justify-start sm:justify-center sm-max:justify-center items-center gap-x-3">
            <p className=" font-santral font-light text-base leading-4">
              Know more{' '}
            </p>
            <ArrowRightIcon />
          </div>
        </a>
      </div>
    </div>
  );
};

export default MadeInAmerica;
