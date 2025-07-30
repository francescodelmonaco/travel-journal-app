import { BrowserRouter, Routes, Route } from "react-router-dom"

// pages
import Home from "./pages/Home"
import PostDetails from "./pages/PostDetails"
import { GlobalProvider } from "./contexts/GlobalContext"

export default function App() {
  return (
    <BrowserRouter>
      <GlobalProvider>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/:id" Component={PostDetails} />
        </Routes>
      </GlobalProvider>
    </BrowserRouter>
  )
}