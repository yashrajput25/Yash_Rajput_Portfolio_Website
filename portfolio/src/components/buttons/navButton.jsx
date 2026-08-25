// import { Link } from "react-router-dom";

// const NavigationButton = ({text, link}) =>{

//     return (

//             <Link to= {link} 
//             className="singleNavButton_container 
//             flex items-center justify-center h-full w-full font-poppins 
//             font-semibold md:text-2xl text-xl px-1.25 mx-auto hover:shadow-2xl rounded-2xl 
//             hover:bg-blue-50" 
//             >
//                 <span>
//                     {text}
//                 </span>
//             </Link>


//     );
// }

// export default NavigationButton;

import { Link } from "react-router-dom";

const NavigationButton = ({ text, link }) => {

    return (
        <Link
            to={link}
            className="
                singleNavButton_container
                page-text-animation
                flex items-center justify-center
                h-12 w-full
                font-poppins font-semibold
                text-xl md:text-2xl
                px-1.25
                mx-auto
                hover:shadow-2xl
                rounded-2xl
                hover:bg-blue-50
                hover:border-2
                hover:border-blue-500
            "
        >
            <span>
                {text}
            </span>
        </Link>
    );
};

export default NavigationButton;