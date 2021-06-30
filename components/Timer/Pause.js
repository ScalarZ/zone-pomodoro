import Image from "next/image";

const Pause = ({ setIsPlay }) => {
  return (
    <i className="flex cursor-pointer" onClick={() => setIsPlay(false)}>
      <Image src="/pause.svg" height="58" width="52" />
    </i>
  );
};

export default Pause;
