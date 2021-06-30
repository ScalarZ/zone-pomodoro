import P_Input from "./Inputs/P_Input";
import B_input from "./Inputs/B_input";
import LB_Input from "./Inputs/LB_Input";

const Inputs = () => {
  return (
    <div className="mb-5 flex justify-between">
      <P_Input />
      <B_input />
      <LB_Input />
    </div>
  );
};

export default Inputs;
