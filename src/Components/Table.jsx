import React, { Component } from "react";
import Menu from "./Menu";
import TableRow from "./TableRow";

class Table extends Component {
  constructor() {
    super();
    this.state = {
      rows: 1,
      columns: 1,
      color: "blue",
      coloring: false,
    };
  }

  // Add Row
  addRow = (e) => {
    e.preventDefault();
    this.setState({ rows: this.state.rows + 1 });
  };
  // Add Column
  addColumn = (e) => {
    e.preventDefault();
    this.setState({ columns: this.state.columns + 1 });
  };
  // Removes Row
  removeRow = (e) => {
    e.preventDefault();
    if (this.state.rows > 1)
    this.setState({ rows: this.state.rows - 1 });
  };
  // Removes Column
  removeColumn = (e) => {
    e.preventDefault();
    if (this.state.columns > 1)
      this.setState({ columns: this.state.columns - 1 });
  };
  // Choose the color of cell
  pickColor = (event) => {
    event.preventDefault();
    this.setState({ color: event.target.value });
  };
  // Change to another cell
  changeToColor = (event) => {
    event.preventDefault();
    event.target.style.backgroundColor = this.state.color;
  };
  // Paint cell
  mouseDown = (event) => {
    event.preventDefault();
    this.setState({ coloring: true });
  };
    // Stop painting cell
  mouseUp = (event) => {
    event.preventDefault();
    this.setState({ coloring: false });
  };
  // Hold and fill
  mouseEnter = (event) => {
    event.preventDefault();
    if (this.state.coloring === true) {
      event.target.style.backgroundColor = this.state.color;
    }
  };
  // Fill All Cells
  fillAllCells = (event) => {
    event.preventDefault();
    const cells = document.getElementsByTagName("td");
    for (let i = 0; i < cells.length; i++) {
      cells[i].style.backgroundColor = this.state.color;
    }
  };
  // Fill Uncolored Cells
  fillUncoloredCells = (event) => {
    event.preventDefault();
    const cells = document.getElementsByTagName("td");
    for (let i = 0; i < cells.length; i++) {
      if (cells[i].style.backgroundColor === "") {
        cells[i].style.backgroundColor = this.state.color;
      }
    }
  };

  // Clear All Cells
  clearAllCells = (event) => {
    event.preventDefault();
    let cells = document.getElementsByTagName("td");
    for (let i = 0; i < cells.length; i++) {
      cells[i].style.backgroundColor = null;
    }
    
  };

  render() {
    let tableRows = [];

    for (let i = 0; i < this.state.rows; i++) {
      tableRows.push(
        <TableRow
          mouseDown={this.mouseDown}
          mouseUp={this.mouseUp}
          mouseEnter={this.mouseEnter}
          numColumns={this.state.columns}
          selectedColor={this.state.color}
          changeToColor={this.changeToColor}
        />
      );
    }

    return (
      <div className="container">
        <Menu
          addRow={this.addRow}
          addColumn={this.addColumn}
          removeRow={this.removeRow}
          removeColumn={this.removeColumn}
          fillAllCells={this.fillAllCells}
          fillUncoloredCells={this.fillUncoloredCells}
          clearAllCells={this.clearAllCells}
          pickColor={this.pickColor}
        />
        <section className="table">
          <table className="container table">{tableRows}</table>
        </section>
      </div>
    );
  }
}

export default Table;
