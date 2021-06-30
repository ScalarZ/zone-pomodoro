import Image from "next/image";
import { useContext } from "react";
import Store from "../../store/storeContext";

const ShortBreak = () => {
  const {
    mode: { shortBreak },
    setMode,
    setAutoSwitch,
  } = useContext(Store);

  const changeMode = () => {
    const shortBreakMode = {
      pomodoro: false,
      shortBreak: true,
      longBreak: false,
    };
    setMode(shortBreakMode);
    setAutoSwitch(true);
  };
  return (
    <i className="flex cursor-pointer" onClick={changeMode}>
      <Image
        src={shortBreak ? "/whiteCoffe.svg" : "/coffe.svg"}
        height="40"
        width="40"
      />
    </i>
  );
};

export default ShortBreak;
