
import './App.css'
import Navbar from './components/navbar';
import Footer from './components/footer';

import {Route, Routes} from 'react-router-dom'

import History from './pages/History/history';
import Home from './pages/Home/home';

function App() {
  
  return (
    <>
    
      
    <Navbar>
      
    </Navbar>

    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="/places" element={<h1>Places</h1>} />

        <Route path="/history" element= {<History/>} />
        <Route path="/gallery" element={<h1>Gallery</h1>} />

        
        


      </Routes>

    <Footer/>
 
    </>
  )
}

export default App
