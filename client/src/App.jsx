import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Blog from './components/Blog'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import AddBlog from './pages/AddBlog'
import SingleBlog from './pages/SingleBlog'
import Hero from './components/Hero'
import About from './components/About'
import Categories from './components/Categories'
import Subscribe from './components/Subscribe'
import Footer from './components/Footer'
import { CategoryProvider } from "./context/CategoryContext";
import BlogManagement from './admin/BlogManagment'
import BlogEditor from './admin/BlogEditor'
import Mains from './admin/Mains'
import Dashboard from './admin/pages/Dashboard'

function App() {
  return (
    <>
      <CategoryProvider>

        <Router>
          <Routes>

            <Route path='/' element={
              <>


                <Hero />
                <Blog />
                <Categories />
                <About />
                <Subscribe />
                <Footer />


              </>
            } />

            <Route path='/add-blog' element={<AddBlog />


            } />
            <Route path='/edit/:id' element={<BlogEditor />} />
            <Route path='/blogs/:id' element={<SingleBlog />} />
            <Route path='/adminBlogs' element={<BlogManagement />} />
            <Route path='/blogEditor/:id' element={<BlogEditor />} />
            <Route path='/adminHome' element={<Mains />}></Route>
            <Route path='/dashboard' element={<Dashboard />}></Route>
            <Route path='/signup' element={<Signup />}></Route>
            <Route path='/login' element={<Login />}></Route>
          </Routes>
        </Router>


      </CategoryProvider>

    </>

  )
}

export default App
