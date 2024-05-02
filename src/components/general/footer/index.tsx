import React, { Dispatch, SetStateAction, useEffect } from 'react';

import Image from 'next/image';

interface Props {
  setIsError?: Dispatch<SetStateAction<boolean>>;
}

const Footer = (props: Props) => {
  return (
    <div className="tw-flex tw-h-fit tw-w-full tw-justify-center">
      <div className="tw-border-br1 tw-flex tw-h-fit tw-w-full tw-select-none tw-justify-between tw-border-b tw-border-t tw-border-[#1D8DFF] tw-bg-white tw-px-8 tw-py-6">
        <div className="tw-flex tw-w-full tw-items-center tw-justify-center tw-gap-6">
          <div className="tw-flex tw-w-fit tw-items-center tw-justify-center tw-gap-4 max-md:tw-items-start">
            <Image src={''} alt="" className="tw-aspect-square tw-w-[48px]"></Image>
            <div className="tw-flex tw-h-[48px] tw-flex-col tw-justify-evenly max-md:tw-h-fit max-md:tw-gap-4">
              {/*               <TitleSvg className="tw-h-5 tw-aspect-auto tw-w-fit tw-object-cover tw-fill-[#1D8DFF]" /> */}
              <div className="tw-flex tw-gap-4 tw-bg-white tw-text-xs max-md:tw-flex-col">
                <div>Disclaimer</div>
                <div>Privacy And GDPR Policy</div>
                <div>Terms And Conditions</div>
                <div>Cookies Policy</div>
              </div>
            </div>
          </div>
          <div className="tw-relative tw-flex tw-h-full tw-grow tw-overflow-hidden" />
          <Image src={''} alt="" className="tw-h-fit tw-w-[36px]"></Image>
        </div>
      </div>
    </div>
  );
};

export default Footer;
