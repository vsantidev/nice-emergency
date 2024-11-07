import './App.css'
import BtnRule from './layout/components/BtnRule'

import Gridsquare from './layout/components/Gridsquare'
import Rule from './layout/components/Rule'
import { useScore } from './Providers/ScoreProvider'

function App() {

  const {score} = useScore()

  return (
    <>
        <div className="mt-44 flex justify-center items-center h-[100vh] flex-col">
          <h1 className='header mb-10 text-7xl font-bold tracking-wider'>Nice <span className='mx-4'></span>Emergency</h1>
          <BtnRule />
          <div className='w-full h-full px-8 gameBackground'>
            <div className='gameContainer relative w-full h-full grid grid-cols-12'>
              <Gridsquare nmb={60}/>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center flex-col">
            <p className='font-bold text-xl'>Score : {score}</p>
        </div>
        <Rule />
    </>
  )
}

export default App
