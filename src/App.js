import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
// import Home from "./components/Home";
import Home2 from "./components/Home2";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <Home /> */}
      <Home2 />
      <About />
      <Portfolio />
      <Experience />
      <Contact />

      <SocialLinks />
    </div>
  );
}

export default App;
