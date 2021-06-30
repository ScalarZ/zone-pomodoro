import { useEffect, useContext } from "react";
import Store from "../store/storeContext";

const Dots = () => {
  const { longBreakInterval, dots, setDots } = useContext(Store);

  useEffect(() => {
    if (longBreakInterval && Number(longBreakInterval)) {
      let list = [];
      for (let i = 0; i < longBreakInterval; i++) {
        if (dots[i]) {
          list = [...list, 1];
        } else {
          list = [...list, 0];
        }
      }
      setDots(list);
    }
  }, [longBreakInterval]);
  return (
    <ul className="mt-6 mb-4 flex justify-center space-x-5">
      {dots.map((n, index) => (
        <li
          key={index}
          className={`h-2 w-2 border border-primary rounded-full ${
            !n ? "bg-primary" : "bg-secondary"
          }`}
        ></li>
      ))}
    </ul>
  );
};

export default Dots;
