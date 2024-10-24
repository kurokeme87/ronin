// import { useState } from "react";

// import { WalletSDK } from "@roninnetwork/wallet-sdk";
import { useConnect } from "wagmi";
const BridgeModal = ({ setIsModalOpen, isModalOpen, setCurrentConnector }) => {
  // const [userAddress, setUserAddress] = useState();


  const { connectors } = useConnect();
  // const { chains, switchChain } = useSwitchChain();
  const validConnectors = connectors.filter((connector) => {
    return typeof connector.icon === "string";
  });
  // const metamaskConnector = validConnectors.find(
  //   (connector) => connector.name === "MetaMask"
  // );

  // function checkRoninInstalled() {
  //   if ("ronin" in window) {
  //     return true;
  //   }

  //   window.open("https://wallet.roninchain.com", "_blank");
  //   return false;
  // }
  // console.log(chains, validConnectors, metamaskConnector);

  // async function connectRoninWallet(props) {
  //   const sdk = new WalletSDK();
  //   await sdk.connectInjected();

  //   const isInstalled = checkRoninInstalled();
  //   if (isInstalled === false) {
  //     return;
  //   }

  //   const accounts = await sdk.requestAccounts();
  //   if (accounts) {
  //     setUserAddress(accounts);
  //   }
  // }
  return (
    <div
      onClick={() => {
        setIsModalOpen(false);
      }}
      className="wlg-dialog-root wlg-theme-provider Dialog-module_root__1iNlk"
    >
      <div className="wlg-dialog-mask"></div>
      <div tabIndex="-1" className="wlg-dialog-wrap mb-32">
        <div role="dialog" aria-modal="true" className="wlg-dialog">
          <div
            tabIndex="0"
            aria-hidden="true"
            style={{ width: 0, height: 0, overflow: "hidden", outline: "none" }}
          ></div>
          <div className="wlg-dialog-content ">
            <div className="wlg-dialog-body ">
              <div
                className="WidgetHeightAnim-module_container__1piHh"
                style={{ height: "100%" }}
              >
                <div className="Motion-module_container__WrBbH Motion-module_scale__T26xC">
                  <div className="Header-module_container__xvpQ-">
                    <div className="Header-module_action__dBqMi"></div>
                    <div className="Typo-module_title__f63Na">
                      Connect Wallet
                    </div>
                    <div className="Header-module_action__dBqMi">
                      <button onClick={() => setIsModalOpen(false)}>
                        <svg viewBox="0 0 20 20" width="20" height="20">
                          <path
                            fill="currentColor"
                            fillRule="evenodd"
                            d="M2.28 1.22a.75.75 0 0 0-1.06 1.06l7.47 7.47-7.47 7.47a.75.75 0 1 0 1.06 1.06l7.47-7.47 7.47 7.47a.75.75 0 1 0 1.06-1.06l-7.47-7.47 7.47-7.47a.75.75 0 0 0-1.06-1.06L9.75 8.69 2.28 1.22Z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="Body-module_container__NGN-i Wallets-module_container__-8YJe">
                    {/* <button
                      onClick={() => { metamaskConnector.connect(); console.log('clicked') }}
                      className="WalletItem-module_wallet__KTP1j"
                    >
                      <div className="WalletItem-module_logo__94Xqd">
                        <img src={metamask} alt="Metamask" />
                      </div>
                      <div className="WalletItem-module_label__ZpxK4">
                        <div>Metamask</div>
                      </div>
                      <div className="WalletItem-module_badge__-b6AU">
                        Recent
                      </div>
                    </button> */}
                    {validConnectors.map((connector, i) => {
                      return (
                        <button onClick={() => {
                          connector.connect()
                          setCurrentConnector(connector)
                          setIsModalOpen(false)
                        }} key={i} className="WalletItem-module_wallet__KTP1j">
                          <div className="WalletItem-module_logo__94Xqd">
                            <img src={connector.icon} />
                          </div>
                          <div className="WalletItem-module_label__ZpxK4">
                            <div>{connector.name}</div>
                          </div>
                        </button>
                      )
                    })}
                  </div>
                </div>
                {/* Other Motion-module_container__WrBbH components */}
              </div>
            </div>
          </div>
          <div
            tabIndex="0"
            aria-hidden="true"
            style={{ width: 0, height: 0, overflow: "hidden", outline: "none" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default BridgeModal;
