import axios from "@/lib/axios";
import { useState, useEffect } from "react";

const InputCategory = (props) => {
  // const [list, setList] = useState([]);
  const [input, setInput] = useState("");

  const [listSearch, setListSearch] = useState([]);
  const [rawlistSearch, setRawListSearch] = useState([]);

  const onSearchCategory = async (e) => {
    if (e.target.value.length >= 3) {
      if (e.target.value.length == 3) {
        const data = await axios.get(
          `${process.env.HOST}/upload/category?name=${e.target.value}`
        );
        // console.log(data.data)
        setRawListSearch([...data.data]);
        setListSearch([...data.data]);
      }
      if (e.target.value.length > 3) {
        const data = listSearch.filter((data, i) => {
          return data.name.search(new RegExp(e.target.value, "i")) > -1;
        });
        // console.log("data:",data);
        // console.log("input:",e.target.value);
        setListSearch([...data]);
      }
    }
  };

  const onInputListChange = (e) => {
    if (e.keyCode == 13 && e.target.value) {
      // console.log("enterrr");
      if (!(props.list.indexOf(e.target.value) >= 0)) {
        props.setList([...props.list, e.target.value]);
      }
      e.target.value = "";
      setInput("");
    }
    if (e.keyCode == 8 && !e.target.value) {
      let data = props.list;
      data.pop();
      props.setList([...data]);
      setInput("");
    }
    if (e.keyCode == 8 && e.target.value) {
      setListSearch([...rawlistSearch]);
    }
  };

  const selectCategory = (name) => {
    // console.log(name)
    if (!(props.list.indexOf(name) >= 0)) {
      props.setList([...props.list, name]);
    }
    setInput("");
  };

  const addCategory = async () => {
    if (!(props.list.indexOf(input) >= 0)) {
      const data = await axios.post(`${process.env.HOST}/upload/category`,{
        name: input
      })
      console.log(data)
      props.setList([...props.list, input]);
    }
    setInput("");
  };

  return (
    <div className="relative">
      <div
        className={`flex overflow-auto items-center relative pl-1 focus-within:ring-1 focus-within:outline-none w-full text-black placeholder-gray-500 border border-gray-200 focus-within:border-purple-500 focus-within:ring-purple-500 p-0`}
      >
        {props.list.map((data, i) => (
          <div
            key={i}
            className="bg-purple-600 text-white text-sm px-2 mr-1 whitespace-nowrap uppercase select-none cursor-pointer"
          >
            {data}
          </div>
        ))}
        <input
          type="text"
          placeholder={props.placeholder || 'placeholder'}
          className="focus:outline-none w-full border-none focus:border-none outline-none focus:ring-0 py-1 pl-3"
          onKeyDown={onInputListChange}
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            onSearchCategory(e);
          }}
        />
      </div>
      {input.length >= 3 && props.type != 'tags' ? (
        <div className="bg-white shadow absolute top-10 w-full p-3 flex flex-wrap z-10">
          {listSearch.map((data, i) => {
            return (
              <div
                onClick={() => selectCategory(data.name)}
                key={i}
                className="bg-purple-600 text-white text-sm mb-2 px-2 mr-1 whitespace-nowrap uppercase select-none cursor-pointer"
              >
                {data.name}
              </div>
            );
          })}
          <div className="block w-full">
            <hr />
            <div className="flex mt-2.5">
              <div
                className="border-purple-700 ring-2 ring-purple-700 px-2 ml-0.5 text-sm whitespace-nowrap uppercase select-none cursor-pointer hover:bg-purple-200 delay-75"
                onClick={addCategory}
              >
                ADD <span className="text-purple-700">{input}</span> TO CATEGORY
              </div>
            </div>
          </div>
        </div>
      ):('')}
    </div>
  );
};

export default InputCategory;
