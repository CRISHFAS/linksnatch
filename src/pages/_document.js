import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>LinkSnatch — The dead simple bookmarks</title>
      </Head>
      <body class="dark:bg-slate-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
