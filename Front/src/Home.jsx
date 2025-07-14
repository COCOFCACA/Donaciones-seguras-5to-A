import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './Home.css'
import NavBar from './Components/NavBar';


function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <div className="body-content">
        <h1>Hola</h1>
      </div>
    </>
  )
}

export default Home
