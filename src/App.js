import React from "react";
import "App.css";
import { DataController } from "components/DataController";


const API_ACCESS_KEY = "YOUR_API_ACCESS_KEY";
export const API_URL = `https://api.exchangeratesapi.io/v1/latest?access_key=${API_ACCESS_KEY}`;

function App() {
  return (
    <div className="app">
      <header className="app-header">
       Bem vindo a Sky-Bank
      </header>
      <DataController url={API_URL} />
    </div>
  );
}

export default App;
