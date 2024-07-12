import Image from "next/image";
import Nav from "./Components/Nav/Nav";
import Hero from "./Pages/Hero/Hero";
import About from "./Pages/About/About";
import Gallery from "./Pages/Gallery/Gallery";
import Faq from "./Pages/Faq/Faq";
import Test from "./Pages/Test/Test";
import Menu from "./Pages/Menu/Menu";
import Time from "./Pages/Time/Time";

const Home = () => {
  return (
    <main className="Home">
      <Nav />
      <Hero />
      <About />
      <Time />
      <Gallery />
      <Menu />
      <Faq />
      <div className="bg-black text-white p-2 m-2 rounded-lg">Dev by Ricky </div>
    </main>
  );
}

export default Home;