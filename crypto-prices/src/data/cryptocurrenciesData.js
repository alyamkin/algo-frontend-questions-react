export default function getCryptocurrenciesData(page) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(cryptocurrenciesData[page]);
    }, 500);
  });
}

const cryptocurrenciesData = {
  0: {
    coins: [
      {
        name: 'Bitcoin',
        price: '$29,970.48',
        marketCap: '$571,108,740,782',
      },
      {
        name: 'Ethereum',
        price: '$2,064.89',
        marketCap: '$249,824,561,307',
      },
      {
        name: 'Tether',
        price: '$0.9986',
        marketCap: '$78,663,362,207',
      },
      {
        name: 'USD Coin',
        price: '$1.00',
        marketCap: '$50,503,234,574',
      },
      {
        name: 'BNB',
        price: '$295.25',
        marketCap: '$48,341,424,542',
      },
      {
        name: 'XRP',
        price: '$0.4248',
        marketCap: '$20,529,830,618',
      },
      {
        name: 'Cardano',
        price: '$0.5497',
        marketCap: '$18,818,248,515',
      },
      {
        name: 'Binance USD',
        price: '$1.00',
        marketCap: '$17,364,168,321',
      },
      {
        name: 'Solana',
        price: '$51.46',
        marketCap: '$17,337,608,684',
      },
      {
        name: 'Dogecoin',
        price: '$0.08981',
        marketCap: '$11,915,806,122',
      },
    ],
    hasNext: true,
  },
  1: {
    coins: [
      {
        name: 'Polkadot',
        price: '$10.81',
        marketCap: '$10,680,319,930',
      },
      {
        name: 'Avalanche',
        price: '$33.60',
        marketCap: '$9,035,633,124',
      },
      {
        name: 'Wrapped Bitcoin',
        price: '$29,945.12',
        marketCap: '$8,510,535,185',
      },
      {
        name: 'TRON',
        price: '$0.07472',
        marketCap: '$7,336,132,095',
      },
      {
        name: 'Shiba Inu',
        price: '$0.00001291',
        marketCap: '$7,090,274,602',
      },
      {
        name: 'Dai',
        price: '$1.00',
        marketCap: '$6,397,294,862',
      },
      {
        name: 'Polygon',
        price: '$0.687',
        marketCap: '$5,460,956,724',
      },
      {
        name: 'Cronos',
        price: '$0.1945',
        marketCap: '$4,914,446,239',
      },
      {
        name: 'Litecoin',
        price: '$69.84',
        marketCap: '$4,908,283,546',
      },
      {
        name: 'UNUS SED LEO',
        price: '$5.08',
        marketCap: '$4,846,352,051',
      },
    ],
    hasNext: true,
  },
  2: {
    coins: [
      {
        name: 'NEAR Protocol',
        price: '$6.61',
        marketCap: '$4,511,281,177',
      },
      {
        name: 'FTX Token',
        price: '$31.42',
        marketCap: '$4,290,330,423',
      },
      {
        name: 'Bitcoin Cash',
        price: '$207.02',
        marketCap: '$3,946,319,300',
      },
      {
        name: 'Uniswap',
        price: '$5.15',
        marketCap: '$3,560,466,741',
      },
      {
        name: 'Chainlink',
        price: '$7.23',
        marketCap: '$3,375,644,127',
      },
      {
        name: 'Stellar',
        price: '$0.1339',
        marketCap: '$3,321,606,104',
      },
      {
        name: 'Cosmos',
        price: '$10.97',
        marketCap: '$3,142,622,348',
      },
      {
        name: 'Algorand',
        price: '$0.46',
        marketCap: '$3,133,587,712',
      },
      {
        name: 'Flow',
        price: '$2.93',
        marketCap: '$3,032,285,770',
      },
      {
        name: 'Ethereum Classic',
        price: '$20.99',
        marketCap: '$2,828,919,587',
      },
    ],
    hasNext: true,
  },
  3: {
    coins: [
      {
        name: 'Monero',
        price: '$148.45',
        marketCap: '$2,690,082,919',
      },
      {
        name: 'ApeCoin',
        price: '$8.89',
        marketCap: '$2,531,153,849',
      },
      {
        name: 'Hedera',
        price: '$0.1001',
        marketCap: '$2,076,726,996',
      },
      {
        name: 'VeChain',
        price: '$0.03142',
        marketCap: '$2,021,093,940',
      },
      {
        name: 'Internet Computer',
        price: '$8.66',
        marketCap: '$2,019,217,656',
      },
      {
        name: 'Decentraland',
        price: '$1.05',
        marketCap: '$1,929,041,878',
      },
      {
        name: 'Elrond',
        price: '$87.55',
        marketCap: '$1,920,004,227',
      },
      {
        name: 'Filecoin',
        price: '$8.99',
        marketCap: '$1,846,708,176',
      },
      {
        name: 'TerraUSD',
        price: '$0.1793',
        marketCap: '$2,022,046,525',
      },
      {
        name: 'The Sandbox',
        price: '$1.35',
        marketCap: '$1,661,320,440',
      },
    ],
    hasNext: true,
  },
  4: {
    coins: [
      {
        name: 'Tezos',
        price: '$1.82',
        marketCap: '$1,625,363,390',
      },
      {
        name: 'Theta Network',
        price: '$1.40',
        marketCap: '$1,395,339,389',
      },
      {
        name: 'Zcash',
        price: '$94.81',
        marketCap: '$1,363,016,492',
      },
      {
        name: 'EOS',
        price: '$1.37',
        marketCap: '$1,357,902,399',
      },
      {
        name: 'Maker',
        price: '$1,358.09',
        marketCap: '$1,327,708,685',
      },
      {
        name: 'PancakeSwap',
        price: '$4.38',
        marketCap: '$1,297,608,055',
      },
      {
        name: 'Axie Infinity',
        price: '$21.25',
        marketCap: '$1,294,324,718',
      },
      {
        name: 'KuCoin Token',
        price: '$12.60',
        marketCap: '$1,239,621,431',
      },
      {
        name: 'TrueUSD',
        price: '$1.00',
        marketCap: '$1,219,752,458',
      },
      {
        name: 'Aave',
        price: '$85.81',
        marketCap: '$1,176,886,734',
      },
    ],
    hasNext: false,
  },
};
