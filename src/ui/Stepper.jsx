import { FaCheck } from "react-icons/fa6";


const Stepper = ({shipment}) => {
  
    const steps = [
        { label: "Step 1" },
        { label: "Step 2" },
        { label: "Step 3" },
        { label: "Step 4" },
      ];

  return (
  
    <div className="flex w-full justify-between z-10">
      {steps.map((step, index) => (
        <div key={index} className="flex items-center">
        <div
          key={index}
          className={`w-6 h-6 rounded-full border-2 border-gray-200 flex items-center justify-center ${
            shipment.CurrentStatus.state === "DELIVERED"
            ? "bg-green-500 text-white"
            : shipment.CurrentStatus.state === "CANCELLED" && index !== steps.length - 1
            ? "bg-red-500 text-white "
            : shipment.CurrentStatus.state === "DELIVERED_TO_SENDER" && index !== steps.length - 1
            ? "bg-yellow-500 text-white "
            : "bg-white text-gray-300"
        } `}
        >
          <FaCheck size="10px" />
        </div>

        </div>
      ))}
    </div>
  );
};

export default Stepper;