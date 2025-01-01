import Background from "./Components/Background";
import Home from "./Components/Pages/Home";
import Navbar from "./Components/Navbar";
import AboutMe from "./Components/Pages/AboutMe";
import Contact from "./Components/Pages/Contact";
import Projects from "./Components/Pages/Projects";
import Footer from "./Components/Footer";
import BottomToTop from "./Components/BottomToTop";
import PageNotFound from "./Components/PageNotFound";

import Services from "./Components/Pages/Services";
import Testimonials from "./Components/Pages/Testimonials";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
    
    <BrowserRouter>
    <Background></Background>
      <Routes>
        <Route path="/" element={<Navbar/>}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          {/* <Route path="about" element={<AboutMe/>} /> */}
          <Route path="*" element={<PageNotFound />} />
          <Route path="projects" element={<Projects />} />
          {/* <Route path="services" element={<Services />} /> */}
          {/* <Route path="testimonials" element={<Testimonials />} /> */}
        </Route>
      </Routes>
    {/* <Footer></Footer> */}
    <BottomToTop></BottomToTop>
    </BrowserRouter>
    
    </>
  );
}

export default App;
