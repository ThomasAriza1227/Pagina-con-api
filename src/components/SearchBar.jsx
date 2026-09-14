import React from 'react';

function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div style={{ marginBottom: '20px' }}>
      <input
        type="text"
        placeholder="Buscar criptomoneda..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          padding: '10px',
          width: '100%',
          maxWidth: '400px',
          borderRadius: '5px',
          border: '1px solid #ccc',
          fontSize: '16px'
        }}
      />
    </div>
  );
}

export default SearchBar;