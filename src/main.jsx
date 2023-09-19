import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import Nav from './components/navbar/nav';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Home from './components/home/home';
import HomePage from './components/homepage/HomePage';
import User from './components/User/user';
import Posts from './components/User/post/Posts';
import PostDetails from './components/post details/PostDetails';
import ErrorPage from './components/error/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element:<HomePage></HomePage>,
    errorElement:<ErrorPage></ErrorPage>,
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
  },
  {
    path:"/user",
    loader:()=>fetch('https://jsonplaceholder.typicode.com/users'),
    element:<User></User>
  },
  {
    path:'/post',
    loader:()=>fetch('https://jsonplaceholder.typicode.com/posts'),
    element:<Posts></Posts>
  },
  {
    path:'/post/:postId',
    loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
    element:<PostDetails></PostDetails>
  }


  ]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
