import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

//store
import { makeObservable, observable, computed, action } from "mobx";

class oneStore {
  count = 0;

  constructor() {
    makeObservable(this, {
      count: observable,
      isNegative: computed,
      increase: action,
      decrease: action,
    });
  }

  get isNegative() {
    return this.count < 0 ? "Yes" : "No";
  }

  increase() {
    this.count += 1;
  }

  decrease() {
    this.count -= 1;
  }
}

//
const store = new oneStore();

ReactDOM.render(
  <React.StrictMode>
    <App myCounter={store} />
  </React.StrictMode>,
  document.getElementById("root")
);
