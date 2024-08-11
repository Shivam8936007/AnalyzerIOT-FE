import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import { ContextProvider } from "./Contexts/ContextProvider";
import { Providers } from "./redux-store/provider";

ReactDOM.render(
  <ContextProvider>
    <Providers>
        <App />
    </Providers>
  </ContextProvider>,
  document.getElementById("root")
);
