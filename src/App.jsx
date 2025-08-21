import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import ProtectedRoute from "./components/ProtectedRoute";
import DefaultLayout from "./layouts/DefaultLayout";

// pages
import Home from "./pages/Home";
import PostDetails from "./pages/PostDetails";
import Login from "./pages/Login";

// contexts
import { AuthProvider } from "./contexts/AuthContext";
import { GlobalProvider } from "./contexts/GlobalContext";

function App() {
  return (
    <AuthProvider>
      <GlobalProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <DefaultLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Home />} />
              <Route path="events/:id" element={<PostDetails />} />
            </Route>

            <Route path="*" element={<Navigate to="/" replace />} />
            {/* aggiungi pagina 404 */}

          </Routes>
        </BrowserRouter>
      </GlobalProvider>
    </AuthProvider>
  );
}

export default App;