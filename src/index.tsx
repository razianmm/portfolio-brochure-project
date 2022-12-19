import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import { AboutThisSite } from "./pages/About/About"
import reportWebVitals from "./reportWebVitals"

import { createBrowserRouter, RouterProvider } from "react-router-dom"

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/about", element: <AboutThisSite /> },
])

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <React.StrictMode>
    <div className="layout__container">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
