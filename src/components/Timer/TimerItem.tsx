import { FC, useContext, useEffect, useRef } from 'react';
import useTimer from '../../hooks/use-timer';
import Timer from '../../models/Timer';
import classes from './TimerItem.module.css';
import { padStart, getRemainingTime } from '../../Helpers/time';
import TimerContext from '../../store/TimerContext';

const TimerItem: FC<{ timer: Timer }> = (props) => {
  const timerCtx = useContext(TimerContext);
  const barRef = useRef<HTMLDivElement>(null);
  const { completeTimer } = timerCtx;

  const {
    timer: { title, endTime, startTime, id, completed },
  } = props;

  const timer = useTimer(completed ? null : endTime);

  const { mon, days, hrs, mins, secs, daysRemain, done } =
    getRemainingTime(timer);

  const removeTimerHandler = () => timerCtx.removeTimer(id);

  const toggleMainHandler = () => timerCtx.setMain(id);

  let completedLen = '0px';
  if (barRef.current) {
    const perc = (1 - +timer / (+endTime - +startTime)) * 100;
    const barLen = barRef.current!.clientWidth;
    completedLen = barLen * (perc / 100) + 'px';
  }

  useEffect(() => {
    if (done) completeTimer(id);
  }, [done, id, completeTimer]);

  return (
    <div className={`${classes.timer} ${completed && classes.completed}`}>
      <h2>{title}</h2>
      <div className={classes['days-remain']}>
        <h1>{padStart(daysRemain)}</h1>
        <span>days more...</span>
      </div>
      <div className={classes.time}>
        <p className={classes.month}>{mon} Months</p>
        <p className={classes.date}>{days} Days</p>
        <p className={classes.hours}>{hrs} Hours</p>
        <p className={classes.minutes}>{mins} Min</p>
        <p className={classes.seconds}>{secs} Sec</p>
      </div>
      <div className={classes.actions}>
        <button onClick={removeTimerHandler}>Remove</button>
        <button onClick={toggleMainHandler}>Main</button>
      </div>
      <div className={classes.chart} ref={barRef}>
        <div
          className={classes['chart__completed']}
          style={{ width: completedLen }}
        ></div>
      </div>
    </div>
  );
};

export default TimerItem;
