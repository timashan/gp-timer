import { FC } from 'react';
import Timer from '../../models/Timer';
import TimerItem from './TimerItem';
import classes from './Timers.module.css';

const Timers: FC<{ timers: Timer[] }> = (props) => {
  const { timers } = props;

  return (
    <div className={classes.timers}>
      {timers.map((timer) => (
        <TimerItem key={timer.id} timer={timer} />
      ))}
    </div>
  );
};

export default Timers;
