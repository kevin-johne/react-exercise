import React from "react";
import { render } from "react-dom";
import store from "./store/store";
import { Provider } from "react-redux";
import SelectedLessons from "./components/SlectedLessons/SelectedLessons";

import "./style/styles.scss";

render(
  <Provider store={store}>
    <SelectedLessons />
  </Provider>,
  document.getElementById("root")
);
