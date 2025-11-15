import React from 'react'
import { createContext,useContext,useState } from 'react'

const AddcardContext = createContext();

export const Cardprovider = ({ children }) => {
 
    const [stock , setstock] = useState([]);
    const [Nombreproduit, setNombreproduits]= useState(0);
    const [Removeproduit, setRemoveproduits]= useState(0);
    const [idclique , setidclique]=useState(0);

    
    {console.log(idclique)}

    
  

  return(

    <AddcardContext.Provider value={{stock, setstock,setNombreproduits,Nombreproduit,setidclique,idclique}}>
      {children}
    </AddcardContext.Provider>

  );
}
  

export const usecard = () => useContext(AddcardContext);