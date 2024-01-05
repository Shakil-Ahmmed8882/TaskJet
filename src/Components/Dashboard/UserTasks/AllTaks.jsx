import { useContext } from "react";
import { TaskContext } from "../../../Providers/TaskProvider";
import { Avatar, Badge, Checkbox } from "@nextui-org/react";

const AllTaks = () => {
  const { tasks } = useContext(TaskContext);
  return (
    <div>
      <div className="bg-gray-700 p-4 min-h-screen">
        <div
          aria-hidden="true"
          className="absolute inset-0 h-max w-full m-auto grid grid-cols-2 -space-x-52 opacity-20">
          <div className="blur-[106px] h-56 bg-gradient-to-br  to-purple-400 from-blue-700" />
          <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400  to-indigo-600" />
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
            
          <div className="  items-center  justify-between flex mt-3 text-gray-100">
            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-11 h-11 text-secondary">
                <path
                  fillRule="evenodd"
                  d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
                  clipRule="evenodd"
                />
              </svg>
              <h2 className="my-5 text-2xl font-bold text-white md:text-4xl">
                My Tasks
              </h2>
            <p className="text-gray-300">
              We have built many products and some of them are below
            </p>
            </div>
            Delete all
          </div>
          <div>
          </div>
          <div className="mt-16 grid  divide-gray-700 overflow-hidden  rounded-3xl   text-gray-600 sm:grid-cols-2 lg:grid-cols-4  gap-3 lg:divide-y-0 xl:grid-cols-4 py-8 cursor-pointer">
            {tasks?.map((task, index) => {
              let state = task?.progress == 'to-do'?"danger":(task.progress === "ongoing"?"warning":"success")
              return (
                <div
                  key={index}
                  className="shadow-lg group relative bg-gray-800">
                  {/* ================== */}

                  {/* ================== */}
                  <div className="relative space-y-8  py-12 p-8 ">
                    <img
                      src="https://www.svgrepo.com/show/164986/logo.svg"
                      loading="lazy"
                      width={200}
                      height={200}
                      className="w-12 h-12 rounded-full"
                      style={{ color: "transparent" }}
                    />
                    <div className="space-y-2">
                        
                        <Checkbox defaultSelected color="primary">Delete</Checkbox>

                      <h5 className="text-xl font-semibold text-white transition group-hover:text-secondary">
                        {task.title}
                      </h5>

                        
                      <p className="text-gray-300">{task?.description}</p>
                    </div>
                    
                    <div className="absolute  top-0 right-11">
                  <Badge content={task?.progress} size="lg" className={`${state == "success"?"text-[white]":(state == "warning"?"text-[#000]":"text-[#fff]")}`} color={state} >
                  </Badge>
                    </div>
                    <div>
                        
                    </div>
                  </div>
                  
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllTaks;
