import { HashRouter, Routes, Route } from "react-router-dom";

import Contact from "./Pages/Contact";
import Education from "./Pages/Education";
import Home from "./Pages/HomePage";
import Projects from "./Pages/Projects";
import Skills from "./Pages/Skills";
import { useEffect } from "react";
import FluidCursor from "./components/FluidCursor";
import NavigationBar from "./components/navigationBar";

import AOS from 'aos';
import 'aos/dist/aos.css'; 


const App = () => {

    useEffect(() => {
        // Initialize AOS with optional global configurations
        AOS.init({
        duration: 1000, // Animation duration in milliseconds
        once: false,     // Whether animation should happen only once while scrolling down
            offset: 100
    });
    }, []);

    return (
        <HashRouter>

            <NavigationBar />

            <FluidCursor />

            <Routes>

                <Route
                    path="/"
                    element={<Home />}
                />

                <Route
                    path="/education"
                    element={<Education />}
                />

                <Route
                    path="/skills"
                    element={<Skills />}
                />

                <Route
                    path="/projects"
                    element={<Projects />}
                />

                <Route
                    path="/contact"
                    element={<Contact />}
                />

            </Routes>

        </HashRouter>
    );
}

export default App;