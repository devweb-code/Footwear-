import React from 'react'
import { FaYoutube } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6"
import { FaFacebook } from "react-icons/fa6";


const Footer = () => {
  
  return <>
    <div className='sm:flex sm:flex-col sm:space-y-3 sm:justify-center sm:items-center md:flex-row md:space-x-36 bg-slate-900 w-full sm:w-full sm:h-auto 
     md:p-16 sm:p-12 sm:flex-wrap md:mt-24 '>
      <div className='sm:flex sm:flex-col sm:gap-2 md:justify-start sm:justify-center sm:items-center'>
        <section>
          <p className="font-bold text-xl">Nike Shoes</p>
        </section>
        <section>
          <p>Discover the last collection of nike <br/>shoes,blending style and performance <br/>
           to keep you ahead in the game</p>
        </section>
      </div>
      <div className='flex flex-col gap-2 justify-start'>
        <section>
          <p className="font-bold text-xl">Quick Links</p>
        </section>
        <section className='flex flex-col space-x-3 justify-center items-center'>
          <p>Home</p>
          <p>Shop</p>
          <p>About us</p>
          <p>Contact</p>
        </section>
      </div>
      <div className='flex flex-col gap-2 justify-start'>
         <section>
          <p className="font-bold text-xl">Customers Service</p>
        </section>
        <section className='flex flex-col space-x-3 justify-center items-center'>
          <p>FAQ</p>
          <p>Shipping & Returns</p>
          <p>Size Guide</p>
          <p>Track Order</p>
        </section>
      </div>
      <div className='sm:flex sm:flex-col sm:gap-4 sm:justify-start'>
        <section className="font-bold text-xl">Follow Us</section>
        <section className='sm:flex sm:flex-row sm:space-x-3 sm:justify-center sm:items-center'>
          <p><FaFacebook /></p>
          <p><FaTwitter /></p>
          <p><FaInstagram /></p>
          <p><FaYoutube /></p>
        </section>
      </div>
    </div>
  
  </>
    
  
}

export default Footer