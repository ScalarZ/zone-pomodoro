import Image from "next/image";
import { useContext } from "react";
import Store from "../../store/storeContext";

const LongBreak = () => {
  const {
    mode: { longBreak },
    setMode,
    setAutoSwitch,
  } = useContext(Store);

  const changeMode = () => {
    const longBreakMode = {
      pomodoro: false,
      shortBreak: false,
      longBreak: true,
    };
    setMode(longBreakMode);
    setAutoSwitch(true);
  };
  return (
    <i className="flex cursor-pointer" onClick={changeMode}>
      <Image
        src={longBreak ? "/whiteSmartPhone.svg" : "/smartPhone.svg"}
        height="40"
        width="40"
      />
    </i>
  );
};

export default LongBreak;
