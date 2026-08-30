const SkillButton = ({text, activeTab, setActiveTab}) => {

    const isActive = activeTab === text
    
    return (
        <button 
        onClick={()=>setActiveTab(text)}
        
        className={`border-2 my-1.5
        rounded-2xl py-3.75 px-10 text-xl font-poppins font-semibold
        hover:shadow-xl
        transition-transform duration-500 hover:scale-105
        active:scale-110 active:border-[#4070F4] active:shadow-xl
        active:bg-[#809ff5] active:text-white
        hover:cursor-pointer
        ${isActive ? " border-[#4070F4]": "border-gray-200"}`}    
        >
            {text}
        </button>
    )
}

export default SkillButton;