import React from 'react';

function CoinCard({ coin }) {
  const isPositive = coin.price_change_percentage_24h >= 0;

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '12px 20px',
      margin: '10px 0',
      backgroundColor: '#f9f9f9',
      borderRadius: '8px',
      border: '1px solid #e0e0e0'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        <img src={coin.image} alt={coin.name} style={{ width: '30px', height: '30px' }} />
        <div>
          <h4 style={{ margin: 0 }}>{coin.name}</h4>
          <span style={{ color: '#777', textTransform: 'uppercase' }}>{coin.symbol}</span>
        </div>
      </div>
      
      <div style={{ textAlign: 'right' }}>
        <p style={{ margin: 0, fontWeight: 'bold' }}>${coin.current_price.toLocaleString()} USD</p>
        <span style={{ color: isPositive ? 'green' : 'red', fontSize: '14px' }}>
          {isPositive ? '+' : ''}{coin.price_change_percentage_24h?.toFixed(2)}%
        </span>
      </div>
    </div>
  );
}

export default CoinCard;