import React from "react";
import { useState, useEffect } from "react";
import ShoesaffichA from "./ShoesaffichA";
import ShoesaffichB from "./ShoesaffichB";
import ShoesaffichC from "./ShoesaffichC";
import { useTheme } from "../assets/Context/ThemeContext";
import StarExplosionButton from "./StarsExplosionButton";










const Hero = () => {

  const { themeA, themeB, themeC,ShoesA,ShoesB,ShoesC,setShoesA,setShoesB,setShoesC } = useTheme();
  // const [ShoesA, setShoesA] = useState(false);
  // const [ShoesB, setShoesB] = useState(false);
  // const [ShoesC, setShoesC] = useState(false);
  const [paragraph, setparagraph] = useState(false);
  const [opacityA,setopacityA] = useState(false);
  const [opacityB,setopacityB] = useState(false);
  const [opacityC,setopacityC] = useState(false);


  const [isTransitioning, setIsTransitioning] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {

    document.body.classList.remove(themeA, themeB, themeC);

    if (ShoesA) document.body.classList.add(themeA);
    else if (ShoesB) document.body.classList.add(themeB);
    else if (ShoesC) document.body.classList.add(themeC);
    else document.body.classList.add("bg-cyan-600");
    
  }, [ShoesA, ShoesB, ShoesC, themeA, themeB, themeC]);


  useEffect(() => {

    setShoesA(true);
    setparagraph(true);

  }, []);

  useEffect(() => {

    if( ShoesB ){
      setopacityB(true);
      setopacityA(false);
      setopacityC(false);
    }
    else if( ShoesC ){
      setopacityC(true);
      setopacityA(false);
      setopacityB(false);
    }
    else if( ShoesA && !ShoesB && !ShoesC ){
      setopacityA(true);
      setopacityB(false);
      setopacityC(false);
    }

  }, [ ShoesA,ShoesB, ShoesC]);

 
  const handleChangeShoe = (target) => {
    if (isTransitioning) return; 
    setIsTransitioning(true);
    setFadeOut(true);

    setTimeout(() => {
      setShoesA(false);
      setShoesB(false);
      setShoesC(false);

      if (target === "A") setShoesA(true);
      if (target === "B") setShoesB(true);
      if (target === "C") setShoesC(true);

      setFadeOut(false);
      setTimeout(() => setIsTransitioning(false), 800);
    }, 800);
  };

  return (
    <>
      <div
        className={` md:flex md:flex-row sm:flex sm:flex-col sm:justify-between sm:items-center sm:w-full sm:h-auto md:mt-12 sm:mt-64 sm:p-4
        ${ShoesA ? themeA : ShoesB ? themeB : ShoesC ? themeC : "bg-cyan-600"}`}
      >
        <div className="sm:flex sm:flex-col md:w-[50%] sm:w-[100%] md:mt-20 sm:mt-10 sm:h-auto ">
          {paragraph && (
            <div className="sm:flex sm:flex-col sm:w-[100%] sm:gap-4 sm:justify-center sm:items-center transit">
              <p className="md:text-4xl sm:text-2xl font-Pacifico text-white ">
                Jurdan Luka 3 PF
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                <br /> Similique perferendis neque autem nam. Quasi
                reprehenderit iure minus,
                <br /> ex quod aliquid eaque veritatis non consequatur aperiam 
                nemo,velit eligendi fuga at.
              </p>
              {/* <button className="md:w-[30%] sm:w-[80%] sm:h-auto text-cyan-800">
                Order Now
              </button> */}
              <StarExplosionButton className="sm:relative sm:px-8 sm:py-4 md:w-[100%] sm:w-[80%]  sm:h-auto text-cyan-800
              hover:bg-cyan-800 hover:text-white hover:scale-75 duration-1000 ease-in-out sm:rounded-xl sm:font-semibold transition animate-bounce  mt-4"/>
            </div>
          )}
          <div className="md:flex md:flex-row md:justify-center md:items-center md:gap-3">
            <hr className="md:w-[20%] md:mt-5 sm:mt-6" />
            <p className="md:pt-3 sm:text-center">Top recommandations</p>
            <hr className="md:w-[20%] md:mt-5" />
          </div>

          <div className="sm:flex sm:flex-row md:gap-16 md:mt-6 md:p-6 sm:gap-9 sm:p-6 sm:justify-center
           sm:items-center sm:w-[100%]">
            <div className="flex flex-col gap-3 justify-center items-center">
              <img
                onClick={() => handleChangeShoe("A")}
                className={`${ opacityA? " opacity-[100%]":"opacity-[18%]"} hover:cursor-pointer sm:w-16 sm:h-11`}
                src="./src/assets/ShoesImages/Jordan-Shoes-PNG-Images.png"
                alt="HeroImage1"
              />
              {ShoesA && (
                
                <ShoesaffichA
                  className={`sm:absolute md:top-[130px] md:left-[500px] md:w-[380px] md:h-[300px] 
                     sm:top-[20px] sm:left-[80px] sm:w-[280px] sm:h-[200px]
                ${fadeOut ? "animate-fadeOut" : "animate-shoeAIn"}`}
                />
              )}

              <div className="sm:flex sm:flex-col sm:gap-1 sm:space-x-2 sm:justify-center sm:items-center">
                <p className={`${ opacityA? " opacity-[100%]":"opacity-[18%]"}`}>40$</p>
                <p className={`${ opacityA? " opacity-[100%]":"opacity-[18%]"} md:text-xl sm:text-lg"`}>$100</p>
              </div>
            </div>
            <div className="flex flex-col gap-3 justify-center items-center">
              <img
                onClick={() => handleChangeShoe("B")}
                className={`${ opacityB? " opacity-[100%]":"opacity-[18%]"} hover:cursor-pointer sm:w-16 sm:h-11 rotate-[18deg]`}
                src="./src/assets/ShoesImages/trendy-winged-shoes-free-png.webp"
                alt="Hero Image2"
              />
              {ShoesB && (
                
                <ShoesaffichB
                  className={`sm:absolute md:top-[130px] md:left-[500px] md:w-[380px] md:h-[300px] 
                     sm:top-[20px] sm:left-[80px] sm:w-[280px] sm:h-[200px]
                ${fadeOut ? "animate-fadeOut" : "animate-shoeBIn"}`}
                />
              )}

              <div className="flex flex-col gap-1 space-x-2 justify-center items-center">
                <p className={`${ opacityB? " opacity-[100%]":"opacity-[18%]"}`}>40$</p>
                <p className={`${ opacityB? " opacity-[100%]":"opacity-[18%]"} md:text-xl sm:text-lg"`}>$100</p>
              </div>
            </div>
            <div className="flex flex-col gap-3 justify-center items-center">
              <img
                onClick={() => handleChangeShoe("C")}
                className={`${ opacityC? "opacity-[100%]":"opacity-[18%]"} hover:cursor-pointer sm:w-16 sm:h-11 `}
                src="./src/assets/ShoesImages/Wethenew-Sneakers-France-Air-Jordan-1-Retro-High-Off-White-The-Ten-Chicago-1_1200x_f5e8196f-16f4-4ebb-9f7e-cfb04ae5311b_1000x.webp"
                alt="Hero Image3"
              />
              {ShoesC && (
                <ShoesaffichC
                  className={`sm:absolute md:top-[130px] md:left-[500px] md:w-[520px] md:h-[300px] 
                     sm:top-[20px] sm:left-[80px] sm:w-[280px] sm:h-[200px]
                ${fadeOut ? "animate-fadeOut" : "animate-shoeCIn"}`}
                />
              )}
              <div className="flex flex-col gap-1 space-x-2 justify-center items-center">
                <p className={`${ opacityC? " opacity-[100%]":"opacity-[18%]"}`}>40$</p>
                <p className={`${ opacityC? " opacity-[100%]":"opacity-[18%]"} md:text-xl sm:text-lg"`}>$100</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default Hero;
