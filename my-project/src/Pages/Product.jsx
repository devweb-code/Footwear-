import React from 'react'
import { useParams } from 'react-router-dom'
import all_product from '../assets/all_product';
import Navbar2 from '../Componants/Navbar2';
import { usecard } from '../assets/Context/Addcard';


// TODO: continuer de configurer le chemin dynamique en fonction de l'ID et afficher les produits
// TODO: Régler l'icone Nike de la navbar qui s'affiche

const Product = () => {

  const {id} = useParams();
  const {stock , setstock,setNombreproduits,Nombreproduit,setidclique} = usecard();
  const id_num = Number(id);
  
  
  
  const addchariot = ()=>{
    setNombreproduits( stock.length +1 )
  }
  const retrurnID = ()=>{
    setidclique(prev => id_num)
  }
 
  
  return (
    
    <div className='flex flex-row w-full min-h-screen bg-white text-black '>
      <Navbar2/>
     {
      all_product.map((p)=>{
       
        if(p.id === id_num){
          return(
            <div key={p.id} className='flex flex-row w-[100%] h-[100%] justify-center items-center p-4 mt-32 '>
              <div className='flex flex-row gap-3 w-[70%] h-auto justify-between items-center p-4'>
              <div className='flex flex-col gap-12 w-[80%] h-[100%] justify-center items-center'>
                <img className='w-[100%] h-20'src={p.image} alt="" />
                <img className='w-[100%] h-20'src={p.image1} alt="" />
                <img className='w-[100%] h-20'src={p.image2} alt="" />
                <img className='w-[100%] h-20'src={p.image3} alt="" />
              </div>
              <div>
                <img className='w-[100%] h-[100%]' src={p.image} alt="" />
              </div>
 
              </div>
              <div className=' flex flex-col w-[100%] h-[100%] justify-start p-4'>
               <p className='font-bold'>{p.name}</p>
               <div className='flex flex-row gap-4 justify-start  '><p className='line-through text-stone-500 '>  {p.old_price}$</p><p className='font-bold text-cyan-700 text-xl'>{p.new_price}$</p></div>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati illo maxime earum dolores   reiciendis aut aspernatur vel amet, animi, 
                sint atque accusantium eos explicabo, est corrupti tenetur nisi error rerum?</p>
                <div className='flex flex-col gap-4 pt-4 '>
                  <div className='flex flex-col gap-4 '>
                   <p className='text-gray-400'> Select Size</p>
                   <div className='flex flex-row gap-5 '>
                   <button className='bg-gray-200'> UK 7</button>
                   <button className='bg-gray-200'> UK 8</button>
                   <button className='bg-gray-200'> UK 9</button>
                   <button className='bg-gray-200'> UK 10</button>
                  </div>
                </div>
              
              <div>
                <button onClick = {() =>{ 
                   setstock(prev => [...prev,{
                    id:p.id,
                    name:p.name,
                    image:p.image,
                    price: p.new_price,
  
                  }])
                  addchariot();
                  retrurnID();
                  
                  }}  
                  className='bg-cyan-700 w-[40%] h-[40%] text-white hover:scale-[110%] transition ease-in-out hover:duration-1000 '> ADD TO CART </button>
              </div>
              {/* {console.log(stock)} */}
              <p className='font-bold'> category: T-Shirt, crop Top</p>
              <p className='font-bold'> Tags: Modern, Latest</p>
             </div>
            </div>
            
          </div>
        )}
      })
     }
      
      

    </div>
  )
}

export default Product