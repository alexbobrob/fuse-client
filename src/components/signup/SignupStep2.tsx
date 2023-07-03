import React from "react";
import { ReactComponent as FuseLogo } from "../../assets/svgs/fuseLogo.svg";
import Stepper from "../common/Stepper";

interface Props {
  setStep:React.Dispatch<React.SetStateAction<number>>
}

function SignupStep2({ setStep }: Props) {
  const handleNext = () => {
    setStep(3);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-cs-light-gray flex-col">
      <div className="flex flex-col items-center w-[50%]">
        <FuseLogo />
        <h2 className="text-4xl font-bold mb-6">sign up</h2>
        <Stepper step={2} />
      </div>
      <p className="mt-16 text-center w-[70%]">
        Please check your email to confirm your account to complete sign up.
      </p>
      <button
        onClick={handleNext}
        className="mt-4 w-[50%] bg-cs-orange text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
      >
        Next
      </button>
    </div>
  );
}

export default SignupStep2;
