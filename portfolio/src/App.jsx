import Contact from "./Pages/Contact";
import Education from "./Pages/Education";
import Home from "./Pages/HomePage";
import Skills from "./Pages/Skills";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const App = () => {

  return (
    <div>
      <Home/>
      <Education/>
      <Contact/>
    </div>

  )

}

export default App;

