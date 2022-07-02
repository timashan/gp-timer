import { FC } from 'react';
import classes from './TimerControls.module.css';

const TimerControls: FC = () => {
  return (
    <>
      <div className={classes.controls}>
        <form>
          <div className={classes.control}>
            <label>Start Date</label>
            <input type="date" />
          </div>
          <div className={classes.control}>
            <label>End Date</label>
            <input type="date" />
          </div>
        </form>
      </div>
    </>
  );
};

export default TimerControls;
