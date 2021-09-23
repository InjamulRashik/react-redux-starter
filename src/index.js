import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import { createStore } from "redux";

//Store -> Globalized State

//Action -> Increament

const increament = () => {
  return {
    type: "Increament",
  };
};
const decreament = () => {
  return {
    type: "Decreament",
  };
};

//Reducer -> Proccess Request

const counter = (state = 0, action) => {
  switch (action.type) {
    case "Increament":
      return state + 1;

    case "Decreament":
      return state - 1;

    default:
  }
};

let store = createStore(counter);

//Display it console

store.subscribe(() => console.log(store.getState()));

//Dispatch -> Process Checker to update Store

store.dispatch(increament());

ReactDOM.render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
