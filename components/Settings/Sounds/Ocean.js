import Image from "next/image";

const Ocean = ({ sound, selectedSound, setSelectedSound, setPlayedSound }) => {
  const changeSound = () => {
    sound.current.src = "/soundEffects/ocean.mp3";
    sound.current.play();
    const selectOcean = {
      rain: false,
      ocean: true,
      campfire: false,
    };
    setSelectedSound(selectOcean);
    setPlayedSound(true);
  };
  return (
    <div className="flex flex-col items-center">
      <i className="flex cursor-pointer" onClick={changeSound}>
        <Image src="/ocean.svg" height="40" width="40" />
      </i>
      <span
        className={`mt-4 h-2 w-2 border border-secondary rounded-full ${
          selectedSound.ocean && "bg-primary"
        }`}
      ></span>
    </div>
  );
};

export default Ocean;
