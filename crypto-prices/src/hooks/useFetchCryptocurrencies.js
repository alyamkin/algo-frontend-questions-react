import { useState, useEffect } from 'react';
import getCryptocurrenciesData from '../data/cryptocurrenciesData';

export default function useFetchCryptocurrencies(page = 0) {
  const [cryptocurrencies, setCryptocurrencies] = useState([]);

  useEffect(() => {
    async function fetchCryptocurrencies() {
      const data = await getCryptocurrenciesData(page);
      console.log(data);
      setCryptocurrencies(data);
    }
    fetchCryptocurrencies();
  }, [page]);

  return cryptocurrencies;
}
