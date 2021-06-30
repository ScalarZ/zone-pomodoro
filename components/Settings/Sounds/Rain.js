import Image from "next/image";

const Rain = ({ sound, selectedSound, setSelectedSound, setPlayedSound }) => {
  const changeSound = () => {
    sound.current.src = "/soundEffects/rain.mp3";
    sound.current.play();
    const selectRain = {
      rain: true,
      ocean: false,
      campfire: false,
    };
    setSelectedSound(selectRain);
    setPlayedSound(true);
  };
  return (
    <div className="flex flex-col items-center">
      <i className="flex cursor-pointer" onClick={changeSound}>
        <Image src="/rain.svg" height="40" width="40" />
      </i>
      <span
        className={`mt-4 h-2 w-2 border border-secondary rounded-full ${
          selectedSound.rain && "bg-primary"
        }`}
      ></span>
    </div>
  );
};

export default Rain;
