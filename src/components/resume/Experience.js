import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex flex-col gap-20 md:flex-row"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2023 - 20XX</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          {/* <ResumeCard
            title="Sr. Software Engineer"
            subTitle="Google - (20XX - Present) [Goal in my bucketlist]"
            result="USA"
            des="Google's hiring process is an important part of our culture. Googlers care deeply about their teams and the people who make them up."
          /> */}
          <ResumeCard
            title="Web Developer"
            subTitle="React Developer Team"
            // result="USA"
            des="Work on some React Projects with my Friends."
          />
          {/* <ResumeCard
            title="Data Analyst Intern"
            subTitle="Xemi - (5/6/2023 - 5/9/2023)  [3 months]"
            result="Mumbai, Maharashtra"
            des="Writing Web Scrapping codes to extract required data for website’s database and training ML models. Mode of work: Hybrid."
          /> */}
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">
            2023 - Present
          </p>
          <h2 className="text-4xl font-bold">Trainer Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          {/* <ResumeCard
            title="ML Instructor"
            subTitle="ABC Platform (20XX - 20XX)"
            result="UK"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
          /> */}
          <ResumeCard
            title="Web Developer and Instructor"
            subTitle="B E University (2023 - Present)"
            // result="CANADA"
            des="Codinator of the Coding Society. guided student and help them to solve difficulties in developing ReactJS and NextJS Projects"
          />
          {/* <ResumeCard
            title="App Developer"
            subTitle="ABC Company (20XX - 20XX)"
            result="India"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
          /> */}
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
