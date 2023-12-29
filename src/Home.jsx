import Landing from "./Home/Landing";
import Nav from "./Home/Nav";
import ProductPage from "./Products/Prodcuts";
import Footer from "./Home/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Landing />
      <ProductPage />
      <Footer />
    </>
  );
}
