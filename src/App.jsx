import './App.css'
import { Route, Router, Routes } from 'react-router-dom'
import MyProject from './components/MyProject'
import Home from './Home/Home'
import Resume from './components/Resume'
function App() {

  return (
    <>
  <main>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/goProject' element={<MyProject/>}/>
      <Route path='/resume' element={<Resume/>} />
   </Routes>      
  </main>
    </>
 
  );
}

export default App
