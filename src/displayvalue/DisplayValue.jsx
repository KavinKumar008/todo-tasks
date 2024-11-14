import React, { useState } from "react";
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
  handleSubmit,
}) => {
  const [clickLogo, setClickLogo] = useState(displayTasks);
  // console.log(clickLogo);
  function handleDelete(index) {
    deleteValue(index);
  }

  const handleClickIcon = (index) => {
    // console.log(index);
    // handleSubmit(index);
    setClickLogo(clickLogo.filter((item, ind) => item.id === index));
    // setClickLogo(
    //   clickLogo
    //     .filter((value, i) => console.log(value, i))
    //     .map((item, ind) => item[ind] === index)
    // );

    // changeIcon();
  };
  return (
    <main key={ind} className="text-white flex justify-center">
      <div className="w-[600px]">
        <div className="flex items-center bg-white shadow-2xl border-b border-gray-300 p-4 dark:bg-[rgb(22,37,54)] dark:border-black">
          {displayIcon ? (
            <IoCheckmarkDoneCircleOutline
              className="text-white text-4xl"
              onClick={() => handleClickIcon(ind)}
            />
          ) : (
            <FaRegCircle
              className="text-black text-4xl dark:text-white"
              onClick={() => handleClickIcon(ind)}
            />
          )}
          <h1 className="w-full text-md text-black outline-none ml-4  dark:bg-[rgb(22,37,54)] dark:text-white">
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
