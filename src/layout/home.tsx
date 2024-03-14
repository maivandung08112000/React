import Footer from "../components/footer";
import Header from "../components/header";
import Product from "../components/product";
import Slide from "../components/slide";

export default function Layout() {
  return (
    <>
      <Header />
      <Slide />
      <main>
        <Product />
      </main>
      <Footer />
    </>
  );
}