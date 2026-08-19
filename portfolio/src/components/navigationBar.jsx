import NavigationButton from "./buttons/navButton";

const NavigationBar = () => {

    return (
        <nav className="md:w-full min-w-screen bg-white border-2 border-gray-100 shadow-xl">

            <div className = "navigation-bar flex items-center h-20 justify-between md:px-20 px-4">

                <div className = "font-poppins text-2xl font-semibold md:text-4xl">
                    Yash <span className="text-[#4070F4]">Rajput</span>
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