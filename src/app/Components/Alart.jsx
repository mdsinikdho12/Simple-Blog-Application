import React from "react";

const Alert = () => {
  return (
    <>
      <Alert
        color="success"
        variant="solid"
        className="flex items-center justify-between px-6 py-4 rounded-xl shadow-lg border border-green-600 bg-green-500 text-white"
        title="Success Notification">
        <div className="flex items-center space-x-4">
          <div className="bg-green-700 rounded-full p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <div>
            <h4 className="font-semibold text-lg">Success Notification</h4>
            <p className="text-sm">
              Your action has been completed successfully. We'll notify you when
              updates are available.
            </p>
          </div>
        </div>
        <button className="text-white hover:text-green-200 transition duration-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor">
            <path
              fillRule="evenodd"
              d="M10 8.586l4.95-4.95a1 1 0 111.414 1.414L11.414 10l4.95 4.95a1 1 0 01-1.414 1.414L10 11.414l-4.95 4.95a1 1 0 01-1.414-1.414L8.586 10l-4.95-4.95a1 1 0 011.414-1.414L10 8.586z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </Alert>
    </>
  );
};

export default Alert;
