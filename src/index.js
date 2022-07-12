import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ErrorBoundary from './ErrorBoundary'
import {BrowserRouter} from "react-router-dom"

ReactDOM.render(//by adding BrowserRouter in the jsx now all child components can declare routes. 
  <ErrorBoundary>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ErrorBoundary>,
  document.getElementById("root")
);
//Errors in child components will be handled by the ErrorBoundary 
//Error boundaries do not catch erros for: 
// event handlers, asynchronous code (e.g. setTimeout or requestAnimationFram callbacks),
// server side rendering, errors thrown in the error boundary itself(rather than its children)
