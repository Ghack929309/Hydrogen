import React from 'react';
import {Image} from '@shopify/hydrogen';

// import {LongLeftArrowIcon, LongRightArrowIcon} from './Icons';
import diamondRing from '../../assets/images/diamond-ring.png';

const RingSection = () => {
  return (
    <div className="bg-snow h-screen  xl:p-24 lg:p-16 md:p-14 sm-max:p-10 relative text-center ">
      {/* <div className="w-4/6 relative mr-auto ml-auto z-0 inline-block">
        <Image
          src={diamondRing}
          width="100%"
          height="auto"
          alt="diamond-ring"
        />
      </div> */}

      {/* <div className='ring-section-bg border-red h-full'></div> */}

      <div className="h-full flex xl:flex-row xl:gap-x-96 absolute left-10 right-10 top-10 bottom-20  justify-center items-top text-center  border-red ">
        <div className="z-10 flex flex-row pt-48 mr-6 h-fit border-red ">
          <div className="flex flex-col justify-center ">
            <h1 className="font-bold text-4xl xl:pr-10 ">Renewable Energy</h1>
            <h1 className="big-text">99%</h1>
            <p className="text-sm leading-4 xl:max-w-sm sm:max-w-sm">
              Our newly mind gold is traceable to responsible sources that
              support communities dependent on the industry.
            </p>
          </div>
          <LongLeftArrowIcon />
        </div>
        <div className="z-0 absolute w-7/12 pt-10 ml-6">
          <Image
            className="object-cover"
            src={diamondRing}
            width={900}
            height={900}
            alt="diamond-ring"
          />
          {/* <img src={diamondRing} width="100%"/> */}
        </div>
        <div className="z-10 flex flex-row pt-48 ml-6 h-fit border-red ">
          <LongRightArrowIcon />
          <div className="flex flex-col">
            <h1 className="font-bold text-4xl xl:pr-10 ">Recycled Metal</h1>
            <h1 className="big-text">100%</h1>
            <p className="text-sm leading-4 xl:max-w-xs  sm:max-w-sm">
              We work with certified recycling partners to verify this gold is
              made from post consumer waste.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RingSection;

const LongRightArrowIcon = () => {
  return (
    <svg
      width="94"
      height="135"
      viewBox="0 0 94 135"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 8H0V7H1V8ZM93.7071 7.29289C94.0976 7.68342 94.0976 8.31658 93.7071 8.70711L87.3431 15.0711C86.9526 15.4616 86.3195 15.4616 85.9289 15.0711C85.5384 14.6805 85.5384 14.0474 85.9289 13.6569L91.5858 8L85.9289 2.34315C85.5384 1.95262 85.5384 1.31946 85.9289 0.928932C86.3195 0.538408 86.9526 0.538408 87.3431 0.928932L93.7071 7.29289ZM0 135V8H2V135H0ZM1 7H93V9H1V7Z"
        fill="#091E40"
      />
    </svg>
  );
};

const LongLeftArrowIcon = () => {
  return (
    <svg
      width="94"
      height="135"
      viewBox="0 0 94 135"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M93 8H94V7H93V8ZM0.292893 7.29289C-0.0976311 7.68342 -0.0976311 8.31658 0.292893 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292893 7.29289ZM94 135V8H92V135H94ZM93 7H1V9H93V7Z"
        fill="#091E40"
      />
    </svg>
  );
};
