import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './Compunents/Root/Root'
import Home from './Compunents/Home/Home'
import AppliedJobs from './Compunents/AppliedJobs/AppliedJobs'
import Bolgs from './Compunents/Bolgs/Bolgs'
import ErroePage from './Compunents/ErroePage/ErroePage'
import JobDetails from './Compunents/JobDetails/JobDetails'


const router = createBrowserRouter([{

  path: "/",
  element:<Root></Root>,
  errorElement: <ErroePage></ErroePage>,
  children: [
    {
      path: "/",
      element: <Home></Home>
    },
    {
      path: '/applid',
      element: <AppliedJobs></AppliedJobs>
    },
    {
      path: '/jobs',
      element: <Bolgs></Bolgs>
    },
    {
      path : '/jobs/:id',
      element: <JobDetails></JobDetails>
    }
  ]

},
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)

