import { useContext } from "react";
import Store from "../store/storeContext";

const Audio = () => {
  const { alarm, sound } = useContext(Store);

  return (
    <div>
      <audio
        ref={alarm}
        src="/soundEffects/bird.mp3"
        type="audio/mp3"
        controls
        hidden
        className="absolute hidden"
      />
      <audio
        ref={sound}
        src="/soundEffects/rain.mp3"
        type="audio/mp3"
        controls
        hidden
        className="absolute hidden"
        loop
      />
    </div>
  );
};

export default Audio;
