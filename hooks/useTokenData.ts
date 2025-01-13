import { useState, useEffect } from 'react';

interface TokenData {
  price: string;
  marketCap: string;
  volume24h: string;
}

export const useTokenData = () => {
  const [tokenData, setTokenData] = useState<TokenData>({
    price: '0.000',
    marketCap: '0',
    volume24h: '0'
  });

  useEffect(() => {
    const fetchTokenData = async () => {
      try {
        const response = await fetch('https://api.dexscreener.com/latest/dex/pairs/icp/kp6ir-vyaaa-aaaag-qnena-cai');
        const data = await response.json();
        
        if (data.pairs && data.pairs[0]) {
          const pair = data.pairs[0];
          
          // Format price to 6 decimal places
          const formattedPrice = parseFloat(pair.priceUsd || '0').toFixed(6);
          
          // Format market cap with commas and no decimal places
          const formattedMarketCap = parseFloat(pair.marketCap || '0').toLocaleString('en-US', {
            maximumFractionDigits: 0
          });
          
          // Format volume with commas and no decimal places
          const formattedVolume = parseFloat(pair.volume?.h24 || '0').toLocaleString('en-US', {
            maximumFractionDigits: 0
          });

          setTokenData({
            price: formattedPrice,
            marketCap: formattedMarketCap,
            volume24h: formattedVolume
          });
        }
      } catch (error) {
        console.error('Error fetching token data:', error);
        // Keep the previous values on error
      }
    };

    // Fetch immediately
    fetchTokenData();

    // Then fetch every 30 seconds
    const interval = setInterval(fetchTokenData, 30000);

    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, []);

  return tokenData;
};
