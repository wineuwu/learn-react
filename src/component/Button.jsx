import  imgUrl from '../assets/react.svg'

const myButton = (props) => { 
  return (
    <>
    <img src={imgUrl} alt="" />
    <button className="b-btn">
      {props.text}
    </button>
    </>
  )
}


export default myButton;