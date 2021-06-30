import Image from "next/image";

const Logo = ({ color }) => {
  return (
    <div style={{ color }} className="relative font-bold text-2xl">
      <i style={{ top: "2.5px", left: "22px" }} className="absolute flex">
        <Image
          src={color === "#FF4444" ? "/redLeaf.svg" : "/whiteLeaf.svg"}
          height="7"
          width="18"
        />
      </i>
      ZONE
    </div>
  );
};

export default Logo;
