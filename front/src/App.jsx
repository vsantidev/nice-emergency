import { useEffect, useState } from 'react'
import './App.css'
import map1 from './assets/Images/map/Nice1.png'
import map2 from './assets/Images/map/Nice2.png'
import map_main from './assets/Images/map/NiceMain.png'
import Gridsquare from './layout/components/Gridsquare'

function App() {
  const [map, setMap] = useState(0);

  let img = [map_main, map1, map2]


  return (
    <div className="flex justify-center items-center h-[100vh] flex-col">
      <h1 className='header mt-28 mb-10 text-7xl font-bold tracking-wider'>Nice <span className='mx-4'></span>Emergency</h1>
      <div style={{backgroundImage: `url(${img[map]})`}} className='gameContainer relative w-[90%] max-w-[100%] h-[80%] grid grid-cols-12'>
        <Gridsquare setMap={setMap} nmb={60}/>
      </div>
    </div>

  )
}

export default App
