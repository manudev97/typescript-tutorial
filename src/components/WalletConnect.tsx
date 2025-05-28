import { useWeb3Modal } from '@web3modal/wagmi/react'
import { useAccount, useDisconnect } from 'wagmi'

export default function WalletConnect() {
    const { open } = useWeb3Modal()
    const { address, isConnected } = useAccount()
    const { disconnect } = useDisconnect()

    if (isConnected) {
        return (
            <div>
                <p>Connected to {address}</p>
                <button onClick={() => disconnect()}>Disconnect</button>
            </div>
        )
    }

    return <button onClick={() => open()}>Connect Wallet</button>
}