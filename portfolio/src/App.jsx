import { HashRouter, Routes, Route } from "react-router-dom";

import Contact from "./Pages/Contact";
import Education from "./Pages/Education";
import Home from "./Pages/HomePage";
import Projects from "./Pages/Projects";
import Skills from "./Pages/Skills";

import FluidCursor from "./components/FluidCursor";
import NavigationBar from "./components/navigationBar";


const App = () => {

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