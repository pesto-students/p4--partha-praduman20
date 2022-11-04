import React from "react";
import { connect } from "react-redux";
import "./App.css";

function App(props) {
  const { lightOn, flipLight } = props;

  return (
    <>
      <div className={`room ${lightOn ? "lit" : "dark"}`}>
        the room is {lightOn ? "lit" : "dark"}
        <br />
        <button onClick={flipLight}>flip</button>
      </div>
    </>
  );
}

const mapStateFromProps = (state) => {
  return {
    lightOn: state,
  };
};

const mapDispatchFromProps = {
  flipLight() {
    return {
      type: "flip",
    };
  },
};

const connectedApp = connect(mapStateFromProps, mapDispatchFromProps)(App);

export default connectedApp;
