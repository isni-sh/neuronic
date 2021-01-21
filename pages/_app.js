import '../styles/globals.css'
import '@fontsource/poppins/400.css'
import '@fontsource/poppins/700.css'
import { DefaultSeo } from 'next-seo'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo
        openGraph={{
          type: 'website',
          locale: 'en_EN',
          url: 'https://neuronic.ai/',
          site_name: 'Neuronic',
          description: 'Artificial Intelligence Platform',
        }}
      />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
