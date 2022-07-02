import { FC } from 'react';
import useTimer from '../../hooks/use-timer';
import classes from './TimerClock.module.css';
import { padStart, getRemainingTime } from '../../Helpers/time';

const TimerClock: FC<{ date: Date | null }> = (props) => {
  const { date: endTime } = props;

  const timer = useTimer(endTime);

  const { mon, days, hrs, mins, secs, daysRemain } = getRemainingTime(timer);

  return (
    <div>
      <div className={`${classes.clock} ${endTime && classes.glow}`}>
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
