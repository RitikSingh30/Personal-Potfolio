import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Qualification from "./components/Qualification";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import { useSelector } from "react-redux";

function App() {

  const {darkMode} = useSelector((store) => store?.changePageColor);

  return (
    <div className={`${darkMode ? "bg-DarkColor text-white" : "bg-white text-black"} sm:px-[1rem]`}>
      <Navbar/>
      <HeroSection/>
      <AboutMe/>
      <Skills/>
      <Qualification/>
      <Projects/>
      <ContactMe/>
      <Footer/>
    </div>
  );
}

export default App;
