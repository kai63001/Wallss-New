interface inputData {
  name?: string;
  label?: string;
  error?: string;
  placeholder?: string;
}

const Input = (props: inputData) => {
  return (
    <div className="mb-3">
      <label
        className={`${props.error && "text-red-500"}`}
        htmlFor={props.name || "input"}
      >
        {props.label}
      </label>
      <input
        name={props.name || "input"}
        id={props.name || "input"}
        type="text"
        className={` focus:ring-1  focus:outline-none w-full text-black placeholder-gray-500 border ${
          props.error
            ? "border-red-500 focus:border-red-500 focus:ring-red-500"
            : "border-gray-200 focus:border-purple-500 focus:ring-purple-500"
        } py-1 pl-3`}
        placeholder={props.placeholder}
      />
      {props.error && (
        <span className="text-sm text-red-500">{props.error}</span>
      )}
    </div>
  );
};

export default Input;
