import { BrowserRouter, Routes, Route } from "react-router-dom"

// pages
import Home from "./pages/Home"
import PostDetails from "./pages/PostDetails"
import { GlobalProvider } from "./contexts/GlobalContext"
import DefaultLayout from "./layouts/DefaultLayout"

export default function App() {
  return (
    <BrowserRouter>
      <GlobalProvider>
        <Routes>
          <Route path="/" Component={DefaultLayout}>
            <Route index Component={Home} />
            <Route path=":id" Component={PostDetails} />
          </Route>
        </Routes>
      </GlobalProvider>
    </BrowserRouter>
  )
}