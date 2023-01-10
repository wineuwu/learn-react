import React from 'react';
import CharaterList from './component/CharaterList';
import Button from './component/Button';
import CountButton from './component/Button';
import Clock from './component/Clock';
const { useState } = React;

/**
 * @property {string} name
 * @property {number} age
 * @property {number} id
 */ 

const charaters = [
  {name:'WU',age: 26, id:1},
  {name:'LIM',age:27, id: 2},
  {name:'WANG',age:24, id:3},
];


const App = () => { 
  const [sum, setSum] = useState(0);
  const handelSum = (num) => { 
    setSum(pre =>  pre + num );
    console.log(sum);
  }
  
  return(
  <div className='flex flex-col h-full mx-auto  w-full '>
    <CharaterList charaters={charaters}/>
    {/* useState */}
    <section className='bg-white h-auto mx-auto space-x-3 space-y-4 text-center w-full py-4'>
      <h2 className='text-xl text-bold w-full px-2 text-gray-600'># Practice useState : { sum }</h2>
      <CountButton handelSum={handelSum}/>
      <CountButton handelSum={handelSum}/>
      <CountButton handelSum={handelSum}/>
      <CountButton handelSum={handelSum}/>
    </section>
    {/* emit */}
    <section className='h-auto mx-auto space-x-3 space-y-4 bg-gray-100 text-center w-full py-4'>
      <h2 className='text-xl text-bold w-full px-2 text-gray-600'># Practice Class Component </h2>
      <Clock />
    </section>
  </div>)
}




export default App ;