import React from 'react';
import "./Table.css"

// https://stackoverflow.com/questions/39462458/react-js-creating-simple-table
let id = 0;
function createData(option, type) {
  id += 1;
  return { id, option, type };
}

let rows = [
  createData('Setting One', 'Private'),
  createData('Setting Two', 'Public'),
  createData('Setting Three', 'Group'),
  createData('Setting Four', 'Private'),
];

class Table extends React.Component {


  render() {
    return(
      <table>
      {rows.map(row => (
        <tr key={row.id}>
          <td>{row.option}</td>
          <td>{row.type}</td>
        </tr>
      ))}
      </table>
    )
  }

}

export default Table;