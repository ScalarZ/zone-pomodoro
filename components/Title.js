import { useState, useEffect, useContext } from "react";
import Store from "../store/storeContext";

const Title = () => {
  const [title, setTitle] = useState("Pomodoro");
  const { mode } = useContext(Store);

  useEffect(() => {
    if (mode.pomodoro) {
      setTitle("Pomodoro");
    } else if (mode.shortBreak) {
      setTitle("Short Break");
    } else {
      setTitle("Long Break");
    }
  }, [mode]);

  return <h1 className="text-2xl sm:text-3xl text-center">{title}</h1>;
};

export default Title;
