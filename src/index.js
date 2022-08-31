import React from "react";
import { createRoot }from "react-dom/client";
import App from "./components/App";
import { BrowserRouter as Router } from "react-router-dom";


const rootElement = document.getElementById("app");

const root = createRoot(rootElement);
root.render(
    <Router>
        <App />
    </Router>
);