import Footer from '@/components/Footer/Footer'
import { ThemeProvider } from "next-themes";
import Layout from '@/components/Layout/Layout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import Navbar from '@/components/Header/NavBar';
import ScrollUp from '@/components/Layout/ScrollUp';


export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <ThemeProvider attribute="class">
    <Layout>
      {!router.pathname.includes("auth") && <Navbar />}
      <Component {...pageProps} />
      {!router.pathname.includes("auth") && <Footer />}
        <ScrollUp />
    </Layout>
    </ThemeProvider>
  )
}
