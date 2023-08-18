"use client";
import React from "react";
import Image from "next/image";
function Main() {
  return (
    <div className="bg-[#EFECFF] flex direction-row items-center  justify-around gap-10 rounded-2xl mt-5 overflow-hidden p-12 relative h-[700px] ">
      <div className="flex gap-5 flex-col ">
        <p>Ahead app</p>
        <h1 className="text-6xl leading-[60px]  font-bold">
          {" "}
          Master Your Life <br /> by mastering <br />
          emotions
        </h1>
        <div className="flex mt-6 gap-6">
          <Image
            className=""
            height={100}
            width={150}
            src={"/assets/mac.png"}
          />
          <div>
            <div className="flex"> ⭐⭐⭐⭐⭐</div>
            <p>100+ AppStore reviews</p>
          </div>
        </div>
      </div>
      <div className="h-[500px] relative w-[500px]  rounded-full border-dashed border-white flex justify-center items-center  border-[7px] ">
        <div className="h-[250px] bg-[#DDD6F8] rounded-full w-[250px] relative   flex justify-center items-center">
          <img
            src={"assets/Magic.png "}
            className="absolute -left-16"
            height={45}
            width={120}
          />
          <img width={150} height={190} src={"/assets/Mobile.png"} />
        </div>
      </div>
    </div>
  );
}

export default Main;
