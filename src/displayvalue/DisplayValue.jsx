import React from "react";
import { FaRegCircle } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";

const DisplayValue = ({
  item,
  ind,
  deleteValue,
  displayIcon,
  setDisplayIcon,
  changeIcon,
  displayTasks,
}) => {
  console.log(ind);
  function handleDelete(index) {
    deleteValue(index);
  }
  return (
    <main key={ind} className="text-white flex justify-center">
      <div className="w-[600px]">
        <div className="flex items-center bg-[rgb(22,37,54)] border-b border-black p-4">
          {displayTasks && displayIcon ? (
            <IoCheckmarkDoneCircleOutline
              className="text-white text-4xl"
              onClick={changeIcon}
            />
          ) : (
            <FaRegCircle className="text-white text-4xl" onClick={changeIcon} />
          )}
          <h1 className="w-full text-md outline-none ml-4">{item.data}</h1>
          <IoClose
            className="text-white bg-[rgb(22,37,54)] text-4xl mr-2"
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
