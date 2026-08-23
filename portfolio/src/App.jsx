import Contact from "./Pages/Contact";
import Education from "./Pages/Education";
import Home from "./Pages/HomePage";
import Projects from "./Pages/Projects";
import Skills from "./Pages/Skills";
import FluidCursor from "./components/FluidCursor";
import Footer from "./components/footer";
import NavigationBar from "./components/navigationBar";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const App = () => {

  return (
    <div>

      <NavigationBar/>
      <Projects/>
      <FluidCursor/>
      <Home/>
      <Education/>
      <Contact/>
      <Skills/>

      
    </div>

  )

}

export default App;

