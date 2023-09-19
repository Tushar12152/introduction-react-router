import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Nav from './components/navbar/nav';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Home from './components/home/home';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Nav></Nav>,
    children:[{
      path:"/about",
      element:<About></About>
    },
  {
    path:"/contact",
    element:<Contact></Contact>
  },
  {
    path:"/home",
     element:<Home></Home>
  }


  ]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
