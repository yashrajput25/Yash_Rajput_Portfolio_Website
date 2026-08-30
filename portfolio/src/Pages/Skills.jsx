
import { useState } from "react";
import SkillButton from "../components/buttons/SkillButton";
import SkillCard from "../components/SkillCard";
import FrontendSkills from "../components/SkillSections/FrontendSkills";
import Languages from "../components/SkillSections/Languages";
import BackendSkills from "../components/SkillSections/BackendSkills";
import Databases from "../components/SkillSections/Databases";
import Tools from "../components/SkillSections/Tools";
import AllSkills from "../components/SkillSections/AllSkills";
import Footer from "../components/footer";
const Skills = () => { 

    const [activeTab, setActiveTab] = useState("All");

    return (
        
        <div className="skills-page-content page-text-animation flex flex-1 flex-col md:gap-15 gap-2.5 min-h-screen pt-15">


                <div className="flex flex-col items-center justify-center mb-5">
                    
                    <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-blue-600">
                        Technical
                    </p>

                    <h1 className="font-poppins text-4xl font-semibold text-slate-900">
                        Skills
                    </h1>
                    <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-blue-600" />
                </div>

            <div data-aos="zoom-in"
            className="tabbed-navigation-bar flex flex-wrap items-center justify-center gap-1.5 md:gap-12.5">
                <SkillButton text="All" activeTab = {activeTab} setActiveTab = {setActiveTab}/>
                <SkillButton text="Languages" activeTab = {activeTab} setActiveTab = {setActiveTab}/>
                <SkillButton text="Frontend" activeTab = {activeTab} setActiveTab={setActiveTab}/>
                <SkillButton text="Backend"  activeTab = {activeTab} setActiveTab={setActiveTab}/>
                <SkillButton text="Databases" activeTab = {activeTab} setActiveTab={setActiveTab}/>
                <SkillButton text="Tools" activeTab = {activeTab} setActiveTab={setActiveTab}/>
            </div>

            <div className="skills-section flex items-center justify-center">

                {activeTab === "All" && <AllSkills/>}
                {activeTab === "Languages" && <Languages/>}
                {activeTab === "Frontend" && <FrontendSkills/>}
                {activeTab === "Backend" && <BackendSkills/>}
                {activeTab === "Databases" && <Databases/>}
                {activeTab === "Tools" && <Tools/>}
            </div>

            <div className="mt-auto">
                <Footer/>
            </div>
            

        </div>
    );
}

export default Skills;
