import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { DataProvider, DataContext } from "./contexts/DataContext";
import { AuthProvider } from "./contexts/AuthContext";

// Call make Server
makeServer();

export { DataContext };

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <DataProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </DataProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
