import React, { Component } from 'react';

class TableCell extends Component {

state = {
    currentColor:"white"
}

render(){
    const style = {
        height: "50px",
        width: "50px",
        border: "2px solid black",
        backgroundColor: this.props.color
}
    return (<span style={style}/>);
  }
}

export default TableCell;