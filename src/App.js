import React, { Component } from 'react';
import TableRow from './Components/TableRow';

class App extends Component {

  state = {
    color: "white",
    appliedColor:"white",
    rows: [],
    cols:0
  }

  addRow = () =>{
    if(this.state.cols===0){
      const init = [];
      init.push("1");
      this.setState({cols:1, rows:init});
    }else{
    const newRow = this.state.rows[0];
    const newRows = [...this.state.rows,newRow];
    this.setState({rows:newRows});
    }
  }

  deleteRow = () =>{
    const newRows = this.state.rows.slice(1,this.state.rows.length);
    this.setState({rows:newRows});
  }
  
  addColumn = () =>{
    if(this.state.cols===0){
      const init = [];
      init.push("1");
      this.setState({cols:1, rows:init});
    }else{
    this.setState({cols:this.state.cols+1});
    }
  }

  deleteColumn = () =>{
    if(this.state.cols>0){
      this.setState({cols:this.state.cols-1});
    }
  }

  fillAll = () =>{

  }

  fillUncolored = () =>{

  }

  selectColor = (e) =>{
    this.setState({color:e.target.value});
  }

  render(){
    const result=this.state.rows.map((row, index) => (
      <TableRow key={index} cols={this.state.cols} color={this.state.appliedColor}
      />
      ))

  return (
    <div id="container">
      <button onClick={this.addRow}>Add Row</button>
      <button onClick={this.deleteRow}>Delete Row</button>
      <button onClick={this.addColumn}>Add Column</button>
      <button onClick={this.deleteColumn}>Delete Column</button>
      <button onClick={this.fillAll}>Fill All</button>
      <button onClick={this.fillUncolored}>Fill Uncolored</button>
      <select onChange={this.selectColor}>
      <option value="Red">Red</option>
      <option value="Black">Black</option>
      <option value="Blue">Blue</option>
      </select>
      {result}
    </div>
  );
  }
}

export default App;
