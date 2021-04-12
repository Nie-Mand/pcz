import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../utils/Navbar'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className='bg-gray-100 min-h-screen pb-10' >
      <Navbar />
      <Component {...pageProps} />
    </main>
  )
}

export default MyApp

