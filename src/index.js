import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import middleware from "./middleware";
import { BrowserRouter } from "react-router-dom";

const store = createStore(reducer, composeWithDevTools(middleware));
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
