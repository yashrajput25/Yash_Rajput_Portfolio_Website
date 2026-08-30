

import { Link } from "react-router-dom";
import 'boxicons';

const NavigationButton = ({ text, link, iconName, activeTab, setActiveTab }) => {

    return (
        <Link
            to={link}
            className= { `singleNavButton_container
                page-text-animation
                flex items-center justify-center
                h-12 w-full
                font-poppins font-semibold
                text-xl md:text-2xl
                px-1.25
                mx-auto
                hover:shadow-2xl
                hover:border-b-8
                hover:border-blue-700 ${activeTab === text ? "bg-blue-100 rounded-2xl px-2.5 py-5" : "" }` }
            
        >
            <button 
            onClick={()=>setActiveTab(text)}
            className="flex gap-2 items-center"
            >
                {text}
                <box-icon name={iconName} ></box-icon>

            </button>
        </Link>
    );
};

export default NavigationButton;