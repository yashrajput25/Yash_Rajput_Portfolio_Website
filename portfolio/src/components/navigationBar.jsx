import { useState } from "react";
import NavigationButton from "./buttons/navButton";

const NavigationBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="navigation-bar w-full flex flex-col bg-white border-2 border-gray-100 shadow-xl">

            {/* Top Navbar */}
            <div className="w-full flex items-center h-20 justify-between md:px-5 px-4">

                {/* Logo */}
                <div className="font-poppins text-2xl font-semibold md:text-4xl page-text-animation">
                    Yash <span className="text-[#4070F4]">Rajput</span>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex h-full items-center justify-between gap-10">
                    <NavigationButton text="Home" link="/" />
                    <NavigationButton text="Education" link="/education" />
                    <NavigationButton text="Skills" link="/skills" />
                    <NavigationButton text="Projects" link="/projects" />
                    {/* <NavigationButton text="About" link="/about" /> */}
                    <NavigationButton text="Contact" link="/contact" />
                </div>

                {/* Hamburger */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="md:hidden text-3xl"
                >
                    {isMenuOpen ? "✕" : "☰"}
                </button>

            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="md:hidden flex flex-col items-center gap-2 px-4 pb-4">
                    <NavigationButton
                        text="Home"
                        link="/"
                    />

                    <NavigationButton
                        text="Education"
                        link="/education"
                    />

                    <NavigationButton
                        text="Skills"
                        link="/skills"
                    />

                    <NavigationButton
                        text="Projects"
                        link="/projects"
                    />

                    {/* <NavigationButton
                        text="About"
                        link="/about"
                    /> */}

                    <NavigationButton
                        text="Contact"
                        link="/contact"
                    />
                </div>
            )}

        </nav>
    );
};

export default NavigationBar;