import React, { ReactNode, useState } from 'react';

import Header from '@components/general/header';

import Theme from '../theme';
import Footer from '../footer';

interface Props {
  children: JSX.Element | JSX.Element[] | ReactNode;
}

const Dash = ({ children }: Props) => {
  const [headerOpacity, setHeaderOpacity] = useState(false);

  const handleScroll = (e: any) => {
    setHeaderOpacity(e.target.scrollTop !== 0);
  };

  return (
    <Theme>
      <div className="tw-flex tw-h-full tw-w-full tw-flex-col tw-items-center tw-bg-b1 tw-font-gotham tw-text-t1">
        <div className="tw-flex tw-h-full tw-w-full tw-flex-col tw-items-center">
          <div className="tw-flex tw-w-full tw-grow tw-overflow-hidden">
            <div className="tw-flex tw-grow tw-flex-col">
              <Header opacity={headerOpacity} />
              <div
                className="tw-z-10 tw-flex tw-w-full tw-grow tw-flex-col tw-items-center tw-overflow-y-auto"
                onScroll={handleScroll}>
                <div className="tw-relative tw-flex tw-h-fit tw-w-full tw-max-w-[2000px] tw-flex-col tw-items-center tw-border-l tw-border-r tw-border-br1 max-md:tw-border-none">
                  {children}
                  <Footer />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Theme>
  );
};

export default Dash;
