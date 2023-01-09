import React from 'react'
import Button from './component/Button'
import ReactDOM from 'react-dom/client'
import './index.css'



const Hello = (props) => {
  return(
      <>
        <div>From {props.from} !!
        <Button className="avatar" text="點我"/></div>
      </>
    )
}

const charaters = [
  {name:'Wu',age: 26, id:1},
  {name:'Lim',age:27, id: 2},
  {name:'Wang',age:24, id:3},
];

//這邊可以拆成一個模組，帶入Props 
const CharaterList = (props) => {
  let listItems = props.charaters.map(i =>
      <li key={i.id}>
        Name:{i.name} Age: {i.age}
       </li>
  )

  return (
    <ul>
      {listItems}
    </ul>
  )
      
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(CharaterList, charaters, null)

/**
 也可以 root.render(Hello, {from : 'TW'}, null)
*/