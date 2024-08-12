
import React, { useState } from 'react';
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer';



function App() {


  return (
    <div className='App'>
      <header>

        <NavBar />
      </header>
      <main>
        <Home />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App
