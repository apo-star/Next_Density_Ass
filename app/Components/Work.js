import {gsap} from 'gsap';
import {ScrollTrigger} from "gsap/ScrollTrigger"
import {useRef,useEffect} from 'react';
import React from 'react'

function Work() {
    gsap.registerPlugin(ScrollTrigger);
    let text1= useRef(null);
    let text2= useRef(null);
    let pinkie=useRef(null);

    useEffect(()=>{
        gsap.from(text1,{
          duration:1,
          opacity:0,
          y:-50,
          ease:"Power3.out",
          scrollTrigger: {
            trigger: text1,
            start:"top 80% ",
            start:"bottom 50%",
            toggleActions:"restart complete reverse reset"
          }

        })
        gsap.from(text2,{
          duration:1,
          opacity:0,
          y:-50,
          ease:"Power3.out",
          scrollTrigger: {
            trigger: text2,
            start:"top 80% ",
            start:"bottom 50%",
            toggleActions:"restart complete reverse reset"
          }

        })

        gsap.from(pinkie,{
            scale:0,
            opacity:0,
            rotate:100,
            duration:3.2,
            repeat:-1,
            ease:"elastic.out(1.2, 0.3)",
            scrollTrigger: {
            trigger: text1,
            start:"top 80% "
            }
  
        })        
    },[])

    return (
        <div className='h-[800px] p-8 flex rounded-3xl mt-40 bg-[#F3F1FF]'>
            <div className='w-[50%] -ml-5  p-11 '>
                <h1 ref={(el=>{text1=el})} className='text-5xl font-bold'>Work with us</h1>

                <div className='w-full flex flex-col gap-4 p-4 rounded-t-3xl mt-9 bg-white '>
                    <img ref={(el=>{pinkie=el})} className='rounded-3xl border-radius-50%' width={70} src={"/assets/purple pie.gif"} alt='purple'/>
                    <h1  className='text-xl font-bold'>About</h1>
                    <p className='text-lg leading-8'>At ahead our goal is to make self-
                        improvement fun and lasting. We know there's
                        a way how to make it work. And that's what
                        aHead is all about!
                    </p>
                </div>

                <div className='w-full flex flex-col gap-4 p-4 rounded-b-3xl  bg-[#FEF6F0] py-12 '>
                    <h1 className='text-xl font-bold'>Product</h1>
                    <p className='text-lg leading-8'>Sure, you could spend ages reading books or
                        sitting in seminars on how to become a better
                        spouse, parent, or manager - like we did...
                    </p>

                </div>

            </div>
            <div className='w-[50%]  p-11 '>
                <h1  ref={(el=>{text2=el})} className='text-5xl text-[#6448D6] text-right font-bold'>ahead</h1>
                <div className='flex justify-center h-[600px] overflow-y-auto  scrollbar-thumb-[#8167e8] scrollbar-medium scrollbar-thin scrollbar-track-white  flex-col gap-5 items-center mt-11  p-4 -mr-8'>
                <div className='w-[70%] h-[200px] justify-center  flex flex-col mt-52 gap-4 p-4 rounded-3xl  bg-white py-12 '>
                        <h1 className=' font-bold'>Power through, even when <br /> the
                            going gets tough
                        </h1>
                        <p className='text-sm '>We help you spot and work around
                            whatever stands in the way, be it bad
                            habits, fears, etc.
                        </p>
                    </div>
                    <div className='w-[70%] h-[200px] justify-center  flex flex-col mt-52 gap-4 p-4 rounded-3xl  bg-white py-12 '>
                        <h1 className=' font-bold'>Power through, even when <br /> the
                            going gets tough
                        </h1>
                        <p className='text-sm '>We help you spot and work around
                            whatever stands in the way, be it bad
                            habits, fears, etc.
                        </p>
                    </div>
                    <div className='w-[70%] h-[200px] justify-center  flex flex-col gap-4 p-4 rounded-3xl  bg-white py-12 '>
                        <h1 className=' font-bold'>Learn more about who you <br /> 
                        others on the same journey
                        </h1>
                        <p className='text-sm '>Ahead feels like a game, not like a chore. 
                        See yourself grow every day towards
                        achieving your goals!
                        </p>

                    </div>
                    <div className='w-[70%] h-[200px] justify-center  flex flex-col gap-4 p-4 rounded-3xl  bg-white py-12 '>
                        <h1 className=' font-bold'>Play and grow together with <br /> the
                            going gets tough
                        </h1>
                        <p className='text-sm '>We help you spot and work around
                            whatever stands in the way, be it bad
                            habits, fears, etc.
                        </p>
                    </div>
                    <div className='w-[70%] h-[200px] justify-center  flex flex-col gap-4 p-4 rounded-3xl  bg-white py-12 '>
                        <h1 className=' font-bold'>Power through, even when <br /> the
                            going gets tough
                        </h1>
                        <p className='text-sm '>We help you spot and work around
                            whatever stands in the way, be it bad
                            habits, fears, etc.


                        </p>

                    </div>
                    <div className='w-[70%] h-[200px] justify-center  flex flex-col gap-4 p-4 rounded-3xl  bg-white py-12 '>
                        <h1 className=' font-bold'>Play and grow together with <br /> the
                            going gets tough
                        </h1>
                        <p className='text-sm '>We help you spot and work around
                            whatever stands in the way, be it bad
                            habits, fears, etc.
                        </p>
                    </div>
                    <div className='w-[70%] h-[200px] justify-center  flex flex-col gap-4 p-4 rounded-3xl  bg-white py-12 '>
                        <h1 className=' font-bold'>Power through, even when <br /> the
                            going gets tough
                        </h1>
                        <p className='text-sm '>We help you spot and work around
                            whatever stands in the way, be it bad
                            habits, fears, etc.
                        </p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work