export const padStart = (val: number) =>
  (Math.floor(val).toFixed(0) + '').padStart(2, '0');

export const getRemainingTime = (timer: Date) => {
  const mon = padStart(timer.getTime() / 1000 / 60 / 60 / 24 / 30);
  const days = padStart((timer.getTime() / 1000 / 60 / 60 / 24) % 30);
  const hrs = padStart((timer.getTime() / 1000 / 60 / 60) % 24);
  const mins = padStart((timer.getTime() / 1000 / 60) % 60);
  const secs = padStart((timer.getTime() / 1000) % 60);

  const daysRemain = timer.getTime() / 1000 / 60 / 60 / 24;

  const done = timer.getTime() < 800 ? true : false;
  return { mon, days, hrs, mins, secs, daysRemain, done };
};
