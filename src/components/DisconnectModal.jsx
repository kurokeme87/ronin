import React from 'react'

const DisconnectModal = () => {
  return (
    <div className="wlg-dialog-root wlg-theme-provider Dialog-module_root__1iNlk">
      <div className="wlg-dialog-mask"></div>
      <div tabIndex="-1" className="wlg-dialog-wrap">
        <div role="dialog" aria-modal="true" className="wlg-dialog">
          <div tabIndex="0" aria-hidden="true" style={{ width: 0, height: 0, overflow: 'hidden', outline: 'none' }}></div>
          <div className="wlg-dialog-content">
            <div className="wlg-dialog-body">
              <div className="WidgetHeightAnim-module_container__1piHh" style={{ height: '100%' }}>
                {/* Modal content */}
                <div className="Motion-module_container__WrBbH Motion-module_scale__T26xC">
                  <div className="Header-module_container__xvpQ-">
                    <div className="Header-module_action__dBqMi"></div>
                    <div className="Typo-module_title__f63Na">Connected</div>
                    <div className="Header-module_action__dBqMi">
                      <button>
                        <svg viewBox="0 0 20 20" width="20" height="20">
                          <path fill="currentColor" fillRule="evenodd" d="M2.28 1.22a.75.75 0 0 0-1.06 1.06l7.47 7.47-7.47 7.47a.75.75 0 1 0 1.06 1.06l7.47-7.47 7.47 7.47a.75.75 0 1 0 1.06-1.06l-7.47-7.47 7.47-7.47a.75.75 0 0 0-1.06-1.06L9.75 8.69 2.28 1.22Z" clipRule="evenodd"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="Body-module_container__NGN-i">
                    <div className="Body-module_mainImg__22fLB">
                      {/* Avatar */}
                    </div>
                    <div className="Typo-module_subtitle__-Rod3 Connected-module_account__jOYa7">
                      0x00d5...8acf
                      <button className="CopyClipboard-module_root__RxV4n">
                        <svg className="CopyClipboard-module_icon__gvmoM" viewBox="0 0 20 20" width="20" height="20">
                          <path fill="currentColor" fillRule="evenodd" d="M3 2h9a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1Zm12 12a1 1 0 0 1-1 1H8a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v6Z" clipRule="evenodd"></path>
                        </svg>
                      </button>
                    </div>
                    <div className="Typo-module_body__bPJbz Typo-module_dim__5WLMx">0.0 RON</div>
                  </div>
                  <div className="Footer-module_container__xxuxP">
                    <button className="Button-module_button__MFT6E Button-module_secondary__qG9-2 Button-module_lg__X5Ary Button-module_full__odxDE">Disconnect</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div tabIndex="0" aria-hidden="true" style={{ width: 0, height: 0, overflow: 'hidden', outline: 'none' }}></div>
        </div>
      </div>
    </div>
  )
}

export default DisconnectModal
