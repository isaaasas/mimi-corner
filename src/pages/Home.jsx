import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SaleProducts from "../components/SaleProducts";
import LastAdded from "../components/LastAdded";
import ViralProducts from "../components/ViralProducts";

const Home = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Hero />
      <SaleProducts />
      <LastAdded />
      <ViralProducts />
    </>
  );
};

export default Home;
