import React from "react";
import TableCell from "./TableCell.jsx";

const TableRow = (props) => {
  let tableCells = [];

  for (let i = 0; i < props.numColumns; i++) {
    tableCells.push(
      <TableCell
        mouseDown={props.mouseDown}
        mouseUp={props.mouseUp}
        mouseEnter={props.mouseEnter}
        selectedColor={props.selectedColor}
        changeToColor={props.changeToColor}
      />
    );
    console.log(tableCells);
  }

  return <tr>{tableCells}</tr>;
};

export default TableRow;
