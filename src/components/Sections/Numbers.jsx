import { useRef } from "react";
import ldce from "../../assets/ldce.webp";
import { motion } from "framer-motion";

export default function Numbers() {
  function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.innerHTML = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }

  const obj = useRef();
  const obj1 = useRef();
  const obj2 = useRef();

  function handleFocus() {
    animateValue(obj.current, 9950, 10000, 1000);
    animateValue(obj1.current, 950, 1000, 1000);
    animateValue(obj2.current, 5, 14, 1000);
  }

  return (
    <motion.div
      className="h-[500px] sm:h-[450px]"
      style={{
        position: "relative",
        backgroundImage: `url(${ldce})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      id="box"
      whileInView={handleFocus}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          backdropFilter: "blur(5px)",
        }}
        className="flex flex-col sm:flex-row items-center justify-center text-white gap-20 p-[2rem]"
      >
        <div className="flex flex-col items-center">
          <div className="flex justify-center">
            <p
              className="text-5xl sm:text-[4rem] xl:text-[5rem] font-bold text-center mb-2"
              id="value1"
              ref={obj}
            >
              10000
            </p>
            <span className="text-5xl sm:text-[4rem] xl:text-[5rem]">
              +
            </span>
          </div>
          <p className="text-l justify-self-center pr-[20px]">STUDENTS</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex justify-center">
            <p
              className="text-5xl sm:text-[4rem] xl:text-[5rem] font-bold text-center mb-2"
              id="value2"
              ref={obj1}
            >
              1000
            </p>
            <span className="text-5xl sm:text-[4rem] xl:text-[5rem]">+</span>
          </div>
          <p className="text-l justify-self-center pr-[20px]">DEPARTMENT</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex justify-center">
            <p
              className="text-5xl sm:text-[4rem] xl:text-[5rem] font-bold text-center mb-2"
              id="value3"
              ref={obj2}
            >
              14
            </p>
            <span className="text-5xl sm:text-[4rem] xl:text-[5rem]">+</span>
          </div>
          <p className="text-l justify-self-center pr-[20px]">FACULTY</p>
        </div>
      </div>
    </motion.div>
  );
}
