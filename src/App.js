import React, { Component } from "react";
import './App.css'; // Import your CSS file

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newItem: "",
      list: [],
    };
  }

  updateInput(key, value) {
    // Update react state
    this.setState({
      [key]: value,
    });
  }

  addItem() {
    // Create an item with a unique id
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice(),
    };

    // Copy the current list of items
    const list = [...this.state.list];

    // Add the new item to the list
    list.push(newItem);

    // Update the state with the new list and reset the newItem input
    this.setState({
      list,
      newItem: "",
    });
  }

  deleteItem(id) {
    // Copy the current list of items
    const list = [...this.state.list];

    // Filter out the item being deleted
    const updatedList = list.filter((item) => item.id !== id);

    this.setState({ list: updatedList });
  }

  render() {
    return (
      <div className="centered-container"> {/* Apply a class to center the content */}
        <div>
          <span>Add an Item...</span> 
          <br/>
          <br/>
          <input
            type="text"
            placeholder="Type an item here..."
            value={this.state.newItem}
            onChange={(e) => this.updateInput("newItem", e.target.value)}
          />
          <button onClick={() => this.addItem()}>Add</button>
          <br />
          <ul>
            {this.state.list.map((item) => {
              return (
                <li key={item.id}>
                  {item.value}
                  <button onClick={() => this.deleteItem(item.id)}>X</button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
