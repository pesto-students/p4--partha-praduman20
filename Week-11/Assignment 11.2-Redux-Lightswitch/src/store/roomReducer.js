import { createStore } from "redux";

const initialState = true;

function lightReducer(lightState = initialState, action) {
  switch (action.type) {
    case "flip": {
      return (lightState = !lightState);
    }
    default:
      return lightState;
  }
}

const store = createStore(lightReducer);

export { store };
