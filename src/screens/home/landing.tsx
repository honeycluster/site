import React, { useEffect, useState } from 'react';
import Image from 'next/image';

//import HoneycombVideo from 'src/components/general/assets/video/webm/honeycomb-video-trimmed.webm';
import HoneycombVideo from 'src/components/general/assets/video/webm/honeycluster-comp-trimmed-720.webm';
import HoneycombStill from 'src/components/general/assets/images/png/honeycomb-still.png';

import { useNavigate } from '@tanstack/react-router';
import { sleep } from '@/lib/helpers/sleep';

import Flicker from '@components/general/animation/flicker';

const words = [
  'hive',
  'cluster',
  'infra',
  'nodes',
  'swarm',
  'bees',
  'provider',
  'zzzzzz',
  'honey',
  'data',
  'api',
];

const letterPause = 300;
const wordPause = 3000;

export const Landing = () => {
  const nav = useNavigate();

  const [init, setInit] = useState(false);

  const [wordIndex, setWordIndex] = useState(0);
  const [word, setWord] = useState(words[wordIndex]);
  const [blinker, setBlinker] = useState(false);

  const shorten = async () => {
    let currentWord = words[wordIndex];
    let length = currentWord?.length;

    await sleep(wordPause);

    setBlinker(true);
    let trim = length;

    // shorten word
    while (true) {
      setWord((prev) => prev?.slice(0, trim));

      await sleep(letterPause);
      if (trim == 0) break;
      if (trim && trim > 0) --trim;
    }

    return setWordIndex((prev) => {
      if (words.length - 1 === wordIndex) return 0;
      return ++prev;
    });
  };

  const elongate = async () => {
    await sleep(letterPause * 3);

    let currentWord = words[wordIndex];
    let length = currentWord?.length;
    let trim = 1;

    // elongate new word
    while (true) {
      setWord(currentWord?.slice(0, trim));

      await sleep(letterPause);
      if (trim == length) break;
      if (trim && trim > 0) ++trim;
    }

    return shorten();
  };

  useEffect(() => {
    if (!init) {
      setInit(true);
      shorten();
    }
    if (init) elongate();
  }, [wordIndex]);

  return (
    <div className="h-screen tw-relative tw-flex tw-max-h-[1000px] tw-w-full tw-flex-shrink-0 tw-flex-col tw-overflow-hidden">
      <Image
        priority
        src={HoneycombStill}
        alt=""
        className="tw-absolute tw-left-0 tw-top-0 tw-z-0 tw-h-full tw-w-full tw-object-cover max-md:tw-w-[175%]"
      />

      <video
        autoPlay
        loop
        muted
        className="tw-absolute tw-left-0 tw-top-0 tw-z-0 tw-h-full tw-w-full tw-object-cover max-md:tw-w-[175%]">
        <source src={HoneycombVideo} type="video/webm" />
        Your browser does not support the video tag.
      </video>

      <div className="tw-absolute tw-left-0 tw-top-0 tw-z-0 tw-h-full tw-w-full tw-bg-gradient-to-r tw-from-b1 tw-via-[#000000dc] tw-to-transparent tw-object-cover max-md:tw-w-[150%] max-md:tw-from-[#000000fd] max-md:tw-via-[#000000c8]"></div>

      <div className="tw-relative tw-flex tw-w-full tw-grow tw-flex-col tw-items-start tw-justify-start tw-gap-6 tw-px-24 tw-pb-12 tw-pt-[70px] max-md:tw-items-center max-md:tw-px-3">
        <div className="tw-flex tw-h-full tw-flex-col tw-items-start tw-justify-center tw-gap-10">
          <div className="tw-flex tw-h-fit tw-w-full tw-flex-col tw-gap-10 tw-text-3xl tw-font-semibold tw-text-t1 tw-drop-shadow max-sm:tw-text-base">
            <div className="tw-flex tw-flex-col tw-text-3xl max-md:tw-items-center">
              <div className="tw-font-light tw-capitalize tw-leading-none max-sm:tw-text-2xl">
                the
              </div>
              <div className="tw-flex tw-min-h-[128px] tw-w-full max-md:tw-min-h-[96px] max-md:tw-items-center max-md:tw-justify-center max-sm:tw-min-h-[72px]">
                <div
                  className={`${word && 'tw-mr-[3px]'} tw-text-9xl tw-font-bold tw-capitalize tw-leading-none tw-text-b2 max-md:tw-text-center max-md:tw-text-8xl max-sm:tw-text-7xl`}>
                  {word}
                </div>
                {blinker && <Flicker className="tw-h-full tw-border-l tw-border-b2"></Flicker>}
              </div>
            </div>
            <div className="tw-flex tw-flex-col tw-text-3xl max-md:tw-items-center">
              <div className="tw-font-light tw-leading-none max-sm:tw-text-2xl">of the</div>
              <div className="tw-text-6xl tw-font-bold tw-capitalize tw-leading-none tw-text-b2 max-md:tw-items-center max-md:tw-text-center max-md:tw-text-5xl max-sm:tw-text-4xl">
                XRP ledger
              </div>
            </div>
          </div>
          <div className="tw-flex tw-w-full tw-gap-4 tw-text-base tw-font-normal max-md:tw-justify-center">
            <button
              className="tw-flex tw-h-full tw-w-fit tw-flex-shrink-0 tw-items-center tw-justify-center tw-gap-4 tw-overflow-hidden tw-whitespace-nowrap tw-rounded-full tw-border tw-border-br1 tw-bg-t1 tw-stroke-t2 tw-p-1 tw-px-6 tw-tracking-widest tw-text-b1 hover:tw-cursor-pointer hover:tw-bg-b2 hover:tw-text-t1 max-sm:tw-px-4 max-sm:tw-py-2 max-sm:tw-text-xs"
              onClick={() => nav({ to: '/learn' })}>
              Learn More
            </button>
            <button
              className="tw-flex tw-h-full tw-w-fit tw-flex-shrink-0 tw-items-center tw-justify-center tw-gap-4 tw-overflow-hidden tw-whitespace-nowrap tw-rounded-full tw-border tw-border-br1 tw-bg-t1 tw-stroke-t2 tw-p-1 tw-px-6 tw-tracking-widest tw-text-b1 hover:tw-cursor-pointer hover:tw-bg-b2 hover:tw-text-t1 max-sm:tw-px-4 max-sm:tw-py-2 max-sm:tw-text-xs"
              onClick={() => nav({ to: '/gettingStarted' })}>
              Start Building
            </button>
          </div>
        </div>
      </div>

      <div className="tw-relative tw-flex tw-h-fit tw-min-h-[70px] tw-w-full tw-flex-shrink-0 tw-items-center tw-justify-center tw-gap-3 tw-bg-b2 tw-px-4 max-md:tw-flex-col max-md:tw-p-3">
        {/*         <Icons.ChevronDownDouble className="tw-h-3/4 tw-w-fit tw-stroke-b1 tw-stroke-1 tw-flex-shrink-0" /> */}
        <div className="tw-flex tw-grow tw-flex-col tw-overflow-hidden tw-text-b1">
          <div className="tw-text-md tw-font-bold max-md:tw-text-center">
            Enterprise infrastructure and data provider for blockchain
          </div>
          <div className="tw-text-sm tw-font-light max-md:tw-text-center">
            Node clusters, data backups, api endpoints
          </div>
        </div>
        <div className="tw-flex tw-items-center tw-justify-center tw-gap-2 tw-rounded-full tw-bg-b1 tw-p-1 tw-px-4">
          <div className="tw-text-center tw-align-bottom tw-text-xs tw-font-medium">
            in development
          </div>
          <div className="tw-h-2 tw-w-2 tw-rounded-full tw-bg-blue-400"></div>
        </div>
      </div>
    </div>
  );
};
