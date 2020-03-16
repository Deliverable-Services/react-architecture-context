import React from "react";
import ReactDOM from "react-dom";

// - Base CSS
import "./assets/css/base.css";

// - Components
import AppRoute from "./Route";

// - Service Worker
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<AppRoute />, document.getElementById("root"));

registerServiceWorker();
