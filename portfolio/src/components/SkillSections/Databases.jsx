import SkillCard from "../SkillCard";
import mongodb from "../../assets/mongodb.png";
import mysql from "../../assets/mysql.png";
import postgresql from "../../assets/postgresql.png";

const Databases = () =>{
    return <div className='flex flex-wrap items-center justify-center'>
            <SkillCard text={"MongoDB"} linkToImage={mongodb}/>
            <SkillCard text={"MySQL"} linkToImage={mysql}/>
            <SkillCard text={"PostgreSQL"} linkToImage={postgresql}/>
    </div>
}

export default Databases;