import React, {createElement} from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, BrowserRouter } from "react-router-dom";
import "./index.scss";
import ScrollToTop from "./helpers/ScrollToTop";
import App from "./App";
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const root = ReactDOM.createRoot(document.getElementById("root"));

const RootRouter = ({children}) => createElement(
  process.env.REACT_APP_TYPE === "desktop" ? HashRouter : BrowserRouter,
  null,
  children
)

root.render(
  // <React.StrictMode>
  <RootRouter>
    <ScrollToTop />
    <App />
  </RootRouter>
  // </React.StrictMode>
);

if ( process.env.REACT_APP_TYPE !== "desktop") {
  serviceWorkerRegistration.register();
}