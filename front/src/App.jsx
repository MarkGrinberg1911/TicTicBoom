import './App.css'
import Home from './genral/Home/Home'
import Pve from './genral/Pve/Pve'
import { Routes, Route } from 'react-router-dom'
function App() {

  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Pve' element={<Pve />} />
      </Routes >
    </div>
  )
}

export default App
