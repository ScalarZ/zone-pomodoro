import { useContext } from "react";
import Store from "../../store/storeContext";

const LongBreakInterval = () => {
  const { longBreakInterval, setLongBreakInterval } = useContext(Store);
  return (
    <div className="flex justify-between items-center">
      <h3>Long Break Interval</h3>
      <input
        type="number"
        className="pl-2 py-1 w-16 bg-input rounded font-bold text-base text-secondary text-center"
        value={longBreakInterval}
        onChange={(e) => setLongBreakInterval(e.target.value)}
      />
    </div>
  );
};

export default LongBreakInterval;
