import "./app.scss";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";

const App = () => {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Services" type="services">
        <Parallax />
      </section>
      <section>
        <Services />
      </section>
      <section type="portfolio" id="Portfolio">
        <Parallax />
      </section>
      <Portfolio />
      <section id="Contact">Contact</section>
    </div>
  );
};

export default App;
