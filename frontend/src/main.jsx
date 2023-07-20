import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AppContextProvider from "./context/appContext";
import UserExport from "./context/UserContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <UserExport.ContextProvider>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </UserExport.ContextProvider>
  </React.StrictMode>
);
