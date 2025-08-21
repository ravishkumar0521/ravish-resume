import AOS from 'aos';
import Typed from 'typed.js';
import PureCounter from '@srexi/purecounterjs';
import GLightbox from 'glightbox';
import imagesLoaded from 'imagesloaded';
import Isotope from 'isotope-layout';
import Swiper from 'swiper/bundle';

import Header from "./components/Header";
import Frontpage from "./components/Frontpage";
import Footer from "./components/Footer";


// src/index.js or src/App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 


function App() {
  
  return (
    <>
      <Header />
      <Frontpage />
      <Footer />
    </>
  );
}

export default App;
