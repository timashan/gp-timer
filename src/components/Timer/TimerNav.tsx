import { FC } from 'react';
import classes from './TimerNav.module.css';

const TimerNav: FC<{ onSetPanel: (panel: number) => void }> = (props) => {
  const { onSetPanel } = props;

  return (
    <nav className={classes.nav}>
      <button onClick={onSetPanel.bind(null, 1)}>Timers</button>
      <button onClick={onSetPanel.bind(null, 2)}>Add</button>
    </nav>
  );
};

export default TimerNav;
