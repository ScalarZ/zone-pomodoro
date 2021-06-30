import Image from "next/image";
import { useState, useContext } from "react";
import Store from "../store/storeContext";

const Sounds = () => {
  const { sound, playedSound, setPlayedSound } = useContext(Store);

  const playSound = () => {
    {
      if (!playedSound) {
        sound.current.play();
      } else {
        sound.current.pause();
      }
      setPlayedSound(!playedSound);
    }
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <i className="mb-3 flex">
        <Image
          src={`${!playedSound ? "/tomatoOff.svg" : "/tomatoOn.svg"}`}
          height="41"
          width="52"
        />
      </i>
      <button
        className="h-14 w-14 border-2 rounded-full flex justify-center items-center"
        onClick={playSound}
      >
        <i className="flex">
          <Image
            src={`${!playedSound ? "/strokePlay.svg" : "/strokePause.svg"}`}
            height="22"
            width="19"
          />
        </i>
      </button>
    </div>
  );
};

export default Sounds;
