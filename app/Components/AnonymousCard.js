import {gsap,Linear, Power3} from 'gsap';
import {ScrollTrigger} from "gsap/ScrollTrigger"
import {useRef,useEffect} from 'react';
import React from 'react'
import Image from 'next/image';

function AnonymousCard() {

    gsap.registerPlugin(ScrollTrigger);
    let First=useRef(null);
    let Second=useRef(null);
    let Third=useRef(null);

    let data1= useRef(null);
    let data2= useRef(null);
    let data3= useRef(null);
    let data4= useRef(null);
    let data5= useRef(null);
    
    let You=useRef(null);
    let Anonymous1=useRef(null);
    let Anonymous2=useRef(null);
    let Anonymous3=useRef(null);

    useEffect(()=>{
        gsap.from(data1,{
          duration:1,
          opacity:0,
          y:-50,
          ease:"Power3.out",
          scrollTrigger: {
            trigger: data1,
            start:"top 80% ",
            start:"bottom 50%",
          }

        })
        gsap.from(data2,{
          duration:1,
          opacity:0,
          y:-50,
          ease:"Power3.out",
          scrollTrigger: {
            trigger: data2,
            start:"top 80% ",
            start:"bottom 50%",
          }

        })

        gsap.from(First,{
            scale:0,
            opacity:0,
            rotation:1000,
            duration:3,
            ease:"elastic.out(1.2, 0.3)",
            scrollTrigger: {
              trigger: data1,
              start:"top 80% ",
              toggleActions:"restart complete"
            }
  
        })
        gsap.from(data3,{
            scale:0,
            opacity:0,
            duration:1,
            scrollTrigger: {
              trigger: data1,
              start:"top 80% ",
              toggleActions:"restart complete"
            }
  
        })
        gsap.from(data4,{
            scale:0,
            opacity:0,
            duration:1,
            scrollTrigger: {
              trigger: data1,
              start:"top 80% ",
              toggleActions:"restart complete"
            }
  
        })
        gsap.from(data5,{
            scale:0,
            opacity:0,
            duration:1,
            scrollTrigger: {
              trigger: data1,
              start:"top 80% ",
              toggleActions:"restart complete"
            }
  
        })
        gsap.from(Second,{
            scale:0,
            opacity:0,
            rotate:100,
            delay:0.4,
            duration:3,
            rotation:1000,
            ease:"elastic.out(1.2, 0.3)",
            scrollTrigger: {
              trigger: data1,
              start:"top 80% ",
              toggleActions:"restart complete"
            }
  
        })
        gsap.from(Third,{
            scale:0,
            opacity:0,
            rotate:100,
            delay:0.6,
            rotation:1000,
            duration:3,
            ease:"elastic.out(1.2, 0.3)",
            scrollTrigger: {
              trigger: data1,
              start:"top 80% ",
              toggleActions:"restart  complete"
            }
  
        })
        gsap.from(You,{
            opacity:0,
            rotate:100,
            duration:1.2,
            ease:"elastic.out(1.2, 0.3)",
            scrollTrigger: {
              trigger: You,
              start:"top 80% ",
              toggleActions:"restart complete"
            }
  
        })
        gsap.from(Anonymous1,{
            opacity:0,
            rotate:100,
            delay:0.4,
            duration:1.2,
            ease:"elastic.out(1.2, 0.3)",
            scrollTrigger: {
              trigger: You,
              start:"top 80% ",
              toggleActions:"restart complete"
            }
  
        })
        gsap.from(Anonymous2,{
            opacity:0,
            rotate:100,
            delay:0.6,
            duration:1.2,
            ease:"elastic.out(1.2, 0.3)",
            scrollTrigger: {
              trigger: You,
              start:"top 80% ",
              toggleActions:"restart complete"
            }
  
        })
        gsap.from(Anonymous3,{
            opacity:0,
            rotate:100,
            delay:1,
            duration:1.2,
            ease:"elastic.out(1.2, 0.3)",
            scrollTrigger: {
              trigger: You,
              start:"top 80% ",
              toggleActions:"restart complete"
            }
  
        })
   

        
    },[])

  return (
    <div className='bg-[#EEF8FE] rounded-3xl h-[750px] p-12 mt-40 flex flex-col w-full items-center'>
        <p ref={(el=>{data1=el})}  className='text-lg font-semibold'>Let your friends, family, and co-workers (anonymously) rate your social skills.</p>
        <p ref={(el=>{data2=el})} className='text-5xl  font-bold mt-5'>Ever wondered what others think of you?</p>
        <div className='border-dashed mt-20  border-[#EAC57D] border-[2px] w-[65%] border-collapse'>  </div>
        <div className='flex relative bottom-7 w-full justify-evenly gap-10'>
            <div className='flex flex-col  items-center'>
                <img  ref={(el=>{First=el})} src={"/assets/N1-icon.png"} width={40} />
                <p  ref={(el=>{data3=el})} className='text-sm'>Answer questions on your social skills</p>
            </div>
            <div className='flex flex-col  items-center'>
                <img ref={(el=>{Second=el})} src={"/assets/N2-icon.png"} width={40} />
                <p ref={(el=>{data4=el})} className='text-sm text-center'>Let others anonymously answer the same <br/> question about you</p>
            </div>
            <div className='flex flex-col  items-center'>
                <img ref={(el=>{Third=el})} src={"/assets/N3-icon.png"} width={40} />
                <p ref={(el=>{data5=el})} className='text-sm text-center'>Find out where you and others see things <br/> the same way - and where not!</p>
            </div>
        </div>
        <div className='bg-white items-center flex-col justify-center rounded-3xl flex p-10 pt-20 mt-20 w-[700px] h-[250px]' >
            <div className='w-[80%] mt-12 h-1 rounded-3xl border-[2px] border-gray-400' ></div>
            <div className='flex  justify-between w-full align-baseline items-center'>
                <div className='relative bottom-[4.7rem]'>
                    <div ref={(el=>{You=el})} className='bg-[#6441EF] rounded-2xl p-4 px-6'>you</div>
                    <div className=' relative left-14 mt-2 h-[20px] w-[20px] rounded-full bg-[#6441EF]' ></div>
                </div>
                <div className='relative bottom-[0.85rem] '>
                <div className='h-[20px] w-[20px] mb-2 rounded-full bg-[#40C2FD]' ></div>
                <div ref={(el=>{Anonymous1=el})} className='bg-[#40C2FD] w-full rounded-2xl p-4 '>Anonymous 1</div>
                </div>

                <div className='bottom-[4.7rem]  relative'>
                <div ref={(el=>{Anonymous2=el})} className='bg-[#FDB438] mb-2 w-full rounded-2xl p-4 '>Anonymous 2</div>
                <div className='h-[20px] w-[20px] rounded-full bg-[#FDB438]' ></div>
                </div>

                <div className='bottom-[0.85rem] relative'>
                <div className='h-[20px] mb-2 w-[20px] relative left-14 rounded-full bg-[#57C897]' ></div>
                <div ref={(el=>{Anonymous3=el})} className='bg-[#57C897] w-full rounded-2xl p-4 '>Anonymous 3</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AnonymousCard