import { useState, useEffect, useContext } from "react";
import Store from "../../store/storeContext";

const ProgressBar = () => {
  const [value, setValue] = useState(0);
  const [timer, setTimer] = useState({});
  const [counter, setCounter] = useState(0);
  const {
    isPlay,
    setIsPlay,
    mode,
    pomodoro,
    longBreak,
    shortBreak,
    autoBreak,
    autoPomodoro,
    setMode,
    time,
    setTime,
    d,
    autoSwitch,
    setAutoSwitch,
    setDots,
    longBreakInterval,
    alarm,
  } = useContext(Store);

  useEffect(() => {
    if (!isPlay || value) {
      clearInterval(timer);
      setValue(0);
    } else {
      const totalValue = 774;
      const unitValue = totalValue / time;
      const difference = d.current - unitValue;
      if (difference < 0) {
        alarm.current.play();
        if (difference < 0 && mode.pomodoro) {
          let list = [];
          for (let i = 0; i < longBreakInterval; i++) {
            if (i <= counter) {
              list = [...list, 1];
            } else {
              list = [...list, 0];
            }
          }
          setDots(list);
          if (counter < longBreakInterval) {
            setCounter(counter + 1);
          }
        }

        if (autoBreak && !mode.shortBreak && !mode.longBreak) {
          if (counter >= longBreakInterval - 1) {
            const LongBreakMode = {
              pomodoro: false,
              shortBreak: false,
              longBreak: true,
            };
            setMode(LongBreakMode);
          } else {
            const shortBreakMode = {
              pomodoro: false,
              shortBreak: true,
              longBreak: false,
            };
            setMode(shortBreakMode);
          }
          setValue(1);
        } else if (autoPomodoro && !mode.pomodoro) {
          const pomodoroMode = {
            pomodoro: true,
            shortBreak: false,
            longBreak: false,
          };
          setMode(pomodoroMode);
          setValue(1);
        } else {
          clearInterval(timer);
          d.current = 774;
          setIsPlay(false);
        }

        if (difference < 0 && mode.longBreak && counter >= longBreakInterval) {
          let list = [];
          for (let i = 0; i < longBreakInterval; i++) {
            list = [...list, 0];
          }
          setDots(list);
          setCounter(0);
        }
      } else {
        setTimer(
          setInterval(() => {
            setValue(1);
            d.current = difference.toFixed(2);
          }, 1000)
        );
      }
    }
  }, [isPlay, value]);

  useEffect(() => {
    d.current = 774;

    if ((!autoBreak && !autoPomodoro) || autoSwitch) {
      clearInterval(timer);
      setValue(0);
      setIsPlay(false);
      setAutoSwitch(false);
    }

    if (mode.pomodoro) {
      setTime(pomodoro * 60);
    } else if (mode.shortBreak) {
      setTime(shortBreak * 60);
    } else {
      setTime(longBreak * 60);
    }
  }, [mode]);

  return (
    <svg
      viewBox="0 0 250 250"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full"
      className="transfrom -rotate-90"
    >
      <circle
        id="circle"
        cx="125"
        cy="125"
        r="123"
        fill="none"
        stroke="#F3EED9"
        strokeWidth="10px"
        strokeDasharray="774"
        strokeDashoffset={d.current}
      />
    </svg>
  );
};

export default ProgressBar;
