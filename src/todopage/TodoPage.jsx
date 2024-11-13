import React, { useState } from "react";
import { CiLight } from "react-icons/ci";
import { FaRegCircle } from "react-icons/fa";
import mountain from "../assets/mountain.jpg";
import DisplayValue from "../displayvalue/DisplayValue";
import { CiDark } from "react-icons/ci";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";

const TodoPage = () => {
  const [inputValue, setInputValue] = useState("");
  const [displayTasks, setDisplayTasks] = useState([]);
  const [theme, setTheme] = useState(true);
  const [footerDisplay, setFooterDisplay] = useState(false);
  const [displayIcon, setDisplayIcon] = useState(false);

  // console.log(displayIcon);
  const handleSubmit = () => {
    setDisplayTasks((prevValues) => [...prevValues, { data: inputValue }]);
    setFooterDisplay(true);
    setInputValue("");
  };

  // console.log(displayTasks);

  const handleKeyPress = (event) => {
    // look for the Enter keyCode
    if (event.keyCode === 13 || event.which === 13) {
      handleSubmit();
    }
  };

  function deleteValue(index) {
    console.log(index);
    setDisplayTasks(displayTasks.filter((_, ind) => ind !== index));
  }

  const themeChanging = () => {
    setTheme(false);
  };

  const allDataDelete = () => {
    setDisplayTasks("");
    setFooterDisplay(false);
  };

  const changeIcon = () => {
    setDisplayIcon(!displayIcon);
  };

  return (
    <main className="h-screen ">
      <section
        style={{ backgroundImage: `url(${mountain})` }}
        className="w-full h-1/2 bg-no-repeat flex justify-center items-center "
      >
        <div className="w-[600px]">
          <div className="flex justify-between">
            <h1 className="text-5xl text-white">T O D O</h1>
            <CiLight className="text-white text-4xl" onClick={themeChanging} />
          </div>
          <div className="mt-10 flex items-center bg-[rgb(22,37,54)]  rounded-md">
            {displayIcon ? (
              <IoCheckmarkDoneCircleOutline
                className="text-orange-500 text-4xl mx-4 font-extrabold"
                onClick={changeIcon}
              />
            ) : (
              <FaRegCircle
                className="text-white text-3xl mx-4 font-extrabold"
                onClick={changeIcon}
              />
            )}
            <input
              type="text"
              placeholder="todo"
              className="w-full p-3 bg-[rgb(22,37,54)] text-gray-500 outline-none "
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button
              type="button"
              className="text-white mx-2"
              onClick={() => handleSubmit()}
              disabled={inputValue === ""}
            >
              Enter
            </button>
          </div>
        </div>
      </section>
      {displayTasks &&
        displayTasks.map((item, ind) => (
          <div key={ind}>
            <DisplayValue
              item={item}
              displayTasks={displayTasks}
              ind={ind}
              deleteValue={deleteValue}
              displayIcon={displayIcon}
              setDisplayIcon={setDisplayIcon}
              changeIcon={changeIcon}
            />
          </div>
        ))}
      {footerDisplay ? (
        <div className="flex justify-center items-center">
          <div className="w-[600px] flex justify-between bg-[rgb(22,37,54)] p-4 border-t border-black text-white">
            <p className="text-gray-500">{displayTasks.length} items left</p>
            <div className="flex gap-4">
              <p className="cursor-pointer text-gray-500">All</p>
              <p className="cursor-pointer text-gray-500">Active</p>
              <p className="cursor-pointer text-gray-500"> Completed</p>
            </div>
            <p className="cursor-pointer text-gray-500" onClick={allDataDelete}>
              Clear Completely
            </p>
          </div>
        </div>
      ) : (
        <span>null</span>
      )}
    </main>
  );
};

export default TodoPage;
