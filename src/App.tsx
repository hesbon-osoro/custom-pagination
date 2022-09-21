import { useState } from 'react';
import Pagination from './Pagination';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageCount, setPageCount] = useState<number>(50);
  return (
    <div className="App">
      <h1>Custom Pagination</h1>
      <div className="slidecontainer" title="Slide">
        <input
          type="range"
          min="1"
          max="100"
          value={pageCount}
          className="slider"
          id="myRange"
          onChange={e => setPageCount(parseInt(e.target.value))}
          title="Slide"
        />
      </div>
      <div className="card">
        <Pagination
          currentPage={currentPage}
          pageCount={pageCount}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
}

export default App;
