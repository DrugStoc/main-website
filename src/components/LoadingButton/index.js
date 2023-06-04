import React, { useEffect, useState } from 'react';
import loadingStyles from '../../../public/buttonLoading.module.css';

const LoadingButton = () => {
  const [dotColor, setDotColor] = useState(loadingStyles.gray);

  useEffect(() => {
    const interval = setInterval(() => {
      setDotColor(prevColor =>
        prevColor === loadingStyles.gray
          ? loadingStyles.white
          : loadingStyles.gray
      );
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={loadingStyles['loading-dots']}>
      <span
        className={`${loadingStyles.dot} ${loadingStyles['dot-1']} ${dotColor}`}
      ></span>
      <span
        className={`${loadingStyles.dot} ${loadingStyles['dot-2']} ${dotColor}`}
      ></span>
      <span
        className={`${loadingStyles.dot} ${loadingStyles['dot-3']} ${dotColor}`}
      ></span>
    </div>
  );
};

export default LoadingButton;
