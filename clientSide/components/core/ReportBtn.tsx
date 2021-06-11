import { useEffect, useState, useRef } from "react";

const ReportBTN = (props) => {
  const modle = useRef(null);
  const [onReport, setOnReport] = useState(false);

  const report = (e) => {
    setOnReport(true);
  };
  useEffect(() => {
    if (!onReport) return;
    function handleClick(event) {
      if (modle.current && !modle.current.contains(event.target)) {
        setOnReport(false);
      }
    }
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, [onReport]);
  return (
    <>
      <button
        onClick={report}
        className="text-yellow-500 bg-yellow-100 px-5 py-2.5 flex w-full sm:w-auto items-center justify-center mr-1"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {onReport && (
        <div className="fixed bg-black bg-opacity-30 z-30 w-full h-full top-0 left-0 flex">
          <div ref={modle} className="m-auto w-full max-w-md relative">
            <div className="bg-white m-auto p-3 w-full">
              <p className="text-2xl text-center">
                Report Wallpaper {props.id}
              </p>
            </div>
            {/* close */}
            <div
              onClick={() => setOnReport(false)}
              className="absolute -top-3 bg-purple-500 text-white -right-3 p-2 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ReportBTN;
