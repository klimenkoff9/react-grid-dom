import React from "react";

const Menu = (props) => {
  return (
    <form action="">
      <button onClick={props.addColumn}>
        Add Column
      </button>
      <button onClick={props.addRow}>
        Add Row 
      </button>
      <button onClick={props.removeColumn}>
        Delete Column
      </button>
      <button onClick={props.removeRow}>
        Delete Row
      </button>
      <button onClick={props.fillAllCells}>
        Fill All Cells
      </button>
      <button onClick={props.fillUncoloredCells}>
        Fill Uncolored Cells
      </button>
      <button onClick={props.clearAllCells}>
        Clear All Cells
      </button>
      <select onChange={props.pickColor}>
        <option value="blue">Blue</option>
        <option value="red">Red</option>
        <option value="white">White</option>
      </select>
    </form>
  );
};

export default Menu;
