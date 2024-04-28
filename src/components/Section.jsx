import React from "react";
import { items } from "../constants";
import { MoveRight } from "lucide-react";

const Section = () => {
  return (
    <div>
      <div className="flex flex-wrap mt-32 mb-20 ">
        {items.map((val, index) => (
          <div className="md:w-1/2 w-full ">
            <div className="flex space-x-5 justify-evenly lg:px-20 px-5 py-8">
            <div>
              <img src={val.pic} alt="image" className="w-32" />
            </div>
            <div className="">
              <h2 className="font-bold text-[1.5rem]">{val.title}</h2>
              <p className="md:text-xl text-lg mt-5 ">{val.para}</p>
              <div className="flex items-center mt-5 text-blue-700">
                <span className="hover:underline cursor-pointer">Learn more</span>
                <MoveRight strokeWidth={1}/>
              </div>
            </div>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section;
