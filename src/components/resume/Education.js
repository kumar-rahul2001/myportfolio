import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2006 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Educational Qualification
          </h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BTech in Computer Science Engineering"
            subTitle="Bihar Engineering University (2020 - 2024)"
            result="8.5 + CGPA"
            des="Studied Computer Science related subjects like Operating Systems, DBMS, OOPS, ML, Web Development, AI, DSA, Compiler Design etc."
          />
          <ResumeCard
            title="Higher Secondary Education"
            subTitle="M G S S Darbhanga (2017 - 2019)"
            result="80.00%"
            des="Studied in this school from 11th to 12th std. HSC Subjects: PCM, English, Environment Education. "
          />
          <ResumeCard
            title="Primary & Secondary School Education"
            subTitle="Mount Carmel English School Jaynagar (2006 - 2017)"
            result="10/10 CGPA "
            des="Studied in this school from Nursery to 10th std. SSC Subjects: English, Hindi, Maths, Science, Social Sciences."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2020 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Certificates</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title=" The Complete 2023 Web Development Bootcamp By Jonas Schemedtmann"
            subTitle="Udemy - (01/01/2023 - 20/03/2023) [3 months]"
            result="Online"
            des="Learnt MERN stack and made various project using the skills in this course. Check out my Github for project info !"
          />
          <ResumeCard
            title=" Machine Learning in Python"
            subTitle="Udemy - (01/04/2023 - 28/06/2023) [3 months]"
            result="Online"
            des="A popular and trending technology in modern days. Completed few projects while learning the course by Jose Portilla"
          />
          {/* <ResumeCard
            title="Neo4j"
            subTitle="GRAPHACADEMY - (Issued on 4th November 2022)"
            result="Online"
            des=" Learned basics of Neo4j - a database management system "
          /> */}
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
