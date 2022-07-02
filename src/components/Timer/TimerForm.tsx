import { FC, FormEvent, useContext, useRef } from 'react';
import TimerContext from '../../store/TimerContext';
import Timer from '../../models/Timer';
import classes from './TimerForm.module.css';

const TimerForm: FC<{ onSetPanel: (panel: number) => void }> = (props) => {
  const timerCtx = useContext(TimerContext);
  const { addTimer } = timerCtx;
  const { onSetPanel } = props;

  const dateRef = useRef<HTMLInputElement>(null);
  const titleRef = useRef<HTMLInputElement>(null);
  const timeRef = useRef<HTMLInputElement>(null);
  const descRef = useRef<HTMLTextAreaElement>(null);

  const formSubmitHandler = (e: FormEvent) => {
    e.preventDefault();

    const date = dateRef.current!.value;
    const title = titleRef.current!.value || 'UNKNOWN';
    let time: string | string[] = timeRef.current!.value;
    const desc = descRef.current!.value;

    if (!date) return;

    const endTime = new Date(date);
    if (time) {
      time = time.split(':');
      endTime.setHours(+time[0], +time[1]);
    }

    const obj: Timer = {
      id: Math.random().toString(),
      title,
      endTime,
      startTime: new Date(),
      main: false,
      desc,
      completed: false,
    };

    addTimer(obj);
    onSetPanel(1);
  };

  return (
    <div className={classes['form-container']}>
      <form onSubmit={formSubmitHandler} className={classes.form}>
        <div className={classes.control}>
          <label>Title</label>
          <input type="text" ref={titleRef} />
        </div>
        <div className={classes.control}>
          <label>End Date</label>
          <input
            type="date"
            ref={dateRef}
            min={new Date().toISOString().split('T')[0]}
          />
        </div>
        <div className={classes.control}>
          <label>Time</label>
          <input type="time" ref={timeRef} />
        </div>
        <div className={classes.control}>
          <label>Description</label>
          <textarea ref={descRef} />
        </div>
        <button>Add</button>
      </form>
    </div>
  );
};

export default TimerForm;
