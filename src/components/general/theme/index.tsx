import React, { useEffect, useState } from 'react';

interface Props {
  children?: React.ReactNode;
}

const Theme = ({ children }: Props) => {
  return (
    <div
      className={`${'theme2'} tw-transition-colors tw-duration-500 h-screen tw-w-screen`}>
      {children}
    </div>
  );
};

export default Theme;
