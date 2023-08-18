import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function OpenVaccancy() {
  let data1 = useRef(null);
  let data2 = useRef(null);
  let data3 = useRef(null);
  let data4 = useRef(null);

  useEffect(() => {
    gsap.from(data1, {
      duration: 1,
      opacity: 0,
      y: -50,
      ease: 'Power3.out',
      scrollTrigger: {
        trigger: data1,
        start: 'top 100%',
        end: 'bottom 100%',
      },
    });
  }, [data1]);

  useEffect(() => {
    gsap.from(data2, {
      duration: 1,
      opacity: 0,
      y: -50,
      ease: 'Power3.out',
      scrollTrigger: {
        trigger: data2,
        start: 'top 100%',
        end: 'bottom 100%',
      },
    });
  }, [data2]);

  useEffect(() => {
    gsap.from(data3, {
      duration: 1,
      opacity: 0,
      y: -50,
      ease: 'Power3.out',
      scrollTrigger: {
        trigger: data3,
        start: 'top 100%',
        end: 'bottom 100%',
      },
    });
  }, [data3]);

  useEffect(() => {
    gsap.from(data4, {
      duration: 1,
      opacity: 0,
      y: -50,
      ease: 'Power3.out',
      scrollTrigger: {
        trigger: data4,
        start: 'top 100%',
        end: 'bottom 100%',
      },
    });
  }, [data4]);

  return (
    <div className='p-11 mt-28'>
      <p ref={(el) => (data1 = el)} className='text-5xl font-bold'>
        Open Vacancies
      </p>
      <div className='mt-12 justify-between gap-10 flex'>
        <div
          ref={(el) => (data2 = el)}
          className='bg-[rgb(254,251,236)] box overflow-hidden p-7 w-[400px] h-[320px] rounded-3xl'
        >
          <h1 className='text-xl font-bold'>Senior Full-Stack Engineer</h1>
            <div className='flex mt-5 gap-4 items-center'>
                <div className='bg-black h-[10px] w-[10px] rounded-full'></div>
                <div className='font-semibold '>Full Time Position</div>
            </div>
            <div className='flex mt-5 gap-4 items-center'>
                <div className='bg-black h-[10px] w-[10px] rounded-full'></div>
                <div className='font-semibold '>Berlin or Remote</div>
            </div>
            <div className='flex mt-5 gap-4 items-center'>
                <div className='bg-black h-[10px] w-[10px] rounded-full'></div>
                <div className='font-semibold '>$65-85k, 0.5-1.50% equity share options</div>
            </div>
            <button className='bg-black mt-12 rounded-2xl p-3 text-white ml-16 '>Start a test</button>
        </div>


        <div
          ref={(el) => (data3 = el)}
          className='bg-[rgb(254,251,236)] p-7 w-[400px] overflow-hidden h-[320px] box rounded-3xl'
        >
          <h1 className='text-xl font-bold'>Senior Full-Stack Engineer</h1>
            <div className='flex mt-5 gap-4 items-center'>
                <div className='bg-black h-[10px] w-[10px] rounded-full'></div>
                <div className='font-semibold '>Full Time Position</div>
            </div>
            <div className='flex mt-5 gap-4 items-center'>
                <div className='bg-black h-[10px] w-[10px] rounded-full'></div>
                <div className='font-semibold '>Berlin or Remote</div>
            </div>
            <div className='flex mt-5 gap-4 items-center'>
                <div className='bg-black h-[10px] w-[10px] rounded-full'></div>
                <div className='font-semibold '>$65-85k, 0.5-1.50% equity share options</div>
            </div>
            <button className='bg-black mt-12 rounded-2xl p-3 text-white ml-16 '>Start a test</button>
        </div>


        <div
          ref={(el) => (data4 = el)}
          className='bg-[rgb(254,251,236)] p-7 w-[400px] overflow-hidden h-[320px] box rounded-3xl'
        >
          <h1 className='text-xl font-bold'>Senior Full-Stack Engineer</h1>
            <div className='flex mt-5 gap-4 items-center'>
                <div className='bg-black h-[10px] w-[10px] rounded-full'></div>
                <div className='font-semibold '>Full Time Position</div>
            </div>
            <div className='flex mt-5 gap-4 items-center'>
                <div className='bg-black h-[10px] w-[10px] rounded-full'></div>
                <div className='font-semibold '>Berlin or Remote</div>
            </div>
            <div className='flex mt-5 gap-4 items-center'>
                <div className='bg-black h-[10px] w-[10px] rounded-full'></div>
                <div className='font-semibold '>$65-85k, 0.5-1.50% equity share options</div>
            </div>
            <button className='bg-black mt-12 rounded-2xl p-3 text-white ml-16 '>Start a test</button>
        </div>
      </div>
    </div>
  );
}

export default OpenVaccancy;