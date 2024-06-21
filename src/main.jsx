import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "semantic-ui-css/semantic.min.css";
import { reducer } from "./reducers";
import { applyMiddleware, createStore } from "redux";
import { thunk } from "redux-thunk";
import { Provider } from "react-redux";
import { composeWithDevTools } from "@redux-devtools/extension";

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
