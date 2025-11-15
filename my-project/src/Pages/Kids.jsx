import React from 'react'
import Navbar2 from '../Componants/Navbar2';
import all_product from '../assets/all_product';
import Footer from '../Componants/Footer';
import { Link } from 'react-router-dom';



const Kids = () => {

  return (
    <>
      <div className="sm:flex sm:flex-col sm:w-full sm:min-h-screen bg-white">
        <Navbar2 />
        <div className="sm:flex sm:flex-col sm:space-y-3 sm:w-[100%] sm:h-auto mt-28 justify-center items-center  text-black">
          <div className="sm:flex sm:flex-col sm:gap-3 sm:w-[100%] sm:h-auto sm:p-3 justify-center items-center  ">
            <h1 className="sm:text-3xl text-black sm:font-bold sm:text-center md:mt-10 sm:mt-0">
              Top Sellers
            </h1>
            <p className="text-sm text-black text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis cumque ipsum <br />
              facere ad dolorem porro eveniet sed id iure? Nesciunt
              necessitatibus similique consequatur eos est placeat corrupti ipsa
              nostrum natus?
            </p>
          </div>
          <div className="sm:flex sm:flex-row sm:w-[100%] sm:gap-4 sm:h-auto sm:flex-wrap sm:justify-start ">

            {all_product.map((product) => {

              if (product.category === "kid") {
                return (
                  <div
                    key={product.id}
                    className="md:w-[240px] sm:w-[100px] sm:h-auto sm:space-y-4 sm:p-4"
                  >
                    <Link
                      to={`/Product/${product.id}`}
                      key={product.id}
                      className="md:w-[240px] sm:w-[100px] 
                        sm:h-auto sm:space-y-4 sm:p-4 sm:flex sm:flex-col"
                    >
                      <img
                        className="hover:scale-[115%] cursor-pointer ease-in-out duration-1000"
                        src={product.image}
                        alt=""
                        srcset=""
                      />
                      <div className=" sm:flex sm:flex-row sm:justify-between">
                        <p className="text-black sm:text-xs">{product.name}</p>
                        <p className="text-black sm:text-xs">
                          {product.new_price}$
                        </p>
                      </div>
                    </Link>
                  </div>
                );
              }
            })}
          </div>
        </div>
        <Footer/>
      </div>
    </>
  );
};

export default Kids