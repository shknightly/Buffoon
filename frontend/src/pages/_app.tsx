import type { AppProps } from 'next/app';
import { GeistProvider, CssBaseline } from '@geist-ui/core';
import Head from 'next/head';
import '../styles/global.css';

export default function BuffoonApp({ Component, pageProps }: AppProps) {
  return (
    <GeistProvider>
      <CssBaseline />
      <Head>
        <title>Buffoon Agent Orchestrator</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </GeistProvider>
  );
}
