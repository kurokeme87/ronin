import React from "react";
import "./Tokens.css";
import Header from "../components/Header";
const Tokens = () => {
  return (
    <div className=" flex-1 overflow-x-hidden overflow-y-scroll px-[16px] md:px-[54px]">
      <div className="mx-auto max-w-[1180px]">
        <Header />
        <main className="pb-24 pt-16 md:pb-48 md:pt-24">
          <div className="typo-module_t-display-xl__twhe3 typo-module_mobile-t-display-lg__6JAaA typo-module_neutral__9orA9">
            Tokens
          </div>
          <div className="mt-32 md:mt-40">
            <div className="dango-tabs dango-tabs-top tabs-module_tabs__UMeM9 tabs-module_default__ZTiTp tabs-module_pill__q-aBj tabs-module_top__Q00Kf tabs-module_horizontal__BEa1a tabs-module_tabs-root__Fz-je tabs-module_body__3nlu6">
              <div role="tablist" className="dango-tabs-nav">
                <div className="dango-tabs-nav-wrap">
                  <div
                    className="dango-tabs-nav-list"
                    style={{ transform: "translate(0px, 0px)" }}
                  >
                    <div className="dango-tabs-tab dango-tabs-tab-active">
                      <div
                        role="tab"
                        aria-selected="true"
                        className="dango-tabs-tab-btn"
                        tabIndex="0"
                        id="rc-tabs-0-tab-all"
                        aria-controls="rc-tabs-0-panel-all"
                      >
                        All
                      </div>
                    </div>
                    <div className="dango-tabs-tab">
                      <div
                        role="tab"
                        aria-selected="false"
                        className="dango-tabs-tab-btn"
                        tabIndex="0"
                        id="rc-tabs-0-tab-erc20"
                        aria-controls="rc-tabs-0-panel-erc20"
                      >
                        ERC20
                      </div>
                    </div>
                    <div className="dango-tabs-tab">
                      <div
                        role="tab"
                        aria-selected="false"
                        className="dango-tabs-tab-btn"
                        tabIndex="0"
                        id="rc-tabs-0-tab-erc721"
                        aria-controls="rc-tabs-0-panel-erc721"
                      >
                        ERC721
                      </div>
                    </div>
                    <div className="dango-tabs-tab">
                      <div
                        role="tab"
                        aria-selected="false"
                        className="dango-tabs-tab-btn"
                        tabIndex="0"
                        id="rc-tabs-0-tab-erc1155"
                        aria-controls="rc-tabs-0-panel-erc1155"
                      >
                        ERC1155
                      </div>
                    </div>
                    <div
                      className="dango-tabs-ink-bar dango-tabs-ink-bar-animated"
                      style={{ left: "6px", width: "51px" }}
                    ></div>
                  </div>
                </div>
                <div className="dango-tabs-nav-operations dango-tabs-nav-operations-hidden">
                  <button
                    type="button"
                    className="dango-tabs-nav-more"
                    tabIndex="-1"
                    aria-hidden="true"
                    aria-haspopup="listbox"
                    aria-controls="rc-tabs-0-more-popup"
                    id="rc-tabs-0-more"
                    aria-expanded="false"
                    style={{ visibility: "hidden", order: 1 }}
                  >
                    More
                  </button>
                </div>
              </div>
              <div className="dango-tabs-content-holder">
                <div className="dango-tabs-content dango-tabs-content-top">
                  <div
                    role="tabpanel"
                    tabIndex="0"
                    aria-hidden="false"
                    className="dango-tabs-tabpane dango-tabs-tabpane-active"
                    id="rc-tabs-0-panel-all"
                    aria-labelledby="rc-tabs-0-tab-all"
                  ></div>
                  <div
                    role="tabpanel"
                    tabIndex="-1"
                    aria-hidden="true"
                    className="dango-tabs-tabpane"
                    id="rc-tabs-0-panel-erc20"
                    aria-labelledby="rc-tabs-0-tab-erc20"
                    style={{ display: "none" }}
                  ></div>
                  <div
                    role="tabpanel"
                    tabIndex="-1"
                    aria-hidden="true"
                    className="dango-tabs-tabpane"
                    id="rc-tabs-0-panel-erc721"
                    aria-labelledby="rc-tabs-0-tab-erc721"
                    style={{ display: "none" }}
                  ></div>
                  <div
                    role="tabpanel"
                    tabIndex="-1"
                    aria-hidden="true"
                    className="dango-tabs-tabpane"
                    id="rc-tabs-0-panel-erc1155"
                    aria-labelledby="rc-tabs-0-tab-erc1155"
                    style={{ display: "none" }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="mt-16">
              <div className="mb-8">
                <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9">
                  Total 420 token contracts
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
                      href="/token/0xa8754b9fa15fc18bb59458815510e40a12cd2014"
                      style={{ verticalAlign: "inherit" }}
                    ></a>
                    <a
                      className="ronin-table-row ronin-table-row-level-0 table-row cursor-pointer"
                      href="/token/0x32950db2a7164ae833121501c797d79e7b79d74c"
                      style={{ verticalAlign: "inherit" }}
                    ></a>
                    <a
                      className="ronin-table-row ronin-table-row-level-0 table-row cursor-pointer"
                      href="/token/0xc39a2430b0b6f1edad1681672b47c857c1be0998"
                      style={{ verticalAlign: "inherit" }}
                    ></a>
                    <a
                      className="ronin-table-row ronin-table-row-level-0 table-row cursor-pointer"
                      href="/token/0xc99a6a985ed2cac1ef41640596c5a5f9f4e19ef5"
                      style={{ verticalAlign: "inherit" }}
                    ></a>
                    <a
                      className="ronin-table-row ronin-table-row-level-0 table-row cursor-pointer"
                      href="/token/0x97a9107c1793bc407d6f527b77e7fff4d812bece"
                      style={{ verticalAlign: "inherit" }}
                    ></a>
                    <a
                      className="ronin-table-row ronin-table-row-level-0 table-row cursor-pointer"
                      href="/token/0xcc451977a4be9adee892f7e610fe3e3b3927b5a1"
                      style={{ verticalAlign: "inherit" }}
                    ></a>
                    <a
                      className="ronin-table-row ronin-table-row-level-0 table-row cursor-pointer"
                      href="/token/0xe514d9deb7966c8be0ca922de8a064264ea6bcd4"
                      style={{ verticalAlign: "inherit" }}
                    ></a>
                    <a
                      className="ronin-table-row ronin-table-row-level-0 table-row cursor-pointer"
                      href="/token/0x7eae20d11ef8c779433eb24503def900b9d28ad7"
                      style={{ verticalAlign: "inherit" }}
                    ></a>
                    <a
                      className="ronin-table-row ronin-table-row-level-0 table-row cursor-pointer"
                      href="/token/0x0b7007c13325c48911f73a2dad5fa5dcbf808adc"
                      style={{ verticalAlign: "inherit" }}
                    ></a>
                    <a
                      className="ronin-table-row ronin-table-row-level-0 table-row cursor-pointer"
                      href="/token/0x59cfa86b6820901ebeddd60f131c473c15eae130"
                      style={{ verticalAlign: "inherit" }}
                    ></a>
                    <a
                      className="ronin-table-row ronin-table-row-level-0 table-row cursor-pointer"
                      href="/token/0xa038c593115f6fcd673f6833e15462b475994879"
                      style={{ verticalAlign: "inherit" }}
                    ></a>
                    <a
                      className="ronin-table-row ronin-table-row-level-0 table-row cursor-pointer"
                      href="/token/0x35a9045f345671162debb8eb17092bf6a1e07cdb"
                      style={{ verticalAlign: "inherit" }}
                    ></a>
                    <a
                      className="ronin-table-row ronin-table-row-level-0 table-row cursor-pointer"
                      href="/token/0xf6c5f9a72e6d46f30c7223a4cff854f94c7e95aa"
                      style={{ verticalAlign: "inherit" }}
                    ></a>
                    <a
                      className="ronin-table-row ronin-table-row-level-0 table-row cursor-pointer"
                      href="/token/0x1b918543b518e34902e1e8dd76052bee43c762ff"
                      style={{ verticalAlign: "inherit" }}
                    ></a>
                    <a
                      className="ronin-table-row ronin-table-row-level-0 table-row cursor-pointer"
                      href="/token/0x306a28279d04a47468ed83d55088d0dcd1369294"
                      style={{ verticalAlign: "inherit" }}
                    ></a>
                    <a
                      className="ronin-table-row ronin-table-row-level-0 table-row cursor-pointer"
                      href="/token/0x54efb1cc4f0331405a39d42964c3c885396919e5"
                      style={{ verticalAlign: "inherit" }}
                    ></a>
                    <a
                      className="ronin-table-row ronin-table-row-level-0 table-row cursor-pointer"
                      href="/token/0x814a9c959a3ef6ca44b5e2349e3bba9845393947"
                      style={{ verticalAlign: "inherit" }}
                    ></a>
                    <a
                      className="ronin-table-row ronin-table-row-level-0 table-row cursor-pointer"
                      href="/token/0x12b707c3d2786570cfdc3a998a085b62acdba4b3"
                      style={{ verticalAlign: "inherit" }}
                    ></a>
                    <a
                      className="ronin-table-row ronin-table-row-level-0 table-row cursor-pointer"
                      href="/token/0xd78efaec85c1a4f42e6edb7209067702a2be8c90"
                      style={{ verticalAlign: "inherit" }}
                    ></a>
                    <a
                      className="ronin-table-row ronin-table-row-level-0 table-row cursor-pointer"
                      href="/token/0xc25970724f032af21d801978c73653c440cf787c"
                      style={{ verticalAlign: "inherit" }}
                    ></a>
                    <a
                      className="ronin-table-row ronin-table-row-level-0 table-row cursor-pointer"
                      href="/token/0x737b80335a9396a8658405d7adcbc57343ff0558"
                      style={{ verticalAlign: "inherit" }}
                    ></a>
                    <a
                      className="ronin-table-row ronin-table-row-level-0 table-row cursor-pointer"
                      href="/token/0x2ecb08f87f075b5769fe543d0e52e40140575ea7"
                      style={{ verticalAlign: "inherit" }}
                    ></a>
                    <a
                      className="ronin-table-row ronin-table-row-level-0 table-row cursor-pointer"
                      href="/token/0x883649b1d9e8b6d69ac9c36ca58531419d7dda8f"
                      style={{ verticalAlign: "inherit" }}
                    ></a>
                    <a
                      className="ronin-table-row ronin-table-row-level-0 table-row cursor-pointer"
                      href="/token/0x578b65568b7a6a081a477748590774a64d8a4923"
                      style={{ verticalAlign: "inherit" }}
                    ></a>
                    <a
                      className="ronin-table-row ronin-table-row-level-0 table-row cursor-pointer"
                      href="/token/0xa96660f0e4a3e9bc7388925d245a6d4d79e21259"
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
                        <tr className="ronin-table-row">
                          <th
                            className="ronin-table-cell"
                            scope="col"
                            style={{ textAlign: "left" }}
                          >
                            token name
                          </th>
                          <th
                            className="ronin-table-cell"
                            scope="col"
                            style={{ textAlign: "left" }}
                          >
                            symbol
                          </th>
                          <th
                            className="ronin-table-cell"
                            scope="col"
                            style={{ textAlign: "right" }}
                          >
                            <div className="inline-flex items-center gap-4">
                              <svg viewBox="0 0 20 20" width="16" height="16">
                                <path
                                  fill="currentColor"
                                  d="M10 2c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8Zm1 11.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4ZM10 8a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
                                ></path>
                              </svg>
                              <div>transfers</div>
                            </div>
                          </th>
                          <th
                            className="ronin-table-cell"
                            scope="col"
                            style={{ textAlign: "right" }}
                          >
                            <div className="inline-flex items-center gap-4">
                              <svg viewBox="0 0 20 20" width="16" height="16">
                                <path
                                  fill="currentColor"
                                  d="M10 2c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8Zm1 11.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4ZM10 8a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
                                ></path>
                              </svg>
                              <div>total supply</div>
                            </div>
                          </th>
                          <th
                            className="ronin-table-cell"
                            scope="col"
                            style={{ textAlign: "right" }}
                          >
                            <div className="inline-flex items-center gap-4">
                              <svg viewBox="0 0 20 20" width="16" height="16">
                                <path
                                  fill="currentColor"
                                  d="M10 2c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8Zm1 11.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4ZM10 8a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
                                ></path>
                              </svg>
                              <div>holders</div>
                            </div>
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
                        <tr className="ronin-table-row">
                          <td
                            className="ronin-table-cell"
                            style={{ textAlign: "left" }}
                          >
                            <div
                              className="flex items-center gap-8"
                              data-address="0xa8754b9fa15fc18bb59458815510e40a12cd2014"
                            >
                              <div className="flex items-center gap-12 truncate max-w-full">
                                <div className="image-wrapper-module_container__5gv1w image-wrapper-module_sm__r69hP shrink-0">
                                  <img
                                    src="https://cdn.skymavis.com/ronin/2020/erc20/0xa8754b9fa15fc18bb59458815510e40a12cd2014/logo.png"
                                    className="rounded-[6px]"
                                    width="100%"
                                    height="100%"
                                    alt="address-icon"
                                  />
                                </div>
                                <a
                                  className="typo-module_t-body-md-strong__B-Sd1 typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9 link-module_link__Nwimt link-module_underline-mode-onlyWhenHover__alkql link-module_monochrome__yqKNC block truncate max-w-full gap-12"
                                  href="/token/0xa8754b9fa15fc18bb59458815510e40a12cd2014"
                                >
                                  Smooth Love Potion
                                </a>
                              </div>
                              <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3 hidden">
                                <div className="badge-module_badge__kTvKz badge-module_info-solid__DSKnf badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                  <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs">
                                    Deprecated
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
                              SLP
                            </div>
                          </td>
                          <td
                            className="ronin-table-cell"
                            style={{ textAlign: "right" }}
                          >
                            <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                              155,861,329
                            </div>
                          </td>
                          <td
                            className="ronin-table-cell"
                            style={{ textAlign: "right" }}
                          >
                            <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 max-w-full truncate whitespace-nowrap">
                              41,219,635,041.00
                            </div>
                          </td>
                          <td
                            className="ronin-table-cell"
                            style={{ textAlign: "right" }}
                          >
                            <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                              958,271
                            </div>
                          </td>
                          <td
                            className="ronin-table-cell"
                            style={{ textAlign: "right" }}
                          >
                            <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                              1 hour ago
                            </div>
                          </td>
                        </tr>
                        <tr className="ronin-table-row">
                          <td
                            className="ronin-table-cell"
                            style={{ textAlign: "left" }}
                          >
                            <div
                              className="flex items-center gap-8"
                              data-address="0x32950db2a7164ae833121501c797d79e7b79d74c"
                            >
                              <div className="flex items-center gap-12 truncate max-w-full">
                                <div className="image-wrapper-module_container__5gv1w image-wrapper-module_sm__r69hP shrink-0">
                                  <img
                                    src="https://cdn.skymavis.com/ronin/2020/erc721/0x32950db2a7164ae833121501c797d79e7b79d74c/logo.png"
                                    className="rounded-[6px]"
                                    width="100%"
                                    height="100%"
                                    alt="address-icon"
                                  />
                                </div>
                                <a
                                  className="typo-module_t-body-md-strong__B-Sd1 typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9 link-module_link__Nwimt link-module_underline-mode-onlyWhenHover__alkql link-module_monochrome__yqKNC block truncate max-w-full gap-12"
                                  href="/token/0x32950db2a7164ae833121501c797d79e7b79d74c"
                                >
                                  Axie
                                </a>
                              </div>
                              <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3 hidden">
                                <div className="badge-module_badge__kTvKz badge-module_info-solid__DSKnf badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                  <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs">
                                    Deprecated
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
                              AXIE
                            </div>
                          </td>
                          <td
                            className="ronin-table-cell"
                            style={{ textAlign: "right" }}
                          >
                            <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                              130,285,580
                            </div>
                          </td>
                          <td
                            className="ronin-table-cell"
                            style={{ textAlign: "right" }}
                          >
                            <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 max-w-full truncate whitespace-nowrap">
                              12,063,914.00
                            </div>
                          </td>
                          <td
                            className="ronin-table-cell"
                            style={{ textAlign: "right" }}
                          >
                            <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                              2,023,471
                            </div>
                          </td>
                          <td
                            className="ronin-table-cell"
                            style={{ textAlign: "right" }}
                          >
                            <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                              1 hour ago
                            </div>
                          </td>
                        </tr>
                        <tr className="ronin-table-row">
                          <td
                            className="ronin-table-cell"
                            style={{ textAlign: "left" }}
                          >
                            <div
                              className="flex items-center gap-8"
                              data-address="0xc39a2430b0b6f1edad1681672b47c857c1be0998"
                            >
                              <div className="flex items-center gap-12 truncate max-w-full">
                                <div className="image-wrapper-module_container__5gv1w image-wrapper-module_sm__r69hP shrink-0">
                                  <svg
                                    viewBox="0 0 20 20"
                                    width="24"
                                    height="24"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M10 8.667c4.418 0 8-1.493 8-3.334C18 3.493 14.418 2 10 2S2 3.492 2 5.333c0 1.841 3.582 3.334 8 3.334Z"
                                    ></path>
                                    <path
                                      fill="currentColor"
                                      d="M16.163 9.588c-1.67.696-3.859 1.079-6.163 1.079-2.304 0-4.493-.383-6.163-1.08C3.073 9.27 2.471 8.908 2 8.525v1.41c0 .89.832 1.727 2.343 2.356 1.511.63 3.52.977 5.657.977s4.146-.347 5.657-.977C17.167 11.66 18 10.824 18 9.933v-1.41c-.471.385-1.073.746-1.837 1.065Z"
                                    ></path>
                                    <path
                                      fill="currentColor"
                                      d="M10 15.267c2.304 0 4.493-.384 6.163-1.08.764-.318 1.366-.68 1.837-1.063v1.543C18 16.507 14.418 18 10 18s-8-1.492-8-3.333v-1.543c.471.383 1.073.745 1.837 1.064 1.67.695 3.859 1.079 6.163 1.079Z"
                                    ></path>
                                  </svg>
                                </div>
                                <a
                                  className="typo-module_t-body-md-strong__B-Sd1 typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9 link-module_link__Nwimt link-module_underline-mode-onlyWhenHover__alkql link-module_monochrome__yqKNC block truncate max-w-full gap-12"
                                  href="/token/0xc39a2430b0b6f1edad1681672b47c857c1be0998"
                                >
                                  Soul
                                </a>
                              </div>
                              <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3 hidden">
                                <div className="badge-module_badge__kTvKz badge-module_info-solid__DSKnf badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                  <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs">
                                    Deprecated
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
                              Soul
                            </div>
                          </td>
                          <td
                            className="ronin-table-cell"
                            style={{ textAlign: "right" }}
                          >
                            <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                              105,802,700
                            </div>
                          </td>
                          <td
                            className="ronin-table-cell"
                            style={{ textAlign: "right" }}
                          >
                            <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 max-w-full truncate whitespace-nowrap">
                              10,805,974,996.00
                            </div>
                          </td>
                          <td
                            className="ronin-table-cell"
                            style={{ textAlign: "right" }}
                          >
                            <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                              1,018,727
                            </div>
                          </td>
                          <td
                            className="ronin-table-cell"
                            style={{ textAlign: "right" }}
                          >
                            <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                              1 hour ago
                            </div>
                          </td>
                        </tr>
                        <tr className="ronin-table-row">
                          {" "}
                          <td
                            className="ronin-table-cell"
                            style={{ textAlign: "left" }}
                          >
                            <div
                              className="flex items-center gap-8"
                              data-address="0xc99a6a985ed2cac1ef41640596c5a5f9f4e19ef5"
                            >
                              <div className="flex items-center gap-12 truncate max-w-full">
                                <div className="image-wrapper-module_container__5gv1w image-wrapper-module_sm__r69hP shrink-0">
                                  <img
                                    src="https://cdn.skymavis.com/ronin/2020/erc20/0xc99a6a985ed2cac1ef41640596c5a5f9f4e19ef5/logo.png"
                                    className="rounded-[6px]"
                                    width="100%"
                                    height="100%"
                                    alt="address-icon"
                                  />
                                </div>
                                <a
                                  className="typo-module_t-body-md-strong__B-Sd1 typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9 link-module_link__Nwimt link-module_underline-mode-onlyWhenHover__alkql link-module_monochrome__yqKNC block truncate max-w-full gap-12"
                                  href="/token/0xc99a6a985ed2cac1ef41640596c5a5f9f4e19ef5"
                                >
                                  Ronin Wrapped Ether
                                </a>
                              </div>
                              <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3 hidden">
                                <div className="badge-module_badge__kTvKz badge-module_info-solid__DSKnf badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                  <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs">
                                    Deprecated
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
                              WETH
                            </div>
                          </td>
                          <td
                            className="ronin-table-cell"
                            style={{ textAlign: "right" }}
                          >
                            <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                              86,691,982
                            </div>
                          </td>
                          <td
                            className="ronin-table-cell"
                            style={{ textAlign: "right" }}
                          >
                            <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 max-w-full truncate whitespace-nowrap">
                              360,699.59
                            </div>
                          </td>
                          <td
                            className="ronin-table-cell"
                            style={{ textAlign: "right" }}
                          >
                            <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                              799,314
                            </div>
                          </td>
                          <td
                            className="ronin-table-cell"
                            style={{ textAlign: "right" }}
                          >
                            <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                              1 hour ago
                            </div>
                          </td>
                        </tr>
                        <tr className="ronin-table-row">
                          {" "}
                          <td
                            className="ronin-table-cell"
                            style={{ textAlign: "left" }}
                          >
                            <div
                              className="flex items-center gap-8"
                              data-address="0x97a9107c1793bc407d6f527b77e7fff4d812bece"
                            >
                              <div className="flex items-center gap-12 truncate max-w-full">
                                <div className="image-wrapper-module_container__5gv1w image-wrapper-module_sm__r69hP shrink-0">
                                  <img
                                    src="https://cdn.skymavis.com/ronin/2020/erc20/0x97a9107c1793bc407d6f527b77e7fff4d812bece/logo.png"
                                    className="rounded-[6px]"
                                    width="100%"
                                    height="100%"
                                    alt="address-icon"
                                  />
                                </div>
                                <a
                                  className="typo-module_t-body-md-strong__B-Sd1 typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9 link-module_link__Nwimt link-module_underline-mode-onlyWhenHover__alkql link-module_monochrome__yqKNC block truncate max-w-full gap-12"
                                  href="/token/0x97a9107c1793bc407d6f527b77e7fff4d812bece"
                                >
                                  Axie Infinity Shard
                                </a>
                              </div>
                              <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3 hidden">
                                <div className="badge-module_badge__kTvKz badge-module_info-solid__DSKnf badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                  <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs">
                                    Deprecated
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
                              AXS
                            </div>
                          </td>
                          <td
                            className="ronin-table-cell"
                            style={{ textAlign: "right" }}
                          >
                            <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                              54,290,199
                            </div>
                          </td>
                          <td
                            className="ronin-table-cell"
                            style={{ textAlign: "right" }}
                          >
                            <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 max-w-full truncate whitespace-nowrap">
                              109,822,690.78
                            </div>
                          </td>
                          <td
                            className="ronin-table-cell"
                            style={{ textAlign: "right" }}
                          >
                            <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                              342,356
                            </div>
                          </td>
                          <td
                            className="ronin-table-cell"
                            style={{ textAlign: "right" }}
                          >
                            <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                              1 hour ago
                            </div>
                          </td>
                        </tr>

                        <tr className="ronin-table-row">
                          <td
                            className="ronin-table-cell"
                            style={{ textAlign: "left" }}
                          >
                            <div
                              className="flex items-center gap-8"
                              data-address="0xcc451977a4be9adee892f7e610fe3e3b3927b5a1"
                            >
                              <div className="flex items-center gap-12 truncate max-w-full">
                                <div className="image-wrapper-module_container__5gv1w image-wrapper-module_sm__r69hP shrink-0">
                                  <img
                                    src="https://cdn.skymavis.com/ronin/2020/erc1155/0xcc451977a4be9adee892f7e610fe3e3b3927b5a1/logo.png"
                                    className="rounded-[6px]"
                                    width="100%"
                                    height="100%"
                                    alt="address-icon"
                                  />
                                </div>
                                <a
                                  className="typo-module_t-body-md-strong__B-Sd1 typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9 link-module_link__Nwimt link-module_underline-mode-onlyWhenHover__alkql link-module_monochrome__yqKNC block truncate max-w-full gap-12"
                                  href="/token/0xcc451977a4be9adee892f7e610fe3e3b3927b5a1"
                                >
                                  Lumiterra Game Item
                                </a>
                              </div>
                              <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3 hidden">
                                <div className="badge-module_badge__kTvKz badge-module_info-solid__DSKnf badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                  <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs">
                                    Deprecated
                                  </span>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td
                            className="ronin-table-cell"
                            style={{ textAlign: "left" }}
                          >
                            <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate"></div>
                          </td>
                          <td
                            className="ronin-table-cell"
                            style={{ textAlign: "right" }}
                          >
                            <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                              16,642,113
                            </div>
                          </td>
                          <td
                            className="ronin-table-cell"
                            style={{ textAlign: "right" }}
                          >
                            <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 max-w-full truncate whitespace-nowrap">
                              0
                            </div>
                          </td>
                          <td
                            className="ronin-table-cell"
                            style={{ textAlign: "right" }}
                          >
                            <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                              1,433,153
                            </div>
                          </td>
                          <td
                            className="ronin-table-cell"
                            style={{ textAlign: "right" }}
                          >
                            <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                              1 hour ago
                            </div>
                          </td>
                        </tr>

                        <tr className="ronin-table-row">
                          <td
                            className="ronin-table-cell"
                            style={{ textAlign: "left" }}
                          >
                            <div
                              className="flex items-center gap-8"
                              data-address="0xe514d9deb7966c8be0ca922de8a064264ea6bcd4"
                            >
                              <div className="flex items-center gap-12 truncate max-w-full">
                                <div className="image-wrapper-module_container__5gv1w image-wrapper-module_sm__r69hP shrink-0">
                                  <img
                                    src="https://cdn.skymavis.com/ronin/2020/erc20/0xe514d9deb7966c8be0ca922de8a064264ea6bcd4/logo.png"
                                    className="rounded-[6px]"
                                    width="100%"
                                    height="100%"
                                    alt="address-icon"
                                  />
                                </div>
                                <a
                                  className="typo-module_t-body-md-strong__B-Sd1 typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9 link-module_link__Nwimt link-module_underline-mode-onlyWhenHover__alkql link-module_monochrome__yqKNC block truncate max-w-full gap-12"
                                  href="/token/0xe514d9deb7966c8be0ca922de8a064264ea6bcd4"
                                >
                                  Wrapped Ronin
                                </a>
                              </div>
                              <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3 hidden">
                                <div className="badge-module_badge__kTvKz badge-module_info-solid__DSKnf badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                  <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs">
                                    Deprecated
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
                              WRON
                            </div>
                          </td>
                          <td
                            className="ronin-table-cell"
                            style={{ textAlign: "right" }}
                          >
                            <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                              13,550,581
                            </div>
                          </td>
                          <td
                            className="ronin-table-cell"
                            style={{ textAlign: "right" }}
                          >
                            <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 max-w-full truncate whitespace-nowrap">
                              40,026,011.78
                            </div>
                          </td>
                          <td
                            className="ronin-table-cell"
                            style={{ textAlign: "right" }}
                          >
                            <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                              8,160
                            </div>
                          </td>
                          <td
                            className="ronin-table-cell"
                            style={{ textAlign: "right" }}
                          >
                            <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                              1 hour ago
                            </div>
                          </td>
                        </tr>

                        <tr className="ronin-table-row">
                          <td
                            className="ronin-table-cell"
                            style={{ textAlign: "left" }}
                          >
                            <div
                              className="flex items-center gap-8"
                              data-address="0x7eae20d11ef8c779433eb24503def900b9d28ad7"
                            >
                              <div className="flex items-center gap-12 truncate max-w-full">
                                <div className="image-wrapper-module_container__5gv1w image-wrapper-module_sm__r69hP shrink-0">
                                  <img
                                    src="https://cdn.skymavis.com/ronin/2020/erc20/0x7eae20d11ef8c779433eb24503def900b9d28ad7/logo.png"
                                    className="rounded-[6px]"
                                    width="100%"
                                    height="100%"
                                    alt="address-icon"
                                  />
                                </div>
                                <a
                                  className="typo-module_t-body-md-strong__B-Sd1 typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9 link-module_link__Nwimt link-module_underline-mode-onlyWhenHover__alkql link-module_monochrome__yqKNC block truncate max-w-full gap-12"
                                  href="/token/0x7eae20d11ef8c779433eb24503def900b9d28ad7"
                                >
                                  PIXEL
                                </a>
                              </div>
                              <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3 hidden">
                                <div className="badge-module_badge__kTvKz badge-module_info-solid__DSKnf badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                  <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs">
                                    Deprecated
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
                              PIXEL
                            </div>
                          </td>
                          <td
                            className="ronin-table-cell"
                            style={{ textAlign: "right" }}
                          >
                            <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                              10,083,846
                            </div>
                          </td>
                          <td
                            className="ronin-table-cell"
                            style={{ textAlign: "right" }}
                          >
                            <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 max-w-full truncate whitespace-nowrap">
                              535,050,259.13
                            </div>
                          </td>
                          <td
                            className="ronin-table-cell"
                            style={{ textAlign: "right" }}
                          >
                            <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                              191,963
                            </div>
                          </td>
                          <td
                            className="ronin-table-cell"
                            style={{ textAlign: "right" }}
                          >
                            <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                              1 hour ago
                            </div>
                          </td>
                        </tr>

                        <tr className="ronin-table-row">

                          <td
                            className="ronin-table-cell"
                            style={{ textAlign: "left" }}
                          >
                            <div
                              className="flex items-center gap-8"
                              data-address="0x0b7007c13325c48911f73a2dad5fa5dcbf808adc"
                            >
                              <div className="flex items-center gap-12 truncate max-w-full">
                                <div className="image-wrapper-module_container__5gv1w image-wrapper-module_sm__r69hP shrink-0">
                                  <img
                                    src="https://cdn.skymavis.com/ronin/2020/erc20/0x0b7007c13325c48911f73a2dad5fa5dcbf808adc/logo.png"
                                    className="rounded-[6px]"
                                    width="100%"
                                    height="100%"
                                    alt="address-icon"
                                  />
                                </div>
                                <a
                                  className="typo-module_t-body-md-strong__B-Sd1 typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9 link-module_link__Nwimt link-module_underline-mode-onlyWhenHover__alkql link-module_monochrome__yqKNC block truncate max-w-full gap-12"
                                  href="/token/0x0b7007c13325c48911f73a2dad5fa5dcbf808adc"
                                >
                                  USD Coin
                                </a>
                              </div>
                              <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3 hidden">
                                <div className="badge-module_badge__kTvKz badge-module_info-solid__DSKnf badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                  <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs">
                                    Deprecated
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
                              USDC
                            </div>
                          </td>
                          <td
                            className="ronin-table-cell"
                            style={{ textAlign: "right" }}
                          >
                            <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                              7,318,046
                            </div>
                          </td>
                          <td
                            className="ronin-table-cell"
                            style={{ textAlign: "right" }}
                          >
                            <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 max-w-full truncate whitespace-nowrap">
                              51,174,480.36
                            </div>
                          </td>
                          <td
                            className="ronin-table-cell"
                            style={{ textAlign: "right" }}
                          >
                            <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                              73,786
                            </div>
                          </td>
                          <td
                            className="ronin-table-cell"
                            style={{ textAlign: "right" }}
                          >
                            <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                              1 hour ago
                            </div>
                          </td>
                        </tr>

                        <tr className="ronin-table-row">
                          <td
                            className="ronin-table-cell"
                            style={{ textAlign: "left" }}
                          >
                            <div
                              className="flex items-center gap-8"
                              data-address="0x59cfa86b6820901ebeddd60f131c473c15eae130"
                            >
                              <div className="flex items-center gap-12 truncate max-w-full">
                                <div className="image-wrapper-module_container__5gv1w image-wrapper-module_sm__r69hP shrink-0">
                                  <img
                                    src="https://cdn.skymavis.com/ronin/2020/erc1155/0x59cfa86b6820901ebeddd60f131c473c15eae130/logo.png"
                                    className="rounded-[6px]"
                                    width="100%"
                                    height="100%"
                                    alt="address-icon"
                                  />
                                </div>
                                <a
                                  className="typo-module_t-body-md-strong__B-Sd1 typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9 link-module_link__Nwimt link-module_underline-mode-onlyWhenHover__alkql link-module_monochrome__yqKNC block truncate max-w-full gap-12"
                                  href="/token/0x59cfa86b6820901ebeddd60f131c473c15eae130"
                                >
                                  Nyang Kit
                                </a>
                              </div>
                              <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3 hidden">
                                <div className="badge-module_badge__kTvKz badge-module_info-solid__DSKnf badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                  <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs">
                                    Deprecated
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
                              NYANG
                            </div>
                          </td>
                          <td
                            className="ronin-table-cell"
                            style={{ textAlign: "right" }}
                          >
                            <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                              3,091,149
                            </div>
                          </td>
                          <td
                            className="ronin-table-cell"
                            style={{ textAlign: "right" }}
                          >
                            <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 max-w-full truncate whitespace-nowrap">
                              0
                            </div>
                          </td>
                          <td
                            className="ronin-table-cell"
                            style={{ textAlign: "right" }}
                          >
                            <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                              145,265
                            </div>
                          </td>
                          <td
                            className="ronin-table-cell"
                            style={{ textAlign: "right" }}
                          >
                            <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                              1 hour ago
                            </div>
                          </td>

                        </tr>

                        <tr className="ronin-table-row">
                          <td
                            className="ronin-table-cell"
                            style={{ textAlign: "left" }}
                          >
                            <div
                              className="flex items-center gap-8"
                              data-address="0xa038c593115f6fcd673f6833e15462b475994879"
                            >
                              <div className="flex items-center gap-12 truncate max-w-full">
                                <div className="image-wrapper-module_container__5gv1w image-wrapper-module_sm__r69hP shrink-0">
                                  <img
                                    src="https://cdn.skymavis.com/ronin/2020/erc721/0xa038c593115f6fcd673f6833e15462b475994879/logo.png"
                                    className="rounded-[6px]"
                                    width="100%"
                                    height="100%"
                                    alt="address-icon"
                                  />
                                </div>
                                <a
                                  className="typo-module_t-body-md-strong__B-Sd1 typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9 link-module_link__Nwimt link-module_underline-mode-onlyWhenHover__alkql link-module_monochrome__yqKNC block truncate max-w-full gap-12"
                                  href="/token/0xa038c593115f6fcd673f6833e15462b475994879"
                                >
                                  Wild Forest Units
                                </a>
                              </div>
                              <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3 hidden">
                                <div className="badge-module_badge__kTvKz badge-module_info-solid__DSKnf badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                  <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs">
                                    Deprecated
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
                              WildForestUnit
                            </div>
                          </td>
                          <td
                            className="ronin-table-cell"
                            style={{ textAlign: "right" }}
                          >
                            <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                              2,979,153
                            </div>
                          </td>
                          <td
                            className="ronin-table-cell"
                            style={{ textAlign: "right" }}
                          >
                            <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 max-w-full truncate whitespace-nowrap">
                              378,995.00
                            </div>
                          </td>
                          <td
                            className="ronin-table-cell"
                            style={{ textAlign: "right" }}
                          >
                            <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                              24,677
                            </div>
                          </td>
                          <td
                            className="ronin-table-cell"
                            style={{ textAlign: "right" }}
                          >
                            <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                              1 hour ago
                            </div>
                          </td>
                        </tr>
                        <tr className="ronin-table-row">
                          <td
                            className="ronin-table-cell"
                            style={{ textAlign: "left" }}
                          >
                            <div
                              className="flex items-center gap-8"
                              data-address="0x35a9045f345671162debb8eb17092bf6a1e07cdb"
                            >
                              <div className="flex items-center gap-12 truncate max-w-full">
                                <div className="image-wrapper-module_container__5gv1w image-wrapper-module_sm__r69hP shrink-0">
                                  <img
                                    src="https://cdn.skymavis.com/ronin/2020/erc20/0x35a9045f345671162debb8eb17092bf6a1e07cdb/logo.png"
                                    className="rounded-[6px]"
                                    width="100%"
                                    height="100%"
                                    alt="address-icon"
                                  />
                                </div>
                                <a
                                  className="typo-module_t-body-md-strong__B-Sd1 typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9 link-module_link__Nwimt link-module_underline-mode-onlyWhenHover__alkql link-module_monochrome__yqKNC block truncate max-w-full gap-12"
                                  href="/token/0x35a9045f345671162debb8eb17092bf6a1e07cdb"
                                >
                                  Kalodium
                                </a>
                              </div>
                              <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3 hidden">
                                <div className="badge-module_badge__kTvKz badge-module_info-solid__DSKnf badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                  <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs">
                                    Deprecated
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
                              KALO
                            </div>
                          </td>
                          <td
                            className="ronin-table-cell"
                            style={{ textAlign: "right" }}
                          >
                            <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                              2,535,155
                            </div>
                          </td>
                          <td
                            className="ronin-table-cell"
                            style={{ textAlign: "right" }}
                          >
                            <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 max-w-full truncate whitespace-nowrap">
                              2,576,382.00
                            </div>
                          </td>
                          <td
                            className="ronin-table-cell"
                            style={{ textAlign: "right" }}
                          >
                            <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                              231,341
                            </div>
                          </td>
                          <td
                            className="ronin-table-cell"
                            style={{ textAlign: "right" }}
                          >
                            <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                              1 hour ago
                            </div>
                          </td>

                        </tr>
                        <tr className="ronin-table-row">
                          <td
                            className="ronin-table-cell"
                            style={{ textAlign: "left" }}
                          >
                            <div
                              className="flex items-center gap-8"
                              data-address="0xf6c5f9a72e6d46f30c7223a4cff854f94c7e95aa"
                            >
                              <div className="flex items-center gap-12 truncate max-w-full">
                                <div className="image-wrapper-module_container__5gv1w image-wrapper-module_sm__r69hP shrink-0">
                                  <svg
                                    viewBox="0 0 20 20"
                                    width="24"
                                    height="24"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M10 8.667c4.418 0 8-1.493 8-3.334C18 3.493 14.418 2 10 2S2 3.492 2 5.333c0 1.841 3.582 3.334 8 3.334Z"
                                    ></path>
                                    <path
                                      fill="currentColor"
                                      d="M16.163 9.588c-1.67.696-3.859 1.079-6.163 1.079-2.304 0-4.493-.383-6.163-1.08C3.073 9.27 2.471 8.908 2 8.525v1.41c0 .89.832 1.727 2.343 2.356 1.511.63 3.52.977 5.657.977s4.146-.347 5.657-.977C17.167 11.66 18 10.824 18 9.933v-1.41c-.471.385-1.073.746-1.837 1.065Z"
                                    ></path>
                                    <path
                                      fill="currentColor"
                                      d="M10 15.267c2.304 0 4.493-.384 6.163-1.08.764-.318 1.366-.68 1.837-1.063v1.543C18 16.507 14.418 18 10 18s-8-1.492-8-3.333v-1.543c.471.383 1.073.745 1.837 1.064 1.67.695 3.859 1.079 6.163 1.079Z"
                                    ></path>
                                  </svg>
                                </div>
                                <a
                                  className="typo-module_t-body-md-strong__B-Sd1 typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9 link-module_link__Nwimt link-module_underline-mode-onlyWhenHover__alkql link-module_monochrome__yqKNC block truncate max-w-full gap-12"
                                  href="/token/0xf6c5f9a72e6d46f30c7223a4cff854f94c7e95aa"
                                >
                                  WildForestUnits
                                </a>
                              </div>
                              <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3 hidden">
                                <div className="badge-module_badge__kTvKz badge-module_info-solid__DSKnf badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                  <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs">
                                    Deprecated
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
                              WFU
                            </div>
                          </td>
                          <td
                            className="ronin-table-cell"
                            style={{ textAlign: "right" }}
                          >
                            <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                              2,508,789
                            </div>
                          </td>
                          <td
                            className="ronin-table-cell"
                            style={{ textAlign: "right" }}
                          >
                            <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 max-w-full truncate whitespace-nowrap">
                              568,628.00
                            </div>
                          </td>
                          <td
                            className="ronin-table-cell"
                            style={{ textAlign: "right" }}
                          >
                            <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                              42,145
                            </div>
                          </td>
                          <td
                            className="ronin-table-cell"
                            style={{ textAlign: "right" }}
                          >
                            <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                              1 hour ago
                            </div>
                          </td>
                        </tr>
                        <tr className="ronin-table-row">
                          <td
                            className="ronin-table-cell"
                            style={{ textAlign: "left" }}
                          >
                            <div
                              className="flex items-center gap-8"
                              data-address="0x1b918543b518e34902e1e8dd76052bee43c762ff"
                            >
                              <div className="flex items-center gap-12 truncate max-w-full">
                                <div className="image-wrapper-module_container__5gv1w image-wrapper-module_sm__r69hP shrink-0">
                                  <img
                                    src="https://cdn.skymavis.com/ronin/2020/erc20/0x1b918543b518e34902e1e8dd76052bee43c762ff/logo.png"
                                    className="rounded-[6px]"
                                    width="100%"
                                    height="100%"
                                    alt="address-icon"
                                  />
                                </div>
                                <a
                                  className="typo-module_t-body-md-strong__B-Sd1 typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9 link-module_link__Nwimt link-module_underline-mode-onlyWhenHover__alkql link-module_monochrome__yqKNC block truncate max-w-full gap-12"
                                  href="/token/0x1b918543b518e34902e1e8dd76052bee43c762ff"
                                >
                                  BERRY
                                </a>
                              </div>
                              <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3 hidden">
                                <div className="badge-module_badge__kTvKz badge-module_info-solid__DSKnf badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                  <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs">
                                    Deprecated
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
                              BERRY
                            </div>
                          </td>
                          <td
                            className="ronin-table-cell"
                            style={{ textAlign: "right" }}
                          >
                            <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                              2,116,163
                            </div>
                          </td>
                          <td
                            className="ronin-table-cell"
                            style={{ textAlign: "right" }}
                          >
                            <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 max-w-full truncate whitespace-nowrap">
                              10,000,000,000.00
                            </div>
                          </td>
                          <td
                            className="ronin-table-cell"
                            style={{ textAlign: "right" }}
                          >
                            <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                              15,486
                            </div>
                          </td>
                          <td
                            className="ronin-table-cell"
                            style={{ textAlign: "right" }}
                          >
                            <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                              1 hour ago
                            </div>
                          </td>

                        </tr>
                        <tr className="ronin-table-row">
                          <td
                            className="ronin-table-cell"
                            style={{ textAlign: "left" }}
                          >
                            <div
                              className="flex items-center gap-8"
                              data-address="0x306a28279d04a47468ed83d55088d0dcd1369294"
                            >
                              <div className="flex items-center gap-12 truncate max-w-full">
                                <div className="image-wrapper-module_container__5gv1w image-wrapper-module_sm__r69hP shrink-0">
                                  <img
                                    src="https://cdn.skymavis.com/ronin/2020/erc20/0x306a28279d04a47468ed83d55088d0dcd1369294/logo.png"
                                    className="rounded-[6px]"
                                    width="100%"
                                    height="100%"
                                    alt="address-icon"
                                  />
                                </div>
                                <a
                                  className="typo-module_t-body-md-strong__B-Sd1 typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9 link-module_link__Nwimt link-module_underline-mode-onlyWhenHover__alkql link-module_monochrome__yqKNC block truncate max-w-full gap-12"
                                  href="/token/0x306a28279d04a47468ed83d55088d0dcd1369294"
                                >
                                  Smooth Love Potion - Ronin Wrapped Ether
                                </a>
                              </div>
                              <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3 hidden">
                                <div className="badge-module_badge__kTvKz badge-module_info-solid__DSKnf badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                  <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs">
                                    Deprecated
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
                              SLP-WETH
                            </div>
                          </td>
                          <td
                            className="ronin-table-cell"
                            style={{ textAlign: "right" }}
                          >
                            <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                              1,984,346
                            </div>
                          </td>
                          <td
                            className="ronin-table-cell"
                            style={{ textAlign: "right" }}
                          >
                            <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 max-w-full truncate whitespace-nowrap">
                              &lt; 0.0001
                            </div>
                          </td>
                          <td
                            className="ronin-table-cell"
                            style={{ textAlign: "right" }}
                          >
                            <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                              8,786
                            </div>
                          </td>
                          <td
                            className="ronin-table-cell"
                            style={{ textAlign: "right" }}
                          >
                            <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                              1 hour ago
                            </div>
                          </td>
                        </tr>
                        <tr className="ronin-table-row">
                          <td
                            className="ronin-table-cell"
                            style={{ textAlign: "left" }}
                          >
                            <div
                              className="flex items-center gap-8"
                              data-address="0x54efb1cc4f0331405a39d42964c3c885396919e5"
                            >
                              <div className="flex items-center gap-12 truncate max-w-full">
                                <div className="image-wrapper-module_container__5gv1w image-wrapper-module_sm__r69hP shrink-0">
                                  <svg
                                    viewBox="0 0 20 20"
                                    width="24"
                                    height="24"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M10 8.667c4.418 0 8-1.493 8-3.334C18 3.493 14.418 2 10 2S2 3.492 2 5.333c0 1.841 3.582 3.334 8 3.334Z"
                                    ></path>
                                    <path
                                      fill="currentColor"
                                      d="M16.163 9.588c-1.67.696-3.859 1.079-6.163 1.079-2.304 0-4.493-.383-6.163-1.08C3.073 9.27 2.471 8.908 2 8.525v1.41c0 .89.832 1.727 2.343 2.356 1.511.63 3.52.977 5.657.977s4.146-.347 5.657-.977C17.167 11.66 18 10.824 18 9.933v-1.41c-.471.385-1.073.746-1.837 1.065Z"
                                    ></path>
                                    <path
                                      fill="currentColor"
                                      d="M10 15.267c2.304 0 4.493-.384 6.163-1.08.764-.318 1.366-.68 1.837-1.063v1.543C18 16.507 14.418 18 10 18s-8-1.492-8-3.333v-1.543c.471.383 1.073.745 1.837 1.064 1.67.695 3.859 1.079 6.163 1.079Z"
                                    ></path>
                                  </svg>
                                </div>
                                <a
                                  className="typo-module_t-body-md-strong__B-Sd1 typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9 link-module_link__Nwimt link-module_underline-mode-onlyWhenHover__alkql link-module_monochrome__yqKNC block truncate max-w-full gap-12"
                                  href="/token/0x54efb1cc4f0331405a39d42964c3c885396919e5"
                                >
                                  Kredits
                                </a>
                              </div>
                              <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3 hidden">
                                <div className="badge-module_badge__kTvKz badge-module_info-solid__DSKnf badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                  <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs">
                                    Deprecated
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
                              KREDIT
                            </div>
                          </td>
                          <td
                            className="ronin-table-cell"
                            style={{ textAlign: "right" }}
                          >
                            <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                              1,698,987
                            </div>
                          </td>
                          <td
                            className="ronin-table-cell"
                            style={{ textAlign: "right" }}
                          >
                            <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 max-w-full truncate whitespace-nowrap">
                              485,707,933.20
                            </div>
                          </td>
                          <td
                            className="ronin-table-cell"
                            style={{ textAlign: "right" }}
                          >
                            <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                              1,162
                            </div>
                          </td>
                          <td
                            className="ronin-table-cell"
                            style={{ textAlign: "right" }}
                          >
                            <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                              1 hour ago
                            </div>
                          </td>
                        </tr>
                        <tr className="ronin-table-row">
                          <td
                            className="ronin-table-cell"
                            style={{ textAlign: "left" }}
                          >
                            <div
                              className="flex items-center gap-8"
                              data-address="0x814a9c959a3ef6ca44b5e2349e3bba9845393947"
                            >
                              <div className="flex items-center gap-12 truncate max-w-full">
                                <div className="image-wrapper-module_container__5gv1w image-wrapper-module_sm__r69hP shrink-0">
                                  <img
                                    src="https://cdn.skymavis.com/ronin/2020/erc1155/0x814a9c959a3ef6ca44b5e2349e3bba9845393947/logo.png"
                                    className="rounded-[6px]"
                                    width="100%"
                                    height="100%"
                                    alt="address-icon"
                                  />
                                </div>
                                <a
                                  className="typo-module_t-body-md-strong__B-Sd1 typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9 link-module_link__Nwimt link-module_underline-mode-onlyWhenHover__alkql link-module_monochrome__yqKNC block truncate max-w-full gap-12"
                                  href="/token/0x814a9c959a3ef6ca44b5e2349e3bba9845393947"
                                >
                                  Axie Charm
                                </a>
                              </div>
                              <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3 hidden">
                                <div className="badge-module_badge__kTvKz badge-module_info-solid__DSKnf badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                  <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs">
                                    Deprecated
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
                              AC
                            </div>
                          </td>
                          <td
                            className="ronin-table-cell"
                            style={{ textAlign: "right" }}
                          >
                            <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                              1,184,208
                            </div>
                          </td>
                          <td
                            className="ronin-table-cell"
                            style={{ textAlign: "right" }}
                          >
                            <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 max-w-full truncate whitespace-nowrap">
                              0
                            </div>
                          </td>
                          <td
                            className="ronin-table-cell"
                            style={{ textAlign: "right" }}
                          >
                            <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                              5,280
                            </div>
                          </td>
                          <td
                            className="ronin-table-cell"
                            style={{ textAlign: "right" }}
                          >
                            <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                              1 hour ago
                            </div>
                          </td>
                        </tr>
                        <tr className="ronin-table-row">
                          <td
                            className="ronin-table-cell"
                            style={{ textAlign: "left" }}
                          >
                            <div
                              className="flex items-center gap-8"
                              data-address="0x12b707c3d2786570cfdc3a998a085b62acdba4b3"
                            >
                              <div className="flex items-center gap-12 truncate max-w-full">
                                <div className="image-wrapper-module_container__5gv1w image-wrapper-module_sm__r69hP shrink-0">
                                  <img
                                    src="https://cdn.skymavis.com/ronin/2020/erc1155/0x12b707c3d2786570cfdc3a998a085b62acdba4b3/logo.png"
                                    className="rounded-[6px]"
                                    width="100%"
                                    height="100%"
                                    alt="address-icon"
                                  />
                                </div>
                                <a
                                  className="typo-module_t-body-md-strong__B-Sd1 typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9 link-module_link__Nwimt link-module_underline-mode-onlyWhenHover__alkql link-module_monochrome__yqKNC block truncate max-w-full gap-12"
                                  href="/token/0x12b707c3d2786570cfdc3a998a085b62acdba4b3"
                                >
                                  Axie Material
                                </a>
                              </div>
                              <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3 hidden">
                                <div className="badge-module_badge__kTvKz badge-module_info-solid__DSKnf badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                  <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs">
                                    Deprecated
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
                              AM
                            </div>
                          </td>
                          <td
                            className="ronin-table-cell"
                            style={{ textAlign: "right" }}
                          >
                            <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                              1,023,825
                            </div>
                          </td>
                          <td
                            className="ronin-table-cell"
                            style={{ textAlign: "right" }}
                          >
                            <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 max-w-full truncate whitespace-nowrap">
                              0
                            </div>
                          </td>
                          <td
                            className="ronin-table-cell"
                            style={{ textAlign: "right" }}
                          >
                            <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                              26,580
                            </div>
                          </td>
                          <td
                            className="ronin-table-cell"
                            style={{ textAlign: "right" }}
                          >
                            <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                              1 hour ago
                            </div>
                          </td>
                        </tr>
                        <tr className="ronin-table-row">
                          <td
                            className="ronin-table-cell"
                            style={{ textAlign: "left" }}
                          >
                            <div
                              className="flex items-center gap-8"
                              data-address="0xd78efaec85c1a4f42e6edb7209067702a2be8c90"
                            >
                              <div className="flex items-center gap-12 truncate max-w-full">
                                <div className="image-wrapper-module_container__5gv1w image-wrapper-module_sm__r69hP shrink-0">
                                  <img
                                    src="https://cdn.skymavis.com/ronin/2020/erc721/0xd78efaec85c1a4f42e6edb7209067702a2be8c90/logo.png"
                                    className="rounded-[6px]"
                                    width="100%"
                                    height="100%"
                                    alt="address-icon"
                                  />
                                </div>
                                <a
                                  className="typo-module_t-body-md-strong__B-Sd1 typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9 link-module_link__Nwimt link-module_underline-mode-onlyWhenHover__alkql link-module_monochrome__yqKNC block truncate max-w-full gap-12"
                                  href="/token/0xd78efaec85c1a4f42e6edb7209067702a2be8c90"
                                >
                                  KaidroJournal
                                </a>
                              </div>
                              <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3 hidden">
                                <div className="badge-module_badge__kTvKz badge-module_info-solid__DSKnf badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                  <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs">
                                    Deprecated
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
                              KJ
                            </div>
                          </td>
                          <td
                            className="ronin-table-cell"
                            style={{ textAlign: "right" }}
                          >
                            <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                              971,895
                            </div>
                          </td>
                          <td
                            className="ronin-table-cell"
                            style={{ textAlign: "right" }}
                          >
                            <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 max-w-full truncate whitespace-nowrap">
                              423,748.00
                            </div>
                          </td>
                          <td
                            className="ronin-table-cell"
                            style={{ textAlign: "right" }}
                          >
                            <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                              232,712
                            </div>
                          </td>
                          <td
                            className="ronin-table-cell"
                            style={{ textAlign: "right" }}
                          >
                            <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                              1 hour ago
                            </div>
                          </td>
                        </tr>

                        <tr className="ronin-table-row">
                          <td
                            className="ronin-table-cell"
                            style={{ textAlign: "left" }}
                          >
                            <div
                              className="flex items-center gap-8"
                              data-address="0xc25970724f032af21d801978c73653c440cf787c"
                            >
                              <div className="flex items-center gap-12 truncate max-w-full">
                                <div className="image-wrapper-module_container__5gv1w image-wrapper-module_sm__r69hP shrink-0">
                                  <img
                                    src="https://cdn.skymavis.com/ronin/2020/erc1155/0xc25970724f032af21d801978c73653c440cf787c/logo.png"
                                    className="rounded-[6px]"
                                    width="100%"
                                    height="100%"
                                    alt="address-icon"
                                  />
                                </div>
                                <a
                                  className="typo-module_t-body-md-strong__B-Sd1 typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9 link-module_link__Nwimt link-module_underline-mode-onlyWhenHover__alkql link-module_monochrome__yqKNC block truncate max-w-full gap-12"
                                  href="/token/0xc25970724f032af21d801978c73653c440cf787c"
                                >
                                  Axie Rune
                                </a>
                              </div>
                              <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3 hidden">
                                <div className="badge-module_badge__kTvKz badge-module_info-solid__DSKnf badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                  <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs">
                                    Deprecated
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
                              AR
                            </div>
                          </td>
                          <td
                            className="ronin-table-cell"
                            style={{ textAlign: "right" }}
                          >
                            <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                              950,522
                            </div>
                          </td>
                          <td
                            className="ronin-table-cell"
                            style={{ textAlign: "right" }}
                          >
                            <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 max-w-full truncate whitespace-nowrap">
                              0
                            </div>
                          </td>
                          <td
                            className="ronin-table-cell"
                            style={{ textAlign: "right" }}
                          >
                            <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                              4,874
                            </div>
                          </td>
                          <td
                            className="ronin-table-cell"
                            style={{ textAlign: "right" }}
                          >
                            <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                              1 hour ago
                            </div>
                          </td>

                        </tr>
                        <tr className="ronin-table-row">
                          <td
                            className="ronin-table-cell"
                            style={{ textAlign: "left" }}
                          >
                            <div
                              className="flex items-center gap-8"
                              data-address="0x737b80335a9396a8658405d7adcbc57343ff0558"
                            >
                              <div className="flex items-center gap-12 truncate max-w-full">
                                <div className="image-wrapper-module_container__5gv1w image-wrapper-module_sm__r69hP shrink-0">
                                  <img
                                    src="https://cdn.skymavis.com/ronin/2020/erc1155/0x737b80335a9396a8658405d7adcbc57343ff0558/logo.png"
                                    className="rounded-[6px]"
                                    width="100%"
                                    height="100%"
                                    alt="address-icon"
                                  />
                                </div>
                                <a
                                  className="typo-module_t-body-md-strong__B-Sd1 typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9 link-module_link__Nwimt link-module_underline-mode-onlyWhenHover__alkql link-module_monochrome__yqKNC block truncate max-w-full gap-12"
                                  href="/token/0x737b80335a9396a8658405d7adcbc57343ff0558"
                                >
                                  Axie Consumable Item
                                </a>
                              </div>
                              <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3 hidden">
                                <div className="badge-module_badge__kTvKz badge-module_info-solid__DSKnf badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                  <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs">
                                    Deprecated
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
                              ACI
                            </div>
                          </td>
                          <td
                            className="ronin-table-cell"
                            style={{ textAlign: "right" }}
                          >
                            <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                              923,061
                            </div>
                          </td>
                          <td
                            className="ronin-table-cell"
                            style={{ textAlign: "right" }}
                          >
                            <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 max-w-full truncate whitespace-nowrap">
                              0
                            </div>
                          </td>
                          <td
                            className="ronin-table-cell"
                            style={{ textAlign: "right" }}
                          >
                            <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                              14,719
                            </div>
                          </td>
                          <td
                            className="ronin-table-cell"
                            style={{ textAlign: "right" }}
                          >
                            <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                              1 hour ago
                            </div>
                          </td>
                        </tr>
                        <tr className="ronin-table-row">

                          <td
                            className="ronin-table-cell"
                            style={{ textAlign: "left" }}
                          >
                            <div
                              className="flex items-center gap-8"
                              data-address="0x2ecb08f87f075b5769fe543d0e52e40140575ea7"
                            >
                              <div className="flex items-center gap-12 truncate max-w-full">
                                <div className="image-wrapper-module_container__5gv1w image-wrapper-module_sm__r69hP shrink-0">
                                  <img
                                    src="https://cdn.skymavis.com/ronin/2020/erc20/0x2ecb08f87f075b5769fe543d0e52e40140575ea7/logo.png"
                                    className="rounded-[6px]"
                                    width="100%"
                                    height="100%"
                                    alt="address-icon"
                                  />
                                </div>
                                <a
                                  className="typo-module_t-body-md-strong__B-Sd1 typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9 link-module_link__Nwimt link-module_underline-mode-onlyWhenHover__alkql link-module_monochrome__yqKNC block truncate max-w-full gap-12"
                                  href="/token/0x2ecb08f87f075b5769fe543d0e52e40140575ea7"
                                >
                                  Ronin Wrapped Ether - Wrapped Ronin
                                </a>
                              </div>
                              <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3 hidden">
                                <div className="badge-module_badge__kTvKz badge-module_info-solid__DSKnf badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                  <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs">
                                    Deprecated
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
                              WETH-WRON
                            </div>
                          </td>
                          <td
                            className="ronin-table-cell"
                            style={{ textAlign: "right" }}
                          >
                            <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                              892,492
                            </div>
                          </td>
                          <td
                            className="ronin-table-cell"
                            style={{ textAlign: "right" }}
                          >
                            <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 max-w-full truncate whitespace-nowrap">
                              476,956.86
                            </div>
                          </td>
                          <td
                            className="ronin-table-cell"
                            style={{ textAlign: "right" }}
                          >
                            <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                              2,537
                            </div>
                          </td>
                          <td
                            className="ronin-table-cell"
                            style={{ textAlign: "right" }}
                          >
                            <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                              1 hour ago
                            </div>
                          </td>
                        </tr>
                        <tr className="ronin-table-row">

                          <td
                            className="ronin-table-cell"
                            style={{ textAlign: "left" }}
                          >
                            <div
                              className="flex items-center gap-8"
                              data-address="0x883649b1d9e8b6d69ac9c36ca58531419d7dda8f"
                            >
                              <div className="flex items-center gap-12 truncate max-w-full">
                                <div className="image-wrapper-module_container__5gv1w image-wrapper-module_sm__r69hP shrink-0">
                                  <img
                                    src="https://cdn.skymavis.com/ronin/2020/erc721/0x883649b1d9e8b6d69ac9c36ca58531419d7dda8f/logo.png"
                                    className="rounded-[6px]"
                                    width="100%"
                                    height="100%"
                                    alt="address-icon"
                                  />
                                </div>
                                <a
                                  className="typo-module_t-body-md-strong__B-Sd1 typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9 link-module_link__Nwimt link-module_underline-mode-onlyWhenHover__alkql link-module_monochrome__yqKNC block truncate max-w-full gap-12"
                                  href="/token/0x883649b1d9e8b6d69ac9c36ca58531419d7dda8f"
                                >
                                  FightLeagueChips
                                </a>
                              </div>
                              <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3 hidden">
                                <div className="badge-module_badge__kTvKz badge-module_info-solid__DSKnf badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                  <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs">
                                    Deprecated
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
                              FLC
                            </div>
                          </td>
                          <td
                            className="ronin-table-cell"
                            style={{ textAlign: "right" }}
                          >
                            <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                              871,830
                            </div>
                          </td>
                          <td
                            className="ronin-table-cell"
                            style={{ textAlign: "right" }}
                          >
                            <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 max-w-full truncate whitespace-nowrap">
                              515,043.00
                            </div>
                          </td>
                          <td
                            className="ronin-table-cell"
                            style={{ textAlign: "right" }}
                          >
                            <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                              230,485
                            </div>
                          </td>
                          <td
                            className="ronin-table-cell"
                            style={{ textAlign: "right" }}
                          >
                            <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                              1 hour ago
                            </div>
                          </td>
                        </tr>

                        <tr className="ronin-table-row">

                          <td
                            className="ronin-table-cell"
                            style={{ textAlign: "left" }}
                          >
                            <div
                              className="flex items-center gap-8"
                              data-address="0x578b65568b7a6a081a477748590774a64d8a4923"
                            >
                              <div className="flex items-center gap-12 truncate max-w-full">
                                <div className="image-wrapper-module_container__5gv1w image-wrapper-module_sm__r69hP shrink-0">
                                  <img
                                    src="https://cdn.skymavis.com/ronin/2020/erc721/0x578b65568b7a6a081a477748590774a64d8a4923/logo.png"
                                    className="rounded-[6px]"
                                    width="100%"
                                    height="100%"
                                    alt="address-icon"
                                  />
                                </div>
                                <a
                                  className="typo-module_t-body-md-strong__B-Sd1 typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9 link-module_link__Nwimt link-module_underline-mode-onlyWhenHover__alkql link-module_monochrome__yqKNC block truncate max-w-full gap-12"
                                  href="/token/0x578b65568b7a6a081a477748590774a64d8a4923"
                                >
                                  RuniverseItem
                                </a>
                              </div>
                              <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3 hidden">
                                <div className="badge-module_badge__kTvKz badge-module_info-solid__DSKnf badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                  <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs">
                                    Deprecated
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
                              RITM
                            </div>
                          </td>
                          <td
                            className="ronin-table-cell"
                            style={{ textAlign: "right" }}
                          >
                            <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                              846,425
                            </div>
                          </td>
                          <td
                            className="ronin-table-cell"
                            style={{ textAlign: "right" }}
                          >
                            <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 max-w-full truncate whitespace-nowrap">
                              741,866.00
                            </div>
                          </td>
                          <td
                            className="ronin-table-cell"
                            style={{ textAlign: "right" }}
                          >
                            <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                              40,716
                            </div>
                          </td>
                          <td
                            className="ronin-table-cell"
                            style={{ textAlign: "right" }}
                          >
                            <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                              1 hour ago
                            </div>
                          </td>
                        </tr>

                        <tr className="ronin-table-row">

                          <td
                            className="ronin-table-cell"
                            style={{ textAlign: "left" }}
                          >
                            <div
                              className="flex items-center gap-8"
                              data-address="0xa96660f0e4a3e9bc7388925d245a6d4d79e21259"
                            >
                              <div className="flex items-center gap-12 truncate max-w-full">
                                <div className="image-wrapper-module_container__5gv1w image-wrapper-module_sm__r69hP shrink-0">
                                  <img
                                    src="https://cdn.skymavis.com/ronin/2020/erc721/0xa96660f0e4a3e9bc7388925d245a6d4d79e21259/logo.png"
                                    className="rounded-[6px]"
                                    width="100%"
                                    height="100%"
                                    alt="address-icon"
                                  />
                                </div>
                                <a
                                  className="typo-module_t-body-md-strong__B-Sd1 typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9 link-module_link__Nwimt link-module_underline-mode-onlyWhenHover__alkql link-module_monochrome__yqKNC block truncate max-w-full gap-12"
                                  href="/token/0xa96660f0e4a3e9bc7388925d245a6d4d79e21259"
                                >
                                  Axie Land Item
                                </a>
                              </div>
                              <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3 hidden">
                                <div className="badge-module_badge__kTvKz badge-module_info-solid__DSKnf badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                  <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs">
                                    Deprecated
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
                              ITEM
                            </div>
                          </td>
                          <td
                            className="ronin-table-cell"
                            style={{ textAlign: "right" }}
                          >
                            <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                              622,315
                            </div>
                          </td>
                          <td
                            className="ronin-table-cell"
                            style={{ textAlign: "right" }}
                          >
                            <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 max-w-full truncate whitespace-nowrap">
                              319,791.00
                            </div>
                          </td>
                          <td
                            className="ronin-table-cell"
                            style={{ textAlign: "right" }}
                          >
                            <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                              42,066
                            </div>
                          </td>
                          <td
                            className="ronin-table-cell"
                            style={{ textAlign: "right" }}
                          >
                            <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                              1 hour ago
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
                    token contracts
                  </div>
                </div>
                <div className="pagination-module_rightEl__Hg04k">
                  <div className="pagination-module_input-page__LMvfc">
                    <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-md__-HKdi typo-module_neutral__9orA9 pagination-module_content__nlsr4">
                      Go to page
                    </div>
                    <form className="" noValidate="">
                      <div className="form-item-module_form__3-Rfq text-field-module_input-root__PSsoe">
                        <div className="input-module_container__Gch8D input-module_default__Rk4yp">
                          <div className="input-module_form__2zFJF">
                            <input
                              type="number"
                              min="1"
                              max="17"
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
                      1/17
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
            <thead className="ronin-table-thead">
              <tr className="ronin-table-row">
                <th
                  className="ronin-table-cell"
                  scope="col"
                  style={{ textAlign: "left" }}
                >
                  token name
                </th>
                <th
                  className="ronin-table-cell"
                  scope="col"
                  style={{ textAlign: "left" }}
                >
                  symbol
                </th>
                <th
                  className="ronin-table-cell"
                  scope="col"
                  style={{ textAlign: "right" }}
                >
                  <div className="inline-flex items-center gap-4">
                    <svg viewBox="0 0 20 20" width="16" height="16">
                      <path
                        fill="currentColor"
                        d="M10 2c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8Zm1 11.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4ZM10 8a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
                      ></path>
                    </svg>
                    <div>transfers</div>
                  </div>
                </th>
                <th
                  className="ronin-table-cell"
                  scope="col"
                  style={{ textAlign: "right" }}
                >
                  <div className="inline-flex items-center gap-4">
                    <svg viewBox="0 0 20 20" width="16" height="16">
                      <path
                        fill="currentColor"
                        d="M10 2c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8Zm1 11.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4ZM10 8a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
                      ></path>
                    </svg>
                    <div>total supply</div>
                  </div>
                </th>
                <th
                  className="ronin-table-cell"
                  scope="col"
                  style={{ textAlign: "right" }}
                >
                  <div className="inline-flex items-center gap-4">
                    <svg viewBox="0 0 20 20" width="16" height="16">
                      <path
                        fill="currentColor"
                        d="M10 2c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8Zm1 11.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4ZM10 8a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
                      ></path>
                    </svg>
                    <div>holders</div>
                  </div>
                </th>
                <th
                  className="ronin-table-cell"
                  scope="col"
                  style={{ textAlign: "right" }}
                >
                  <span className="whitespace-nowrap">last updated</span>
                </th>
              </tr>
            </thead>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Tokens;
