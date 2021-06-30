import Image from "next/image";
import { useContext } from "react";
import Store from "../store/storeContext";

const SettingsIcon = ({ isOn }) => {
  const {
    settings,
    setSettings,
    pomodoro,
    shortBreak,
    longBreak,
    longBreakInterval,
    isPlay,
  } = useContext(Store);
  return (
    <i
      className={`cursor-pointer ${!isPlay ? "flex" : "hidden"}`}
      onClick={() =>
        pomodoro &&
        Number(pomodoro) &&
        shortBreak &&
        Number(shortBreak) &&
        longBreak &&
        Number(longBreak) &&
        longBreakInterval &&
        Number(longBreakInterval) &&
        setSettings(!settings)
      }
    >
      <Image
        src={!isOn ? "/settingsOff.svg" : "/settingsOn.svg"}
        height="30"
        width="30"
        className="object-fill"
      />
    </i>
  );
};

export default SettingsIcon;
