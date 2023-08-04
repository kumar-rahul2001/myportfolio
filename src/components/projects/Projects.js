import React from "react";
import Title from "../layouts/Title";
import {
  projectOne,
  projectTwo,
  projectThree,
  projectFour,
  projectFive,
  projectSix,
  projectSeven,
  projectEight,
} from "../../assets/index";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="Check these out on my github" des="My Projects" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Natours API"
          des=" Natours api is a complete MERN stack project. Where you can create, update, delete and find a Tour according to your need. You can also login/logout "
          src={projectOne}
          githubLink="https://github.com/kumar-rahul2001/natours-api"
          websiteLink="https://github.com/kumar-rahul2001/natours-api"
        />
        <ProjectsCard
          title="studoc"
          des=" studoc is a place where you can get all your technical stuff related to Bihar Engineering University together at one place."
          src={projectTwo}
          githubLink="https://studoc.vercel.app/"
          websiteLink="https://studoc.vercel.app/"
        />
        <ProjectsCard
          title="Promptopia"
          des=" Promptopia is an open-source AI prompting tool for modern world to discover, create and share creative prompts"
          src={projectThree}
          githubLink="https://github.com/kumar-rahul2001/Promptopia"
          websiteLink="https://promptopia-lilac-tau.vercel.app/"
        />
        <ProjectsCard
          title="Expense Tracker"
          des=" This is a daily expense tracker website made with Next.js and Mongoose & MongoDB database."
          src={projectFour}
          githubLink="https://github.com/kumar-rahul2001/expensetracker"
          websiteLink="https://d2dexpensetracker.netlify.app"
        />
        <ProjectsCard
          title="Node Farm"
          des=" It is node farm website where you can list your farm products along with their description and sell to the customer ."
          src={projectFive}
          githubLink="https://github.com/kumar-rahul2001/node-farm"
          websiteLink="https://github.com/kumar-rahul2001/node-farm"
        />
        <ProjectsCard
          title="Word Editor - Textutils"
          des=" TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters."
          src={projectSix}
          githubLink="https://github.com/kumar-rahul2001/Textutils"
          websiteLink="https://wordtextutils.netlify.app"
        />
        <ProjectsCard
          title="News Monkey"
          des=" NewsMonkey is a website which have different news categories. I created this website using React. To get the news content I use and News API ."
          src={projectSeven}
          githubLink="https://github.com/kumar-rahul2001/NewsMonkey"
          websiteLink="https://github.com/kumar-rahul2001/NewsMonkey"
        />
        <ProjectsCard
          title="Feel Good Movie"
          des="Created this website using HTML, CSS And JavaScript"
          src={projectEight}
          githubLink="https://github.com/kumar-rahul2001/Online-Movie-Streaming-Website-Frontend"
          websiteLink="https://github.com/kumar-rahul2001/Online-Movie-Streaming-Website-Frontend"
        />
      </div>
    </section>
  );
};

export default Projects;
