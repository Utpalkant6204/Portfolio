import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Profile from './Pages/Profile'
import Github from './Pages/Github'
import './app.css'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Profile/>} />
      <Route path='/github' element={<Github/>} />
    </Routes>
    
  )
} 

export default App;