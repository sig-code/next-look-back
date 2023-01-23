import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import type { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => {
  pageProps.appname = "My Next App";
  pageProps.author = "Mashimo Takuya";
  const getPage = Component.getPage || ((page: any) => page);
  return getPage(
    <div>
      <Header appname={pageProps.appname} />
      <Component {...pageProps} />;
      <Footer author={pageProps.author} />
    </div>
  );
};
export default App;
