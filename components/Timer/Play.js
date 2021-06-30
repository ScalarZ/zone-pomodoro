import Image from "next/image";

const Play = ({ setIsPlay }) => {
  return (
    <i className="flex cursor-pointer" onClick={() => setIsPlay(true)}>
      <Image src="/play.svg" height="58" width="52" />
    </i>
  );
};

export default Play;
