import { Component } from "react";
import "./components/list.css";
import Header from "./components/header";
import List from "./components/list";

export default class App extends Component {
  state = {
    data: [
      {
        id: 1,
        text: "Nursultan",
      },
      {
        id: 2,
        text: "Omurkan Uulu",
      },
    ],
    inputValue: "",
  };
  completeEdit = (data, newText) => {
    const newData = [...this.state.data];
    newData.forEach((el) => {
      if (el.id === data.id) {
        el.text = newText;
      }
    });
    this.setState({ data: newData });
  };
  handleDelete = (id) => {
    const filteredlist = this.state.data.filter((list) => list.id !== id);
    this.setState({ data: filteredlist });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const newData = [...this.state.data];
    const idGenerator = newData.length + 1;

    newData.push({
      id: idGenerator,
      text: this.state.inputValue,
    });
    this.setState({ data: newData, inputValue: "" });
  };
  handleInput = (event) => {
    const inputText = event.target.value;
    this.setState({ inputValue: inputText });
  };
  render() {
    const { data, inputValue } = this.state;
    return (
      <div className="container">
        <div className="header">
          <Header {...this.state} {...this} />
        </div>
        <ul>
          {data.map((list) => (
            <List key={list.id} data={list} {...this} />
          ))}
        </ul>
      </div>
    );
  }
}
