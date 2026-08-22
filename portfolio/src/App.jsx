import Contact from "./Pages/Contact";
import Education from "./Pages/Education";
import Home from "./Pages/HomePage";
import Skills from "./Pages/Skills";
import FluidCursor from "./components/FluidCursor";
import NavigationBar from "./components/navigationBar";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const App = () => {

  return (
    <div>
      <FluidCursor/>
      <NavigationBar/>
      <Home/>
      <Education/>
      <Contact/>
    </div>

  )

}

export default App;

