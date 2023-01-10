import React  from "react";
// // Clock 是 React 的子類別 Component
// class Clock extends React.Component{
//   constructor(props) {
//     //要用this前，需呼叫super函式
//    super(props);
//    this.state = {
//     date: new Date()
//    }
//   }
//   // component 會在 render 與 掛在DOM之後才會執行
//   componentDidMount(){
//     this.timerID = setInterval(() => this.tick(),1000)
//   }
  
//   componentWillUnmount(){
//     clearInterval(this.timerID);
//   }

//   tick() {
//     this.setState({
//       date: new Date()
//     })
//   }
//   render() {
//     return (
//       <div>
//         <h1>Hello World !</h1>
//         <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
//       </div>
//     )
//   }
// }

class Clock extends React.Component{
  //要使用 props 要從 constructor 開始，透過super存取父層
  constructor(props) {
    super(props);
    // 等於 useState概念
    this.state = {
      date: new Date()
    }
  }
  tick() {
    //禁止直接指定 State ，需透過 setState 操作
    this.setState({
      date: new Date()
    })
  }
  //生命週期介於 render 與 DOM掛載之間
  componentDidMount() {
    this.timerID = setInterval(()=> this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  render() {
    return (
      <h2 className="font-medium tracking-wider text-2xl text-gray-600">現在時間 {this.state.date.toLocaleTimeString()}!!!</h2>
    )
  }
}

export default Clock;






