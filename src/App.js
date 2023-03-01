import "./App.scss";
import "bootstrap/dist/css/bootstrap.css";
import AboutMe from "./Components/AboutMe";
import Introduction from "./Components/Introduction";
import Skills from "./Components/Skills";
import MyWork from "./Components/Work";
import Certificates from "./Components/Certificates";
import AcademicDetails from "./Components/Academic Details";
import ContactMe from "./Components/ContactMe";

function App() {
  return (
    <div className="container">
      <Introduction />
      <AboutMe />
      <Skills />
      <MyWork />
      <Certificates />
      <AcademicDetails />
      <ContactMe />
    </div>
  );
}

export default App;
