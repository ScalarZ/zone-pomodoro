import { useState, useRef } from "react";

const useStore = () => {
  const [settings, setSettings] = useState(false);
  const [mode, setMode] = useState({
    pomodoro: true,
    shortBreak: false,
    longBreak: false,
  });
  const [selectedSound, setSelectedSound] = useState({
    rain: true,
    ocean: false,
    campfire: false,
  });
  const [isPlay, setIsPlay] = useState(false);
  const [playedSound, setPlayedSound] = useState(false);
  const [pomodoro, setPomodoro] = useState(25);
  const [shortBreak, setShortBreak] = useState(5);
  const [longBreak, setLongBreak] = useState(15);
  const [longBreakInterval, setLongBreakInterval] = useState(4);
  const [autoBreak, setAutoBreak] = useState(false);
  const [autoPomodoro, setAutoPomodoro] = useState(false);
  const [autoSwitch, setAutoSwitch] = useState(false);
  const [dots, setDots] = useState([]);
  const [time, setTime] = useState(25 * 60);
  let d = useRef(774);
  let alarm = useRef(null);
  let sound = useRef(null);

  return {
    settings,
    setSettings,
    mode,
    setMode,
    isPlay,
    setIsPlay,
    pomodoro,
    setPomodoro,
    shortBreak,
    setShortBreak,
    longBreak,
    setLongBreak,
    longBreakInterval,
    setLongBreakInterval,
    autoBreak,
    setAutoBreak,
    time,
    setTime,
    autoSwitch,
    setAutoSwitch,
    autoPomodoro,
    setAutoPomodoro,
    dots,
    setDots,
    selectedSound,
    setSelectedSound,
    playedSound,
    setPlayedSound,
    d,
    alarm,
    sound,
  };
};

export default useStore;
