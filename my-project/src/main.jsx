import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import Home from './Pages/Home.jsx'
import Mens from './Pages/Mens.jsx'
import Womens from './Pages/Womens.jsx'
import Kids from './Pages/Kids.jsx'
import Contact from './Pages/Contact.jsx'
import Card from './Pages/Card.jsx'
import Users from './Pages/Users.jsx'
import Product from './Pages/Product.jsx'
import { Cardprovider } from "./assets/Context/Addcard.jsx";

const router = createBrowserRouter([

  {path: "/",
  element: <Home />
  },
  {path: "/Mens",
  element: <Mens />
  },
  {path: "/Womens",
  element: <Womens />
  },
  {path: "/Kids",
  element: <Kids />
  },
  {path: "/Contact",
  element: <Contact />
  },
  {path: "/Card",
  element: <Card />
  },
  {path: "/Users",
  element: <Users />
  },
  {path: "/Product/:id",
  element: <Product />
  },



]);





createRoot(document.getElementById('root')).render(
  <Cardprovider>
    <RouterProvider router={router} />
  </Cardprovider>
 
);
