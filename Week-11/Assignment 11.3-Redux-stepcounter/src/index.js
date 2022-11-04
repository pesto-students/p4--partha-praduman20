import React, { StrictMode } from "react";
import ReactDom from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store/stepReducer.js";

const rootElement = document.getElementById("root");

ReactDom.render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>,
  rootElement
);
