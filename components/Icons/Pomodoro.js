import Image from "next/image";
import { useContext } from "react";
import Store from "../../store/storeContext";

const Pomodoro = () => {
  const {
    mode: { pomodoro },
    setMode,
    setAutoSwitch,
  } = useContext(Store);

  const changeMode = () => {
    const pomodoroMode = {
      pomodoro: true,
      shortBreak: false,
      longBreak: false,
    };
    setMode(pomodoroMode);
    setAutoSwitch(true);
  };
  return (
    <i className="flex cursor-pointer" onClick={changeMode}>
      <Image
        src={pomodoro ? "/whitePomodoro.svg" : "/pomodoro.svg"}
        height="40"
        width="40"
      />
    </i>
  );
};

export default Pomodoro;
