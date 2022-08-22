import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
// import Home from "./components/Home";
import Home2 from "./components/Home2";
import NavBar from "./components/NavBar";
// import Portfolio from "./components/Portfolio";
import Portfolio2 from "./components/Portfolio2";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <Home /> */}
      <Home2 />
      <About />
      {/* <Portfolio /> */}
      <Portfolio2 />
      <Experience />
      <Contact />

      <SocialLinks />
    </div>
  );
}

export default App;
