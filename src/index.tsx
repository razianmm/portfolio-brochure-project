import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import { AboutThisSite, Gallery, Home, PageNotFound, Table } from "./pages"
import reportWebVitals from "./reportWebVitals"
import { SiteContextProvider } from "./utils/context"

import "./index.css"

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/about", element: <AboutThisSite /> },
  { path: "/table", element: <Table /> },
  { path: "/gallery", element: <Gallery /> },
  { path: "*", element: <PageNotFound /> },
])

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <React.StrictMode>
    <SiteContextProvider>
      <RouterProvider router={router} />
    </SiteContextProvider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
