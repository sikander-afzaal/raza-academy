import About from "./About";
import Campus from "./Campus";
import Events from "./Events";
import Hero from "./Hero";
import Pathway from "./Pathway";
import Portfolio from "./Portfolio";
import Reviews from "./Reviews";

const Landing = () => {
  return (
    <div>
      <Hero />
      <About />
      <Portfolio />
      <Pathway />
      <Campus />
      <Reviews />
      <Events />
    </div>
  );
};

export default Landing;
