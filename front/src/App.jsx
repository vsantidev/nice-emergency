import './App.css'
import Gridsquare from './layout/components/Gridsquare'

function App() {

  
  return (
    <div className="flex justify-center items-center h-[100vh] flex-col">
      <h1 className='header mt-28 mb-10 text-7xl font-bold tracking-wider'>Nice <span className='mx-4'></span>Emergency</h1>
      <div className='gameContainer relative w-[90%] max-w-[100%] h-[80%]  grid grid-cols-12'>
        <Gridsquare nmb={60}/>
      </div>
    </div>
    
  )
}

export default App
