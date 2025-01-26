
import './App.css'
import Navbar from './components/navbar';
import Footer from './components/footer';

import {Route, Routes} from 'react-router-dom'

import History from './pages/History/history';
import Home from './pages/Home/home';
import PlacesHome from './pages/Places/placeshome';

function App() {
  
  return (
    <>
    
      
    <Navbar>
      
    </Navbar>

    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="/places" element={<PlacesHome/>} />

        <Route path="/history" element= {<History/>} />
        <Route path="/gallery" element={<h1>Gallery</h1>} />

        
        


      </Routes>

    <Footer/>
 
    </>
  )
}

export default App
