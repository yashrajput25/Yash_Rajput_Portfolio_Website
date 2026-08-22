import SkillCard from "../SkillCard";
import cpp from "../../assets/cpp.png";
import js from "../../assets/js.png";
import java from "../../assets/java.png";

const Languages = () =>{
    return <div className='flex flex-wrap items-center justify-center'>
            <SkillCard text={"C++"} linkToImage={cpp}/>
            <SkillCard text={"Java"} linkToImage={java}/>
            <SkillCard text={"JavaScript"} linkToImage={js}/>

    </div>
}

export default Languages;