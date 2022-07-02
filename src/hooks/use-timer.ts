import { useEffect, useState } from 'react';

const useTimer = (endTime: Date | null) => {
  const [timer, setTimer] = useState<Date>(new Date(1500));

  useEffect(() => {
    if (!endTime) return;

    const interval = setInterval(() => {
      const difference = +endTime - +new Date();
      setTimer(new Date(difference));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [endTime]);

  return timer;
};

export default useTimer;
