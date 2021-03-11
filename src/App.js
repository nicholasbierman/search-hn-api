import logo from './logo.svg';
import './App.css';
import React from "react";
import { SearchHeader } from './components/SearchHeader';

function App() {
  return (
    <div className="App">
        <SearchHeader />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{React.version}</p>
      </header>
    </div>
  );
}

export default App;
