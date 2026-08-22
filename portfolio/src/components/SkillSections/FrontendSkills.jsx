import SkillCard from "../SkillCard";
import react from "../../assets/react.png";
import js from "../../assets/js.png"
import html from "../../assets/html.png"
import css from "../../assets/css.png"
import tailwind from "../../assets/tailwind.png"


const FrontendSkills = () =>{
    return (
    <div className='flex flex-wrap items-center justify-center'>
        
        <SkillCard linkToImage={html} text={"HTML"}/>
        <SkillCard linkToImage={css} text={"CSS"}/>
        <SkillCard linkToImage={tailwind} text={"Tailwind"}/>
        <SkillCard linkToImage={react} text={"ReactJS"}/>
        <SkillCard linkToImage={js} text={"JavaScript"}/>

    </div>)
}
export default FrontendSkills;