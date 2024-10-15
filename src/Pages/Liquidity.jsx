import React from "react";
import Header from "../components/Header";
const Liquidity = () => {
  return (
    <div className="mx-auto max-w-[1180px]">
      <Header />
      <main className="pb-24 pt-16 md:pb-48 md:pt-24">
        <div className="-mt-16 md:-mt-24">
          <div className="typo-module_t-display-xl__twhe3 typo-module_mobile-t-display-xl__9QPfK typo-module_neutral__9orA9 OverviewLiquidityView_Title__OB0Qu">
            Liquidity pool
            <div className="OverviewLiquidityView_LinkContainer__0NIpl">
              <div className="OverviewLiquidityView_LinkWrapper__wkSRK">
                <a
                  className="typo-module_t-body-md-strong__B-Sd1 typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9 link-module_link__Nwimt undefined"
                  href="https://docs.roninchain.com/apps/katana/create-pool"
                  target="_blank"
                >
                  <button className="button-module_button__Z331g button-module_intent-default__f1RNz button-module_size-default__caw9O button-module_variant-plain__hxRYr button-module_button-root__0roWY">
                    How it works?
                  </button>
                </a>
              </div>
              <a
                className="OverviewLiquidityView_Link__ztHi0"
                href="/liquidity/create-pool"
              >
                <button className="button-module_button__Z331g button-module_intent-primary__SAO1x button-module_size-default__caw9O button-module_button-root__0roWY">
                  Create new pool
                </button>
              </a>
            </div>
          </div>
          <div className="Banners_Banners__MLYV5"></div>
          <div className="dango-tabs dango-tabs-top tabs-module_tabs__UMeM9 tabs-module_default__ZTiTp tabs-module_underline__qEJfO tabs-module_top__Q00Kf tabs-module_horizontal__BEa1a tabs-module_tabs-root__Fz-je tabs-module_body__3nlu6">
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
                      id="rc-tabs-0-tab-Pools"
                      aria-controls="rc-tabs-0-panel-Pools"
                    >
                      <div className="TabSection_TabLabel__6sdYE">
                        Liquidity pools
                        <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3">
                          <div className="badge-module_badge__kTvKz badge-module_default-solid__76z0J badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                            <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs">
                              60
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="dango-tabs-tab">
                    <div
                      role="tab"
                      aria-selected="false"
                      className="dango-tabs-tab-btn"
                      tabIndex="0"
                      id="rc-tabs-0-tab-MyPositions"
                      aria-controls="rc-tabs-0-panel-MyPositions"
                    >
                      <div className="TabSection_TabLabel__6sdYE">
                        My positions
                      </div>
                    </div>
                  </div>
                  <div
                    className="dango-tabs-ink-bar dango-tabs-ink-bar-animated"
                    style={{ left: "0px", width: "179px" }}
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
                  id="rc-tabs-0-panel-Pools"
                  aria-labelledby="rc-tabs-0-tab-Pools"
                >
                  <div className="TabSection_LiquidityPoolSection__W7J6O">
                    <div className="OverviewStats_StatsCollapse__KBIIN">
                      <div className="collapse-module_header-content__zJikk">
                        <div className="OverviewStats_CollapseHeaderContent__uzOXl">
                          <svg viewBox="0 0 20 20" width="20" height="20">
                            <path
                              fill="currentColor"
                              fillRule="evenodd"
                              d="M8.5 3h2a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5ZM16 17H3a1 1 0 0 1 0-2h13a1 1 0 0 1 0 2ZM5.5 7h-2a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5Zm8 2h2a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5Z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-md__-HKdi typo-module_neutral__9orA9">
                            Liquidity pool statistics
                          </div>
                        </div>
                        <span className="collapse-module_toggle-icon__tt8Im">
                          <svg viewBox="0 0 20 20" width="20" height="20">
                            <path
                              fill="currentColor"
                              fillRule="evenodd"
                              d="M5.47 7.47a.75.75 0 0 1 1.06 0L10 10.94l3.47-3.47a.75.75 0 1 1 1.06 1.06l-4 4a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 0 1 0-1.06Z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </span>
                      </div>
                      <div
                        className="collapse-module_collapsible-content__31Wi8"
                        style={{ height: "0px" }}
                      >
                        <div>
                          <div className="OverviewStats_ContentWrapper__1ctQ3">
                            <div className="OverviewStats_Separator__aXOKR"></div>
                            <div className="OverviewStats_Content__artSj">
                              <div className="OverviewStats_StatItem__YLfGd">
                                <div className="typo-module_t-label__38Ly4 typo-module_mobile-t-label__G-AYO typo-module_neutral__9orA9 typo-module_dim__qoQFh OverviewStats_Uppercase__2IFRb">
                                  total value locked
                                </div>
                                <div className="typo-module_t-display-md__KVUIu typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9">
                                  $133.18M
                                </div>
                              </div>
                              <div className="OverviewStats_StatItem__YLfGd">
                                <div className="typo-module_t-label__38Ly4 typo-module_mobile-t-label__G-AYO typo-module_neutral__9orA9 typo-module_dim__qoQFh OverviewStats_Uppercase__2IFRb">
                                  All-time volume
                                </div>
                                <div className="typo-module_t-display-md__KVUIu typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9">
                                  $11.88B
                                </div>
                              </div>
                              <div className="OverviewStats_StatItem__YLfGd">
                                <div className="typo-module_t-label__38Ly4 typo-module_mobile-t-label__G-AYO typo-module_neutral__9orA9 typo-module_dim__qoQFh OverviewStats_Uppercase__2IFRb">
                                  lp fees
                                </div>
                                <div className="typo-module_t-display-md__KVUIu typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9">
                                  $29.7M
                                </div>
                              </div>
                              <div className="OverviewStats_StatItem__YLfGd">
                                <div className="typo-module_t-label__38Ly4 typo-module_mobile-t-label__G-AYO typo-module_neutral__9orA9 typo-module_dim__qoQFh OverviewStats_Uppercase__2IFRb">
                                  transactions
                                </div>
                                <div className="typo-module_t-display-md__KVUIu typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9">
                                  24,074,404
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="OverviewStats_StatsContainer__m9PM5">
                      <div className="OverviewStats_StatItem__YLfGd">
                        <div className="typo-module_t-label__38Ly4 typo-module_mobile-t-label__G-AYO typo-module_neutral__9orA9 typo-module_dim__qoQFh OverviewStats_Uppercase__2IFRb">
                          total value locked
                        </div>
                        <div className="typo-module_t-display-md__KVUIu typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9">
                          $133.18M
                        </div>
                      </div>
                      <div className="OverviewStats_StatItem__YLfGd">
                        <div className="typo-module_t-label__38Ly4 typo-module_mobile-t-label__G-AYO typo-module_neutral__9orA9 typo-module_dim__qoQFh OverviewStats_Uppercase__2IFRb">
                          All-time volume
                        </div>
                        <div className="typo-module_t-display-md__KVUIu typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9">
                          $11.88B
                        </div>
                      </div>
                      <div className="OverviewStats_StatItem__YLfGd">
                        <div className="typo-module_t-label__38Ly4 typo-module_mobile-t-label__G-AYO typo-module_neutral__9orA9 typo-module_dim__qoQFh OverviewStats_Uppercase__2IFRb">
                          lp fees
                        </div>
                        <div className="typo-module_t-display-md__KVUIu typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9">
                          $29.7M
                        </div>
                      </div>
                      <div className="OverviewStats_StatItem__YLfGd">
                        <div className="typo-module_t-label__38Ly4 typo-module_mobile-t-label__G-AYO typo-module_neutral__9orA9 typo-module_dim__qoQFh OverviewStats_Uppercase__2IFRb">
                          transactions
                        </div>
                        <div className="typo-module_t-display-md__KVUIu typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9">
                          24,074,404
                        </div>
                      </div>
                    </div>
                    <div className="LiquidityPoolList_Container__LGLbx">
                      <div className="TopTableView_Container__7CILq">
                        <div className="TopTableView_LeftSectionEl__XLN_9">
                          <div className="typo-module_t-display-sm__9lHbO typo-module_mobile-t-display-sm__DJcdx typo-module_neutral__9orA9">
                            Liquidity pools
                          </div>
                          <label className="switch-module_switch__M6-tU switch-module_primary__CrQz8 switch-module_large__VlKV1 switch-module_switch-root__2xj6b switch-module_wrapper__5-2P1 TopTableView_DesktopVersion__ZT2jn">
                            <input
                              type="checkbox"
                              className="switch-module_input__YKZRj"
                            />
                            <span className="switch-module_track__QNvnO">
                              <span className="switch-module_thumb__cunvF"></span>
                            </span>
                            <span className="switch-module_label__lscBr">
                              <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-md__-HKdi typo-module_neutral__9orA9">
                                ⚡Farms only
                              </div>
                            </span>
                          </label>
                          <label className="switch-module_switch__M6-tU switch-module_primary__CrQz8 switch-module_large__VlKV1 switch-module_switch-root__2xj6b switch-module_wrapper__5-2P1 TopTableView_MobileVersion__fgXg2">
                            <input
                              type="checkbox"
                              className="switch-module_input__YKZRj"
                            />
                            <span className="switch-module_track__QNvnO">
                              <span className="switch-module_thumb__cunvF"></span>
                            </span>
                            <span className="switch-module_label__lscBr">
                              <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-md__-HKdi typo-module_neutral__9orA9">
                                ⚡Farms
                              </div>
                            </span>
                          </label>
                        </div>
                        <div className="form-item-module_form__3-Rfq text-field-module_input-root__PSsoe">
                          <div className="input-module_container__Gch8D input-module_default__Rk4yp TopTableView_Input__fPEbj">
                            <div className="input-module_form__2zFJF">
                              <span className="input-module_prefix__uR1Sx">
                                <svg viewBox="0 0 20 20" width="20" height="20">
                                  <path
                                    fill="currentColor"
                                    d="M13.742 12.328a6.524 6.524 0 1 0-1.414 1.414l3.965 3.965a1 1 0 0 0 1.414-1.414l-3.965-3.965ZM4 8.5a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0Z"
                                  ></path>
                                </svg>
                              </span>
                              <input
                                placeholder="Search for pools"
                                className="input-module_formControl__oYbNL input-module_hasPrefix__Zh5xG"
                                value=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="ronin-table hoverable-row LiquidityPoolList_AllPairTable__sVPCQ ronin-table-fixed-column ronin-table-scroll-horizontal ronin-table-has-fix-left">
                        <div className="ronin-table-container">
                          <div
                            className="ronin-table-content"
                            style={{ overflow: "auto hidden" }}
                          >
                            <table
                              style={{
                                width: "auto",
                                minWidth: "100%",
                                tableLayout: "fixed",
                              }}
                            >
                              <colgroup></colgroup>
                              <thead className="ronin-table-thead">
                                <tr>
                                  <th
                                    className="ronin-table-cell LiquidityPoolList_IdColumn__8euti ronin-table-cell-fix-left ronin-table-cell-fix-left-last"
                                    scope="col"
                                    style={{
                                      textAlign: "left",
                                      position: "sticky",
                                      left: "0px",
                                    }}
                                  >
                                    Pools
                                  </th>
                                  <th
                                    className="ronin-table-cell"
                                    scope="col"
                                    style={{ textAlign: "right" }}
                                  >
                                    tvl
                                  </th>
                                  <th
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    scope="col"
                                    style={{ textAlign: "right" }}
                                  >
                                    <div className="tooltips_TooltipTriggerEl__pNWYn">
                                      <div className="WrapperTooltipTriggerEl_Container___9xus">
                                        apr
                                      </div>
                                    </div>
                                  </th>
                                  <th
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    scope="col"
                                    style={{ textAlign: "right" }}
                                  >
                                    <div className="tooltips_TooltipTriggerEl__pNWYn">
                                      <div className="WrapperTooltipTriggerEl_Container___9xus">
                                        lp fees (24h)
                                      </div>
                                    </div>
                                  </th>
                                  <th
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    scope="col"
                                    style={{ textAlign: "right" }}
                                  >
                                    volume (24h)
                                  </th>
                                  <th
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    scope="col"
                                    style={{ textAlign: "right" }}
                                  >
                                    volume (7d)
                                  </th>
                                </tr>
                              </thead>
                              <tbody className="ronin-table-tbody">
                                <tr
                                  aria-hidden="true"
                                  className="ronin-table-measure-row"
                                  style={{ height: 0, fontSize: 0 }}
                                >
                                  <td
                                    style={{
                                      padding: 0,
                                      border: 0,
                                      height: 0,
                                    }}
                                  >
                                    <div
                                      style={{
                                        height: "0px",
                                        overflow: "hidden",
                                      }}
                                    >
                                      &nbsp;
                                    </div>
                                  </td>
                                  <td
                                    style={{
                                      padding: 0,
                                      border: 0,
                                      height: 0,
                                    }}
                                  >
                                    <div
                                      style={{
                                        height: "0px",
                                        overflow: "hidden",
                                      }}
                                    >
                                      &nbsp;
                                    </div>
                                  </td>
                                  <td
                                    style={{
                                      padding: 0,
                                      border: 0,
                                      height: 0,
                                    }}
                                  >
                                    <div
                                      style={{
                                        height: "0px",
                                        overflow: "hidden",
                                      }}
                                    >
                                      &nbsp;
                                    </div>
                                  </td>
                                  <td
                                    style={{
                                      padding: 0,
                                      border: 0,
                                      height: 0,
                                    }}
                                  >
                                    <div
                                      style={{
                                        height: "0px",
                                        overflow: "hidden",
                                      }}
                                    >
                                      &nbsp;
                                    </div>
                                  </td>
                                  <td
                                    style={{
                                      padding: 0,
                                      border: 0,
                                      height: 0,
                                    }}
                                  >
                                    <div
                                      style={{
                                        height: "0px",
                                        overflow: "hidden",
                                      }}
                                    >
                                      &nbsp;
                                    </div>
                                  </td>
                                  <td
                                    style={{
                                      padding: 0,
                                      border: 0,
                                      height: 0,
                                    }}
                                  >
                                    <div
                                      style={{
                                        height: "0px",
                                        overflow: "hidden",
                                      }}
                                    >
                                      &nbsp;
                                    </div>
                                  </td>
                                </tr>
                                <tr
                                  className="ronin-table-row ronin-table-row-level-0 LiquidityPoolList_AllPairRow__R7Wzu"
                                  style={{ cursor: "pointer" }}
                                >
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_IdColumn__8euti ronin-table-cell-fix-left ronin-table-cell-fix-left-last"
                                    style={{
                                      textAlign: "left",
                                      position: "sticky",
                                      left: "0px",
                                    }}
                                  >
                                    <div className="LiquidityPoolList_RowElement__TV0sk LiquidityPoolList_IdColumnCell__w6odV">
                                      <div
                                        style={{
                                          height: "24px",
                                          width: "fit-content",
                                          display: "inline-flex",
                                          alignItems: "center",
                                        }}
                                      >
                                        <img
                                          alt="LP token logo"
                                          src="https://cdn.skymavis.com/ronin/2020/erc20/0x2ecb08f87f075b5769fe543d0e52e40140575ea7/logo.png"
                                          style={{
                                            width: "44.2014px",
                                            height: "44.2014px",
                                          }}
                                        />
                                      </div>
                                      <div className="LiquidityPoolList_IdItem__hHqio">
                                        <div className="LiquidityPoolList_IdItemLabel__z_svK">
                                          WETH - RON
                                        </div>
                                        <div className="LiquidityPoolList_IdItemIcon__AwtKy">
                                          <div>
                                            <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3 FarmAvailableTagView_FarmAvailableSingleTagWrapper__qLyPz">
                                              <div className="badge-module_badge__kTvKz badge-module_default-solid__76z0J badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                                <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs">
                                                  <div className="FarmAvailableTagView_FarmAvailableSingleTagLabel__DtVjz">
                                                    ⚡
                                                    <img
                                                      alt="token logo"
                                                      src="https://cdn.skymavis.com/ronin/2020/ron/logo.png"
                                                      style={{
                                                        width: "16px",
                                                        height: "16px",
                                                      }}
                                                    />
                                                  </div>
                                                </span>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                  <td
                                    className="ronin-table-cell"
                                    style={{ textAlign: "right" }}
                                  >
                                    $65.49M
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    <div>
                                      <div className="WrapperTooltipTriggerEl_Container___9xus">
                                        <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-md__-HKdi typo-module_neutral__9orA9">
                                          30.15%
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $2.11K
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $844.42K
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $5.57M
                                  </td>
                                </tr>
                                <tr
                                  className="ronin-table-row ronin-table-row-level-0 LiquidityPoolList_AllPairRow__R7Wzu"
                                  style={{ cursor: "pointer" }}
                                >
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_IdColumn__8euti ronin-table-cell-fix-left ronin-table-cell-fix-left-last"
                                    style={{
                                      textAlign: "left",
                                      position: "sticky",
                                      left: "0px",
                                    }}
                                  >
                                    <div className="LiquidityPoolList_RowElement__TV0sk LiquidityPoolList_IdColumnCell__w6odV">
                                      <div
                                        style={{
                                          height: "24px",
                                          width: "fit-content",
                                          display: "inline-flex",
                                          alignItems: "center",
                                        }}
                                      >
                                        <img
                                          alt="LP token logo"
                                          src="https://cdn.skymavis.com/ronin/2020/erc20/0x4f7687affc10857fccd0938ecda0947de7ad3812/logo.png"
                                          style={{
                                            width: "44.2014px",
                                            height: "44.2014px",
                                          }}
                                        />
                                      </div>
                                      <div className="LiquidityPoolList_IdItem__hHqio">
                                        <div className="LiquidityPoolList_IdItemLabel__z_svK">
                                          USDC - RON
                                        </div>
                                        <div className="LiquidityPoolList_IdItemIcon__AwtKy">
                                          <div>
                                            <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3 FarmAvailableTagView_FarmAvailableSingleTagWrapper__qLyPz">
                                              <div className="badge-module_badge__kTvKz badge-module_default-solid__76z0J badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                                <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs">
                                                  <div className="FarmAvailableTagView_FarmAvailableSingleTagLabel__DtVjz">
                                                    ⚡
                                                    <img
                                                      alt="token logo"
                                                      src="https://cdn.skymavis.com/ronin/2020/ron/logo.png"
                                                      style={{
                                                        width: "16px",
                                                        height: "16px",
                                                      }}
                                                    />
                                                  </div>
                                                </span>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                  <td
                                    className="ronin-table-cell"
                                    style={{ textAlign: "right" }}
                                  >
                                    $22.41M
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    <div>
                                      <div className="WrapperTooltipTriggerEl_Container___9xus">
                                        <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-md__-HKdi typo-module_neutral__9orA9">
                                          35.61%
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $2.07K
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $826.69K
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $5.55M
                                  </td>
                                </tr>
                                <tr
                                  className="ronin-table-row ronin-table-row-level-0 LiquidityPoolList_AllPairRow__R7Wzu"
                                  style={{ cursor: "pointer" }}
                                >
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_IdColumn__8euti ronin-table-cell-fix-left ronin-table-cell-fix-left-last"
                                    style={{
                                      textAlign: "left",
                                      position: "sticky",
                                      left: "0px",
                                    }}
                                  >
                                    <div className="LiquidityPoolList_RowElement__TV0sk LiquidityPoolList_IdColumnCell__w6odV">
                                      <div
                                        style={{
                                          height: "24px",
                                          width: "fit-content",
                                          display: "inline-flex",
                                          alignItems: "center",
                                        }}
                                      >
                                        <img
                                          alt="LP token logo"
                                          src="https://cdn.skymavis.com/ronin/2020/erc20/0x32d1dbb6a4275133cc49f1c61653be3998ada4ff/logo.png"
                                          style={{
                                            width: "44.2014px",
                                            height: "44.2014px",
                                          }}
                                        />
                                      </div>
                                      <div className="LiquidityPoolList_IdItem__hHqio">
                                        <div className="LiquidityPoolList_IdItemLabel__z_svK">
                                          AXS - RON
                                        </div>
                                        <div className="LiquidityPoolList_IdItemIcon__AwtKy">
                                          <div>
                                            <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3 FarmAvailableTagView_FarmAvailableSingleTagWrapper__qLyPz">
                                              <div className="badge-module_badge__kTvKz badge-module_default-solid__76z0J badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                                <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs">
                                                  <div className="FarmAvailableTagView_FarmAvailableSingleTagLabel__DtVjz">
                                                    ⚡
                                                    <img
                                                      alt="token logo"
                                                      src="https://cdn.skymavis.com/ronin/2020/ron/logo.png"
                                                      style={{
                                                        width: "16px",
                                                        height: "16px",
                                                      }}
                                                    />
                                                  </div>
                                                </span>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                  <td
                                    className="ronin-table-cell"
                                    style={{ textAlign: "right" }}
                                  >
                                    $21.88M
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    <div>
                                      <div className="WrapperTooltipTriggerEl_Container___9xus">
                                        <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-md__-HKdi typo-module_neutral__9orA9">
                                          34.84%
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $882.2
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $352.88K
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $2.73M
                                  </td>
                                </tr>
                                <tr
                                  className="ronin-table-row ronin-table-row-level-0 LiquidityPoolList_AllPairRow__R7Wzu"
                                  style={{ cursor: "pointer" }}
                                >
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_IdColumn__8euti ronin-table-cell-fix-left ronin-table-cell-fix-left-last"
                                    style={{
                                      textAlign: "left",
                                      position: "sticky",
                                      left: "0px",
                                    }}
                                  >
                                    <div className="LiquidityPoolList_RowElement__TV0sk LiquidityPoolList_IdColumnCell__w6odV">
                                      <div
                                        style={{
                                          height: "24px",
                                          width: "fit-content",
                                          display: "inline-flex",
                                          alignItems: "center",
                                        }}
                                      >
                                        <img
                                          alt="LP token logo"
                                          src="https://cdn.skymavis.com/ronin/2020/erc20/0x8f1c5eda143fa3d1bea8b4e92f33562014d30e0d/logo.png"
                                          style={{
                                            width: "44.2014px",
                                            height: "44.2014px",
                                          }}
                                        />
                                      </div>
                                      <div className="LiquidityPoolList_IdItem__hHqio">
                                        <div className="LiquidityPoolList_IdItemLabel__z_svK">
                                          SLP - RON
                                        </div>
                                        <div className="LiquidityPoolList_IdItemIcon__AwtKy">
                                          <div>
                                            <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3 FarmAvailableTagView_FarmAvailableSingleTagWrapper__qLyPz">
                                              <div className="badge-module_badge__kTvKz badge-module_default-solid__76z0J badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                                <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs">
                                                  <div className="FarmAvailableTagView_FarmAvailableSingleTagLabel__DtVjz">
                                                    ⚡
                                                    <img
                                                      alt="token logo"
                                                      src="https://cdn.skymavis.com/ronin/2020/ron/logo.png"
                                                      style={{
                                                        width: "16px",
                                                        height: "16px",
                                                      }}
                                                    />
                                                  </div>
                                                </span>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                  <td
                                    className="ronin-table-cell"
                                    style={{ textAlign: "right" }}
                                  >
                                    $10.63M
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    <div>
                                      <div className="WrapperTooltipTriggerEl_Container___9xus">
                                        <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-md__-HKdi typo-module_neutral__9orA9">
                                          34.54%
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $215.62
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $86.25K
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $630.3K
                                  </td>
                                </tr>
                                <tr
                                  className="ronin-table-row ronin-table-row-level-0 LiquidityPoolList_AllPairRow__R7Wzu"
                                  style={{ cursor: "pointer" }}
                                >
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_IdColumn__8euti ronin-table-cell-fix-left ronin-table-cell-fix-left-last"
                                    style={{
                                      textAlign: "left",
                                      position: "sticky",
                                      left: "0px",
                                    }}
                                  >
                                    <div className="LiquidityPoolList_RowElement__TV0sk LiquidityPoolList_IdColumnCell__w6odV">
                                      <div
                                        style={{
                                          height: "24px",
                                          width: "fit-content",
                                          display: "inline-flex",
                                          alignItems: "center",
                                        }}
                                      >
                                        <img
                                          alt="LP token logo"
                                          src="https://cdn.skymavis.com/ronin/2020/erc20/0x306a28279d04a47468ed83d55088d0dcd1369294/logo.png"
                                          style={{
                                            width: "44.2014px",
                                            height: "44.2014px",
                                          }}
                                        />
                                      </div>
                                      <div className="LiquidityPoolList_IdItem__hHqio">
                                        <div className="LiquidityPoolList_IdItemLabel__z_svK">
                                          SLP - WETH
                                        </div>
                                        <div className="LiquidityPoolList_IdItemIcon__AwtKy"></div>
                                      </div>
                                    </div>
                                  </td>
                                  <td
                                    className="ronin-table-cell"
                                    style={{ textAlign: "right" }}
                                  >
                                    $4.19M
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-md__-HKdi typo-module_neutral__9orA9">
                                      1.17%
                                    </div>
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $189.33
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $75.73K
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $374.36K
                                  </td>
                                </tr>
                                <tr
                                  className="ronin-table-row ronin-table-row-level-0 LiquidityPoolList_AllPairRow__R7Wzu"
                                  style={{ cursor: "pointer" }}
                                >
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_IdColumn__8euti ronin-table-cell-fix-left ronin-table-cell-fix-left-last"
                                    style={{
                                      textAlign: "left",
                                      position: "sticky",
                                      left: "0px",
                                    }}
                                  >
                                    <div className="LiquidityPoolList_RowElement__TV0sk LiquidityPoolList_IdColumnCell__w6odV">
                                      <div
                                        style={{
                                          height: "24px",
                                          width: "fit-content",
                                          display: "inline-flex",
                                          alignItems: "center",
                                        }}
                                      >
                                        <img
                                          alt="LP token logo"
                                          src="https://cdn.skymavis.com/ronin/2020/erc20/0xa7964991f339668107e2b6a6f6b8e8b74aa9d017/logo.png"
                                          style={{
                                            width: "44.2014px",
                                            height: "44.2014px",
                                          }}
                                        />
                                      </div>
                                      <div className="LiquidityPoolList_IdItem__hHqio">
                                        <div className="LiquidityPoolList_IdItemLabel__z_svK">
                                          USDC - WETH
                                        </div>
                                        <div className="LiquidityPoolList_IdItemIcon__AwtKy"></div>
                                      </div>
                                    </div>
                                  </td>
                                  <td
                                    className="ronin-table-cell"
                                    style={{ textAlign: "right" }}
                                  >
                                    $2.59M
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-md__-HKdi typo-module_neutral__9orA9">
                                      2.54%
                                    </div>
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $219.46
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $87.79K
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $504.51K
                                  </td>
                                </tr>
                                <tr
                                  className="ronin-table-row ronin-table-row-level-0 LiquidityPoolList_AllPairRow__R7Wzu"
                                  style={{ cursor: "pointer" }}
                                >
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_IdColumn__8euti ronin-table-cell-fix-left ronin-table-cell-fix-left-last"
                                    style={{
                                      textAlign: "left",
                                      position: "sticky",
                                      left: "0px",
                                    }}
                                  >
                                    <div className="LiquidityPoolList_RowElement__TV0sk LiquidityPoolList_IdColumnCell__w6odV">
                                      <div
                                        style={{
                                          height: "24px",
                                          width: "fit-content",
                                          display: "inline-flex",
                                          alignItems: "center",
                                        }}
                                      >
                                        <img
                                          alt="LP token logo"
                                          src="https://cdn.skymavis.com/ronin/2020/erc20/0xc6344bc1604fcab1a5aad712d766796e2b7a70b9/logo.png"
                                          style={{
                                            width: "44.2014px",
                                            height: "44.2014px",
                                          }}
                                        />
                                      </div>
                                      <div className="LiquidityPoolList_IdItem__hHqio">
                                        <div className="LiquidityPoolList_IdItemLabel__z_svK">
                                          AXS - WETH
                                        </div>
                                        <div className="LiquidityPoolList_IdItemIcon__AwtKy"></div>
                                      </div>
                                    </div>
                                  </td>
                                  <td
                                    className="ronin-table-cell"
                                    style={{ textAlign: "right" }}
                                  >
                                    $2.04M
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-md__-HKdi typo-module_neutral__9orA9">
                                      3.69%
                                    </div>
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $196.37
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $78.55K
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $578.8K
                                  </td>
                                </tr>
                                <tr
                                  className="ronin-table-row ronin-table-row-level-0 LiquidityPoolList_AllPairRow__R7Wzu"
                                  style={{ cursor: "pointer" }}
                                >
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_IdColumn__8euti ronin-table-cell-fix-left ronin-table-cell-fix-left-last"
                                    style={{
                                      textAlign: "left",
                                      position: "sticky",
                                      left: "0px",
                                    }}
                                  >
                                    <div className="LiquidityPoolList_RowElement__TV0sk LiquidityPoolList_IdColumnCell__w6odV">
                                      <div
                                        style={{
                                          height: "24px",
                                          width: "fit-content",
                                          display: "inline-flex",
                                          alignItems: "center",
                                        }}
                                      >
                                        <img
                                          alt="LP token logo"
                                          src="https://cdn.skymavis.com/ronin/2020/erc20/0xb30b54b9a36188d33eeb34b29eaa38d12511e997/logo.png"
                                          style={{
                                            width: "44.2014px",
                                            height: "44.2014px",
                                          }}
                                        />
                                      </div>
                                      <div className="LiquidityPoolList_IdItem__hHqio">
                                        <div className="LiquidityPoolList_IdItemLabel__z_svK">
                                          PIXEL - RON
                                        </div>
                                        <div className="LiquidityPoolList_IdItemIcon__AwtKy"></div>
                                      </div>
                                    </div>
                                  </td>
                                  <td
                                    className="ronin-table-cell"
                                    style={{ textAlign: "right" }}
                                  >
                                    $1.32M
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-md__-HKdi typo-module_neutral__9orA9">
                                      4.87%
                                    </div>
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $179.21
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $71.68K
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $493.49K
                                  </td>
                                </tr>
                                <tr
                                  className="ronin-table-row ronin-table-row-level-0 LiquidityPoolList_AllPairRow__R7Wzu"
                                  style={{ cursor: "pointer" }}
                                >
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_IdColumn__8euti ronin-table-cell-fix-left ronin-table-cell-fix-left-last"
                                    style={{
                                      textAlign: "left",
                                      position: "sticky",
                                      left: "0px",
                                    }}
                                  >
                                    <div className="LiquidityPoolList_RowElement__TV0sk LiquidityPoolList_IdColumnCell__w6odV">
                                      <div
                                        style={{
                                          height: "24px",
                                          width: "fit-content",
                                          display: "inline-flex",
                                          alignItems: "center",
                                        }}
                                      >
                                        <img
                                          alt="LP token logo"
                                          src="https://cdn.skymavis.com/ronin/2020/erc20/0xa42f1fe5efb609137c89126f9e46cad30c469e01/logo.png"
                                          style={{
                                            width: "44.2014px",
                                            height: "44.2014px",
                                          }}
                                        />
                                      </div>
                                      <div className="LiquidityPoolList_IdItem__hHqio">
                                        <div className="LiquidityPoolList_IdItemLabel__z_svK">
                                          APRS - RON
                                        </div>
                                        <div className="LiquidityPoolList_IdItemIcon__AwtKy"></div>
                                      </div>
                                    </div>
                                  </td>
                                  <td
                                    className="ronin-table-cell"
                                    style={{ textAlign: "right" }}
                                  >
                                    $1.2M
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-md__-HKdi typo-module_neutral__9orA9">
                                      1.87%
                                    </div>
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $97.01
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $38.81K
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $172.82K
                                  </td>
                                </tr>
                                <tr
                                  className="ronin-table-row ronin-table-row-level-0 LiquidityPoolList_AllPairRow__R7Wzu"
                                  style={{ cursor: "pointer" }}
                                >
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_IdColumn__8euti ronin-table-cell-fix-left ronin-table-cell-fix-left-last"
                                    style={{
                                      textAlign: "left",
                                      position: "sticky",
                                      left: "0px",
                                    }}
                                  >
                                    <div className="LiquidityPoolList_RowElement__TV0sk LiquidityPoolList_IdColumnCell__w6odV">
                                      <div
                                        style={{
                                          height: "24px",
                                          width: "fit-content",
                                          display: "inline-flex",
                                          alignItems: "center",
                                        }}
                                      >
                                        <img
                                          alt="LP token logo"
                                          src="https://cdn.skymavis.com/ronin/2020/erc20/0x6ead2a36fdc4a538c0c51a4380fa4d19de790a72/logo.png"
                                          style={{
                                            width: "44.2014px",
                                            height: "44.2014px",
                                          }}
                                        />
                                      </div>
                                      <div className="LiquidityPoolList_IdItem__hHqio">
                                        <div className="LiquidityPoolList_IdItemLabel__z_svK">
                                          YGG - RON
                                        </div>
                                        <div className="LiquidityPoolList_IdItemIcon__AwtKy"></div>
                                      </div>
                                    </div>
                                  </td>
                                  <td
                                    className="ronin-table-cell"
                                    style={{ textAlign: "right" }}
                                  >
                                    $531.12K
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-md__-HKdi typo-module_neutral__9orA9">
                                      3.36%
                                    </div>
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $57.55
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $23.02K
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $136.8K
                                  </td>
                                </tr>
                                <tr
                                  className="ronin-table-row ronin-table-row-level-0 LiquidityPoolList_AllPairRow__R7Wzu"
                                  style={{ cursor: "pointer" }}
                                >
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_IdColumn__8euti ronin-table-cell-fix-left ronin-table-cell-fix-left-last"
                                    style={{
                                      textAlign: "left",
                                      position: "sticky",
                                      left: "0px",
                                    }}
                                  >
                                    <div className="LiquidityPoolList_RowElement__TV0sk LiquidityPoolList_IdColumnCell__w6odV">
                                      <div
                                        style={{
                                          height: "24px",
                                          width: "fit-content",
                                          display: "inline-flex",
                                          alignItems: "center",
                                        }}
                                      >
                                        <img
                                          alt="LP token logo"
                                          src="https://cdn.skymavis.com/ronin/2020/erc20/0xc022f50b5bc794aa2466889c042d4c51a853c13a/logo.png"
                                          style={{
                                            width: "44.2014px",
                                            height: "44.2014px",
                                          }}
                                        />
                                      </div>
                                      <div className="LiquidityPoolList_IdItem__hHqio">
                                        <div className="LiquidityPoolList_IdItemLabel__z_svK">
                                          BANANA - RON
                                        </div>
                                        <div className="LiquidityPoolList_IdItemIcon__AwtKy"></div>
                                      </div>
                                    </div>
                                  </td>
                                  <td
                                    className="ronin-table-cell"
                                    style={{ textAlign: "right" }}
                                  >
                                    $302.38K
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-md__-HKdi typo-module_neutral__9orA9">
                                      2.07%
                                    </div>
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $10
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $4K
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $48.09K
                                  </td>
                                </tr>
                                <tr
                                  className="ronin-table-row ronin-table-row-level-0 LiquidityPoolList_AllPairRow__R7Wzu"
                                  style={{ cursor: "pointer" }}
                                >
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_IdColumn__8euti ronin-table-cell-fix-left ronin-table-cell-fix-left-last"
                                    style={{
                                      textAlign: "left",
                                      position: "sticky",
                                      left: "0px",
                                    }}
                                  >
                                    <div className="LiquidityPoolList_RowElement__TV0sk LiquidityPoolList_IdColumnCell__w6odV">
                                      <div
                                        style={{
                                          height: "24px",
                                          width: "fit-content",
                                          display: "inline-flex",
                                          alignItems: "center",
                                        }}
                                      >
                                        <img
                                          alt="LP token logo"
                                          src="https://cdn.skymavis.com/ronin/2020/erc20/0x67b321c2c6e880aa3b970c8eb20be414d9ebe4df/logo.png"
                                          style={{
                                            width: "44.2014px",
                                            height: "44.2014px",
                                          }}
                                        />
                                      </div>
                                      <div className="LiquidityPoolList_IdItem__hHqio">
                                        <div className="LiquidityPoolList_IdItemLabel__z_svK">
                                          WBTC - RON
                                        </div>
                                        <div className="LiquidityPoolList_IdItemIcon__AwtKy"></div>
                                      </div>
                                    </div>
                                  </td>
                                  <td
                                    className="ronin-table-cell"
                                    style={{ textAlign: "right" }}
                                  >
                                    $291.21K
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-md__-HKdi typo-module_neutral__9orA9">
                                      1.62%
                                    </div>
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $8.56
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $3.42K
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $36.28K
                                  </td>
                                </tr>
                                <tr
                                  className="ronin-table-row ronin-table-row-level-0 LiquidityPoolList_AllPairRow__R7Wzu"
                                  style={{ cursor: "pointer" }}
                                >
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_IdColumn__8euti ronin-table-cell-fix-left ronin-table-cell-fix-left-last"
                                    style={{
                                      textAlign: "left",
                                      position: "sticky",
                                      left: "0px",
                                    }}
                                  >
                                    <div className="LiquidityPoolList_RowElement__TV0sk LiquidityPoolList_IdColumnCell__w6odV">
                                      <div
                                        style={{
                                          height: "24px",
                                          width: "fit-content",
                                          display: "inline-flex",
                                          alignItems: "center",
                                        }}
                                      >
                                        <img
                                          alt="LP token logo"
                                          src="https://cdn.skymavis.com/ronin/2020/erc20/0x2adedce2a7e03abf24a7e7eedddd0c0ea52d23f5/logo.png"
                                          style={{
                                            width: "44.2014px",
                                            height: "44.2014px",
                                          }}
                                        />
                                      </div>
                                      <div className="LiquidityPoolList_IdItem__hHqio">
                                        <div className="LiquidityPoolList_IdItemLabel__z_svK">
                                          PHPC - RON
                                        </div>
                                        <div className="LiquidityPoolList_IdItemIcon__AwtKy">
                                          <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3">
                                            <div className="badge-module_badge__kTvKz badge-module_default-solid__76z0J badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                              <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs">
                                                <div>🌱</div>
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                  <td
                                    className="ronin-table-cell"
                                    style={{ textAlign: "right" }}
                                  >
                                    $127.97K
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-md__-HKdi typo-module_neutral__9orA9">
                                      1.29%
                                    </div>
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $4.2
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $1.68K
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $12.66K
                                  </td>
                                </tr>
                                <tr
                                  className="ronin-table-row ronin-table-row-level-0 LiquidityPoolList_AllPairRow__R7Wzu"
                                  style={{ cursor: "pointer" }}
                                >
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_IdColumn__8euti ronin-table-cell-fix-left ronin-table-cell-fix-left-last"
                                    style={{
                                      textAlign: "left",
                                      position: "sticky",
                                      left: "0px",
                                    }}
                                  >
                                    <div className="LiquidityPoolList_RowElement__TV0sk LiquidityPoolList_IdColumnCell__w6odV">
                                      <div
                                        style={{
                                          height: "24px",
                                          width: "fit-content",
                                          display: "inline-flex",
                                          alignItems: "center",
                                        }}
                                      >
                                        <img
                                          alt="LP token logo"
                                          src="https://cdn.skymavis.com/ronin/2020/erc20/0x7674009e2f65c69fe8aef38a37672be7c2e61580/logo.png"
                                          style={{
                                            width: "44.2014px",
                                            height: "44.2014px",
                                          }}
                                        />
                                      </div>
                                      <div className="LiquidityPoolList_IdItem__hHqio">
                                        <div className="LiquidityPoolList_IdItemLabel__z_svK">
                                          RON - ANIMA
                                        </div>
                                        <div className="LiquidityPoolList_IdItemIcon__AwtKy">
                                          <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3">
                                            <div className="badge-module_badge__kTvKz badge-module_default-solid__76z0J badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                              <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs">
                                                <div>🌱</div>
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                  <td
                                    className="ronin-table-cell"
                                    style={{ textAlign: "right" }}
                                  >
                                    $66.1K
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-md__-HKdi typo-module_neutral__9orA9">
                                      0.29%
                                    </div>
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $0.09
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $36.02
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $1.49K
                                  </td>
                                </tr>
                                <tr
                                  className="ronin-table-row ronin-table-row-level-0 LiquidityPoolList_AllPairRow__R7Wzu"
                                  style={{ cursor: "pointer" }}
                                >
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_IdColumn__8euti ronin-table-cell-fix-left ronin-table-cell-fix-left-last"
                                    style={{
                                      textAlign: "left",
                                      position: "sticky",
                                      left: "0px",
                                    }}
                                  >
                                    <div className="LiquidityPoolList_RowElement__TV0sk LiquidityPoolList_IdColumnCell__w6odV">
                                      <div
                                        style={{
                                          height: "24px",
                                          width: "fit-content",
                                          display: "inline-flex",
                                          alignItems: "center",
                                        }}
                                      >
                                        <img
                                          alt="LP token logo"
                                          src="https://cdn.skymavis.com/ronin/2020/erc20/0xc717ae6924a822f50eb9780fa279fdc7ced07771/logo.png"
                                          style={{
                                            width: "44.2014px",
                                            height: "44.2014px",
                                          }}
                                        />
                                      </div>
                                      <div className="LiquidityPoolList_IdItem__hHqio">
                                        <div className="LiquidityPoolList_IdItemLabel__z_svK">
                                          USDC - PIXEL
                                        </div>
                                        <div className="LiquidityPoolList_IdItemIcon__AwtKy"></div>
                                      </div>
                                    </div>
                                  </td>
                                  <td
                                    className="ronin-table-cell"
                                    style={{ textAlign: "right" }}
                                  >
                                    $49.2K
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-md__-HKdi typo-module_neutral__9orA9">
                                      10.00%
                                    </div>
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $14.76
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $5.9K
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $37.58K
                                  </td>
                                </tr>
                                <tr
                                  className="ronin-table-row ronin-table-row-level-0 LiquidityPoolList_AllPairRow__R7Wzu"
                                  style={{ cursor: "pointer" }}
                                >
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_IdColumn__8euti ronin-table-cell-fix-left ronin-table-cell-fix-left-last"
                                    style={{
                                      textAlign: "left",
                                      position: "sticky",
                                      left: "0px",
                                    }}
                                  >
                                    <div className="LiquidityPoolList_RowElement__TV0sk LiquidityPoolList_IdColumnCell__w6odV">
                                      <div
                                        style={{
                                          height: "24px",
                                          width: "fit-content",
                                          display: "inline-flex",
                                          alignItems: "center",
                                        }}
                                      >
                                        <img
                                          alt="LP token logo"
                                          src="https://cdn.skymavis.com/ronin/2020/erc20/0x572bca391432053cded92926d429e02a079c914e/logo.png"
                                          style={{
                                            width: "44.2014px",
                                            height: "44.2014px",
                                          }}
                                        />
                                      </div>
                                      <div className="LiquidityPoolList_IdItem__hHqio">
                                        <div className="LiquidityPoolList_IdItemLabel__z_svK">
                                          USDC - AXS
                                        </div>
                                        <div className="LiquidityPoolList_IdItemIcon__AwtKy"></div>
                                      </div>
                                    </div>
                                  </td>
                                  <td
                                    className="ronin-table-cell"
                                    style={{ textAlign: "right" }}
                                  >
                                    $37.02K
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-md__-HKdi typo-module_neutral__9orA9">
                                      10.09%
                                    </div>
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $13.31
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $5.32K
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $28.66K
                                  </td>
                                </tr>
                                <tr
                                  className="ronin-table-row ronin-table-row-level-0 LiquidityPoolList_AllPairRow__R7Wzu"
                                  style={{ cursor: "pointer" }}
                                >
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_IdColumn__8euti ronin-table-cell-fix-left ronin-table-cell-fix-left-last"
                                    style={{
                                      textAlign: "left",
                                      position: "sticky",
                                      left: "0px",
                                    }}
                                  >
                                    <div className="LiquidityPoolList_RowElement__TV0sk LiquidityPoolList_IdColumnCell__w6odV">
                                      <div
                                        style={{
                                          height: "24px",
                                          width: "fit-content",
                                          display: "inline-flex",
                                          alignItems: "center",
                                        }}
                                      >
                                        <img
                                          alt="LP token logo"
                                          src="https://cdn.skymavis.com/ronin/2020/erc20/0x363475ce45aef7ce55850d51872639464f993dd4/logo.png"
                                          style={{
                                            width: "44.2014px",
                                            height: "44.2014px",
                                          }}
                                        />
                                      </div>
                                      <div className="LiquidityPoolList_IdItem__hHqio">
                                        <div className="LiquidityPoolList_IdItemLabel__z_svK">
                                          BERRY - RON
                                        </div>
                                        <div className="LiquidityPoolList_IdItemIcon__AwtKy">
                                          <div>
                                            <svg
                                              color="var(--dg-tc-icon-warning)"
                                              viewBox="0 0 20 20"
                                              width="24"
                                              height="24"
                                            >
                                              <path
                                                fill="currentColor"
                                                d="M17.8 14.526 11.483 2.88a1.668 1.668 0 0 0-.683-.68 1.693 1.693 0 0 0-2.284.68L2.2 14.526A1.678 1.678 0 0 0 3.686 17h12.628a1.7 1.7 0 0 0 1.308-.615 1.673 1.673 0 0 0 .178-1.859ZM10 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-3.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4Z"
                                              ></path>
                                            </svg>
                                          </div>
                                          <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3">
                                            <div className="badge-module_badge__kTvKz badge-module_default-solid__76z0J badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                              <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs">
                                                <div>🌱</div>
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                  <td
                                    className="ronin-table-cell"
                                    style={{ textAlign: "right" }}
                                  >
                                    $18.41K
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-md__-HKdi typo-module_neutral__9orA9">
                                      --%
                                    </div>
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $0
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $0
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $0
                                  </td>
                                </tr>
                                <tr
                                  className="ronin-table-row ronin-table-row-level-0 LiquidityPoolList_AllPairRow__R7Wzu"
                                  style={{ cursor: "pointer" }}
                                >
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_IdColumn__8euti ronin-table-cell-fix-left ronin-table-cell-fix-left-last"
                                    style={{
                                      textAlign: "left",
                                      position: "sticky",
                                      left: "0px",
                                    }}
                                  >
                                    <div className="LiquidityPoolList_RowElement__TV0sk LiquidityPoolList_IdColumnCell__w6odV">
                                      <div
                                        style={{
                                          height: "24px",
                                          width: "fit-content",
                                          display: "inline-flex",
                                          alignItems: "center",
                                        }}
                                      >
                                        <img
                                          alt="LP token logo"
                                          src="https://cdn.skymavis.com/ronin/2020/erc20/0x52022808db40a5077da5875c140375470cc181b3/logo.png"
                                          style={{
                                            width: "44.2014px",
                                            height: "44.2014px",
                                          }}
                                        />
                                      </div>
                                      <div className="LiquidityPoolList_IdItem__hHqio">
                                        <div className="LiquidityPoolList_IdItemLabel__z_svK">
                                          AXS - SLP
                                        </div>
                                        <div className="LiquidityPoolList_IdItemIcon__AwtKy"></div>
                                      </div>
                                    </div>
                                  </td>
                                  <td
                                    className="ronin-table-cell"
                                    style={{ textAlign: "right" }}
                                  >
                                    $3.7K
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-md__-HKdi typo-module_neutral__9orA9">
                                      23.87%
                                    </div>
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $2.57
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $1.03K
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $6.78K
                                  </td>
                                </tr>
                                <tr
                                  className="ronin-table-row ronin-table-row-level-0 LiquidityPoolList_AllPairRow__R7Wzu"
                                  style={{ cursor: "pointer" }}
                                >
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_IdColumn__8euti ronin-table-cell-fix-left ronin-table-cell-fix-left-last"
                                    style={{
                                      textAlign: "left",
                                      position: "sticky",
                                      left: "0px",
                                    }}
                                  >
                                    <div className="LiquidityPoolList_RowElement__TV0sk LiquidityPoolList_IdColumnCell__w6odV">
                                      <div
                                        className="PairTokenLogo_Container__DQwmN"
                                        // style=""
                                      >
                                        <svg
                                          color="var(--dg-tc-icon)"
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
                                        <svg
                                          color="var(--dg-tc-icon)"
                                          viewBox="0 0 20 20"
                                          width="24"
                                          height="24"
                                          style={{
                                            marginLeft: "-3.79856px",
                                          }}
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
                                      <div className="LiquidityPoolList_IdItem__hHqio">
                                        <div className="LiquidityPoolList_IdItemLabel__z_svK">
                                          WBTC - AXS
                                        </div>
                                        <div className="LiquidityPoolList_IdItemIcon__AwtKy"></div>
                                      </div>
                                    </div>
                                  </td>
                                  <td
                                    className="ronin-table-cell"
                                    style={{ textAlign: "right" }}
                                  >
                                    $1.26K
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-md__-HKdi typo-module_neutral__9orA9">
                                      0.47%
                                    </div>
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $0.04
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $15.84
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $45.4
                                  </td>
                                </tr>
                                <tr
                                  className="ronin-table-row ronin-table-row-level-0 LiquidityPoolList_AllPairRow__R7Wzu"
                                  style={{ cursor: "pointer" }}
                                >
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_IdColumn__8euti ronin-table-cell-fix-left ronin-table-cell-fix-left-last"
                                    style={{
                                      textAlign: "left",
                                      position: "sticky",
                                      left: "0px",
                                    }}
                                  >
                                    <div className="LiquidityPoolList_RowElement__TV0sk LiquidityPoolList_IdColumnCell__w6odV">
                                      <div
                                        style={{
                                          height: "24px",
                                          width: "fit-content",
                                          display: "inline-flex",
                                          alignItems: "center",
                                        }}
                                      >
                                        <img
                                          alt="LP token logo"
                                          src="https://cdn.skymavis.com/ronin/2020/erc20/0xbb89c80d8f462bb196709fd139a435dcefeaeb83/logo.png"
                                          style={{
                                            width: "44.2014px",
                                            height: "44.2014px",
                                          }}
                                        />
                                      </div>
                                      <div className="LiquidityPoolList_IdItem__hHqio">
                                        <div className="LiquidityPoolList_IdItemLabel__z_svK">
                                          PIXEL - AXS
                                        </div>
                                        <div className="LiquidityPoolList_IdItemIcon__AwtKy"></div>
                                      </div>
                                    </div>
                                  </td>
                                  <td
                                    className="ronin-table-cell"
                                    style={{ textAlign: "right" }}
                                  >
                                    $719.32
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-md__-HKdi typo-module_neutral__9orA9">
                                      8.15%
                                    </div>
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $0.61
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $245.61
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $448
                                  </td>
                                </tr>
                                <tr
                                  className="ronin-table-row ronin-table-row-level-0 LiquidityPoolList_AllPairRow__R7Wzu"
                                  style={{ cursor: "pointer" }}
                                >
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_IdColumn__8euti ronin-table-cell-fix-left ronin-table-cell-fix-left-last"
                                    style={{
                                      textAlign: "left",
                                      position: "sticky",
                                      left: "0px",
                                    }}
                                  >
                                    <div className="LiquidityPoolList_RowElement__TV0sk LiquidityPoolList_IdColumnCell__w6odV">
                                      <div
                                        style={{
                                          height: "24px",
                                          width: "fit-content",
                                          display: "inline-flex",
                                          alignItems: "center",
                                        }}
                                      >
                                        <img
                                          alt="LP token logo"
                                          src="https://cdn.skymavis.com/ronin/2020/erc20/0xe79b0afca5105d8edc5b00f357daae8003633886/logo.png"
                                          style={{
                                            width: "44.2014px",
                                            height: "44.2014px",
                                          }}
                                        />
                                      </div>
                                      <div className="LiquidityPoolList_IdItem__hHqio">
                                        <div className="LiquidityPoolList_IdItemLabel__z_svK">
                                          BANANA - SLP
                                        </div>
                                        <div className="LiquidityPoolList_IdItemIcon__AwtKy"></div>
                                      </div>
                                    </div>
                                  </td>
                                  <td
                                    className="ronin-table-cell"
                                    style={{ textAlign: "right" }}
                                  >
                                    $195.52
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-md__-HKdi typo-module_neutral__9orA9">
                                      0.94%
                                    </div>
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $0
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $1.25
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $14.1
                                  </td>
                                </tr>
                                <tr
                                  className="ronin-table-row ronin-table-row-level-0 LiquidityPoolList_AllPairRow__R7Wzu"
                                  style={{ cursor: "pointer" }}
                                >
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_IdColumn__8euti ronin-table-cell-fix-left ronin-table-cell-fix-left-last"
                                    style={{
                                      textAlign: "left",
                                      position: "sticky",
                                      left: "0px",
                                    }}
                                  >
                                    <div className="LiquidityPoolList_RowElement__TV0sk LiquidityPoolList_IdColumnCell__w6odV">
                                      <div
                                        style={{
                                          height: "24px",
                                          width: "fit-content",
                                          display: "inline-flex",
                                          alignItems: "center",
                                        }}
                                      >
                                        <img
                                          alt="LP token logo"
                                          src="https://cdn.skymavis.com/ronin/2020/erc20/0x99a993148c1f87002f00817dbc8158548e7a4b2f/logo.png"
                                          style={{
                                            width: "44.2014px",
                                            height: "44.2014px",
                                          }}
                                        />
                                      </div>
                                      <div className="LiquidityPoolList_IdItem__hHqio">
                                        <div className="LiquidityPoolList_IdItemLabel__z_svK">
                                          BANANA - PIXEL
                                        </div>
                                        <div className="LiquidityPoolList_IdItemIcon__AwtKy"></div>
                                      </div>
                                    </div>
                                  </td>
                                  <td
                                    className="ronin-table-cell"
                                    style={{ textAlign: "right" }}
                                  >
                                    $161.61
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-md__-HKdi typo-module_neutral__9orA9">
                                      --%
                                    </div>
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $0.01
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $2.66
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $15.53
                                  </td>
                                </tr>
                                <tr
                                  className="ronin-table-row ronin-table-row-level-0 LiquidityPoolList_AllPairRow__R7Wzu"
                                  style={{ cursor: "pointer" }}
                                >
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_IdColumn__8euti ronin-table-cell-fix-left ronin-table-cell-fix-left-last"
                                    style={{
                                      textAlign: "left",
                                      position: "sticky",
                                      left: "0px",
                                    }}
                                  >
                                    <div className="LiquidityPoolList_RowElement__TV0sk LiquidityPoolList_IdColumnCell__w6odV">
                                      <div
                                        style={{
                                          height: "24px",
                                          width: "fit-content",
                                          display: "inline-flex",
                                          alignItems: "center",
                                        }}
                                      >
                                        <img
                                          alt="LP token logo"
                                          src="https://cdn.skymavis.com/ronin/2020/erc20/0xec087b4defcf76d5666ef366d7ae98cf926ae545/logo.png"
                                          style={{
                                            width: "44.2014px",
                                            height: "44.2014px",
                                          }}
                                        />
                                      </div>
                                      <div className="LiquidityPoolList_IdItem__hHqio">
                                        <div className="LiquidityPoolList_IdItemLabel__z_svK">
                                          USDC - SLP
                                        </div>
                                        <div className="LiquidityPoolList_IdItemIcon__AwtKy"></div>
                                      </div>
                                    </div>
                                  </td>
                                  <td
                                    className="ronin-table-cell"
                                    style={{ textAlign: "right" }}
                                  >
                                    $97.84
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-md__-HKdi typo-module_neutral__9orA9">
                                      16.90%
                                    </div>
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $0.04
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $14.6
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $126.64
                                  </td>
                                </tr>
                                <tr
                                  className="ronin-table-row ronin-table-row-level-0 LiquidityPoolList_AllPairRow__R7Wzu"
                                  style={{ cursor: "pointer" }}
                                >
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_IdColumn__8euti ronin-table-cell-fix-left ronin-table-cell-fix-left-last"
                                    style={{
                                      textAlign: "left",
                                      position: "sticky",
                                      left: "0px",
                                    }}
                                  >
                                    <div className="LiquidityPoolList_RowElement__TV0sk LiquidityPoolList_IdColumnCell__w6odV">
                                      <div
                                        className="PairTokenLogo_Container__DQwmN"
                                        // style=""
                                      >
                                        <svg
                                          color="var(--dg-tc-icon)"
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
                                        <svg
                                          color="var(--dg-tc-icon)"
                                          viewBox="0 0 20 20"
                                          width="24"
                                          height="24"
                                          style={{
                                            marginLeft: "-3.79856px",
                                          }}
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
                                      <div className="LiquidityPoolList_IdItem__hHqio">
                                        <div className="LiquidityPoolList_IdItemLabel__z_svK">
                                          USDC - PHPC
                                        </div>
                                        <div className="LiquidityPoolList_IdItemIcon__AwtKy">
                                          <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3">
                                            <div className="badge-module_badge__kTvKz badge-module_default-solid__76z0J badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                              <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs">
                                                <div>🌱</div>
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                  <td
                                    className="ronin-table-cell"
                                    style={{ textAlign: "right" }}
                                  >
                                    $92.92
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-md__-HKdi typo-module_neutral__9orA9">
                                      0.80%
                                    </div>
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $0.01
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $3.41
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $5.69
                                  </td>
                                </tr>
                                <tr
                                  className="ronin-table-row ronin-table-row-level-0 LiquidityPoolList_AllPairRow__R7Wzu"
                                  style={{ cursor: "pointer" }}
                                >
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_IdColumn__8euti ronin-table-cell-fix-left ronin-table-cell-fix-left-last"
                                    style={{
                                      textAlign: "left",
                                      position: "sticky",
                                      left: "0px",
                                    }}
                                  >
                                    <div className="LiquidityPoolList_RowElement__TV0sk LiquidityPoolList_IdColumnCell__w6odV">
                                      <div
                                        className="PairTokenLogo_Container__DQwmN"
                                        // style=""
                                      >
                                        <svg
                                          color="var(--dg-tc-icon)"
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
                                        <svg
                                          color="var(--dg-tc-icon)"
                                          viewBox="0 0 20 20"
                                          width="24"
                                          height="24"
                                          style={{
                                            marginLeft: "-3.79856px",
                                          }}
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
                                      <div className="LiquidityPoolList_IdItem__hHqio">
                                        <div className="LiquidityPoolList_IdItemLabel__z_svK">
                                          YGG - APRS
                                        </div>
                                        <div className="LiquidityPoolList_IdItemIcon__AwtKy"></div>
                                      </div>
                                    </div>
                                  </td>
                                  <td
                                    className="ronin-table-cell"
                                    style={{ textAlign: "right" }}
                                  >
                                    $83.26
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-md__-HKdi typo-module_neutral__9orA9">
                                      --%
                                    </div>
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $0
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $0.71
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $4.93
                                  </td>
                                </tr>
                                <tr
                                  className="ronin-table-row ronin-table-row-level-0 LiquidityPoolList_AllPairRow__R7Wzu"
                                  style={{ cursor: "pointer" }}
                                >
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_IdColumn__8euti ronin-table-cell-fix-left ronin-table-cell-fix-left-last"
                                    style={{
                                      textAlign: "left",
                                      position: "sticky",
                                      left: "0px",
                                    }}
                                  >
                                    <div className="LiquidityPoolList_RowElement__TV0sk LiquidityPoolList_IdColumnCell__w6odV">
                                      <div
                                        className="PairTokenLogo_Container__DQwmN"
                                        // style=""
                                      >
                                        <svg
                                          color="var(--dg-tc-icon)"
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
                                        <svg
                                          color="var(--dg-tc-icon)"
                                          viewBox="0 0 20 20"
                                          width="24"
                                          height="24"
                                          style={{
                                            marginLeft: "-3.79856px",
                                          }}
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
                                      <div className="LiquidityPoolList_IdItem__hHqio">
                                        <div className="LiquidityPoolList_IdItemLabel__z_svK">
                                          YGG - SLP
                                        </div>
                                        <div className="LiquidityPoolList_IdItemIcon__AwtKy"></div>
                                      </div>
                                    </div>
                                  </td>
                                  <td
                                    className="ronin-table-cell"
                                    style={{ textAlign: "right" }}
                                  >
                                    $40.13
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-md__-HKdi typo-module_neutral__9orA9">
                                      1.02%
                                    </div>
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $0
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $0.54
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $3.1
                                  </td>
                                </tr>
                                <tr
                                  className="ronin-table-row ronin-table-row-level-0 LiquidityPoolList_AllPairRow__R7Wzu"
                                  style={{ cursor: "pointer" }}
                                >
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_IdColumn__8euti ronin-table-cell-fix-left ronin-table-cell-fix-left-last"
                                    style={{
                                      textAlign: "left",
                                      position: "sticky",
                                      left: "0px",
                                    }}
                                  >
                                    <div className="LiquidityPoolList_RowElement__TV0sk LiquidityPoolList_IdColumnCell__w6odV">
                                      <div
                                        className="PairTokenLogo_Container__DQwmN"
                                        // style=""
                                      >
                                        <svg
                                          color="var(--dg-tc-icon)"
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
                                        <svg
                                          color="var(--dg-tc-icon)"
                                          viewBox="0 0 20 20"
                                          width="24"
                                          height="24"
                                          style={{
                                            marginLeft: "-3.79856px",
                                          }}
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
                                      <div className="LiquidityPoolList_IdItem__hHqio">
                                        <div className="LiquidityPoolList_IdItemLabel__z_svK">
                                          APRS - AXS
                                        </div>
                                        <div className="LiquidityPoolList_IdItemIcon__AwtKy"></div>
                                      </div>
                                    </div>
                                  </td>
                                  <td
                                    className="ronin-table-cell"
                                    style={{ textAlign: "right" }}
                                  >
                                    $34.57
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-md__-HKdi typo-module_neutral__9orA9">
                                      0.66%
                                    </div>
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $0
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $0.43
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $1.74
                                  </td>
                                </tr>
                                <tr
                                  className="ronin-table-row ronin-table-row-level-0 LiquidityPoolList_AllPairRow__R7Wzu"
                                  style={{ cursor: "pointer" }}
                                >
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_IdColumn__8euti ronin-table-cell-fix-left ronin-table-cell-fix-left-last"
                                    style={{
                                      textAlign: "left",
                                      position: "sticky",
                                      left: "0px",
                                    }}
                                  >
                                    <div className="LiquidityPoolList_RowElement__TV0sk LiquidityPoolList_IdColumnCell__w6odV">
                                      <div
                                        className="PairTokenLogo_Container__DQwmN"
                                        // style=""
                                      >
                                        <svg
                                          color="var(--dg-tc-icon)"
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
                                        <svg
                                          color="var(--dg-tc-icon)"
                                          viewBox="0 0 20 20"
                                          width="24"
                                          height="24"
                                          style={{
                                            marginLeft: "-3.79856px",
                                          }}
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
                                      <div className="LiquidityPoolList_IdItem__hHqio">
                                        <div className="LiquidityPoolList_IdItemLabel__z_svK">
                                          USDC - YGG
                                        </div>
                                        <div className="LiquidityPoolList_IdItemIcon__AwtKy"></div>
                                      </div>
                                    </div>
                                  </td>
                                  <td
                                    className="ronin-table-cell"
                                    style={{ textAlign: "right" }}
                                  >
                                    $34.22
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-md__-HKdi typo-module_neutral__9orA9">
                                      6.66%
                                    </div>
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $0
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $0.71
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $17.58
                                  </td>
                                </tr>
                                <tr
                                  className="ronin-table-row ronin-table-row-level-0 LiquidityPoolList_AllPairRow__R7Wzu"
                                  style={{ cursor: "pointer" }}
                                >
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_IdColumn__8euti ronin-table-cell-fix-left ronin-table-cell-fix-left-last"
                                    style={{
                                      textAlign: "left",
                                      position: "sticky",
                                      left: "0px",
                                    }}
                                  >
                                    <div className="LiquidityPoolList_RowElement__TV0sk LiquidityPoolList_IdColumnCell__w6odV">
                                      <div
                                        style={{
                                          height: "24px",
                                          width: "fit-content",
                                          display: "inline-flex",
                                          alignItems: "center",
                                        }}
                                      >
                                        <img
                                          alt="LP token logo"
                                          src="https://cdn.skymavis.com/ronin/2020/erc20/0x56adf6770d574b1fbc95a43938cbee15830464a1/logo.png"
                                          style={{
                                            width: "44.2014px",
                                            height: "44.2014px",
                                          }}
                                        />
                                      </div>
                                      <div className="LiquidityPoolList_IdItem__hHqio">
                                        <div className="LiquidityPoolList_IdItemLabel__z_svK">
                                          SLP - ANIMA
                                        </div>
                                        <div className="LiquidityPoolList_IdItemIcon__AwtKy">
                                          <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3">
                                            <div className="badge-module_badge__kTvKz badge-module_default-solid__76z0J badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                              <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs">
                                                <div>🌱</div>
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                  <td
                                    className="ronin-table-cell"
                                    style={{ textAlign: "right" }}
                                  >
                                    $33.38
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-md__-HKdi typo-module_neutral__9orA9">
                                      0.38%
                                    </div>
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $0
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $0
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $1
                                  </td>
                                </tr>
                                <tr
                                  className="ronin-table-row ronin-table-row-level-0 LiquidityPoolList_AllPairRow__R7Wzu"
                                  style={{ cursor: "pointer" }}
                                >
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_IdColumn__8euti ronin-table-cell-fix-left ronin-table-cell-fix-left-last"
                                    style={{
                                      textAlign: "left",
                                      position: "sticky",
                                      left: "0px",
                                    }}
                                  >
                                    <div className="LiquidityPoolList_RowElement__TV0sk LiquidityPoolList_IdColumnCell__w6odV">
                                      <div
                                        style={{
                                          height: "24px",
                                          width: "fit-content",
                                          display: "inline-flex",
                                          alignItems: "center",
                                        }}
                                      >
                                        <img
                                          alt="LP token logo"
                                          src="https://cdn.skymavis.com/ronin/2020/erc20/0x8fce60bf1563428e106abe4d841e0426d7f0c4b4/logo.png"
                                          style={{
                                            width: "44.2014px",
                                            height: "44.2014px",
                                          }}
                                        />
                                      </div>
                                      <div className="LiquidityPoolList_IdItem__hHqio">
                                        <div className="LiquidityPoolList_IdItemLabel__z_svK">
                                          USDC - ANIMA
                                        </div>
                                        <div className="LiquidityPoolList_IdItemIcon__AwtKy">
                                          <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3">
                                            <div className="badge-module_badge__kTvKz badge-module_default-solid__76z0J badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                              <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs">
                                                <div>🌱</div>
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                  <td
                                    className="ronin-table-cell"
                                    style={{ textAlign: "right" }}
                                  >
                                    $30.39
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-md__-HKdi typo-module_neutral__9orA9">
                                      0.92%
                                    </div>
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $0
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $0.11
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $2.14
                                  </td>
                                </tr>
                                <tr
                                  className="ronin-table-row ronin-table-row-level-0 LiquidityPoolList_AllPairRow__R7Wzu"
                                  style={{ cursor: "pointer" }}
                                >
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_IdColumn__8euti ronin-table-cell-fix-left ronin-table-cell-fix-left-last"
                                    style={{
                                      textAlign: "left",
                                      position: "sticky",
                                      left: "0px",
                                    }}
                                  >
                                    <div className="LiquidityPoolList_RowElement__TV0sk LiquidityPoolList_IdColumnCell__w6odV">
                                      <div
                                        className="PairTokenLogo_Container__DQwmN"
                                        // style=""
                                      >
                                        <svg
                                          color="var(--dg-tc-icon)"
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
                                        <svg
                                          color="var(--dg-tc-icon)"
                                          viewBox="0 0 20 20"
                                          width="24"
                                          height="24"
                                          style={{
                                            marginLeft: "-3.79856px",
                                          }}
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
                                      <div className="LiquidityPoolList_IdItem__hHqio">
                                        <div className="LiquidityPoolList_IdItemLabel__z_svK">
                                          WBTC - SLP
                                        </div>
                                        <div className="LiquidityPoolList_IdItemIcon__AwtKy"></div>
                                      </div>
                                    </div>
                                  </td>
                                  <td
                                    className="ronin-table-cell"
                                    style={{ textAlign: "right" }}
                                  >
                                    $28.68
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-md__-HKdi typo-module_neutral__9orA9">
                                      0.17%
                                    </div>
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $0
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $0.01
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $0.38
                                  </td>
                                </tr>
                                <tr
                                  className="ronin-table-row ronin-table-row-level-0 LiquidityPoolList_AllPairRow__R7Wzu"
                                  style={{ cursor: "pointer" }}
                                >
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_IdColumn__8euti ronin-table-cell-fix-left ronin-table-cell-fix-left-last"
                                    style={{
                                      textAlign: "left",
                                      position: "sticky",
                                      left: "0px",
                                    }}
                                  >
                                    <div className="LiquidityPoolList_RowElement__TV0sk LiquidityPoolList_IdColumnCell__w6odV">
                                      <div
                                        style={{
                                          height: "24px",
                                          width: "fit-content",
                                          display: "inline-flex",
                                          alignItems: "center",
                                        }}
                                      >
                                        <img
                                          alt="LP token logo"
                                          src="https://cdn.skymavis.com/ronin/2020/erc20/0x859f096641c7f9db2e0d2132022ae2a128fb402a/logo.png"
                                          style={{
                                            width: "44.2014px",
                                            height: "44.2014px",
                                          }}
                                        />
                                      </div>
                                      <div className="LiquidityPoolList_IdItem__hHqio">
                                        <div className="LiquidityPoolList_IdItemLabel__z_svK">
                                          PIXEL - SLP
                                        </div>
                                        <div className="LiquidityPoolList_IdItemIcon__AwtKy"></div>
                                      </div>
                                    </div>
                                  </td>
                                  <td
                                    className="ronin-table-cell"
                                    style={{ textAlign: "right" }}
                                  >
                                    $22.75
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-md__-HKdi typo-module_neutral__9orA9">
                                      6.35%
                                    </div>
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $0.02
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $9.92
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $11.04
                                  </td>
                                </tr>
                                <tr
                                  className="ronin-table-row ronin-table-row-level-0 LiquidityPoolList_AllPairRow__R7Wzu"
                                  style={{ cursor: "pointer" }}
                                >
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_IdColumn__8euti ronin-table-cell-fix-left ronin-table-cell-fix-left-last"
                                    style={{
                                      textAlign: "left",
                                      position: "sticky",
                                      left: "0px",
                                    }}
                                  >
                                    <div className="LiquidityPoolList_RowElement__TV0sk LiquidityPoolList_IdColumnCell__w6odV">
                                      <div
                                        style={{
                                          height: "24px",
                                          width: "fit-content",
                                          display: "inline-flex",
                                          alignItems: "center",
                                        }}
                                      >
                                        <img
                                          alt="LP token logo"
                                          src="https://cdn.skymavis.com/ronin/2020/erc20/0x09a5480b6bb9c2a854b5ac252c34adaf1c0a231a/logo.png"
                                          style={{
                                            width: "44.2014px",
                                            height: "44.2014px",
                                          }}
                                        />
                                      </div>
                                      <div className="LiquidityPoolList_IdItem__hHqio">
                                        <div className="LiquidityPoolList_IdItemLabel__z_svK">
                                          USDC - APRS
                                        </div>
                                        <div className="LiquidityPoolList_IdItemIcon__AwtKy"></div>
                                      </div>
                                    </div>
                                  </td>
                                  <td
                                    className="ronin-table-cell"
                                    style={{ textAlign: "right" }}
                                  >
                                    $18.12
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-md__-HKdi typo-module_neutral__9orA9">
                                      2.53%
                                    </div>
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $0.01
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $2.58
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $3.51
                                  </td>
                                </tr>
                                <tr
                                  className="ronin-table-row ronin-table-row-level-0 LiquidityPoolList_AllPairRow__R7Wzu"
                                  style={{ cursor: "pointer" }}
                                >
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_IdColumn__8euti ronin-table-cell-fix-left ronin-table-cell-fix-left-last"
                                    style={{
                                      textAlign: "left",
                                      position: "sticky",
                                      left: "0px",
                                    }}
                                  >
                                    <div className="LiquidityPoolList_RowElement__TV0sk LiquidityPoolList_IdColumnCell__w6odV">
                                      <div
                                        className="PairTokenLogo_Container__DQwmN"
                                        // style=""
                                      >
                                        <svg
                                          color="var(--dg-tc-icon)"
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
                                        <svg
                                          color="var(--dg-tc-icon)"
                                          viewBox="0 0 20 20"
                                          width="24"
                                          height="24"
                                          style={{
                                            marginLeft: "-3.79856px",
                                          }}
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
                                      <div className="LiquidityPoolList_IdItem__hHqio">
                                        <div className="LiquidityPoolList_IdItemLabel__z_svK">
                                          BANANA - AXS
                                        </div>
                                        <div className="LiquidityPoolList_IdItemIcon__AwtKy"></div>
                                      </div>
                                    </div>
                                  </td>
                                  <td
                                    className="ronin-table-cell"
                                    style={{ textAlign: "right" }}
                                  >
                                    $16.03
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-md__-HKdi typo-module_neutral__9orA9">
                                      0.99%
                                    </div>
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $0
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $0.13
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $1.22
                                  </td>
                                </tr>
                                <tr
                                  className="ronin-table-row ronin-table-row-level-0 LiquidityPoolList_AllPairRow__R7Wzu"
                                  style={{ cursor: "pointer" }}
                                >
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_IdColumn__8euti ronin-table-cell-fix-left ronin-table-cell-fix-left-last"
                                    style={{
                                      textAlign: "left",
                                      position: "sticky",
                                      left: "0px",
                                    }}
                                  >
                                    <div className="LiquidityPoolList_RowElement__TV0sk LiquidityPoolList_IdColumnCell__w6odV">
                                      <div
                                        className="PairTokenLogo_Container__DQwmN"
                                        // style=""
                                      >
                                        <svg
                                          color="var(--dg-tc-icon)"
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
                                        <svg
                                          color="var(--dg-tc-icon)"
                                          viewBox="0 0 20 20"
                                          width="24"
                                          height="24"
                                          style={{
                                            marginLeft: "-3.79856px",
                                          }}
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
                                      <div className="LiquidityPoolList_IdItem__hHqio">
                                        <div className="LiquidityPoolList_IdItemLabel__z_svK">
                                          APRS - WBTC
                                        </div>
                                        <div className="LiquidityPoolList_IdItemIcon__AwtKy"></div>
                                      </div>
                                    </div>
                                  </td>
                                  <td
                                    className="ronin-table-cell"
                                    style={{ textAlign: "right" }}
                                  >
                                    $10.82
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-md__-HKdi typo-module_neutral__9orA9">
                                      --%
                                    </div>
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $0
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $0
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $0.08
                                  </td>
                                </tr>
                                <tr
                                  className="ronin-table-row ronin-table-row-level-0 LiquidityPoolList_AllPairRow__R7Wzu"
                                  style={{ cursor: "pointer" }}
                                >
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_IdColumn__8euti ronin-table-cell-fix-left ronin-table-cell-fix-left-last"
                                    style={{
                                      textAlign: "left",
                                      position: "sticky",
                                      left: "0px",
                                    }}
                                  >
                                    <div className="LiquidityPoolList_RowElement__TV0sk LiquidityPoolList_IdColumnCell__w6odV">
                                      <div
                                        style={{
                                          height: "24px",
                                          width: "fit-content",
                                          display: "inline-flex",
                                          alignItems: "center",
                                        }}
                                      >
                                        <img
                                          alt="LP token logo"
                                          src="https://cdn.skymavis.com/ronin/2020/erc20/0x5bc3e6bdb18f08e4038ed6abccc2c1faacc956e1/logo.png"
                                          style={{
                                            width: "44.2014px",
                                            height: "44.2014px",
                                          }}
                                        />
                                      </div>
                                      <div className="LiquidityPoolList_IdItem__hHqio">
                                        <div className="LiquidityPoolList_IdItemLabel__z_svK">
                                          PIXEL - WETH
                                        </div>
                                        <div className="LiquidityPoolList_IdItemIcon__AwtKy"></div>
                                      </div>
                                    </div>
                                  </td>
                                  <td
                                    className="ronin-table-cell"
                                    style={{ textAlign: "right" }}
                                  >
                                    $10.61
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-md__-HKdi typo-module_neutral__9orA9">
                                      16.68%
                                    </div>
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $0
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $0.21
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $13.48
                                  </td>
                                </tr>
                                <tr
                                  className="ronin-table-row ronin-table-row-level-0 LiquidityPoolList_AllPairRow__R7Wzu"
                                  style={{ cursor: "pointer" }}
                                >
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_IdColumn__8euti ronin-table-cell-fix-left ronin-table-cell-fix-left-last"
                                    style={{
                                      textAlign: "left",
                                      position: "sticky",
                                      left: "0px",
                                    }}
                                  >
                                    <div className="LiquidityPoolList_RowElement__TV0sk LiquidityPoolList_IdColumnCell__w6odV">
                                      <div
                                        className="PairTokenLogo_Container__DQwmN"
                                        // style=""
                                      >
                                        <svg
                                          color="var(--dg-tc-icon)"
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
                                        <svg
                                          color="var(--dg-tc-icon)"
                                          viewBox="0 0 20 20"
                                          width="24"
                                          height="24"
                                          style={{
                                            marginLeft: "-3.79856px",
                                          }}
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
                                      <div className="LiquidityPoolList_IdItem__hHqio">
                                        <div className="LiquidityPoolList_IdItemLabel__z_svK">
                                          PHPC - SLP
                                        </div>
                                        <div className="LiquidityPoolList_IdItemIcon__AwtKy">
                                          <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3">
                                            <div className="badge-module_badge__kTvKz badge-module_default-solid__76z0J badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                              <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs">
                                                <div>🌱</div>
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                  <td
                                    className="ronin-table-cell"
                                    style={{ textAlign: "right" }}
                                  >
                                    $10.08
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-md__-HKdi typo-module_neutral__9orA9">
                                      0.73%
                                    </div>
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $0
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $0.06
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $0.57
                                  </td>
                                </tr>
                                <tr
                                  className="ronin-table-row ronin-table-row-level-0 LiquidityPoolList_AllPairRow__R7Wzu"
                                  style={{ cursor: "pointer" }}
                                >
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_IdColumn__8euti ronin-table-cell-fix-left ronin-table-cell-fix-left-last"
                                    style={{
                                      textAlign: "left",
                                      position: "sticky",
                                      left: "0px",
                                    }}
                                  >
                                    <div className="LiquidityPoolList_RowElement__TV0sk LiquidityPoolList_IdColumnCell__w6odV">
                                      <div
                                        className="PairTokenLogo_Container__DQwmN"
                                        // style=""
                                      >
                                        <svg
                                          color="var(--dg-tc-icon)"
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
                                        <svg
                                          color="var(--dg-tc-icon)"
                                          viewBox="0 0 20 20"
                                          width="24"
                                          height="24"
                                          style={{
                                            marginLeft: "-3.79856px",
                                          }}
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
                                      <div className="LiquidityPoolList_IdItem__hHqio">
                                        <div className="LiquidityPoolList_IdItemLabel__z_svK">
                                          PHPC - PIXEL
                                        </div>
                                        <div className="LiquidityPoolList_IdItemIcon__AwtKy">
                                          <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3">
                                            <div className="badge-module_badge__kTvKz badge-module_default-solid__76z0J badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                              <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs">
                                                <div>🌱</div>
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                  <td
                                    className="ronin-table-cell"
                                    style={{ textAlign: "right" }}
                                  >
                                    $9.86
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-md__-HKdi typo-module_neutral__9orA9">
                                      --%
                                    </div>
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $0.01
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $4.63
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $5.16
                                  </td>
                                </tr>
                                <tr
                                  className="ronin-table-row ronin-table-row-level-0 LiquidityPoolList_AllPairRow__R7Wzu"
                                  style={{ cursor: "pointer" }}
                                >
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_IdColumn__8euti ronin-table-cell-fix-left ronin-table-cell-fix-left-last"
                                    style={{
                                      textAlign: "left",
                                      position: "sticky",
                                      left: "0px",
                                    }}
                                  >
                                    <div className="LiquidityPoolList_RowElement__TV0sk LiquidityPoolList_IdColumnCell__w6odV">
                                      <div
                                        className="PairTokenLogo_Container__DQwmN"
                                        // style=""
                                      >
                                        <svg
                                          color="var(--dg-tc-icon)"
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
                                        <svg
                                          color="var(--dg-tc-icon)"
                                          viewBox="0 0 20 20"
                                          width="24"
                                          height="24"
                                          style={{
                                            marginLeft: "-3.79856px",
                                          }}
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
                                      <div className="LiquidityPoolList_IdItem__hHqio">
                                        <div className="LiquidityPoolList_IdItemLabel__z_svK">
                                          USDC - WBTC
                                        </div>
                                        <div className="LiquidityPoolList_IdItemIcon__AwtKy"></div>
                                      </div>
                                    </div>
                                  </td>
                                  <td
                                    className="ronin-table-cell"
                                    style={{ textAlign: "right" }}
                                  >
                                    $7.89
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-md__-HKdi typo-module_neutral__9orA9">
                                      0.53%
                                    </div>
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $0
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $0.06
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $0.32
                                  </td>
                                </tr>
                                <tr
                                  className="ronin-table-row ronin-table-row-level-0 LiquidityPoolList_AllPairRow__R7Wzu"
                                  style={{ cursor: "pointer" }}
                                >
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_IdColumn__8euti ronin-table-cell-fix-left ronin-table-cell-fix-left-last"
                                    style={{
                                      textAlign: "left",
                                      position: "sticky",
                                      left: "0px",
                                    }}
                                  >
                                    <div className="LiquidityPoolList_RowElement__TV0sk LiquidityPoolList_IdColumnCell__w6odV">
                                      <div
                                        className="PairTokenLogo_Container__DQwmN"
                                        // style=""
                                      >
                                        <svg
                                          color="var(--dg-tc-icon)"
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
                                        <svg
                                          color="var(--dg-tc-icon)"
                                          viewBox="0 0 20 20"
                                          width="24"
                                          height="24"
                                          style={{
                                            marginLeft: "-3.79856px",
                                          }}
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
                                      <div className="LiquidityPoolList_IdItem__hHqio">
                                        <div className="LiquidityPoolList_IdItemLabel__z_svK">
                                          YGG - WETH
                                        </div>
                                        <div className="LiquidityPoolList_IdItemIcon__AwtKy"></div>
                                      </div>
                                    </div>
                                  </td>
                                  <td
                                    className="ronin-table-cell"
                                    style={{ textAlign: "right" }}
                                  >
                                    $7.56
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-md__-HKdi typo-module_neutral__9orA9">
                                      8.38%
                                    </div>
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $0
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $0.06
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $5
                                  </td>
                                </tr>
                                <tr
                                  className="ronin-table-row ronin-table-row-level-0 LiquidityPoolList_AllPairRow__R7Wzu"
                                  style={{ cursor: "pointer" }}
                                >
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_IdColumn__8euti ronin-table-cell-fix-left ronin-table-cell-fix-left-last"
                                    style={{
                                      textAlign: "left",
                                      position: "sticky",
                                      left: "0px",
                                    }}
                                  >
                                    <div className="LiquidityPoolList_RowElement__TV0sk LiquidityPoolList_IdColumnCell__w6odV">
                                      <div
                                        className="PairTokenLogo_Container__DQwmN"
                                        // style=""
                                      >
                                        <svg
                                          color="var(--dg-tc-icon)"
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
                                        <svg
                                          color="var(--dg-tc-icon)"
                                          viewBox="0 0 20 20"
                                          width="24"
                                          height="24"
                                          style={{
                                            marginLeft: "-3.79856px",
                                          }}
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
                                      <div className="LiquidityPoolList_IdItem__hHqio">
                                        <div className="LiquidityPoolList_IdItemLabel__z_svK">
                                          PHPC - WETH
                                        </div>
                                        <div className="LiquidityPoolList_IdItemIcon__AwtKy">
                                          <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3">
                                            <div className="badge-module_badge__kTvKz badge-module_default-solid__76z0J badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                              <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs">
                                                <div>🌱</div>
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                  <td
                                    className="ronin-table-cell"
                                    style={{ textAlign: "right" }}
                                  >
                                    $5.62
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-md__-HKdi typo-module_neutral__9orA9">
                                      0.24%
                                    </div>
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $0
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $0.02
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $0.11
                                  </td>
                                </tr>
                                <tr
                                  className="ronin-table-row ronin-table-row-level-0 LiquidityPoolList_AllPairRow__R7Wzu"
                                  style={{ cursor: "pointer" }}
                                >
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_IdColumn__8euti ronin-table-cell-fix-left ronin-table-cell-fix-left-last"
                                    style={{
                                      textAlign: "left",
                                      position: "sticky",
                                      left: "0px",
                                    }}
                                  >
                                    <div className="LiquidityPoolList_RowElement__TV0sk LiquidityPoolList_IdColumnCell__w6odV">
                                      <div
                                        className="PairTokenLogo_Container__DQwmN"
                                        // style=""
                                      >
                                        <svg
                                          color="var(--dg-tc-icon)"
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
                                        <svg
                                          color="var(--dg-tc-icon)"
                                          viewBox="0 0 20 20"
                                          width="24"
                                          height="24"
                                          style={{
                                            marginLeft: "-3.79856px",
                                          }}
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
                                      <div className="LiquidityPoolList_IdItem__hHqio">
                                        <div className="LiquidityPoolList_IdItemLabel__z_svK">
                                          APRS - SLP
                                        </div>
                                        <div className="LiquidityPoolList_IdItemIcon__AwtKy"></div>
                                      </div>
                                    </div>
                                  </td>
                                  <td
                                    className="ronin-table-cell"
                                    style={{ textAlign: "right" }}
                                  >
                                    $5.51
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-md__-HKdi typo-module_neutral__9orA9">
                                      0.23%
                                    </div>
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $0
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $0.05
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $0.1
                                  </td>
                                </tr>
                                <tr
                                  className="ronin-table-row ronin-table-row-level-0 LiquidityPoolList_AllPairRow__R7Wzu"
                                  style={{ cursor: "pointer" }}
                                >
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_IdColumn__8euti ronin-table-cell-fix-left ronin-table-cell-fix-left-last"
                                    style={{
                                      textAlign: "left",
                                      position: "sticky",
                                      left: "0px",
                                    }}
                                  >
                                    <div className="LiquidityPoolList_RowElement__TV0sk LiquidityPoolList_IdColumnCell__w6odV">
                                      <div
                                        style={{
                                          height: "24px",
                                          width: "fit-content",
                                          display: "inline-flex",
                                          alignItems: "center",
                                        }}
                                      >
                                        <img
                                          alt="LP token logo"
                                          src="https://cdn.skymavis.com/ronin/2020/erc20/0xb9db457d57c091edf5ffcd22bf3548a0138e1215/logo.png"
                                          style={{
                                            width: "44.2014px",
                                            height: "44.2014px",
                                          }}
                                        />
                                      </div>
                                      <div className="LiquidityPoolList_IdItem__hHqio">
                                        <div className="LiquidityPoolList_IdItemLabel__z_svK">
                                          APRS - ANIMA
                                        </div>
                                        <div className="LiquidityPoolList_IdItemIcon__AwtKy">
                                          <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3">
                                            <div className="badge-module_badge__kTvKz badge-module_default-solid__76z0J badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                              <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs">
                                                <div>🌱</div>
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                  <td
                                    className="ronin-table-cell"
                                    style={{ textAlign: "right" }}
                                  >
                                    $5.43
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-md__-HKdi typo-module_neutral__9orA9">
                                      --%
                                    </div>
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $0
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $0
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $0.02
                                  </td>
                                </tr>
                                <tr
                                  className="ronin-table-row ronin-table-row-level-0 LiquidityPoolList_AllPairRow__R7Wzu"
                                  style={{ cursor: "pointer" }}
                                >
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_IdColumn__8euti ronin-table-cell-fix-left ronin-table-cell-fix-left-last"
                                    style={{
                                      textAlign: "left",
                                      position: "sticky",
                                      left: "0px",
                                    }}
                                  >
                                    <div className="LiquidityPoolList_RowElement__TV0sk LiquidityPoolList_IdColumnCell__w6odV">
                                      <div
                                        className="PairTokenLogo_Container__DQwmN"
                                        // style=""
                                      >
                                        <svg
                                          color="var(--dg-tc-icon)"
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
                                        <svg
                                          color="var(--dg-tc-icon)"
                                          viewBox="0 0 20 20"
                                          width="24"
                                          height="24"
                                          style={{
                                            marginLeft: "-3.79856px",
                                          }}
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
                                      <div className="LiquidityPoolList_IdItem__hHqio">
                                        <div className="LiquidityPoolList_IdItemLabel__z_svK">
                                          WBTC - WETH
                                        </div>
                                        <div className="LiquidityPoolList_IdItemIcon__AwtKy"></div>
                                      </div>
                                    </div>
                                  </td>
                                  <td
                                    className="ronin-table-cell"
                                    style={{ textAlign: "right" }}
                                  >
                                    $3.82
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-md__-HKdi typo-module_neutral__9orA9">
                                      --%
                                    </div>
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $0
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $0
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $0
                                  </td>
                                </tr>
                                <tr
                                  className="ronin-table-row ronin-table-row-level-0 LiquidityPoolList_AllPairRow__R7Wzu"
                                  style={{ cursor: "pointer" }}
                                >
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_IdColumn__8euti ronin-table-cell-fix-left ronin-table-cell-fix-left-last"
                                    style={{
                                      textAlign: "left",
                                      position: "sticky",
                                      left: "0px",
                                    }}
                                  >
                                    <div className="LiquidityPoolList_RowElement__TV0sk LiquidityPoolList_IdColumnCell__w6odV">
                                      <div
                                        style={{
                                          height: "24px",
                                          width: "fit-content",
                                          display: "inline-flex",
                                          alignItems: "center",
                                        }}
                                      >
                                        <img
                                          alt="LP token logo"
                                          src="https://cdn.skymavis.com/ronin/2020/erc20/0x2a8fca313f72239ff2d36a5d4dc2374ea02682e5/logo.png"
                                          style={{
                                            width: "44.2014px",
                                            height: "44.2014px",
                                          }}
                                        />
                                      </div>
                                      <div className="LiquidityPoolList_IdItem__hHqio">
                                        <div className="LiquidityPoolList_IdItemLabel__z_svK">
                                          WETH - ANIMA
                                        </div>
                                        <div className="LiquidityPoolList_IdItemIcon__AwtKy">
                                          <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3">
                                            <div className="badge-module_badge__kTvKz badge-module_default-solid__76z0J badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                              <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs">
                                                <div>🌱</div>
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                  <td
                                    className="ronin-table-cell"
                                    style={{ textAlign: "right" }}
                                  >
                                    $3
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-md__-HKdi typo-module_neutral__9orA9">
                                      0.44%
                                    </div>
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $0
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $0
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $0.1
                                  </td>
                                </tr>
                                <tr
                                  className="ronin-table-row ronin-table-row-level-0 LiquidityPoolList_AllPairRow__R7Wzu"
                                  style={{ cursor: "pointer" }}
                                >
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_IdColumn__8euti ronin-table-cell-fix-left ronin-table-cell-fix-left-last"
                                    style={{
                                      textAlign: "left",
                                      position: "sticky",
                                      left: "0px",
                                    }}
                                  >
                                    <div className="LiquidityPoolList_RowElement__TV0sk LiquidityPoolList_IdColumnCell__w6odV">
                                      <div
                                        className="PairTokenLogo_Container__DQwmN"
                                        // style=""
                                      >
                                        <svg
                                          color="var(--dg-tc-icon)"
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
                                        <svg
                                          color="var(--dg-tc-icon)"
                                          viewBox="0 0 20 20"
                                          width="24"
                                          height="24"
                                          style={{
                                            marginLeft: "-3.79856px",
                                          }}
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
                                      <div className="LiquidityPoolList_IdItem__hHqio">
                                        <div className="LiquidityPoolList_IdItemLabel__z_svK">
                                          USDC - BANANA
                                        </div>
                                        <div className="LiquidityPoolList_IdItemIcon__AwtKy"></div>
                                      </div>
                                    </div>
                                  </td>
                                  <td
                                    className="ronin-table-cell"
                                    style={{ textAlign: "right" }}
                                  >
                                    $2.64
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-md__-HKdi typo-module_neutral__9orA9">
                                      0.87%
                                    </div>
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $0
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $0.02
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $0.17
                                  </td>
                                </tr>
                                <tr
                                  className="ronin-table-row ronin-table-row-level-0 LiquidityPoolList_AllPairRow__R7Wzu"
                                  style={{ cursor: "pointer" }}
                                >
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_IdColumn__8euti ronin-table-cell-fix-left ronin-table-cell-fix-left-last"
                                    style={{
                                      textAlign: "left",
                                      position: "sticky",
                                      left: "0px",
                                    }}
                                  >
                                    <div className="LiquidityPoolList_RowElement__TV0sk LiquidityPoolList_IdColumnCell__w6odV">
                                      <div
                                        className="PairTokenLogo_Container__DQwmN"
                                        // style=""
                                      >
                                        <svg
                                          color="var(--dg-tc-icon)"
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
                                        <svg
                                          color="var(--dg-tc-icon)"
                                          viewBox="0 0 20 20"
                                          width="24"
                                          height="24"
                                          style={{
                                            marginLeft: "-3.79856px",
                                          }}
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
                                      <div className="LiquidityPoolList_IdItem__hHqio">
                                        <div className="LiquidityPoolList_IdItemLabel__z_svK">
                                          PHPC - WBTC
                                        </div>
                                        <div className="LiquidityPoolList_IdItemIcon__AwtKy">
                                          <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3">
                                            <div className="badge-module_badge__kTvKz badge-module_default-solid__76z0J badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                              <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs">
                                                <div>🌱</div>
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                  <td
                                    className="ronin-table-cell"
                                    style={{ textAlign: "right" }}
                                  >
                                    $1.44
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-md__-HKdi typo-module_neutral__9orA9">
                                      --%
                                    </div>
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $0
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $0
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $0
                                  </td>
                                </tr>
                                <tr
                                  className="ronin-table-row ronin-table-row-level-0 LiquidityPoolList_AllPairRow__R7Wzu"
                                  style={{ cursor: "pointer" }}
                                >
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_IdColumn__8euti ronin-table-cell-fix-left ronin-table-cell-fix-left-last"
                                    style={{
                                      textAlign: "left",
                                      position: "sticky",
                                      left: "0px",
                                    }}
                                  >
                                    <div className="LiquidityPoolList_RowElement__TV0sk LiquidityPoolList_IdColumnCell__w6odV">
                                      <div
                                        className="PairTokenLogo_Container__DQwmN"
                                        // style=""
                                      >
                                        <svg
                                          color="var(--dg-tc-icon)"
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
                                        <svg
                                          color="var(--dg-tc-icon)"
                                          viewBox="0 0 20 20"
                                          width="24"
                                          height="24"
                                          style={{
                                            marginLeft: "-3.79856px",
                                          }}
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
                                      <div className="LiquidityPoolList_IdItem__hHqio">
                                        <div className="LiquidityPoolList_IdItemLabel__z_svK">
                                          APRS - WETH
                                        </div>
                                        <div className="LiquidityPoolList_IdItemIcon__AwtKy"></div>
                                      </div>
                                    </div>
                                  </td>
                                  <td
                                    className="ronin-table-cell"
                                    style={{ textAlign: "right" }}
                                  >
                                    $1.43
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-md__-HKdi typo-module_neutral__9orA9">
                                      0.44%
                                    </div>
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $0
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $0
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $0.05
                                  </td>
                                </tr>
                                <tr
                                  className="ronin-table-row ronin-table-row-level-0 LiquidityPoolList_AllPairRow__R7Wzu"
                                  style={{ cursor: "pointer" }}
                                >
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_IdColumn__8euti ronin-table-cell-fix-left ronin-table-cell-fix-left-last"
                                    style={{
                                      textAlign: "left",
                                      position: "sticky",
                                      left: "0px",
                                    }}
                                  >
                                    <div className="LiquidityPoolList_RowElement__TV0sk LiquidityPoolList_IdColumnCell__w6odV">
                                      <div
                                        className="PairTokenLogo_Container__DQwmN"
                                        // style=""
                                      >
                                        <svg
                                          color="var(--dg-tc-icon)"
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
                                        <svg
                                          color="var(--dg-tc-icon)"
                                          viewBox="0 0 20 20"
                                          width="24"
                                          height="24"
                                          style={{
                                            marginLeft: "-3.79856px",
                                          }}
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
                                      <div className="LiquidityPoolList_IdItem__hHqio">
                                        <div className="LiquidityPoolList_IdItemLabel__z_svK">
                                          YGG - AXS
                                        </div>
                                        <div className="LiquidityPoolList_IdItemIcon__AwtKy"></div>
                                      </div>
                                    </div>
                                  </td>
                                  <td
                                    className="ronin-table-cell"
                                    style={{ textAlign: "right" }}
                                  >
                                    $1.43
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-md__-HKdi typo-module_neutral__9orA9">
                                      0.48%
                                    </div>
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $0
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $0.01
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $0.05
                                  </td>
                                </tr>
                                <tr
                                  className="ronin-table-row ronin-table-row-level-0 LiquidityPoolList_AllPairRow__R7Wzu"
                                  style={{ cursor: "pointer" }}
                                >
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_IdColumn__8euti ronin-table-cell-fix-left ronin-table-cell-fix-left-last"
                                    style={{
                                      textAlign: "left",
                                      position: "sticky",
                                      left: "0px",
                                    }}
                                  >
                                    <div className="LiquidityPoolList_RowElement__TV0sk LiquidityPoolList_IdColumnCell__w6odV">
                                      <div
                                        className="PairTokenLogo_Container__DQwmN"
                                        // style=""
                                      >
                                        <svg
                                          color="var(--dg-tc-icon)"
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
                                        <svg
                                          color="var(--dg-tc-icon)"
                                          viewBox="0 0 20 20"
                                          width="24"
                                          height="24"
                                          style={{
                                            marginLeft: "-3.79856px",
                                          }}
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
                                      <div className="LiquidityPoolList_IdItem__hHqio">
                                        <div className="LiquidityPoolList_IdItemLabel__z_svK">
                                          BANANA - YGG
                                        </div>
                                        <div className="LiquidityPoolList_IdItemIcon__AwtKy"></div>
                                      </div>
                                    </div>
                                  </td>
                                  <td
                                    className="ronin-table-cell"
                                    style={{ textAlign: "right" }}
                                  >
                                    $0.99
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-md__-HKdi typo-module_neutral__9orA9">
                                      --%
                                    </div>
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $0
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $0.01
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $0.02
                                  </td>
                                </tr>
                                <tr
                                  className="ronin-table-row ronin-table-row-level-0 LiquidityPoolList_AllPairRow__R7Wzu"
                                  style={{ cursor: "pointer" }}
                                >
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_IdColumn__8euti ronin-table-cell-fix-left ronin-table-cell-fix-left-last"
                                    style={{
                                      textAlign: "left",
                                      position: "sticky",
                                      left: "0px",
                                    }}
                                  >
                                    <div className="LiquidityPoolList_RowElement__TV0sk LiquidityPoolList_IdColumnCell__w6odV">
                                      <div
                                        style={{
                                          height: "24px",
                                          width: "fit-content",
                                          display: "inline-flex",
                                          alignItems: "center",
                                        }}
                                      >
                                        <img
                                          alt="LP token logo"
                                          src="https://cdn.skymavis.com/ronin/2020/erc20/0xf0960968816516398eac6af09d39092fdabb3954/logo.png"
                                          style={{
                                            width: "44.2014px",
                                            height: "44.2014px",
                                          }}
                                        />
                                      </div>
                                      <div className="LiquidityPoolList_IdItem__hHqio">
                                        <div className="LiquidityPoolList_IdItemLabel__z_svK">
                                          APRS - PIXEL
                                        </div>
                                        <div className="LiquidityPoolList_IdItemIcon__AwtKy"></div>
                                      </div>
                                    </div>
                                  </td>
                                  <td
                                    className="ronin-table-cell"
                                    style={{ textAlign: "right" }}
                                  >
                                    $0.94
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-md__-HKdi typo-module_neutral__9orA9">
                                      --%
                                    </div>
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $0
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $0
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $0.04
                                  </td>
                                </tr>
                                <tr
                                  className="ronin-table-row ronin-table-row-level-0 LiquidityPoolList_AllPairRow__R7Wzu"
                                  style={{ cursor: "pointer" }}
                                >
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_IdColumn__8euti ronin-table-cell-fix-left ronin-table-cell-fix-left-last"
                                    style={{
                                      textAlign: "left",
                                      position: "sticky",
                                      left: "0px",
                                    }}
                                  >
                                    <div className="LiquidityPoolList_RowElement__TV0sk LiquidityPoolList_IdColumnCell__w6odV">
                                      <div
                                        style={{
                                          height: "24px",
                                          width: "fit-content",
                                          display: "inline-flex",
                                          alignItems: "center",
                                        }}
                                      >
                                        <img
                                          alt="LP token logo"
                                          src="https://cdn.skymavis.com/ronin/2020/erc20/0x96082b5105aeec7175c1e2418fc0720b30f78ea1/logo.png"
                                          style={{
                                            width: "44.2014px",
                                            height: "44.2014px",
                                          }}
                                        />
                                      </div>
                                      <div className="LiquidityPoolList_IdItem__hHqio">
                                        <div className="LiquidityPoolList_IdItemLabel__z_svK">
                                          BANANA - WETH
                                        </div>
                                        <div className="LiquidityPoolList_IdItemIcon__AwtKy"></div>
                                      </div>
                                    </div>
                                  </td>
                                  <td
                                    className="ronin-table-cell"
                                    style={{ textAlign: "right" }}
                                  >
                                    $0.84
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-md__-HKdi typo-module_neutral__9orA9">
                                      0.32%
                                    </div>
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $0
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $0
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $0.02
                                  </td>
                                </tr>
                                <tr
                                  className="ronin-table-row ronin-table-row-level-0 LiquidityPoolList_AllPairRow__R7Wzu"
                                  style={{ cursor: "pointer" }}
                                >
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_IdColumn__8euti ronin-table-cell-fix-left ronin-table-cell-fix-left-last"
                                    style={{
                                      textAlign: "left",
                                      position: "sticky",
                                      left: "0px",
                                    }}
                                  >
                                    <div className="LiquidityPoolList_RowElement__TV0sk LiquidityPoolList_IdColumnCell__w6odV">
                                      <div
                                        style={{
                                          height: "24px",
                                          width: "fit-content",
                                          display: "inline-flex",
                                          alignItems: "center",
                                        }}
                                      >
                                        <img
                                          alt="LP token logo"
                                          src="https://cdn.skymavis.com/ronin/2020/erc20/0x81d37ca897346123804e485531bd713727de6e6e/logo.png"
                                          style={{
                                            width: "44.2014px",
                                            height: "44.2014px",
                                          }}
                                        />
                                      </div>
                                      <div className="LiquidityPoolList_IdItem__hHqio">
                                        <div className="LiquidityPoolList_IdItemLabel__z_svK">
                                          BANANA - ANIMA
                                        </div>
                                        <div className="LiquidityPoolList_IdItemIcon__AwtKy">
                                          <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3">
                                            <div className="badge-module_badge__kTvKz badge-module_default-solid__76z0J badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                              <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs">
                                                <div>🌱</div>
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                  <td
                                    className="ronin-table-cell"
                                    style={{ textAlign: "right" }}
                                  >
                                    $0.21
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-md__-HKdi typo-module_neutral__9orA9">
                                      --%
                                    </div>
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $0
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $0
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $0.01
                                  </td>
                                </tr>
                                <tr
                                  className="ronin-table-row ronin-table-row-level-0 LiquidityPoolList_AllPairRow__R7Wzu"
                                  style={{ cursor: "pointer" }}
                                >
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_IdColumn__8euti ronin-table-cell-fix-left ronin-table-cell-fix-left-last"
                                    style={{
                                      textAlign: "left",
                                      position: "sticky",
                                      left: "0px",
                                    }}
                                  >
                                    <div className="LiquidityPoolList_RowElement__TV0sk LiquidityPoolList_IdColumnCell__w6odV">
                                      <div
                                        className="PairTokenLogo_Container__DQwmN"
                                        // style=""
                                      >
                                        <svg
                                          color="var(--dg-tc-icon)"
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
                                        <svg
                                          color="var(--dg-tc-icon)"
                                          viewBox="0 0 20 20"
                                          width="24"
                                          height="24"
                                          style={{
                                            marginLeft: "-3.79856px",
                                          }}
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
                                      <div className="LiquidityPoolList_IdItem__hHqio">
                                        <div className="LiquidityPoolList_IdItemLabel__z_svK">
                                          PHPC - AXS
                                        </div>
                                        <div className="LiquidityPoolList_IdItemIcon__AwtKy">
                                          <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3">
                                            <div className="badge-module_badge__kTvKz badge-module_default-solid__76z0J badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                              <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs">
                                                <div>🌱</div>
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                  <td
                                    className="ronin-table-cell"
                                    style={{ textAlign: "right" }}
                                  >
                                    $0.19
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-md__-HKdi typo-module_neutral__9orA9">
                                      0.16%
                                    </div>
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $0
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $0
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $0
                                  </td>
                                </tr>
                                <tr
                                  className="ronin-table-row ronin-table-row-level-0 LiquidityPoolList_AllPairRow__R7Wzu"
                                  style={{ cursor: "pointer" }}
                                >
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_IdColumn__8euti ronin-table-cell-fix-left ronin-table-cell-fix-left-last"
                                    style={{
                                      textAlign: "left",
                                      position: "sticky",
                                      left: "0px",
                                    }}
                                  >
                                    <div className="LiquidityPoolList_RowElement__TV0sk LiquidityPoolList_IdColumnCell__w6odV">
                                      <div
                                        style={{
                                          height: "24px",
                                          width: "fit-content",
                                          display: "inline-flex",
                                          alignItems: "center",
                                        }}
                                      >
                                        <img
                                          alt="LP token logo"
                                          src="https://cdn.skymavis.com/ronin/2020/erc20/0x9d8dc825ac1775a8be0d3d18d094ab49d92a543b/logo.png"
                                          style={{
                                            width: "44.2014px",
                                            height: "44.2014px",
                                          }}
                                        />
                                      </div>
                                      <div className="LiquidityPoolList_IdItem__hHqio">
                                        <div className="LiquidityPoolList_IdItemLabel__z_svK">
                                          AXS - ANIMA
                                        </div>
                                        <div className="LiquidityPoolList_IdItemIcon__AwtKy">
                                          <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3">
                                            <div className="badge-module_badge__kTvKz badge-module_default-solid__76z0J badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                              <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs">
                                                <div>🌱</div>
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                  <td
                                    className="ronin-table-cell"
                                    style={{ textAlign: "right" }}
                                  >
                                    $0.18
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-md__-HKdi typo-module_neutral__9orA9">
                                      0.03%
                                    </div>
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $0
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $0
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $0
                                  </td>
                                </tr>
                                <tr
                                  className="ronin-table-row ronin-table-row-level-0 LiquidityPoolList_AllPairRow__R7Wzu"
                                  style={{ cursor: "pointer" }}
                                >
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_IdColumn__8euti ronin-table-cell-fix-left ronin-table-cell-fix-left-last"
                                    style={{
                                      textAlign: "left",
                                      position: "sticky",
                                      left: "0px",
                                    }}
                                  >
                                    <div className="LiquidityPoolList_RowElement__TV0sk LiquidityPoolList_IdColumnCell__w6odV">
                                      <div
                                        style={{
                                          height: "24px",
                                          width: "fit-content",
                                          display: "inline-flex",
                                          alignItems: "center",
                                        }}
                                      >
                                        <img
                                          alt="LP token logo"
                                          src="https://cdn.skymavis.com/ronin/2020/erc20/0xbdd357c384e2f4aae5a71ea4c6ba27e7f1ba1f14/logo.png"
                                          style={{
                                            width: "44.2014px",
                                            height: "44.2014px",
                                          }}
                                        />
                                      </div>
                                      <div className="LiquidityPoolList_IdItem__hHqio">
                                        <div className="LiquidityPoolList_IdItemLabel__z_svK">
                                          PIXEL - ANIMA
                                        </div>
                                        <div className="LiquidityPoolList_IdItemIcon__AwtKy">
                                          <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3">
                                            <div className="badge-module_badge__kTvKz badge-module_default-solid__76z0J badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                              <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs">
                                                <div>🌱</div>
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                  <td
                                    className="ronin-table-cell"
                                    style={{ textAlign: "right" }}
                                  >
                                    $0.14
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-md__-HKdi typo-module_neutral__9orA9">
                                      --%
                                    </div>
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $0
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $0
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $0
                                  </td>
                                </tr>
                                <tr
                                  className="ronin-table-row ronin-table-row-level-0 LiquidityPoolList_AllPairRow__R7Wzu"
                                  style={{ cursor: "pointer" }}
                                >
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_IdColumn__8euti ronin-table-cell-fix-left ronin-table-cell-fix-left-last"
                                    style={{
                                      textAlign: "left",
                                      position: "sticky",
                                      left: "0px",
                                    }}
                                  >
                                    <div className="LiquidityPoolList_RowElement__TV0sk LiquidityPoolList_IdColumnCell__w6odV">
                                      <div
                                        className="PairTokenLogo_Container__DQwmN"
                                        // style=""
                                      >
                                        <svg
                                          color="var(--dg-tc-icon)"
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
                                        <svg
                                          color="var(--dg-tc-icon)"
                                          viewBox="0 0 20 20"
                                          width="24"
                                          height="24"
                                          style={{
                                            marginLeft: "-3.79856px",
                                          }}
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
                                      <div className="LiquidityPoolList_IdItem__hHqio">
                                        <div className="LiquidityPoolList_IdItemLabel__z_svK">
                                          BANANA - APRS
                                        </div>
                                        <div className="LiquidityPoolList_IdItemIcon__AwtKy"></div>
                                      </div>
                                    </div>
                                  </td>
                                  <td
                                    className="ronin-table-cell"
                                    style={{ textAlign: "right" }}
                                  >
                                    $0.04
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-md__-HKdi typo-module_neutral__9orA9">
                                      --%
                                    </div>
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $0
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $0
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $0
                                  </td>
                                </tr>
                                <tr
                                  className="ronin-table-row ronin-table-row-level-0 LiquidityPoolList_AllPairRow__R7Wzu"
                                  style={{ cursor: "pointer" }}
                                >
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_IdColumn__8euti ronin-table-cell-fix-left ronin-table-cell-fix-left-last"
                                    style={{
                                      textAlign: "left",
                                      position: "sticky",
                                      left: "0px",
                                    }}
                                  >
                                    <div className="LiquidityPoolList_RowElement__TV0sk LiquidityPoolList_IdColumnCell__w6odV">
                                      <div
                                        className="PairTokenLogo_Container__DQwmN"
                                        // style=""
                                      >
                                        <svg
                                          color="var(--dg-tc-icon)"
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
                                        <svg
                                          color="var(--dg-tc-icon)"
                                          viewBox="0 0 20 20"
                                          width="24"
                                          height="24"
                                          style={{
                                            marginLeft: "-3.79856px",
                                          }}
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
                                      <div className="LiquidityPoolList_IdItem__hHqio">
                                        <div className="LiquidityPoolList_IdItemLabel__z_svK">
                                          YGG - PIXEL
                                        </div>
                                        <div className="LiquidityPoolList_IdItemIcon__AwtKy"></div>
                                      </div>
                                    </div>
                                  </td>
                                  <td
                                    className="ronin-table-cell"
                                    style={{ textAlign: "right" }}
                                  >
                                    $0.01
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-md__-HKdi typo-module_neutral__9orA9">
                                      --%
                                    </div>
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $0
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $0
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $0
                                  </td>
                                </tr>
                                <tr
                                  className="ronin-table-row ronin-table-row-level-0 LiquidityPoolList_AllPairRow__R7Wzu"
                                  style={{ cursor: "pointer" }}
                                >
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_IdColumn__8euti ronin-table-cell-fix-left ronin-table-cell-fix-left-last"
                                    style={{
                                      textAlign: "left",
                                      position: "sticky",
                                      left: "0px",
                                    }}
                                  >
                                    <div className="LiquidityPoolList_RowElement__TV0sk LiquidityPoolList_IdColumnCell__w6odV">
                                      <div
                                        className="PairTokenLogo_Container__DQwmN"
                                        // style=""
                                      >
                                        <svg
                                          color="var(--dg-tc-icon)"
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
                                        <svg
                                          color="var(--dg-tc-icon)"
                                          viewBox="0 0 20 20"
                                          width="24"
                                          height="24"
                                          style={{
                                            marginLeft: "-3.79856px",
                                          }}
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
                                      <div className="LiquidityPoolList_IdItem__hHqio">
                                        <div className="LiquidityPoolList_IdItemLabel__z_svK">
                                          WBTC - PIXEL
                                        </div>
                                        <div className="LiquidityPoolList_IdItemIcon__AwtKy"></div>
                                      </div>
                                    </div>
                                  </td>
                                  <td
                                    className="ronin-table-cell"
                                    style={{ textAlign: "right" }}
                                  >
                                    $0
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-md__-HKdi typo-module_neutral__9orA9">
                                      --%
                                    </div>
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $0
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $0
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $0
                                  </td>
                                </tr>
                                <tr
                                  className="ronin-table-row ronin-table-row-level-0 LiquidityPoolList_AllPairRow__R7Wzu"
                                  style={{ cursor: "pointer" }}
                                >
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_IdColumn__8euti ronin-table-cell-fix-left ronin-table-cell-fix-left-last"
                                    style={{
                                      textAlign: "left",
                                      position: "sticky",
                                      left: "0px",
                                    }}
                                  >
                                    <div className="LiquidityPoolList_RowElement__TV0sk LiquidityPoolList_IdColumnCell__w6odV">
                                      <div
                                        className="PairTokenLogo_Container__DQwmN"
                                        // style=""
                                      >
                                        <svg
                                          color="var(--dg-tc-icon)"
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
                                        <svg
                                          color="var(--dg-tc-icon)"
                                          viewBox="0 0 20 20"
                                          width="24"
                                          height="24"
                                          style={{
                                            marginLeft: "-3.79856px",
                                          }}
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
                                      <div className="LiquidityPoolList_IdItem__hHqio">
                                        <div className="LiquidityPoolList_IdItemLabel__z_svK">
                                          BANANA - PHPC
                                        </div>
                                        <div className="LiquidityPoolList_IdItemIcon__AwtKy">
                                          <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3">
                                            <div className="badge-module_badge__kTvKz badge-module_default-solid__76z0J badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                              <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs">
                                                <div>🌱</div>
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                  <td
                                    className="ronin-table-cell"
                                    style={{ textAlign: "right" }}
                                  >
                                    $0
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-md__-HKdi typo-module_neutral__9orA9">
                                      --%
                                    </div>
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $0
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $0
                                  </td>
                                  <td
                                    className="ronin-table-cell LiquidityPoolList_ColumnTitle__UH_as"
                                    style={{ textAlign: "right" }}
                                  >
                                    $0.65
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                      <div className="pagination-module_container__YETeD LiquidityPoolList_Pagination___Me5e">
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
                                          100
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
                            records
                          </div>
                        </div>
                        <div className="pagination-module_rightEl__Hg04k">
                          <div className="pagination-module_input-page__LMvfc">
                            <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-md__-HKdi typo-module_neutral__9orA9 pagination-module_content__nlsr4">
                              Go to page
                            </div>
                            <form className="">
                              <div className="form-item-module_form__3-Rfq text-field-module_input-root__PSsoe">
                                <div className="input-module_container__Gch8D input-module_default__Rk4yp input-module_disabled__K-5hi">
                                  <div className="input-module_form__2zFJF">
                                    <input
                                      type="number"
                                      min="1"
                                      max="1"
                                      disabled=""
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
                              1/1
                            </div>
                            <button
                              disabled=""
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
                  </div>
                </div>
                <div
                  role="tabpanel"
                  tabIndex="-1"
                  aria-hidden="true"
                  className="dango-tabs-tabpane"
                  id="rc-tabs-0-panel-MyPositions"
                  aria-labelledby="rc-tabs-0-tab-MyPositions"
                  style={{ display: "none" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Liquidity;
