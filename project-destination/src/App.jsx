
import './App.css'
import Navbar from './components/navbar';
import Footer from './components/footer';

import {Route, Routes} from 'react-router-dom'

import History from './pages/History/history';

function App() {
  
  return (
    <div className='container'>
    
      
    <Navbar>
      
    </Navbar>
    <div className="route-content">
    <Routes>
        <Route path='/' element={<h1>Home</h1>} />
        <Route path="/places" element={<h1>Places</h1>} />

        <Route path="/history" element= {<History/>} />
        <Route path="/gallery" element={<h1>Gallery</h1>} />

        
        


      </Routes>
      </div>

    <Footer/>
 
    </div>
  )
}

export default App
