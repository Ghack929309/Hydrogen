import React from 'react';
import {Image} from '@shopify/hydrogen';

import engagement from '../../assets/images/engagement.png';
import loveEngagement from '../../assets/images/love-engagement.png';
import { ArrowRightIcon } from './Icons';
const Engagement = () => {
  return (
    <div className="engagement-container ">
      <div className="engagement-eng flex flex-col">
        <div>
          <Image
            src={engagement}
            width="950"
            height="500"
            alt="engagement-rings"
          />
        </div>

        <div className="engagement-sub flex flex-col gap-y-8 pt-10 pb-10">
          <p className="font-santral font-light text-sm leading-4">
            Engagement Rings
          </p>
          <h1 className="font-bold text-4xl pl-10 pr-10">Engagement Rings</h1>
          <a href="#" alt="explore-engagement-rings">
            <div className="flex flex-row justify-center items-center gap-x-3">
              <p className="font-santral font-light text-base leading-4">
                Explore Engagement Rings
              </p>
              <ArrowRightIcon />
            </div>
          </a>
        </div>
      </div>
      <div className="engagement-love">
        <div>
          <Image
            src={loveEngagement}
            width="950"
            height="500"
            alt="engagement-rings"
          />
        </div>

        <div className="engagement-sub flex flex-col gap-y-8 pt-10 pb-10">
          <p className="font-santral font-light text-sm leading-4">
            BIXLERS™ Love <span>&#38;</span> Engagement
          </p>
          <h1 className="font-bold text-4xl pl-10 pr-10">
            Love <span>&#38;</span> Engagement
          </h1>
          <a href="#" alt="explore-love-and-engagement">
            <div className="flex flex-row justify-center items-center gap-x-3">
              <p className="font-santral font-light text-base leading-4">
                Explore Love <span>&#38;</span> Engagement
              </p>
              <ArrowRightIcon />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Engagement;