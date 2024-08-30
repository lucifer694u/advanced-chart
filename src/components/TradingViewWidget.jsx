// src/TradingViewWidget.jsx
import React, { useEffect, useRef, memo } from 'react';

function TradingViewWidget() {
  const container = useRef(null);

  useEffect(() => {
    // Check if the script already exists
    if (!document.querySelector('script[src="https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js"]')) {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
           "autosize": true,
          "symbol": "NASDAQ:AAPL",
          "interval": "D",
          "timezone": "Etc/UTC",
          "theme": "dark",
          "style": "1",
          "locale": "en",
          "withdateranges": true,
          "hide_side_toolbar": false,
          "allow_symbol_change": true,
          "details": true,
          "watchlist": [
            "OANDA:XAUUSD",
            "NASDAQ:NVDA",
            "CME_MINI:ES1!",
            "NSE:NIFTY"
          ],
          "hotlist": true,
          "calendar": false,
          "support_host": "https://www.tradingview.com"
        }`;
      container.current.appendChild(script);
    }
  }, []);

  return (
    <div className="tradingview-widget-container h-full w-full" ref={container}>
      <div className="tradingview-widget-container__widget h-full w-full"></div>
     
    </div>
  );
}

export default memo(TradingViewWidget);
