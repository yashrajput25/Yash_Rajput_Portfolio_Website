import NavigationButton from "./buttons/navButton";

const NavigationBar = () => {

    return (
        <nav className="w-full bg-white border-2 border-gray-100">

            <div className = "mx-auto navigation_bar flex items-center h-20 max-w-8xl justify-between px-20">

            <div className = "font-poppins text-2xl font-semibold md:text-3xl">
                Yash Rajput
            </div>

            <div className="hidden buttonContainer md:flex h-full w-3xl items-center justify-between gap-10 ">
                <NavigationButton text="Home"/>
                <NavigationButton text="Education"/>
                <NavigationButton text="Skills"/>
                <NavigationButton text="Projects"/>
                <NavigationButton text="About"/>
            </div>

            <button className="text-2xl md:hidden">
                ☰
            </button>

            </div>
            
        </nav>
    );
}

export default NavigationBar;