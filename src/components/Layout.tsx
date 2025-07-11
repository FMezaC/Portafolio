import Navbar from "./Navbar";
import About from "../pages/About";
import Proyects from "../pages/Projects";
import Contact from "../pages/Contact";
import SocialMedia from "./SocialMedia";
import Footer from "./Footer";

const Layout = () => {
  return (
    <main>
      <Navbar />
      <About />
      <Proyects />
      <Contact />
      <SocialMedia />
      <Footer />
    </main>
  );
};

export default Layout;
