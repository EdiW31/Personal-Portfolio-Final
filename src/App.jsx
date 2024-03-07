import MyNavbar from "./Components/Navbar/Navbar";
import SectionOne from "./Components/Section_One/SectionOne";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <MyNavbar links={["Portfolio", "About Me", "Services", "Contact"]} />
      <SectionOne />
    </div>
  );
};

export default App;
