import { useCallback, useLayoutEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  scroll: PropTypes.number,
};
const getScroll = () => {
  return {
    x: typeof window === 'undefined' ? 0 : window.pageXOffset || window.scrollX,
    y:
      typeof window === 'undefined'
        ? 0
        : window.pageYOffset || document.documentElement.scrollTop,
  };
};

export const useAimScrollPosition = () => {
  const [scrollPosition, setPosition] = useState(getScroll());

  const scrollWindow = useCallback(() => {
    setPosition(getScroll());
  }, []);

  useLayoutEffect(() => {
    window.addEventListener('scroll', scrollWindow);

    return function cleanupListener() {
      window.removeEventListener('scroll', scrollWindow);
    };
  }, []);

  return scrollPosition;
};

const useScroll = (scrollStart, scrollEnd) => {
  // Check if we have a scrollStart and its a number
  if (!scrollStart && typeof scrollStart === 'number')
    throw new Error('aimScroll needs to have a start value');

  const [isScroll, setScroll] = useState(false);

  const scrollWindow = useCallback(() => {
    if (scrollStart && !scrollEnd) {
      return document.body.scrollTop >= scrollStart ||
        document.documentElement.scrollTop >= scrollStart
        ? setScroll(true)
        : setScroll(false);
    }

    if (scrollStart && scrollEnd) {
      // eslint-disable-next-line no-bitwise
      return (document.documentElement.scrollTop > scrollStart) &
        (document.documentElement.scrollTop <= scrollEnd)
        ? setScroll(true)
        : setScroll(false);
    }
  }, []);

  useMemo(() => {
    process?.browser && window?.addEventListener('scroll', scrollWindow);

    return function cleanupListener() {
      process?.browser && window?.removeEventListener('scroll', scrollWindow);
    };
  }, []);

  return [isScroll, setScroll];
};

export const useScrollX = () => {
  const { x } = useAimScrollPosition();
  return x;
};
export const useScrollY = () => {
  const { y } = useAimScrollPosition();
  return y;
};

useScroll.propTypes = propTypes;
export default useScroll;
