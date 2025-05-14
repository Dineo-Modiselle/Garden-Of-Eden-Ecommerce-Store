import React from 'react';
import {Route, Routes} from "react-router-dom";

import Sidebar from "./components/SideBar";
import ProductGrid from "./components/ProductGrid";
import SearchBar from './components/SearchBar';
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";

import HomePage from './pages/HomePage';
import SupportPage from './pages/SupportPage';
import Blogs from './pages/Blogs';




function App() {
  return (
    <div className="flex flex-col min-h-screen">
<Navbar />
<Routes>
  <Route path="/" element={<HomePage />} />
  <Route path="/support" element={<SupportPage />} />
  <Route path="/blogs" element={<Blogs />} />

  

</Routes>
<Footer />
   </div>
  );
}

export default App;