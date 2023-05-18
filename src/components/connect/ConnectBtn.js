import React from 'react'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import styles from './ConnectBtn.module.css'

const ConnectBtn = () => {
  return (
    <div>
      <ConnectButton.Custom>
        {({
          account,
          chain,
          openAccountModal,
          openChainModal,
          openConnectModal,
          authenticationStatus,
          mounted,
        }) => {
          // Note: If your app doesn't use authentication, you
          // can remove all 'authenticationStatus' checks
          const ready = mounted && authenticationStatus !== 'loading'
          const connected =
            ready &&
            account &&
            chain &&
            (!authenticationStatus || authenticationStatus === 'authenticated')

          return (
            <div
              {...(!ready && {
                'aria-hidden': true,
                style: {
                  opacity: 0,
                  pointerEvents: 'none',
                  userSelect: 'none',
                },
              })}
            >
              {(() => {
                if (!connected) {
                  return (
                    <button
                      onClick={openConnectModal}
                      type='button'
                      className={styles.parallelogram}
                    >
                      Connect Wallet
                    </button>
                  )
                }

                if (chain.unsupported) {
                  return (
                    <button
                      onClick={openChainModal}
                      type='button'
                      className={styles.parallelogram}
                    >
                      Wrong network
                    </button>
                  )
                }
              })()}
            </div>
          )
        }}
      </ConnectButton.Custom>
    </div>
  )
}

export default ConnectBtn
