import {
  createContext,
  FC,
  PropsWithChildren,
  useCallback,
  useState,
} from 'react';
import Timer from '../models/Timer';

type TimerContextObj = {
  dates: Timer[];
  addTimer: (Timer: Timer) => void;
  removeTimer: (id: string) => void;
  completeTimer: (id: string) => void;
  setMain: (id: string) => void;
};

const TimerContext = createContext<TimerContextObj>({
  dates: [],
  addTimer: (Timer: Timer) => {},
  removeTimer: (id: string) => {},
  completeTimer: (id: string) => {},
  setMain: (id: string) => {},
});
export default TimerContext;

const getPerssistedData = () => {
  const data = localStorage.getItem('timers');
  const convData: Timer[] = data
    ? JSON.parse(data)
    : [
        {
          id: 'm1',
          title: 'AL',
          endTime: '2022-10-14',
          main: true,
          completed: false,
          desc: 'u better pass',
          startTime: new Date(),
        },
      ];
  convData.forEach((timer) => {
    timer.endTime = new Date(timer.endTime);
    timer.startTime = new Date(timer.startTime);
  });
  return convData;
};

const setPerssistData = (Timers: Timer[]) =>
  localStorage.setItem('timers', JSON.stringify(Timers));

export const TimerContextProvider: FC<PropsWithChildren> = (props) => {
  const [timers, setTimers] = useState<Timer[]>(getPerssistedData());

  const contextValue: TimerContextObj = {
    dates: timers,
    addTimer: (Timer: Timer) =>
      setTimers((prevState) => {
        const updatedState = [...prevState, Timer];
        setPerssistData(updatedState);
        return updatedState;
      }),

    removeTimer: (id: string) =>
      setTimers((prevState) => {
        const updatedState = prevState.filter((timer) => timer.id !== id);
        setPerssistData(updatedState);
        return updatedState;
      }),

    completeTimer: useCallback(
      (id: string) =>
        setTimers((prevState) => {
          const updatedState = [...prevState];
          const timer = updatedState.find((timer) => timer.id === id);
          timer!.completed = true;
          setPerssistData(updatedState);
          return updatedState;
        }),
      []
    ),

    setMain: (id: string) => {
      setTimers((prevState) => {
        const updatedState = [...prevState];
        updatedState.forEach((timer) => (timer.main = false));
        const timer = updatedState.find((timer) => timer.id === id);

        timer!.main = true;
        setPerssistData(updatedState);
        return updatedState;
      });
    },
  };

  return (
    <TimerContext.Provider value={contextValue}>
      {props.children}
    </TimerContext.Provider>
  );
};
