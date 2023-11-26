import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import Layout from '@/components/Layout/Layout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'


export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <Layout>
      {!router.pathname.includes("auth") && <Header />}
      <Component {...pageProps} />
      {!router.pathname.includes("auth") && <Footer />}
    </Layout>
  )
}
