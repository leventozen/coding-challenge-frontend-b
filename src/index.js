import React from "react";
import { render } from "react-dom";
import App from "./components/App";
import "./index.scss";
import configureStore from "./redux/configureStore";
import { Provider as ReduxProvider } from "react-redux";

const store = configureStore();

render(
    <ReduxProvider store={store}>
            <App />
    </ReduxProvider>,
document.getElementById("app")
);
