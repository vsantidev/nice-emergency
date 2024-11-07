import './App.css'
import BtnRule from './layout/components/BtnRule'

import Gridsquare from './layout/components/Gridsquare'
import Rule from './layout/components/Rule'

function App() {

  return (
    <>
      <div className="mt-44 flex justify-center items-center h-[100vh] flex-col">
        <h1 className='header mb-10 text-7xl font-bold tracking-wider'>Nice <span className='mx-4'></span>Emergency</h1>
        <BtnRule />
        <div className='gameContainer relative w-[90%] max-w-[100%] h-[80%] grid grid-cols-12'>
          <Gridsquare nmb={60}/>
        </div>
      </div>
      <Rule />
    </>
  )
}

export default App
