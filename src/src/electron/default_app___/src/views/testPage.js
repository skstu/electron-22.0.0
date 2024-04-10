import React, { Component } from 'react';
import '../style.css';
const {ipcRenderer} = window.require('electron')

class TestPage extends Component {
  // 子组件类指定接收数据的属性

  componentDidMount(){
    ipcRenderer.on('message-from-main', (event, arg) => {
      console.log('接收到来自主进程的消息:', arg);
    });
  }


  creatJson = ()=>{
    let str = '--tla-str param1=6 --tla-str param2=5'

    ipcRenderer.send('creatJson',
    str
    )
}
 
  render() {

    return (
      <div className="comment-item">
        <button onClick={this.creatJson} className='m20'>点击生成json</button>
      </div>
    );
  }
}
 
export default TestPage;