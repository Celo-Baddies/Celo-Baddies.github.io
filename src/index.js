import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, RouterProvider, Route, Link } from 'react-router-dom'
import '@rainbow-me/rainbowkit/styles.css'
import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit'
import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import { celoAlfajores, celo } from 'wagmi/chains'
import { publicProvider } from 'wagmi/providers/public'

// animation css
// import 'animate.css';

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [celo, celoAlfajores],
  [publicProvider()]
)

const { connectors } = getDefaultWallets({
  appName: 'Celo Baddie',
  projectId: 'YOUR_PROJECT_ID',
  chains,
})

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
})

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <WagmiConfig config={wagmiConfig}>
        <RainbowKitProvider chains={chains}>
          <App />
        </RainbowKitProvider>
      </WagmiConfig>
    </BrowserRouter>
  </React.StrictMode>
)

// ReactDOM.render(<App />, document.getElementById('root'));
