import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import CharaterList from './component/CharaterList'



const charaters = [
  {name:'WU',age: 26, id:1},
  {name:'LIM',age:27, id: 2},
  {name:'WANG',age:24, id:3},
];

//這邊可以拆成一個模組，帶入Props 

const App = () => { 
 return(
 <div className='flex flex-col h-full mx-auto  w-full '>
  <CharaterList charaters={charaters}/>
 </div>)
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)
