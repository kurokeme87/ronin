import { http, createConfig } from 'wagmi'
import { mainnet, ronin, optimism, avalanche, celo } from 'wagmi/chains'
import { injected, metaMask, safe, walletConnect } from 'wagmi/connectors'
export const config = createConfig({
  autoConnect: true,
  chains: [mainnet, ronin, optimism, avalanche, celo],
  connectors: [
    injected(),
    walletConnect({ projectId: 'd95ebe5f9fcbd2cc9241e3bc197790a8' }),
    metaMask(),
    safe(),
  ],
  transports: {
    [mainnet.id]: http(),
    [ronin.id]: http(),
    [optimism.id]: http(),
    [avalanche.id]: http(),
    [celo.id]: http(),

  },
})