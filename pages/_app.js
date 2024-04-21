import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>jadoo aagaya</title>
        <link rel="icon" href="/favicon-16x16.png" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
