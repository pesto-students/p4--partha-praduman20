import { createStore } from "redux";

const initialState = 0;

function lightReducer(count = initialState, action) {
  switch (action.type) {
    case "add": {
      return (count = count + 1);
    }
    case "reset": {
      return (count = initialState);
    }
    default:
      return count;
  }
}

const store = createStore(lightReducer);

export { store };
