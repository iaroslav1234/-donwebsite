import { useState, useEffect } from 'react';

interface TokenData {
  price: string;
  marketCap: string;
  volume24h: string;
  isLoading: boolean;
  error: string | null;
}

export const useTokenData = () => {
  const [tokenData, setTokenData] = useState<TokenData>({
    price: '0.000',
    marketCap: '0',
    volume24h: '0',
    isLoading: true,
    error: null
  });

  useEffect(() => {
    const fetchTokenData = async () => {
      try {
        console.log('Fetching token data...');
        // Using a search query instead
        const response = await fetch('https://api.dexscreener.com/latest/dex/search?q=kp6ir-vyaaa-aaaag-qnena-cai');
        const data = await response.json();
        console.log('Full API Response:', JSON.stringify(data, null, 2));
        
        if (data.pairs && data.pairs.length > 0) {
          // Get the first pair with actual data
          const pair = data.pairs[0];
          console.log('Raw pair data:', {
            priceUsd: pair.priceUsd,
            priceNative: pair.priceNative,
            liquidity: pair.liquidity,
            volume: pair.volume,
            fdv: pair.fdv,
            marketCap: pair.marketCap
          });
          
          // Get price from priceUsd or priceNative
          const price = pair.priceUsd || pair.priceNative || '0';
          const formattedPrice = parseFloat(price).toFixed(6);
          
          // Get market cap from marketCap or fdv
          const marketCap = pair.marketCap || pair.fdv || '0';
          const formattedMarketCap = parseFloat(marketCap).toLocaleString('en-US', {
            maximumFractionDigits: 0
          });
          
          // Get volume from volume.h24
          const volume = pair.volume?.h24 || '0';
          const formattedVolume = parseFloat(volume).toLocaleString('en-US', {
            maximumFractionDigits: 0
          });

          console.log('Processed data:', {
            rawPrice: price,
            formattedPrice,
            rawMarketCap: marketCap,
            formattedMarketCap,
            rawVolume: volume,
            formattedVolume
          });

          setTokenData({
            price: formattedPrice,
            marketCap: formattedMarketCap,
            volume24h: formattedVolume,
            isLoading: false,
            error: null
          });
        } else {
          console.error('No pair data found in response. Full response:', data);
          setTokenData(prev => ({
            ...prev,
            isLoading: false,
            error: 'No data available'
          }));
        }
      } catch (error) {
        console.error('Error fetching token data:', error);
        setTokenData(prev => ({
          ...prev,
          isLoading: false,
          error: 'Failed to fetch data'
        }));
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
