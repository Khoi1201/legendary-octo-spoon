import React, { Suspense } from "react";

import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
// import { store } from "./redux/app/store"; // no store yet

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Provider store={store}>
      <Suspense fallback={null}> */}
        <App />
      {/* </Suspense>
    </Provider> */}
  </React.StrictMode>
);

