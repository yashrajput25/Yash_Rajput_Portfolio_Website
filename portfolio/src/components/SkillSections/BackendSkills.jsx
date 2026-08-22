import SkillCard from "../SkillCard";
import springboot from "../../assets/springboot.png";
import ex from "../../assets/ex.png";
import nodejs from "../../assets/nodejs.png";

const BackendSkills = () =>{
    return <div className='flex flex-wrap items-center justify-center'>
            <SkillCard text={"Spring Boot"} linkToImage={springboot}/>
            <SkillCard text={"Node JS"} linkToImage={nodejs}/>
            <SkillCard text={"Express JS"} linkToImage={ex}/>
    </div>
}

export default BackendSkills;