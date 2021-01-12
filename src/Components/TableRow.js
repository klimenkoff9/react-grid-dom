import React, { Component } from 'react';
import TableCell from './TableCell';

class TableRow extends Component {

  render(){
      let cells = Array(this.props.cols).fill(<TableCell color={this.props.color}/>);
  return (
        <div>
           {cells}
        </div>
      );
  }

}

export default TableRow;