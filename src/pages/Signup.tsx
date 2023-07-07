import React, { useState } from "react";
import SignupStep1 from "../components/signup/SignupStep1";
import SignupStep2 from "../components/signup/SignupStep2";
import SignupStep3 from "../components/signup/SignupStep3";

const SignupForm = (): JSX.Element => {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({ email: "", password: "" });

  const renderSteps = (): JSX.Element | undefined => {
    switch (step) {
      case 1:
        return <SignupStep1 setStep={setStep} setData={setData} />;
      case 2:
        return <SignupStep2 setStep={setStep} />;
      case 3:
        return <SignupStep3 data={data} />;
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-cs-light-gray flex-col">
      {renderSteps()}
    </div>
  );
};

export default SignupForm;
