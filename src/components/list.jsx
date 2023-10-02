import { Component } from "react";

export default class List extends Component {
  state = {
    editValue: "",
    btn: false,
  };
  handleCheck = (data) => {
    this.setState({ btn: !this.state.btn });
    this.props.completeEdit(data, this.state.editValue);
  };
  handleEditValue = (event) => {
    const eventValue = event.target.value;
    this.setState({ editValue: eventValue });
  };
  handlePencil = (data) => {
    console.log("pencil");
    this.setState({ btn: !this.state.btn, editValue: data.text });
  };
  render() {
    const { data, handleDelete } = this.props;
    const { btn, editValue } = this.state;
    return (
      <div className="list">
        <li>
          {btn ? (
            <input
              type="text"
              value={editValue}
              onChange={this.handleEditValue}
            />
          ) : (
            <p>{data.text}</p>
          )}
        </li>
        <div className="btns">
          <button onClick={() => handleDelete(data.id)}>
            <i
              className="fa fa-trash"
              style={{ fontSize: "16px", color: "red" }}
            ></i>
          </button>
          {btn === false ? (
            <button onClick={() => this.handlePencil(data)}>
              <i
                className="fa fa-pencil"
                style={{ fontSize: "16px", color: "black" }}
              ></i>
            </button>
          ) : (
            <button onClick={() => this.handleCheck(data)}>
              <i
                className="fa fa-check"
                style={{ fontSize: "16px", color: "green" }}
              ></i>
            </button>
          )}
        </div>
      </div>
    );
  }
}
