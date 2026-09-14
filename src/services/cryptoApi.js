const BASE_URL = 'https://api.coingecko.com/api/v3';

export async function getTopCryptos() {
  try {
    const response = await `${BASE_URL}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false`;
    const res = await fetch(response);
    
    if (!res.ok) {
      throw new Error('Error al obtener los datos de la API');
    }
    
    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Error en cryptoApi:', error);
    throw error;
  }
}