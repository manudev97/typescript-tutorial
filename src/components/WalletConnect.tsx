import { useWeb3Modal } from '@web3modal/wagmi/react'
import { useAccount, useDisconnect, useNetwork, useSwitchNetwork } from 'wagmi'
import { storyAeneid } from '../config/wagmi'

export default function WalletConnect() {
    const { open } = useWeb3Modal()
    const { address, isConnected } = useAccount()
    const { disconnect } = useDisconnect()
    const { chain } = useNetwork()
    const { switchNetwork } = useSwitchNetwork()

    const handleConnect = async () => {
        await open()
        if (chain?.id !== storyAeneid.id) {
            switchNetwork?.(storyAeneid.id)
        }
    }

    if (isConnected) {
        return (
            <div className="flex items-center gap-4">
                <span className="text-sm text-gray-600">
                    {chain?.id !== storyAeneid.id ? (
                        <button 
                            onClick={() => switchNetwork?.(storyAeneid.id)}
                            className="text-red-500 hover:text-red-700"
                        >
                            Switch to Story Aeneid
                        </button>
                    ) : (
                        <span className="text-green-500">Connected to Story Aeneid</span>
                    )}
                </span>
                <p className="text-sm">{address?.slice(0, 6)}...{address?.slice(-4)}</p>
                <button 
                    onClick={() => disconnect()}
                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                >
                    Disconnect
                </button>
            </div>
        )
    }

    return (
        <button 
            onClick={handleConnect}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
            Connect Wallet
        </button>
    )
}