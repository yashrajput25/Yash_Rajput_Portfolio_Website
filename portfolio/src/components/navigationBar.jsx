import NavigationButton from "./buttons/navButton";
import { Link } from "react-router-dom";

const NavigationBar = () => {

    return (
        <nav className="navigation-bar min-w-screen flex items-center h-20 justify-between md:px-5 px-4 bg-white border-2 border-gray-100 shadow-xl">

                <div className = "font-poppins text-2xl font-semibold md:text-4xl">
                    Yash <span className="text-[#4070F4]">Rajput</span>
                </div>

                <div className="hidden buttonContainer md:flex h-full items-center justify-between gap-10">
                    <NavigationButton text="Home" link={"/"}/>
                    <NavigationButton text="Education" link={"/education"}/>
                    <NavigationButton text="Skills" link={"/skills"}/>
                    <NavigationButton text="Projects" link={"/projects"}/>
                    <NavigationButton text="About" link="/about"/>
                    <NavigationButton text="Contact" link="/about"/>
                </div>

                <button className="text-2xl md:hidden">
                    ☰
                </button>
            
        </nav>
    );
}

export default NavigationBar;