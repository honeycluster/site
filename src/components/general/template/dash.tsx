import React, { ReactNode } from 'react';

import Header from '@components/general/header';

import Theme from '../theme';
import Footer from '../footer';

interface Props {
  children: JSX.Element | JSX.Element[] | ReactNode;
}

const Dash = ({ children }: Props) => {
  return (
    <Theme>
      <div className="tw-flex tw-h-full tw-w-full tw-flex-col tw-items-center tw-bg-b1 tw-font-gotham tw-text-t1">
        <div className="tw-flex tw-h-full tw-w-full tw-flex-col tw-items-center">
          <div className="tw-flex tw-w-full tw-grow tw-overflow-hidden">
            <div className="tw-flex tw-grow tw-flex-col">
              <Header />
              <div className="tw-z-10 tw-flex tw-w-full tw-grow tw-flex-col tw-items-center tw-overflow-y-auto">
                <div className="tw-relative tw-flex tw-h-fit tw-w-full tw-max-w-[1300px] tw-flex-col tw-items-center tw-border-l tw-border-r tw-border-br1 max-md:tw-border-none">
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
