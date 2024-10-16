import React from "react";
import Header from "../components/Header";
const Contracts = () => {
  return (
    <div className="h-full flex-1 overflow-x-hidden overflow-y-scroll px-[16px] md:px-[54px]">
      <Header />
      <div className="mx-auto max-w-[1180px]">
        <main className="pb-24 pt-16 md:pb-48 md:pt-24">
          <div className="typo-module_t-display-xl__twhe3 typo-module_mobile-t-display-lg__6JAaA typo-module_neutral__9orA9">
            Contracts
          </div>
          <div className="my-40">
            <div className="mb-8">
              <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9">
                Total 695 contracts
              </div>
            </div>
            <div className="ronin-table hoverable-row ronin-table-scroll-horizontal">
              <div className="ronin-table-container">
                <div
                  className="ronin-table-content"
                  style={{ overflow: "auto hidden" }}
                >
                  {/* <a
                    className="ronin-table-row ronin-table-row-level-0 table-row cursor-pointer"
                    data-row-key="0"
                    href="/address/0x1db83f3cb28780b2394e8313ffe5a8d6803fdefd"
                    style={{ verticalAlign: "inherit" }}
                  ></a>
                  <a
                    className="ronin-table-row ronin-table-row-level-0 table-row cursor-pointer"
                    data-row-key="1"
                    href="/address/0x74d1ca99f9ed20f1b9ed4297ffe245ceaacf519e"
                    style={{ verticalAlign: "inherit" }}
                  ></a>
                  <a
                    className="ronin-table-row ronin-table-row-level-0 table-row cursor-pointer"
                    data-row-key="2"
                    href="/address/0x861f56cd7069d200f7c4fcb25e66670aa2780434"
                    style={{ verticalAlign: "inherit" }}
                  ></a>
                  <a
                    className="ronin-table-row ronin-table-row-level-0 table-row cursor-pointer"
                    data-row-key="3"
                    href="/address/0x4b2612de90a3cdadf8020dc17d4b692df1e1f705"
                    style={{ verticalAlign: "inherit" }}
                  ></a>
                  <a
                    className="ronin-table-row ronin-table-row-level-0 table-row cursor-pointer"
                    data-row-key="4"
                    href="/address/0x6a1d85c9876ea93ee460ca1d36ae7d95d0cd8f05"
                    style={{ verticalAlign: "inherit" }}
                  ></a>
                  <a
                    className="ronin-table-row ronin-table-row-level-0 table-row cursor-pointer"
                    data-row-key="5"
                    href="/address/0x09736b41ba78633d435e06019dc1a79b1545babc"
                    style={{ verticalAlign: "inherit" }}
                  ></a>
                  <a
                    className="ronin-table-row ronin-table-row-level-0 table-row cursor-pointer"
                    data-row-key="6"
                    href="/address/0xd8002ce76dc1dfccd1a52069edc81fa03657aac0"
                    style={{ verticalAlign: "inherit" }}
                  ></a>
                  <a
                    className="ronin-table-row ronin-table-row-level-0 table-row cursor-pointer"
                    data-row-key="7"
                    href="/address/0x554bced1db572e16fdf4c8a6f23a301f7eb0293b"
                    style={{ verticalAlign: "inherit" }}
                  ></a>
                  <a
                    className="ronin-table-row ronin-table-row-level-0 table-row cursor-pointer"
                    data-row-key="8"
                    href="/address/0x7d21b72c6940491740eab0395c3cd059e4eb0b8a"
                    style={{ verticalAlign: "inherit" }}
                  ></a>
                  <a
                    className="ronin-table-row ronin-table-row-level-0 table-row cursor-pointer"
                    data-row-key="9"
                    href="/address/0x2b60a1093a3d5ced568485f486b3a7de9003ce13"
                    style={{ verticalAlign: "inherit" }}
                  ></a>
                  <a
                    className="ronin-table-row ronin-table-row-level-0 table-row cursor-pointer"
                    data-row-key="10"
                    href="/address/0xed541c542e211fe61a532f156867de3f736c6086"
                    style={{ verticalAlign: "inherit" }}
                  ></a>
                  <a
                    className="ronin-table-row ronin-table-row-level-0 table-row cursor-pointer"
                    data-row-key="11"
                    href="/address/0x83be7f9c9a7d6392c8121695b6f0985cdc5eff81"
                    style={{ verticalAlign: "inherit" }}
                  ></a>
                  <a
                    className="ronin-table-row ronin-table-row-level-0 table-row cursor-pointer"
                    data-row-key="12"
                    href="/address/0x416f9b0d4660b01b208aa22c092a9a5f22a379c1"
                    style={{ verticalAlign: "inherit" }}
                  ></a>
                  <a
                    className="ronin-table-row ronin-table-row-level-0 table-row cursor-pointer"
                    data-row-key="13"
                    href="/address/0x9f8e937803bea0c99563e6cca84111d2beb782d0"
                    style={{ verticalAlign: "inherit" }}
                  ></a>
                  <a
                    className="ronin-table-row ronin-table-row-level-0 table-row cursor-pointer"
                    data-row-key="14"
                    href="/address/0xd97c9707528141b3b505eec03ee90aebf055a901"
                    style={{ verticalAlign: "inherit" }}
                  ></a>
                  <a
                    className="ronin-table-row ronin-table-row-level-0 table-row cursor-pointer"
                    data-row-key="15"
                    href="/address/0x5c41998304eab25eab4618f0866bc9053ae4fa9a"
                    style={{ verticalAlign: "inherit" }}
                  ></a>
                  <a
                    className="ronin-table-row ronin-table-row-level-0 table-row cursor-pointer"
                    data-row-key="16"
                    href="/address/0x342fcfc16943a930251d15fccdcd95104f9b4e5f"
                    style={{ verticalAlign: "inherit" }}
                  ></a>
                  <a
                    className="ronin-table-row ronin-table-row-level-0 table-row cursor-pointer"
                    data-row-key="17"
                    href="/address/0xcd4f1cd738cf862995239b5b7d9ff09cffc22399"
                    style={{ verticalAlign: "inherit" }}
                  ></a>
                  <a
                    className="ronin-table-row ronin-table-row-level-0 table-row cursor-pointer"
                    data-row-key="18"
                    href="/address/0x81588c2db2f47851960dcdc1366a2331355badf5"
                    style={{ verticalAlign: "inherit" }}
                  ></a>
                  <a
                    className="ronin-table-row ronin-table-row-level-0 table-row cursor-pointer"
                    data-row-key="19"
                    href="/address/0x2a6120978d3f868299aa020303b93b9a90f257cf"
                    style={{ verticalAlign: "inherit" }}
                  ></a>
                  <a
                    className="ronin-table-row ronin-table-row-level-0 table-row cursor-pointer"
                    data-row-key="20"
                    href="/address/0x7dd814c6408382977ae85ed69ee8a81da5886be7"
                    style={{ verticalAlign: "inherit" }}
                  ></a>
                  <a
                    className="ronin-table-row ronin-table-row-level-0 table-row cursor-pointer"
                    data-row-key="21"
                    href="/address/0x418626b8eb6ab317707653ee1b3e2e5c9b84c260"
                    style={{ verticalAlign: "inherit" }}
                  ></a>
                  <a
                    className="ronin-table-row ronin-table-row-level-0 table-row cursor-pointer"
                    data-row-key="22"
                    href="/address/0x67590a32092786a9a0e366ebb9b74eb5fa5d1bd9"
                    style={{ verticalAlign: "inherit" }}
                  ></a>
                  <a
                    className="ronin-table-row ronin-table-row-level-0 table-row cursor-pointer"
                    data-row-key="23"
                    href="/address/0xedea32317798f494c61465e0b988a99f9b1a1c9d"
                    style={{ verticalAlign: "inherit" }}
                  ></a>
                  <a
                    className="ronin-table-row ronin-table-row-level-0 table-row cursor-pointer"
                    data-row-key="24"
                    href="/address/0xd4f8996437e367c202e7b63fc3856c0e8a2b9cfc"
                    style={{ verticalAlign: "inherit" }}
                  ></a> */}
                  <table
                    style={{
                      width: "auto",
                      minWidth: "100%",
                      tableLayout: "auto",
                    }}
                  >
                    <colgroup></colgroup>
                    <thead className="ronin-table-thead">
                      <tr className='ronin-table-row'>
                        <th
                          className="ronin-table-cell"
                          scope="col"
                          style={{ textAlign: "left" }}
                        >
                          contract name
                        </th>
                        <th
                          className="ronin-table-cell"
                          scope="col"
                          style={{ textAlign: "left" }}
                        >
                          address
                        </th>
                        <th
                          className="ronin-table-cell"
                          scope="col"
                          style={{ textAlign: "left" }}
                        >
                          type
                        </th>
                        <th
                          className="ronin-table-cell"
                          scope="col"
                          style={{ textAlign: "right" }}
                        >
                          <div className="typo-module_t-label__38Ly4 typo-module_mobile-t-label__G-AYO typo-module_neutral__9orA9 typo-module_dim__qoQFh rcTable-module_column-title-has-sorter__pJFMl">
                            <div className="inline-flex items-center gap-4">
                              <svg viewBox="0 0 20 20" width="16" height="16">
                                <path
                                  fill="currentColor"
                                  d="M10 2c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8Zm1 11.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4ZM10 8a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
                                ></path>
                              </svg>
                              <div>transactions</div>
                            </div>
                            <svg viewBox="0 0 20 20" width="20" height="20">
                              <path
                                fill="currentColor"
                                fillRule="evenodd"
                                d="M8.53 8.53a.75.75 0 0 1-1.06-1.06l2-2a.75.75 0 0 1 1.06 0l2 2a.75.75 0 0 1-1.06 1.06L10 7.06 8.53 8.53Zm0 2.94a.75.75 0 0 0-1.06 1.06l2 2a.75.75 0 0 0 1.06 0l2-2a.75.75 0 1 0-1.06-1.06L10 12.94l-1.47-1.47Z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                          </div>
                        </th>
                        <th
                          className="ronin-table-cell"
                          scope="col"
                          style={{ textAlign: "right" }}
                        >
                          creation
                        </th>
                        <th
                          className="ronin-table-cell"
                          scope="col"
                          style={{ textAlign: "right" }}
                        >
                          <span className="whitespace-nowrap">
                            last updated
                          </span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="ronin-table-tbody">
                      <tr
                        aria-hidden="true"
                        className="ronin-table-measure-row"
                        style={{ height: 0, fontSize: 0 }}
                      >
                        <td style={{ padding: 0, border: 0, height: 0 }}>
                          <div style={{ height: 0, overflow: "hidden" }}>
                            &nbsp;
                          </div>
                        </td>
                        <td style={{ padding: 0, border: 0, height: 0 }}>
                          <div style={{ height: 0, overflow: "hidden" }}>
                            &nbsp;
                          </div>
                        </td>
                        <td style={{ padding: 0, border: 0, height: 0 }}>
                          <div style={{ height: 0, overflow: "hidden" }}>
                            &nbsp;
                          </div>
                        </td>
                        <td style={{ padding: 0, border: 0, height: 0 }}>
                          <div style={{ height: 0, overflow: "hidden" }}>
                            &nbsp;
                          </div>
                        </td>
                        <td style={{ padding: 0, border: 0, height: 0 }}>
                          <div style={{ height: 0, overflow: "hidden" }}>
                            &nbsp;
                          </div>
                        </td>
                        <td style={{ padding: 0, border: 0, height: 0 }}>
                          <div style={{ height: 0, overflow: "hidden" }}>
                            &nbsp;
                          </div>
                        </td>
                      </tr>
                      <tr className='ronin-table-row'>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "left" }}
                        >
                          <div
                            className="flex items-center gap-8"
                            data-address="0x1db83f3cb28780b2394e8313ffe5a8d6803fdefd"
                          >
                            <div className="flex items-center gap-12 truncate max-w-full">
                              <div className="image-wrapper-module_container__5gv1w image-wrapper-module_sm__r69hP shrink-0">
                                <svg viewBox="0 0 20 20" width="24" height="24">
                                  <path
                                    fill="currentColor"
                                    fillRule="evenodd"
                                    d="M5 2h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Zm2 4.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5H7ZM6.25 10A.75.75 0 0 1 7 9.25h6a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75ZM7 12.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5H7Z"
                                    clipRule="evenodd"
                                  ></path>
                                </svg>
                              </div>
                              <div className="flex items-center">
                                <a
                                  className="typo-module_t-body-md-strong__B-Sd1 typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9 link-module_link__Nwimt link-module_underline-mode-onlyWhenHover__alkql link-module_monochrome__yqKNC block truncate max-w-full"
                                  icon=""
                                  href="/address/0x1db83f3cb28780b2394e8313ffe5a8d6803fdefd"
                                >
                                  Axie Initializer
                                </a>
                              </div>
                            </div>
                            <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3 hidden">
                              <div className="badge-module_badge__kTvKz badge-module_info-solid__DSKnf badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs">
                                  Deprecated
                                </span>
                              </div>
                            </div>
                            <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3 hidden">
                              <div className="badge-module_badge__kTvKz badge-module_default-solid__76z0J badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs">
                                  Logic
                                </span>
                              </div>
                            </div>
                            <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3 hidden">
                              <div className="badge-module_badge__kTvKz badge-module_primary-solid__T7WuZ badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs">
                                  System Contract
                                </span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "left" }}
                        >
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                            0x1db8…defd
                          </div>
                        </td>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "left" }}
                        >
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                            Collectible
                          </div>
                        </td>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "right" }}
                        >
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                            0
                          </div>
                        </td>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "right" }}
                        >
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                            11 Oct 2024
                          </div>
                        </td>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "right" }}
                        >
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                            2 days ago
                          </div>
                        </td>
                      </tr>
                      <tr className='ronin-table-row'>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "left" }}
                        >
                          <div
                            className="flex items-center gap-8"
                            data-address="0x74d1ca99f9ed20f1b9ed4297ffe245ceaacf519e"
                          >
                            <div className="flex items-center gap-12 truncate max-w-full">
                              <div className="image-wrapper-module_container__5gv1w image-wrapper-module_sm__r69hP shrink-0">
                                <svg viewBox="0 0 20 20" width="24" height="24">
                                  <path
                                    fill="currentColor"
                                    fillRule="evenodd"
                                    d="M5 2h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Zm2 4.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5H7ZM6.25 10A.75.75 0 0 1 7 9.25h6a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75ZM7 12.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5H7Z"
                                    clipRule="evenodd"
                                  ></path>
                                </svg>
                              </div>
                              <div className="flex items-center">
                                <a
                                  className="typo-module_t-body-md-strong__B-Sd1 typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9 link-module_link__Nwimt link-module_underline-mode-onlyWhenHover__alkql link-module_monochrome__yqKNC block truncate max-w-full"
                                  icon=""
                                  href="/address/0x74d1ca99f9ed20f1b9ed4297ffe245ceaacf519e"
                                >
                                  Axie Breeding Proxy
                                </a>
                              </div>
                            </div>
                            <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3 hidden">
                              <div className="badge-module_badge__kTvKz badge-module_info-solid__DSKnf badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs">
                                  Deprecated
                                </span>
                              </div>
                            </div>
                            <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3 hidden">
                              <div className="badge-module_badge__kTvKz badge-module_default-solid__76z0J badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs">
                                  Logic
                                </span>
                              </div>
                            </div>
                            <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3 hidden">
                              <div className="badge-module_badge__kTvKz badge-module_primary-solid__T7WuZ badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs">
                                  System Contract
                                </span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "left" }}
                        >
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                            0x74d1…519e
                          </div>
                        </td>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "left" }}
                        >
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                            Contract
                          </div>
                        </td>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "right" }}
                        >
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                            0
                          </div>
                        </td>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "right" }}
                        >
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                            11 Oct 2024
                          </div>
                        </td>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "right" }}
                        >
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                            7 mins ago
                          </div>
                        </td>
                      </tr>
                      <tr className='ronin-table-row'>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "left" }}
                        >
                          <div
                            className="flex items-center gap-8"
                            data-address="0x861f56cd7069d200f7c4fcb25e66670aa2780434"
                          >
                            <div className="flex items-center gap-12 truncate max-w-full">
                              <div className="image-wrapper-module_container__5gv1w image-wrapper-module_sm__r69hP shrink-0">
                                <svg viewBox="0 0 20 20" width="24" height="24">
                                  <path
                                    fill="currentColor"
                                    fillRule="evenodd"
                                    d="M5 2h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Zm2 4.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5H7ZM6.25 10A.75.75 0 0 1 7 9.25h6a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75ZM7 12.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5H7Z"
                                    clipRule="evenodd"
                                  ></path>
                                </svg>
                              </div>
                              <div className="flex items-center">
                                <a
                                  className="typo-module_t-body-md-strong__B-Sd1 typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9 link-module_link__Nwimt link-module_underline-mode-onlyWhenHover__alkql link-module_monochrome__yqKNC block truncate max-w-full"
                                  icon=""
                                  href="/address/0x861f56cd7069d200f7c4fcb25e66670aa2780434"
                                >
                                  Axie
                                </a>
                              </div>
                            </div>
                            <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3 hidden">
                              <div className="badge-module_badge__kTvKz badge-module_info-solid__DSKnf badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs">
                                  Deprecated
                                </span>
                              </div>
                            </div>
                            <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3 hidden">
                              <div className="badge-module_badge__kTvKz badge-module_default-solid__76z0J badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs">
                                  Logic
                                </span>
                              </div>
                            </div>
                            <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3 hidden">
                              <div className="badge-module_badge__kTvKz badge-module_primary-solid__T7WuZ badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs">
                                  System Contract
                                </span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "left" }}
                        >
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                            0x861f…0434
                          </div>
                        </td>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "left" }}
                        >
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                            Collectible
                          </div>
                        </td>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "right" }}
                        >
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                            0
                          </div>
                        </td>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "right" }}
                        >
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                            11 Oct 2024
                          </div>
                        </td>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "right" }}
                        >
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                            2 days ago
                          </div>
                        </td>
                      </tr>
                      <tr className='ronin-table-row'>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "left" }}
                        >
                          <div
                            className="flex items-center gap-8"
                            data-address="0x4b2612de90a3cdadf8020dc17d4b692df1e1f705"
                          >
                            <div className="flex items-center gap-12 truncate max-w-full">
                              <div className="image-wrapper-module_container__5gv1w image-wrapper-module_sm__r69hP shrink-0">
                                <svg viewBox="0 0 20 20" width="24" height="24">
                                  <path
                                    fill="currentColor"
                                    fillRule="evenodd"
                                    d="M5 2h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Zm2 4.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5H7ZM6.25 10A.75.75 0 0 1 7 9.25h6a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75ZM7 12.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5H7Z"
                                    clipRule="evenodd"
                                  ></path>
                                </svg>
                              </div>
                              <div className="flex items-center">
                                <a
                                  className="typo-module_t-body-md-strong__B-Sd1 typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9 link-module_link__Nwimt link-module_underline-mode-onlyWhenHover__alkql link-module_monochrome__yqKNC block truncate max-w-full"
                                  icon=""
                                  href="/address/0x4b2612de90a3cdadf8020dc17d4b692df1e1f705"
                                >
                                  M Gold 20 Wallet Proxy
                                </a>
                              </div>
                            </div>
                            <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3 hidden">
                              <div className="badge-module_badge__kTvKz badge-module_info-solid__DSKnf badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs">
                                  Deprecated
                                </span>
                              </div>
                            </div>
                            <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3 hidden">
                              <div className="badge-module_badge__kTvKz badge-module_default-solid__76z0J badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs">
                                  Logic
                                </span>
                              </div>
                            </div>
                            <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3 hidden">
                              <div className="badge-module_badge__kTvKz badge-module_primary-solid__T7WuZ badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs">
                                  System Contract
                                </span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "left" }}
                        >
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                            0x4b26…f705
                          </div>
                        </td>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "left" }}
                        >
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                            Contract
                          </div>
                        </td>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "right" }}
                        >
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                            0
                          </div>
                        </td>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "right" }}
                        >
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                            11 Oct 2024
                          </div>
                        </td>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "right" }}
                        >
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                            9 secs ago
                          </div>
                        </td>
                      </tr>

                      <tr className='ronin-table-row'>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "left" }}
                        >
                          <div
                            className="flex items-center gap-8"
                            data-address="0x6a1d85c9876ea93ee460ca1d36ae7d95d0cd8f05"
                          >
                            <div className="flex items-center gap-12 truncate max-w-full">
                              <div className="image-wrapper-module_container__5gv1w image-wrapper-module_sm__r69hP shrink-0">
                                <img
                                  src="https://cdn.skymavis.com/ronin/2020/erc20/0x6a1d85c9876ea93ee460ca1d36ae7d95d0cd8f05/logo.png"
                                  className="rounded-[6px]"
                                  width="100%"
                                  height="100%"
                                  alt="address-icon"
                                />
                              </div>
                              <div className="flex items-center">
                                <a
                                  className="typo-module_t-body-md-strong__B-Sd1 typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9 link-module_link__Nwimt link-module_underline-mode-onlyWhenHover__alkql link-module_monochrome__yqKNC block truncate max-w-full"
                                  icon=""
                                  href="/address/0x6a1d85c9876ea93ee460ca1d36ae7d95d0cd8f05"
                                >
                                  M Gold 20 Proxy
                                </a>
                              </div>
                            </div>
                            <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3 hidden">
                              <div className="badge-module_badge__kTvKz badge-module_info-solid__DSKnf badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs">
                                  Deprecated
                                </span>
                              </div>
                            </div>
                            <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3 hidden">
                              <div className="badge-module_badge__kTvKz badge-module_default-solid__76z0J badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs">
                                  Logic
                                </span>
                              </div>
                            </div>
                            <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3 hidden">
                              <div className="badge-module_badge__kTvKz badge-module_primary-solid__T7WuZ badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs">
                                  System Contract
                                </span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "left" }}
                        >
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                            0x6a1d…8f05
                          </div>
                        </td>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "left" }}
                        >
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                            Token
                          </div>
                        </td>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "right" }}
                        >
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                            0
                          </div>
                        </td>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "right" }}
                        >
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                            11 Oct 2024
                          </div>
                        </td>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "right" }}
                        >
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                            7 mins ago
                          </div>
                        </td>
                      </tr>


                      <tr className='ronin-table-row'>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "left" }}
                        >
                          <div
                            className="flex items-center gap-8"
                            data-address="0x09736b41ba78633d435e06019dc1a79b1545babc"
                          >
                            <div className="flex items-center gap-12 truncate max-w-full">
                              <div className="image-wrapper-module_container__5gv1w image-wrapper-module_sm__r69hP shrink-0">
                                <svg viewBox="0 0 20 20" width="24" height="24">
                                  <path
                                    fill="currentColor"
                                    fillRule="evenodd"
                                    d="M5 2h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Zm2 4.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5H7ZM6.25 10A.75.75 0 0 1 7 9.25h6a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75ZM7 12.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5H7Z"
                                    clipRule="evenodd"
                                  ></path>
                                </svg>
                              </div>
                              <div className="flex items-center">
                                <a
                                  className="typo-module_t-body-md-strong__B-Sd1 typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9 link-module_link__Nwimt link-module_underline-mode-onlyWhenHover__alkql link-module_monochrome__yqKNC block truncate max-w-full"
                                  icon=""
                                  href="/address/0x09736b41ba78633d435e06019dc1a79b1545babc"
                                >
                                  NFT721 Proxy
                                </a>
                              </div>
                            </div>
                            <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3 hidden">
                              <div className="badge-module_badge__kTvKz badge-module_info-solid__DSKnf badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs">
                                  Deprecated
                                </span>
                              </div>
                            </div>
                            <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3 hidden">
                              <div className="badge-module_badge__kTvKz badge-module_default-solid__76z0J badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs">
                                  Logic
                                </span>
                              </div>
                            </div>
                            <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3 hidden">
                              <div className="badge-module_badge__kTvKz badge-module_primary-solid__T7WuZ badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs">
                                  System Contract
                                </span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "left" }}
                        >
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                            0x0973…babc
                          </div>
                        </td>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "left" }}
                        >
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                            Collectible
                          </div>
                        </td>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "right" }}
                        >
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                            2
                          </div>
                        </td>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "right" }}
                        >
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                            11 Oct 2024
                          </div>
                        </td>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "right" }}
                        >
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                            4 mins ago
                          </div>
                        </td>
                      </tr>
                      <tr className='ronin-table-row'>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "left" }}
                        >
                          <div
                            className="flex items-center gap-8"
                            data-address="0xd8002ce76dc1dfccd1a52069edc81fa03657aac0"
                          >
                            <div className="flex items-center gap-12 truncate max-w-full">
                              <div className="image-wrapper-module_container__5gv1w image-wrapper-module_sm__r69hP shrink-0">
                                <svg viewBox="0 0 20 20" width="24" height="24">
                                  <path
                                    fill="currentColor"
                                    fillRule="evenodd"
                                    d="M5 2h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Zm2 4.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5H7ZM6.25 10A.75.75 0 0 1 7 9.25h6a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75ZM7 12.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5H7Z"
                                    clipRule="evenodd"
                                  ></path>
                                </svg>
                              </div>
                              <div className="flex items-center">
                                <a
                                  className="typo-module_t-body-md-strong__B-Sd1 typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9 link-module_link__Nwimt link-module_underline-mode-onlyWhenHover__alkql link-module_monochrome__yqKNC block truncate max-w-full"
                                  icon=""
                                  href="/address/0xd8002ce76dc1dfccd1a52069edc81fa03657aac0"
                                >
                                  NFT721
                                </a>
                              </div>
                            </div>
                            <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3 hidden">
                              <div className="badge-module_badge__kTvKz badge-module_info-solid__DSKnf badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs">
                                  Deprecated
                                </span>
                              </div>
                            </div>
                            <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3 hidden">
                              <div className="badge-module_badge__kTvKz badge-module_default-solid__76z0J badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs">
                                  Logic
                                </span>
                              </div>
                            </div>
                            <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3 hidden">
                              <div className="badge-module_badge__kTvKz badge-module_primary-solid__T7WuZ badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs">
                                  System Contract
                                </span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "left" }}
                        >
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                            0xd800…aac0
                          </div>
                        </td>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "left" }}
                        >
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                            Collectible
                          </div>
                        </td>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "right" }}
                        >
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                            0
                          </div>
                        </td>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "right" }}
                        >
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                            11 Oct 2024
                          </div>
                        </td>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "right" }}
                        >
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                            2 days ago
                          </div>
                        </td>
                      </tr>
                      <tr className='ronin-table-row'>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "left" }}
                        >
                          <div
                            className="flex items-center gap-8"
                            data-address="0x554bced1db572e16fdf4c8a6f23a301f7eb0293b"
                          >
                            <div className="flex items-center gap-12 truncate max-w-full">
                              <div className="image-wrapper-module_container__5gv1w image-wrapper-module_sm__r69hP shrink-0">
                                <svg viewBox="0 0 20 20" width="24" height="24">
                                  <path
                                    fill="currentColor"
                                    fillRule="evenodd"
                                    d="M5 2h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Zm2 4.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5H7ZM6.25 10A.75.75 0 0 1 7 9.25h6a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75ZM7 12.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5H7Z"
                                    clipRule="evenodd"
                                  ></path>
                                </svg>
                              </div>
                              <div className="flex items-center">
                                <a
                                  className="typo-module_t-body-md-strong__B-Sd1 typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9 link-module_link__Nwimt link-module_underline-mode-onlyWhenHover__alkql link-module_monochrome__yqKNC block truncate max-w-full"
                                  icon=""
                                  href="/address/0x554bced1db572e16fdf4c8a6f23a301f7eb0293b"
                                >
                                  NFT721 Proxy
                                </a>
                              </div>
                            </div>
                            <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3 hidden">
                              <div className="badge-module_badge__kTvKz badge-module_info-solid__DSKnf badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs">
                                  Deprecated
                                </span>
                              </div>
                            </div>
                            <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3 hidden">
                              <div className="badge-module_badge__kTvKz badge-module_default-solid__76z0J badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs">
                                  Logic
                                </span>
                              </div>
                            </div>
                            <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3 hidden">
                              <div className="badge-module_badge__kTvKz badge-module_primary-solid__T7WuZ badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs">
                                  System Contract
                                </span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "left" }}
                        >
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                            0x554b…293b
                          </div>
                        </td>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "left" }}
                        >
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                            Collectible
                          </div>
                        </td>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "right" }}
                        >
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                            2
                          </div>
                        </td>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "right" }}
                        >
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                            11 Oct 2024
                          </div>
                        </td>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "right" }}
                        >
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                            6 secs ago
                          </div>
                        </td>
                      </tr>

                      <tr className='ronin-table-row'>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "left" }}
                        >
                          <div
                            className="flex items-center gap-8"
                            data-address="0x7d21b72c6940491740eab0395c3cd059e4eb0b8a"
                          >
                            <div className="flex items-center gap-12 truncate max-w-full">
                              <div className="image-wrapper-module_container__5gv1w image-wrapper-module_sm__r69hP shrink-0">
                                <svg viewBox="0 0 20 20" width="24" height="24">
                                  <path
                                    fill="currentColor"
                                    fillRule="evenodd"
                                    d="M5 2h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Zm2 4.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5H7ZM6.25 10A.75.75 0 0 1 7 9.25h6a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75ZM7 12.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5H7Z"
                                    clipRule="evenodd"
                                  ></path>
                                </svg>
                              </div>
                              <div className="flex items-center">
                                <a
                                  className="typo-module_t-body-md-strong__B-Sd1 typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9 link-module_link__Nwimt link-module_underline-mode-onlyWhenHover__alkql link-module_monochrome__yqKNC block truncate max-w-full"
                                  icon=""
                                  href="/address/0x7d21b72c6940491740eab0395c3cd059e4eb0b8a"
                                >
                                  NFT721
                                </a>
                              </div>
                            </div>
                            <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3 hidden">
                              <div className="badge-module_badge__kTvKz badge-module_info-solid__DSKnf badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs">
                                  Deprecated
                                </span>
                              </div>
                            </div>
                            <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3 hidden">
                              <div className="badge-module_badge__kTvKz badge-module_default-solid__76z0J badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs">
                                  Logic
                                </span>
                              </div>
                            </div>
                            <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3 hidden">
                              <div className="badge-module_badge__kTvKz badge-module_primary-solid__T7WuZ badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs">
                                  System Contract
                                </span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "left" }}
                        >
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                            0x7d21…0b8a
                          </div>
                        </td>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "left" }}
                        >
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                            Collectible
                          </div>
                        </td>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "right" }}
                        >
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                            0
                          </div>
                        </td>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "right" }}
                        >
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                            11 Oct 2024
                          </div>
                        </td>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "right" }}
                        >
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                            2 days ago
                          </div>
                        </td>
                      </tr>

                      <tr className='ronin-table-row'>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "left" }}
                        >
                          <div
                            className="flex items-center gap-8"
                            data-address="0x2b60a1093a3d5ced568485f486b3a7de9003ce13"
                          >
                            <div className="flex items-center gap-12 truncate max-w-full">
                              <div className="image-wrapper-module_container__5gv1w image-wrapper-module_sm__r69hP shrink-0">
                                <svg viewBox="0 0 20 20" width="24" height="24">
                                  <path
                                    fill="currentColor"
                                    fillRule="evenodd"
                                    d="M5 2h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Zm2 4.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5H7ZM6.25 10A.75.75 0 0 1 7 9.25h6a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75ZM7 12.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5H7Z"
                                    clipRule="evenodd"
                                  ></path>
                                </svg>
                              </div>
                              <div className="flex items-center">
                                <a
                                  className="typo-module_t-body-md-strong__B-Sd1 typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9 link-module_link__Nwimt link-module_underline-mode-onlyWhenHover__alkql link-module_monochrome__yqKNC block truncate max-w-full"
                                  icon=""
                                  href="/address/0x2b60a1093a3d5ced568485f486b3a7de9003ce13"
                                >
                                  Genesis Heroes 721 Vault Proxy
                                </a>
                              </div>
                            </div>
                            <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3 hidden">
                              <div className="badge-module_badge__kTvKz badge-module_info-solid__DSKnf badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs">
                                  Deprecated
                                </span>
                              </div>
                            </div>
                            <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3 hidden">
                              <div className="badge-module_badge__kTvKz badge-module_default-solid__76z0J badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs">
                                  Logic
                                </span>
                              </div>
                            </div>
                            <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3 hidden">
                              <div className="badge-module_badge__kTvKz badge-module_primary-solid__T7WuZ badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs">
                                  System Contract
                                </span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "left" }}
                        >
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                            0x2b60…ce13
                          </div>
                        </td>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "left" }}
                        >
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                            Contract
                          </div>
                        </td>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "right" }}
                        >
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                            0
                          </div>
                        </td>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "right" }}
                        >
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                            11 Oct 2024
                          </div>
                        </td>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "right" }}
                        >
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                            19 secs ago
                          </div>
                        </td>
                      </tr>

                      <tr className='ronin-table-row'>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "left" }}
                        >
                          <div
                            className="flex items-center gap-8"
                            data-address="0xed541c542e211fe61a532f156867de3f736c6086"
                          >
                            <div className="flex items-center gap-12 truncate max-w-full">
                              <div className="image-wrapper-module_container__5gv1w image-wrapper-module_sm__r69hP shrink-0">
                                <svg viewBox="0 0 20 20" width="24" height="24">
                                  <path
                                    fill="currentColor"
                                    fillRule="evenodd"
                                    d="M5 2h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Zm2 4.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5H7ZM6.25 10A.75.75 0 0 1 7 9.25h6a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75ZM7 12.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5H7Z"
                                    clipRule="evenodd"
                                  ></path>
                                </svg>
                              </div>
                              <div className="flex items-center">
                                <a
                                  className="typo-module_t-body-md-strong__B-Sd1 typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9 link-module_link__Nwimt link-module_underline-mode-onlyWhenHover__alkql link-module_monochrome__yqKNC block truncate max-w-full"
                                  icon=""
                                  href="/address/0xed541c542e211fe61a532f156867de3f736c6086"
                                >
                                  Genesis Heroes 721 Proxy
                                </a>
                              </div>
                            </div>
                            <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3 hidden">
                              <div className="badge-module_badge__kTvKz badge-module_info-solid__DSKnf badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs">
                                  Deprecated
                                </span>
                              </div>
                            </div>
                            <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3 hidden">
                              <div className="badge-module_badge__kTvKz badge-module_default-solid__76z0J badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs">
                                  Logic
                                </span>
                              </div>
                            </div>
                            <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3 hidden">
                              <div className="badge-module_badge__kTvKz badge-module_primary-solid__T7WuZ badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs">
                                  System Contract
                                </span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "left" }}
                        >
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                            0xed54…6086
                          </div>
                        </td>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "left" }}
                        >
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                            Collectible
                          </div>
                        </td>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "right" }}
                        >
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                            2
                          </div>
                        </td>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "right" }}
                        >
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                            11 Oct 2024
                          </div>
                        </td>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "right" }}
                        >
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                            2 secs ago
                          </div>
                        </td>
                      </tr>

                      <tr className='ronin-table-row'>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "left" }}
                        >
                          <div
                            className="flex items-center gap-8"
                            data-address="0x83be7f9c9a7d6392c8121695b6f0985cdc5eff81"
                          >
                            <div className="flex items-center gap-12 truncate max-w-full">
                              <div className="image-wrapper-module_container__5gv1w image-wrapper-module_sm__r69hP shrink-0">
                                <svg viewBox="0 0 20 20" width="24" height="24">
                                  <path
                                    fill="currentColor"
                                    fillRule="evenodd"
                                    d="M5 2h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Zm2 4.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5H7ZM6.25 10A.75.75 0 0 1 7 9.25h6a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75ZM7 12.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5H7Z"
                                    clipRule="evenodd"
                                  ></path>
                                </svg>
                              </div>
                              <div className="flex items-center">
                                <a
                                  className="typo-module_t-body-md-strong__B-Sd1 typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9 link-module_link__Nwimt link-module_underline-mode-onlyWhenHover__alkql link-module_monochrome__yqKNC block truncate max-w-full"
                                  icon=""
                                  href="/address/0x83be7f9c9a7d6392c8121695b6f0985cdc5eff81"
                                >
                                  Genesis Heroes 721
                                </a>
                              </div>
                            </div>
                            <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3 hidden">
                              <div className="badge-module_badge__kTvKz badge-module_info-solid__DSKnf badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs">
                                  Deprecated
                                </span>
                              </div>
                            </div>
                            <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3 hidden">
                              <div className="badge-module_badge__kTvKz badge-module_default-solid__76z0J badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs">
                                  Logic
                                </span>
                              </div>
                            </div>
                            <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3 hidden">
                              <div className="badge-module_badge__kTvKz badge-module_primary-solid__T7WuZ badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs">
                                  System Contract
                                </span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "left" }}
                        >
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                            0x83be…ff81
                          </div>
                        </td>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "left" }}
                        >
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                            Collectible
                          </div>
                        </td>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "right" }}
                        >
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                            0
                          </div>
                        </td>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "right" }}
                        >
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                            11 Oct 2024
                          </div>
                        </td>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "right" }}
                        >
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                            2 days ago
                          </div>
                        </td>
                      </tr>

                      <tr className='ronin-table-row'>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "left" }}
                        >
                          <div
                            className="flex items-center gap-8"
                            data-address="0x416f9b0d4660b01b208aa22c092a9a5f22a379c1"
                          >
                            <div className="flex items-center gap-12 truncate max-w-full">
                              <div className="image-wrapper-module_container__5gv1w image-wrapper-module_sm__r69hP shrink-0">
                                <svg viewBox="0 0 20 20" width="24" height="24">
                                  <path
                                    fill="currentColor"
                                    fillRule="evenodd"
                                    d="M5 2h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Zm2 4.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5H7ZM6.25 10A.75.75 0 0 1 7 9.25h6a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75ZM7 12.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5H7Z"
                                    clipRule="evenodd"
                                  ></path>
                                </svg>
                              </div>
                              <div className="flex items-center">
                                <a
                                  className="typo-module_t-body-md-strong__B-Sd1 typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9 link-module_link__Nwimt link-module_underline-mode-onlyWhenHover__alkql link-module_monochrome__yqKNC block truncate max-w-full"
                                  icon=""
                                  href="/address/0x416f9b0d4660b01b208aa22c092a9a5f22a379c1"
                                >
                                  LUAUSD
                                </a>
                              </div>
                            </div>
                            <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3 hidden">
                              <div className="badge-module_badge__kTvKz badge-module_info-solid__DSKnf badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs">
                                  Deprecated
                                </span>
                              </div>
                            </div>
                            <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3 hidden">
                              <div className="badge-module_badge__kTvKz badge-module_default-solid__76z0J badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs">
                                  Logic
                                </span>
                              </div>
                            </div>
                            <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3 hidden">
                              <div className="badge-module_badge__kTvKz badge-module_primary-solid__T7WuZ badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs">
                                  System Contract
                                </span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "left" }}
                        >
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                            0x416f…79c1
                          </div>
                        </td>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "left" }}
                        >
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                            Token
                          </div>
                        </td>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "right" }}
                        >
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                            0
                          </div>
                        </td>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "right" }}
                        >
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                            10 Oct 2024
                          </div>
                        </td>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "right" }}
                        >
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                            3 days ago
                          </div>
                        </td>
                      </tr>

                      <tr className='ronin-table-row'>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "left" }}
                        >
                          <div
                            className="flex items-center gap-8"
                            data-address="0x9f8e937803bea0c99563e6cca84111d2beb782d0"
                          >
                            <div className="flex items-center gap-12 truncate max-w-full">
                              <div className="image-wrapper-module_container__5gv1w image-wrapper-module_sm__r69hP shrink-0">
                                <svg viewBox="0 0 20 20" width="24" height="24">
                                  <path
                                    fill="currentColor"
                                    fillRule="evenodd"
                                    d="M5 2h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Zm2 4.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5H7ZM6.25 10A.75.75 0 0 1 7 9.25h6a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75ZM7 12.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5H7Z"
                                    clipRule="evenodd"
                                  ></path>
                                </svg>
                              </div>
                              <div className="flex items-center">
                                <a
                                  className="typo-module_t-body-md-strong__B-Sd1 typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9 link-module_link__Nwimt link-module_underline-mode-onlyWhenHover__alkql link-module_monochrome__yqKNC block truncate max-w-full"
                                  icon=""
                                  href="/address/0x9f8e937803bea0c99563e6cca84111d2beb782d0"
                                >
                                  LUA
                                </a>
                              </div>
                            </div>
                            <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3 hidden">
                              <div className="badge-module_badge__kTvKz badge-module_info-solid__DSKnf badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs">
                                  Deprecated
                                </span>
                              </div>
                            </div>
                            <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3 hidden">
                              <div className="badge-module_badge__kTvKz badge-module_default-solid__76z0J badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs">
                                  Logic
                                </span>
                              </div>
                            </div>
                            <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3 hidden">
                              <div className="badge-module_badge__kTvKz badge-module_primary-solid__T7WuZ badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs">
                                  System Contract
                                </span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "left" }}
                        >
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                            0x9f8e…82d0
                          </div>
                        </td>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "left" }}
                        >
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                            Token
                          </div>
                        </td>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "right" }}
                        >
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                            0
                          </div>
                        </td>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "right" }}
                        >
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                            10 Oct 2024
                          </div>
                        </td>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "right" }}
                        >
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                            3 days ago
                          </div>
                        </td>

                      </tr>

                      <tr className='ronin-table-row'>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "left" }}
                        >
                          <div
                            className="flex items-center gap-8"
                            data-address="0xd97c9707528141b3b505eec03ee90aebf055a901"
                          >
                            <div className="flex items-center gap-12 truncate max-w-full">
                              <div className="image-wrapper-module_container__5gv1w image-wrapper-module_sm__r69hP shrink-0">
                                <svg viewBox="0 0 20 20" width="24" height="24">
                                  <path
                                    fill="currentColor"
                                    fillRule="evenodd"
                                    d="M5 2h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Zm2 4.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5H7ZM6.25 10A.75.75 0 0 1 7 9.25h6a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75ZM7 12.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5H7Z"
                                    clipRule="evenodd"
                                  ></path>
                                </svg>
                              </div>
                              <div className="flex items-center">
                                <a
                                  className="typo-module_t-body-md-strong__B-Sd1 typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9 link-module_link__Nwimt link-module_underline-mode-onlyWhenHover__alkql link-module_monochrome__yqKNC block truncate max-w-full"
                                  icon=""
                                  href="/address/0xd97c9707528141b3b505eec03ee90aebf055a901"
                                >
                                  Kalodium Gacha Proxy
                                </a>
                              </div>
                            </div>
                            <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3 hidden">
                              <div className="badge-module_badge__kTvKz badge-module_info-solid__DSKnf badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs">
                                  Deprecated
                                </span>
                              </div>
                            </div>
                            <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3 hidden">
                              <div className="badge-module_badge__kTvKz badge-module_default-solid__76z0J badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs">
                                  Logic
                                </span>
                              </div>
                            </div>
                            <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3 hidden">
                              <div className="badge-module_badge__kTvKz badge-module_primary-solid__T7WuZ badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs">
                                  System Contract
                                </span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "left" }}
                        >
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                            0xd97c…a901
                          </div>
                        </td>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "left" }}
                        >
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                            Contract
                          </div>
                        </td>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "right" }}
                        >
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                            213,528
                          </div>
                        </td>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "right" }}
                        >
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                            8 Oct 2024
                          </div>
                        </td>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "right" }}
                        >
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                            18 secs ago
                          </div>
                        </td>
                      </tr>

                      <tr className='ronin-table-row'>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "left" }}
                        >
                          <div
                            className="flex items-center gap-8"
                            data-address="0x5c41998304eab25eab4618f0866bc9053ae4fa9a"
                          >
                            <div className="flex items-center gap-12 truncate max-w-full">
                              <div className="image-wrapper-module_container__5gv1w image-wrapper-module_sm__r69hP shrink-0">
                                <svg viewBox="0 0 20 20" width="24" height="24">
                                  <path
                                    fill="currentColor"
                                    fillRule="evenodd"
                                    d="M5 2h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Zm2 4.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5H7ZM6.25 10A.75.75 0 0 1 7 9.25h6a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75ZM7 12.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5H7Z"
                                    clipRule="evenodd"
                                  ></path>
                                </svg>
                              </div>
                              <div className="flex items-center">
                                <a
                                  className="typo-module_t-body-md-strong__B-Sd1 typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9 link-module_link__Nwimt link-module_underline-mode-onlyWhenHover__alkql link-module_monochrome__yqKNC block truncate max-w-full"
                                  icon=""
                                  href="/address/0x5c41998304eab25eab4618f0866bc9053ae4fa9a"
                                >
                                  Proxy Admin
                                </a>
                              </div>
                            </div>
                            <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3 hidden">
                              <div className="badge-module_badge__kTvKz badge-module_info-solid__DSKnf badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs">
                                  Deprecated
                                </span>
                              </div>
                            </div>
                            <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3 hidden">
                              <div className="badge-module_badge__kTvKz badge-module_default-solid__76z0J badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs">
                                  Logic
                                </span>
                              </div>
                            </div>
                            <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3 hidden">
                              <div className="badge-module_badge__kTvKz badge-module_primary-solid__T7WuZ badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs">
                                  System Contract
                                </span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "left" }}
                        >
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                            0x5c41…fa9a
                          </div>
                        </td>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "left" }}
                        >
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                            Contract
                          </div>
                        </td>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "right" }}
                        >
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                            0
                          </div>
                        </td>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "right" }}
                        >
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                            8 Oct 2024
                          </div>
                        </td>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "right" }}
                        >
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                            5 days ago
                          </div>
                        </td>
                      </tr>
                      <tr className='ronin-table-row'>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "left" }}
                        >
                          <div
                            className="flex items-center gap-8"
                            data-address="0x342fcfc16943a930251d15fccdcd95104f9b4e5f"
                          >
                            <div className="flex items-center gap-12 truncate max-w-full">
                              <div className="image-wrapper-module_container__5gv1w image-wrapper-module_sm__r69hP shrink-0">
                                <svg viewBox="0 0 20 20" width="24" height="24">
                                  <path
                                    fill="currentColor"
                                    fillRule="evenodd"
                                    d="M5 2h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Zm2 4.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5H7ZM6.25 10A.75.75 0 0 1 7 9.25h6a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75ZM7 12.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5H7Z"
                                    clipRule="evenodd"
                                  ></path>
                                </svg>
                              </div>
                              <div className="flex items-center">
                                <a
                                  className="typo-module_t-body-md-strong__B-Sd1 typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9 link-module_link__Nwimt link-module_underline-mode-onlyWhenHover__alkql link-module_monochrome__yqKNC block truncate max-w-full"
                                  icon=""
                                  href="/address/0x342fcfc16943a930251d15fccdcd95104f9b4e5f"
                                >
                                  Cambria Founders Bridged
                                </a>
                              </div>
                            </div>
                            <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3 hidden">
                              <div className="badge-module_badge__kTvKz badge-module_info-solid__DSKnf badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs">
                                  Deprecated
                                </span>
                              </div>
                            </div>
                            <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3 hidden">
                              <div className="badge-module_badge__kTvKz badge-module_default-solid__76z0J badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs">
                                  Logic
                                </span>
                              </div>
                            </div>
                            <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3 hidden">
                              <div className="badge-module_badge__kTvKz badge-module_primary-solid__T7WuZ badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs">
                                  System Contract
                                </span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "left" }}
                        >
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                            0x342f…4e5f
                          </div>
                        </td>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "left" }}
                        >
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                            Collectible
                          </div>
                        </td>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "right" }}
                        >
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                            0
                          </div>
                        </td>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "right" }}
                        >
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                            8 Oct 2024
                          </div>
                        </td>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "right" }}
                        >
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                            5 days ago
                          </div>
                        </td>
                      </tr>
                      <tr className='ronin-table-row'>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "left" }}
                        >
                          <div
                            className="flex items-center gap-8"
                            data-address="0xcd4f1cd738cf862995239b5b7d9ff09cffc22399"
                          >
                            <div className="flex items-center gap-12 truncate max-w-full">
                              <div className="image-wrapper-module_container__5gv1w image-wrapper-module_sm__r69hP shrink-0">
                                <svg viewBox="0 0 20 20" width="24" height="24">
                                  <path
                                    fill="currentColor"
                                    fillRule="evenodd"
                                    d="M5 2h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Zm2 4.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5H7ZM6.25 10A.75.75 0 0 1 7 9.25h6a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75ZM7 12.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5H7Z"
                                    clipRule="evenodd"
                                  ></path>
                                </svg>
                              </div>
                              <div className="flex items-center">
                                <a
                                  className="typo-module_t-body-md-strong__B-Sd1 typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9 link-module_link__Nwimt link-module_underline-mode-onlyWhenHover__alkql link-module_monochrome__yqKNC block truncate max-w-full"
                                  icon=""
                                  href="/address/0xcd4f1cd738cf862995239b5b7d9ff09cffc22399"
                                >
                                  Check In Upgradeable Proxy
                                </a>
                              </div>
                            </div>
                            <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3 hidden">
                              <div className="badge-module_badge__kTvKz badge-module_info-solid__DSKnf badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs">
                                  Deprecated
                                </span>
                              </div>
                            </div>
                            <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3 hidden">
                              <div className="badge-module_badge__kTvKz badge-module_default-solid__76z0J badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs">
                                  Logic
                                </span>
                              </div>
                            </div>
                            <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3 hidden">
                              <div className="badge-module_badge__kTvKz badge-module_primary-solid__T7WuZ badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs">
                                  System Contract
                                </span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "left" }}
                        >
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                            0xcd4f…2399
                          </div>
                        </td>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "left" }}
                        >
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                            Contract
                          </div>
                        </td>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "right" }}
                        >
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                            325
                          </div>
                        </td>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "right" }}
                        >
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                            7 Oct 2024
                          </div>
                        </td>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "right" }}
                        >
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                            5 mins ago
                          </div>
                        </td>
                      </tr>

                      <tr className='ronin-table-row'>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "left" }}
                        >
                          <div
                            className="flex items-center gap-8"
                            data-address="0x81588c2db2f47851960dcdc1366a2331355badf5"
                          >
                            <div className="flex items-center gap-12 truncate max-w-full">
                              <div className="image-wrapper-module_container__5gv1w image-wrapper-module_sm__r69hP shrink-0">
                                <svg viewBox="0 0 20 20" width="24" height="24">
                                  <path
                                    fill="currentColor"
                                    fillRule="evenodd"
                                    d="M5 2h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Zm2 4.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5H7ZM6.25 10A.75.75 0 0 1 7 9.25h6a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75ZM7 12.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5H7Z"
                                    clipRule="evenodd"
                                  ></path>
                                </svg>
                              </div>
                              <div className="flex items-center">
                                <a
                                  className="typo-module_t-body-md-strong__B-Sd1 typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9 link-module_link__Nwimt link-module_underline-mode-onlyWhenHover__alkql link-module_monochrome__yqKNC block truncate max-w-full"
                                  icon=""
                                  href="/address/0x81588c2db2f47851960dcdc1366a2331355badf5"
                                >
                                  Reward Distributor Proxy For Wallet Quest
                                </a>
                              </div>
                            </div>
                            <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3 hidden">
                              <div className="badge-module_badge__kTvKz badge-module_info-solid__DSKnf badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs">
                                  Deprecated
                                </span>
                              </div>
                            </div>
                            <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3 hidden">
                              <div className="badge-module_badge__kTvKz badge-module_default-solid__76z0J badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs">
                                  Logic
                                </span>
                              </div>
                            </div>
                            <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3 hidden">
                              <div className="badge-module_badge__kTvKz badge-module_primary-solid__T7WuZ badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs">
                                  System Contract
                                </span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "left" }}
                        >
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                            0x8158…adf5
                          </div>
                        </td>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "left" }}
                        >
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                            Contract
                          </div>
                        </td>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "right" }}
                        >
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                            3
                          </div>
                        </td>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "right" }}
                        >
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                            7 Oct 2024
                          </div>
                        </td>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "right" }}
                        >
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                            5 mins ago
                          </div>
                        </td>

                      </tr>
                      <tr className='ronin-table-row'>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "left" }}
                        >
                          <div
                            className="flex items-center gap-8"
                            data-address="0x2a6120978d3f868299aa020303b93b9a90f257cf"
                          >
                            <div className="flex items-center gap-12 truncate max-w-full">
                              <div className="image-wrapper-module_container__5gv1w image-wrapper-module_sm__r69hP shrink-0">
                                <img
                                  src="https://cdn.skymavis.com/ronin/2020/erc721/0x2a6120978d3f868299aa020303b93b9a90f257cf/logo.png"
                                  className="rounded-[6px]"
                                  width="100%"
                                  height="100%"
                                  alt="address-icon"
                                />
                              </div>
                              <div className="flex items-center">
                                <a
                                  className="typo-module_t-body-md-strong__B-Sd1 typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9 link-module_link__Nwimt link-module_underline-mode-onlyWhenHover__alkql link-module_monochrome__yqKNC block truncate max-w-full"
                                  icon=""
                                  href="/address/0x2a6120978d3f868299aa020303b93b9a90f257cf"
                                >
                                  Fight League Characters Proxy
                                </a>
                              </div>
                            </div>
                            <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3 hidden">
                              <div className="badge-module_badge__kTvKz badge-module_info-solid__DSKnf badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs">
                                  Deprecated
                                </span>
                              </div>
                            </div>
                            <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3 hidden">
                              <div className="badge-module_badge__kTvKz badge-module_default-solid__76z0J badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs">
                                  Logic
                                </span>
                              </div>
                            </div>
                            <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3 hidden">
                              <div className="badge-module_badge__kTvKz badge-module_primary-solid__T7WuZ badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs">
                                  System Contract
                                </span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "left" }}
                        >
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                            0x2a61…57cf
                          </div>
                        </td>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "left" }}
                        >
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                            Collectible
                          </div>
                        </td>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "right" }}
                        >
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                            686
                          </div>
                        </td>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "right" }}
                        >
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                            7 Oct 2024
                          </div>
                        </td>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "right" }}
                        >
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                            5 mins ago
                          </div>
                        </td>
                      </tr>

                      <tr className='ronin-table-row'>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "left" }}
                        >
                          <div
                            className="flex items-center gap-8"
                            data-address="0x7dd814c6408382977ae85ed69ee8a81da5886be7"
                          >
                            <div className="flex items-center gap-12 truncate max-w-full">
                              <div className="image-wrapper-module_container__5gv1w image-wrapper-module_sm__r69hP shrink-0">
                                <svg viewBox="0 0 20 20" width="24" height="24">
                                  <path
                                    fill="currentColor"
                                    fillRule="evenodd"
                                    d="M5 2h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Zm2 4.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5H7ZM6.25 10A.75.75 0 0 1 7 9.25h6a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75ZM7 12.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5H7Z"
                                    clipRule="evenodd"
                                  ></path>
                                </svg>
                              </div>
                              <div className="flex items-center">
                                <a
                                  className="typo-module_t-body-md-strong__B-Sd1 typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9 link-module_link__Nwimt link-module_underline-mode-onlyWhenHover__alkql link-module_monochrome__yqKNC block truncate max-w-full"
                                  icon=""
                                  href="/address/0x7dd814c6408382977ae85ed69ee8a81da5886be7"
                                >
                                  Jungle Logic
                                </a>
                              </div>
                            </div>
                            <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3 hidden">
                              <div className="badge-module_badge__kTvKz badge-module_info-solid__DSKnf badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs">
                                  Deprecated
                                </span>
                              </div>
                            </div>
                            <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3 hidden">
                              <div className="badge-module_badge__kTvKz badge-module_default-solid__76z0J badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs">
                                  Logic
                                </span>
                              </div>
                            </div>
                            <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3 hidden">
                              <div className="badge-module_badge__kTvKz badge-module_primary-solid__T7WuZ badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs">
                                  System Contract
                                </span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "left" }}
                        >
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                            0x7dd8…6be7
                          </div>
                        </td>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "left" }}
                        >
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                            Contract
                          </div>
                        </td>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "right" }}
                        >
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                            68
                          </div>
                        </td>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "right" }}
                        >
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                            4 Oct 2024
                          </div>
                        </td>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "right" }}
                        >
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                            5 mins ago
                          </div>
                        </td>
                      </tr>
                      <tr className='ronin-table-row'>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "left" }}
                        >
                          <div
                            className="flex items-center gap-8"
                            data-address="0x418626b8eb6ab317707653ee1b3e2e5c9b84c260"
                          >
                            <div className="flex items-center gap-12 truncate max-w-full">
                              <div className="image-wrapper-module_container__5gv1w image-wrapper-module_sm__r69hP shrink-0">
                                <svg viewBox="0 0 20 20" width="24" height="24">
                                  <path
                                    fill="currentColor"
                                    fillRule="evenodd"
                                    d="M5 2h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Zm2 4.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5H7ZM6.25 10A.75.75 0 0 1 7 9.25h6a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75ZM7 12.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5H7Z"
                                    clipRule="evenodd"
                                  ></path>
                                </svg>
                              </div>
                              <div className="flex items-center">
                                <a
                                  className="typo-module_t-body-md-strong__B-Sd1 typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9 link-module_link__Nwimt link-module_underline-mode-onlyWhenHover__alkql link-module_monochrome__yqKNC block truncate max-w-full"
                                  icon=""
                                  href="/address/0x418626b8eb6ab317707653ee1b3e2e5c9b84c260"
                                >
                                  TMA Item
                                </a>
                              </div>
                            </div>
                            <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3 hidden">
                              <div className="badge-module_badge__kTvKz badge-module_info-solid__DSKnf badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs">
                                  Deprecated
                                </span>
                              </div>
                            </div>
                            <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3 hidden">
                              <div className="badge-module_badge__kTvKz badge-module_default-solid__76z0J badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs">
                                  Logic
                                </span>
                              </div>
                            </div>
                            <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3 hidden">
                              <div className="badge-module_badge__kTvKz badge-module_primary-solid__T7WuZ badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs">
                                  System Contract
                                </span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "left" }}
                        >
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                            0x4186…c260
                          </div>
                        </td>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "left" }}
                        >
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                            Collectible
                          </div>
                        </td>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "right" }}
                        >
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                            0
                          </div>
                        </td>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "right" }}
                        >
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                            3 Oct 2024
                          </div>
                        </td>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "right" }}
                        >
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                            6 days ago
                          </div>
                        </td>
                      </tr>
                      <tr className='ronin-table-row'>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "left" }}
                        >
                          <div
                            className="flex items-center gap-8"
                            data-address="0x67590a32092786a9a0e366ebb9b74eb5fa5d1bd9"
                          >
                            <div className="flex items-center gap-12 truncate max-w-full">
                              <div className="image-wrapper-module_container__5gv1w image-wrapper-module_sm__r69hP shrink-0">
                                <svg viewBox="0 0 20 20" width="24" height="24">
                                  <path
                                    fill="currentColor"
                                    fillRule="evenodd"
                                    d="M5 2h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Zm2 4.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5H7ZM6.25 10A.75.75 0 0 1 7 9.25h6a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75ZM7 12.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5H7Z"
                                    clipRule="evenodd"
                                  ></path>
                                </svg>
                              </div>
                              <div className="flex items-center">
                                <a
                                  className="typo-module_t-body-md-strong__B-Sd1 typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9 link-module_link__Nwimt link-module_underline-mode-onlyWhenHover__alkql link-module_monochrome__yqKNC block truncate max-w-full"
                                  icon=""
                                  href="/address/0x67590a32092786a9a0e366ebb9b74eb5fa5d1bd9"
                                >
                                  TMA Gacha
                                </a>
                              </div>
                            </div>
                            <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3 hidden">
                              <div className="badge-module_badge__kTvKz badge-module_info-solid__DSKnf badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs">
                                  Deprecated
                                </span>
                              </div>
                            </div>
                            <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3 hidden">
                              <div className="badge-module_badge__kTvKz badge-module_default-solid__76z0J badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs">
                                  Logic
                                </span>
                              </div>
                            </div>
                            <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3 hidden">
                              <div className="badge-module_badge__kTvKz badge-module_primary-solid__T7WuZ badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs">
                                  System Contract
                                </span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "left" }}
                        >
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                            0x6759…1bd9
                          </div>
                        </td>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "left" }}
                        >
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                            Contract
                          </div>
                        </td>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "right" }}
                        >
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                            0
                          </div>
                        </td>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "right" }}
                        >
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                            3 Oct 2024
                          </div>
                        </td>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "right" }}
                        >
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                            10 days ago
                          </div>
                        </td>
                      </tr>
                      <tr className='ronin-table-row'>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "left" }}
                        >
                          <div
                            className="flex items-center gap-8"
                            data-address="0xedea32317798f494c61465e0b988a99f9b1a1c9d"
                          >
                            <div className="flex items-center gap-12 truncate max-w-full">
                              <div className="image-wrapper-module_container__5gv1w image-wrapper-module_sm__r69hP shrink-0">
                                <svg viewBox="0 0 20 20" width="24" height="24">
                                  <path
                                    fill="currentColor"
                                    fillRule="evenodd"
                                    d="M5 2h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Zm2 4.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5H7ZM6.25 10A.75.75 0 0 1 7 9.25h6a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75ZM7 12.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5H7Z"
                                    clipRule="evenodd"
                                  ></path>
                                </svg>
                              </div>
                              <div className="flex items-center">
                                <a
                                  className="typo-module_t-body-md-strong__B-Sd1 typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9 link-module_link__Nwimt link-module_underline-mode-onlyWhenHover__alkql link-module_monochrome__yqKNC block truncate max-w-full"
                                  icon=""
                                  href="/address/0xedea32317798f494c61465e0b988a99f9b1a1c9d"
                                >
                                  TMA Gacha
                                </a>
                              </div>
                            </div>
                            <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3 hidden">
                              <div className="badge-module_badge__kTvKz badge-module_info-solid__DSKnf badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs">
                                  Deprecated
                                </span>
                              </div>
                            </div>
                            <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3 hidden">
                              <div className="badge-module_badge__kTvKz badge-module_default-solid__76z0J badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs">
                                  Logic
                                </span>
                              </div>
                            </div>
                            <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3 hidden">
                              <div className="badge-module_badge__kTvKz badge-module_primary-solid__T7WuZ badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs">
                                  System Contract
                                </span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "left" }}
                        >
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                            0xedea…1c9d
                          </div>
                        </td>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "left" }}
                        >
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                            Contract
                          </div>
                        </td>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "right" }}
                        >
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                            0
                          </div>
                        </td>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "right" }}
                        >
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                            3 Oct 2024
                          </div>
                        </td>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "right" }}
                        >
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                            10 days ago
                          </div>
                        </td>

                      </tr>
                      <tr className='ronin-table-row'>

                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "left" }}
                        >
                          <div
                            className="flex items-center gap-8"
                            data-address="0xd4f8996437e367c202e7b63fc3856c0e8a2b9cfc"
                          >
                            <div className="flex items-center gap-12 truncate max-w-full">
                              <div className="image-wrapper-module_container__5gv1w image-wrapper-module_sm__r69hP shrink-0">
                                <svg viewBox="0 0 20 20" width="24" height="24">
                                  <path
                                    fill="currentColor"
                                    fillRule="evenodd"
                                    d="M5 2h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Zm2 4.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5H7ZM6.25 10A.75.75 0 0 1 7 9.25h6a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75ZM7 12.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5H7Z"
                                    clipRule="evenodd"
                                  ></path>
                                </svg>
                              </div>
                              <div className="flex items-center">
                                <a
                                  className="typo-module_t-body-md-strong__B-Sd1 typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9 link-module_link__Nwimt link-module_underline-mode-onlyWhenHover__alkql link-module_monochrome__yqKNC block truncate max-w-full"
                                  icon=""
                                  href="/address/0xd4f8996437e367c202e7b63fc3856c0e8a2b9cfc"
                                >
                                  TMA Item
                                </a>
                              </div>
                            </div>
                            <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3 hidden">
                              <div className="badge-module_badge__kTvKz badge-module_info-solid__DSKnf badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs">
                                  Deprecated
                                </span>
                              </div>
                            </div>
                            <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3 hidden">
                              <div className="badge-module_badge__kTvKz badge-module_default-solid__76z0J badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs">
                                  Logic
                                </span>
                              </div>
                            </div>
                            <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3 hidden">
                              <div className="badge-module_badge__kTvKz badge-module_primary-solid__T7WuZ badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs">
                                  System Contract
                                </span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "left" }}
                        >
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                            0xd4f8…9cfc
                          </div>
                        </td>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "left" }}
                        >
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                            Collectible
                          </div>
                        </td>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "right" }}
                        >
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                            0
                          </div>
                        </td>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "right" }}
                        >
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                            3 Oct 2024
                          </div>
                        </td>
                        <td
                          className="ronin-table-cell"
                          style={{ textAlign: "right" }}
                        >
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                            10 days ago
                          </div>
                        </td>

                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="pagination-module_container__YETeD mt-40">
              <div className="pagination-module_leftEl__puFRQ">
                <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-md__-HKdi typo-module_neutral__9orA9 pagination-module_content__nlsr4">
                  Show
                </div>
                <div className="dropdown-module_container__iY02y">
                  <div className="dropdown-module_triggerWrapper__nVet0">
                    <div className="form-item-module_form__3-Rfq">
                      <button
                        className="select-module_select-root__iUjOH select-module_wrapper__Hc5F3 select-module_default__LhAiz select-module_variant-filled__mqpkY select-module_has-suffix__cxAEt"
                        type="button"
                      >
                        <div className="select-module_input-wrapper__2e9Sr select-module_has-value__gkGdm">
                          <div className="select-module_input__QFtX8">
                            <div className="dropdown-module_wrapper-selected-option__TdgBl">
                              <div className="dropdown-module_selected-option__TFYEe">
                                25
                              </div>
                            </div>
                          </div>
                        </div>
                        <span className="select-module_suffix__JN2c1">
                          <svg
                            className="select-module_toggle-icon__2Oqot"
                            cursor="pointer"
                            viewBox="0 0 20 20"
                            width="20"
                            height="20"
                          >
                            <path
                              fill="currentColor"
                              fillRule="evenodd"
                              d="M5.47 7.47a.75.75 0 0 1 1.06 0L10 10.94l3.47-3.47a.75.75 0 1 1 1.06 1.06l-4 4a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 0 1 0-1.06Z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-md__-HKdi typo-module_neutral__9orA9 pagination-module_content__nlsr4">
                  contracts
                </div>
              </div>
              <div className="pagination-module_rightEl__Hg04k">
                <div className="pagination-module_input-page__LMvfc">
                  <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-md__-HKdi typo-module_neutral__9orA9 pagination-module_content__nlsr4">
                    Go to page
                  </div>
                  <form className="">
                    <div className="form-item-module_form__3-Rfq text-field-module_input-root__PSsoe">
                      <div className="input-module_container__Gch8D input-module_default__Rk4yp">
                        <div className="input-module_form__2zFJF">
                          <input
                            type="number"
                            min="1"
                            max="28"
                            className="input-module_formControl__oYbNL pagination-module_input__Q2zHx"
                            value="1"
                          />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="pagination-module_page__Dm55O">
                  <button
                    disabled=""
                    className="button-module_button__Z331g button-module_intent-default__f1RNz button-module_size-small__Nes6W button-module_variant-plain__hxRYr button-module_button-root__0roWY"
                    style={{ padding: "12px 5px" }}
                  >
                    <svg viewBox="0 0 20 20" width="20" height="20">
                      <path
                        fill="currentColor"
                        fillRule="evenodd"
                        d="M9.03 6.53a.75.75 0 0 0-1.06-1.06l-4 4a.748.748 0 0 0 0 1.06l4 4a.75.75 0 0 0 1.06-1.06l-2.72-2.72h9.19a.75.75 0 0 0 0-1.5H6.31l2.72-2.72Z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                  <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-md__-HKdi typo-module_neutral__9orA9 pagination-module_page-number__6httT">
                    1/28
                  </div>
                  <button
                    className="button-module_button__Z331g button-module_intent-default__f1RNz button-module_size-small__Nes6W button-module_variant-plain__hxRYr button-module_button-root__0roWY"
                    style={{ padding: "12px 5px" }}
                  >
                    <svg viewBox="0 0 20 20" width="20" height="20">
                      <path
                        fill="currentColor"
                        fillRule="evenodd"
                        d="M12.28 5.22a.75.75 0 1 0-1.06 1.06L13.94 9H4.75a.75.75 0 0 0 0 1.5h9.19l-2.72 2.72a.75.75 0 1 0 1.06 1.06l4-4a.747.747 0 0 0 0-1.06l-4-4Z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Contracts;
