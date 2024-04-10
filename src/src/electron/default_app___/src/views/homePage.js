import React, { Component } from 'react';
import '../style.css';
import Dialog from '../components/dialog';


class HomePage extends Component {
  // 子组件类指定接收数据的属性
  constructor(props) {
    super(props);
    this.childRef = React.createRef()
    this.state ={
      start:false,
      openDialog:"none",
      isEnd:false,
      rbtAttack:"石头",
      determine:"你赢了！"
    }
  }
  startGame = () => {
    this.setState({
      openDialog:'block',
      start:true
    })
  }
  handleClick = (data)=>{
    let {rbt,result} = data
    console.log(rbt);
    let rbtAttack 
switch (rbt) {
    case 0:
      rbtAttack = "石头";
        break;
    case 1:
      rbtAttack = "剪刀";
        break;
    case 2:
      rbtAttack = "布";
        break;
}
    let determine 
    switch (result) {
      case 0:
        determine = "平局";
          break;
      case 1:
        determine = "你赢啦！";
          break;
      case -1:
        determine = "电脑胜利";
          break;
  }
    this.setState({
      openDialog:'none',
      isEnd:true,
      rbtAttack,
      determine
    })
  }
  rePlay=()=>{
    this.setState({
      start:false,
      openDialog:"none",
      isEnd:false
    })
    this.childRef.current.reSet()
  }
  render() {
    let {start,openDialog,isEnd,rbtAttack,determine} = this.state
     return (
      <div className="homepage ">
        <div className='start flex'>
        <h1 className='home-title'>
          石头剪刀布
        </h1>
        <button style={{display:start?"none":"block"}}  className='startBtn'  onClick={()=>this.startGame()}>开始游戏</button>
        <div style={{display:isEnd?"block":"none"}} >
          <p>对方出的是：{rbtAttack}</p>
          <p>{determine}</p>
          <button onClick={this.rePlay}>重新开始</button>
        </div>
        </div>
        <div style={{display:openDialog}}>
        <Dialog ref={this.childRef} onChildClick={this.handleClick}></Dialog>
        </div>
      </div>
    );
  }
}
 
export default HomePage;