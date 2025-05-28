import { defaultWagmiConfig } from '@web3modal/wagmi/react/config'
import { defineChain } from 'viem'

// Define Story Aeneid Testnet
export const storyAeneid = defineChain({
    id: 1315,
    name: 'Story Aeneid Testnet',
    network: 'story-aeneid',
    nativeCurrency: {
        decimals: 18,
        name: 'STORY',
        symbol: 'STORY',
    },
    rpcUrls: {
        default: { 
            http: ['https://aeneid.storyrpc.io']
        },
        public: {
            http: ['https://aeneid.storyrpc.io']
        },
    },
    blockExplorers: {
        default: {
            name: 'Blockscout',
            url: 'https://aeneid.storyscan.io',
        },
    },
    testnet: true,
})

const projectId = 'YOUR_WALLET_CONNECT_PROJECT_ID'

const metadata = {
    name: 'IntercambiARTE',
    description: 'Social Network for Tokenized Asset Exchange',
    url: 'https://your-website.com',
    icons: ['https://avatars.githubusercontent.com/u/37784886']
}

export const config = defaultWagmiConfig({
    chains: [storyAeneid],
    projectId,
    metadata,
    enableWalletConnect: true,
    enableInjected: true,
    enableEIP6963: true,
    enableCoinbase: true,
})