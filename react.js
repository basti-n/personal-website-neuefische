import React from "react";
import { component } from "react";
import { render } from "react-dom";

class MyApp extends React.Component {
  render() {
    return <div>Hi there</div>;
  }
}

reactDOM.render(<MyApp />, document.querySelector("#react"));
