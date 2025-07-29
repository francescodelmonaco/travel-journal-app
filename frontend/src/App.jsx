import { BrowserRouter, Routes, Route } from "react-router-dom"

// pages
import Home from "./pages/Home"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
      </Routes>
    </BrowserRouter>
  )
}