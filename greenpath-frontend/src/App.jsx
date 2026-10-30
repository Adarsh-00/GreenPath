import React from 'react';
import Home from './pages/Home';
import Pollution from './pages/Pollution';
import About from './pages/About'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import History from './pages/History';

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-sky-50">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/pollution' element={<Pollution/>}/>
        <Route path='/history' element={<History/>}/>
        <Route path='/about' element={<About/>}/>
       </Routes>
       
      <Footer/>
    </div>
  );
}

export default App;
