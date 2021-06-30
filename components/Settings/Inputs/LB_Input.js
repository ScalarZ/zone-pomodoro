import Image from "next/image";
import { useContext } from "react";
import Store from "../../../store/storeContext";

const LB_Input = () => {
  const { longBreak, setLongBreak, setTime, mode, d, setIsPlay } =
    useContext(Store);

  return (
    <div className="flex flex-col items-center">
      <i className="flex">
        <Image src="/redSmartPhone.svg" height="40" width="40" />
      </i>
      <input
        type="number"
        value={longBreak}
        className="mt-4 pl-2 py-1 w-16 bg-input rounded font-bold text-base text-secondary text-center"
        onChange={(e) => {
          if (mode.longBreak) {
            d.current = 774;
            setIsPlay(false);
            setTime(Number(e.target.value) * 60);
          }
          setLongBreak(e.target.value);
        }}
      />
    </div>
  );
};

export default LB_Input;
