import MyNavbar from "./Components/Navbar/Navbar";
import SectionOne from "./Components/Section_One/SectionOne";
import AboutMe from "./Components/AboutMe/aboutme.component";
import "./App.css";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <MyNavbar links={["Portfolio", "About Me", "Services", "Contact"]} />
        <SectionOne />
        <AboutMe />
      </div>
    </BrowserRouter>
  );
};

export default App;
