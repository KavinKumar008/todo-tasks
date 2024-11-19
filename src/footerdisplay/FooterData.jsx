import React from "react";

const FooterData = ({
  footerDisplay,
  setFooterDisplay,
  displayTasks,
  textColor,
  setTextColor,
  handleAll,
  handleActive,
  handleCompleted,
  allDataDelete,
}) => {
  return (
    <div>
      {footerDisplay ? (
        <div className="flex justify-center items-center flex-col bg-[rgb(223,227,232)] px-2 dark:bg-black">
          <div className="w-[600px] flex justify-between bg-white shadow-2xl p-4 border-t border-gray-400 text-white dark:bg-[rgb(22,37,54)]  dark:border-black max-sm:hidden ">
            <p className="text-gray-500 font-medium">
              {displayTasks.filter((item) => item.isCompleted === false).length}{" "}
              items left
            </p>
            <div className="flex gap-4">
              <p
                className={`cursor-pointer ${
                  textColor === "all" ? "text-blue-200" : "text-gray-500"
                }  font-medium`}
                onClick={handleAll}
              >
                All
              </p>
              <p
                className={`cursor-pointer  ${
                  textColor === "active" ? "text-blue-200" : "text-gray-500"
                }    font-medium`}
                onClick={handleActive}
              >
                Active
              </p>
              <p
                className={`cursor-pointer  ${
                  textColor === "completed" ? "text-blue-200" : "text-gray-500"
                }    font-medium`}
                onClick={handleCompleted}
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
          <div className="hidden max-sm:block bg-white dark:bg-[rgb(22,37,54)]">
            <div className="flex justify-around p-4 w-[360px] border-b rounded-md">
              <p className="text-gray-500 font-medium">
                {
                  displayTasks.filter((item) => item.isCompleted === false)
                    .length
                }{" "}
                items left
              </p>
              <p
                className="cursor-pointer text-gray-500 font-medium"
                onClick={allDataDelete}
              >
                Clear Completely
              </p>
            </div>
          </div>
          <div className="hidden max-sm:block justify-around border-t border-gray-400 p-4 bg-white w-[360px] mt-5 mb-5 rounded-md dark:bg-[rgb(22,37,54)]">
            <div className="flex justify-around">
              <p
                className={`cursor-pointer ${
                  textColor === "all" ? "text-blue-200" : "text-gray-500"
                }  font-medium`}
                onClick={handleAll}
              >
                All
              </p>
              <p
                className={`cursor-pointer  ${
                  textColor === "active" ? "text-blue-200" : "text-gray-500"
                }    font-medium`}
                onClick={handleActive}
              >
                Active
              </p>
              <p
                className={`cursor-pointer  ${
                  textColor === "completed" ? "text-blue-200" : "text-gray-500"
                }    font-medium`}
                onClick={handleCompleted}
              >
                Completed
              </p>
            </div>
          </div>
        </div>
      ) : (
        <span>{""}</span>
      )}
    </div>
  );
};

export default FooterData;
