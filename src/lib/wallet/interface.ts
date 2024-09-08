interface WalletConnector {
  connect(): Promise<void>

  disconnect(): Promise<void>

  getProvider: () => Promise<EIP6963.Provider>
}

export default WalletConnector
