import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/nav'
import Home from './components/home/home'
import About from './components/about/about'
import Blog from './components/blog-page/blog'
import Project from './components/project/project'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'
function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      <Navbar/>
      <Home/>
      <About/>
      <Blog/>
      <Project/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
