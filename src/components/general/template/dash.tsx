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
      <div className="theme2 tw-bg-gradient3 tw-font-gotham tw-text-t1 tw-bg-b2 tw-flex tw-h-full tw-w-full tw-flex-col tw-items-center">
        <div className="tw-bg-gradient3 tw-flex tw-h-full tw-w-full tw-flex-col tw-items-center">
          <div className="tw-flex tw-w-full tw-grow tw-overflow-hidden">
            <div className="tw-flex tw-grow tw-flex-col">
              <Header />
              <div className="tw-z-10 tw-flex tw-w-full tw-grow tw-flex-col tw-items-center tw-overflow-y-auto">
                <div className="tw-border-br1 tw-relative tw-flex tw-h-fit tw-w-full tw-max-w-[1300px] tw-flex-col tw-items-center tw-border-l tw-border-r">
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
