import { useContext } from "react";
import Store from "../store/storeContext";
import ProgressBar from "./Timer/ProgressBar";
import Play from "./Timer/Play";
import Pause from "./Timer/Pause";

const Timer = () => {
  const { isPlay, setIsPlay } = useContext(Store);

  return (
    <div className="overflow-hidden relative border-2 border-primary rounded-full flex justify-center items-center">
      <ProgressBar />
      <div className="absolute height-4 width-4 border-2 border-primary rounded-full flex justify-center items-center bg-primary">
        {!isPlay ? (
          <Play setIsPlay={setIsPlay} />
        ) : (
          <Pause setIsPlay={setIsPlay} />
        )}
      </div>
    </div>
  );
};

export default Timer;
