import React from "react";
import Header from "../components/Header";
const Accounts = () => {
  return (
    <div className="mx-auto w-full bg-blue-500 max-w-[1180px]">
      <Header />
      <main className="pb-24 pt-16 md:pb-48 md:pt-24">
        <div className="typo-module_t-display-xl__twhe3 typo-module_mobile-t-display-lg__6JAaA typo-module_neutral__9orA9">
          Accounts
        </div>
        <div className="my-40">
          <div className="mb-8">
            <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9">
              Total 27,254,148 accounts (Show 10,000 latest records)
            </div>
          </div>
          <div className="ronin-table hoverable-row ronin-table-ping-right ronin-table-scroll-horizontal">
            <div className="ronin-table-container">
              <div className="ronin-table-content" style={{ overflow: "auto hidden" }}>
                <table style={{ width: "auto", minWidth: "100%", tableLayout: "auto" }}>
                  <colgroup></colgroup>
                  <thead className="ronin-table-thead">
                    <tr>
                      <th className="ronin-table-cell" scope="col" style={{ textAlign: "left" }}>address</th>
                      <th className="ronin-table-cell" scope="col" style={{ textAlign: "right" }}>Ron Amount</th>
                      <th className="ronin-table-cell" scope="col" style={{ textAlign: "right" }}>est. net worth</th>
                      <th className="ronin-table-cell" scope="col" style={{ textAlign: "right" }}>collectible</th>
                      <th className="ronin-table-cell" scope="col" style={{ textAlign: "right" }}>txn</th>
                    </tr>
                  </thead>
                  <tbody className="ronin-table-tbody">
                    <tr aria-hidden="true" className="ronin-table-measure-row" style={{ height: "0px", fontSize: "0px" }}>
                      <td style={{ padding: "0px", border: "0px", height: "0px" }}>
                        <div style={{ height: "0px", overflow: "hidden" }}>&nbsp;</div>
                      </td>
                      <td style={{ padding: "0px", border: "0px", height: "0px" }}>
                        <div style={{ height: "0px", overflow: "hidden" }}>&nbsp;</div>
                      </td>
                      <td style={{ padding: "0px", border: "0px", height: "0px" }}>
                        <div style={{ height: "0px", overflow: "hidden" }}>&nbsp;</div>
                      </td>
                      <td style={{ padding: "0px", border: "0px", height: "0px" }}>
                        <div style={{ height: "0px", overflow: "hidden" }}>&nbsp;</div>
                      </td>
                      <td style={{ padding: "0px", border: "0px", height: "0px" }}>
                        <div style={{ height: "0px", overflow: "hidden" }}>&nbsp;</div>
                      </td>
                    </tr>
                    <a className="ronin-table-row ronin-table-row-level-0 table-row cursor-pointer" href="/address/0x41d8cf42236ae15cc7b0c0df619a95822d7ad423" style={{ verticalAlign: "inherit" }}>
                      <td className="ronin-table-cell" style={{ textAlign: "left" }}>
                        <div className="flex items-center gap-12 truncate max-w-full">
                          <div className="image-wrapper-module_container__5gv1w image-wrapper-module_sm__r69hP shrink-0">
                            <svg viewBox="0 0 20 20" width="24" height="24">
                              <path fill="currentColor" fillRule="evenodd" d="M5 2h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Zm2 4.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5H7ZM6.25 10A.75.75 0 0 1 7 9.25h6a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75ZM7 12.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5H7Z" clipRule="evenodd"></path>
                            </svg>
                          </div>
                          <div className="flex items-center">
                            <a className="typo-module_t-body-md-strong__B-Sd1 typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9 link-module_link__Nwimt link-module_underline-mode-onlyWhenHover__alkql link-module_monochrome__yqKNC block truncate max-w-full" data-address="0x41d8cf42236ae15cc7b0c0df619a95822d7ad423" href="/address/0x41d8cf42236ae15cc7b0c0df619a95822d7ad423">Sky Mavis</a>
                          </div>
                        </div>
                      </td>
                      <td className="ronin-table-cell" style={{ textAlign: "right" }}>
                        <div className="flex items-center gap-8 justify-end">
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">251,162,903.49</div>
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh">RON</div>
                        </div>
                      </td>
                      <td className="ronin-table-cell" style={{ textAlign: "right" }}>
                        <div className="flex items-center gap-8 justify-end">
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">395,174,084.54</div>
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh">USD</div>
                        </div>
                      </td>
                      <td className="ronin-table-cell" style={{ textAlign: "right" }}>
                        <div className="flex items-center gap-8 justify-end">
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">0</div>
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh">Assets</div>
                        </div>
                      </td>
                      <td className="ronin-table-cell" style={{ textAlign: "right" }}>
                        <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9">34</div>
                      </td>
                    </a>
                    <a className="ronin-table-row ronin-table-row-level-0 table-row cursor-pointer" href="/address/0x545edb750eb8769c868429be9586f5857a768758" style={{ verticalAlign: "inherit" }}>
                      <td className="ronin-table-cell" style={{ textAlign: "left" }}>
                        <div className="flex items-center gap-12 truncate max-w-full">
                          <div className="image-wrapper-module_container__5gv1w image-wrapper-module_sm__r69hP shrink-0">
                            <svg viewBox="0 0 20 20" width="24" height="24">
                              <path fill="currentColor" fillRule="evenodd" d="M5 2h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Zm2 4.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5H7ZM6.25 10A.75.75 0 0 1 7 9.25h6a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75ZM7 12.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5H7Z" clipRule="evenodd"></path>
                            </svg>
                          </div>
                          <div className="flex items-center">
                            <a className="typo-module_t-body-md-strong__B-Sd1 typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9 link-module_link__Nwimt link-module_underline-mode-onlyWhenHover__alkql link-module_monochrome__yqKNC block truncate max-w-full" data-address="0x545edb750eb8769c868429be9586f5857a768758" href="/address/0x545edb750eb8769c868429be9586f5857a768758">Ronin Staking</a>
                          </div>
                        </div>
                      </td>
                      <td className="ronin-table-cell" style={{ textAlign: "right" }}>
                        <div className="flex items-center gap-8 justify-end">
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">231,294,380.04</div>
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh">RON</div>
                        </div>
                      </td>
                      <td className="ronin-table-cell" style={{ textAlign: "right" }}>
                        <div className="flex items-center gap-8 justify-end">
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">363,913,396.57</div>
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh">USD</div>
                        </div>
                      </td>
                      <td className="ronin-table-cell" style={{ textAlign: "right" }}>
                        <div className="flex items-center gap-8 justify-end">
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">0</div>
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh">Assets</div>
                        </div>
                      </td>
                      <td className="ronin-table-cell" style={{ textAlign: "right" }}>
                        <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9">2,827,314</div>
                      </td>
                    </a>
                    <a className="ronin-table-row ronin-table-row-level-0 table-row cursor-pointer" href="/address/0xd217ad3332335e5dca5ca566d35177f25d92059c" style={{ verticalAlign: "inherit" }}>
                      <td className="ronin-table-cell" style={{ textAlign: "left" }}>
                        <div className="flex items-center gap-12 truncate max-w-full">
                          <div className="image-wrapper-module_container__5gv1w image-wrapper-module_sm__r69hP shrink-0">
                            <svg viewBox="0 0 20 20" width="24" height="24">
                              <path fill="currentColor" fillRule="evenodd" d="M5 2h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Zm2 4.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5H7ZM6.25 10A.75.75 0 0 1 7 9.25h6a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75ZM7 12.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5H7Z" clipRule="evenodd"></path>
                            </svg>
                          </div>
                          <div className="flex items-center">
                            <a className="typo-module_t-body-md-strong__B-Sd1 typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9 link-module_link__Nwimt link-module_underline-mode-onlyWhenHover__alkql link-module_monochrome__yqKNC block truncate max-w-full" data-address="0xd217ad3332335e5dca5ca566d35177f25d92059c" href="/address/0xd217ad3332335e5dca5ca566d35177f25d92059c">Rewards</a>
                          </div>
                        </div>
                      </td>
                      <td className="ronin-table-cell" style={{ textAlign: "right" }}>
                        <div className="flex items-center gap-8 justify-end">
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">138,412,271.05</div>
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh">RON</div>
                        </div>
                      </td>
                      <td className="ronin-table-cell" style={{ textAlign: "right" }}>
                        <div className="flex items-center gap-8 justify-end">
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">217,774,765.87</div>
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh">USD</div>
                        </div>
                      </td>
                      <td className="ronin-table-cell" style={{ textAlign: "right" }}>
                        <div className="flex items-center gap-8 justify-end">
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">0</div>
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh">Assets</div>
                        </div>
                      </td>
                      <td className="ronin-table-cell" style={{ textAlign: "right" }}>
                        <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9">14</div>
                      </td>
                    </a>
                    <a className="ronin-table-row ronin-table-row-level-0 table-row cursor-pointer" href="/address/0x1e7d74b6279e66f3dc6c0e50e69fb8da13432ba5" style={{ verticalAlign: "inherit" }}>
                      <td className="ronin-table-cell" style={{ textAlign: "left" }}>
                        <div className="flex items-center gap-12 truncate max-w-full">
                          <div className="image-wrapper-module_container__5gv1w image-wrapper-module_sm__r69hP shrink-0">
                            <svg viewBox="0 0 20 20" width="24" height="24">
                              <path fill="currentColor" fillRule="evenodd" d="M5 2h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Zm2 4.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5H7ZM6.25 10A.75.75 0 0 1 7 9.25h6a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75ZM7 12.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5H7Z" clipRule="evenodd"></path>
                            </svg>
                          </div>
                          <div className="flex items-center">
                            <a className="typo-module_t-body-md-strong__B-Sd1 typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9 link-module_link__Nwimt link-module_underline-mode-onlyWhenHover__alkql link-module_monochrome__yqKNC block truncate max-w-full" data-address="0x1e7d74b6279e66f3dc6c0e50e69fb8da13432ba5" href="/address/0x1e7d74b6279e66f3dc6c0e50e69fb8da13432ba5">Ecosystem Fund</a>
                          </div>
                        </div>
                      </td>
                      <td className="ronin-table-cell" style={{ textAlign: "right" }}>
                        <div className="flex items-center gap-8 justify-end">
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">137,054,576.55</div>
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh">RON</div>
                        </div>
                      </td>
                      <td className="ronin-table-cell" style={{ textAlign: "right" }}>
                        <div className="flex items-center gap-8 justify-end">
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">215,638,599.76</div>
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh">USD</div>
                        </div>
                      </td>
                      <td className="ronin-table-cell" style={{ textAlign: "right" }}>
                        <div className="flex items-center gap-8 justify-end">
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">0</div>
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh">Assets</div>
                        </div>
                      </td>
                      <td className="ronin-table-cell" style={{ textAlign: "right" }}>
                        <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9">20</div>
                      </td>
                    </a>
                    <a className="ronin-table-row ronin-table-row-level-0 table-row cursor-pointer" href="/address/0xf603d9a18a5aaca2d11cb43cbb2b6abc4a5b3e61" style={{ verticalAlign: "inherit" }}>
                      <td className="ronin-table-cell" style={{ textAlign: "left" }}>
                        <div className="flex items-center gap-12 truncate max-w-full">
                          <div className="image-wrapper-module_container__5gv1w image-wrapper-module_sm__r69hP shrink-0">
                            <svg viewBox="0 0 20 20" width="24" height="24">
                              <path fill="currentColor" fillRule="evenodd" d="M5 2h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Zm2 4.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5H7ZM6.25 10A.75.75 0 0 1 7 9.25h6a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75ZM7 12.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5H7Z" clipRule="evenodd"></path>
                            </svg>
                          </div>
                          <div className="flex items-center">
                            <a className="typo-module_t-body-md-strong__B-Sd1 typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9 link-module_link__Nwimt link-module_underline-mode-onlyWhenHover__alkql link-module_monochrome__yqKNC block truncate max-w-full" data-address="0xf603d9a18a5aaca2d11cb43cbb2b6abc4a5b3e61" href="/address/0xf603d9a18a5aaca2d11cb43cbb2b6abc4a5b3e61">Community Incentives</a>
                          </div>
                        </div>
                      </td>
                      <td className="ronin-table-cell" style={{ textAlign: "right" }}>
                        <div className="flex items-center gap-8 justify-end">
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">101,497,264.05</div>
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh">RON</div>
                        </div>
                      </td>
                      <td className="ronin-table-cell" style={{ textAlign: "right" }}>
                        <div className="flex items-center gap-8 justify-end">
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">159,693,521.01</div>
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh">USD</div>
                        </div>
                      </td>
                      <td className="ronin-table-cell" style={{ textAlign: "right" }}>
                        <div className="flex items-center gap-8 justify-end">
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">0</div>
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh">Assets</div>
                        </div>
                      </td>
                      <td className="ronin-table-cell" style={{ textAlign: "right" }}>
                        <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9">15</div>
                      </td>
                    </a>
                    <a className="ronin-table-row ronin-table-row-level-0 table-row cursor-pointer" href="/address/0xe514d9deb7966c8be0ca922de8a064264ea6bcd4" style={{ verticalAlign: "inherit" }}>
                      <td className="ronin-table-cell" style={{ textAlign: "left" }}>
                        <div className="flex items-center gap-12 truncate max-w-full">
                          <div className="image-wrapper-module_container__5gv1w image-wrapper-module_sm__r69hP shrink-0">
                            <img src="https://cdn.skymavis.com/ronin/2020/erc20/0xe514d9deb7966c8be0ca922de8a064264ea6bcd4/logo.png" className="rounded-[6px]" width="100%" height="100%" alt="address-icon" />
                          </div>
                          <div className="flex items-center">
                            <a className="typo-module_t-body-md-strong__B-Sd1 typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9 link-module_link__Nwimt link-module_underline-mode-onlyWhenHover__alkql link-module_monochrome__yqKNC block truncate max-w-full" data-address="0xe514d9deb7966c8be0ca922de8a064264ea6bcd4" href="/address/0xe514d9deb7966c8be0ca922de8a064264ea6bcd4">Wrapped RON</a>
                          </div>
                        </div>
                      </td>
                      <td className="ronin-table-cell" style={{ textAlign: "right" }}>
                        <div className="flex items-center gap-8 justify-end">
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">41,194,684.66</div>
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh">RON</div>
                        </div>
                      </td>
                      <td className="ronin-table-cell" style={{ textAlign: "right" }}>
                        <div className="flex items-center gap-8 justify-end">
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">64,817,899.87</div>
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh">USD</div>
                        </div>
                      </td>
                      <td className="ronin-table-cell" style={{ textAlign: "right" }}>
                        <div className="flex items-center gap-8 justify-end">
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">0</div>
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh">Assets</div>
                        </div>
                      </td>
                      <td className="ronin-table-cell" style={{ textAlign: "right" }}>
                        <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9">394,822</div>
                      </td>
                    </a>
                    <a className="ronin-table-row ronin-table-row-level-0 table-row cursor-pointer" href="/address/0x030e37ddd7df1b43db172b23916d523f1599c6cb" style={{ verticalAlign: "inherit" }}>
                      <td className="ronin-table-cell" style={{ textAlign: "left" }}>
                        <div className="flex items-center gap-12 truncate max-w-full">
                          <div className="avatar-module_size-s__pbWkl shrink-0">
                            <svg viewBox="0 0 80 80" fill="none" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                              <mask id=":r10:" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80">
                                <rect width="80" height="80" rx="160" fill="#FFFFFF"></rect>
                              </mask>
                              <g mask="url(#:r10:)">
                                <rect width="80" height="80" fill="#FFC34D"></rect>
                                <path filter="url(#prefix__filter0_f)" d="M32.414 59.35L50.376 70.5H72.5v-71H33.728L26.5 13.381l19.057 27.08L32.414 59.35z" fill="#8833FF" transform="translate(-4 -4) rotate(-44 40 40) scale(1.4)"></path>
                                <path filter="url(#prefix__filter0_f)" d="M22.216 24L0 46.75l14.108 38.129L78 86l-3.081-59.276-22.378 4.005 12.972 20.186-23.35 27.395L22.215 24z" fill="#2B4DFF" transform="translate(-2 -2) rotate(-66 40 40) scale(1.4)" style={{ mixBlendMode: "overlay" }}></path>
                              </g>
                              <defs>
                                <filter id="prefix__filter0_f" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                  <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                                  <feGaussianBlur stdDeviation="7" result="effect1_foregroundBlur"></feGaussianBlur>
                                </filter>
                              </defs>
                            </svg>
                          </div>
                          <div className="flex items-center">
                            <a className="typo-module_t-body-md-strong__B-Sd1 typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9 link-module_link__Nwimt link-module_underline-mode-onlyWhenHover__alkql link-module_monochrome__yqKNC block truncate max-w-full" data-address="0x030e37ddd7df1b43db172b23916d523f1599c6cb" href="/address/0x030e37ddd7df1b43db172b23916d523f1599c6cb">0x030e…c6cb</a>
                          </div>
                        </div>
                      </td>
                      <td className="ronin-table-cell" style={{ textAlign: "right" }}>
                        <div className="flex items-center gap-8 justify-end">
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">15,454,457.82</div>
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh">RON</div>
                        </div>
                      </td>
                      <td className="ronin-table-cell" style={{ textAlign: "right" }}>
                        <div className="flex items-center gap-8 justify-end">
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">141,384,367.32</div>
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh">USD</div>
                        </div>
                      </td>
                      <td className="ronin-table-cell" style={{ textAlign: "right" }}>
                        <div className="flex items-center gap-8 justify-end">
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">1</div>
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh">Assets</div>
                        </div>
                      </td>
                      <td className="ronin-table-cell" style={{ textAlign: "right" }}>
                        <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9">225</div>
                      </td>
                    </a>
                    <a className="ronin-table-row ronin-table-row-level-0 table-row cursor-pointer" href="/address/0xc768423a2ae2b5024cb58f3d6449a8f5db6d8816" style={{ verticalAlign: "inherit" }}>
                      <td className="ronin-table-cell" style={{ textAlign: "left" }}>
                        <div className="flex items-center gap-12 truncate max-w-full">
                          <div className="image-wrapper-module_container__5gv1w image-wrapper-module_sm__r69hP shrink-0">
                            <svg viewBox="0 0 20 20" width="24" height="24">
                              <path fill="currentColor" fillRule="evenodd" d="M5 2h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Zm2 4.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5H7ZM6.25 10A.75.75 0 0 1 7 9.25h6a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75ZM7 12.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5H7Z" clipRule="evenodd"></path>
                            </svg>
                          </div>
                          <div className="flex items-center">
                            <a className="typo-module_t-body-md-strong__B-Sd1 typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9 link-module_link__Nwimt link-module_underline-mode-onlyWhenHover__alkql link-module_monochrome__yqKNC block truncate max-w-full" data-address="0xc768423a2ae2b5024cb58f3d6449a8f5db6d8816" href="/address/0xc768423a2ae2b5024cb58f3d6449a8f5db6d8816">Ronin Staking Vesting</a>
                          </div>
                        </div>
                      </td>
                      <td className="ronin-table-cell" style={{ textAlign: "right" }}>
                        <div className="flex items-center gap-8 justify-end">
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">14,623,467.79</div>
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh">RON</div>
                        </div>
                      </td>
                      <td className="ronin-table-cell" style={{ textAlign: "right" }}>
                        <div className="flex items-center gap-8 justify-end">
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">23,008,236.55</div>
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh">USD</div>
                        </div>
                      </td>
                      <td className="ronin-table-cell" style={{ textAlign: "right" }}>
                        <div className="flex items-center gap-8 justify-end">
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">0</div>
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh">Assets</div>
                        </div>
                      </td>
                      <td className="ronin-table-cell" style={{ textAlign: "right" }}>
                        <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9">4</div>
                      </td>
                    </a>
                    <a className="ronin-table-row ronin-table-row-level-0 table-row cursor-pointer" href="/address/0x2f6d6f8d58f73963439c6c7b103a63869a004c86" style={{ verticalAlign: "inherit" }}>
                      <td className="ronin-table-cell" style={{ textAlign: "left" }}>
                        <div className="flex items-center gap-12 truncate max-w-full">
                          <div className="avatar-module_size-s__pbWkl shrink-0">
                            <svg viewBox="0 0 80 80" fill="none" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                              <mask id=":r11:" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80">
                                <rect width="80" height="80" rx="160" fill="#FFFFFF"></rect>
                              </mask>
                              <g mask="url(#:r11:)">
                                <rect width="80" height="80" fill="#5CFFFF"></rect>
                                <path filter="url(#prefix__filter0_f)" d="M32.414 59.35L50.376 70.5H72.5v-71H33.728L26.5 13.381l19.057 27.08L32.414 59.35z" fill="#E3E8F2" transform="translate(-6 -6) rotate(-62 40 40) scale(1.3)"></path>
                                <path filter="url(#prefix__filter0_f)" d="M22.216 24L0 46.75l14.108 38.129L78 86l-3.081-59.276-22.378 4.005 12.972 20.186-23.35 27.395L22.215 24z" fill="#4BFFD4" transform="translate(1 1) rotate(273 40 40) scale(1.3)" style={{ mixBlendMode: "overlay" }}></path>
                              </g>
                              <defs>
                                <filter id="prefix__filter0_f" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                  <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                                  <feGaussianBlur stdDeviation="7" result="effect1_foregroundBlur"></feGaussianBlur>
                                </filter>
                              </defs>
                            </svg>
                          </div>
                          <div className="flex items-center">
                            <a className="typo-module_t-body-md-strong__B-Sd1 typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9 link-module_link__Nwimt link-module_underline-mode-onlyWhenHover__alkql link-module_monochrome__yqKNC block truncate max-w-full" data-address="0x2f6d6f8d58f73963439c6c7b103a63869a004c86" href="/address/0x2f6d6f8d58f73963439c6c7b103a63869a004c86">0x2f6d…4c86</a>
                          </div>
                        </div>
                      </td>
                      <td className="ronin-table-cell" style={{ textAlign: "right" }}>
                        <div className="flex items-center gap-8 justify-end">
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">7,265,618.54</div>
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh">RON</div>
                        </div>
                      </td>
                      <td className="ronin-table-cell" style={{ textAlign: "right" }}>
                        <div className="flex items-center gap-8 justify-end">
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">11,431,561.42</div>
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh">USD</div>
                        </div>
                      </td>
                      <td className="ronin-table-cell" style={{ textAlign: "right" }}>
                        <div className="flex items-center gap-8 justify-end">
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">0</div>
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh">Assets</div>
                        </div>
                      </td>
                      <td className="ronin-table-cell" style={{ textAlign: "right" }}>
                        <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9">8</div>
                      </td>
                    </a>
                    <a className="ronin-table-row ronin-table-row-level-0 table-row cursor-pointer" href="/address/0x8bd81a19420bad681b7bfc20e703ebd8e253782d" style={{ verticalAlign: "inherit" }}>
                      <td className="ronin-table-cell" style={{ textAlign: "left" }}>
                        <div className="flex items-center gap-12 truncate max-w-full">
                          <div className="image-wrapper-module_container__5gv1w image-wrapper-module_sm__r69hP shrink-0">
                            <svg viewBox="0 0 20 20" width="24" height="24">
                              <path fill="currentColor" fillRule="evenodd" d="M5 2h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Zm2 4.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5H7ZM6.25 10A.75.75 0 0 1 7 9.25h6a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75ZM7 12.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5H7Z" clipRule="evenodd"></path>
                            </svg>
                          </div>
                          <div className="flex items-center">
                            <a className="typo-module_t-body-md-strong__B-Sd1 typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9 link-module_link__Nwimt link-module_underline-mode-onlyWhenHover__alkql link-module_monochrome__yqKNC block truncate max-w-full" data-address="0x8bd81a19420bad681b7bfc20e703ebd8e253782d" href="/address/0x8bd81a19420bad681b7bfc20e703ebd8e253782d">Staking Manager</a>
                          </div>
                        </div>
                      </td>
                      <td className="ronin-table-cell" style={{ textAlign: "right" }}>
                        <div className="flex items-center gap-8 justify-end">
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">4,576,742.16</div>
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh">RON</div>
                        </div>
                      </td>
                      <td className="ronin-table-cell" style={{ textAlign: "right" }}>
                        <div className="flex items-center gap-8 justify-end">
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">15,110,682.72</div>
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh">USD</div>
                        </div>
                      </td>
                      <td className="ronin-table-cell" style={{ textAlign: "right" }}>
                        <div className="flex items-center gap-8 justify-end">
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">0</div>
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh">Assets</div>
                        </div>
                      </td>
                      <td className="ronin-table-cell" style={{ textAlign: "right" }}>
                        <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9">37</div>
                      </td>
                    </a>
                    <a className="ronin-table-row ronin-table-row-level-0 table-row cursor-pointer" href="/address/0xb32e9a84ae0b55b8ab715e4ac793a61b277bafa3" style={{ verticalAlign: "inherit" }}>
                      <td className="ronin-table-cell" style={{ textAlign: "left" }}>
                        <div className="flex items-center gap-12 truncate max-w-full">
                          <div className="avatar-module_size-s__pbWkl shrink-0">
                            <svg viewBox="0 0 80 80" fill="none" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                              <mask id=":r19:" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80">
                                <rect width="80" height="80" rx="160" fill="#FFFFFF"></rect>
                              </mask>
                              <g mask="url(#:r19:)">
                                <rect width="80" height="80" fill="#4BFFD4"></rect>
                                <path filter="url(#prefix__filter0_f)" d="M32.414 59.35L50.376 70.5H72.5v-71H33.728L26.5 13.381l19.057 27.08L32.414 59.35z" fill="#0035FF" transform="translate(-6 -6) rotate(-6 40 40) scale(1.3)"></path>
                                <path filter="url(#prefix__filter0_f)" d="M22.216 24L0 46.75l14.108 38.129L78 86l-3.081-59.276-22.378 4.005 12.972 20.186-23.35 27.395L22.215 24z" fill="#FFAEFC" transform="translate(-5 -5) rotate(-189 40 40) scale(1.3)" style={{ mixBlendMode: "overlay" }}></path>
                              </g>
                              <defs>
                                <filter id="prefix__filter0_f" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                  <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                                  <feGaussianBlur stdDeviation="7" result="effect1_foregroundBlur"></feGaussianBlur>
                                </filter>
                              </defs>
                            </svg>
                          </div>
                          <div className="flex items-center">
                            <a className="typo-module_t-body-md-strong__B-Sd1 typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9 link-module_link__Nwimt link-module_underline-mode-onlyWhenHover__alkql link-module_monochrome__yqKNC block truncate max-w-full" data-address="0xb32e9a84ae0b55b8ab715e4ac793a61b277bafa3" href="/address/0xb32e9a84ae0b55b8ab715e4ac793a61b277bafa3">Binance</a>
                          </div>
                        </div>
                      </td>
                      <td className="ronin-table-cell" style={{ textAlign: "right" }}>
                        <div className="flex items-center gap-8 justify-end">
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">1,086,477.61</div>
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh">RON</div>
                        </div>
                      </td>
                      <td className="ronin-table-cell" style={{ textAlign: "right" }}>
                        <div className="flex items-center gap-8 justify-end">
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">8,356,144.91</div>
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh">USD</div>
                        </div>
                      </td>
                      <td className="ronin-table-cell" style={{ textAlign: "right" }}>
                        <div className="flex items-center gap-8 justify-end">
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">1</div>
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh">Assets</div>
                        </div>
                      </td>
                      <td className="ronin-table-cell" style={{ textAlign: "right" }}>
                        <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9">3,472,802</div>
                      </td>
                    </a>
                    <a className="ronin-table-row ronin-table-row-level-0 table-row cursor-pointer" href="/address/0x2455152859d488a0a0954863ad240af71293526b" style={{ verticalAlign: "inherit" }}>
                      <td className="ronin-table-cell" style={{ textAlign: "left" }}>
                        <div className="flex items-center gap-12 truncate max-w-full">
                          <div className="avatar-module_size-s__pbWkl shrink-0">
                            <svg viewBox="0 0 80 80" fill="none" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                              <mask id=":r18:" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80">
                                <rect width="80" height="80" rx="160" fill="#FFFFFF"></rect>
                              </mask>
                              <g mask="url(#:r18:)">
                                <rect width="80" height="80" fill="#00D4FF"></rect>
                                <path filter="url(#prefix__filter0_f)" d="M32.414 59.35L50.376 70.5H72.5v-71H33.728L26.5 13.381l19.057 27.08L32.414 59.35z" fill="#FFC34D" transform="translate(4 -4) rotate(172 40 40) scale(1.4)"></path>
                                <path filter="url(#prefix__filter0_f)" d="M22.216 24L0 46.75l14.108 38.129L78 86l-3.081-59.276-22.378 4.005 12.972 20.186-23.35 27.395L22.215 24z" fill="#8833FF" transform="translate(6 -6) rotate(78 40 40) scale(1.4)" style={{ mixBlendMode: "overlay" }}></path>
                              </g>
                              <defs>
                                <filter id="prefix__filter0_f" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                  <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                                  <feGaussianBlur stdDeviation="7" result="effect1_foregroundBlur"></feGaussianBlur>
                                </filter>
                              </defs>
                            </svg>
                          </div>
                          <div className="flex items-center">
                            <a className="typo-module_t-body-md-strong__B-Sd1 typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9 link-module_link__Nwimt link-module_underline-mode-onlyWhenHover__alkql link-module_monochrome__yqKNC block truncate max-w-full" data-address="0x2455152859d488a0a0954863ad240af71293526b" href="/address/0x2455152859d488a0a0954863ad240af71293526b">0x2455…526b</a>
                          </div>
                        </div>
                      </td>
                      <td className="ronin-table-cell" style={{ textAlign: "right" }}>
                        <div className="flex items-center gap-8 justify-end">
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">1,163,519.61</div>
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh">RON</div>
                        </div>
                      </td>
                      <td className="ronin-table-cell" style={{ textAlign: "right" }}>
                        <div className="flex items-center gap-8 justify-end">
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">1,830,655.68</div>
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh">USD</div>
                        </div>
                      </td>
                      <td className="ronin-table-cell" style={{ textAlign: "right" }}>
                        <div className="flex items-center gap-8 justify-end">
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">0</div>
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh">Assets</div>
                        </div>
                      </td>
                      <td className="ronin-table-cell" style={{ textAlign: "right" }}>
                        <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9">61</div>
                      </td>
                    </a>
                    <a className="ronin-table-row ronin-table-row-level-0 table-row cursor-pointer" href="/address/0x5a52e96bacdabb82fd05763e25335261b270efcb" style={{ verticalAlign: "inherit" }}>
                      <td className="ronin-table-cell" style={{ textAlign: "left" }}>
                        <div className="flex items-center gap-12 truncate max-w-full">
                          <div className="avatar-module_size-s__pbWkl shrink-0">
                            <svg viewBox="0 0 80 80" fill="none" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                              <mask id=":r1a:" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80">
                                <rect width="80" height="80" rx="160" fill="#FFFFFF"></rect>
                              </mask>
                              <g mask="url(#:r1a:)">
                                <rect width="80" height="80" fill="#2B4DFF"></rect>
                                <path filter="url(#prefix__filter0_f)" d="M32.414 59.35L50.376 70.5H72.5v-71H33.728L26.5 13.381l19.057 27.08L32.414 59.35z" fill="#2065EE" transform="translate(-4 4) rotate(-228 40 40) scale(1.4)"></path>
                                <path filter="url(#prefix__filter0_f)" d="M22.216 24L0 46.75l14.108 38.129L78 86l-3.081-59.276-22.378 4.005 12.972 20.186-23.35 27.395L22.215 24z" fill="#00D4FF" transform="translate(-2 2) rotate(-162 40 40) scale(1.4)" style={{ mixBlendMode: "overlay" }}></path>
                              </g>
                              <defs>
                                <filter id="prefix__filter0_f" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                  <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                                  <feGaussianBlur stdDeviation="7" result="effect1_foregroundBlur"></feGaussianBlur>
                                </filter>
                              </defs>
                            </svg>
                          </div>
                          <div className="flex items-center">
                            <a className="typo-module_t-body-md-strong__B-Sd1 typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9 link-module_link__Nwimt link-module_underline-mode-onlyWhenHover__alkql link-module_monochrome__yqKNC block truncate max-w-full" data-address="0x5a52e96bacdabb82fd05763e25335261b270efcb" href="/address/0x5a52e96bacdabb82fd05763e25335261b270efcb">0x5a52…efcb</a>
                          </div>
                        </div>
                      </td>
                      <td className="ronin-table-cell" style={{ textAlign: "right" }}>
                        <div className="flex items-center gap-8 justify-end">
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">1,000,100.14</div>
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh">RON</div>
                        </div>
                      </td>
                      <td className="ronin-table-cell" style={{ textAlign: "right" }}>
                        <div className="flex items-center gap-8 justify-end">
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">63,993,608.58</div>
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh">USD</div>
                        </div>
                      </td>
                      <td className="ronin-table-cell" style={{ textAlign: "right" }}>
                        <div className="flex items-center gap-8 justify-end">
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">0</div>
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh">Assets</div>
                        </div>
                      </td>
                      <td className="ronin-table-cell" style={{ textAlign: "right" }}>
                        <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9">14</div>
                      </td>
                    </a>
                    <a className="ronin-table-row ronin-table-row-level-0 table-row cursor-pointer" href="/address/0xc901779d1c299ee2b201e00aa304b552b07ad915" style={{ verticalAlign: "inherit" }}>
                      <td className="ronin-table-cell" style={{ textAlign: "left" }}>
                        <div className="flex items-center gap-12 truncate max-w-full">
                          <div className="avatar-module_size-s__pbWkl shrink-0">
                            <svg viewBox="0 0 80 80" fill="none" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                              <mask id=":r1b:" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80">
                                <rect width="80" height="80" rx="160" fill="#FFFFFF"></rect>
                              </mask>
                              <g mask="url(#:r1b:)">
                                <rect width="80" height="80" fill="#FFC34D"></rect>
                                <path filter="url(#prefix__filter0_f)" d="M32.414 59.35L50.376 70.5H72.5v-71H33.728L26.5 13.381l19.057 27.08L32.414 59.35z" fill="#8833FF" transform="translate(0 0) rotate(-184 40 40) scale(1.2)"></path>
                                <path filter="url(#prefix__filter0_f)" d="M22.216 24L0 46.75l14.108 38.129L78 86l-3.081-59.276-22.378 4.005 12.972 20.186-23.35 27.395L22.215 24z" fill="#2B4DFF" transform="translate(0 0) rotate(96 40 40) scale(1.2)" style={{ mixBlendMode: "overlay" }}></path>
                              </g>
                              <defs>
                                <filter id="prefix__filter0_f" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                  <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                                  <feGaussianBlur stdDeviation="7" result="effect1_foregroundBlur"></feGaussianBlur>
                                </filter>
                              </defs>
                            </svg>
                          </div>
                          <div className="flex items-center">
                            <a className="typo-module_t-body-md-strong__B-Sd1 typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9 link-module_link__Nwimt link-module_underline-mode-onlyWhenHover__alkql link-module_monochrome__yqKNC block truncate max-w-full" data-address="0xc901779d1c299ee2b201e00aa304b552b07ad915" href="/address/0xc901779d1c299ee2b201e00aa304b552b07ad915">0xc901…d915</a>
                          </div>
                        </div>
                      </td>
                      <td className="ronin-table-cell" style={{ textAlign: "right" }}>
                        <div className="flex items-center gap-8 justify-end">
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">938,975.83</div>
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh">RON</div>
                        </div>
                      </td>
                      <td className="ronin-table-cell" style={{ textAlign: "right" }}>
                        <div className="flex items-center gap-8 justify-end">
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">1,702,494.09</div>
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh">USD</div>
                        </div>
                      </td>
                      <td className="ronin-table-cell" style={{ textAlign: "right" }}>
                        <div className="flex items-center gap-8 justify-end">
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">0</div>
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh">Assets</div>
                        </div>
                      </td>
                      <td className="ronin-table-cell" style={{ textAlign: "right" }}>
                        <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9">25,231</div>
                      </td>
                    </a>
                    <a className="ronin-table-row ronin-table-row-level-0 table-row cursor-pointer" href="/address/0x1ea99ca6aa57b1e886d9bd353a980942991faeb2" style={{ verticalAlign: "inherit" }}>
                      <td className="ronin-table-cell" style={{ textAlign: "left" }}>
                        <div className="flex items-center gap-12 truncate max-w-full">
                          <div className="avatar-module_size-s__pbWkl shrink-0">
                            <svg viewBox="0 0 80 80" fill="none" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                              <mask id=":r1c:" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80">
                                <rect width="80" height="80" rx="160" fill="#FFFFFF"></rect>
                              </mask>
                              <g mask="url(#:r1c:)">
                                <rect width="80" height="80" fill="#5CFFFF"></rect>
                                <path filter="url(#prefix__filter0_f)" d="M32.414 59.35L50.376 70.5H72.5v-71H33.728L26.5 13.381l19.057 27.08L32.414 59.35z" fill="#E3E8F2" transform="translate(-6 6) rotate(-22 40 40) scale(1.3)"></path>
                                <path filter="url(#prefix__filter0_f)" d="M22.216 24L0 46.75l14.108 38.129L78 86l-3.081-59.276-22.378 4.005 12.972 20.186-23.35 27.395L22.215 24z" fill="#4BFFD4" transform="translate(1 1) rotate(33 40 40) scale(1.3)" style={{ mixBlendMode: "overlay" }}></path>
                              </g>
                              <defs>
                                <filter id="prefix__filter0_f" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                  <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                                  <feGaussianBlur stdDeviation="7" result="effect1_foregroundBlur"></feGaussianBlur>
                                </filter>
                              </defs>
                            </svg>
                          </div>
                          <div className="flex items-center">
                            <a className="typo-module_t-body-md-strong__B-Sd1 typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9 link-module_link__Nwimt link-module_underline-mode-onlyWhenHover__alkql link-module_monochrome__yqKNC block truncate max-w-full" data-address="0x1ea99ca6aa57b1e886d9bd353a980942991faeb2" href="/address/0x1ea99ca6aa57b1e886d9bd353a980942991faeb2">0x1ea9…aeb2</a>
                          </div>
                        </div>
                      </td>
                      <td className="ronin-table-cell" style={{ textAlign: "right" }}>
                        <div className="flex items-center gap-8 justify-end">
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">845,274.58</div>
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh">RON</div>
                        </div>
                      </td>
                      <td className="ronin-table-cell" style={{ textAlign: "right" }}>
                        <div className="flex items-center gap-8 justify-end">
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">1,329,936.09</div>
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh">USD</div>
                        </div>
                      </td>
                      <td className="ronin-table-cell" style={{ textAlign: "right" }}>
                        <div className="flex items-center gap-8 justify-end">
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">0</div>
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh">Assets</div>
                        </div>
                      </td>
                      <td className="ronin-table-cell" style={{ textAlign: "right" }}>
                        <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9">108,044</div>
                      </td>
                    </a>
                    <a className="ronin-table-row ronin-table-row-level-0 table-row cursor-pointer" href="/address/0xf7cb79d787e0fe2b20e5cf7ed06986712d8008a9" style={{ verticalAlign: "inherit" }}>
                      <td className="ronin-table-cell" style={{ textAlign: "left" }}>
                        <div className="flex items-center gap-12 truncate max-w-full">
                          <div className="avatar-module_size-s__pbWkl shrink-0">
                            <svg viewBox="0 0 80 80" fill="none" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                              <mask id=":r1d:" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80">
                                <rect width="80" height="80" rx="160" fill="#FFFFFF"></rect>
                              </mask>
                              <g mask="url(#:r1d:)">
                                <rect width="80" height="80" fill="#FFC34D"></rect>
                                <path filter="url(#prefix__filter0_f)" d="M32.414 59.35L50.376 70.5H72.5v-71H33.728L26.5 13.381l19.057 27.08L32.414 59.35z" fill="#8833FF" transform="translate(-4 -4) rotate(-284 40 40) scale(1.4)"></path>
                                <path filter="url(#prefix__filter0_f)" d="M22.216 24L0 46.75l14.108 38.129L78 86l-3.081-59.276-22.378 4.005 12.972 20.186-23.35 27.395L22.215 24z" fill="#2B4DFF" transform="translate(-2 2) rotate(-66 40 40) scale(1.4)" style={{ mixBlendMode: "overlay" }}></path>
                              </g>
                              <defs>
                                <filter id="prefix__filter0_f" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                  <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                                  <feGaussianBlur stdDeviation="7" result="effect1_foregroundBlur"></feGaussianBlur>
                                </filter>
                              </defs>
                            </svg>
                          </div>
                          <div className="flex items-center">
                            <a className="typo-module_t-body-md-strong__B-Sd1 typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9 link-module_link__Nwimt link-module_underline-mode-onlyWhenHover__alkql link-module_monochrome__yqKNC block truncate max-w-full" data-address="0xf7cb79d787e0fe2b20e5cf7ed06986712d8008a9" href="/address/0xf7cb79d787e0fe2b20e5cf7ed06986712d8008a9">0xf7cb…08a9</a>
                          </div>
                        </div>
                      </td>
                      <td className="ronin-table-cell" style={{ textAlign: "right" }}>
                        <div className="flex items-center gap-8 justify-end">
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">759,430.49</div>
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh">RON</div>
                        </div>
                      </td>
                      <td className="ronin-table-cell" style={{ textAlign: "right" }}>
                        <div className="flex items-center gap-8 justify-end">
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">1,194,870.92</div>
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh">USD</div>
                        </div>
                      </td>
                      <td className="ronin-table-cell" style={{ textAlign: "right" }}>
                        <div className="flex items-center gap-8 justify-end">
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">0</div>
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh">Assets</div>
                        </div>
                      </td>
                      <td className="ronin-table-cell" style={{ textAlign: "right" }}>
                        <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9">10</div>
                      </td>
                    </a>
                    <a className="ronin-table-row ronin-table-row-level-0 table-row cursor-pointer" href="/address/0x07c71c3ddff55cb0915948ffd8d8aa376cabda1b" style={{ verticalAlign: "inherit" }}>
                      <td className="ronin-table-cell" style={{ textAlign: "left" }}>
                        <div className="flex items-center gap-12 truncate max-w-full">
                          <div className="avatar-module_size-s__pbWkl shrink-0">
                            <svg viewBox="0 0 80 80" fill="none" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                              <mask id=":r1e:" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80">
                                <rect width="80" height="80" rx="160" fill="#FFFFFF"></rect>
                              </mask>
                              <g mask="url(#:r1e:)">
                                <rect width="80" height="80" fill="#FFAEFC"></rect>
                                <path filter="url(#prefix__filter0_f)" d="M32.414 59.35L50.376 70.5H72.5v-71H33.728L26.5 13.381l19.057 27.08L32.414 59.35z" fill="#5CFFFF" transform="translate(6 6) rotate(150 40 40) scale(1.3)"></path>
                                <path filter="url(#prefix__filter0_f)" d="M22.216 24L0 46.75l14.108 38.129L78 86l-3.081-59.276-22.378 4.005 12.972 20.186-23.35 27.395L22.215 24z" fill="#E3E8F2" transform="translate(-1 1) rotate(-225 40 40) scale(1.3)" style={{ mixBlendMode: "overlay" }}></path>
                              </g>
                              <defs>
                                <filter id="prefix__filter0_f" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                  <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                                  <feGaussianBlur stdDeviation="7" result="effect1_foregroundBlur"></feGaussianBlur>
                                </filter>
                              </defs>
                            </svg>
                          </div>
                          <div className="flex items-center">
                            <a className="typo-module_t-body-md-strong__B-Sd1 typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9 link-module_link__Nwimt link-module_underline-mode-onlyWhenHover__alkql link-module_monochrome__yqKNC block truncate max-w-full" data-address="0x07c71c3ddff55cb0915948ffd8d8aa376cabda1b" href="/address/0x07c71c3ddff55cb0915948ffd8d8aa376cabda1b">0x07c7…da1b</a>
                          </div>
                        </div>
                      </td>
                      <td className="ronin-table-cell" style={{ textAlign: "right" }}>
                        <div className="flex items-center gap-8 justify-end">
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">708,686.41</div>
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh">RON</div>
                        </div>
                      </td>
                      <td className="ronin-table-cell" style={{ textAlign: "right" }}>
                        <div className="flex items-center gap-8 justify-end">
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">1,115,031.31</div>
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh">USD</div>
                        </div>
                      </td>
                      <td className="ronin-table-cell" style={{ textAlign: "right" }}>
                        <div className="flex items-center gap-8 justify-end">
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">0</div>
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh">Assets</div>
                        </div>
                      </td>
                      <td className="ronin-table-cell" style={{ textAlign: "right" }}>
                        <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9">2</div>
                      </td>
                    </a>
                    <a className="ronin-table-row ronin-table-row-level-0 table-row cursor-pointer" href="/address/0x08fea849761901e7630a961e82408335c58d57c4" style={{ verticalAlign: "inherit" }}>
                      <td className="ronin-table-cell" style={{ textAlign: "left" }}>
                        <div className="flex items-center gap-12 truncate max-w-full">
                          <div className="avatar-module_size-s__pbWkl shrink-0">
                            <svg viewBox="0 0 80 80" fill="none" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                              <mask id=":r1f:" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80">
                                <rect width="80" height="80" rx="160" fill="#FFFFFF"></rect>
                              </mask>
                              <g mask="url(#:r1f:)">
                                <rect width="80" height="80" fill="#8833FF"></rect>
                                <path filter="url(#prefix__filter0_f)" d="M32.414 59.35L50.376 70.5H72.5v-71H33.728L26.5 13.381l19.057 27.08L32.414 59.35z" fill="#2B4DFF" transform="translate(0 0) rotate(296 40 40) scale(1.2)"></path>
                                <path filter="url(#prefix__filter0_f)" d="M22.216 24L0 46.75l14.108 38.129L78 86l-3.081-59.276-22.378 4.005 12.972 20.186-23.35 27.395L22.215 24z" fill="#2065EE" transform="translate(0 0) rotate(-264 40 40) scale(1.2)" style={{ mixBlendMode: "overlay" }}></path>
                              </g>
                              <defs>
                                <filter id="prefix__filter0_f" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                  <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                                  <feGaussianBlur stdDeviation="7" result="effect1_foregroundBlur"></feGaussianBlur>
                                </filter>
                              </defs>
                            </svg>
                          </div>
                          <div className="flex items-center">
                            <a className="typo-module_t-body-md-strong__B-Sd1 typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9 link-module_link__Nwimt link-module_underline-mode-onlyWhenHover__alkql link-module_monochrome__yqKNC block truncate max-w-full" data-address="0x08fea849761901e7630a961e82408335c58d57c4" href="/address/0x08fea849761901e7630a961e82408335c58d57c4">0x08fe…57c4</a>
                          </div>
                        </div>
                      </td>
                      <td className="ronin-table-cell" style={{ textAlign: "right" }}>
                        <div className="flex items-center gap-8 justify-end">
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">657,293.98</div>
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh">RON</div>
                        </div>
                      </td>
                      <td className="ronin-table-cell" style={{ textAlign: "right" }}>
                        <div className="flex items-center gap-8 justify-end">
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">1,034,171.62</div>
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh">USD</div>
                        </div>
                      </td>
                      <td className="ronin-table-cell" style={{ textAlign: "right" }}>
                        <div className="flex items-center gap-8 justify-end">
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">0</div>
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh">Assets</div>
                        </div>
                      </td>
                      <td className="ronin-table-cell" style={{ textAlign: "right" }}>
                        <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9">2</div>
                      </td>
                    </a>
                    {/* Additional rows would follow the same structure */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="pagination-module_container__YETeD mt-40">
            <div className="pagination-module_leftEl__puFRQ">
              <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-md__-HKdi typo-module_neutral__9orA9 pagination-module_content__nlsr4">Show</div>
              <div className="dropdown-module_container__iY02y">
                <div className="dropdown-module_triggerWrapper__nVet0">
                  <div className="form-item-module_form__3-Rfq">
                    <button className="select-module_select-root__iUjOH select-module_wrapper__Hc5F3 select-module_default__LhAiz select-module_variant-filled__mqpkY select-module_has-suffix__cxAEt" type="button">
                      <div className="select-module_input-wrapper__2e9Sr select-module_has-value__gkGdm">
                        <div className="select-module_input__QFtX8">
                          <div className="dropdown-module_wrapper-selected-option__TdgBl">
                            <div className="dropdown-module_selected-option__TFYEe">25</div>
                          </div>
                        </div>
                      </div>
                      <span className="select-module_suffix__JN2c1">
                        <svg className="select-module_toggle-icon__2Oqot" cursor="pointer" viewBox="0 0 20 20" width="20" height="20">
                          <path fill="currentColor" fillRule="evenodd" d="M5.47 7.47a.75.75 0 0 1 1.06 0L10 10.94l3.47-3.47a.75.75 0 1 1 1.06 1.06l-4 4a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 0 1 0-1.06Z" clipRule="evenodd"></path>
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-md__-HKdi typo-module_neutral__9orA9 pagination-module_content__nlsr4">accounts</div>
            </div>
            <div className="pagination-module_rightEl__Hg04k">
              <div className="pagination-module_input-page__LMvfc">
                <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-md__-HKdi typo-module_neutral__9orA9 pagination-module_content__nlsr4">Go to page</div>
                <form className="" noValidate>
                  <div className="form-item-module_form__3-Rfq text-field-module_input-root__PSsoe">
                    <div className="input-module_container__Gch8D input-module_default__Rk4yp">
                      <div className="input-module_form__2zFJF">
                        <input type="number" min="1" max="400" className="input-module_formControl__oYbNL pagination-module_input__Q2zHx" defaultValue="1" />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="pagination-module_page__Dm55O">
                <button disabled className="button-module_button__Z331g button-module_intent-default__f1RNz button-module_size-small__Nes6W button-module_variant-plain__hxRYr button-module_button-root__0roWY" style={{ padding: '12px 5px' }}>
                  <svg viewBox="0 0 20 20" width="20" height="20">
                    <path fill="currentColor" fillRule="evenodd" d="M9.03 6.53a.75.75 0 0 0-1.06-1.06l-4 4a.748.748 0 0 0 0 1.06l4 4a.75.75 0 0 0 1.06-1.06l-2.72-2.72h9.19a.75.75 0 0 0 0-1.5H6.31l2.72-2.72Z" clipRule="evenodd"></path>
                  </svg>
                </button>
                <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-md__-HKdi typo-module_neutral__9orA9 pagination-module_page-number__6httT">1/400</div>
                <button className="button-module_button__Z331g button-module_intent-default__f1RNz button-module_size-small__Nes6W button-module_variant-plain__hxRYr button-module_button-root__0roWY" style={{ padding: '12px 5px' }}>
                  <svg viewBox="0 0 20 20" width="20" height="20">
                    <path fill="currentColor" fillRule="evenodd" d="M12.28 5.22a.75.75 0 1 0-1.06 1.06L13.94 9H4.75a.75.75 0 0 0 0 1.5h9.19l-2.72 2.72a.75.75 0 1 0 1.06 1.06l4-4a.747.747 0 0 0 0-1.06l-4-4Z" clipRule="evenodd"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Accounts;
