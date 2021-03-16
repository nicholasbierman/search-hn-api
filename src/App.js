import './App.css';
import React from "react";
import { SearchHeader } from './components/SearchHeader';
import { SearchFilters } from './components/SearchFilters';
import { SearchResults } from './components/SearchResults';

function App() {
  return (
    <div className="App">
      <SearchHeader />
      <SearchFilters />
      <SearchResults />
    </div>
  );
}

export default App;
