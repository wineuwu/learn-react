import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import CharaterList from './component/CharaterList'
import CountButton from './component/Button'



const charaters = [
  {name:'WU',age: 26, id:1},
  {name:'LIM',age:27, id: 2},
  {name:'WANG',age:24, id:3},
];

//這邊可以拆成一個模組，帶入Props 

const App = () => { 
 return(
 <div className='flex flex-col h-full mx-auto  w-full '>
  {/* rendering list */}
  <CharaterList charaters={charaters}/>
  {/* useState */}
  <section className='bg-white h-auto mx-auto space-x-3 space-y-4 text-center w-full py-4'>
    <h2 className='text-xl text-bold w-full px-2 text-gray-600'># Practice useState</h2>
    <CountButton />
    <CountButton />
  </section>
  {/* emit */}
  <section className='h-auto mx-auto space-x-3 space-y-4 bg-gray-100 text-center w-full py-4'>
    <h2 className='text-xl text-bold w-full px-2 text-gray-600'># Practice useState</h2>
  </section>
 </div>)
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)
