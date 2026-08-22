const SkillButton = ({text, setActiveTab}) => {


    
    return (
        <button 
        onClick={()=>setActiveTab(text)}
        className="border-2 my-1.5 border-gray-200 
        rounded-2xl py-3.75 px-10 text-xl font-poppins 
        hover:border-[#4070F4] hover:shadow-xl
        transition-transform duration-500 hover:scale-105
        active:scale-110 active:border-[#4070F4] active:shadow-xl
        "
        >
            {text}
        </button>
    )
}

export default SkillButton;