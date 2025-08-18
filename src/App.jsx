import { BrowserRouter, Routes, Route } from "react-router-dom"
import { GlobalProvider } from "./contexts/GlobalContext"

import DefaultLayout from "./layouts/DefaultLayout"

// pages
import Home from "./pages/Home"
import PostDetails from "./pages/PostDetails"
import Login from "./pages/Login"

export default function App() {
  return (
    <BrowserRouter>
      <GlobalProvider>
        <Routes>
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/" element={<DefaultLayout />}>
            <Route index element={<Home />} />
            <Route path=":id" element={<PostDetails />} />
          </Route>
        </Routes>
      </GlobalProvider>
    </BrowserRouter>
  )
}