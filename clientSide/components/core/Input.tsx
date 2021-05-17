import {useState} from 'react'

interface inputData {
  name?: string;
  label?: string;
  error?: string;
  placeholder?: string;
  password?: boolean;
}

const Input = (props: inputData) => {

    const [password ,setPassword ] = useState(props.password ? true : false)

    const showPwd = () => {
        setPassword(!password)
    }

  return (
    <div className="mb-3">
      <label
        className={`${props.error && "text-red-500"}`}
        htmlFor={props.name || "input"}
      >
        {props.label}
      </label>
      <div className="relative">
        <input
            name={props.name || "input"}
            id={props.name || "input"}
            type={password ? 'password' : 'text'}
            className={` focus:ring-1  focus:outline-none w-full text-black placeholder-gray-500 border ${
            props.error
                ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                : "border-gray-200 focus:border-purple-500 focus:ring-purple-500"
            } py-1 pl-3`}
            placeholder={props.placeholder}
        />
        {props.password && (
            <div onClick={showPwd} className="select-none absolute right-2 top-2.5 text-purple-600 cursor-pointer text-xs">
                {password ? 'SHOW' : 'HIDE'}
            </div>
        )}
      </div>
      {props.error && (
        <span className="text-sm text-red-500">{props.error}</span>
      )}
    </div>
  );
};

export default Input;
