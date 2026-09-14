import React, { useState, useEffect } from 'react';
import { getTopCryptos } from './services/cryptoApi';
import SearchBar from './components/SearchBar';
import CoinList from './components/CoinList';

function App() {
  const [coins, setCoins] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getTopCryptos()
      .then((data) => {
        setCoins(data);
        setLoading(false);
      })
      .catch((err) => {
        setError('Hubo un problema al cargar los datos.');
        setLoading(false);
      });
  }, []);

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    coin.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ maxWidth: '600px', margin: '40px auto', fontFamily: 'Arial, sans-serif', padding: '0 20px' }}>
      <h1 style={{ textAlign: 'center', color: '#333' }}>Top Criptomonedas</h1>
      
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {loading && <p style={{ textAlign: 'center' }}>Cargando criptomonedas...</p>}
      {error && <p style={{ textAlign: 'center', color: 'red' }}>{error}</p>}

      {!loading && !error && <CoinList coins={filteredCoins} />}
    </div>
  );
}

export default App;