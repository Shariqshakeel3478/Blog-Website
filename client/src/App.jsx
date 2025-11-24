import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
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
import AuthProvider from './context/AuthProvider'
import axios from 'axios'
import ProtectedRoute from './components/ProtectedRoute'
import UserProfile from './pages/userProfile'
import BlogProvider, { BlogContext } from './context/BlogContext'
import CommentProvider from './context/CommentContext';
import { useContext } from 'react'




function App() {


  return (
    <>
      <AuthProvider>

        <BlogProvider>
          <CommentProvider>


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

                  <Route path='/edit/:id' element={
                    <ProtectedRoute requiredRole="admin">
                      <BlogEditor />
                    </ProtectedRoute>
                  } />
                  <Route path='/blogs/:id' element={

                    <SingleBlog />

                  } />
                  <Route path='/adminBlogs' element={
                    <ProtectedRoute requiredRole="admin">
                      <BlogManagement />
                    </ProtectedRoute>
                  } />
                  <Route path='/blogEditor/:id' element={
                    <ProtectedRoute requiredRole="admin">
                      <BlogEditor />
                    </ProtectedRoute>
                  } />
                  <Route path='/adminHome' element={
                    <ProtectedRoute requiredRole="admin">
                      <Mains />
                    </ProtectedRoute>
                  }></Route>
                  <Route path='/dashboard' element={
                    <ProtectedRoute requiredRole="admin">

                      <Dashboard />
                    </ProtectedRoute>
                  }></Route>
                  <Route path='/signup' element={<Signup />}></Route>
                  <Route path='/login' element={<Login />}></Route>
                  <Route path='/profile' element={<UserProfile />}></Route>
                </Routes>
              </Router>


            </CategoryProvider>
          </CommentProvider>
        </BlogProvider>
      </AuthProvider>

    </>

  )
}

export default App
