import React from 'react'
import { AppProps } from 'next/app'

import 'aos/dist/aos.css'
import GlobalStyles from '../styles/global'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
