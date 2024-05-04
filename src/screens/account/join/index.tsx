import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import Icons from '@icons/index';
import { useNavigate } from '@tanstack/react-router';

export const Landing = () => {
  const nav = useNavigate();

  return (
    <div className="tw-relative tw-h-screen tw-max-h-[1000px] tw-w-full tw-max-w-[1300px] tw-flex-shrink-0 tw-overflow-hidden tw-px-12 tw-pb-12 max-md:tw-px-1">
      Join
    </div>
  );
};
