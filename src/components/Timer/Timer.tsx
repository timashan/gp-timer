import { FC, useContext, useState } from 'react';
import TimerClock from './TimerClock';
import TimerControls from './TimerControls';
import classes from './Timer.module.css';
import TimerContext from '../../store/TimerContext';
import Timers from './Timers';
import TimerForm from './TimerForm';
import TimerNav from './TimerNav';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const animTimer = { enter: 300, exit: 0, appear: 300 };

const Timer: FC = (props) => {
  const [panel, setPanel] = useState(1);
  const timerCtx = useContext(TimerContext);
  const mainTimer = timerCtx.dates.find((date) => date.main);

  const setPanelHandler = (panel: number) => setPanel(panel);

  return (
    <div className={classes.timer}>
      <TimerClock timer={mainTimer || null} />

      <div className={classes.frame}>
        <TransitionGroup>
          {panel === 1 && (
            <CSSTransition timeout={animTimer} classNames="fade">
              <Timers timers={timerCtx.dates} />
            </CSSTransition>
          )}
          {panel === 2 && (
            <CSSTransition timeout={animTimer} classNames="fade">
              <TimerForm onSetPanel={setPanelHandler} />
            </CSSTransition>
          )}
        </TransitionGroup>
      </div>

      <TimerNav onSetPanel={setPanelHandler} />
    </div>
  );
};

export default Timer;
