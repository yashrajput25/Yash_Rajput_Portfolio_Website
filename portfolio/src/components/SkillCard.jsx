

const SkillCard = ({text, linkToImage}) => { 
    return (
        <div 
        data-aos="flip-down"
        className="skill-card border-2 w-38 h-38 flex flex-col items-center 
        justify-center gap-3 rounded-xl border-gray-200 hover:shadow-xl
         hover:border-[#4070F4] md:m-5 m-2.5
         transition-transform duration-500 hover:scale-105
         active:scale-110 active:border-[#4070F4] active:shadow-xl
        ">

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