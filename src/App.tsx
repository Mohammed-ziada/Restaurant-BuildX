

import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/utils/Navbar'

function App() {


  return (
    <>
   <div className=''>
      <Navbar />
      <Outlet />

   </div>

    </>
  )
}

export default App
