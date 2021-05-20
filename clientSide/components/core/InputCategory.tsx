import { useState, useEffect } from "react";

const InputCategory = () => {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");
    
  const onSearchCategory = (e) => {
  };

  const onInputListChange = (e) => {
    onSearchCategory(e);
    if ((e.keyCode == 13) && e.target.value) {
      console.log("enterrr");
      if (!(list.indexOf(e.target.value) >= 0)) {
        setList([...list, e.target.value]);
      }
      e.target.value = "";
      setInput("");
    }
    if (e.keyCode == 8 && !e.target.value) {
      let data = list;
      data.pop();
      setList([...data]);
      setInput("");
    }
  };

  return (
    <div className="relative">
      <div
        className={`flex overflow-auto items-center relative pl-1 focus-within:ring-1 focus-within:outline-none w-full text-black placeholder-gray-500 border border-gray-200 focus-within:border-purple-500 focus-within:ring-purple-500 p-0`}
      >
        {list.map((data, i) => (
          <div
            key={i}
            className="bg-purple-600 text-white text-sm px-2 mr-1 whitespace-nowrap uppercase select-none cursor-pointer"
          >
            {data}
          </div>
        ))}
        <input
          type="text"
          placeholder="E.g.Anime Gundam (Enter to add)"
          className="focus:outline-none w-full border-none focus:border-none outline-none focus:ring-0 py-1 pl-3"
          onKeyDown={onInputListChange}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      {input.length >= 3 && (
        <div className="bg-white shadow absolute top-10 w-full p-3 flex flex-wrap">
          {[...Array(10)].map((data) => {
            return (
              <div className="bg-purple-600 text-white text-sm mb-2 px-2 mr-1 whitespace-nowrap uppercase select-none cursor-pointer">
                rome ooo asdasdas
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default InputCategory;
