import React from "react";
import { motion } from "motion/react";
export const fedup = (delay) => {
  return {
    hidden: {
      opacity: 0,
      y: 100,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: delay,
      },
    },
  };
};

const Banner = () => {
  return (
    <div className="hero bg-base-200 container">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex-1">
                                <motion.img
          animate = {{y:[100,50,100]}}
          transition={{duration:5, repeat: Infinity}}
            src="https://jobbox-nextjs-v3.vercel.app/assets/imgs/page/homepage1/banner1.png"
            className="max-w-sm rounded-lg shadow-2xl"
          />

          <motion.img
          animate = {{x:[100,150,100]}}
          transition={{duration:10, repeat: Infinity, delay:2}}
            src="https://jobbox-nextjs-v3.vercel.app/assets/imgs/page/homepage1/banner2.png"
            className="max-w-sm rounded-lg shadow-2xl"
          />

        </div>
        <div className="flex-1">
        </div>

        <div>
          <motion.h1
            variants={fedup(0.2)}
            initial="hidden"
            whileInView="show"
            className="text-5xl font-bold"
            animate={{
              color: ["#ff5733", "#33ff33", "#8a33ff"],
              transition: {
                duration: 4,
                repeat: Infinity,
              },
            }}
          >
            The Easiest Wayto Get Your New Job
          </motion.h1>
          <p className="py-6">
            Each month, more than 3 million job seekers turn to website in their
            search for work, making over 140,000 applications every single day
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
