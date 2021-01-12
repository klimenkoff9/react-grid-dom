import React from "react";

function TableCell(props) {
  return (
    <td
      onMouseDown={props.mouseDown}
      onmouseUp={props.mouseUp}
      onMouseEnter={props.mouseEnter}
      onClick={props.changeToColor}
    >
      <div
        style={{ width: "35px", height: "35px", border: "3.5px solid black" }}
      ></div>
    </td>
  );
}

export default TableCell;
