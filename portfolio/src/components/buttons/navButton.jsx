

const NavigationButton = ({text, link}) =>{

    return (

            <a className="singleNavButton_container 
            flex items-center justify-center h-full w-full font-poppins 
            font-semibold md:text-2xl text-xl px-1.25 mx-auto hover:shadow-2xl rounded-2xl 
            hover:bg-blue-50" 
            href="">
                <span>
                    {text}
                </span>
                
            </a>


    );
}

export default NavigationButton;