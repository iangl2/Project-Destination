
import './App.css'
import Navbar from './components/navbar';
import Footer from './components/footer';

import {Route, Routes} from 'react-router-dom'

import History from './pages/History/history';
import Home from './pages/Home/home';
import PlacesHome from './pages/Places/placeshome';
import Gallery from './pages/Gallery/gallery';

function App() {
  
  return (
    <div className='container'>
    
      
    <Navbar>
      
    </Navbar>
    <div className="route-content">
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="/places" element={<PlacesHome/>} />

        <Route path="/history" element= {<History/>} />
        <Route path="/gallery" element={<Gallery/>} />

        
        


      </Routes>
      </div>

    <Footer/>
 
    </div>
  )
}

export default App
