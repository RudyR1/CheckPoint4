import { Routes, Route, BrowserRouter } from "react-router-dom";
import BookList from "./components/BookList";
import BookDetails from "./components/BookDetails";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import Favorites from "./components/Favorites";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import AdminProtectedRoute from "./layouts/AdminProtectedRoutes";

import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="App">
        <Routes>
          {/* PUBLIC ROUTES */}
          <Route path="/" element={<BookList />} />
          <Route path="/books/:id" element={<BookDetails />} />
          <Route path="/favorites" element={<Favorites />} />

          {/* LOGGED ADMIN ROUTES */}
          {/* <Route path="/dashboard" element={<Login />} /> */}
          <Route
            path="/admin"
            element={
              <AdminProtectedRoute>
                <Admin />
              </AdminProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
