import React from "react";
import ReactDOM from "react-dom";
import Score from "./components/score";

import "./styles.css";
import { Box } from "./styled";

class App extends React.PureComponent {
  state = {
    value: 0
  };

  add = () => {
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    return (
      <div className="App">
        <h1>Range Indicator</h1>
        <Box>
          <Score value={this.state.value} maxValue={100} label="score" />
        </Box>
        <button onClick={this.add}>Add</button>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
