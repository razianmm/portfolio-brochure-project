import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import reportWebVitals from "./reportWebVitals"

import { Home, AboutThisSite, Table, Gallery } from "./pages"

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/about", element: <AboutThisSite /> },
  { path: "/table", element: <Table /> },
  { path: "/gallery", element: <Gallery /> },
])

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
