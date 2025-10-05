import { useState } from 'react'
import Homepage from './homepage.jsx';
import Footer from './Footer.jsx';
import './App.css'

function App() {
  return (
    <>
      <Homepage />
      <div className="fivestep">
        <img src="/images/fivesteps.png" alt="Steps to follow" />
      </div>
      <Footer />
    </>
  )
}

export default App;
