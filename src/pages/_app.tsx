import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { apiSlice } from "../../api-feature/apiSlice";
import { GoogleOAuthProvider } from "@react-oauth/google";

export default function App({ Component, pageProps }: AppProps) {
  return(
      <ApiProvider api={apiSlice}>
        <GoogleOAuthProvider clientId="910499230299-dj6lbj33irl33oldm8v49ors6ohr6eh2.apps.googleusercontent.com">
          <Component {...pageProps} />
        </GoogleOAuthProvider>
      </ApiProvider> 
  )
}
