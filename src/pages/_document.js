import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="ru">
      <Head>
        <meta
          name="description"
          content="All games - информация о новинках и легендах игр! Рейтинг игроков, описание, скриншоты, требования. PC, XBOX, PS, Android, IOS"
        />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        <link
          href="/favicon-16x16.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="/favicon-32x32.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png"></link>
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#000000" />
        <meta name="referrer" content={'strict-origin'} />
        <meta name="robots" content="all" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
