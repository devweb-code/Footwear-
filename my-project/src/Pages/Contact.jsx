import React from 'react'
import Navbar2 from '../Componants/Navbar2'
import StarExplosionButton from '../Componants/StarsExplosionButton'
import { FaPhoneAlt } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  return <>
  <Navbar2/>
    <div className='flex flex-col bg-black mt-32 w-full min-h-screen p-4 space-y-10'>
      <div className='flex flex-col space-y-3 justify-center items-center text-center '>
        <p className='text-2xl  bg-gradient-to-r from-teal-500 to-sky-400 bg-clip-text text-transparent font-bold '> Get in Touch</p>
        <p className=''> Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Nisi quasi ipsa hic ab debitis velit necessitatibus quaerat repellat, 
          distinctio deleniti? Culpa sunt accusamus in maiores ipsum consectetur nemo quasi quibusdam!</p>
      </div>
      <div className='flex flex-row gap-4 w-full h-[50vh] justify-center items-center pt-10'>
        <div className='flex flex-col gap-6 w-[30%] h-[60vh] bg-gradient-to-r from-teal-500 to-sky-400  rounded-md p-6  justify-center items-center text-white space-y-0'>
          <div className='flex flex-col space-y-2 w-[100%] justify-center items-center text-white'>
            <label className='relative right-20 text-sm' for="mon-champ">your name :</label>
            <input className='w-[60%] h-[35%] rounded-[5%] p-2 bg-black'type="text" />
          </div>
          <div className='flex flex-col space-y-2 w-[100%] justify-center items-center text-white'>
            <label className='relative right-20 text-sm' for="mon-champ">your email :</label>
            <input className='w-[60%] h-[35%] rounded-[5%] p-2 bg-black'type="text"  />
          </div>
          <div className='flex flex-col space-y-2 w-[100%] justify-center items-center text-white'>
            <label className='relative right-[90px] text-sm' for="mon-champ">Message</label>
            <input className='w-[60%] h-[15vh] rounded-[5%] p-2 bg-black'type="text" placeholder='Entrez votre message ici' />
          </div>
          <StarExplosionButton className="w-[15vw] bg-cyan-800"/>
          
          
        </div>
        <div className='flex flex-row justify-start items-center bg-gradient-to-r from-teal-500 to-sky-400 rounded-md h-[60vh] 
        p-4 text-black hover:scale-[105%] transition-all duration-1000 hover:cursor-pointer'>
            <div className='flex flex-col justify-start space-y-4 '>
              <div>
               <h2 className='text-3xl font-bold '>Our Location</h2>
              </div>
              <div>
               <p className='flex flex-row gap-3' ><MdMessage />123 Buisiness Avenue City, Marketing <br/>State 12345 </p>
               <p className='flex flex-row gap-3'><FaPhoneAlt /> Phone:(123) 456-7890 </p>
               <p className='flex flex-row gap-3'><FaLocationDot />Email:contact Nk@gmail.com</p>
              </div>

            </div>
          <iframe className='w-[50%] h-[30vh]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.0505383674!2d-74.30915841691113!3d40.697193362054165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20%C3%89tat%20de%20New%20York%2C%20%C3%89tats-Unis!5e0!3m2!1sfr!2sma!4v1761227645665!5m2!1sfr!2sma"  allowfullscreen="" 
          loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

        
      </div>
      
    </div>
  
  </>
}

export default Contact