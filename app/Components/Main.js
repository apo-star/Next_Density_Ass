import React from "react";
import Image from "next/image";
import {gsap} from 'gsap';
import {ScrollTrigger} from "gsap/ScrollTrigger"
import {useRef,useEffect} from 'react';

function Main() {
  
  gsap.registerPlugin(ScrollTrigger);
    let phoneImage= useRef(null);
    let redCircle=useRef(null);
    let leaf1=useRef(null);
    let leaf2=useRef(null);
    let smallcircle=useRef(null);

    useEffect(()=>{
        gsap.from(phoneImage,{
            scale:0,
            opacity:0,
            rotate:100,
            duration:4.2,
            repeat:-1,
            ease:"elastic.out(1.2, 0.3)",
            scrollTrigger: {
              trigger: phoneImage,
              start:"top 80% ",
              toggleActions: "play none none none"
            }
  
        })
        gsap.from(redCircle,{
          scale:0,
          rotation:3000,
          duration:2,
          repeat:-1,
          scrollTrigger: {
              trigger: redCircle,
              start:"top 80% ",
              start:"bottom 50%",
              toggleActions:"restart complete reverse reset"
            }

      })
      gsap.from(smallcircle,{
          scale:0.5,
          duration:1,
          ease:"elastic.out(1.2, 0.3)",
          repeat:-1,
          scrollTrigger: {
              trigger: smallcircle,
              start:"top 80% ",
              start:"bottom 50%",
              toggleActions:"restart complete reverse reset"
            }

      })

      gsap.from(leaf1,{
        rotation:4000,
        duration:3,
        repeat:-1,
        scrollTrigger: {
            trigger: leaf1,
            start:"top 80% ",
            start:"bottom 50%",
            toggleActions:"restart complete reverse reset"
          }

    })
    gsap.to(leaf2,{
      duration:1,
      // ease: "power3.inOut",
      rotation:1410,
      x:20,
      y:60,
      repeat:-1
      // scrollTrigger: ".trigger"
  })
    },[])

  return (
    <div className="bg-[#EFECFF] w-full flex direction-row items-center  justify-around gap-10 rounded-2xl mt-5 overflow-hidden p-12 relative h-[700px] ">
      <div className="flex gap-5 flex-col ">
      <img ref={(el=>{leaf1=el})} src={"assets/leaf.png"}  className='absolute top-[6rem] left-[26.5rem] rotate-45 ' width={25} />
      <img ref={(el)=>leaf2=el} className='absolute -top-[1rem] left-[4.5rem] -rotate-45 ' width={60} src={"/assets/leaf.png"} />
      <img ref={(el=>{redCircle=el})} src={"assets/red-circle.png"}  className='absolute left-[23rem] top-[12rem] ' width={50} />
      <img ref={(el=>{smallcircle=el})} src={"assets/orange.png"} width={30} height={20}  className='absolute left-[30rem] top-[5rem] '  />
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
            src={"/assets/Mac.jpg"}
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
            ref={(el=>{phoneImage=el})}
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
