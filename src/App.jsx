import MyNavbar from "./Components/Navbar/Navbar";
import SectionOne from "./Components/Section_One/SectionOne";
import AboutMe from "./Components/AboutMe/aboutme.component";
import PortfolioComp from "./Components/Portfolio Cards/portfolioc";
import Footer from "./Components/Footer/footer.component";
import "./App.css";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <MyNavbar links={["Portfolio", "About Me", "Contact"]} />
        <SectionOne />
        <PortfolioComp />
        <hr className="container" />
        <AboutMe />
        <hr className="container" />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
