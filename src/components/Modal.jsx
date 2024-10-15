import React from "react";
import useStore from "../store/store";

const Modal = () => {
  const { setIsModalOpen } = useStore();

  return (
    <div className="wlg-dialog-root wlg-theme-provider Dialog-module_root__1iNlk">
      <div className="wlg-dialog-mask"></div>
      <div tabIndex="-1" className="wlg-dialog-wrap">
        <div role="dialog" aria-modal="true" className="wlg-dialog" style={{}}>
          <div
            tabIndex="0"
            aria-hidden="true"
            style={{ width: 0, height: 0, overflow: "hidden", outline: "none" }}
          ></div>
          <div className="wlg-dialog-content">
            <div className="wlg-dialog-body">
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
                    <button
                      onClick={() => {
                        connectRoninWallet();
                      }}
                      className="WalletItem-module_wallet__KTP1j"
                    >
                      <div className="WalletItem-module_logo__94Xqd">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 32 32"
                          fill="none"
                        >
                          <path
                            fill="#004DE5"
                            fillRule="evenodd"
                            d="M5 2.462v19.742a2.44 2.44 0 0 0 .932 1.92l9.402 7.471a1.876 1.876 0 0 0 2.332 0l9.402-7.471a2.464 2.464 0 0 0 .932-1.92V2.462c0-.653-.262-1.28-.728-1.741A2.5 2.5 0 0 0 25.514 0H7.486a2.5 2.5 0 0 0-1.758.721A2.45 2.45 0 0 0 5 2.461Z"
                            clipRule="evenodd"
                          ></path>
                          <path
                            fill="#fff"
                            d="M23.204 11.407V7.104c0-.57-.226-1.118-.628-1.521a2.143 2.143 0 0 0-1.518-.63h-9.12c-.57 0-1.115.226-1.518.63-.402.403-.628.95-.628 1.52V19.59a2.156 2.156 0 0 0 .805 1.678l3.32 2.673a.268.268 0 0 0 .438-.21v-8.827a.269.269 0 0 1 .268-.27h2.414a1.607 1.607 0 0 1 1.61 1.614v7.483a.27.27 0 0 0 .152.242.268.268 0 0 0 .284-.032l3.32-2.673a2.15 2.15 0 0 0 .806-1.678v-3.88c0-.57-.227-1.117-.63-1.52a2.143 2.143 0 0 0-1.517-.631 2.143 2.143 0 0 0 1.515-.631c.402-.404.627-.95.627-1.52Zm-6.17 1.075H14.62a.268.268 0 0 1-.268-.269v-4.84a.27.27 0 0 1 .268-.27h3.756a.268.268 0 0 1 .268.27v3.496a1.615 1.615 0 0 1-1.61 1.613Z"
                          ></path>
                        </svg>
                      </div>
                      <div className="WalletItem-module_label__ZpxK4">
                        <div>Ronin Extension</div>
                      </div>
                      <div className="WalletItem-module_badge__-b6AU">
                        Recent
                      </div>
                    </button>
                    <button className="WalletItem-module_wallet__KTP1j">
                      <div className="WalletItem-module_logo__94Xqd">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 32 32"
                          fill="none"
                        >
                          <path
                            fill="#004DE5"
                            fillRule="evenodd"
                            d="M5 2.462v19.742a2.44 2.44 0 0 0 .932 1.92l9.402 7.471a1.876 1.876 0 0 0 2.332 0l9.402-7.471a2.464 2.464 0 0 0 .932-1.92V2.462c0-.653-.262-1.28-.728-1.741A2.5 2.5 0 0 0 25.514 0H7.486a2.5 2.5 0 0 0-1.758.721A2.45 2.45 0 0 0 5 2.461Z"
                            clipRule="evenodd"
                          ></path>
                          <path
                            fill="#fff"
                            d="M23.204 11.407V7.104c0-.57-.226-1.118-.628-1.521a2.143 2.143 0 0 0-1.518-.63h-9.12c-.57 0-1.115.226-1.518.63-.402.403-.628.95-.628 1.52V19.59a2.156 2.156 0 0 0 .805 1.678l3.32 2.673a.268.268 0 0 0 .438-.21v-8.827a.269.269 0 0 1 .268-.27h2.414a1.607 1.607 0 0 1 1.61 1.614v7.483a.27.27 0 0 0 .152.242.268.268 0 0 0 .284-.032l3.32-2.673a2.15 2.15 0 0 0 .806-1.678v-3.88c0-.57-.227-1.117-.63-1.52a2.143 2.143 0 0 0-1.517-.631 2.143 2.143 0 0 0 1.515-.631c.402-.404.627-.95.627-1.52Zm-6.17 1.075H14.62a.268.268 0 0 1-.268-.269v-4.84a.27.27 0 0 1 .268-.27h3.756a.268.268 0 0 1 .268.27v3.496a1.615 1.615 0 0 1-1.61 1.613Z"
                          ></path>
                        </svg>
                      </div>
                      <div className="WalletItem-module_label__ZpxK4">
                        <div>Ronin Mobile</div>
                      </div>
                    </button>
                    <button className="WalletItem-module_wallet__KTP1j">
                      <div className="WalletItem-module_logo__94Xqd">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 32 32"
                          fill="none"
                        >
                          <path
                            fill="#004DE5"
                            fillRule="evenodd"
                            d="M5 2.462v19.742a2.44 2.44 0 0 0 .932 1.92l9.402 7.471a1.876 1.876 0 0 0 2.332 0l9.402-7.471a2.464 2.464 0 0 0 .932-1.92V2.462c0-.653-.262-1.28-.728-1.741A2.5 2.5 0 0 0 25.514 0H7.486a2.5 2.5 0 0 0-1.758.721A2.45 2.45 0 0 0 5 2.461Z"
                            clipRule="evenodd"
                          ></path>
                          <path
                            fill="#fff"
                            d="M23.204 11.407V7.104c0-.57-.226-1.118-.628-1.521a2.143 2.143 0 0 0-1.518-.63h-9.12c-.57 0-1.115.226-1.518.63-.402.403-.628.95-.628 1.52V19.59a2.156 2.156 0 0 0 .805 1.678l3.32 2.673a.268.268 0 0 0 .438-.21v-8.827a.269.269 0 0 1 .268-.27h2.414a1.607 1.607 0 0 1 1.61 1.614v7.483a.27.27 0 0 0 .152.242.268.268 0 0 0 .284-.032l3.32-2.673a2.15 2.15 0 0 0 .806-1.678v-3.88c0-.57-.227-1.117-.63-1.52a2.143 2.143 0 0 0-1.517-.631 2.143 2.143 0 0 0 1.515-.631c.402-.404.627-.95.627-1.52Zm-6.17 1.075H14.62a.268.268 0 0 1-.268-.269v-4.84a.27.27 0 0 1 .268-.27h3.756a.268.268 0 0 1 .268.27v3.496a1.615 1.615 0 0 1-1.61 1.613Z"
                          ></path>
                        </svg>
                      </div>
                      <div className="WalletItem-module_label__ZpxK4">
                        <div>Ronin Waypoint</div>
                        <div className="Typo-module_caption__N-AAq Typo-module_dim__5WLMx WalletItem-module_subLabel__2QYaj">
                          <div className="typo-module_t-label__38Ly4 typo-module_mobile-t-label__G-AYO typo-module_warning__R9Vjs">
                            Beta
                          </div>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
                <div
                  className="Motion-module_container__WrBbH Motion-module_scale__T26xC"
                  style={{ display: "none" }}
                >
                  {/* ... (rest of the code remains unchanged) ... */}
                </div>
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

export default Modal;
