import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import Skills from "./pages/Skills/Skills";
import Testimonals from "./pages/Testimonals/Testimonals";
import Details from './pages/Details/Details';
// import Testimonals from '../Testimonals/Testimonals'; // add if needed

function MainPage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1);
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <>
      <Home />
      <About />
      <Projects />
      {/* <Testimonals /> */}
      <Skills />
    </>
  );
}

export default MainPage;
