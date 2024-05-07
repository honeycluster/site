import React from 'react';
import Head from 'next/head';

const SITE_ROOT = 'https://' + (process.env.VERCEL_URL || 'honeycluster.io');

const Meta = () => {
  return (
    <Head>
      {/* 
        <!-- HTML Meta Tags --> */}
      <title>Honeycluster</title>
      <meta name="description" content="The Hive of the XRP Ledger." />
      <meta name="msapplication-TileColor" content="#000000" />

      {/*         <!-- Facebook Meta Tags --> */}
      <meta property="og:url" content={`${SITE_ROOT}`} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Honeycluster" />
      <meta property="og:description" content="The Hive of the XRP Ledger." />
      <meta property="og:image" content={`${SITE_ROOT}/og-image.png`} />

      {/*         <!-- Twitter Meta Tags --> */}
      <meta name="twitter:site" content="@HoneyclusterX" />
      <meta name="twitter:creator" content="@HoneyclusterX" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content={`${SITE_ROOT}`} />
      <meta property="twitter:url" content={`${SITE_ROOT}`} />
      <meta name="twitter:title" content="Honeycluster" />
      <meta name="twitter:description" content="The Hive of the XRP Ledger." />
      <meta name="twitter:image" content={`${SITE_ROOT}/og-image.png`} />
    </Head>
  );
};

export default Meta;
