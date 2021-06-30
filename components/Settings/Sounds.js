import { useContext } from "react";
import Store from "../../store/storeContext";
import Rain from "./Sounds/Rain";
import Ocean from "./Sounds/Ocean";
import CampFire from "./Sounds/CampFire";

const Sounds = () => {
  const { sound, selectedSound, setSelectedSound, setPlayedSound } =
    useContext(Store);

  return (
    <div className="flex justify-between">
      <Rain
        sound={sound}
        selectedSound={selectedSound}
        setSelectedSound={setSelectedSound}
        setPlayedSound={setPlayedSound}
      />
      <Ocean
        sound={sound}
        selectedSound={selectedSound}
        setSelectedSound={setSelectedSound}
        setPlayedSound={setPlayedSound}
      />
      <CampFire
        sound={sound}
        selectedSound={selectedSound}
        setSelectedSound={setSelectedSound}
        setPlayedSound={setPlayedSound}
      />
    </div>
  );
};

export default Sounds;
