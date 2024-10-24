import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        {/* 预加载字体，防止字体闪烁 */}
        <link rel="preload" href="/fonts/KFOmCnqEu92Fr1Mu4mxK.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/KFOlCnqEu92Fr1MmWUlfBBc4.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />

        {/* 插入内链的字体定义 */}
        <style dangerouslySetInnerHTML={{
          __html: `
              /* latin */
              @font-face {
                font-family: 'Roboto';
                font-style: normal;
                font-weight: 400;
                font-display: block;
                src: url(/fonts/KFOmCnqEu92Fr1Mu4mxK.woff2) format('woff2');
                unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
              }
              /* latin */
              @font-face {
                font-family: 'Roboto';
                font-style: normal;
                font-weight: 700;
                font-display: block;
                src: url(/fonts/KFOlCnqEu92Fr1MmWUlfBBc4.woff2) format('woff2');
                unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
              }
            `
        }} />
      </Head>
      <body className='antialiased'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}