import "bootstrap/dist/css/bootstrap.min.css";
// import Home from "./pages/home/Home";
import GlobalStyles from "./styles/GlobalStyles";
import NavBar from "./components/common/navbar/NavBar";
import Home from "./pages/home/Home";
import { Route, Routes } from "react-router-dom";
import { HeadProvider } from "react-head";
import About from "./pages/about/About";
import Contact from "./pages/Contact";
import Footer from "./components/common/footer/Footer";
import WhatsAppIcon from "./components/whatsappIcon/WhatsAppIcon";
function App() {
  return (
    <>
      <HeadProvider>
        <WhatsAppIcon/>
        <GlobalStyles />
        <NavBar />
         <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
       </Routes> 
        <Footer />
      </HeadProvider>
    </>
  );
}
export default App;
