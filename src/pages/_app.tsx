import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { apiSlice } from "../../api-feature/apiSlice";
import {Montserrat} from "next/font/google"
import { ContextProvider } from "@/components/contexts/appContext";
import { DataContextProvider } from "@/components/contexts/dataContext";

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default function App({ Component, pageProps }: AppProps) {
  return(
      <ApiProvider api={apiSlice}>
        <ContextProvider>
          <DataContextProvider>
            <div className={montserrat.className}>
              <Component {...pageProps} />
            </div>
          </DataContextProvider>
        </ContextProvider>
      </ApiProvider> 
  )
}
