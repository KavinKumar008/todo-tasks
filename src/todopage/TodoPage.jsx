import React, { useRef, useState, useEffect } from "react";
import { CiLight } from "react-icons/ci";
import { FaRegCircle } from "react-icons/fa";
import mountain from "../assets/mountain.jpg";
import DisplayValue from "../displayvalue/DisplayValue";
import { CiDark } from "react-icons/ci";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import pillar from "../assets/pillar.jpg";
import { IoClose } from "react-icons/io5";

const TodoPage = () => {
  const [inputValue, setInputValue] = useState("");
  const [displayTasks, setDisplayTasks] = useState([]);
  const [theme, setTheme] = useState(false);
  const [footerDisplay, setFooterDisplay] = useState(false);
  const [displayIcon, setDisplayIcon] = useState(false);
  const [displayButtons, setDisplayButtons] = useState(false);

  const idRef = useRef(0);

  // console.log(displayTasks[0].isCompleted);

  const handleSubmit = () => {
    const newIdDoc = idRef.current + 1;
    idRef.current = newIdDoc;
    setDisplayTasks((prevValues) => [
      ...prevValues,
      { id: newIdDoc, data: inputValue, isCompleted: false },
    ]);
    setFooterDisplay(true);
    setInputValue("");
  };

  console.log(displayTasks);

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

  const toogleTheme = () => {
    setTheme(!theme);
  };

  const allDataDelete = () => {
    setDisplayTasks([]);
    setFooterDisplay(false);
  };

  const changeIcon = () => {
    setDisplayIcon(!displayIcon);
  };

  const handleSelect = () => {
    setDisplayButtons(!displayButtons);
  };

  const handleActive = () => {
    displayTasks.filter((item) => item.isCompleted === true);
  };

  return (
    <div className={`${theme && "dark"}`}>
      <main
        className="h-screen w-full"
        style={
          theme
            ? { backgroundColor: "black" }
            : { backgroundColor: "rgb(223, 227, 232)" }
        }
      >
        <section
          style={
            theme
              ? { backgroundImage: `url(${mountain})` }
              : { backgroundImage: `url(${pillar})` }
          }
          className="w-full h-1/2 bg-no-repeat flex justify-center items-center"
        >
          <div className="w-[600px]">
            <div className="flex justify-between">
              <h1 className="text-5xl text-white">T O D O</h1>
              {theme ? (
                <CiLight
                  className="text-white text-4xl"
                  onClick={toogleTheme}
                />
              ) : (
                <CiDark className="text-white text-4xl" onClick={toogleTheme} />
              )}
            </div>
            <div className="mt-10 flex items-center bg-white  rounded-md dark:bg-[rgb(22,37,54)]">
              {displayIcon ? (
                <IoCheckmarkDoneCircleOutline
                  className="text-orange-500 text-4xl mx-4 font-extrabold"
                  onClick={changeIcon}
                />
              ) : (
                <FaRegCircle
                  className="text-black text-3xl mx-4 font-extrabold dark:text-white dark:bg-[rgb(22,37,54)]"
                  onClick={changeIcon}
                />
              )}
              <input
                type="text"
                placeholder="todo"
                className="w-full p-3 bg-white text-gray-500 outline-none dark:bg-[rgb(22,37,54)]"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
              />
              <button
                type="button"
                className="text-black mx-2 dark:bg-[rgb(22,37,54)] dark:text-white cursor-pointer"
                onClick={handleSubmit}
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
                handleSubmit={handleSubmit}
                displayTasks={displayTasks}
                setDisplayTasks={setDisplayTasks}
                ind={ind}
                deleteValue={deleteValue}
                displayIcon={displayIcon}
                setDisplayIcon={setDisplayIcon}
                changeIcon={changeIcon}
                handleSelect={handleSelect}
              />
            </div>
          ))}
        {footerDisplay ? (
          <div className="flex justify-center items-center">
            <div className="w-[600px] flex justify-between bg-white shadow-2xl p-4 border-t border-gray-400 text-white dark:bg-[rgb(22,37,54)]  dark:border-black">
              <p className="text-gray-500 font-medium">
                {displayTasks
                  ? displayTasks.filter((item) => item.isCompleted === false)
                      .length
                  : displayTasks.length}{" "}
                items left
              </p>
              <div className="flex gap-4">
                <p
                  className="cursor-pointer text-blue-200 font-medium"
                  onClick={handleSelect}
                >
                  All
                </p>
                <p
                  className="cursor-pointer text-gray-500 font-medium"
                  onClick={handleActive}
                >
                  Active
                </p>
                <p
                  className="cursor-pointer text-gray-500 font-medium"
                  // onClick={handleSelect}
                >
                  Completed
                </p>
              </div>
              <p
                className="cursor-pointer text-gray-500 font-medium"
                onClick={allDataDelete}
              >
                Clear Completely
              </p>
            </div>
          </div>
        ) : (
          <span>{""}</span>
        )}
      </main>
    </div>
  );
};

export default TodoPage;
