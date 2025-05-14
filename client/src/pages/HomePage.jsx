import React from 'react'
import Sidebar from "../components/SideBar"
import ProductGrid from "../components/ProductGrid"
import SearchBar from '../components/SearchBar'
import Navbar from "../components/NavBar"
// import Footer from "../components/Footer"


function HomePage() {
  return (
    <div className="bg-gray-50 min-h-screen">
    
    <div className="flex">
      <Sidebar />
      <main className="flex-1 overflow-y-auto p-10">
        <SearchBar />
        <ProductGrid />
      </main>
    </div>
  </div>
  )
}

export default HomePage