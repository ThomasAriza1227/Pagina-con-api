
import React from 'react';
import CoinCard from './CoinCard';

function CoinList({ coins }) {
  if (coins.length === 0) {
    return <p style={{ textAlign: 'center', color: '#777' }}>No se encontraron criptomonedas.</p>;
  }

  return (
    <div>
      {coins.map((coin) => (
        <CoinCard key={coin.id} coin={coin} />
      ))}
    </div>
  );
}

export default CoinList;