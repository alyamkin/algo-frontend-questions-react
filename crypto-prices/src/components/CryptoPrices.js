import { useState } from 'react';
import useFetchCryptocurrencies from '../hooks/useFetchCryptocurrencies';

export default function CryptoPrices() {
  const [page, setPage] = useState(0);
  const { coins, hasNext } = useFetchCryptocurrencies(page);

  if (coins == null) return null;

  return (
    <>
      <table>
        <caption>Crypto Prices</caption>
        <thead>
          <tr>
            <th>Coin</th>
            <th>Price</th>
            <th>Market Cap</th>
          </tr>
        </thead>
        <tbody>
          {coins.map(({ name, price, marketCap }) => {
            return (
              <tr key={name}>
                <th scope="row">{name}</th>
                <td>{price}</td>
                <td>{marketCap}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button disabled={page === 0} onClick={() => setPage(page - 1)}>
        Back
      </button>
      <button disabled={!hasNext} onClick={() => setPage(page + 1)}>
        Next
      </button>
    </>
  );
}
