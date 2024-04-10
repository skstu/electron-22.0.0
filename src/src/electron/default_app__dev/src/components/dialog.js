import React, { Component } from 'react';
import '../style.css'

class Dialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [
        { value: "0", label: '石头' },
        { value: "1", label: '剪刀' },
        { value: "2", label: '布' },
      ],
      selectedOption: "", // 初始化选中项
    };
  }

  ajaxPost = (url, callback) =>{
    var xhr = new XMLHttpRequest();
      xhr.open('POST', url, true);
       xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
       let palyer_choice = Number(this.state.selectedOption)
       let data = {
         palyer_choice
    }
      xhr.send(JSON.stringify(data));
       xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
             callback(xhr.responseText);
           }
        }
     }

// 调用


  reSet =()=>{
    this.setState({
      selectedOption: ""
    })
  }


  handleChange = (event) => {
    let value = event.target.value
    console.log(value);
     this.setState({ selectedOption: event.target.value });
    //  this.state.selectedOption = value
  };
  determine =()=>{
    
    this.ajaxPost('http://10.100.9.246:8080/api/testtask',  (data)=> {
        // 后台返回的数据就是 字符串类型。要转成json，必须自己手动转换。
        var objData = JSON.parse(data);
        let rbt = objData.data.computer_choice
        let result = objData.data.result
        this.props.onChildClick({
          rbt,
          result
        }); 
    });


  }


  render() {
    const { options, selectedOption } = this.state;

    return (
      <div className='dialog'> 
        <h3>请选择:</h3>
        <div className='subBox'>
        <select className='selectOption' value={selectedOption} onChange={this.handleChange}>
            <option value="">请选择</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <button onClick={this.determine} className='confirmBtn'>确定</button>
        </div>

      </div>
    );
  }
}

export default Dialog;
