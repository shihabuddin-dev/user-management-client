import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router";
import router from './routes/router'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <ContextProvider> */}
      <RouterProvider router={router} />
    {/* </ContextProvider> */}
  </StrictMode>,
)
