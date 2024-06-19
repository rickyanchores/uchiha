import Image from "next/image";
import Nav from "./Components/Nav/Nav";
import Hero from "./Pages/Hero/Hero";
import About from "./Pages/About/About";
import Gallery from "./Pages/Gallery/Gallery";
import Faq from "./Pages/Faq/Faq";
import Test from "./Pages/Test/Test";
import Menu from "./Pages/Menu/Menu";

const Home = () => {
  return (
    <main className="Home">
      <Nav />
      <Hero />
      <About />
      <Gallery />
      <Menu />
      <Faq />
    </main>
  );
}

export default Home;