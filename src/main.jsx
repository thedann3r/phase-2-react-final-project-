import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './Components/Home.jsx'
import App from './App.jsx'
import About from './Components/About.jsx'
import Contacts from './Components/Contacts.jsx'
import Layout from './Components/Layout.jsx'

const router = createBrowserRouter ([
  {
    path:"/",
    element:<Layout />,
    children:[
      {
        path:"/home",
        element:<Home />
      },
      {
        path:"/app",
        element:<App />
      },
      {
        path:"/about",
        element:<About />
      },
      {
        path:"/contacts",
        element:<Contacts />
      }
    ]
  }
  
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
