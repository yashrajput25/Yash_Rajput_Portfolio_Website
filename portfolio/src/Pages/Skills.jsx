
import { useState } from "react";
import SkillButton from "../components/buttons/SkillButton";
import SkillCard from "../components/SkillCard";
import FrontendSkills from "../components/SkillSections/FrontendSkills";
import Languages from "../components/SkillSections/Languages";
import BackendSkills from "../components/SkillSections/BackendSkills";
import Databases from "../components/SkillSections/Databases";
import Tools from "../components/SkillSections/Tools";
import AllSkills from "../components/SkillSections/AllSkills";
const Skills = () => { 

    const [activeTab, setActiveTab] = useState("Frontend");

    return (
        
        <div className="skills-page-content flex flex-col flex-1 md:gap-15 gap-2.5 min-h-screen py-15">


                <div className="flex flex-col items-center justify-center mb-5">
                    
                    <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-blue-600">
                        Technical
                    </p>

                    <h1 className="font-poppins text-4xl font-semibold text-slate-900 sm:text-5xl">
                        Skills
                    </h1>
                    <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-blue-600" />
                </div>

            <div className="tabbed-navigation-bar flex flex-wrap items-center justify-center gap-1.5 md:gap-12.5">
                <SkillButton  text="All" setActiveTab = {setActiveTab}/>
                <SkillButton text="Languages" setActiveTab = {setActiveTab}/>
                <SkillButton text="Frontend" setActiveTab={setActiveTab}/>
                <SkillButton text="Backend" setActiveTab={setActiveTab}/>
                <SkillButton text="Databases" setActiveTab={setActiveTab}/>
                <SkillButton text="Tools" setActiveTab={setActiveTab}/>
            </div>

            <div className="skills-section flex items-center justify-center">

                {activeTab === "All" && <AllSkills/>}
                {activeTab === "Languages" && <Languages/>}
                {activeTab === "Frontend" && <FrontendSkills/>}
                {activeTab === "Backend" && <BackendSkills/>}
                {activeTab === "Databases" && <Databases/>}
                {activeTab === "Tools" && <Tools/>}
            </div>

        </div>
    );
}

export default Skills;
