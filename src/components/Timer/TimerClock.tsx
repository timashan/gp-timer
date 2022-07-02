import { FC } from 'react';
import useTimer from '../../hooks/use-timer';
import classes from './TimerClock.module.css';
import { padStart, getRemainingTime } from '../../Helpers/time';
import Timer from '../../models/Timer';

const TimerClock: FC<{ timer: Timer | null }> = (props) => {
  const { timer } = props;
  const timerVal = useTimer(timer?.completed ? null : timer?.endTime || null);

  const { mon, days, hrs, mins, secs, daysRemain } = getRemainingTime(timerVal);

  return (
    <div>
      <div
        className={`${classes.clock} ${
          timer?.endTime && !timer?.completed && classes.glow
        }`}
      >
        <h1 className={classes.month}>{mon} Months</h1>
        <h1 className={classes.date}>{days} Days</h1>
        <h1 className={classes.hours}>{hrs} Hours</h1>
        <h1 className={classes.minutes}>{mins} Min</h1>
        <h1 className={classes.seconds}>{secs} Sec</h1>
        <p>more...</p>
      </div>
      <div className={classes['days-left']}>
        <h1>{padStart(daysRemain)} </h1>
        <p>Days Left</p>
      </div>
    </div>
  );
};

export default TimerClock;
