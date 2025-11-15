import React from "react";
import Navbar from "../Componants/Navbar.jsx";
import Hero from "../Componants/Hero.jsx";
import { ThemeProvider } from "../assets/Context/ThemeContext.jsx";
import { Cardprovider } from "../assets/Context/Addcard.jsx";
import Footer from "../Componants/Footer.jsx";
import Product from "./Product.jsx";




const Home = () => {

  return (
    <>
      <div className="sm:flex sm:flex-col sm:w-full sm:h-full md:p-0 sm:p-0">
 
        <ThemeProvider>   
          <Navbar />
          <Hero />
        </ThemeProvider>
        <Footer/>

      </div>
    </>
  );
};

export default Home;
