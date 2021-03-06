import React from "react";

function TableCell(props) {
  return (
    <td
      onMouseDown={props.mouseDown}
      onMouseUp={props.mouseUp}
      onMouseEnter={props.mouseEnter}
      onClick={props.changeToColor}
      style={{ width: "35px", height: "35px", border: "3.5px solid black" }}
    >
    </td>
  );
}

export default TableCell;
