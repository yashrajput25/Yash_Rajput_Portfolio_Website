import SkillCard from "../SkillCard";
import git from "../../assets/git.png";
import github from "../../assets/github.png";
import postman from "../../assets/postman.png";
import tc from "../../assets/tc.png";
import docker from "../../assets/docker.png";

const Tools = () =>{
    return <div className='flex flex-wrap items-center justify-center'>
            <SkillCard text={"Git"} linkToImage={git}/>
            <SkillCard text={"GitHub"} linkToImage={github}/>
            <SkillCard text={"Postman"} linkToImage={postman}/>
            <SkillCard text={"Thunder Client"} linkToImage={tc}/>
            <SkillCard text={"Docker"} linkToImage={docker}/>
    </div>
}

export default Tools;