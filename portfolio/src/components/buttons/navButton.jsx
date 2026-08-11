

const NavigationButton = ({text, link}) =>{

    return (

            <a className="singleNavButton_container 
            flex items-center justify-center h-full w-full font-poppins 
            font-semibold text-xl px-1.25 mx-auto hover:bg-blue-50" 
            href="">
                {text}
            </a>


    );
}

export default NavigationButton;