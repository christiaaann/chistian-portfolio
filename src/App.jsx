import './App.css'
import { Route, Router, Routes } from 'react-router-dom'
import MyProject from './components/MyProject'
import Home from './Home/Home'

function App() {

  return (
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/goProject' element={<MyProject/>}/>
   </Routes>
  );
}

export default App
