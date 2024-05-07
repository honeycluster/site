import React, { ReactNode, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const overlay = {
  initial: { opacity: '0%' },
  animate: { opacity: '100%' },
  exit: {
    opacity: '0%',
    transition: { delay: 0, duration: 0.5 },
  },
  transition: {
    delay: 0,
    duration: 0.3,
  },
};

interface Props {
  children?: JSX.Element | JSX.Element[] | ReactNode;
  className?: string;
  onClick?: () => void;
}
const Overlay = (props: Props) => {
  return (
    <motion.div {...overlay} {...props}>
      {props.children}
    </motion.div>
  );
};

export default Overlay;
