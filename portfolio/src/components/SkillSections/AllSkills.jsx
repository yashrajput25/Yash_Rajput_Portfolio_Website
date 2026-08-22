import React from 'react'
import SkillCard from "../SkillCard";
import mongodb from "../../assets/mongodb.png";
import mysql from "../../assets/mysql.png";
import postgresql from "../../assets/postgresql.png";
import git from "../../assets/git.png";
import github from "../../assets/github.png";
import postman from "../../assets/postman.png";
import tc from "../../assets/tc.png";
import docker from "../../assets/docker.png";
import react from "../../assets/react.png";
import js from "../../assets/js.png"
import html from "../../assets/html.png"
import css from "../../assets/css.png"
import tailwind from "../../assets/tailwind.png"
import springboot from "../../assets/springboot.png";
import ex from "../../assets/ex.png";
import nodejs from "../../assets/nodejs.png";
import cpp from "../../assets/cpp.png";
import java from "../../assets/java.png";

const AllSkills = () => {
  return (
    <div className='flex flex-wrap items-center justify-center'>
            <SkillCard text={"Spring Boot"} linkToImage={springboot}/>
            <SkillCard text={"Node JS"} linkToImage={nodejs}/>
            <SkillCard text={"Express JS"} linkToImage={ex}/>
            <SkillCard text={"MongoDB"} linkToImage={mongodb}/>
            <SkillCard text={"MySQL"} linkToImage={mysql}/>
            <SkillCard text={"PostgreSQL"} linkToImage={postgresql}/>

        <SkillCard linkToImage={html} text={"HTML"}/>
        <SkillCard linkToImage={css} text={"CSS"}/>
        <SkillCard linkToImage={tailwind} text={"Tailwind"}/>
        <SkillCard linkToImage={react} text={"ReactJS"}/>
        <SkillCard linkToImage={js} text={"JavaScript"}/>

            <SkillCard text={"C++"} linkToImage={cpp}/>
            <SkillCard text={"Java"} linkToImage={java}/>
            <SkillCard text={"JavaScript"} linkToImage={js}/>

            <SkillCard text={"Git"} linkToImage={git}/>
            <SkillCard text={"GitHub"} linkToImage={github}/>
            <SkillCard text={"Postman"} linkToImage={postman}/>
            <SkillCard text={"Thunder Client"} linkToImage={tc}/>
            <SkillCard text={"Docker"} linkToImage={docker}/>

    </div>
  )
}

export default AllSkills
