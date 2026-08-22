

const SkillCard = ({text, linkToImage}) => { 
    return (
        <div className="skill-card border-2 w-38 h-38 flex flex-col items-center justify-center gap-3 rounded-xl border-gray-200 hover:shadow-xl hover:border-[#4070F4] m-5">

            <div className="img_conatiner w-10 h-10">
                <img 
                src={linkToImage} 
                alt={text}
                />
            </div>
    
            <p className="text-xl font-semibold">{text}</p>
        </div>
    )
}
export default SkillCard;