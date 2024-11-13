"use client";

import Script from "next/script";

const TawkToChat = () => {
  return (
    <Script
      id="tawk-to"
      strategy="lazyOnload"
      src="https://embed.tawk.to/669620aa32dca6db2cb02d7d/1i2t6v6ns"
      // onLoad={() => {
      //   var Tawk_API = Tawk_API || {};
      //   Tawk_LoadStart = new Date();
      // }}
      crossOrigin="anonymous"
    />
  );
};

export default TawkToChat;
