import React from "react";
import { connect } from "react-redux";
import "./App.css";

function App(props) {
  const { count, addStep, resetStep } = props;
  return (
    <>
      <div className="room">
        You have walked {count} steps today!
        <br />
        <button className="button" onClick={addStep}>
          Add a step
        </button>
        <br />
        <button className="button2" onClick={resetStep}>
          Reset Steps
        </button>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    count: state,
  };
};

const mapDispatchToProps = {
  addStep() {
    return {
      type: "add",
    };
  },
  resetStep() {
    return {
      type: "reset",
    };
  },
};

const connectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

export default connectedApp;
