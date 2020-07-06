import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from './App';

import * as serviceWorker from "./serviceWorker";
// import List from './listprodact'
import AddProduct from "./AddProduct";


function MyStore() {
  return (
    <div>
      <h1>My store </h1>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <MyStore/>
    
    <AddProduct />
  </React.StrictMode>,
  document.getElementById("root")
);
if (module.hot) {
  module.hot.accept();
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
