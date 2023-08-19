import { gsap, Linear, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";
import { useState } from "react";
function SelfImprovement() {
  gsap.registerPlugin(ScrollTrigger);
  let text1 = useRef(null);
  let text2 = useRef(null);
  let blue = useRef(null);
  const [num, setNum] = useState(1);

  function handleClick(num) {
    setNum(num);
  }

  useEffect(() => {
    gsap.from(text1, {
      duration: 1,
      opacity: 0,
      x: -100,
      ease: "Power3.out",
      scrollTrigger: {
        trigger: text1,
        start: "top 80% ",
        start: "bottom 50%",
        toggleActions: "restart complete reverse reset",
      },
    });
    gsap.from(text2, {
      duration: 1,
      opacity: 0,
      x: -100,
      ease: "Power3.out",
      scrollTrigger: {
        trigger: text2,
        start: "top 80% ",
        start: "bottom 50%",
        toggleActions: "restart complete reverse reset",
      },
    });

    gsap.from(blue, {
      x: 330,
      y: 100,
      duration: 2,
      ease: "Power3.out",
      scrollTrigger: {
        trigger: text1,
        start: "top 80% ",
      },
    });
  }, []);

  return (
    <div className="mt-40 relative w-full  ">
      <p
        ref={(el) => {
          text1 = el;
        }}
        className="text-lg font-bold mb-4"
      >
        Wrong with self-improvement and how we're fixing it.
      </p>

      <h2
        ref={(el) => {
          text2 = el;
        }}
        className="text-4xl font-bold  "
      >
        Self-improvement. Ugh.
      </h2>
      <img
        ref={(el) => {
          blue = el;
        }}
        className="absolute right-[36rem] top-1"
        width={105}
        src={"/assets/red-cutei-pie.png"}
        alt="icon"
      />
      <div className="w-full mt-11 transition-all duration-1000  flex flex-col items-center justify-center h-[400px] overflow-y-auto scrollbar-hide  ">
        <div
          onMouseEnter={() => handleClick(1)}
          className="flex relative mt-96 cursor-default  right-2 top-2  justify-center items-center"
        >
          <div
            className={`h-[40px] w-[40px] ${
              num == 1 ? "bg-blue-200" : "bg-white"
            }  right-4  relative z-30 rounded-full flex items-center justify-center `}
          >
            <div className="w-1 bg-[#6341ED] h-28  mt-3 ">
              <div className="h-[20px] w-[20px]  rounded-full  relative top-10 right-2 bg-[#6341ED]"></div>
            </div>
          </div>
          <div className={`${num == 1 ? "opacity-100" : "opacity-50"}`}>
            <div className="text-lg font-bold">It's not easy as 1-2-3...</div>
            <div className="text-lg font-medium">
              The journey of change may be long, but our sessions are quick. We
              get <br /> to the point and tell you what you want to know (and
              nothing else).
            </div>
          </div>
        </div>

        <div
          onMouseEnter={() => handleClick(2)}
          className="flex relative mt-8 cursor-default  right-2 top-2  justify-center items-center"
        >
          <div
            className={`h-[40px] w-[40px] ${
              num == 2 ? "bg-blue-200" : "bg-white"
            }  right-4  relative z-30 rounded-full flex items-center justify-center `}
          >
            <div className="w-1 bg-[#6341ED] h-32  mt-3 ">
              <div className="h-[20px] w-[20px]  rounded-full  relative top-12 right-2 bg-[#6341ED]"></div>
            </div>
          </div>
          <div className={`${num == 2 ? "opacity-100" : "opacity-50"}`}>
            <div className="text-lg font-bold">
              Old habits are hard to break.
            </div>
            <div className="text-lg font-medium">
              The journey of change may be long, but our sessions are quick. We
              get <br /> to the point and tell you what you want to know (and
              nothing else).
            </div>
          </div>
        </div>

        <div
          onMouseEnter={() => handleClick(3)}
          className="flex relative mt-8 cursor-default  right-2 top-2  justify-center items-center"
        >
          <div
            className={`h-[40px] w-[40px] ${
              num == 3 ? "bg-blue-200" : "bg-white"
            }  right-4  relative z-30 rounded-full flex items-center justify-center `}
          >
            <div className="w-1 bg-[#6341ED] h-32  mt-3 ">
              <div className="h-[20px] w-[20px]  rounded-full  relative top-12 right-2 bg-[#6341ED]"></div>
            </div>
          </div>
          <div className={`${num == 3 ? "opacity-100" : "opacity-50"}`}>
            <div className="text-lg font-bold">
              You and your motivation don't have a long-term relationship
            </div>
            <div className="text-lg font-medium">
              The journey of change may be long, but our sessions are quick. We
              get <br /> to the point and tell you what you want to know (and
              nothing else).
            </div>
          </div>
        </div>

        <div
          onMouseEnter={() => handleClick(4)}
          className="flex relative mt-8 cursor-default  right-2 top-2  justify-center items-center"
        >
          <div
            className={`h-[40px] w-[40px] ${
              num == 4 ? "bg-blue-200" : "bg-white"
            }  right-4  relative z-30 rounded-full flex items-center justify-center `}
          >
            <div className="w-1 bg-[#6341ED] h-32  mt-3 ">
              <div className="h-[20px] w-[20px]  rounded-full  relative top-12 right-2 bg-[#6341ED]"></div>
            </div>
          </div>
          <div className={`${num == 4 ? "opacity-100" : "opacity-50"}`}>
            <div className="text-lg font-bold">
            Books just don't offer practical solutions.
            </div>
            <div className="text-lg font-medium">
              The journey of change may be long, but our sessions are quick. We
              get <br /> to the point and tell you what you want to know (and
              nothing else).
            </div>
          </div>
        </div>
        <div
          onMouseEnter={() => handleClick(5)}
          className="flex relative mt-8 cursor-default  right-2 top-2  justify-center items-center"
        >
          <div
            className={`h-[40px] w-[40px] ${
              num == 5 ? "bg-blue-200" : "bg-white"
            }  right-4  relative z-30 rounded-full flex items-center justify-center `}
          >
            <div className="w-1 bg-[#6341ED] h-32  mt-3 ">
              <div className="h-[20px] w-[20px]  rounded-full  relative top-12 right-2 bg-[#6341ED]"></div>
            </div>
          </div>
          <div className={`${num == 5 ? "opacity-100" : "opacity-50"}`}>
            <div className="text-lg font-bold">
            You and your motivation don't have a long-term relationship
            </div>
            <div className="text-lg font-medium">
              The journey of change may be long, but our sessions are quick. We
              get <br /> to the point and tell you what you want to know (and
              nothing else).
            </div>
          </div>
        </div>
        <div
          onMouseEnter={() => handleClick(6)}
          className="flex relative mt-8 cursor-default  right-2 top-2  justify-center items-center"
        >
          <div
            className={`h-[40px] w-[40px] ${
              num == 6 ? "bg-blue-200" : "bg-white"
            }  right-4  relative z-30 rounded-full flex items-center justify-center `}
          >
            <div className="w-1 bg-[#6341ED] h-32  mt-3 ">
              <div className="h-[20px] w-[20px]  rounded-full  relative top-12 right-2 bg-[#6341ED]"></div>
            </div>
          </div>
          <div className={`${num == 6 ? "opacity-100" : "opacity-50"}`}>
            <div className="text-lg font-bold">
            Books just don't offer practical solutions.
            </div>
            <div className="text-lg font-medium">
              The journey of change may be long, but our sessions are quick. We
              get <br /> to the point and tell you what you want to know (and
              nothing else).
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelfImprovement;
