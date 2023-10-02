import { Component } from "react";
import "./list.css";

export default class Header extends Component {
  render() {
    const { data, inputValue, handleInput, handleSubmit } = this.props;
    return (
      <div>
        <form action="" onSubmit={handleSubmit}>
          <input type="text" value={inputValue} onChange={handleInput} />
          <button>
            <i
              className="fa fa-check"
              style={{ fontSize: "28px", color: "blue" }}
            ></i>
          </button>
        </form>
      </div>
    );
  }
}
