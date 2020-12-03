import React from 'react'
import Document, { DocumentInitialProps, DocumentContext, Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <meta charSet='utf-8' />
          <meta name='robots' content='index/follow' />
          <meta property='og:title' content='jonasdevzero - Portfolio' />
          <meta property='og:image' content='https://github.com/jonasdevzero/MediaHub/blob/master/projects/portfolio/home.PNG?raw=true' />
          <meta property='og:description' content='Portfolio website of jonasdevzero' />
          <meta property='og:url' content='https://jonasdevzero.vercel.app' />
          <link 
            rel='icon' type='image/png' 
            href='https://static.thenounproject.com/png/300487-200.png' 
          />
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}