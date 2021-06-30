import Image from "next/image";

const CampFire = ({
  sound,
  selectedSound,
  setSelectedSound,
  setPlayedSound,
}) => {
  const changeSound = () => {
    sound.current.src = "/soundEffects/campfire.mp3";
    sound.current.play();
    const selectCampFire = {
      rain: false,
      ocean: false,
      campfire: true,
    };
    setSelectedSound(selectCampFire);
    setPlayedSound(true);
  };
  return (
    <div className="flex flex-col items-center">
      <i className="flex cursor-pointer" onClick={changeSound}>
        <Image src="/wind.svg" height="40" width="40" />
      </i>
      <span
        className={`mt-4 h-2 w-2 border border-secondary rounded-full ${
          selectedSound.campfire && "bg-primary"
        }`}
      ></span>
    </div>
  );
};

export default CampFire;
