import React from "react"
import './styles/App.css'
import Auth from "./pages/auth/Auth"
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Myschedules from "./pages/myschedules/Myschedules"
import Profile from "./pages/profile/Profile"
import Dashboard from "./components/dashboard/dashboard"
import BookingForm from "./pages/booking/BookingForm"
import Alert from "./components/dashboard/Alert"
import Edit from "./pages/Edit"
import Login from "./pages/auth/login"
export default function App(){
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Auth/>
    },
    {
      path:'/dashboard',
      element:<Dashboard/>
    },
    {
      path:'/myschedules',
      element:<Myschedules/>
    },
    {
      path:'/profile',
      element:<Profile/>
    },
    {
      path:'/bookingform',
      element:<BookingForm />
    },
    {
      path:'/alertbox',
      element:<Alert />
    },
    {
      path:'/editpage',
      element:<Edit />
    },
    {
      path:'/auth',
      element:<Auth />
    }
  ])
  return(
    <div className="myApp">
      <RouterProvider router={router} />
    </div>
  )
}