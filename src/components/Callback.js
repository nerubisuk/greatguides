import React from "react";
import Icon from "./Icon";

class Callback extends React.Component {
  render() {
    const style = {
      position: "absolute",
      display: "flex",
      justifyContent: "center",
      height: "100vh",
      width: "100vw",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: "white",
    };

    return (
      <div style={style}>
        <Icon name='loader' />
      </div>
    );
  }
}

export default Callback;
