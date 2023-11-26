<<<<<<< HEAD
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
=======
import { ThemeProvider } from "next-themes";
>>>>>>> 84f12964ed2eeaae8460da5e4d8d96e949a94016
import Layout from '@/components/Layout/Layout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'


export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <ThemeProvider attribute="class">
    <Layout>
<<<<<<< HEAD
      {!router.pathname.includes("auth") && <Header />}
      <Component {...pageProps} />
      {!router.pathname.includes("auth") && <Footer />}
=======
      <Component {...pageProps} />
>>>>>>> 84f12964ed2eeaae8460da5e4d8d96e949a94016
    </Layout>
    </ThemeProvider>
  )
}
