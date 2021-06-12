import { useEffect, useState, useRef } from "react";

const ReportBTN = (props) => {
  const modle = useRef(null);
  const [onReport, setOnReport] = useState(false);
  const [errors, setErrors] = useState({});

  const arrayReport = [
    "Nudity",
    "Offensive",
    "Violence",
    "Spam",
    "Promotes hate",
    "Bad quality",
    "Duplicate",
    "Delete",
    "Copyright",
    "Author",
    "Other",
  ];
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

  const sendReport = async (e) => {
    e.preventDefault();
    let checked = [];
    setErrors({});
    arrayReport.map((data, key) => {
      if (e.target[`r${key}`].checked) {
        checked = [...checked, data];
      }
    });
    if (checked.length <= 0) {
      setErrors({ checked: "Select type to report" });
      return;
    }
    if (checked.indexOf("Other") >= 0 && e.target?.detail?.value?.length <= 0) {
      setErrors({ other: "Please let us know why" });
      return;
    }
    let body = {
      wallId: props.id,
      type: checked,
      detail: e.target?.detail?.value,
    };
    const data = await (
      await fetch(`${process.env.HOST}/report`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      })
    ).text();
    setOnReport(false);
    console.log(data);
  };

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
              <p className="text-2xl text-center mb-1">Report Wallpaper</p>
              <form onSubmit={sendReport}>
                <div className="grid grid-cols-3 gap-1">
                  {arrayReport.map((data, i) => (
                    <div className="" key={i}>
                      <input
                        name={`r${i}`}
                        className="form-checkbox border-purple-700 text-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-600"
                        id={`r${i}`}
                        type="checkbox"
                      />
                      <label htmlFor={`r${i}`} className="ml-2 select-none">
                        {data}
                      </label>
                    </div>
                  ))}
                </div>
                {errors["checked"] && (
                  <div className="text-sm text-red-500">
                    {errors["checked"]}
                  </div>
                )}
                <textarea
                  name="detail"
                  id="detail"
                  className="mt-1 w-full"
                  placeholder="whyy..."
                ></textarea>
                {errors["other"] && (
                  <div className="text-sm text-red-500">{errors["other"]}</div>
                )}
                <div className="flex justify-end">
                  <button className="mt-2 bg-purple-600 text-white px-3 py-2">
                    Report
                  </button>
                </div>
              </form>
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
