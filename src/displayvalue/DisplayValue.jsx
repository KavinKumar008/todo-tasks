import React, { useState, useEffect, useRef } from "react";
import { FaRegCircle } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";

const DisplayValue = ({ item, ind, deleteValue, handleAll, handleActive }) => {
  const [hide, setHide] = useState(false);

  function handleDelete(index) {
    deleteValue(index);
  }

  const handleClickIcon = (item) => {
    setHide(!hide);
    hide ? (item.isCompleted = false) : (item.isCompleted = true);
    handleAll(item);
  };
  console.log(item);

  return (
    <main
      key={ind}
      className="text-white flex justify-center bg-[rgb(223,227,232)] dark:bg-black max-[600px]:px-2"
    >
      <div className="w-[600px]">
        <div className="flex items-center bg-white shadow-2xl border-b border-gray-300 p-4 dark:bg-[rgb(22,37,54)] dark:border-black">
          {item.isCompleted ? (
            <IoCheckmarkDoneCircleOutline
              className="text-green-600 text-4xl "
              onClick={() => handleClickIcon(item)}
            />
          ) : (
            <FaRegCircle
              className="text-black text-4xl dark:text-white"
              onClick={() => handleClickIcon(item)}
            />
          )}
          {/* <IoCheckmarkDoneCircleOutline className="text-blue-600 text-3xl" /> */}
          <h1
            className="w-full text-md text-black outline-none ml-4  dark:bg-[rgb(22,37,54)] dark:text-white"
            style={{
              textDecoration: item.isCompleted ? "line-through" : "none",
              color: item.isCompleted ? "grey" : "none",
            }}
          >
            {item.data}
          </h1>
          <IoClose
            className="text-black bg-white text-4xl mr-2 dark:bg-[rgb(22,37,54)] dark:text-white"
            onClick={() => handleDelete(ind)}
          />
        </div>
        {/* <div className="flex justify-between bg-neutral-900 p-4 border-t ">
          <p>items left</p>
          <p className="cursor-pointer">All Active Completed</p>
          <p className="cursor-pointer ">Clear Completely</p>
        </div> */}
      </div>
    </main>
  );
};

export default DisplayValue;
