import React, { useState } from 'react'
import Navbar2 from '../Componants/Navbar2'
import  { CiCircleRemove } from "react-icons/ci";
import { usecard } from '../assets/Context/Addcard';




// TODO: faire la responsive



const Card = () => {

  const {stock , setstock,Nombreproduit, setNombreproduits,idclique} = usecard();
  

 {console.log(idclique)}

 const total= ()=>{


 }

 
// logique pour supprimer un article lors clique remove
const Removeproduit = (id) => {
  // On supprime seulement le produit dont l'id correspond
  setstock((prevStock) => {
    const newStock = [...prevStock];
    // trouve le premier index correspondant
    const index = newStock.findIndex((item) => item.id === id);
    if (index !== -1) {
      newStock.splice(index, 1); // enlève un seul élément
    }
    return newStock;
  });

  setNombreproduits((prev) => Math.max(prev - 1, 0));
};

// logique pour éviter les doublons d'article lors du rendu tout en calculant la quantité unique na pas besoin d'un état parceque elle dépend de l'état state qui la controle.

const uniqueStock = stock.reduce((acc, item) => {
  const existing = acc.find((x) => x.id === item.id);
  if (existing) {
    existing.quantity = (existing.quantity || 1) + 1;
  } else {
    acc.push({ ...item, quantity: 1 });
  }
  return acc;
}, []);


// logique pour calculer le total et elle est calculéé par le state stock donc pas besoin d'un état. toite valeur qui dépend d'un état na pas besoin d'un state

 const Total = uniqueStock.reduce((acc, item) => acc + item.price * item.quantity,0);
  


{console.log(stock)}

  
  return (
    <>
    <div className='flex w-full min-h-screen flex-col  p-4  text-black bg-white '>
      <Navbar2 />
      <div className='flex w-full h-auto flex-col justify-center p-20 items-center mt-36'>

        {
          uniqueStock.map((s)=>{

            return(

              <div key={s.id} className='flex flex-col w-[100vw] h-auto gap-8 justify-start p-10'>
                <table className='flex flex-col w-[100vw] h-auto gap-8 justify-start'>
                  <thead >
                    <tr className='flex flex-row gap-20'>  
                      <th className='flex flex-row items-center w-[50vw]  justify-between h-auto'>
                        <th className='flex flex-row gap-6'>
                          <th>Products</th>
                          <th>Title</th>
                        </th>
                        <th>Price</th>
                      </th>
                      <th>Quantity</th>
                      <th>Total</th>
                      <th>Remove</th>
                    </tr>
                  </thead>
                  <hr />
                  <tbody >
                    <tr className='flex flex-row justify-start items-center gap-32 w-[100vw] h-auto'>
                      <td className='flex flex-row items-center w-[50vw]  justify-between h-auto '>
                        <td className='flex flex-row gap-9 w-[50%] h-auto'>
                          <td><img className='w-16 h-16' src={s.image} alt=""/></td>
                          <td className='flex-wrap'>{s.name}</td>
                        </td>
                        <td>{s.price}$</td>
                      </td>
                      <td className='flex flex-row gap-24 justify-start items-center '>
                        <td>{stock.filter((e) => e.id === s.id).length}</td>
                        <td>{stock.filter((e) => e.id === s.id).length * s.price}$</td>
                        <td><button onClick={()=> Removeproduit(s.id)}><CiCircleRemove /></button></td>
                      </td>
                    </tr>
                  </tbody>
                  <hr />
                </table>
              </div>
          )})
        }
      </div>
      <div className='flex flex-row gap-4 w-[100%] h-auto'>
        <div className='flex flex-col gap-5 justify-start p-20 w-[50%] h-auto mt-[-130px]'>
          <p className='font-bold'>Cards Total</p>
          <div className='flex flex-row justify-between'><p>Subtotal</p><p className='text-xl text-black'>{Total.toFixed(2)}$</p></div>
          <hr /> 
          <div className='flex flex-row justify-between'><p>Shipping Free</p><p>free</p></div>
          <hr />
          <div className='flex flex-row justify-between'><p className='font-bold'>Total</p><p>{Total.toFixed(2)}$</p></div>
          
          <button  className='w-[50%] bg-cyan-600'>Proceed to check</button>
        </div>
        <div className='flex flex-col gap-2 '>
          <p className='font-bold '>if you have a code promo here, enter it here:</p>
          <div className='flex flex-row '>
            <input className='w-[100%] h-auto bg-slate-300 p-3' type="text" placeholder='Promo Code' />
            <button className='w-[50%] h-[100%] bg-black text-white'>Submit</button>
          </div>
        </div>
      </div>  
        
    </div>

    </>
    
  )
}

export default Card