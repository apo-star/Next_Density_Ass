import {gsap,Linear, Power3} from 'gsap';
import {ScrollTrigger} from "gsap/ScrollTrigger"
import {useRef,useEffect} from 'react';
import React from 'react'

function TestPrivacy() {

    gsap.registerPlugin(ScrollTrigger);
    let data1= useRef(null);
    let data2= useRef(null);
    let button=useRef(null);

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
            toggleActions:"restart complete reverse reset"
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
            toggleActions:"restart complete reverse reset"
          }

        })

        gsap.from(button,{
            scale:0,
            opacity:0,
            rotate:100,
            duration:3.2,
            ease:"elastic.out(1.2, 0.3)",
            scrollTrigger: {
              trigger: data1,
              start:"top 80% ",
              toggleActions:"restart complete  "
            }
  
        })
    },[])


    return (
        <div className='text-center mt-40'>
            <p className='text-lg font-semibold' >We take privacy seriously</p>
            <h1 ref={(el=>{data1=el})} className='text-4xl mt-2 font-bold'>Before you get started</h1>
            <p  ref={(el=>{data2=el})} className='text-2xl mt-5'>"We won't share your answers with anyone and won't ever tell <br/>
                you which friends said what about you"
            </p>
            <p className='text-lg inline-block mt-12'>with love,  </p>
            <span className='inline-block'><img src={"/assets/Signature.png"} width={180} height={150} /> </span>
            <br/>
            <button ref={(el=>{button=el})} className='bg-black mt-8 rounded-2xl p-3 text-white'>Start a test</button>
            <p className='text-sm mt-5'>Take only 5 minutes</p>
        </div>
    )
}

export default TestPrivacy