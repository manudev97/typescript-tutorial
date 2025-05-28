import { WagmiProvider } from 'wagmi'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Web3Modal } from '@web3modal/wagmi/react'
import { config } from './config/wagmi'
import WalletConnect from './components/WalletConnect'

const queryClient = new QueryClient()

function App() {
    return (
        <WagmiProvider config={config}>
            <QueryClientProvider client={queryClient}>
                <Web3Modal />
                <div className="min-h-screen bg-gray-100">
                    <header className="p-4 bg-white shadow">
                        <div className="container mx-auto flex justify-between items-center">
                            <h1 className="text-2xl font-bold">IntercambiARTE</h1>
                            <WalletConnect />
                        </div>
                    </header>
                    <main className="container mx-auto p-4">
                        {/* Your other components will go here */}
                    </main>
                </div>
            </QueryClientProvider>
        </WagmiProvider>
    )
}

export default App