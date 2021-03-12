import logo from './logo.svg';
import './App.css';
import React from "react";
import { SearchHeader } from './components/SearchHeader';
import { SearchFilters } from './components/SearchFilters';

function App() {
  return (
    <div className="App">
      <SearchHeader />
    </div>
  );
}

export default App;
