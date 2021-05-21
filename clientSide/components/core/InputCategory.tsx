import axios from "axios";
import { useState, useEffect } from "react";

const InputCategory = (props) => {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");

  const [listSearch, setListSearch] = useState([]);
  const [rawlistSearch, setRawListSearch] = useState([]);

  const mockUp = [
    {
      name: "romeo",
    },
    {
      name: "romeo2",
    },
    {
      name: "anime",
    },
  ];

  const onSearchCategory = async (e) => {
    if (e.target.value.length >= 3) {
      if (e.target.value.length == 3) {
        const data = await axios.get(`${process.env.HOST}/upload/category?name=${e.target.value}` ,{
          headers: {
            'Authorization': props.token
          }
        })
        console.log(data.data)
        setRawListSearch([...data.data])
        setListSearch([...data.data]);
      }
      if (e.target.value.length > 3) {
        const data = listSearch.filter((data, i) => {
          return data.name.search(new RegExp(e.target.value, "i")) > -1;
        });
        console.log("data:",data);
        console.log("input:",e.target.value);
        setListSearch([...data]);
      }
    }
  };

  const onInputListChange = (e) => {
    if (e.keyCode == 13 && e.target.value) {
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
    if(e.keyCode == 8 && e.target.value) {
      setListSearch([...rawlistSearch])
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
          onChange={(e) => {
            setInput(e.target.value);
            onSearchCategory(e);
          }}
        />
      </div>
      {input.length >= 3 && (
        <div className="bg-white shadow absolute top-10 w-full p-3 flex flex-wrap">
          {listSearch.map((data, i) => {
            return (
              <div
                key={i}
                className="bg-purple-600 text-white text-sm mb-2 px-2 mr-1 whitespace-nowrap uppercase select-none cursor-pointer"
              >
                {data.name}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default InputCategory;
