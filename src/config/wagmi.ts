import { defaultWagmiConfig } from '@web3modal/wagmi/react/config'
import { aeneid } from '@story-protocol/core-sdk'

const projectId = 'YOUR_WALLET_CONNECT_PROJECT_ID'

const metadata = {
    name: 'IntercambiARTE',
    description: 'Social Network for Tokenized Asset Exchange',
    url: 'https://your-website.com',
    icons: ['https://avatars.githubusercontent.com/u/37784886']
}

export const config = defaultWagmiConfig({
    chains: [aeneid], // Using Story Protocol's Aeneid testnet
    projectId,
    metadata,
    enableWalletConnect: true,
    enableInjected: true,
    enableEIP6963: true,
    enableCoinbase: true,
})