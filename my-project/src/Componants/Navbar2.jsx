import React from 'react'
import { Link } from 'react-router-dom'
import { useState,useEffect } from 'react'
import { LuCircleUser,LuListMinus,LuShoppingCart } from "react-icons/lu"
import { IoPeopleSharp,IoCart } from "react-icons/io5"
import { usecard } from '../assets/Context/Addcard'



const Navbar2 = () => {
  const {Nombreproduit} =usecard();
  const [isOpen, setIsOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const LinkClassName='sm:text-black duration-1000 ease-in-out hover:rounded-sm focus:ring-2 focus:ring-sky-400 focus:ring-offset-2';

  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth < 540);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
 
  return (
    <>
      <div className='sm:flex md:fixed md:z-0 md:flex-row sm:flex-col md:justify-between text-black bg-slate-50 md:w-full md:h-auto md:p-10 sm:p-5 '>
        <div className='sm:flex md:flex-row sm:justify-between md:justify-normal '>
          <img className='w-12 h-w-12' src="./src/assets/4202091logonikeshoessocialsocialmedia-115597_115704.png" alt="nike"/>
          <div className='flex flex-row gap-5 md:hidden'>
            <p ><LuShoppingCart /></p>
            <p onClick={()=>setIsOpen(!isOpen)} onDoubleClick={()=>setIsOpen(isOpen)}><LuListMinus /></p>
          </div>
        </div>
        <nav className={`sm:flex md:flex-row bg-slate-50  md:relative lg:gap-8 md:left-[5px] md:h-auto sm:flex-col  sm:gap-3 sm:absolute sm:h-full  ${isSmallScreen && isOpen ? 'mobile' : isSmallScreen ? 'mobileClose' : ''}`}>

          <div className='sm:flex sm:flex-row sm:gap-3 md:hidden '>
            <LuCircleUser className='md:hidden sm:absolute sm:top-[70px] sm:left-[10px] sm:text-4xl  sm:text-black '/>
            <div className='sm:flex sm:flex-col sm:gap-1 md:hidden'>
              <p className='md:hidden text-black sm:absolute sm:top-[70px] sm:left-[70px]'>Hello User</p>
              <p className='md:hidden text-gray-600 sm:absolute sm:top-[95px] sm:left-[70px]'>Premium User</p>
            </div>
            
          </div>

          <Link to="/" className={LinkClassName}>Home</Link>
          <Link to="/Mens" className={LinkClassName}>Mens</Link>
          <Link to="/Womens" className={LinkClassName}>Womens</Link>
          <Link to="/Kids" className={LinkClassName}>Kids</Link>
          <Link to="/Contact" className={LinkClassName}>Contact</Link>
          <Link to="/Card" className='sm:text-black w-[100%] text-center h-auto  transition duration-1500 ease-in-out hover:rounded-sm md:relative md:top-1 sm:relative sm:left-20 md:left-0'><p className='absolute top-[-15px] left-4 font-bold text-white text-xl bg-yellow-600 rounded-[100%] w-6 h-7'>{Nombreproduit}</p><IoCart /></Link>
          <Link to="/Users" className='sm:text-black w-[100%] text-center h-auto transition duration-1500 ease-in-out hover:rounded-sm md:relative md:top-1 sm:relative sm:left-20 md:left-0'><IoPeopleSharp /></Link>
        </nav>
       

      </div>
      
    </>
  )
}

export default Navbar2