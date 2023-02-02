import { APP_URL } from '@/constants/general';

export default function Head() {
  const appName = 'NextJS 13';
  const defaultTitle = 'NextJS 13';
  const defaultDescription = 'Deskripsi untuk SEO';

  return (
    <>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width" />
      <title>{defaultTitle}</title>
      <meta name="robots" content="index,follow" />
      <meta name="description" content={defaultDescription} />
      <meta name="theme-color" content="#fff" />
      <meta property="og:title" content={defaultTitle} />
      <meta property="og:description" content={defaultDescription} />
      <meta property="og:url" content={APP_URL} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="id_ID" />
      <meta property="og:site_name" content={appName} />
      <link rel="canonical" href={APP_URL} />
      <meta name="application-name" content={appName} />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-title" content={appName} />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="nightmode" content="disable" />
      <meta httpEquiv="x-ua-compatible" content="IE=edge; chrome=1" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="manifest" href="/manifest.json" />
    </>
  );
}
