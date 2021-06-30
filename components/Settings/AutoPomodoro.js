import { useContext } from "react";
import Store from "../../store/storeContext";

const AutoPomodoro = () => {
  const { autoPomodoro, setAutoPomodoro } = useContext(Store);

  return (
    <div className="flex justify-between items-center">
      <h3>Auto Pomodoro</h3>
      <div
        className={`p-1 w-14 border-2 border-secondary rounded-full flex ${
          !autoPomodoro
            ? "justify-start bg-secondary"
            : "justify-end bg-primary"
        }`}
      >
        <span
          className={`h-6 w-6 rounded-full ${
            !autoPomodoro ? "bg-primary" : "justify-end bg-secondary"
          } cursor-pointer`}
          onClick={() => setAutoPomodoro(!autoPomodoro)}
        ></span>
      </div>
    </div>
  );
};

export default AutoPomodoro;
