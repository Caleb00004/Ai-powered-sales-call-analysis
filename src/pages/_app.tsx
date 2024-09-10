import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { apiSlice } from "../../api-feature/apiSlice";
import {Montserrat} from "next/font/google"


const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default function App({ Component, pageProps }: AppProps) {
  return(
      <ApiProvider api={apiSlice}>
        <div className={montserrat.className}>
          <Component {...pageProps} />
        </div>
      </ApiProvider> 
  )
}
