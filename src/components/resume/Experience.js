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
            result="Patna"
            des="Work on some React Projects with my Friends."
          />
          <ResumeCard
            title="Wordpress Intern"
            subTitle="Aadiv.ml - (5/6/2021 - 13/10/2022)"
            result="Patna"
            des="Web Developer: Specialize in developing WordPress websites, themes, and plugins, utilizing HTML, CSS, and JavaScript."
          />
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">
            2023 - Present
          </p>
          <h2 className="text-4xl font-bold">Project Development Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="StuDoc"
            subTitle="In Progress..."
            // result="UK"
            des="StuDoc is a website made using NextJS and ReactJS from where you can Downloads all Kind of Study Material Related to BEU"
          />
          <ResumeCard
            title="Promptopis"
            subTitle="Completed"
            // result="CANADA"
            des="Developed using NextJS. You can Login using your google account and create a Prompt"
          />
          <ResumeCard
            title="Natours API"
            subTitle="Completed (2022 - 2023)"
            // result="India"
            des="This website is Developed using NodeJs, ExpressJS, MongoDB, PUG, Javascript, Where You can Login, Signup, Create, Rename, Update and Delete Tour. You Can also give rating and reviews to a tour and Manage your profile."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
