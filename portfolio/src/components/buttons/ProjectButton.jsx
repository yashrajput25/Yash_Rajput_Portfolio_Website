const ProjectButton = ({text, link}) => {
    
    return (
        <button 
        className="border-2 my-1.5 border-gray-200 
        rounded-2xl py-3.75 px-10 md:text-xl font-poppins font-semibold
        hover:border-[#4070F4] hover:shadow-xl
        transition-transform duration-500 hover:scale-105
        active:scale-110 active:border-[#4070F4] active:bg-[#becfff] 
        active:text-white active:shadow-xl
        hover:cursor-pointer 
        "
        >
        <a href={link} target="_blank">{text}</a>
        </button>
    )
}

export default ProjectButton;