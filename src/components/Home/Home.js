import React from 'react'
import Couresel from '../Couresel/Couresel'
import Footer from '../Footer'
import Post from '../Post'
import About from "../About"
import Navbar from '../Navbar/Navbar'
function Home() {
  return (
   <>
   <Navbar/>
   <Couresel/>
   <About/>
   <Post/>
   <Footer/>
   </>
  )
}

export default Home