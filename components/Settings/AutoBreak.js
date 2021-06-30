import { useContext } from "react";
import Store from "../../store/storeContext";

const AutoBreak = () => {
  const { autoBreak, setAutoBreak } = useContext(Store);
  return (
    <div className="flex justify-between items-center">
      <h3>Auto Break</h3>
      <div
        className={`p-1 w-14 border-2 border-secondary rounded-full flex ${
          !autoBreak ? "justify-start bg-secondary" : "justify-end bg-primary"
        }`}
      >
        <span
          className={`h-6 w-6 rounded-full ${
            !autoBreak ? "bg-primary" : "justify-end bg-secondary"
          } cursor-pointer`}
          onClick={() => setAutoBreak(!autoBreak)}
        ></span>
      </div>
    </div>
  );
};

export default AutoBreak;
