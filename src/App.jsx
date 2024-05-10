
import React from "react";
import Header from "./component/header";
import Footer from "./component/footer";
import './css/App.css';
import AboutUs from './component/component_home1/aboutUs.jsx';
import Contact from './component/component_home1/contact.jsx';
import MainServices from './component/component_home1/mainServices.jsx';
import MainSlide from './component/component_home1/mainSlide.jsx';
import OurTeam from './component/component_home1/ourTeam.jsx';
import './css/home1.css'
import './css/responsive.css'
function App() {
  return (
    <div className="App">
      <Header />
      <MainSlide/>
      <MainServices/>
      <AboutUs/>
      <OurTeam css={{}}/>
      <Contact css={{}} />
      <Footer />
    </div>
  );
}

export default App;
