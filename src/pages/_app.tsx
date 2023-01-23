import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  pageProps.appname = "My Next App";
  pageProps.author = "Mashimo Takuya";
  return (
    <div>
      <Head>
        <link
          href='https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css'
          rel='stylesheet'
        />
      </Head>
      <Header appname={pageProps.appname} />
      <Component {...pageProps} />;
      <Footer author={pageProps.author} />
    </div>
  );
}
