import { useContext } from "react";
import Store from "../store/storeContext";
import Logo from "./Logo";
import SettingsIcon from "./SettingsIcon";
import Inputs from "./Settings/Inputs";
import AutoBreak from "./Settings/AutoBreak";
import AutoPomodoro from "./Settings/AutoPomodoro";
import LongBreakInterval from "./Settings/LongBreakInterval";
import Sounds from "./Settings/Sounds";

const Settings = () => {
  const { settings } = useContext(Store);
  return (
    <div
      className={`absolute p-4 h-full w-full ${
        !settings ? "top-full" : "top-0"
      } left-0 flex flex-col font-bold text-xl text-secondary bg-secondary z-50`}
    >
      <div className="mb-4 flex justify-between">
        <Logo color="#FF4444" />
        <SettingsIcon isOn={true} />
      </div>
      <div className="mx-auto mb-4 w-72 flex-grow flex flex-col justify-evenly">
        <div>
          <h1 className="mb-6 text-center">Time (min)</h1>
          <Inputs />
        </div>
        <div className="mt-4 space-y-8">
          <AutoBreak />
          <AutoPomodoro />
          <LongBreakInterval />
        </div>
        <div className="mt-10">
          <h1 className="mb-6 text-center">Sound Effects</h1>
          <Sounds />
        </div>
      </div>
    </div>
  );
};

export default Settings;
