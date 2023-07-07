import React from 'react';

const Stepper = ({ step }: { step: number }): JSX.Element => {
  return (
    <ol className="flex items-center w-[70%] mb-4 sm:mb-5">
      <li className="flex w-full items-center text-cs-orange after:w-full after:h-1 after:border-b after:border-black after:border-1 after:inline-block dark:after:border-black">
        {step === 1 ? (
          <div
            className={
              'flex items-center justify-center w-6 h-6 bg-cs-orange border border-black rounded-full shrink-0'
            }
          ></div>
        ) : (
          <div
            className={
              'flex items-center justify-center w-6 h-6 border border-black rounded-full shrink-0'
            }
          ></div>
        )}
      </li>
      <li className="flex w-full items-center  after:w-full after:h-1 after:border-b after:border-black after:border-1 after:inline-block">
        {step === 2 ? (
          <div className="flex items-center justify-center bg-cs-orange w-6 h-6 border border-black rounded-full shrink-0"></div>
        ) : (
          <div className="flex items-center justify-center w-6 h-6 border border-black rounded-full shrink-0"></div>
        )}
      </li>
      <li className="flex items-center w-[auto]">
        {step === 3 ? (
          <div className="flex items-center justify-center bg-cs-orange w-6 h-6 border border-black rounded-full shrink-0"></div>
        ) : (
          <div className="flex items-center justify-center w-6 h-6 border border-black rounded-full shrink-0"></div>
        )}
      </li>
    </ol>
  );
};

export default Stepper;
