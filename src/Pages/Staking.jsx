import Header from "../components/Header";
import "./Staking.css";
const Staking = () => {
  return (
    <div className="mx-auto max-w-[1180px]">
      <Header />
      <main className="pb-24 pt-16 md:pb-48 md:pt-24">
        <div className="grid grid-cols-12 gap-28 gap-y-32 md:mt-16 md:gap-y-24">
          <div className="col-span-12 flex flex-col justify-between md:flex-row md:items-center">
            <div className="typo-module_t-display-xl__twhe3 typo-module_mobile-t-display-xl__9QPfK typo-module_neutral__9orA9 hidden md:block">
              RON Staking
            </div>
            <div className="typo-module_t-display-lg__IYbCQ typo-module_mobile-t-display-lg__6JAaA typo-module_neutral__9orA9 block md:hidden">
              RON Staking
            </div>
            <a
              className="typo-module_t-body-md-strong__B-Sd1 typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9 link-module_link__Nwimt undefined mt-32 md:mt-0"
              href="https://docs.roninchain.com/docs/delegators/onboarding/become-delegator#video"
            >
              <button className="button-module_button__Z331g button-module_intent-default__f1RNz button-module_size-default__caw9O button-module_button-root__0roWY">
                <span className="button-module_icon-wrapper__VV4f-">
                  <svg viewBox="0 0 20 20" width="20" height="20">
                    <path
                      fill="currentColor"
                      d="m15.6 9.2-10-7A1 1 0 0 0 4 3v14c0 .8.9 1.3 1.6.8l10-7c.5-.4.5-1.2 0-1.6Z"
                    ></path>
                  </svg>
                </span>
                RON Staking Tutorial
              </button>
            </a>
          </div>
          <div className="col-span-12">
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
                        id="rc-tabs-0-tab-validator"
                        aria-controls="rc-tabs-0-panel-validator"
                      >
                        All validators
                      </div>
                    </div>
                    <div className="dango-tabs-tab">
                      <div
                        role="tab"
                        aria-selected="false"
                        className="dango-tabs-tab-btn"
                        tabIndex="0"
                        id="rc-tabs-0-tab-staking"
                        aria-controls="rc-tabs-0-panel-staking"
                      >
                        My staking
                      </div>
                    </div>
                    <div className="dango-tabs-tab">
                      <div
                        role="tab"
                        aria-selected="false"
                        className="dango-tabs-tab-btn"
                        tabIndex="0"
                        id="rc-tabs-0-tab-activity"
                        aria-controls="rc-tabs-0-panel-activity"
                      >
                        Activity
                      </div>
                    </div>
                    <div
                      className="dango-tabs-ink-bar dango-tabs-ink-bar-animated"
                      style={{ left: "0px", width: "131px" }}
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
                    className="dango-tabs-tabpane dango-tabs-tabpane-active pt-24"
                    id="rc-tabs-0-panel-validator"
                    aria-labelledby="rc-tabs-0-tab-validator"
                  >
                    <div className="grid grid-cols-12 gap-28 gap-y-24 md:gap-y-24">
                      <div className="col-span-12">
                        <div className="flex flex-wrap items-center justify-between gap-[18px] rounded-2x border border-solid border-tc-border p-16 md:min-h-[142px] md:gap-24 md:px-24 md:py-32">
                          <div className="flex min-w-[130px] flex-1 flex-col justify-center lg:min-w-[auto] lg:border-0 lg:border-r lg:border-solid lg:border-tc-border hidden md:block">
                            <div className="hidden md:block">
                              <div className="image-wrapper-module_container__5gv1w image-wrapper-module_md__bnf-N text-tc-icon">
                                <svg viewBox="0 0 20 20" width="32" height="32">
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
                            </div>
                            <div className="typo-module_t-label__38Ly4 typo-module_mobile-t-label__G-AYO typo-module_neutral__9orA9 typo-module_dim__qoQFh mb-8 uppercase lg:mt-16">
                              Total Stake
                            </div>
                            <div className="flex items-baseline">
                              <div className="typo-module_t-display-md__KVUIu typo-module_mobile-t-display-md__BsA5M typo-module_neutral__9orA9 hidden md:block mr-4 overflow-hidden text-ellipsis">
                                227,857,947
                              </div>
                              <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-md__-HKdi typo-module_neutral__9orA9 block md:hidden mr-4 overflow-hidden text-ellipsis">
                                227,857,947
                              </div>
                              <div className="typo-module_t-body-sm__UYoyX typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh">
                                RON
                              </div>
                            </div>
                          </div>
                          <div className="flex min-w-[130px] flex-1 flex-col justify-center lg:min-w-[auto] lg:border-0 lg:border-r lg:border-solid lg:border-tc-border hidden md:block">
                            <div className="hidden md:block">
                              <div className="image-wrapper-module_container__5gv1w image-wrapper-module_md__bnf-N text-tc-icon">
                                <svg viewBox="0 0 20 20" width="32" height="32">
                                  <path
                                    fill="currentColor"
                                    fillRule="evenodd"
                                    d="M9.339 2.864 7.671 6.79c-.062.146-.093.219-.141.274a.454.454 0 0 1-.152.116c-.066.03-.141.04-.292.056l-4.075.45c-.512.057-.768.086-.882.208a.489.489 0 0 0-.124.4c.024.17.215.35.597.711l3.044 2.877c.113.107.17.16.205.225a.49.49 0 0 1 .058.188c.008.074-.008.152-.04.308l-.85 4.204c-.107.527-.16.791-.084.942a.454.454 0 0 0 .325.248c.16.029.383-.106.829-.375l3.55-2.147c.131-.08.197-.12.267-.136a.432.432 0 0 1 .188 0c.07.016.136.056.268.136l3.55 2.146c.445.27.668.405.828.376a.454.454 0 0 0 .326-.248c.075-.15.022-.415-.085-.942l-.85-4.204c-.032-.156-.048-.234-.04-.309a.49.49 0 0 1 .058-.187c.036-.065.092-.118.205-.225l3.044-2.877c.382-.36.573-.541.597-.71a.49.49 0 0 0-.124-.401c-.114-.122-.37-.15-.881-.207l-4.075-.451c-.152-.017-.227-.025-.293-.056a.454.454 0 0 1-.152-.116c-.048-.055-.079-.128-.14-.274l-1.67-3.926c-.21-.492-.314-.739-.46-.815a.434.434 0 0 0-.402 0c-.146.076-.25.323-.46.815Zm5.977 1.216a.523.523 0 0 0 0-.72.478.478 0 0 0-.694 0l-1.275 1.324a.523.523 0 0 0 0 .72.478.478 0 0 0 .694 0l1.275-1.324ZM4.653 3.36a.523.523 0 0 0 0 .72L5.93 5.405a.478.478 0 0 0 .693 0 .523.523 0 0 0 0-.72L5.347 3.36a.478.478 0 0 0-.694 0Zm-2.806 9.756a.514.514 0 0 0-.32.64.486.486 0 0 0 .626.312l1.707-.592a.514.514 0 0 0 .32-.64.487.487 0 0 0-.626-.312l-1.707.592Zm16.333.64a.514.514 0 0 0-.32-.64l-1.707-.592a.487.487 0 0 0-.625.312.514.514 0 0 0 .32.64l1.706.592c.261.09.541-.05.626-.313ZM9.5 18.803a.5.5 0 1 0 1 0V17a.5.5 0 0 0-1 0v1.804Z"
                                    clipRule="evenodd"
                                  ></path>
                                </svg>
                              </div>
                            </div>
                            <div className="typo-module_t-label__38Ly4 typo-module_mobile-t-label__G-AYO typo-module_neutral__9orA9 typo-module_dim__qoQFh mb-8 uppercase lg:mt-16">
                              Total Rewards
                            </div>
                            <div className="flex items-baseline">
                              <div className="typo-module_t-display-md__KVUIu typo-module_mobile-t-display-md__BsA5M typo-module_neutral__9orA9 hidden md:block mr-4 overflow-hidden text-ellipsis">
                                46,490,703
                              </div>
                              <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-md__-HKdi typo-module_neutral__9orA9 block md:hidden mr-4 overflow-hidden text-ellipsis">
                                46,490,703
                              </div>
                              <div className="typo-module_t-body-sm__UYoyX typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh">
                                RON
                              </div>
                            </div>
                          </div>
                          <div className="w-full md:hidden">
                            <div className="flex min-w-[130px] flex-1 flex-col justify-center lg:min-w-[auto] lg:border-0 lg:border-r lg:border-solid lg:border-tc-border mb-24 md:mb-0">
                              <div className="hidden md:block">
                                <div className="image-wrapper-module_container__5gv1w image-wrapper-module_md__bnf-N text-tc-icon">
                                  <svg
                                    viewBox="0 0 20 20"
                                    width="32"
                                    height="32"
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
                              </div>
                              <div className="typo-module_t-label__38Ly4 typo-module_mobile-t-label__G-AYO typo-module_neutral__9orA9 typo-module_dim__qoQFh mb-8 uppercase lg:mt-16">
                                Total Stake
                              </div>
                              <div className="flex items-baseline">
                                <div className="typo-module_t-display-md__KVUIu typo-module_mobile-t-display-md__BsA5M typo-module_neutral__9orA9 hidden md:block mr-4 overflow-hidden text-ellipsis">
                                  227,857,947
                                </div>
                                <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-md__-HKdi typo-module_neutral__9orA9 block md:hidden mr-4 overflow-hidden text-ellipsis">
                                  227,857,947
                                </div>
                                <div className="typo-module_t-body-sm__UYoyX typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh">
                                  RON
                                </div>
                              </div>
                            </div>
                            <div className="flex min-w-[130px] flex-1 flex-col justify-center lg:min-w-[auto] lg:border-0 lg:border-r lg:border-solid lg:border-tc-border">
                              <div className="hidden md:block">
                                <div className="image-wrapper-module_container__5gv1w image-wrapper-module_md__bnf-N text-tc-icon">
                                  <svg
                                    viewBox="0 0 20 20"
                                    width="32"
                                    height="32"
                                  >
                                    <path
                                      fill="currentColor"
                                      fillRule="evenodd"
                                      d="M9.339 2.864 7.671 6.79c-.062.146-.093.219-.141.274a.454.454 0 0 1-.152.116c-.066.03-.141.04-.292.056l-4.075.45c-.512.057-.768.086-.882.208a.489.489 0 0 0-.124.4c.024.17.215.35.597.711l3.044 2.877c.113.107.17.16.205.225a.49.49 0 0 1 .058.188c.008.074-.008.152-.04.308l-.85 4.204c-.107.527-.16.791-.084.942a.454.454 0 0 0 .325.248c.16.029.383-.106.829-.375l3.55-2.147c.131-.08.197-.12.267-.136a.432.432 0 0 1 .188 0c.07.016.136.056.268.136l3.55 2.146c.445.27.668.405.828.376a.454.454 0 0 0 .326-.248c.075-.15.022-.415-.085-.942l-.85-4.204c-.032-.156-.048-.234-.04-.309a.49.49 0 0 1 .058-.187c.036-.065.092-.118.205-.225l3.044-2.877c.382-.36.573-.541.597-.71a.49.49 0 0 0-.124-.401c-.114-.122-.37-.15-.881-.207l-4.075-.451c-.152-.017-.227-.025-.293-.056a.454.454 0 0 1-.152-.116c-.048-.055-.079-.128-.14-.274l-1.67-3.926c-.21-.492-.314-.739-.46-.815a.434.434 0 0 0-.402 0c-.146.076-.25.323-.46.815Zm5.977 1.216a.523.523 0 0 0 0-.72.478.478 0 0 0-.694 0l-1.275 1.324a.523.523 0 0 0 0 .72.478.478 0 0 0 .694 0l1.275-1.324ZM4.653 3.36a.523.523 0 0 0 0 .72L5.93 5.405a.478.478 0 0 0 .693 0 .523.523 0 0 0 0-.72L5.347 3.36a.478.478 0 0 0-.694 0Zm-2.806 9.756a.514.514 0 0 0-.32.64.486.486 0 0 0 .626.312l1.707-.592a.514.514 0 0 0 .32-.64.487.487 0 0 0-.626-.312l-1.707.592Zm16.333.64a.514.514 0 0 0-.32-.64l-1.707-.592a.487.487 0 0 0-.625.312.514.514 0 0 0 .32.64l1.706.592c.261.09.541-.05.626-.313ZM9.5 18.803a.5.5 0 1 0 1 0V17a.5.5 0 0 0-1 0v1.804Z"
                                      clipRule="evenodd"
                                    ></path>
                                  </svg>
                                </div>
                              </div>
                              <div className="typo-module_t-label__38Ly4 typo-module_mobile-t-label__G-AYO typo-module_neutral__9orA9 typo-module_dim__qoQFh mb-8 uppercase lg:mt-16">
                                Total Rewards
                              </div>
                              <div className="flex items-baseline">
                                <div className="typo-module_t-display-md__KVUIu typo-module_mobile-t-display-md__BsA5M typo-module_neutral__9orA9 hidden md:block mr-4 overflow-hidden text-ellipsis">
                                  46,490,703
                                </div>
                                <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-md__-HKdi typo-module_neutral__9orA9 block md:hidden mr-4 overflow-hidden text-ellipsis">
                                  46,490,703
                                </div>
                                <div className="typo-module_t-body-sm__UYoyX typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh">
                                  RON
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex min-w-[130px] flex-1 flex-col justify-center lg:min-w-[auto] lg:border-0 lg:border-r lg:border-solid lg:border-tc-border">
                            <div className="hidden md:block">
                              <div className="image-wrapper-module_container__5gv1w image-wrapper-module_md__bnf-N text-tc-icon">
                                <svg viewBox="0 0 20 20" width="32" height="32">
                                  <g clipPath="url(#shield-2_svg__a)">
                                    <path
                                      fill="currentColor"
                                      fillRule="evenodd"
                                      d="M6.954 2a.546.546 0 0 0-.518.43C6.038 4.062 4.677 5.35 2.95 5.722a.535.535 0 0 0-.434.522c.06 2.73.416 5.739 1.94 8.04 1.275 1.928 3.166 3.058 5.424 3.68a.483.483 0 0 0 .257 0c2.258-.622 4.15-1.752 5.425-3.68 1.523-2.301 1.88-5.31 1.94-8.04a.535.535 0 0 0-.435-.522c-1.727-.374-3.087-1.66-3.486-3.294A.546.546 0 0 0 13.063 2H6.954ZM10 7c.829 0 1.5.766 1.5 1.5 0 .511-.325 1.285-.802 1.507L11 12H9l.302-1.993C8.825 9.785 8.5 9.011 8.5 8.5c0-.734.672-1.5 1.5-1.5Z"
                                      clipRule="evenodd"
                                    ></path>
                                  </g>
                                  <defs>
                                    <clipPath id="shield-2_svg__a">
                                      <path
                                        fill="#fff"
                                        d="M0 0h20v20H0z"
                                      ></path>
                                    </clipPath>
                                  </defs>
                                </svg>
                              </div>
                            </div>
                            <div className="typo-module_t-label__38Ly4 typo-module_mobile-t-label__G-AYO typo-module_neutral__9orA9 typo-module_dim__qoQFh mb-8 uppercase lg:mt-16">
                              Validators
                            </div>
                            <div className="typo-module_t-display-md__KVUIu typo-module_mobile-t-display-md__BsA5M typo-module_neutral__9orA9 hidden md:block mr-4">
                              27
                            </div>
                            <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-md__-HKdi typo-module_neutral__9orA9 block md:hidden mr-4">
                              27
                            </div>
                          </div>
                          <div className="flex min-w-[130px] flex-1 flex-col justify-center lg:min-w-[auto]">
                            <div className="hidden md:block">
                              <div className="image-wrapper-module_container__5gv1w image-wrapper-module_md__bnf-N text-tc-icon">
                                <svg viewBox="0 0 20 20" width="32" height="32">
                                  <path
                                    fill="currentColor"
                                    fillRule="evenodd"
                                    d="M9.844 9.208a3.636 3.636 0 1 1-5.143-5.143 3.636 3.636 0 0 1 5.143 5.143ZM15 15.273c0-1.527-.873-2.673-2.118-3.518 2.509.363 5.754 1.536 5.754 3.518V18H15v-2.727Zm-2.273-5a3.635 3.635 0 0 0 3.637-3.637A3.635 3.635 0 0 0 12.727 3c-.427 0-.827.09-1.209.218a5.436 5.436 0 0 1 0 6.837c.382.127.782.218 1.21.218ZM2 15c0-2.66 3.664-3.5 5.5-3.5 1.836 0 5.5.84 5.5 3.5v3H2v-3Z"
                                    clipRule="evenodd"
                                  ></path>
                                </svg>
                              </div>
                            </div>
                            <div className="typo-module_t-label__38Ly4 typo-module_mobile-t-label__G-AYO typo-module_neutral__9orA9 typo-module_dim__qoQFh mb-8 uppercase lg:mt-16">
                              Delegators
                            </div>
                            <div className="flex items-baseline">
                              <div className="typo-module_t-display-md__KVUIu typo-module_mobile-t-display-md__BsA5M typo-module_neutral__9orA9 hidden md:block mr-4">
                                283,661
                              </div>
                              <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-md__-HKdi typo-module_neutral__9orA9 block md:hidden mr-4">
                                283,661
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-span-12">
                        <div className="banner-rotating relative mb-40 rounded-2x border border-solid border-tc-border p-24">
                          <div className="typo-module_t-display-md__KVUIu typo-module_mobile-t-display-md__BsA5M typo-module_neutral__9orA9 mb-16 flex">
                            <div className="typo-module_t-display-md__KVUIu typo-module_mobile-t-display-md__BsA5M typo-module_neutral__9orA9 title-rotating mr-4">
                              Rewards update
                            </div>
                            📌
                          </div>
                          <div className="typo-module_t-body-md-strong__B-Sd1 typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9">
                            All validators and their delegators can now earn
                            daily staking rewards.
                            <a
                              className="typo-module_t-body-md-strong__B-Sd1 typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9 link-module_link__Nwimt undefined md:ml-4"
                              href="https://docs.roninchain.com/basics/rewards"
                              target="_blank"
                            >
                              Learn more
                            </a>
                          </div>
                          <button className="button-module_button__Z331g button-module_intent-default__f1RNz button-module_size-small__Nes6W button-module_icon-button__-UBF4 button-module_variant-plain__hxRYr button-module_button-root__0roWY absolute top-16 right-16">
                            <span className="button-module_icon-wrapper__VV4f-">
                              <svg
                                className="button-module_icon__-nXel"
                                viewBox="0 0 20 20"
                                width="16"
                                height="16"
                              >
                                <path
                                  fill="currentColor"
                                  d="M6.53 5.47a.75.75 0 0 0-1.06 1.06L8.94 10l-3.47 3.47a.75.75 0 1 0 1.06 1.06L10 11.06l3.47 3.47a.75.75 0 1 0 1.06-1.06L11.06 10l3.47-3.47a.75.75 0 0 0-1.06-1.06L10 8.94 6.53 5.47Z"
                                ></path>
                              </svg>
                            </span>
                          </button>
                        </div>
                        <div className="relative">
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
                                      id="rc-tabs-1-tab-validators"
                                      aria-controls="rc-tabs-1-panel-validators"
                                    >
                                      Active Validators
                                      <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3 ml-4">
                                        <div className="badge-module_badge__kTvKz badge-module_default-solid__76z0J badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                          <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs">
                                            27
                                          </span>
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
                                      id="rc-tabs-1-tab-renounced"
                                      aria-controls="rc-tabs-1-panel-renounced"
                                    >
                                      Renounced
                                      <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3 ml-4">
                                        <div className="badge-module_badge__kTvKz badge-module_default-solid__76z0J badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                          <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs">
                                            9
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="dango-tabs-ink-bar dango-tabs-ink-bar-animated"
                                    style={{ left: "6px", width: "196px" }}
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
                                  aria-controls="rc-tabs-1-more-popup"
                                  id="rc-tabs-1-more"
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
                                  id="rc-tabs-1-panel-validators"
                                  aria-labelledby="rc-tabs-1-tab-validators"
                                >
                                  <div className="right-0 top-0 mt-16 mb-24 flex gap-8 pr-[3px] pl-[3px] lg:absolute lg:mb-0 lg:mt-0 lg:pl-0">
                                    <div className="flex flex-col md:flex-row md:items-center">
                                      <label className="switch-module_switch__M6-tU switch-module_primary__CrQz8 switch-module_large__VlKV1 switch-module_switch-root__2xj6b switch-module_wrapper__5-2P1">
                                        <input
                                          type="checkbox"
                                          className="switch-module_input__YKZRj"
                                          checked=""
                                        />
                                        <span className="switch-module_track__QNvnO switch-module_on__FeesZ">
                                          <span className="switch-module_thumb__cunvF"></span>
                                        </span>
                                        <span className="switch-module_label__lscBr">
                                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-md__-HKdi typo-module_neutral__9orA9">
                                            <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-md__-HKdi typo-module_neutral__9orA9">
                                              Governing validators
                                            </div>
                                          </div>
                                        </span>
                                      </label>
                                      <div className="mt-20 w-full md:mt-0 md:ml-20 lg:w-[320px]">
                                        <div className="form-item-module_form__3-Rfq text-field-module_input-root__PSsoe">
                                          <div className="input-module_container__Gch8D input-module_default__Rk4yp lg:w-[320px]">
                                            <div className="input-module_form__2zFJF">
                                              <span className="input-module_prefix__uR1Sx">
                                                <svg
                                                  viewBox="0 0 20 20"
                                                  width="20"
                                                  height="20"
                                                >
                                                  <path
                                                    fill="currentColor"
                                                    d="M13.742 12.328a6.524 6.524 0 1 0-1.414 1.414l3.965 3.965a1 1 0 0 0 1.414-1.414l-3.965-3.965ZM4 8.5a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0Z"
                                                  ></path>
                                                </svg>
                                              </span>
                                              <input
                                                placeholder="Search for validators"
                                                className="input-module_formControl__oYbNL input-module_hasPrefix__Zh5xG"
                                                value=""
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="ronin-table hoverable-row ronin-table-fixed-column ronin-table-scroll-horizontal ronin-table-has-fix-left">
                                    <div className="ronin-table-container">
                                      <div
                                        className="ronin-table-content"
                                        style={{ overflow: "auto hidden" }}
                                      >
                                        <a
                                          className="ronin-table-row ronin-table-row-level-0 table-row cursor-pointer"
                                          href="/validator/0x6aaabf51c5f6d2d93212cf7dad73d67afa0148d0"
                                          style={{
                                            verticalAlign: "inherit",
                                          }}
                                        ></a>
                                        <a
                                          className="ronin-table-row ronin-table-row-level-0 table-row cursor-pointer"
                                          href="/validator/0xae53daac1bf3c4633d4921b8c3f8d579e757f5bc"
                                          style={{
                                            verticalAlign: "inherit",
                                          }}
                                        ></a>
                                        <a
                                          className="ronin-table-row ronin-table-row-level-0 table-row cursor-pointer"
                                          href="/validator/0x32d619dc6188409cebbc52f921ab306f07db085b"
                                          style={{
                                            verticalAlign: "inherit",
                                          }}
                                        ></a>
                                        <a
                                          className="ronin-table-row ronin-table-row-level-0 table-row cursor-pointer"
                                          href="/validator/0x4e7ea047ec7e95c7a02cb117128b94ccdd8356bf"
                                          style={{
                                            verticalAlign: "inherit",
                                          }}
                                        ></a>
                                        <a
                                          className="ronin-table-row ronin-table-row-level-0 table-row cursor-pointer"
                                          href="/validator/0x05ad3ded6fcc510324af8e2631717af6da5c8b5b"
                                          style={{
                                            verticalAlign: "inherit",
                                          }}
                                        ></a>
                                        <a
                                          className="ronin-table-row ronin-table-row-level-0 table-row cursor-pointer"
                                          href="/validator/0xf41af21f0a800dc4d86efb14ad46cfb9884fdf38"
                                          style={{
                                            verticalAlign: "inherit",
                                          }}
                                        ></a>
                                        <a
                                          className="ronin-table-row ronin-table-row-level-0 table-row cursor-pointer"
                                          href="/validator/0xfc3e31519b551bd594235dd0ef014375a87c4e21"
                                          style={{
                                            verticalAlign: "inherit",
                                          }}
                                        ></a>
                                        <a
                                          className="ronin-table-row ronin-table-row-level-0 table-row cursor-pointer"
                                          href="/validator/0xedcafc4ad8097c2012980a2a7087d74b86bddaf9"
                                          style={{
                                            verticalAlign: "inherit",
                                          }}
                                        ></a>
                                        <a
                                          className="ronin-table-row ronin-table-row-level-0 table-row cursor-pointer"
                                          href="/validator/0x6e46924371d0e910769aabe0d867590deac20684"
                                          style={{
                                            verticalAlign: "inherit",
                                          }}
                                        ></a>
                                        <a
                                          className="ronin-table-row ronin-table-row-level-0 table-row cursor-pointer"
                                          href="/validator/0x61089875ff9e506ae78c7fe9f7c388416520e386"
                                          style={{
                                            verticalAlign: "inherit",
                                          }}
                                        ></a>
                                        <a
                                          className="ronin-table-row ronin-table-row-level-0 table-row cursor-pointer"
                                          href="/validator/0x16c3557646628bbe29ffcf021c17c7f375b98e81"
                                          style={{
                                            verticalAlign: "inherit",
                                          }}
                                        ></a>
                                        <a
                                          className="ronin-table-row ronin-table-row-level-0 table-row cursor-pointer"
                                          href="/validator/0x4125217ce8868553e1f61bb030426efd330c2d68"
                                          style={{
                                            verticalAlign: "inherit",
                                          }}
                                        ></a>
                                        <a
                                          className="ronin-table-row ronin-table-row-level-0 table-row cursor-pointer"
                                          href="/validator/0x2bddcaae1c6ccd53e436179b3fc07307ee6f3ef8"
                                          style={{
                                            verticalAlign: "inherit",
                                          }}
                                        ></a>
                                        <a
                                          className="ronin-table-row ronin-table-row-level-0 table-row cursor-pointer"
                                          href="/validator/0xca54a1700e0403dcb531f8db4ae3847758b90b01"
                                          style={{
                                            verticalAlign: "inherit",
                                          }}
                                        ></a>
                                        <a
                                          className="ronin-table-row ronin-table-row-level-0 table-row cursor-pointer"
                                          href="/validator/0x749f36cc1daeec1bced9f1f182c92851727d1e73"
                                          style={{
                                            verticalAlign: "inherit",
                                          }}
                                        ></a>
                                        <a
                                          className="ronin-table-row ronin-table-row-level-0 table-row cursor-pointer"
                                          href="/validator/0xbeef86b900b6b791d1cc7746ce030aa8d4e4cafe"
                                          style={{
                                            verticalAlign: "inherit",
                                          }}
                                        ></a>
                                        <a
                                          className="ronin-table-row ronin-table-row-level-0 table-row cursor-pointer"
                                          href="/validator/0xe07d7e56588a6fd860c5073c70a099658c060f3d"
                                          style={{
                                            verticalAlign: "inherit",
                                          }}
                                        ></a>
                                        <a
                                          className="ronin-table-row ronin-table-row-level-0 table-row cursor-pointer"
                                          href="/validator/0xec702628f44c31acc56c3a59555be47e1f16eb1e"
                                          style={{
                                            verticalAlign: "inherit",
                                          }}
                                        ></a>
                                        <a
                                          className="ronin-table-row ronin-table-row-level-0 table-row cursor-pointer"
                                          href="/validator/0x210744c64eea863cf0f972e5aebc683b98fb1984"
                                          style={{
                                            verticalAlign: "inherit",
                                          }}
                                        ></a>
                                        <a
                                          className="ronin-table-row ronin-table-row-level-0 table-row cursor-pointer"
                                          href="/validator/0x52349003240770727900b06a3b3a90f5c0219ade"
                                          style={{
                                            verticalAlign: "inherit",
                                          }}
                                        ></a>
                                        <a
                                          className="ronin-table-row ronin-table-row-level-0 table-row cursor-pointer"
                                          href="/validator/0x9b959d27840a31988410ee69991bcf0110d61f02"
                                          style={{
                                            verticalAlign: "inherit",
                                          }}
                                        ></a>
                                        <a
                                          className="ronin-table-row ronin-table-row-level-0 table-row cursor-pointer"
                                          href="/validator/0x8eec4f1c0878f73e8e09c1be78ac1465cc16544d"
                                          style={{
                                            verticalAlign: "inherit",
                                          }}
                                        ></a>
                                        <a
                                          className="ronin-table-row ronin-table-row-level-0 table-row cursor-pointer"
                                          href="/validator/0xd11d9842babd5209b9b1155e46f5878c989125b7"
                                          style={{
                                            verticalAlign: "inherit",
                                          }}
                                        ></a>
                                        <a
                                          className="ronin-table-row ronin-table-row-level-0 table-row cursor-pointer"
                                          href="/validator/0xee11d2016e9f2fae606b2f12986811f4abbe6215"
                                          style={{
                                            verticalAlign: "inherit",
                                          }}
                                        ></a>
                                        <a
                                          className="ronin-table-row ronin-table-row-level-0 table-row cursor-pointer"
                                          href="/validator/0x52c0dcd83aa1999ba6c3b0324c8299e30207373c"
                                          style={{
                                            verticalAlign: "inherit",
                                          }}
                                        ></a>
                                        <a
                                          className="ronin-table-row ronin-table-row-level-0 table-row cursor-pointer"
                                          href="/validator/0x8a4be221fbb743353b2365ceacfb57109a2ac73e"
                                          style={{
                                            verticalAlign: "inherit",
                                          }}
                                        ></a>
                                        <a
                                          className="ronin-table-row ronin-table-row-level-0 table-row cursor-pointer"
                                          href="/validator/0x2c96d7b5d1887222025ec9f0be92fb91065d9d87"
                                          style={{
                                            verticalAlign: "inherit",
                                          }}
                                        ></a>
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
                                                className="ronin-table-cell z-[1] !pl-0 md:!pl-16 ronin-table-cell-fix-left ronin-table-cell-fix-left-last"
                                                scope="col"
                                                style={{
                                                  textAlign: "left",
                                                  position: "sticky",
                                                  left: 0,
                                                }}
                                              >
                                                <div>
                                                  <div className="typo-module_t-label__38Ly4 typo-module_mobile-t-label__G-AYO typo-module_neutral__9orA9 typo-module_dim__qoQFh w-fit border-0 border-b border-dashed border-tc-border-text-subdued">
                                                    Validators
                                                  </div>
                                                </div>
                                              </th>
                                              <th
                                                className="ronin-table-cell"
                                                scope="col"
                                                style={{
                                                  textAlign: "right",
                                                }}
                                              >
                                                <div className="typo-module_t-label__38Ly4 typo-module_mobile-t-label__G-AYO typo-module_neutral__9orA9 typo-module_dim__qoQFh rcTable-module_column-title-has-sorter__pJFMl">
                                                  live apr
                                                  <svg
                                                    viewBox="0 0 20 20"
                                                    width="20"
                                                    height="20"
                                                  >
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
                                                style={{
                                                  textAlign: "right",
                                                }}
                                              >
                                                <div className="typo-module_t-label__38Ly4 typo-module_mobile-t-label__G-AYO typo-module_neutral__9orA9 typo-module_dim__qoQFh rcTable-module_column-title-has-sorter__pJFMl">
                                                  total stake
                                                  <svg
                                                    viewBox="0 0 20 20"
                                                    width="20"
                                                    height="20"
                                                  >
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
                                                style={{
                                                  textAlign: "right",
                                                }}
                                              >
                                                <div className="typo-module_t-label__38Ly4 typo-module_mobile-t-label__G-AYO typo-module_neutral__9orA9 typo-module_dim__qoQFh rcTable-module_column-title-has-sorter__pJFMl">
                                                  uptime
                                                  <svg
                                                    viewBox="0 0 20 20"
                                                    width="20"
                                                    height="20"
                                                  >
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
                                                style={{
                                                  textAlign: "right",
                                                }}
                                              >
                                                <div className="typo-module_t-label__38Ly4 typo-module_mobile-t-label__G-AYO typo-module_neutral__9orA9 typo-module_dim__qoQFh rcTable-module_column-title-has-sorter__pJFMl">
                                                  status
                                                  <svg
                                                    viewBox="0 0 20 20"
                                                    width="20"
                                                    height="20"
                                                  >
                                                    <path
                                                      fill="currentColor"
                                                      fillRule="evenodd"
                                                      d="M8.53 8.53a.75.75 0 0 1-1.06-1.06l2-2a.75.75 0 0 1 1.06 0l2 2a.75.75 0 0 1-1.06 1.06L10 7.06 8.53 8.53Zm0 2.94a.75.75 0 0 0-1.06 1.06l2 2a.75.75 0 0 0 1.06 0l2-2a.75.75 0 1 0-1.06-1.06L10 12.94l-1.47-1.47Z"
                                                      clipRule="evenodd"
                                                    ></path>
                                                  </svg>
                                                </div>
                                              </th>
                                              <td
                                                className="ronin-table-cell"
                                                style={{
                                                  textAlign: "right",
                                                }}
                                              ></td>
                                            </tr>
                                          </thead>
                                          <tbody className="ronin-table-tbody">
                                            <tr
                                              aria-hidden="true"
                                              className="ronin-table-measure-row"
                                              style={{
                                                height: 0,
                                                fontSize: 0,
                                              }}
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
                                            <tr>
                                              <td
                                                className="ronin-table-cell z-[1] !pl-0 md:!pl-16 ronin-table-cell-fix-left ronin-table-cell-fix-left-last"
                                                style={{
                                                  textAlign: "left",
                                                  position: "sticky",
                                                  left: 0,
                                                }}
                                              >
                                                <div className="gap-2 flex w-[148px] items-center md:w-[auto]">
                                                  <div className="flex w-full items-center justify-between overflow-hidden">
                                                    <div className="flex items-center">
                                                      <div className="mr-12">
                                                        <div className="avatar-module_size-s__pbWkl shrink-0">
                                                          <svg
                                                            viewBox="0 0 80 80"
                                                            fill="none"
                                                            role="img"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="24"
                                                            height="24"
                                                          >
                                                            <mask
                                                              id=":r1:"
                                                              maskUnits="userSpaceOnUse"
                                                              x="0"
                                                              y="0"
                                                              width="80"
                                                              height="80"
                                                            >
                                                              <rect
                                                                width="80"
                                                                height="80"
                                                                rx="160"
                                                                fill="#FFFFFF"
                                                              ></rect>
                                                            </mask>
                                                            <g mask="url(#:r1:)">
                                                              <rect
                                                                width="80"
                                                                height="80"
                                                                fill="#E3E8F2"
                                                              ></rect>
                                                              <path
                                                                filter="url(#prefix__filter0_f)"
                                                                d="M32.414 59.35L50.376 70.5H72.5v-71H33.728L26.5 13.381l19.057 27.08L32.414 59.35z"
                                                                fill="#4BFFD4"
                                                                transform="translate(6 6) rotate(134 40 40) scale(1.3)"
                                                              ></path>
                                                              <path
                                                                filter="url(#prefix__filter0_f)"
                                                                d="M22.216 24L0 46.75l14.108 38.129L78 86l-3.081-59.276-22.378 4.005 12.972 20.186-23.35 27.395L22.215 24z"
                                                                fill="#0035FF"
                                                                transform="translate(-5 5) rotate(-21 40 40) scale(1.3)"
                                                                style={{
                                                                  mixBlendMode:
                                                                    "overlay",
                                                                }}
                                                              ></path>
                                                            </g>
                                                            <defs>
                                                              <filter
                                                                id="prefix__filter0_f"
                                                                filterUnits="userSpaceOnUse"
                                                                colorInterpolationFilters="sRGB"
                                                              >
                                                                <feFlood
                                                                  floodOpacity="0"
                                                                  result="BackgroundImageFix"
                                                                ></feFlood>
                                                                <feBlend
                                                                  in="SourceGraphic"
                                                                  in2="BackgroundImageFix"
                                                                  result="shape"
                                                                ></feBlend>
                                                                <feGaussianBlur
                                                                  stdDeviation="7"
                                                                  result="effect1_foregroundBlur"
                                                                ></feGaussianBlur>
                                                              </filter>
                                                            </defs>
                                                          </svg>
                                                        </div>
                                                      </div>
                                                      <div className="flex flex-col">
                                                        <div className="flex items-center">
                                                          <div className="overflow-hidden">
                                                            <div className="mr-8 flex items-center">
                                                              <div className="flex items-center gap-12 truncate max-w-full">
                                                                <a
                                                                  className="typo-module_t-body-md-strong__B-Sd1 typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9 link-module_link__Nwimt link-module_underline-mode-onlyWhenHover__alkql link-module_monochrome__yqKNC block truncate max-w-full"
                                                                  href="/validator/0x6aaabf51c5f6d2d93212cf7dad73d67afa0148d0"
                                                                >
                                                                  Luganodes
                                                                </a>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell"
                                                style={{
                                                  textAlign: "right",
                                                }}
                                              >
                                                <div className="inline-flex">
                                                  <div>
                                                    <div className="flex items-center">
                                                      <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 border-tc-border-text-subdued mr-4 flex items-end border-0 border-b border-dashed">
                                                        8.36
                                                        <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh ml-[2px]">
                                                          %
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell"
                                                style={{
                                                  textAlign: "right",
                                                }}
                                              >
                                                <div className="flex items-center gap-8 overflow-hidden justify-end">
                                                  <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                                                    15,344,743.06
                                                  </div>
                                                  <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh">
                                                    RON
                                                  </div>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell"
                                                style={{
                                                  textAlign: "right",
                                                }}
                                              >
                                                <div className="inline-flex">
                                                  <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 mr-[2px]">
                                                    99.95
                                                  </div>
                                                  <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh">
                                                    %
                                                  </div>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell"
                                                style={{
                                                  textAlign: "right",
                                                }}
                                              >
                                                <div className="inline-flex">
                                                  <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3">
                                                    <div className="badge-module_badge__kTvKz badge-module_success-solid__6ZYL7 badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                                      <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs badge-module_has-left-icon__x3ijB">
                                                        <div className="badge-module_side-dot__hOn9b badge-module_success__E5Zz4"></div>
                                                        Active
                                                      </span>
                                                    </div>
                                                  </div>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell"
                                                style={{
                                                  textAlign: "right",
                                                }}
                                              >
                                                <div>
                                                  <button className="button-module_button__Z331g button-module_intent-primary__SAO1x button-module_size-small__Nes6W button-module_button-root__0roWY">
                                                    Stake
                                                  </button>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell z-[1] !pl-0 md:!pl-16 ronin-table-cell-fix-left ronin-table-cell-fix-left-last"
                                                style={{
                                                  textAlign: "left",
                                                  position: "sticky",
                                                  left: 0,
                                                }}
                                              >
                                                <div className="gap-2 flex w-[148px] items-center md:w-[auto]">
                                                  <div className="flex w-full items-center justify-between overflow-hidden">
                                                    <div className="flex items-center">
                                                      <div className="mr-12">
                                                        <div className="avatar-module_size-s__pbWkl shrink-0">
                                                          <svg
                                                            viewBox="0 0 80 80"
                                                            fill="none"
                                                            role="img"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="24"
                                                            height="24"
                                                          >
                                                            <mask
                                                              id=":r2:"
                                                              maskUnits="userSpaceOnUse"
                                                              x="0"
                                                              y="0"
                                                              width="80"
                                                              height="80"
                                                            >
                                                              <rect
                                                                width="80"
                                                                height="80"
                                                                rx="160"
                                                                fill="#FFFFFF"
                                                              ></rect>
                                                            </mask>
                                                            <g mask="url(#:r2:)">
                                                              <rect
                                                                width="80"
                                                                height="80"
                                                                fill="#4BFFD4"
                                                              ></rect>
                                                              <path
                                                                filter="url(#prefix__filter0_f)"
                                                                d="M32.414 59.35L50.376 70.5H72.5v-71H33.728L26.5 13.381l19.057 27.08L32.414 59.35z"
                                                                fill="#0035FF"
                                                                transform="translate(-6 -6) rotate(-86 40 40) scale(1.3)"
                                                              ></path>
                                                              <path
                                                                filter="url(#prefix__filter0_f)"
                                                                d="M22.216 24L0 46.75l14.108 38.129L78 86l-3.081-59.276-22.378 4.005 12.972 20.186-23.35 27.395L22.215 24z"
                                                                fill="#FFAEFC"
                                                                transform="translate(-5 -5) rotate(-309 40 40) scale(1.3)"
                                                                style={{
                                                                  mixBlendMode:
                                                                    "overlay",
                                                                }}
                                                              ></path>
                                                            </g>
                                                            <defs>
                                                              <filter
                                                                id="prefix__filter0_f"
                                                                filterUnits="userSpaceOnUse"
                                                                colorInterpolationFilters="sRGB"
                                                              >
                                                                <feFlood
                                                                  floodOpacity="0"
                                                                  result="BackgroundImageFix"
                                                                ></feFlood>
                                                                <feBlend
                                                                  in="SourceGraphic"
                                                                  in2="BackgroundImageFix"
                                                                  result="shape"
                                                                ></feBlend>
                                                                <feGaussianBlur
                                                                  stdDeviation="7"
                                                                  result="effect1_foregroundBlur"
                                                                ></feGaussianBlur>
                                                              </filter>
                                                            </defs>
                                                          </svg>
                                                        </div>
                                                      </div>
                                                      <div className="flex flex-col">
                                                        <div className="flex items-center">
                                                          <div className="overflow-hidden">
                                                            <div className="mr-8 flex items-center">
                                                              <div className="flex items-center gap-12 truncate max-w-full">
                                                                <a
                                                                  className="typo-module_t-body-md-strong__B-Sd1 typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9 link-module_link__Nwimt link-module_underline-mode-onlyWhenHover__alkql link-module_monochrome__yqKNC block truncate max-w-full"
                                                                  href="/validator/0xae53daac1bf3c4633d4921b8c3f8d579e757f5bc"
                                                                >
                                                                  EternityHub.tech
                                                                </a>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell"
                                                style={{
                                                  textAlign: "right",
                                                }}
                                              >
                                                <div className="inline-flex">
                                                  <div>
                                                    <div className="flex items-center">
                                                      <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 border-tc-border-text-subdued mr-4 flex items-end border-0 border-b border-dashed">
                                                        11.14
                                                        <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh ml-[2px]">
                                                          %
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell"
                                                style={{
                                                  textAlign: "right",
                                                }}
                                              >
                                                <div className="flex items-center gap-8 overflow-hidden justify-end">
                                                  <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                                                    11,412,760.97
                                                  </div>
                                                  <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh">
                                                    RON
                                                  </div>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell"
                                                style={{
                                                  textAlign: "right",
                                                }}
                                              >
                                                <div className="inline-flex">
                                                  <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 mr-[2px]">
                                                    99.92
                                                  </div>
                                                  <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh">
                                                    %
                                                  </div>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell"
                                                style={{
                                                  textAlign: "right",
                                                }}
                                              >
                                                <div className="inline-flex">
                                                  <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3">
                                                    <div className="badge-module_badge__kTvKz badge-module_success-solid__6ZYL7 badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                                      <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs badge-module_has-left-icon__x3ijB">
                                                        <div className="badge-module_side-dot__hOn9b badge-module_success__E5Zz4"></div>
                                                        Active
                                                      </span>
                                                    </div>
                                                  </div>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell"
                                                style={{
                                                  textAlign: "right",
                                                }}
                                              >
                                                <div>
                                                  <button className="button-module_button__Z331g button-module_intent-primary__SAO1x button-module_size-small__Nes6W button-module_button-root__0roWY">
                                                    Stake
                                                  </button>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell z-[1] !pl-0 md:!pl-16 ronin-table-cell-fix-left ronin-table-cell-fix-left-last"
                                                style={{
                                                  textAlign: "left",
                                                  position: "sticky",
                                                  left: 0,
                                                }}
                                              >
                                                <div className="gap-2 flex w-[148px] items-center md:w-[auto]">
                                                  <div className="flex w-full items-center justify-between overflow-hidden">
                                                    <div className="flex items-center">
                                                      <div className="mr-12">
                                                        <div className="avatar-module_size-s__pbWkl shrink-0">
                                                          <svg
                                                            viewBox="0 0 80 80"
                                                            fill="none"
                                                            role="img"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="24"
                                                            height="24"
                                                          >
                                                            <mask
                                                              id=":r3:"
                                                              maskUnits="userSpaceOnUse"
                                                              x="0"
                                                              y="0"
                                                              width="80"
                                                              height="80"
                                                            >
                                                              <rect
                                                                width="80"
                                                                height="80"
                                                                rx="160"
                                                                fill="#FFFFFF"
                                                              ></rect>
                                                            </mask>
                                                            <g mask="url(#:r3:)">
                                                              <rect
                                                                width="80"
                                                                height="80"
                                                                fill="#2B4DFF"
                                                              ></rect>
                                                              <path
                                                                filter="url(#prefix__filter0_f)"
                                                                d="M32.414 59.35L50.376 70.5H72.5v-71H33.728L26.5 13.381l19.057 27.08L32.414 59.35z"
                                                                fill="#2065EE"
                                                                transform="translate(-4 4) rotate(-268 40 40) scale(1.4)"
                                                              ></path>
                                                              <path
                                                                filter="url(#prefix__filter0_f)"
                                                                d="M22.216 24L0 46.75l14.108 38.129L78 86l-3.081-59.276-22.378 4.005 12.972 20.186-23.35 27.395L22.215 24z"
                                                                fill="#00D4FF"
                                                                transform="translate(-6 6) rotate(-222 40 40) scale(1.4)"
                                                                style={{
                                                                  mixBlendMode:
                                                                    "overlay",
                                                                }}
                                                              ></path>
                                                            </g>
                                                            <defs>
                                                              <filter
                                                                id="prefix__filter0_f"
                                                                filterUnits="userSpaceOnUse"
                                                                colorInterpolationFilters="sRGB"
                                                              >
                                                                <feFlood
                                                                  floodOpacity="0"
                                                                  result="BackgroundImageFix"
                                                                ></feFlood>
                                                                <feBlend
                                                                  in="SourceGraphic"
                                                                  in2="BackgroundImageFix"
                                                                  result="shape"
                                                                ></feBlend>
                                                                <feGaussianBlur
                                                                  stdDeviation="7"
                                                                  result="effect1_foregroundBlur"
                                                                ></feGaussianBlur>
                                                              </filter>
                                                            </defs>
                                                          </svg>
                                                        </div>
                                                      </div>
                                                      <div className="flex flex-col">
                                                        <div className="flex items-center">
                                                          <div className="overflow-hidden">
                                                            <div className="mr-8 flex items-center">
                                                              <div className="flex items-center gap-12 truncate max-w-full">
                                                                <a
                                                                  className="typo-module_t-body-md-strong__B-Sd1 typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9 link-module_link__Nwimt link-module_underline-mode-onlyWhenHover__alkql link-module_monochrome__yqKNC block truncate max-w-full"
                                                                  href="/validator/0x32d619dc6188409cebbc52f921ab306f07db085b"
                                                                >
                                                                  Google
                                                                </a>
                                                              </div>
                                                            </div>
                                                          </div>
                                                          <span className="mr-8">
                                                            <div className="flex">
                                                              <svg
                                                                className="text-tc-icon-success"
                                                                viewBox="0 0 20 20"
                                                                width="20"
                                                                height="20"
                                                              >
                                                                <path
                                                                  fill="currentColor"
                                                                  d="M10 2c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8Zm3.707 6.707-4 4a.997.997 0 0 1-1.414 0l-2-2a.999.999 0 1 1 1.414-1.414L9 10.586l3.293-3.293a.999.999 0 1 1 1.414 1.414Z"
                                                                ></path>
                                                              </svg>
                                                            </div>
                                                          </span>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell"
                                                style={{
                                                  textAlign: "right",
                                                }}
                                              >
                                                <div className="inline-flex">
                                                  <div>
                                                    <div className="flex items-center">
                                                      <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 border-tc-border-text-subdued mr-4 flex items-end border-0 border-b border-dashed">
                                                        11.00
                                                        <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh ml-[2px]">
                                                          %
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell"
                                                style={{
                                                  textAlign: "right",
                                                }}
                                              >
                                                <div className="flex items-center gap-8 overflow-hidden justify-end">
                                                  <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                                                    11,159,811.52
                                                  </div>
                                                  <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh">
                                                    RON
                                                  </div>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell"
                                                style={{
                                                  textAlign: "right",
                                                }}
                                              >
                                                <div className="inline-flex">
                                                  <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 mr-[2px]">
                                                    99.94
                                                  </div>
                                                  <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh">
                                                    %
                                                  </div>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell"
                                                style={{
                                                  textAlign: "right",
                                                }}
                                              >
                                                <div className="inline-flex">
                                                  <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3">
                                                    <div className="badge-module_badge__kTvKz badge-module_success-solid__6ZYL7 badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                                      <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs badge-module_has-left-icon__x3ijB">
                                                        <div className="badge-module_side-dot__hOn9b badge-module_success__E5Zz4"></div>
                                                        Active
                                                      </span>
                                                    </div>
                                                  </div>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell"
                                                style={{
                                                  textAlign: "right",
                                                }}
                                              >
                                                <div>
                                                  <button className="button-module_button__Z331g button-module_intent-primary__SAO1x button-module_size-small__Nes6W button-module_button-root__0roWY">
                                                    Stake
                                                  </button>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell z-[1] !pl-0 md:!pl-16 ronin-table-cell-fix-left ronin-table-cell-fix-left-last"
                                                style={{
                                                  textAlign: "left",
                                                  position: "sticky",
                                                  left: 0,
                                                }}
                                              >
                                                <div className="gap-2 flex w-[148px] items-center md:w-[auto]">
                                                  <div className="flex w-full items-center justify-between overflow-hidden">
                                                    <div className="flex items-center">
                                                      <div className="mr-12">
                                                        <div className="avatar-module_size-s__pbWkl shrink-0">
                                                          <svg
                                                            viewBox="0 0 80 80"
                                                            fill="none"
                                                            role="img"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="24"
                                                            height="24"
                                                          >
                                                            <mask
                                                              id=":r4:"
                                                              maskUnits="userSpaceOnUse"
                                                              x="0"
                                                              y="0"
                                                              width="80"
                                                              height="80"
                                                            >
                                                              <rect
                                                                width="80"
                                                                height="80"
                                                                rx="160"
                                                                fill="#FFFFFF"
                                                              ></rect>
                                                            </mask>
                                                            <g mask="url(#:r4:)">
                                                              <rect
                                                                width="80"
                                                                height="80"
                                                                fill="#8833FF"
                                                              ></rect>
                                                              <path
                                                                filter="url(#prefix__filter0_f)"
                                                                d="M32.414 59.35L50.376 70.5H72.5v-71H33.728L26.5 13.381l19.057 27.08L32.414 59.35z"
                                                                fill="#2B4DFF"
                                                                transform="translate(0 0) rotate(296 40 40) scale(1.2)"
                                                              ></path>
                                                              <path
                                                                filter="url(#prefix__filter0_f)"
                                                                d="M22.216 24L0 46.75l14.108 38.129L78 86l-3.081-59.276-22.378 4.005 12.972 20.186-23.35 27.395L22.215 24z"
                                                                fill="#2065EE"
                                                                transform="translate(0 0) rotate(-264 40 40) scale(1.2)"
                                                                style={{
                                                                  mixBlendMode:
                                                                    "overlay",
                                                                }}
                                                              ></path>
                                                            </g>
                                                            <defs>
                                                              <filter
                                                                id="prefix__filter0_f"
                                                                filterUnits="userSpaceOnUse"
                                                                colorInterpolationFilters="sRGB"
                                                              >
                                                                <feFlood
                                                                  floodOpacity="0"
                                                                  result="BackgroundImageFix"
                                                                ></feFlood>
                                                                <feBlend
                                                                  in="SourceGraphic"
                                                                  in2="BackgroundImageFix"
                                                                  result="shape"
                                                                ></feBlend>
                                                                <feGaussianBlur
                                                                  stdDeviation="7"
                                                                  result="effect1_foregroundBlur"
                                                                ></feGaussianBlur>
                                                              </filter>
                                                            </defs>
                                                          </svg>
                                                        </div>
                                                      </div>
                                                      <div className="flex flex-col">
                                                        <div className="flex items-center">
                                                          <div className="overflow-hidden">
                                                            <div className="mr-8 flex items-center">
                                                              <div className="flex items-center gap-12 truncate max-w-full">
                                                                <a
                                                                  className="typo-module_t-body-md-strong__B-Sd1 typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9 link-module_link__Nwimt link-module_underline-mode-onlyWhenHover__alkql link-module_monochrome__yqKNC block truncate max-w-full"
                                                                  href="/validator/0x4e7ea047ec7e95c7a02cb117128b94ccdd8356bf"
                                                                >
                                                                  Ronin Catalyst
                                                                </a>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell"
                                                style={{
                                                  textAlign: "right",
                                                }}
                                              >
                                                <div className="inline-flex">
                                                  <div>
                                                    <div className="flex items-center">
                                                      <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 border-tc-border-text-subdued mr-4 flex items-end border-0 border-b border-dashed">
                                                        11.53
                                                        <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh ml-[2px]">
                                                          %
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell"
                                                style={{
                                                  textAlign: "right",
                                                }}
                                              >
                                                <div className="flex items-center gap-8 overflow-hidden justify-end">
                                                  <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                                                    11,006,057.08
                                                  </div>
                                                  <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh">
                                                    RON
                                                  </div>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell"
                                                style={{
                                                  textAlign: "right",
                                                }}
                                              >
                                                <div className="inline-flex">
                                                  <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 mr-[2px]">
                                                    99.96
                                                  </div>
                                                  <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh">
                                                    %
                                                  </div>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell"
                                                style={{
                                                  textAlign: "right",
                                                }}
                                              >
                                                <div className="inline-flex">
                                                  <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3">
                                                    <div className="badge-module_badge__kTvKz badge-module_success-solid__6ZYL7 badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                                      <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs badge-module_has-left-icon__x3ijB">
                                                        <div className="badge-module_side-dot__hOn9b badge-module_success__E5Zz4"></div>
                                                        Active
                                                      </span>
                                                    </div>
                                                  </div>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell"
                                                style={{
                                                  textAlign: "right",
                                                }}
                                              >
                                                <div>
                                                  <button className="button-module_button__Z331g button-module_intent-primary__SAO1x button-module_size-small__Nes6W button-module_button-root__0roWY">
                                                    Stake
                                                  </button>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell z-[1] !pl-0 md:!pl-16 ronin-table-cell-fix-left ronin-table-cell-fix-left-last"
                                                style={{
                                                  textAlign: "left",
                                                  position: "sticky",
                                                  left: 0,
                                                }}
                                              >
                                                <div className="gap-2 flex w-[148px] items-center md:w-[auto]">
                                                  <div className="flex w-full items-center justify-between overflow-hidden">
                                                    <div className="flex items-center">
                                                      <div className="mr-12">
                                                        <div className="avatar-module_size-s__pbWkl shrink-0">
                                                          <svg
                                                            viewBox="0 0 80 80"
                                                            fill="none"
                                                            role="img"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="24"
                                                            height="24"
                                                          >
                                                            <mask
                                                              id=":r5:"
                                                              maskUnits="userSpaceOnUse"
                                                              x="0"
                                                              y="0"
                                                              width="80"
                                                              height="80"
                                                            >
                                                              <rect
                                                                width="80"
                                                                height="80"
                                                                rx="160"
                                                                fill="#FFFFFF"
                                                              ></rect>
                                                            </mask>
                                                            <g mask="url(#:r5:)">
                                                              <rect
                                                                width="80"
                                                                height="80"
                                                                fill="#5CFFFF"
                                                              ></rect>
                                                              <path
                                                                filter="url(#prefix__filter0_f)"
                                                                d="M32.414 59.35L50.376 70.5H72.5v-71H33.728L26.5 13.381l19.057 27.08L32.414 59.35z"
                                                                fill="#E3E8F2"
                                                                transform="translate(-6 6) rotate(-262 40 40) scale(1.3)"
                                                              ></path>
                                                              <path
                                                                filter="url(#prefix__filter0_f)"
                                                                d="M22.216 24L0 46.75l14.108 38.129L78 86l-3.081-59.276-22.378 4.005 12.972 20.186-23.35 27.395L22.215 24z"
                                                                fill="#4BFFD4"
                                                                transform="translate(1 -1) rotate(33 40 40) scale(1.3)"
                                                                style={{
                                                                  mixBlendMode:
                                                                    "overlay",
                                                                }}
                                                              ></path>
                                                            </g>
                                                            <defs>
                                                              <filter
                                                                id="prefix__filter0_f"
                                                                filterUnits="userSpaceOnUse"
                                                                colorInterpolationFilters="sRGB"
                                                              >
                                                                <feFlood
                                                                  floodOpacity="0"
                                                                  result="BackgroundImageFix"
                                                                ></feFlood>
                                                                <feBlend
                                                                  in="SourceGraphic"
                                                                  in2="BackgroundImageFix"
                                                                  result="shape"
                                                                ></feBlend>
                                                                <feGaussianBlur
                                                                  stdDeviation="7"
                                                                  result="effect1_foregroundBlur"
                                                                ></feGaussianBlur>
                                                              </filter>
                                                            </defs>
                                                          </svg>
                                                        </div>
                                                      </div>
                                                      <div className="flex flex-col">
                                                        <div className="flex items-center">
                                                          <div className="overflow-hidden">
                                                            <div className="mr-8 flex items-center">
                                                              <div className="flex items-center gap-12 truncate max-w-full">
                                                                <a
                                                                  className="typo-module_t-body-md-strong__B-Sd1 typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9 link-module_link__Nwimt link-module_underline-mode-onlyWhenHover__alkql link-module_monochrome__yqKNC block truncate max-w-full"
                                                                  href="/validator/0x05ad3ded6fcc510324af8e2631717af6da5c8b5b"
                                                                >
                                                                  MysticNode
                                                                </a>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell"
                                                style={{
                                                  textAlign: "right",
                                                }}
                                              >
                                                <div className="inline-flex">
                                                  <div>
                                                    <div className="flex items-center">
                                                      <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 border-tc-border-text-subdued mr-4 flex items-end border-0 border-b border-dashed">
                                                        12.12
                                                        <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh ml-[2px]">
                                                          %
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell"
                                                style={{
                                                  textAlign: "right",
                                                }}
                                              >
                                                <div className="flex items-center gap-8 overflow-hidden justify-end">
                                                  <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                                                    10,451,148.87
                                                  </div>
                                                  <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh">
                                                    RON
                                                  </div>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell"
                                                style={{
                                                  textAlign: "right",
                                                }}
                                              >
                                                <div className="inline-flex">
                                                  <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 mr-[2px]">
                                                    99.98
                                                  </div>
                                                  <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh">
                                                    %
                                                  </div>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell"
                                                style={{
                                                  textAlign: "right",
                                                }}
                                              >
                                                <div className="inline-flex">
                                                  <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3">
                                                    <div className="badge-module_badge__kTvKz badge-module_success-solid__6ZYL7 badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                                      <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs badge-module_has-left-icon__x3ijB">
                                                        <div className="badge-module_side-dot__hOn9b badge-module_success__E5Zz4"></div>
                                                        Active
                                                      </span>
                                                    </div>
                                                  </div>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell"
                                                style={{
                                                  textAlign: "right",
                                                }}
                                              >
                                                <div>
                                                  <button className="button-module_button__Z331g button-module_intent-primary__SAO1x button-module_size-small__Nes6W button-module_button-root__0roWY">
                                                    Stake
                                                  </button>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell z-[1] !pl-0 md:!pl-16 ronin-table-cell-fix-left ronin-table-cell-fix-left-last"
                                                style={{
                                                  textAlign: "left",
                                                  position: "sticky",
                                                  left: 0,
                                                }}
                                              >
                                                <div className="gap-2 flex w-[148px] items-center md:w-[auto]">
                                                  <div className="flex w-full items-center justify-between overflow-hidden">
                                                    <div className="flex items-center">
                                                      <div className="mr-12">
                                                        <div className="avatar-module_size-s__pbWkl shrink-0">
                                                          <svg
                                                            viewBox="0 0 80 80"
                                                            fill="none"
                                                            role="img"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="24"
                                                            height="24"
                                                          >
                                                            <mask
                                                              id=":r6:"
                                                              maskUnits="userSpaceOnUse"
                                                              x="0"
                                                              y="0"
                                                              width="80"
                                                              height="80"
                                                            >
                                                              <rect
                                                                width="80"
                                                                height="80"
                                                                rx="160"
                                                                fill="#FFFFFF"
                                                              ></rect>
                                                            </mask>
                                                            <g mask="url(#:r6:)">
                                                              <rect
                                                                width="80"
                                                                height="80"
                                                                fill="#5CFFFF"
                                                              ></rect>
                                                              <path
                                                                filter="url(#prefix__filter0_f)"
                                                                d="M32.414 59.35L50.376 70.5H72.5v-71H33.728L26.5 13.381l19.057 27.08L32.414 59.35z"
                                                                fill="#E3E8F2"
                                                                transform="translate(-2 2) rotate(-322 40 40) scale(1.5)"
                                                              ></path>
                                                              <path
                                                                filter="url(#prefix__filter0_f)"
                                                                d="M22.216 24L0 46.75l14.108 38.129L78 86l-3.081-59.276-22.378 4.005 12.972 20.186-23.35 27.395L22.215 24z"
                                                                fill="#4BFFD4"
                                                                transform="translate(-3 -3) rotate(-123 40 40) scale(1.5)"
                                                                style={{
                                                                  mixBlendMode:
                                                                    "overlay",
                                                                }}
                                                              ></path>
                                                            </g>
                                                            <defs>
                                                              <filter
                                                                id="prefix__filter0_f"
                                                                filterUnits="userSpaceOnUse"
                                                                colorInterpolationFilters="sRGB"
                                                              >
                                                                <feFlood
                                                                  floodOpacity="0"
                                                                  result="BackgroundImageFix"
                                                                ></feFlood>
                                                                <feBlend
                                                                  in="SourceGraphic"
                                                                  in2="BackgroundImageFix"
                                                                  result="shape"
                                                                ></feBlend>
                                                                <feGaussianBlur
                                                                  stdDeviation="7"
                                                                  result="effect1_foregroundBlur"
                                                                ></feGaussianBlur>
                                                              </filter>
                                                            </defs>
                                                          </svg>
                                                        </div>
                                                      </div>
                                                      <div className="flex flex-col">
                                                        <div className="flex items-center">
                                                          <div className="overflow-hidden">
                                                            <div className="mr-8 flex items-center">
                                                              <div className="flex items-center gap-12 truncate max-w-full">
                                                                <a
                                                                  className="typo-module_t-body-md-strong__B-Sd1 typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9 link-module_link__Nwimt link-module_underline-mode-onlyWhenHover__alkql link-module_monochrome__yqKNC block truncate max-w-full"
                                                                  href="/validator/0xf41af21f0a800dc4d86efb14ad46cfb9884fdf38"
                                                                >
                                                                  Sky Mavis GV
                                                                </a>
                                                              </div>
                                                            </div>
                                                          </div>
                                                          <span className="mr-8">
                                                            <div className="flex">
                                                              <svg
                                                                className="text-tc-icon-success"
                                                                viewBox="0 0 20 20"
                                                                width="20"
                                                                height="20"
                                                              >
                                                                <path
                                                                  fill="currentColor"
                                                                  d="M10 2c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8Zm3.707 6.707-4 4a.997.997 0 0 1-1.414 0l-2-2a.999.999 0 1 1 1.414-1.414L9 10.586l3.293-3.293a.999.999 0 1 1 1.414 1.414Z"
                                                                ></path>
                                                              </svg>
                                                            </div>
                                                          </span>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell"
                                                style={{
                                                  textAlign: "right",
                                                }}
                                              >
                                                <div className="inline-flex">
                                                  <div>
                                                    <div className="flex items-center">
                                                      <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 border-tc-border-text-subdued mr-4 flex items-end border-0 border-b border-dashed">
                                                        11.87
                                                        <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh ml-[2px]">
                                                          %
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell"
                                                style={{
                                                  textAlign: "right",
                                                }}
                                              >
                                                <div className="flex items-center gap-8 overflow-hidden justify-end">
                                                  <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                                                    10,343,551.47
                                                  </div>
                                                  <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh">
                                                    RON
                                                  </div>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell"
                                                style={{
                                                  textAlign: "right",
                                                }}
                                              >
                                                <div className="inline-flex">
                                                  <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 mr-[2px]">
                                                    99.99
                                                  </div>
                                                  <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh">
                                                    %
                                                  </div>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell"
                                                style={{
                                                  textAlign: "right",
                                                }}
                                              >
                                                <div className="inline-flex">
                                                  <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3">
                                                    <div className="badge-module_badge__kTvKz badge-module_success-solid__6ZYL7 badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                                      <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs badge-module_has-left-icon__x3ijB">
                                                        <div className="badge-module_side-dot__hOn9b badge-module_success__E5Zz4"></div>
                                                        Active
                                                      </span>
                                                    </div>
                                                  </div>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell"
                                                style={{
                                                  textAlign: "right",
                                                }}
                                              >
                                                <div>
                                                  <button className="button-module_button__Z331g button-module_intent-primary__SAO1x button-module_size-small__Nes6W button-module_button-root__0roWY">
                                                    Stake
                                                  </button>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell z-[1] !pl-0 md:!pl-16 ronin-table-cell-fix-left ronin-table-cell-fix-left-last"
                                                style={{
                                                  textAlign: "left",
                                                  position: "sticky",
                                                  left: 0,
                                                }}
                                              >
                                                <div className="gap-2 flex w-[148px] items-center md:w-[auto]">
                                                  <div className="flex w-full items-center justify-between overflow-hidden">
                                                    <div className="flex items-center">
                                                      <div className="mr-12">
                                                        <div className="avatar-module_size-s__pbWkl shrink-0">
                                                          <svg
                                                            viewBox="0 0 80 80"
                                                            fill="none"
                                                            role="img"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="24"
                                                            height="24"
                                                          >
                                                            <mask
                                                              id=":r7:"
                                                              maskUnits="userSpaceOnUse"
                                                              x="0"
                                                              y="0"
                                                              width="80"
                                                              height="80"
                                                            >
                                                              <rect
                                                                width="80"
                                                                height="80"
                                                                rx="160"
                                                                fill="#FFFFFF"
                                                              ></rect>
                                                            </mask>
                                                            <g mask="url(#:r7:)">
                                                              <rect
                                                                width="80"
                                                                height="80"
                                                                fill="#0035FF"
                                                              ></rect>
                                                              <path
                                                                filter="url(#prefix__filter0_f)"
                                                                d="M32.414 59.35L50.376 70.5H72.5v-71H33.728L26.5 13.381l19.057 27.08L32.414 59.35z"
                                                                fill="#FFAEFC"
                                                                transform="translate(2 2) rotate(218 40 40) scale(1.5)"
                                                              ></path>
                                                              <path
                                                                filter="url(#prefix__filter0_f)"
                                                                d="M22.216 24L0 46.75l14.108 38.129L78 86l-3.081-59.276-22.378 4.005 12.972 20.186-23.35 27.395L22.215 24z"
                                                                fill="#5CFFFF"
                                                                transform="translate(-7 -7) rotate(-327 40 40) scale(1.5)"
                                                                style={{
                                                                  mixBlendMode:
                                                                    "overlay",
                                                                }}
                                                              ></path>
                                                            </g>
                                                            <defs>
                                                              <filter
                                                                id="prefix__filter0_f"
                                                                filterUnits="userSpaceOnUse"
                                                                colorInterpolationFilters="sRGB"
                                                              >
                                                                <feFlood
                                                                  floodOpacity="0"
                                                                  result="BackgroundImageFix"
                                                                ></feFlood>
                                                                <feBlend
                                                                  in="SourceGraphic"
                                                                  in2="BackgroundImageFix"
                                                                  result="shape"
                                                                ></feBlend>
                                                                <feGaussianBlur
                                                                  stdDeviation="7"
                                                                  result="effect1_foregroundBlur"
                                                                ></feGaussianBlur>
                                                              </filter>
                                                            </defs>
                                                          </svg>
                                                        </div>
                                                      </div>
                                                      <div className="flex flex-col">
                                                        <div className="flex items-center">
                                                          <div className="overflow-hidden">
                                                            <div className="mr-8 flex items-center">
                                                              <div className="flex items-center gap-12 truncate max-w-full">
                                                                <a
                                                                  className="typo-module_t-body-md-strong__B-Sd1 typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9 link-module_link__Nwimt link-module_underline-mode-onlyWhenHover__alkql link-module_monochrome__yqKNC block truncate max-w-full"
                                                                  href="/validator/0xfc3e31519b551bd594235dd0ef014375a87c4e21"
                                                                >
                                                                  Nansen
                                                                </a>
                                                              </div>
                                                            </div>
                                                          </div>
                                                          <span className="mr-8">
                                                            <div className="flex">
                                                              <svg
                                                                className="text-tc-icon-success"
                                                                viewBox="0 0 20 20"
                                                                width="20"
                                                                height="20"
                                                              >
                                                                <path
                                                                  fill="currentColor"
                                                                  d="M10 2c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8Zm3.707 6.707-4 4a.997.997 0 0 1-1.414 0l-2-2a.999.999 0 1 1 1.414-1.414L9 10.586l3.293-3.293a.999.999 0 1 1 1.414 1.414Z"
                                                                ></path>
                                                              </svg>
                                                            </div>
                                                          </span>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell"
                                                style={{
                                                  textAlign: "right",
                                                }}
                                              >
                                                <div className="inline-flex">
                                                  <div>
                                                    <div className="flex items-center">
                                                      <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 border-tc-border-text-subdued mr-4 flex items-end border-0 border-b border-dashed">
                                                        11.93
                                                        <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh ml-[2px]">
                                                          %
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell"
                                                style={{
                                                  textAlign: "right",
                                                }}
                                              >
                                                <div className="flex items-center gap-8 overflow-hidden justify-end">
                                                  <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                                                    10,288,980.73
                                                  </div>
                                                  <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh">
                                                    RON
                                                  </div>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell"
                                                style={{
                                                  textAlign: "right",
                                                }}
                                              >
                                                <div className="inline-flex">
                                                  <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 mr-[2px]">
                                                    99.97
                                                  </div>
                                                  <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh">
                                                    %
                                                  </div>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell"
                                                style={{
                                                  textAlign: "right",
                                                }}
                                              >
                                                <div className="inline-flex">
                                                  <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3">
                                                    <div className="badge-module_badge__kTvKz badge-module_success-solid__6ZYL7 badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                                      <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs badge-module_has-left-icon__x3ijB">
                                                        <div className="badge-module_side-dot__hOn9b badge-module_success__E5Zz4"></div>
                                                        Active
                                                      </span>
                                                    </div>
                                                  </div>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell"
                                                style={{
                                                  textAlign: "right",
                                                }}
                                              >
                                                <div>
                                                  <button className="button-module_button__Z331g button-module_intent-primary__SAO1x button-module_size-small__Nes6W button-module_button-root__0roWY">
                                                    Stake
                                                  </button>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell z-[1] !pl-0 md:!pl-16 ronin-table-cell-fix-left ronin-table-cell-fix-left-last"
                                                style={{
                                                  textAlign: "left",
                                                  position: "sticky",
                                                  left: 0,
                                                }}
                                              >
                                                <div className="gap-2 flex w-[148px] items-center md:w-[auto]">
                                                  <div className="flex w-full items-center justify-between overflow-hidden">
                                                    <div className="flex items-center">
                                                      <div className="mr-12">
                                                        <div className="avatar-module_size-s__pbWkl shrink-0">
                                                          <svg
                                                            viewBox="0 0 80 80"
                                                            fill="none"
                                                            role="img"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="24"
                                                            height="24"
                                                          >
                                                            <mask
                                                              id=":r8:"
                                                              maskUnits="userSpaceOnUse"
                                                              x="0"
                                                              y="0"
                                                              width="80"
                                                              height="80"
                                                            >
                                                              <rect
                                                                width="80"
                                                                height="80"
                                                                rx="160"
                                                                fill="#FFFFFF"
                                                              ></rect>
                                                            </mask>
                                                            <g mask="url(#:r8:)">
                                                              <rect
                                                                width="80"
                                                                height="80"
                                                                fill="#FFAEFC"
                                                              ></rect>
                                                              <path
                                                                filter="url(#prefix__filter0_f)"
                                                                d="M32.414 59.35L50.376 70.5H72.5v-71H33.728L26.5 13.381l19.057 27.08L32.414 59.35z"
                                                                fill="#5CFFFF"
                                                                transform="translate(2 2) rotate(10 40 40) scale(1.5)"
                                                              ></path>
                                                              <path
                                                                filter="url(#prefix__filter0_f)"
                                                                d="M22.216 24L0 46.75l14.108 38.129L78 86l-3.081-59.276-22.378 4.005 12.972 20.186-23.35 27.395L22.215 24z"
                                                                fill="#E3E8F2"
                                                                transform="translate(3 3) rotate(195 40 40) scale(1.5)"
                                                                style={{
                                                                  mixBlendMode:
                                                                    "overlay",
                                                                }}
                                                              ></path>
                                                            </g>
                                                            <defs>
                                                              <filter
                                                                id="prefix__filter0_f"
                                                                filterUnits="userSpaceOnUse"
                                                                colorInterpolationFilters="sRGB"
                                                              >
                                                                <feFlood
                                                                  floodOpacity="0"
                                                                  result="BackgroundImageFix"
                                                                ></feFlood>
                                                                <feBlend
                                                                  in="SourceGraphic"
                                                                  in2="BackgroundImageFix"
                                                                  result="shape"
                                                                ></feBlend>
                                                                <feGaussianBlur
                                                                  stdDeviation="7"
                                                                  result="effect1_foregroundBlur"
                                                                ></feGaussianBlur>
                                                              </filter>
                                                            </defs>
                                                          </svg>
                                                        </div>
                                                      </div>
                                                      <div className="flex flex-col">
                                                        <div className="flex items-center">
                                                          <div className="overflow-hidden">
                                                            <div className="mr-8 flex items-center">
                                                              <div className="flex items-center gap-12 truncate max-w-full">
                                                                <a
                                                                  className="typo-module_t-body-md-strong__B-Sd1 typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9 link-module_link__Nwimt link-module_underline-mode-onlyWhenHover__alkql link-module_monochrome__yqKNC block truncate max-w-full"
                                                                  href="/validator/0xedcafc4ad8097c2012980a2a7087d74b86bddaf9"
                                                                >
                                                                  BigYak Axie
                                                                  Club (BYAC)
                                                                </a>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell"
                                                style={{
                                                  textAlign: "right",
                                                }}
                                              >
                                                <div className="inline-flex">
                                                  <div>
                                                    <div className="flex items-center">
                                                      <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 border-tc-border-text-subdued mr-4 flex items-end border-0 border-b border-dashed">
                                                        12.13
                                                        <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh ml-[2px]">
                                                          %
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell"
                                                style={{
                                                  textAlign: "right",
                                                }}
                                              >
                                                <div className="flex items-center gap-8 overflow-hidden justify-end">
                                                  <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                                                    10,213,470.75
                                                  </div>
                                                  <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh">
                                                    RON
                                                  </div>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell"
                                                style={{
                                                  textAlign: "right",
                                                }}
                                              >
                                                <div className="inline-flex">
                                                  <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 mr-[2px]">
                                                    99.97
                                                  </div>
                                                  <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh">
                                                    %
                                                  </div>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell"
                                                style={{
                                                  textAlign: "right",
                                                }}
                                              >
                                                <div className="inline-flex">
                                                  <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3">
                                                    <div className="badge-module_badge__kTvKz badge-module_success-solid__6ZYL7 badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                                      <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs badge-module_has-left-icon__x3ijB">
                                                        <div className="badge-module_side-dot__hOn9b badge-module_success__E5Zz4"></div>
                                                        Active
                                                      </span>
                                                    </div>
                                                  </div>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell"
                                                style={{
                                                  textAlign: "right",
                                                }}
                                              >
                                                <div>
                                                  <button className="button-module_button__Z331g button-module_intent-primary__SAO1x button-module_size-small__Nes6W button-module_button-root__0roWY">
                                                    Stake
                                                  </button>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell z-[1] !pl-0 md:!pl-16 ronin-table-cell-fix-left ronin-table-cell-fix-left-last"
                                                style={{
                                                  textAlign: "left",
                                                  position: "sticky",
                                                  left: 0,
                                                }}
                                              >
                                                <div className="gap-2 flex w-[148px] items-center md:w-[auto]">
                                                  <div className="flex w-full items-center justify-between overflow-hidden">
                                                    <div className="flex items-center">
                                                      <div className="mr-12">
                                                        <div className="avatar-module_size-s__pbWkl shrink-0">
                                                          <svg
                                                            viewBox="0 0 80 80"
                                                            fill="none"
                                                            role="img"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="24"
                                                            height="24"
                                                          >
                                                            <mask
                                                              id=":r9:"
                                                              maskUnits="userSpaceOnUse"
                                                              x="0"
                                                              y="0"
                                                              width="80"
                                                              height="80"
                                                            >
                                                              <rect
                                                                width="80"
                                                                height="80"
                                                                rx="160"
                                                                fill="#FFFFFF"
                                                              ></rect>
                                                            </mask>
                                                            <g mask="url(#:r9:)">
                                                              <rect
                                                                width="80"
                                                                height="80"
                                                                fill="#4BFFD4"
                                                              ></rect>
                                                              <path
                                                                filter="url(#prefix__filter0_f)"
                                                                d="M32.414 59.35L50.376 70.5H72.5v-71H33.728L26.5 13.381l19.057 27.08L32.414 59.35z"
                                                                fill="#0035FF"
                                                                transform="translate(-2 2) rotate(-266 40 40) scale(1.5)"
                                                              ></path>
                                                              <path
                                                                filter="url(#prefix__filter0_f)"
                                                                d="M22.216 24L0 46.75l14.108 38.129L78 86l-3.081-59.276-22.378 4.005 12.972 20.186-23.35 27.395L22.215 24z"
                                                                fill="#FFAEFC"
                                                                transform="translate(3 -3) rotate(219 40 40) scale(1.5)"
                                                                style={{
                                                                  mixBlendMode:
                                                                    "overlay",
                                                                }}
                                                              ></path>
                                                            </g>
                                                            <defs>
                                                              <filter
                                                                id="prefix__filter0_f"
                                                                filterUnits="userSpaceOnUse"
                                                                colorInterpolationFilters="sRGB"
                                                              >
                                                                <feFlood
                                                                  floodOpacity="0"
                                                                  result="BackgroundImageFix"
                                                                ></feFlood>
                                                                <feBlend
                                                                  in="SourceGraphic"
                                                                  in2="BackgroundImageFix"
                                                                  result="shape"
                                                                ></feBlend>
                                                                <feGaussianBlur
                                                                  stdDeviation="7"
                                                                  result="effect1_foregroundBlur"
                                                                ></feGaussianBlur>
                                                              </filter>
                                                            </defs>
                                                          </svg>
                                                        </div>
                                                      </div>
                                                      <div className="flex flex-col">
                                                        <div className="flex items-center">
                                                          <div className="overflow-hidden">
                                                            <div className="mr-8 flex items-center">
                                                              <div className="flex items-center gap-12 truncate max-w-full">
                                                                <a
                                                                  className="typo-module_t-body-md-strong__B-Sd1 typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9 link-module_link__Nwimt link-module_underline-mode-onlyWhenHover__alkql link-module_monochrome__yqKNC block truncate max-w-full"
                                                                  href="/validator/0x6e46924371d0e910769aabe0d867590deac20684"
                                                                >
                                                                  StableNode
                                                                </a>
                                                              </div>
                                                            </div>
                                                          </div>
                                                          <span className="mr-8">
                                                            <div className="flex">
                                                              <svg
                                                                className="text-tc-icon-success"
                                                                viewBox="0 0 20 20"
                                                                width="20"
                                                                height="20"
                                                              >
                                                                <path
                                                                  fill="currentColor"
                                                                  d="M10 2c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8Zm3.707 6.707-4 4a.997.997 0 0 1-1.414 0l-2-2a.999.999 0 1 1 1.414-1.414L9 10.586l3.293-3.293a.999.999 0 1 1 1.414 1.414Z"
                                                                ></path>
                                                              </svg>
                                                            </div>
                                                          </span>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell"
                                                style={{
                                                  textAlign: "right",
                                                }}
                                              >
                                                <div className="inline-flex">
                                                  <div>
                                                    <div className="flex items-center">
                                                      <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 border-tc-border-text-subdued mr-4 flex items-end border-0 border-b border-dashed">
                                                        11.93
                                                        <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh ml-[2px]">
                                                          %
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell"
                                                style={{
                                                  textAlign: "right",
                                                }}
                                              >
                                                <div className="flex items-center gap-8 overflow-hidden justify-end">
                                                  <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                                                    9,948,280.42
                                                  </div>
                                                  <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh">
                                                    RON
                                                  </div>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell"
                                                style={{
                                                  textAlign: "right",
                                                }}
                                              >
                                                <div className="inline-flex">
                                                  <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 mr-[2px]">
                                                    99.97
                                                  </div>
                                                  <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh">
                                                    %
                                                  </div>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell"
                                                style={{
                                                  textAlign: "right",
                                                }}
                                              >
                                                <div className="inline-flex">
                                                  <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3">
                                                    <div className="badge-module_badge__kTvKz badge-module_success-solid__6ZYL7 badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                                      <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs badge-module_has-left-icon__x3ijB">
                                                        <div className="badge-module_side-dot__hOn9b badge-module_success__E5Zz4"></div>
                                                        Active
                                                      </span>
                                                    </div>
                                                  </div>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell"
                                                style={{
                                                  textAlign: "right",
                                                }}
                                              >
                                                <div>
                                                  <button className="button-module_button__Z331g button-module_intent-primary__SAO1x button-module_size-small__Nes6W button-module_button-root__0roWY">
                                                    Stake
                                                  </button>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell z-[1] !pl-0 md:!pl-16 ronin-table-cell-fix-left ronin-table-cell-fix-left-last"
                                                style={{
                                                  textAlign: "left",
                                                  position: "sticky",
                                                  left: 0,
                                                }}
                                              >
                                                <div className="gap-2 flex w-[148px] items-center md:w-[auto]">
                                                  <div className="flex w-full items-center justify-between overflow-hidden">
                                                    <div className="flex items-center">
                                                      <div className="mr-12">
                                                        <div className="avatar-module_size-s__pbWkl shrink-0">
                                                          <svg
                                                            viewBox="0 0 80 80"
                                                            fill="none"
                                                            role="img"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="24"
                                                            height="24"
                                                          >
                                                            <mask
                                                              id=":ra:"
                                                              maskUnits="userSpaceOnUse"
                                                              x="0"
                                                              y="0"
                                                              width="80"
                                                              height="80"
                                                            >
                                                              <rect
                                                                width="80"
                                                                height="80"
                                                                rx="160"
                                                                fill="#FFFFFF"
                                                              ></rect>
                                                            </mask>
                                                            <g mask="url(#:ra:)">
                                                              <rect
                                                                width="80"
                                                                height="80"
                                                                fill="#4BFFD4"
                                                              ></rect>
                                                              <path
                                                                filter="url(#prefix__filter0_f)"
                                                                d="M32.414 59.35L50.376 70.5H72.5v-71H33.728L26.5 13.381l19.057 27.08L32.414 59.35z"
                                                                fill="#0035FF"
                                                                transform="translate(-2 2) rotate(-66 40 40) scale(1.5)"
                                                              ></path>
                                                              <path
                                                                filter="url(#prefix__filter0_f)"
                                                                d="M22.216 24L0 46.75l14.108 38.129L78 86l-3.081-59.276-22.378 4.005 12.972 20.186-23.35 27.395L22.215 24z"
                                                                fill="#FFAEFC"
                                                                transform="translate(3 3) rotate(99 40 40) scale(1.5)"
                                                                style={{
                                                                  mixBlendMode:
                                                                    "overlay",
                                                                }}
                                                              ></path>
                                                            </g>
                                                            <defs>
                                                              <filter
                                                                id="prefix__filter0_f"
                                                                filterUnits="userSpaceOnUse"
                                                                colorInterpolationFilters="sRGB"
                                                              >
                                                                <feFlood
                                                                  floodOpacity="0"
                                                                  result="BackgroundImageFix"
                                                                ></feFlood>
                                                                <feBlend
                                                                  in="SourceGraphic"
                                                                  in2="BackgroundImageFix"
                                                                  result="shape"
                                                                ></feBlend>
                                                                <feGaussianBlur
                                                                  stdDeviation="7"
                                                                  result="effect1_foregroundBlur"
                                                                ></feGaussianBlur>
                                                              </filter>
                                                            </defs>
                                                          </svg>
                                                        </div>
                                                      </div>
                                                      <div className="flex flex-col">
                                                        <div className="flex items-center">
                                                          <div className="overflow-hidden">
                                                            <div className="mr-8 flex items-center">
                                                              <div className="flex items-center gap-12 truncate max-w-full">
                                                                <a
                                                                  className="typo-module_t-body-md-strong__B-Sd1 typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9 link-module_link__Nwimt link-module_underline-mode-onlyWhenHover__alkql link-module_monochrome__yqKNC block truncate max-w-full"
                                                                  href="/validator/0x61089875ff9e506ae78c7fe9f7c388416520e386"
                                                                >
                                                                  0xak.eth
                                                                </a>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell"
                                                style={{
                                                  textAlign: "right",
                                                }}
                                              >
                                                <div className="inline-flex">
                                                  <div>
                                                    <div className="flex items-center">
                                                      <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 border-tc-border-text-subdued mr-4 flex items-end border-0 border-b border-dashed">
                                                        12.45
                                                        <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh ml-[2px]">
                                                          %
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell"
                                                style={{
                                                  textAlign: "right",
                                                }}
                                              >
                                                <div className="flex items-center gap-8 overflow-hidden justify-end">
                                                  <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                                                    9,814,345.52
                                                  </div>
                                                  <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh">
                                                    RON
                                                  </div>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell"
                                                style={{
                                                  textAlign: "right",
                                                }}
                                              >
                                                <div className="inline-flex">
                                                  <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 mr-[2px]">
                                                    99.99
                                                  </div>
                                                  <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh">
                                                    %
                                                  </div>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell"
                                                style={{
                                                  textAlign: "right",
                                                }}
                                              >
                                                <div className="inline-flex">
                                                  <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3">
                                                    <div className="badge-module_badge__kTvKz badge-module_success-solid__6ZYL7 badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                                      <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs badge-module_has-left-icon__x3ijB">
                                                        <div className="badge-module_side-dot__hOn9b badge-module_success__E5Zz4"></div>
                                                        Active
                                                      </span>
                                                    </div>
                                                  </div>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell"
                                                style={{
                                                  textAlign: "right",
                                                }}
                                              >
                                                <div>
                                                  <button className="button-module_button__Z331g button-module_intent-primary__SAO1x button-module_size-small__Nes6W button-module_button-root__0roWY">
                                                    Stake
                                                  </button>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell z-[1] !pl-0 md:!pl-16 ronin-table-cell-fix-left ronin-table-cell-fix-left-last"
                                                style={{
                                                  textAlign: "left",
                                                  position: "sticky",
                                                  left: 0,
                                                }}
                                              >
                                                <div className="gap-2 flex w-[148px] items-center md:w-[auto]">
                                                  <div className="flex w-full items-center justify-between overflow-hidden">
                                                    <div className="flex items-center">
                                                      <div className="mr-12">
                                                        <div className="avatar-module_size-s__pbWkl shrink-0">
                                                          <svg
                                                            viewBox="0 0 80 80"
                                                            fill="none"
                                                            role="img"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="24"
                                                            height="24"
                                                          >
                                                            <mask
                                                              id=":rb:"
                                                              maskUnits="userSpaceOnUse"
                                                              x="0"
                                                              y="0"
                                                              width="80"
                                                              height="80"
                                                            >
                                                              <rect
                                                                width="80"
                                                                height="80"
                                                                rx="160"
                                                                fill="#FFFFFF"
                                                              ></rect>
                                                            </mask>
                                                            <g mask="url(#:rb:)">
                                                              <rect
                                                                width="80"
                                                                height="80"
                                                                fill="#5CFFFF"
                                                              ></rect>
                                                              <path
                                                                filter="url(#prefix__filter0_f)"
                                                                d="M32.414 59.35L50.376 70.5H72.5v-71H33.728L26.5 13.381l19.057 27.08L32.414 59.35z"
                                                                fill="#E3E8F2"
                                                                transform="translate(-6 -6) rotate(-222 40 40) scale(1.3)"
                                                              ></path>
                                                              <path
                                                                filter="url(#prefix__filter0_f)"
                                                                d="M22.216 24L0 46.75l14.108 38.129L78 86l-3.081-59.276-22.378 4.005 12.972 20.186-23.35 27.395L22.215 24z"
                                                                fill="#4BFFD4"
                                                                transform="translate(5 -5) rotate(333 40 40) scale(1.3)"
                                                                style={{
                                                                  mixBlendMode:
                                                                    "overlay",
                                                                }}
                                                              ></path>
                                                            </g>
                                                            <defs>
                                                              <filter
                                                                id="prefix__filter0_f"
                                                                filterUnits="userSpaceOnUse"
                                                                colorInterpolationFilters="sRGB"
                                                              >
                                                                <feFlood
                                                                  floodOpacity="0"
                                                                  result="BackgroundImageFix"
                                                                ></feFlood>
                                                                <feBlend
                                                                  in="SourceGraphic"
                                                                  in2="BackgroundImageFix"
                                                                  result="shape"
                                                                ></feBlend>
                                                                <feGaussianBlur
                                                                  stdDeviation="7"
                                                                  result="effect1_foregroundBlur"
                                                                ></feGaussianBlur>
                                                              </filter>
                                                            </defs>
                                                          </svg>
                                                        </div>
                                                      </div>
                                                      <div className="flex flex-col">
                                                        <div className="flex items-center">
                                                          <div className="overflow-hidden">
                                                            <div className="mr-8 flex items-center">
                                                              <div className="flex items-center gap-12 truncate max-w-full">
                                                                <a
                                                                  className="typo-module_t-body-md-strong__B-Sd1 typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9 link-module_link__Nwimt link-module_underline-mode-onlyWhenHover__alkql link-module_monochrome__yqKNC block truncate max-w-full"
                                                                  href="/validator/0x16c3557646628bbe29ffcf021c17c7f375b98e81"
                                                                >
                                                                  Ronin Realms
                                                                </a>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell"
                                                style={{
                                                  textAlign: "right",
                                                }}
                                              >
                                                <div className="inline-flex">
                                                  <div>
                                                    <div className="flex items-center">
                                                      <svg
                                                        className="mr-8 flex text-tc-icon-warning"
                                                        viewBox="0 0 20 20"
                                                        width="20"
                                                        height="20"
                                                      >
                                                        <path
                                                          fill="currentColor"
                                                          fillRule="evenodd"
                                                          d="M10 18c4.416 0 8-3.584 8-8s-3.584-8-8-8-8 3.584-8 8 3.584 8 8 8Zm1-12a1 1 0 1 0-2 0v4.622a1 1 0 0 0 1 1h4a1 1 0 1 0 0-2h-3V6Z"
                                                          clipRule="evenodd"
                                                        ></path>
                                                      </svg>
                                                      <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_warning__R9Vjs border-tc-warning mr-4 flex items-end border-0 border-b border-dashed">
                                                        12.89
                                                        <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_warning__R9Vjs typo-module_dim__qoQFh ml-[2px]">
                                                          %
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell"
                                                style={{
                                                  textAlign: "right",
                                                }}
                                              >
                                                <div className="flex items-center gap-8 overflow-hidden justify-end">
                                                  <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                                                    9,444,224.69
                                                  </div>
                                                  <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh">
                                                    RON
                                                  </div>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell"
                                                style={{
                                                  textAlign: "right",
                                                }}
                                              >
                                                <div className="inline-flex">
                                                  <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 mr-[2px]">
                                                    99.98
                                                  </div>
                                                  <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh">
                                                    %
                                                  </div>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell"
                                                style={{
                                                  textAlign: "right",
                                                }}
                                              >
                                                <div className="inline-flex">
                                                  <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3">
                                                    <div className="badge-module_badge__kTvKz badge-module_success-solid__6ZYL7 badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                                      <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs badge-module_has-left-icon__x3ijB">
                                                        <div className="badge-module_side-dot__hOn9b badge-module_success__E5Zz4"></div>
                                                        Active
                                                      </span>
                                                    </div>
                                                  </div>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell"
                                                style={{
                                                  textAlign: "right",
                                                }}
                                              >
                                                <div>
                                                  <button className="button-module_button__Z331g button-module_intent-primary__SAO1x button-module_size-small__Nes6W button-module_button-root__0roWY">
                                                    Stake
                                                  </button>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell z-[1] !pl-0 md:!pl-16 ronin-table-cell-fix-left ronin-table-cell-fix-left-last"
                                                style={{
                                                  textAlign: "left",
                                                  position: "sticky",
                                                  left: 0,
                                                }}
                                              >
                                                <div className="gap-2 flex w-[148px] items-center md:w-[auto]">
                                                  <div className="flex w-full items-center justify-between overflow-hidden">
                                                    <div className="flex items-center">
                                                      <div className="mr-12">
                                                        <div className="avatar-module_size-s__pbWkl shrink-0">
                                                          <svg
                                                            viewBox="0 0 80 80"
                                                            fill="none"
                                                            role="img"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="24"
                                                            height="24"
                                                          >
                                                            <mask
                                                              id=":rc:"
                                                              maskUnits="userSpaceOnUse"
                                                              x="0"
                                                              y="0"
                                                              width="80"
                                                              height="80"
                                                            >
                                                              <rect
                                                                width="80"
                                                                height="80"
                                                                rx="160"
                                                                fill="#FFFFFF"
                                                              ></rect>
                                                            </mask>
                                                            <g mask="url(#:rc:)">
                                                              <rect
                                                                width="80"
                                                                height="80"
                                                                fill="#0035FF"
                                                              ></rect>
                                                              <path
                                                                filter="url(#prefix__filter0_f)"
                                                                d="M32.414 59.35L50.376 70.5H72.5v-71H33.728L26.5 13.381l19.057 27.08L32.414 59.35z"
                                                                fill="#FFAEFC"
                                                                transform="translate(6 6) rotate(238 40 40) scale(1.3)"
                                                              ></path>
                                                              <path
                                                                filter="url(#prefix__filter0_f)"
                                                                d="M22.216 24L0 46.75l14.108 38.129L78 86l-3.081-59.276-22.378 4.005 12.972 20.186-23.35 27.395L22.215 24z"
                                                                fill="#5CFFFF"
                                                                transform="translate(5 5) rotate(357 40 40) scale(1.3)"
                                                                style={{
                                                                  mixBlendMode:
                                                                    "overlay",
                                                                }}
                                                              ></path>
                                                            </g>
                                                            <defs>
                                                              <filter
                                                                id="prefix__filter0_f"
                                                                filterUnits="userSpaceOnUse"
                                                                colorInterpolationFilters="sRGB"
                                                              >
                                                                <feFlood
                                                                  floodOpacity="0"
                                                                  result="BackgroundImageFix"
                                                                ></feFlood>
                                                                <feBlend
                                                                  in="SourceGraphic"
                                                                  in2="BackgroundImageFix"
                                                                  result="shape"
                                                                ></feBlend>
                                                                <feGaussianBlur
                                                                  stdDeviation="7"
                                                                  result="effect1_foregroundBlur"
                                                                ></feGaussianBlur>
                                                              </filter>
                                                            </defs>
                                                          </svg>
                                                        </div>
                                                      </div>
                                                      <div className="flex flex-col">
                                                        <div className="flex items-center">
                                                          <div className="overflow-hidden">
                                                            <div className="mr-8 flex items-center">
                                                              <div className="flex items-center gap-12 truncate max-w-full">
                                                                <a
                                                                  className="typo-module_t-body-md-strong__B-Sd1 typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9 link-module_link__Nwimt link-module_underline-mode-onlyWhenHover__alkql link-module_monochrome__yqKNC block truncate max-w-full"
                                                                  href="/validator/0x4125217ce8868553e1f61bb030426efd330c2d68"
                                                                >
                                                                  CyberKongz
                                                                </a>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell"
                                                style={{
                                                  textAlign: "right",
                                                }}
                                              >
                                                <div className="inline-flex">
                                                  <div>
                                                    <div className="flex items-center">
                                                      <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 border-tc-border-text-subdued mr-4 flex items-end border-0 border-b border-dashed">
                                                        12.21
                                                        <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh ml-[2px]">
                                                          %
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell"
                                                style={{
                                                  textAlign: "right",
                                                }}
                                              >
                                                <div className="flex items-center gap-8 overflow-hidden justify-end">
                                                  <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                                                    9,403,153.49
                                                  </div>
                                                  <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh">
                                                    RON
                                                  </div>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell"
                                                style={{
                                                  textAlign: "right",
                                                }}
                                              >
                                                <div className="inline-flex">
                                                  <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 mr-[2px]">
                                                    99.94
                                                  </div>
                                                  <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh">
                                                    %
                                                  </div>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell"
                                                style={{
                                                  textAlign: "right",
                                                }}
                                              >
                                                <div className="inline-flex">
                                                  <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3">
                                                    <div className="badge-module_badge__kTvKz badge-module_success-solid__6ZYL7 badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                                      <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs badge-module_has-left-icon__x3ijB">
                                                        <div className="badge-module_side-dot__hOn9b badge-module_success__E5Zz4"></div>
                                                        Active
                                                      </span>
                                                    </div>
                                                  </div>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell"
                                                style={{
                                                  textAlign: "right",
                                                }}
                                              >
                                                <div>
                                                  <button className="button-module_button__Z331g button-module_intent-primary__SAO1x button-module_size-small__Nes6W button-module_button-root__0roWY">
                                                    Stake
                                                  </button>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell z-[1] !pl-0 md:!pl-16 ronin-table-cell-fix-left ronin-table-cell-fix-left-last"
                                                style={{
                                                  textAlign: "left",
                                                  position: "sticky",
                                                  left: 0,
                                                }}
                                              >
                                                <div className="gap-2 flex w-[148px] items-center md:w-[auto]">
                                                  <div className="flex w-full items-center justify-between overflow-hidden">
                                                    <div className="flex items-center">
                                                      <div className="mr-12">
                                                        <div className="avatar-module_size-s__pbWkl shrink-0">
                                                          <svg
                                                            viewBox="0 0 80 80"
                                                            fill="none"
                                                            role="img"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="24"
                                                            height="24"
                                                          >
                                                            <mask
                                                              id=":rd:"
                                                              maskUnits="userSpaceOnUse"
                                                              x="0"
                                                              y="0"
                                                              width="80"
                                                              height="80"
                                                            >
                                                              <rect
                                                                width="80"
                                                                height="80"
                                                                rx="160"
                                                                fill="#FFFFFF"
                                                              ></rect>
                                                            </mask>
                                                            <g mask="url(#:rd:)">
                                                              <rect
                                                                width="80"
                                                                height="80"
                                                                fill="#FFC34D"
                                                              ></rect>
                                                              <path
                                                                filter="url(#prefix__filter0_f)"
                                                                d="M32.414 59.35L50.376 70.5H72.5v-71H33.728L26.5 13.381l19.057 27.08L32.414 59.35z"
                                                                fill="#8833FF"
                                                                transform="translate(0 0) rotate(-24 40 40) scale(1.2)"
                                                              ></path>
                                                              <path
                                                                filter="url(#prefix__filter0_f)"
                                                                d="M22.216 24L0 46.75l14.108 38.129L78 86l-3.081-59.276-22.378 4.005 12.972 20.186-23.35 27.395L22.215 24z"
                                                                fill="#2B4DFF"
                                                                transform="translate(0 0) rotate(216 40 40) scale(1.2)"
                                                                style={{
                                                                  mixBlendMode:
                                                                    "overlay",
                                                                }}
                                                              ></path>
                                                            </g>
                                                            <defs>
                                                              <filter
                                                                id="prefix__filter0_f"
                                                                filterUnits="userSpaceOnUse"
                                                                colorInterpolationFilters="sRGB"
                                                              >
                                                                <feFlood
                                                                  floodOpacity="0"
                                                                  result="BackgroundImageFix"
                                                                ></feFlood>
                                                                <feBlend
                                                                  in="SourceGraphic"
                                                                  in2="BackgroundImageFix"
                                                                  result="shape"
                                                                ></feBlend>
                                                                <feGaussianBlur
                                                                  stdDeviation="7"
                                                                  result="effect1_foregroundBlur"
                                                                ></feGaussianBlur>
                                                              </filter>
                                                            </defs>
                                                          </svg>
                                                        </div>
                                                      </div>
                                                      <div className="flex flex-col">
                                                        <div className="flex items-center">
                                                          <div className="overflow-hidden">
                                                            <div className="mr-8 flex items-center">
                                                              <div className="flex items-center gap-12 truncate max-w-full">
                                                                <a
                                                                  className="typo-module_t-body-md-strong__B-Sd1 typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9 link-module_link__Nwimt link-module_underline-mode-onlyWhenHover__alkql link-module_monochrome__yqKNC block truncate max-w-full"
                                                                  href="/validator/0x2bddcaae1c6ccd53e436179b3fc07307ee6f3ef8"
                                                                >
                                                                  Owl.eth
                                                                </a>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell"
                                                style={{
                                                  textAlign: "right",
                                                }}
                                              >
                                                <div className="inline-flex">
                                                  <div>
                                                    <div className="flex items-center">
                                                      <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 border-tc-border-text-subdued mr-4 flex items-end border-0 border-b border-dashed">
                                                        12.22
                                                        <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh ml-[2px]">
                                                          %
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell"
                                                style={{
                                                  textAlign: "right",
                                                }}
                                              >
                                                <div className="flex items-center gap-8 overflow-hidden justify-end">
                                                  <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                                                    9,370,553.05
                                                  </div>
                                                  <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh">
                                                    RON
                                                  </div>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell"
                                                style={{
                                                  textAlign: "right",
                                                }}
                                              >
                                                <div className="inline-flex">
                                                  <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 mr-[2px]">
                                                    99.81
                                                  </div>
                                                  <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh">
                                                    %
                                                  </div>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell"
                                                style={{
                                                  textAlign: "right",
                                                }}
                                              >
                                                <div className="inline-flex">
                                                  <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3">
                                                    <div className="badge-module_badge__kTvKz badge-module_success-solid__6ZYL7 badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                                      <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs badge-module_has-left-icon__x3ijB">
                                                        <div className="badge-module_side-dot__hOn9b badge-module_success__E5Zz4"></div>
                                                        Active
                                                      </span>
                                                    </div>
                                                  </div>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell"
                                                style={{
                                                  textAlign: "right",
                                                }}
                                              >
                                                <div>
                                                  <button className="button-module_button__Z331g button-module_intent-primary__SAO1x button-module_size-small__Nes6W button-module_button-root__0roWY">
                                                    Stake
                                                  </button>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell z-[1] !pl-0 md:!pl-16 ronin-table-cell-fix-left ronin-table-cell-fix-left-last"
                                                style={{
                                                  textAlign: "left",
                                                  position: "sticky",
                                                  left: 0,
                                                }}
                                              >
                                                <div className="gap-2 flex w-[148px] items-center md:w-[auto]">
                                                  <div className="flex w-full items-center justify-between overflow-hidden">
                                                    <div className="flex items-center">
                                                      <div className="mr-12">
                                                        <div className="avatar-module_size-s__pbWkl shrink-0">
                                                          <svg
                                                            viewBox="0 0 80 80"
                                                            fill="none"
                                                            role="img"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="24"
                                                            height="24"
                                                          >
                                                            <mask
                                                              id=":re:"
                                                              maskUnits="userSpaceOnUse"
                                                              x="0"
                                                              y="0"
                                                              width="80"
                                                              height="80"
                                                            >
                                                              <rect
                                                                width="80"
                                                                height="80"
                                                                rx="160"
                                                                fill="#FFFFFF"
                                                              ></rect>
                                                            </mask>
                                                            <g mask="url(#:re:)">
                                                              <rect
                                                                width="80"
                                                                height="80"
                                                                fill="#00D4FF"
                                                              ></rect>
                                                              <path
                                                                filter="url(#prefix__filter0_f)"
                                                                d="M32.414 59.35L50.376 70.5H72.5v-71H33.728L26.5 13.381l19.057 27.08L32.414 59.35z"
                                                                fill="#FFC34D"
                                                                transform="translate(4 -4) rotate(292 40 40) scale(1.4)"
                                                              ></path>
                                                              <path
                                                                filter="url(#prefix__filter0_f)"
                                                                d="M22.216 24L0 46.75l14.108 38.129L78 86l-3.081-59.276-22.378 4.005 12.972 20.186-23.35 27.395L22.215 24z"
                                                                fill="#8833FF"
                                                                transform="translate(6 -6) rotate(78 40 40) scale(1.4)"
                                                                style={{
                                                                  mixBlendMode:
                                                                    "overlay",
                                                                }}
                                                              ></path>
                                                            </g>
                                                            <defs>
                                                              <filter
                                                                id="prefix__filter0_f"
                                                                filterUnits="userSpaceOnUse"
                                                                colorInterpolationFilters="sRGB"
                                                              >
                                                                <feFlood
                                                                  floodOpacity="0"
                                                                  result="BackgroundImageFix"
                                                                ></feFlood>
                                                                <feBlend
                                                                  in="SourceGraphic"
                                                                  in2="BackgroundImageFix"
                                                                  result="shape"
                                                                ></feBlend>
                                                                <feGaussianBlur
                                                                  stdDeviation="7"
                                                                  result="effect1_foregroundBlur"
                                                                ></feGaussianBlur>
                                                              </filter>
                                                            </defs>
                                                          </svg>
                                                        </div>
                                                      </div>
                                                      <div className="flex flex-col">
                                                        <div className="flex items-center">
                                                          <div className="overflow-hidden">
                                                            <div className="mr-8 flex items-center">
                                                              <div className="flex items-center gap-12 truncate max-w-full">
                                                                <a
                                                                  className="typo-module_t-body-md-strong__B-Sd1 typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9 link-module_link__Nwimt link-module_underline-mode-onlyWhenHover__alkql link-module_monochrome__yqKNC block truncate max-w-full"
                                                                  href="/validator/0xca54a1700e0403dcb531f8db4ae3847758b90b01"
                                                                >
                                                                  aur x artic x
                                                                  cloudwhite
                                                                </a>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell"
                                                style={{
                                                  textAlign: "right",
                                                }}
                                              >
                                                <div className="inline-flex">
                                                  <div>
                                                    <div className="flex items-center">
                                                      <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 border-tc-border-text-subdued mr-4 flex items-end border-0 border-b border-dashed">
                                                        12.22
                                                        <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh ml-[2px]">
                                                          %
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell"
                                                style={{
                                                  textAlign: "right",
                                                }}
                                              >
                                                <div className="flex items-center gap-8 overflow-hidden justify-end">
                                                  <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                                                    9,306,460.63
                                                  </div>
                                                  <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh">
                                                    RON
                                                  </div>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell"
                                                style={{
                                                  textAlign: "right",
                                                }}
                                              >
                                                <div className="inline-flex">
                                                  <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 mr-[2px]">
                                                    99.99
                                                  </div>
                                                  <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh">
                                                    %
                                                  </div>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell"
                                                style={{
                                                  textAlign: "right",
                                                }}
                                              >
                                                <div className="inline-flex">
                                                  <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3">
                                                    <div className="badge-module_badge__kTvKz badge-module_success-solid__6ZYL7 badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                                      <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs badge-module_has-left-icon__x3ijB">
                                                        <div className="badge-module_side-dot__hOn9b badge-module_success__E5Zz4"></div>
                                                        Active
                                                      </span>
                                                    </div>
                                                  </div>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell"
                                                style={{
                                                  textAlign: "right",
                                                }}
                                              >
                                                <div>
                                                  <button className="button-module_button__Z331g button-module_intent-primary__SAO1x button-module_size-small__Nes6W button-module_button-root__0roWY">
                                                    Stake
                                                  </button>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell z-[1] !pl-0 md:!pl-16 ronin-table-cell-fix-left ronin-table-cell-fix-left-last"
                                                style={{
                                                  textAlign: "left",
                                                  position: "sticky",
                                                  left: 0,
                                                }}
                                              >
                                                <div className="gap-2 flex w-[148px] items-center md:w-[auto]">
                                                  <div className="flex w-full items-center justify-between overflow-hidden">
                                                    <div className="flex items-center">
                                                      <div className="mr-12">
                                                        <div className="avatar-module_size-s__pbWkl shrink-0">
                                                          <svg
                                                            viewBox="0 0 80 80"
                                                            fill="none"
                                                            role="img"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="24"
                                                            height="24"
                                                          >
                                                            <mask
                                                              id=":rf:"
                                                              maskUnits="userSpaceOnUse"
                                                              x="0"
                                                              y="0"
                                                              width="80"
                                                              height="80"
                                                            >
                                                              <rect
                                                                width="80"
                                                                height="80"
                                                                rx="160"
                                                                fill="#FFFFFF"
                                                              ></rect>
                                                            </mask>
                                                            <g mask="url(#:rf:)">
                                                              <rect
                                                                width="80"
                                                                height="80"
                                                                fill="#00D4FF"
                                                              ></rect>
                                                              <path
                                                                filter="url(#prefix__filter0_f)"
                                                                d="M32.414 59.35L50.376 70.5H72.5v-71H33.728L26.5 13.381l19.057 27.08L32.414 59.35z"
                                                                fill="#FFC34D"
                                                                transform="translate(4 -4) rotate(252 40 40) scale(1.4)"
                                                              ></path>
                                                              <path
                                                                filter="url(#prefix__filter0_f)"
                                                                d="M22.216 24L0 46.75l14.108 38.129L78 86l-3.081-59.276-22.378 4.005 12.972 20.186-23.35 27.395L22.215 24z"
                                                                fill="#8833FF"
                                                                transform="translate(6 6) rotate(198 40 40) scale(1.4)"
                                                                style={{
                                                                  mixBlendMode:
                                                                    "overlay",
                                                                }}
                                                              ></path>
                                                            </g>
                                                            <defs>
                                                              <filter
                                                                id="prefix__filter0_f"
                                                                filterUnits="userSpaceOnUse"
                                                                colorInterpolationFilters="sRGB"
                                                              >
                                                                <feFlood
                                                                  floodOpacity="0"
                                                                  result="BackgroundImageFix"
                                                                ></feFlood>
                                                                <feBlend
                                                                  in="SourceGraphic"
                                                                  in2="BackgroundImageFix"
                                                                  result="shape"
                                                                ></feBlend>
                                                                <feGaussianBlur
                                                                  stdDeviation="7"
                                                                  result="effect1_foregroundBlur"
                                                                ></feGaussianBlur>
                                                              </filter>
                                                            </defs>
                                                          </svg>
                                                        </div>
                                                      </div>
                                                      <div className="flex flex-col">
                                                        <div className="flex items-center">
                                                          <div className="overflow-hidden">
                                                            <div className="mr-8 flex items-center">
                                                              <div className="flex items-center gap-12 truncate max-w-full">
                                                                <a
                                                                  className="typo-module_t-body-md-strong__B-Sd1 typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9 link-module_link__Nwimt link-module_underline-mode-onlyWhenHover__alkql link-module_monochrome__yqKNC block truncate max-w-full"
                                                                  href="/validator/0x749f36cc1daeec1bced9f1f182c92851727d1e73"
                                                                >
                                                                  RonerDAO
                                                                </a>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell"
                                                style={{
                                                  textAlign: "right",
                                                }}
                                              >
                                                <div className="inline-flex">
                                                  <div>
                                                    <div className="flex items-center">
                                                      <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 border-tc-border-text-subdued mr-4 flex items-end border-0 border-b border-dashed">
                                                        12.25
                                                        <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh ml-[2px]">
                                                          %
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell"
                                                style={{
                                                  textAlign: "right",
                                                }}
                                              >
                                                <div className="flex items-center gap-8 overflow-hidden justify-end">
                                                  <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                                                    8,859,328.27
                                                  </div>
                                                  <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh">
                                                    RON
                                                  </div>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell"
                                                style={{
                                                  textAlign: "right",
                                                }}
                                              >
                                                <div className="inline-flex">
                                                  <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 mr-[2px]">
                                                    99.99
                                                  </div>
                                                  <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh">
                                                    %
                                                  </div>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell"
                                                style={{
                                                  textAlign: "right",
                                                }}
                                              >
                                                <div className="inline-flex">
                                                  <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3">
                                                    <div className="badge-module_badge__kTvKz badge-module_success-solid__6ZYL7 badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                                      <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs badge-module_has-left-icon__x3ijB">
                                                        <div className="badge-module_side-dot__hOn9b badge-module_success__E5Zz4"></div>
                                                        Active
                                                      </span>
                                                    </div>
                                                  </div>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell"
                                                style={{
                                                  textAlign: "right",
                                                }}
                                              >
                                                <div>
                                                  <button className="button-module_button__Z331g button-module_intent-primary__SAO1x button-module_size-small__Nes6W button-module_button-root__0roWY">
                                                    Stake
                                                  </button>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell z-[1] !pl-0 md:!pl-16 ronin-table-cell-fix-left ronin-table-cell-fix-left-last"
                                                style={{
                                                  textAlign: "left",
                                                  position: "sticky",
                                                  left: 0,
                                                }}
                                              >
                                                <div className="gap-2 flex w-[148px] items-center md:w-[auto]">
                                                  <div className="flex w-full items-center justify-between overflow-hidden">
                                                    <div className="flex items-center">
                                                      <div className="mr-12">
                                                        <div className="avatar-module_size-s__pbWkl shrink-0">
                                                          <svg
                                                            viewBox="0 0 80 80"
                                                            fill="none"
                                                            role="img"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="24"
                                                            height="24"
                                                          >
                                                            <mask
                                                              id=":rg:"
                                                              maskUnits="userSpaceOnUse"
                                                              x="0"
                                                              y="0"
                                                              width="80"
                                                              height="80"
                                                            >
                                                              <rect
                                                                width="80"
                                                                height="80"
                                                                rx="160"
                                                                fill="#FFFFFF"
                                                              ></rect>
                                                            </mask>
                                                            <g mask="url(#:rg:)">
                                                              <rect
                                                                width="80"
                                                                height="80"
                                                                fill="#00D4FF"
                                                              ></rect>
                                                              <path
                                                                filter="url(#prefix__filter0_f)"
                                                                d="M32.414 59.35L50.376 70.5H72.5v-71H33.728L26.5 13.381l19.057 27.08L32.414 59.35z"
                                                                fill="#FFC34D"
                                                                transform="translate(4 -4) rotate(292 40 40) scale(1.4)"
                                                              ></path>
                                                              <path
                                                                filter="url(#prefix__filter0_f)"
                                                                d="M22.216 24L0 46.75l14.108 38.129L78 86l-3.081-59.276-22.378 4.005 12.972 20.186-23.35 27.395L22.215 24z"
                                                                fill="#8833FF"
                                                                transform="translate(2 2) rotate(258 40 40) scale(1.4)"
                                                                style={{
                                                                  mixBlendMode:
                                                                    "overlay",
                                                                }}
                                                              ></path>
                                                            </g>
                                                            <defs>
                                                              <filter
                                                                id="prefix__filter0_f"
                                                                filterUnits="userSpaceOnUse"
                                                                colorInterpolationFilters="sRGB"
                                                              >
                                                                <feFlood
                                                                  floodOpacity="0"
                                                                  result="BackgroundImageFix"
                                                                ></feFlood>
                                                                <feBlend
                                                                  in="SourceGraphic"
                                                                  in2="BackgroundImageFix"
                                                                  result="shape"
                                                                ></feBlend>
                                                                <feGaussianBlur
                                                                  stdDeviation="7"
                                                                  result="effect1_foregroundBlur"
                                                                ></feGaussianBlur>
                                                              </filter>
                                                            </defs>
                                                          </svg>
                                                        </div>
                                                      </div>
                                                      <div className="flex flex-col">
                                                        <div className="flex items-center">
                                                          <div className="overflow-hidden">
                                                            <div className="mr-8 flex items-center">
                                                              <div className="flex items-center gap-12 truncate max-w-full">
                                                                <a
                                                                  className="typo-module_t-body-md-strong__B-Sd1 typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9 link-module_link__Nwimt link-module_underline-mode-onlyWhenHover__alkql link-module_monochrome__yqKNC block truncate max-w-full"
                                                                  href="/validator/0xbeef86b900b6b791d1cc7746ce030aa8d4e4cafe"
                                                                >
                                                                  BlockAhead.dev
                                                                </a>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell"
                                                style={{
                                                  textAlign: "right",
                                                }}
                                              >
                                                <div className="inline-flex">
                                                  <div>
                                                    <div className="flex items-center">
                                                      <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 border-tc-border-text-subdued mr-4 flex items-end border-0 border-b border-dashed">
                                                        12.70
                                                        <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh ml-[2px]">
                                                          %
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell"
                                                style={{
                                                  textAlign: "right",
                                                }}
                                              >
                                                <div className="flex items-center gap-8 overflow-hidden justify-end">
                                                  <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                                                    8,326,234.33
                                                  </div>
                                                  <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh">
                                                    RON
                                                  </div>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell"
                                                style={{
                                                  textAlign: "right",
                                                }}
                                              >
                                                <div className="inline-flex">
                                                  <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 mr-[2px]">
                                                    98.96
                                                  </div>
                                                  <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh">
                                                    %
                                                  </div>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell"
                                                style={{
                                                  textAlign: "right",
                                                }}
                                              >
                                                <div className="inline-flex">
                                                  <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3">
                                                    <div className="badge-module_badge__kTvKz badge-module_success-solid__6ZYL7 badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                                      <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs badge-module_has-left-icon__x3ijB">
                                                        <div className="badge-module_side-dot__hOn9b badge-module_success__E5Zz4"></div>
                                                        Active
                                                      </span>
                                                    </div>
                                                  </div>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell"
                                                style={{
                                                  textAlign: "right",
                                                }}
                                              >
                                                <div>
                                                  <button className="button-module_button__Z331g button-module_intent-primary__SAO1x button-module_size-small__Nes6W button-module_button-root__0roWY">
                                                    Stake
                                                  </button>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell z-[1] !pl-0 md:!pl-16 ronin-table-cell-fix-left ronin-table-cell-fix-left-last"
                                                style={{
                                                  textAlign: "left",
                                                  position: "sticky",
                                                  left: 0,
                                                }}
                                              >
                                                <div className="gap-2 flex w-[148px] items-center md:w-[auto]">
                                                  <div className="flex w-full items-center justify-between overflow-hidden">
                                                    <div className="flex items-center">
                                                      <div className="mr-12">
                                                        <div className="avatar-module_size-s__pbWkl shrink-0">
                                                          <svg
                                                            viewBox="0 0 80 80"
                                                            fill="none"
                                                            role="img"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="24"
                                                            height="24"
                                                          >
                                                            <mask
                                                              id=":rh:"
                                                              maskUnits="userSpaceOnUse"
                                                              x="0"
                                                              y="0"
                                                              width="80"
                                                              height="80"
                                                            >
                                                              <rect
                                                                width="80"
                                                                height="80"
                                                                rx="160"
                                                                fill="#FFFFFF"
                                                              ></rect>
                                                            </mask>
                                                            <g mask="url(#:rh:)">
                                                              <rect
                                                                width="80"
                                                                height="80"
                                                                fill="#4BFFD4"
                                                              ></rect>
                                                              <path
                                                                filter="url(#prefix__filter0_f)"
                                                                d="M32.414 59.35L50.376 70.5H72.5v-71H33.728L26.5 13.381l19.057 27.08L32.414 59.35z"
                                                                fill="#0035FF"
                                                                transform="translate(-2 2) rotate(-186 40 40) scale(1.5)"
                                                              ></path>
                                                              <path
                                                                filter="url(#prefix__filter0_f)"
                                                                d="M22.216 24L0 46.75l14.108 38.129L78 86l-3.081-59.276-22.378 4.005 12.972 20.186-23.35 27.395L22.215 24z"
                                                                fill="#FFAEFC"
                                                                transform="translate(3 3) rotate(99 40 40) scale(1.5)"
                                                                style={{
                                                                  mixBlendMode:
                                                                    "overlay",
                                                                }}
                                                              ></path>
                                                            </g>
                                                            <defs>
                                                              <filter
                                                                id="prefix__filter0_f"
                                                                filterUnits="userSpaceOnUse"
                                                                colorInterpolationFilters="sRGB"
                                                              >
                                                                <feFlood
                                                                  floodOpacity="0"
                                                                  result="BackgroundImageFix"
                                                                ></feFlood>
                                                                <feBlend
                                                                  in="SourceGraphic"
                                                                  in2="BackgroundImageFix"
                                                                  result="shape"
                                                                ></feBlend>
                                                                <feGaussianBlur
                                                                  stdDeviation="7"
                                                                  result="effect1_foregroundBlur"
                                                                ></feGaussianBlur>
                                                              </filter>
                                                            </defs>
                                                          </svg>
                                                        </div>
                                                      </div>
                                                      <div className="flex flex-col">
                                                        <div className="flex items-center">
                                                          <div className="overflow-hidden">
                                                            <div className="mr-8 flex items-center">
                                                              <div className="flex items-center gap-12 truncate max-w-full">
                                                                <a
                                                                  className="typo-module_t-body-md-strong__B-Sd1 typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9 link-module_link__Nwimt link-module_underline-mode-onlyWhenHover__alkql link-module_monochrome__yqKNC block truncate max-w-full"
                                                                  href="/validator/0xe07d7e56588a6fd860c5073c70a099658c060f3d"
                                                                >
                                                                  Yield Guild
                                                                  Games
                                                                </a>
                                                              </div>
                                                            </div>
                                                          </div>
                                                          <span className="mr-8">
                                                            <div className="flex">
                                                              <svg
                                                                className="text-tc-icon-success"
                                                                viewBox="0 0 20 20"
                                                                width="20"
                                                                height="20"
                                                              >
                                                                <path
                                                                  fill="currentColor"
                                                                  d="M10 2c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8Zm3.707 6.707-4 4a.997.997 0 0 1-1.414 0l-2-2a.999.999 0 1 1 1.414-1.414L9 10.586l3.293-3.293a.999.999 0 1 1 1.414 1.414Z"
                                                                ></path>
                                                              </svg>
                                                            </div>
                                                          </span>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell"
                                                style={{
                                                  textAlign: "right",
                                                }}
                                              >
                                                <div className="inline-flex">
                                                  <div>
                                                    <div className="flex items-center">
                                                      <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 border-tc-border-text-subdued mr-4 flex items-end border-0 border-b border-dashed">
                                                        11.42
                                                        <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh ml-[2px]">
                                                          %
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell"
                                                style={{
                                                  textAlign: "right",
                                                }}
                                              >
                                                <div className="flex items-center gap-8 overflow-hidden justify-end">
                                                  <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                                                    8,245,004.09
                                                  </div>
                                                  <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh">
                                                    RON
                                                  </div>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell"
                                                style={{
                                                  textAlign: "right",
                                                }}
                                              >
                                                <div className="inline-flex">
                                                  <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 mr-[2px]">
                                                    99.99
                                                  </div>
                                                  <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh">
                                                    %
                                                  </div>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell"
                                                style={{
                                                  textAlign: "right",
                                                }}
                                              >
                                                <div className="inline-flex">
                                                  <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3">
                                                    <div className="badge-module_badge__kTvKz badge-module_success-solid__6ZYL7 badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                                      <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs badge-module_has-left-icon__x3ijB">
                                                        <div className="badge-module_side-dot__hOn9b badge-module_success__E5Zz4"></div>
                                                        Active
                                                      </span>
                                                    </div>
                                                  </div>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell"
                                                style={{
                                                  textAlign: "right",
                                                }}
                                              >
                                                <div>
                                                  <button className="button-module_button__Z331g button-module_intent-primary__SAO1x button-module_size-small__Nes6W button-module_button-root__0roWY">
                                                    Stake
                                                  </button>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell z-[1] !pl-0 md:!pl-16 ronin-table-cell-fix-left ronin-table-cell-fix-left-last"
                                                style={{
                                                  textAlign: "left",
                                                  position: "sticky",
                                                  left: 0,
                                                }}
                                              >
                                                <div className="gap-2 flex w-[148px] items-center md:w-[auto]">
                                                  <div className="flex w-full items-center justify-between overflow-hidden">
                                                    <div className="flex items-center">
                                                      <div className="mr-12">
                                                        <div className="avatar-module_size-s__pbWkl shrink-0">
                                                          <svg
                                                            viewBox="0 0 80 80"
                                                            fill="none"
                                                            role="img"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="24"
                                                            height="24"
                                                          >
                                                            <mask
                                                              id=":ri:"
                                                              maskUnits="userSpaceOnUse"
                                                              x="0"
                                                              y="0"
                                                              width="80"
                                                              height="80"
                                                            >
                                                              <rect
                                                                width="80"
                                                                height="80"
                                                                rx="160"
                                                                fill="#FFFFFF"
                                                              ></rect>
                                                            </mask>
                                                            <g mask="url(#:ri:)">
                                                              <rect
                                                                width="80"
                                                                height="80"
                                                                fill="#2B4DFF"
                                                              ></rect>
                                                              <path
                                                                filter="url(#prefix__filter0_f)"
                                                                d="M32.414 59.35L50.376 70.5H72.5v-71H33.728L26.5 13.381l19.057 27.08L32.414 59.35z"
                                                                fill="#2065EE"
                                                                transform="translate(0 0) rotate(-128 40 40) scale(1.2)"
                                                              ></path>
                                                              <path
                                                                filter="url(#prefix__filter0_f)"
                                                                d="M22.216 24L0 46.75l14.108 38.129L78 86l-3.081-59.276-22.378 4.005 12.972 20.186-23.35 27.395L22.215 24z"
                                                                fill="#00D4FF"
                                                                transform="translate(4 4) rotate(12 40 40) scale(1.2)"
                                                                style={{
                                                                  mixBlendMode:
                                                                    "overlay",
                                                                }}
                                                              ></path>
                                                            </g>
                                                            <defs>
                                                              <filter
                                                                id="prefix__filter0_f"
                                                                filterUnits="userSpaceOnUse"
                                                                colorInterpolationFilters="sRGB"
                                                              >
                                                                <feFlood
                                                                  floodOpacity="0"
                                                                  result="BackgroundImageFix"
                                                                ></feFlood>
                                                                <feBlend
                                                                  in="SourceGraphic"
                                                                  in2="BackgroundImageFix"
                                                                  result="shape"
                                                                ></feBlend>
                                                                <feGaussianBlur
                                                                  stdDeviation="7"
                                                                  result="effect1_foregroundBlur"
                                                                ></feGaussianBlur>
                                                              </filter>
                                                            </defs>
                                                          </svg>
                                                        </div>
                                                      </div>
                                                      <div className="flex flex-col">
                                                        <div className="flex items-center">
                                                          <div className="overflow-hidden">
                                                            <div className="mr-8 flex items-center">
                                                              <div className="flex items-center gap-12 truncate max-w-full">
                                                                <a
                                                                  className="typo-module_t-body-md-strong__B-Sd1 typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9 link-module_link__Nwimt link-module_underline-mode-onlyWhenHover__alkql link-module_monochrome__yqKNC block truncate max-w-full"
                                                                  href="/validator/0xec702628f44c31acc56c3a59555be47e1f16eb1e"
                                                                >
                                                                  Moku
                                                                </a>
                                                              </div>
                                                            </div>
                                                          </div>
                                                          <span className="mr-8">
                                                            <div className="flex">
                                                              <svg
                                                                className="text-tc-icon-success"
                                                                viewBox="0 0 20 20"
                                                                width="20"
                                                                height="20"
                                                              >
                                                                <path
                                                                  fill="currentColor"
                                                                  d="M10 2c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8Zm3.707 6.707-4 4a.997.997 0 0 1-1.414 0l-2-2a.999.999 0 1 1 1.414-1.414L9 10.586l3.293-3.293a.999.999 0 1 1 1.414 1.414Z"
                                                                ></path>
                                                              </svg>
                                                            </div>
                                                          </span>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell"
                                                style={{
                                                  textAlign: "right",
                                                }}
                                              >
                                                <div className="inline-flex">
                                                  <div>
                                                    <div className="flex items-center">
                                                      <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 border-tc-border-text-subdued mr-4 flex items-end border-0 border-b border-dashed">
                                                        11.45
                                                        <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh ml-[2px]">
                                                          %
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell"
                                                style={{
                                                  textAlign: "right",
                                                }}
                                              >
                                                <div className="flex items-center gap-8 overflow-hidden justify-end">
                                                  <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                                                    8,161,928.78
                                                  </div>
                                                  <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh">
                                                    RON
                                                  </div>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell"
                                                style={{
                                                  textAlign: "right",
                                                }}
                                              >
                                                <div className="inline-flex">
                                                  <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 mr-[2px]">
                                                    99.99
                                                  </div>
                                                  <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh">
                                                    %
                                                  </div>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell"
                                                style={{
                                                  textAlign: "right",
                                                }}
                                              >
                                                <div className="inline-flex">
                                                  <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3">
                                                    <div className="badge-module_badge__kTvKz badge-module_success-solid__6ZYL7 badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                                      <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs badge-module_has-left-icon__x3ijB">
                                                        <div className="badge-module_side-dot__hOn9b badge-module_success__E5Zz4"></div>
                                                        Active
                                                      </span>
                                                    </div>
                                                  </div>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell"
                                                style={{
                                                  textAlign: "right",
                                                }}
                                              >
                                                <div>
                                                  <button className="button-module_button__Z331g button-module_intent-primary__SAO1x button-module_size-small__Nes6W button-module_button-root__0roWY">
                                                    Stake
                                                  </button>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell z-[1] !pl-0 md:!pl-16 ronin-table-cell-fix-left ronin-table-cell-fix-left-last"
                                                style={{
                                                  textAlign: "left",
                                                  position: "sticky",
                                                  left: 0,
                                                }}
                                              >
                                                <div className="gap-2 flex w-[148px] items-center md:w-[auto]">
                                                  <div className="flex w-full items-center justify-between overflow-hidden">
                                                    <div className="flex items-center">
                                                      <div className="mr-12">
                                                        <div className="avatar-module_size-s__pbWkl shrink-0">
                                                          <svg
                                                            viewBox="0 0 80 80"
                                                            fill="none"
                                                            role="img"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="24"
                                                            height="24"
                                                          >
                                                            <mask
                                                              id=":rj:"
                                                              maskUnits="userSpaceOnUse"
                                                              x="0"
                                                              y="0"
                                                              width="80"
                                                              height="80"
                                                            >
                                                              <rect
                                                                width="80"
                                                                height="80"
                                                                rx="160"
                                                                fill="#FFFFFF"
                                                              ></rect>
                                                            </mask>
                                                            <g mask="url(#:rj:)">
                                                              <rect
                                                                width="80"
                                                                height="80"
                                                                fill="#4BFFD4"
                                                              ></rect>
                                                              <path
                                                                filter="url(#prefix__filter0_f)"
                                                                d="M32.414 59.35L50.376 70.5H72.5v-71H33.728L26.5 13.381l19.057 27.08L32.414 59.35z"
                                                                fill="#0035FF"
                                                                transform="translate(-2 2) rotate(-146 40 40) scale(1.5)"
                                                              ></path>
                                                              <path
                                                                filter="url(#prefix__filter0_f)"
                                                                d="M22.216 24L0 46.75l14.108 38.129L78 86l-3.081-59.276-22.378 4.005 12.972 20.186-23.35 27.395L22.215 24z"
                                                                fill="#FFAEFC"
                                                                transform="translate(3 3) rotate(219 40 40) scale(1.5)"
                                                                style={{
                                                                  mixBlendMode:
                                                                    "overlay",
                                                                }}
                                                              ></path>
                                                            </g>
                                                            <defs>
                                                              <filter
                                                                id="prefix__filter0_f"
                                                                filterUnits="userSpaceOnUse"
                                                                colorInterpolationFilters="sRGB"
                                                              >
                                                                <feFlood
                                                                  floodOpacity="0"
                                                                  result="BackgroundImageFix"
                                                                ></feFlood>
                                                                <feBlend
                                                                  in="SourceGraphic"
                                                                  in2="BackgroundImageFix"
                                                                  result="shape"
                                                                ></feBlend>
                                                                <feGaussianBlur
                                                                  stdDeviation="7"
                                                                  result="effect1_foregroundBlur"
                                                                ></feGaussianBlur>
                                                              </filter>
                                                            </defs>
                                                          </svg>
                                                        </div>
                                                      </div>
                                                      <div className="flex flex-col">
                                                        <div className="flex items-center">
                                                          <div className="overflow-hidden">
                                                            <div className="mr-8 flex items-center">
                                                              <div className="flex items-center gap-12 truncate max-w-full">
                                                                <a
                                                                  className="typo-module_t-body-md-strong__B-Sd1 typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9 link-module_link__Nwimt link-module_underline-mode-onlyWhenHover__alkql link-module_monochrome__yqKNC block truncate max-w-full"
                                                                  href="/validator/0x210744c64eea863cf0f972e5aebc683b98fb1984"
                                                                >
                                                                  Animoca Brands
                                                                </a>
                                                              </div>
                                                            </div>
                                                          </div>
                                                          <span className="mr-8">
                                                            <div className="flex">
                                                              <svg
                                                                className="text-tc-icon-success"
                                                                viewBox="0 0 20 20"
                                                                width="20"
                                                                height="20"
                                                              >
                                                                <path
                                                                  fill="currentColor"
                                                                  d="M10 2c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8Zm3.707 6.707-4 4a.997.997 0 0 1-1.414 0l-2-2a.999.999 0 1 1 1.414-1.414L9 10.586l3.293-3.293a.999.999 0 1 1 1.414 1.414Z"
                                                                ></path>
                                                              </svg>
                                                            </div>
                                                          </span>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell"
                                                style={{
                                                  textAlign: "right",
                                                }}
                                              >
                                                <div className="inline-flex">
                                                  <div>
                                                    <div className="flex items-center">
                                                      <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 border-tc-border-text-subdued mr-4 flex items-end border-0 border-b border-dashed">
                                                        11.45
                                                        <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh ml-[2px]">
                                                          %
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell"
                                                style={{
                                                  textAlign: "right",
                                                }}
                                              >
                                                <div className="flex items-center gap-8 overflow-hidden justify-end">
                                                  <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                                                    8,144,008.85
                                                  </div>
                                                  <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh">
                                                    RON
                                                  </div>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell"
                                                style={{
                                                  textAlign: "right",
                                                }}
                                              >
                                                <div className="inline-flex">
                                                  <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 mr-[2px]">
                                                    99.98
                                                  </div>
                                                  <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh">
                                                    %
                                                  </div>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell"
                                                style={{
                                                  textAlign: "right",
                                                }}
                                              >
                                                <div className="inline-flex">
                                                  <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3">
                                                    <div className="badge-module_badge__kTvKz badge-module_success-solid__6ZYL7 badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                                      <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs badge-module_has-left-icon__x3ijB">
                                                        <div className="badge-module_side-dot__hOn9b badge-module_success__E5Zz4"></div>
                                                        Active
                                                      </span>
                                                    </div>
                                                  </div>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell"
                                                style={{
                                                  textAlign: "right",
                                                }}
                                              >
                                                <div>
                                                  <button className="button-module_button__Z331g button-module_intent-primary__SAO1x button-module_size-small__Nes6W button-module_button-root__0roWY">
                                                    Stake
                                                  </button>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell z-[1] !pl-0 md:!pl-16 ronin-table-cell-fix-left ronin-table-cell-fix-left-last"
                                                style={{
                                                  textAlign: "left",
                                                  position: "sticky",
                                                  left: 0,
                                                }}
                                              >
                                                <div className="gap-2 flex w-[148px] items-center md:w-[auto]">
                                                  <div className="flex w-full items-center justify-between overflow-hidden">
                                                    <div className="flex items-center">
                                                      <div className="mr-12">
                                                        <div className="avatar-module_size-s__pbWkl shrink-0">
                                                          <svg
                                                            viewBox="0 0 80 80"
                                                            fill="none"
                                                            role="img"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="24"
                                                            height="24"
                                                          >
                                                            <mask
                                                              id=":rk:"
                                                              maskUnits="userSpaceOnUse"
                                                              x="0"
                                                              y="0"
                                                              width="80"
                                                              height="80"
                                                            >
                                                              <rect
                                                                width="80"
                                                                height="80"
                                                                rx="160"
                                                                fill="#FFFFFF"
                                                              ></rect>
                                                            </mask>
                                                            <g mask="url(#:rk:)">
                                                              <rect
                                                                width="80"
                                                                height="80"
                                                                fill="#8833FF"
                                                              ></rect>
                                                              <path
                                                                filter="url(#prefix__filter0_f)"
                                                                d="M32.414 59.35L50.376 70.5H72.5v-71H33.728L26.5 13.381l19.057 27.08L32.414 59.35z"
                                                                fill="#2B4DFF"
                                                                transform="translate(0 0) rotate(296 40 40) scale(1.2)"
                                                              ></path>
                                                              <path
                                                                filter="url(#prefix__filter0_f)"
                                                                d="M22.216 24L0 46.75l14.108 38.129L78 86l-3.081-59.276-22.378 4.005 12.972 20.186-23.35 27.395L22.215 24z"
                                                                fill="#2065EE"
                                                                transform="translate(0 0) rotate(-264 40 40) scale(1.2)"
                                                                style={{
                                                                  mixBlendMode:
                                                                    "overlay",
                                                                }}
                                                              ></path>
                                                            </g>
                                                            <defs>
                                                              <filter
                                                                id="prefix__filter0_f"
                                                                filterUnits="userSpaceOnUse"
                                                                colorInterpolationFilters="sRGB"
                                                              >
                                                                <feFlood
                                                                  floodOpacity="0"
                                                                  result="BackgroundImageFix"
                                                                ></feFlood>
                                                                <feBlend
                                                                  in="SourceGraphic"
                                                                  in2="BackgroundImageFix"
                                                                  result="shape"
                                                                ></feBlend>
                                                                <feGaussianBlur
                                                                  stdDeviation="7"
                                                                  result="effect1_foregroundBlur"
                                                                ></feGaussianBlur>
                                                              </filter>
                                                            </defs>
                                                          </svg>
                                                        </div>
                                                      </div>
                                                      <div className="flex flex-col">
                                                        <div className="flex items-center">
                                                          <div className="overflow-hidden">
                                                            <div className="mr-8 flex items-center">
                                                              <div className="flex items-center gap-12 truncate max-w-full">
                                                                <a
                                                                  className="typo-module_t-body-md-strong__B-Sd1 typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9 link-module_link__Nwimt link-module_underline-mode-onlyWhenHover__alkql link-module_monochrome__yqKNC block truncate max-w-full"
                                                                  href="/validator/0x52349003240770727900b06a3b3a90f5c0219ade"
                                                                >
                                                                  Coco__Bear
                                                                </a>
                                                              </div>
                                                            </div>
                                                          </div>
                                                          <span className="mr-8">
                                                            <div className="flex">
                                                              <svg
                                                                className="text-tc-icon-success"
                                                                viewBox="0 0 20 20"
                                                                width="20"
                                                                height="20"
                                                              >
                                                                <path
                                                                  fill="currentColor"
                                                                  d="M10 2c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8Zm3.707 6.707-4 4a.997.997 0 0 1-1.414 0l-2-2a.999.999 0 1 1 1.414-1.414L9 10.586l3.293-3.293a.999.999 0 1 1 1.414 1.414Z"
                                                                ></path>
                                                              </svg>
                                                            </div>
                                                          </span>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell"
                                                style={{
                                                  textAlign: "right",
                                                }}
                                              >
                                                <div className="inline-flex">
                                                  <div>
                                                    <div className="flex items-center">
                                                      <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 border-tc-border-text-subdued mr-4 flex items-end border-0 border-b border-dashed">
                                                        11.47
                                                        <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh ml-[2px]">
                                                          %
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell"
                                                style={{
                                                  textAlign: "right",
                                                }}
                                              >
                                                <div className="flex items-center gap-8 overflow-hidden justify-end">
                                                  <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                                                    8,075,905.26
                                                  </div>
                                                  <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh">
                                                    RON
                                                  </div>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell"
                                                style={{
                                                  textAlign: "right",
                                                }}
                                              >
                                                <div className="inline-flex">
                                                  <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 mr-[2px]">
                                                    99.98
                                                  </div>
                                                  <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh">
                                                    %
                                                  </div>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell"
                                                style={{
                                                  textAlign: "right",
                                                }}
                                              >
                                                <div className="inline-flex">
                                                  <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3">
                                                    <div className="badge-module_badge__kTvKz badge-module_success-solid__6ZYL7 badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                                      <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs badge-module_has-left-icon__x3ijB">
                                                        <div className="badge-module_side-dot__hOn9b badge-module_success__E5Zz4"></div>
                                                        Active
                                                      </span>
                                                    </div>
                                                  </div>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell"
                                                style={{
                                                  textAlign: "right",
                                                }}
                                              >
                                                <div>
                                                  <button className="button-module_button__Z331g button-module_intent-primary__SAO1x button-module_size-small__Nes6W button-module_button-root__0roWY">
                                                    Stake
                                                  </button>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell z-[1] !pl-0 md:!pl-16 ronin-table-cell-fix-left ronin-table-cell-fix-left-last"
                                                style={{
                                                  textAlign: "left",
                                                  position: "sticky",
                                                  left: 0,
                                                }}
                                              >
                                                <div className="gap-2 flex w-[148px] items-center md:w-[auto]">
                                                  <div className="flex w-full items-center justify-between overflow-hidden">
                                                    <div className="flex items-center">
                                                      <div className="mr-12">
                                                        <div className="avatar-module_size-s__pbWkl shrink-0">
                                                          <svg
                                                            viewBox="0 0 80 80"
                                                            fill="none"
                                                            role="img"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="24"
                                                            height="24"
                                                          >
                                                            <mask
                                                              id=":rl:"
                                                              maskUnits="userSpaceOnUse"
                                                              x="0"
                                                              y="0"
                                                              width="80"
                                                              height="80"
                                                            >
                                                              <rect
                                                                width="80"
                                                                height="80"
                                                                rx="160"
                                                                fill="#FFFFFF"
                                                              ></rect>
                                                            </mask>
                                                            <g mask="url(#:rl:)">
                                                              <rect
                                                                width="80"
                                                                height="80"
                                                                fill="#8833FF"
                                                              ></rect>
                                                              <path
                                                                filter="url(#prefix__filter0_f)"
                                                                d="M32.414 59.35L50.376 70.5H72.5v-71H33.728L26.5 13.381l19.057 27.08L32.414 59.35z"
                                                                fill="#2B4DFF"
                                                                transform="translate(4 4) rotate(116 40 40) scale(1.4)"
                                                              ></path>
                                                              <path
                                                                filter="url(#prefix__filter0_f)"
                                                                d="M22.216 24L0 46.75l14.108 38.129L78 86l-3.081-59.276-22.378 4.005 12.972 20.186-23.35 27.395L22.215 24z"
                                                                fill="#2065EE"
                                                                transform="translate(6 6) rotate(174 40 40) scale(1.4)"
                                                                style={{
                                                                  mixBlendMode:
                                                                    "overlay",
                                                                }}
                                                              ></path>
                                                            </g>
                                                            <defs>
                                                              <filter
                                                                id="prefix__filter0_f"
                                                                filterUnits="userSpaceOnUse"
                                                                colorInterpolationFilters="sRGB"
                                                              >
                                                                <feFlood
                                                                  floodOpacity="0"
                                                                  result="BackgroundImageFix"
                                                                ></feFlood>
                                                                <feBlend
                                                                  in="SourceGraphic"
                                                                  in2="BackgroundImageFix"
                                                                  result="shape"
                                                                ></feBlend>
                                                                <feGaussianBlur
                                                                  stdDeviation="7"
                                                                  result="effect1_foregroundBlur"
                                                                ></feGaussianBlur>
                                                              </filter>
                                                            </defs>
                                                          </svg>
                                                        </div>
                                                      </div>
                                                      <div className="flex flex-col">
                                                        <div className="flex items-center">
                                                          <div className="overflow-hidden">
                                                            <div className="mr-8 flex items-center">
                                                              <div className="flex items-center gap-12 truncate max-w-full">
                                                                <a
                                                                  className="typo-module_t-body-md-strong__B-Sd1 typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9 link-module_link__Nwimt link-module_underline-mode-onlyWhenHover__alkql link-module_monochrome__yqKNC block truncate max-w-full"
                                                                  href="/validator/0x9b959d27840a31988410ee69991bcf0110d61f02"
                                                                >
                                                                  Community
                                                                  Gaming
                                                                </a>
                                                              </div>
                                                            </div>
                                                          </div>
                                                          <span className="mr-8">
                                                            <div className="flex">
                                                              <svg
                                                                className="text-tc-icon-success"
                                                                viewBox="0 0 20 20"
                                                                width="20"
                                                                height="20"
                                                              >
                                                                <path
                                                                  fill="currentColor"
                                                                  d="M10 2c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8Zm3.707 6.707-4 4a.997.997 0 0 1-1.414 0l-2-2a.999.999 0 1 1 1.414-1.414L9 10.586l3.293-3.293a.999.999 0 1 1 1.414 1.414Z"
                                                                ></path>
                                                              </svg>
                                                            </div>
                                                          </span>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell"
                                                style={{
                                                  textAlign: "right",
                                                }}
                                              >
                                                <div className="inline-flex">
                                                  <div>
                                                    <div className="flex items-center">
                                                      <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 border-tc-border-text-subdued mr-4 flex items-end border-0 border-b border-dashed">
                                                        11.51
                                                        <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh ml-[2px]">
                                                          %
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell"
                                                style={{
                                                  textAlign: "right",
                                                }}
                                              >
                                                <div className="flex items-center gap-8 overflow-hidden justify-end">
                                                  <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                                                    7,913,323.59
                                                  </div>
                                                  <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh">
                                                    RON
                                                  </div>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell"
                                                style={{
                                                  textAlign: "right",
                                                }}
                                              >
                                                <div className="inline-flex">
                                                  <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 mr-[2px]">
                                                    99.96
                                                  </div>
                                                  <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh">
                                                    %
                                                  </div>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell"
                                                style={{
                                                  textAlign: "right",
                                                }}
                                              >
                                                <div className="inline-flex">
                                                  <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3">
                                                    <div className="badge-module_badge__kTvKz badge-module_success-solid__6ZYL7 badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                                      <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs badge-module_has-left-icon__x3ijB">
                                                        <div className="badge-module_side-dot__hOn9b badge-module_success__E5Zz4"></div>
                                                        Active
                                                      </span>
                                                    </div>
                                                  </div>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell"
                                                style={{
                                                  textAlign: "right",
                                                }}
                                              >
                                                <div>
                                                  <button className="button-module_button__Z331g button-module_intent-primary__SAO1x button-module_size-small__Nes6W button-module_button-root__0roWY">
                                                    Stake
                                                  </button>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell z-[1] !pl-0 md:!pl-16 ronin-table-cell-fix-left ronin-table-cell-fix-left-last"
                                                style={{
                                                  textAlign: "left",
                                                  position: "sticky",
                                                  left: 0,
                                                }}
                                              >
                                                <div className="gap-2 flex w-[148px] items-center md:w-[auto]">
                                                  <div className="flex w-full items-center justify-between overflow-hidden">
                                                    <div className="flex items-center">
                                                      <div className="mr-12">
                                                        <div className="avatar-module_size-s__pbWkl shrink-0">
                                                          <svg
                                                            viewBox="0 0 80 80"
                                                            fill="none"
                                                            role="img"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="24"
                                                            height="24"
                                                          >
                                                            <mask
                                                              id=":rm:"
                                                              maskUnits="userSpaceOnUse"
                                                              x="0"
                                                              y="0"
                                                              width="80"
                                                              height="80"
                                                            >
                                                              <rect
                                                                width="80"
                                                                height="80"
                                                                rx="160"
                                                                fill="#FFFFFF"
                                                              ></rect>
                                                            </mask>
                                                            <g mask="url(#:rm:)">
                                                              <rect
                                                                width="80"
                                                                height="80"
                                                                fill="#E3E8F2"
                                                              ></rect>
                                                              <path
                                                                filter="url(#prefix__filter0_f)"
                                                                d="M32.414 59.35L50.376 70.5H72.5v-71H33.728L26.5 13.381l19.057 27.08L32.414 59.35z"
                                                                fill="#4BFFD4"
                                                                transform="translate(2 -2) rotate(314 40 40) scale(1.5)"
                                                              ></path>
                                                              <path
                                                                filter="url(#prefix__filter0_f)"
                                                                d="M22.216 24L0 46.75l14.108 38.129L78 86l-3.081-59.276-22.378 4.005 12.972 20.186-23.35 27.395L22.215 24z"
                                                                fill="#0035FF"
                                                                transform="translate(7 7) rotate(111 40 40) scale(1.5)"
                                                                style={{
                                                                  mixBlendMode:
                                                                    "overlay",
                                                                }}
                                                              ></path>
                                                            </g>
                                                            <defs>
                                                              <filter
                                                                id="prefix__filter0_f"
                                                                filterUnits="userSpaceOnUse"
                                                                colorInterpolationFilters="sRGB"
                                                              >
                                                                <feFlood
                                                                  floodOpacity="0"
                                                                  result="BackgroundImageFix"
                                                                ></feFlood>
                                                                <feBlend
                                                                  in="SourceGraphic"
                                                                  in2="BackgroundImageFix"
                                                                  result="shape"
                                                                ></feBlend>
                                                                <feGaussianBlur
                                                                  stdDeviation="7"
                                                                  result="effect1_foregroundBlur"
                                                                ></feGaussianBlur>
                                                              </filter>
                                                            </defs>
                                                          </svg>
                                                        </div>
                                                      </div>
                                                      <div className="flex flex-col">
                                                        <div className="flex items-center">
                                                          <div className="overflow-hidden">
                                                            <div className="mr-8 flex items-center">
                                                              <div className="flex items-center gap-12 truncate max-w-full">
                                                                <a
                                                                  className="typo-module_t-body-md-strong__B-Sd1 typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9 link-module_link__Nwimt link-module_underline-mode-onlyWhenHover__alkql link-module_monochrome__yqKNC block truncate max-w-full"
                                                                  href="/validator/0x8eec4f1c0878f73e8e09c1be78ac1465cc16544d"
                                                                >
                                                                  DappRadar DAO
                                                                </a>
                                                              </div>
                                                            </div>
                                                          </div>
                                                          <span className="mr-8">
                                                            <div className="flex">
                                                              <svg
                                                                className="text-tc-icon-success"
                                                                viewBox="0 0 20 20"
                                                                width="20"
                                                                height="20"
                                                              >
                                                                <path
                                                                  fill="currentColor"
                                                                  d="M10 2c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8Zm3.707 6.707-4 4a.997.997 0 0 1-1.414 0l-2-2a.999.999 0 1 1 1.414-1.414L9 10.586l3.293-3.293a.999.999 0 1 1 1.414 1.414Z"
                                                                ></path>
                                                              </svg>
                                                            </div>
                                                          </span>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell"
                                                style={{
                                                  textAlign: "right",
                                                }}
                                              >
                                                <div className="inline-flex">
                                                  <div>
                                                    <div className="flex items-center">
                                                      <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 border-tc-border-text-subdued mr-4 flex items-end border-0 border-b border-dashed">
                                                        11.62
                                                        <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh ml-[2px]">
                                                          %
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell"
                                                style={{
                                                  textAlign: "right",
                                                }}
                                              >
                                                <div className="flex items-center gap-8 overflow-hidden justify-end">
                                                  <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                                                    7,493,780.73
                                                  </div>
                                                  <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh">
                                                    RON
                                                  </div>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell"
                                                style={{
                                                  textAlign: "right",
                                                }}
                                              >
                                                <div className="inline-flex">
                                                  <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 mr-[2px]">
                                                    99.96
                                                  </div>
                                                  <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh">
                                                    %
                                                  </div>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell"
                                                style={{
                                                  textAlign: "right",
                                                }}
                                              >
                                                <div className="inline-flex">
                                                  <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3">
                                                    <div className="badge-module_badge__kTvKz badge-module_success-solid__6ZYL7 badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                                      <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs badge-module_has-left-icon__x3ijB">
                                                        <div className="badge-module_side-dot__hOn9b badge-module_success__E5Zz4"></div>
                                                        Active
                                                      </span>
                                                    </div>
                                                  </div>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell"
                                                style={{
                                                  textAlign: "right",
                                                }}
                                              >
                                                <div>
                                                  <button className="button-module_button__Z331g button-module_intent-primary__SAO1x button-module_size-small__Nes6W button-module_button-root__0roWY">
                                                    Stake
                                                  </button>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell z-[1] !pl-0 md:!pl-16 ronin-table-cell-fix-left ronin-table-cell-fix-left-last"
                                                style={{
                                                  textAlign: "left",
                                                  position: "sticky",
                                                  left: 0,
                                                }}
                                              >
                                                <div className="gap-2 flex w-[148px] items-center md:w-[auto]">
                                                  <div className="flex w-full items-center justify-between overflow-hidden">
                                                    <div className="flex items-center">
                                                      <div className="mr-12">
                                                        <div className="avatar-module_size-s__pbWkl shrink-0">
                                                          <svg
                                                            viewBox="0 0 80 80"
                                                            fill="none"
                                                            role="img"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="24"
                                                            height="24"
                                                          >
                                                            <mask
                                                              id=":rn:"
                                                              maskUnits="userSpaceOnUse"
                                                              x="0"
                                                              y="0"
                                                              width="80"
                                                              height="80"
                                                            >
                                                              <rect
                                                                width="80"
                                                                height="80"
                                                                rx="160"
                                                                fill="#FFFFFF"
                                                              ></rect>
                                                            </mask>
                                                            <g mask="url(#:rn:)">
                                                              <rect
                                                                width="80"
                                                                height="80"
                                                                fill="#2B4DFF"
                                                              ></rect>
                                                              <path
                                                                filter="url(#prefix__filter0_f)"
                                                                d="M32.414 59.35L50.376 70.5H72.5v-71H33.728L26.5 13.381l19.057 27.08L32.414 59.35z"
                                                                fill="#2065EE"
                                                                transform="translate(0 0) rotate(-48 40 40) scale(1.2)"
                                                              ></path>
                                                              <path
                                                                filter="url(#prefix__filter0_f)"
                                                                d="M22.216 24L0 46.75l14.108 38.129L78 86l-3.081-59.276-22.378 4.005 12.972 20.186-23.35 27.395L22.215 24z"
                                                                fill="#00D4FF"
                                                                transform="translate(0 0) rotate(72 40 40) scale(1.2)"
                                                                style={{
                                                                  mixBlendMode:
                                                                    "overlay",
                                                                }}
                                                              ></path>
                                                            </g>
                                                            <defs>
                                                              <filter
                                                                id="prefix__filter0_f"
                                                                filterUnits="userSpaceOnUse"
                                                                colorInterpolationFilters="sRGB"
                                                              >
                                                                <feFlood
                                                                  floodOpacity="0"
                                                                  result="BackgroundImageFix"
                                                                ></feFlood>
                                                                <feBlend
                                                                  in="SourceGraphic"
                                                                  in2="BackgroundImageFix"
                                                                  result="shape"
                                                                ></feBlend>
                                                                <feGaussianBlur
                                                                  stdDeviation="7"
                                                                  result="effect1_foregroundBlur"
                                                                ></feGaussianBlur>
                                                              </filter>
                                                            </defs>
                                                          </svg>
                                                        </div>
                                                      </div>
                                                      <div className="flex flex-col">
                                                        <div className="flex items-center">
                                                          <div className="overflow-hidden">
                                                            <div className="mr-8 flex items-center">
                                                              <div className="flex items-center gap-12 truncate max-w-full">
                                                                <a
                                                                  className="typo-module_t-body-md-strong__B-Sd1 typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9 link-module_link__Nwimt link-module_underline-mode-onlyWhenHover__alkql link-module_monochrome__yqKNC block truncate max-w-full"
                                                                  href="/validator/0xd11d9842babd5209b9b1155e46f5878c989125b7"
                                                                >
                                                                  AxieChat
                                                                </a>
                                                              </div>
                                                            </div>
                                                          </div>
                                                          <span className="mr-8">
                                                            <div className="flex">
                                                              <svg
                                                                className="text-tc-icon-success"
                                                                viewBox="0 0 20 20"
                                                                width="20"
                                                                height="20"
                                                              >
                                                                <path
                                                                  fill="currentColor"
                                                                  d="M10 2c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8Zm3.707 6.707-4 4a.997.997 0 0 1-1.414 0l-2-2a.999.999 0 1 1 1.414-1.414L9 10.586l3.293-3.293a.999.999 0 1 1 1.414 1.414Z"
                                                                ></path>
                                                              </svg>
                                                            </div>
                                                          </span>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell"
                                                style={{
                                                  textAlign: "right",
                                                }}
                                              >
                                                <div className="inline-flex">
                                                  <div>
                                                    <div className="flex items-center">
                                                      <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 border-tc-border-text-subdued mr-4 flex items-end border-0 border-b border-dashed">
                                                        11.67
                                                        <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh ml-[2px]">
                                                          %
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell"
                                                style={{
                                                  textAlign: "right",
                                                }}
                                              >
                                                <div className="flex items-center gap-8 overflow-hidden justify-end">
                                                  <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                                                    7,342,079.69
                                                  </div>
                                                  <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh">
                                                    RON
                                                  </div>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell"
                                                style={{
                                                  textAlign: "right",
                                                }}
                                              >
                                                <div className="inline-flex">
                                                  <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 mr-[2px]">
                                                    99.97
                                                  </div>
                                                  <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh">
                                                    %
                                                  </div>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell"
                                                style={{
                                                  textAlign: "right",
                                                }}
                                              >
                                                <div className="inline-flex">
                                                  <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3">
                                                    <div className="badge-module_badge__kTvKz badge-module_success-solid__6ZYL7 badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                                      <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs badge-module_has-left-icon__x3ijB">
                                                        <div className="badge-module_side-dot__hOn9b badge-module_success__E5Zz4"></div>
                                                        Active
                                                      </span>
                                                    </div>
                                                  </div>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell"
                                                style={{
                                                  textAlign: "right",
                                                }}
                                              >
                                                <div>
                                                  <button className="button-module_button__Z331g button-module_intent-primary__SAO1x button-module_size-small__Nes6W button-module_button-root__0roWY">
                                                    Stake
                                                  </button>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell z-[1] !pl-0 md:!pl-16 ronin-table-cell-fix-left ronin-table-cell-fix-left-last"
                                                style={{
                                                  textAlign: "left",
                                                  position: "sticky",
                                                  left: 0,
                                                }}
                                              >
                                                <div className="gap-2 flex w-[148px] items-center md:w-[auto]">
                                                  <div className="flex w-full items-center justify-between overflow-hidden">
                                                    <div className="flex items-center">
                                                      <div className="mr-12">
                                                        <div className="avatar-module_size-s__pbWkl shrink-0">
                                                          <svg
                                                            viewBox="0 0 80 80"
                                                            fill="none"
                                                            role="img"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="24"
                                                            height="24"
                                                          >
                                                            <mask
                                                              id=":ro:"
                                                              maskUnits="userSpaceOnUse"
                                                              x="0"
                                                              y="0"
                                                              width="80"
                                                              height="80"
                                                            >
                                                              <rect
                                                                width="80"
                                                                height="80"
                                                                rx="160"
                                                                fill="#FFFFFF"
                                                              ></rect>
                                                            </mask>
                                                            <g mask="url(#:ro:)">
                                                              <rect
                                                                width="80"
                                                                height="80"
                                                                fill="#E3E8F2"
                                                              ></rect>
                                                              <path
                                                                filter="url(#prefix__filter0_f)"
                                                                d="M32.414 59.35L50.376 70.5H72.5v-71H33.728L26.5 13.381l19.057 27.08L32.414 59.35z"
                                                                fill="#4BFFD4"
                                                                transform="translate(6 -6) rotate(294 40 40) scale(1.3)"
                                                              ></path>
                                                              <path
                                                                filter="url(#prefix__filter0_f)"
                                                                d="M22.216 24L0 46.75l14.108 38.129L78 86l-3.081-59.276-22.378 4.005 12.972 20.186-23.35 27.395L22.215 24z"
                                                                fill="#0035FF"
                                                                transform="translate(-5 5) rotate(-261 40 40) scale(1.3)"
                                                                style={{
                                                                  mixBlendMode:
                                                                    "overlay",
                                                                }}
                                                              ></path>
                                                            </g>
                                                            <defs>
                                                              <filter
                                                                id="prefix__filter0_f"
                                                                filterUnits="userSpaceOnUse"
                                                                colorInterpolationFilters="sRGB"
                                                              >
                                                                <feFlood
                                                                  floodOpacity="0"
                                                                  result="BackgroundImageFix"
                                                                ></feFlood>
                                                                <feBlend
                                                                  in="SourceGraphic"
                                                                  in2="BackgroundImageFix"
                                                                  result="shape"
                                                                ></feBlend>
                                                                <feGaussianBlur
                                                                  stdDeviation="7"
                                                                  result="effect1_foregroundBlur"
                                                                ></feGaussianBlur>
                                                              </filter>
                                                            </defs>
                                                          </svg>
                                                        </div>
                                                      </div>
                                                      <div className="flex flex-col">
                                                        <div className="flex items-center">
                                                          <div className="overflow-hidden">
                                                            <div className="mr-8 flex items-center">
                                                              <div className="flex items-center gap-12 truncate max-w-full">
                                                                <a
                                                                  className="typo-module_t-body-md-strong__B-Sd1 typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9 link-module_link__Nwimt link-module_underline-mode-onlyWhenHover__alkql link-module_monochrome__yqKNC block truncate max-w-full"
                                                                  href="/validator/0xee11d2016e9f2fae606b2f12986811f4abbe6215"
                                                                >
                                                                  NonFungible.com
                                                                </a>
                                                              </div>
                                                            </div>
                                                          </div>
                                                          <span className="mr-8">
                                                            <div className="flex">
                                                              <svg
                                                                className="text-tc-icon-success"
                                                                viewBox="0 0 20 20"
                                                                width="20"
                                                                height="20"
                                                              >
                                                                <path
                                                                  fill="currentColor"
                                                                  d="M10 2c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8Zm3.707 6.707-4 4a.997.997 0 0 1-1.414 0l-2-2a.999.999 0 1 1 1.414-1.414L9 10.586l3.293-3.293a.999.999 0 1 1 1.414 1.414Z"
                                                                ></path>
                                                              </svg>
                                                            </div>
                                                          </span>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell"
                                                style={{
                                                  textAlign: "right",
                                                }}
                                              >
                                                <div className="inline-flex">
                                                  <div>
                                                    <div className="flex items-center">
                                                      <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 border-tc-border-text-subdued mr-4 flex items-end border-0 border-b border-dashed">
                                                        11.80
                                                        <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh ml-[2px]">
                                                          %
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell"
                                                style={{
                                                  textAlign: "right",
                                                }}
                                              >
                                                <div className="flex items-center gap-8 overflow-hidden justify-end">
                                                  <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                                                    6,930,307.73
                                                  </div>
                                                  <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh">
                                                    RON
                                                  </div>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell"
                                                style={{
                                                  textAlign: "right",
                                                }}
                                              >
                                                <div className="inline-flex">
                                                  <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 mr-[2px]">
                                                    99.98
                                                  </div>
                                                  <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh">
                                                    %
                                                  </div>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell"
                                                style={{
                                                  textAlign: "right",
                                                }}
                                              >
                                                <div className="inline-flex">
                                                  <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3">
                                                    <div className="badge-module_badge__kTvKz badge-module_success-solid__6ZYL7 badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                                      <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs badge-module_has-left-icon__x3ijB">
                                                        <div className="badge-module_side-dot__hOn9b badge-module_success__E5Zz4"></div>
                                                        Active
                                                      </span>
                                                    </div>
                                                  </div>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell"
                                                style={{
                                                  textAlign: "right",
                                                }}
                                              >
                                                <div>
                                                  <button className="button-module_button__Z331g button-module_intent-primary__SAO1x button-module_size-small__Nes6W button-module_button-root__0roWY">
                                                    Stake
                                                  </button>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell z-[1] !pl-0 md:!pl-16 ronin-table-cell-fix-left ronin-table-cell-fix-left-last"
                                                style={{
                                                  textAlign: "left",
                                                  position: "sticky",
                                                  left: 0,
                                                }}
                                              >
                                                <div className="gap-2 flex w-[148px] items-center md:w-[auto]">
                                                  <div className="flex w-full items-center justify-between overflow-hidden">
                                                    <div className="flex items-center">
                                                      <div className="mr-12">
                                                        <div className="avatar-module_size-s__pbWkl shrink-0">
                                                          <svg
                                                            viewBox="0 0 80 80"
                                                            fill="none"
                                                            role="img"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="24"
                                                            height="24"
                                                          >
                                                            <mask
                                                              id=":rp:"
                                                              maskUnits="userSpaceOnUse"
                                                              x="0"
                                                              y="0"
                                                              width="80"
                                                              height="80"
                                                            >
                                                              <rect
                                                                width="80"
                                                                height="80"
                                                                rx="160"
                                                                fill="#FFFFFF"
                                                              ></rect>
                                                            </mask>
                                                            <g mask="url(#:rp:)">
                                                              <rect
                                                                width="80"
                                                                height="80"
                                                                fill="#2B4DFF"
                                                              ></rect>
                                                              <path
                                                                filter="url(#prefix__filter0_f)"
                                                                d="M32.414 59.35L50.376 70.5H72.5v-71H33.728L26.5 13.381l19.057 27.08L32.414 59.35z"
                                                                fill="#2065EE"
                                                                transform="translate(-4 4) rotate(-148 40 40) scale(1.4)"
                                                              ></path>
                                                              <path
                                                                filter="url(#prefix__filter0_f)"
                                                                d="M22.216 24L0 46.75l14.108 38.129L78 86l-3.081-59.276-22.378 4.005 12.972 20.186-23.35 27.395L22.215 24z"
                                                                fill="#00D4FF"
                                                                transform="translate(-6 -6) rotate(-222 40 40) scale(1.4)"
                                                                style={{
                                                                  mixBlendMode:
                                                                    "overlay",
                                                                }}
                                                              ></path>
                                                            </g>
                                                            <defs>
                                                              <filter
                                                                id="prefix__filter0_f"
                                                                filterUnits="userSpaceOnUse"
                                                                colorInterpolationFilters="sRGB"
                                                              >
                                                                <feFlood
                                                                  floodOpacity="0"
                                                                  result="BackgroundImageFix"
                                                                ></feFlood>
                                                                <feBlend
                                                                  in="SourceGraphic"
                                                                  in2="BackgroundImageFix"
                                                                  result="shape"
                                                                ></feBlend>
                                                                <feGaussianBlur
                                                                  stdDeviation="7"
                                                                  result="effect1_foregroundBlur"
                                                                ></feGaussianBlur>
                                                              </filter>
                                                            </defs>
                                                          </svg>
                                                        </div>
                                                      </div>
                                                      <div className="flex flex-col">
                                                        <div className="flex items-center">
                                                          <div className="overflow-hidden">
                                                            <div className="mr-8 flex items-center">
                                                              <div className="flex items-center gap-12 truncate max-w-full">
                                                                <a
                                                                  className="typo-module_t-body-md-strong__B-Sd1 typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9 link-module_link__Nwimt link-module_underline-mode-onlyWhenHover__alkql link-module_monochrome__yqKNC block truncate max-w-full"
                                                                  href="/validator/0x52c0dcd83aa1999ba6c3b0324c8299e30207373c"
                                                                >
                                                                  Sky Mavis
                                                                </a>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell"
                                                style={{
                                                  textAlign: "right",
                                                }}
                                              >
                                                <div className="inline-flex">
                                                  <div>
                                                    <div className="flex items-center">
                                                      <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 border-tc-border-text-subdued mr-4 flex items-end border-0 border-b border-dashed">
                                                        10.62
                                                        <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh ml-[2px]">
                                                          %
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell"
                                                style={{
                                                  textAlign: "right",
                                                }}
                                              >
                                                <div className="flex items-center gap-8 overflow-hidden justify-end">
                                                  <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                                                    330,697.18
                                                  </div>
                                                  <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh">
                                                    RON
                                                  </div>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell"
                                                style={{
                                                  textAlign: "right",
                                                }}
                                              >
                                                <div className="inline-flex">
                                                  <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 mr-[2px]">
                                                    100.00
                                                  </div>
                                                  <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh">
                                                    %
                                                  </div>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell"
                                                style={{
                                                  textAlign: "right",
                                                }}
                                              >
                                                <div className="inline-flex">
                                                  <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3">
                                                    <div className="badge-module_badge__kTvKz badge-module_success-solid__6ZYL7 badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                                      <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs badge-module_has-left-icon__x3ijB">
                                                        <div className="badge-module_side-dot__hOn9b badge-module_success__E5Zz4"></div>
                                                        Active
                                                      </span>
                                                    </div>
                                                  </div>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell"
                                                style={{
                                                  textAlign: "right",
                                                }}
                                              >
                                                <div>
                                                  <button className="button-module_button__Z331g button-module_intent-primary__SAO1x button-module_size-small__Nes6W button-module_button-root__0roWY">
                                                    Stake
                                                  </button>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell z-[1] !pl-0 md:!pl-16 ronin-table-cell-fix-left ronin-table-cell-fix-left-last"
                                                style={{
                                                  textAlign: "left",
                                                  position: "sticky",
                                                  left: 0,
                                                }}
                                              >
                                                <div className="gap-2 flex w-[148px] items-center md:w-[auto]">
                                                  <div className="flex w-full items-center justify-between overflow-hidden">
                                                    <div className="flex items-center">
                                                      <div className="mr-12">
                                                        <div className="avatar-module_size-s__pbWkl shrink-0">
                                                          <svg
                                                            viewBox="0 0 80 80"
                                                            fill="none"
                                                            role="img"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="24"
                                                            height="24"
                                                          >
                                                            <mask
                                                              id=":rq:"
                                                              maskUnits="userSpaceOnUse"
                                                              x="0"
                                                              y="0"
                                                              width="80"
                                                              height="80"
                                                            >
                                                              <rect
                                                                width="80"
                                                                height="80"
                                                                rx="160"
                                                                fill="#FFFFFF"
                                                              ></rect>
                                                            </mask>
                                                            <g mask="url(#:rq:)">
                                                              <rect
                                                                width="80"
                                                                height="80"
                                                                fill="#2065EE"
                                                              ></rect>
                                                              <path
                                                                filter="url(#prefix__filter0_f)"
                                                                d="M32.414 59.35L50.376 70.5H72.5v-71H33.728L26.5 13.381l19.057 27.08L32.414 59.35z"
                                                                fill="#00D4FF"
                                                                transform="translate(-4 -4) rotate(-140 40 40) scale(1.4)"
                                                              ></path>
                                                              <path
                                                                filter="url(#prefix__filter0_f)"
                                                                d="M22.216 24L0 46.75l14.108 38.129L78 86l-3.081-59.276-22.378 4.005 12.972 20.186-23.35 27.395L22.215 24z"
                                                                fill="#FFC34D"
                                                                transform="translate(2 -2) rotate(210 40 40) scale(1.4)"
                                                                style={{
                                                                  mixBlendMode:
                                                                    "overlay",
                                                                }}
                                                              ></path>
                                                            </g>
                                                            <defs>
                                                              <filter
                                                                id="prefix__filter0_f"
                                                                filterUnits="userSpaceOnUse"
                                                                colorInterpolationFilters="sRGB"
                                                              >
                                                                <feFlood
                                                                  floodOpacity="0"
                                                                  result="BackgroundImageFix"
                                                                ></feFlood>
                                                                <feBlend
                                                                  in="SourceGraphic"
                                                                  in2="BackgroundImageFix"
                                                                  result="shape"
                                                                ></feBlend>
                                                                <feGaussianBlur
                                                                  stdDeviation="7"
                                                                  result="effect1_foregroundBlur"
                                                                ></feGaussianBlur>
                                                              </filter>
                                                            </defs>
                                                          </svg>
                                                        </div>
                                                      </div>
                                                      <div className="flex flex-col">
                                                        <div className="flex items-center">
                                                          <div className="overflow-hidden">
                                                            <div className="mr-8 flex items-center">
                                                              <div className="flex items-center gap-12 truncate max-w-full">
                                                                <a
                                                                  className="typo-module_t-body-md-strong__B-Sd1 typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9 link-module_link__Nwimt link-module_underline-mode-onlyWhenHover__alkql link-module_monochrome__yqKNC block truncate max-w-full"
                                                                  href="/validator/0x8a4be221fbb743353b2365ceacfb57109a2ac73e"
                                                                >
                                                                  StableLab
                                                                </a>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell"
                                                style={{
                                                  textAlign: "right",
                                                }}
                                              >
                                                <div className="inline-flex">
                                                  <div>
                                                    <div className="flex items-center">
                                                      <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 border-tc-border-text-subdued mr-4 flex items-end border-0 border-b border-dashed">
                                                        10.86
                                                        <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh ml-[2px]">
                                                          %
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell"
                                                style={{
                                                  textAlign: "right",
                                                }}
                                              >
                                                <div className="flex items-center gap-8 overflow-hidden justify-end">
                                                  <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                                                    275,772.72
                                                  </div>
                                                  <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh">
                                                    RON
                                                  </div>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell"
                                                style={{
                                                  textAlign: "right",
                                                }}
                                              >
                                                <div className="inline-flex">
                                                  <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh">
                                                    --
                                                  </div>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell"
                                                style={{
                                                  textAlign: "right",
                                                }}
                                              >
                                                <div className="inline-flex">
                                                  <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3">
                                                    <div className="badge-module_badge__kTvKz badge-module_success-solid__6ZYL7 badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                                      <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs badge-module_has-left-icon__x3ijB">
                                                        <div className="badge-module_side-dot__hOn9b badge-module_success__E5Zz4"></div>
                                                        Active
                                                      </span>
                                                    </div>
                                                  </div>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell"
                                                style={{
                                                  textAlign: "right",
                                                }}
                                              >
                                                <div>
                                                  <button className="button-module_button__Z331g button-module_intent-primary__SAO1x button-module_size-small__Nes6W button-module_button-root__0roWY">
                                                    Stake
                                                  </button>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell z-[1] !pl-0 md:!pl-16 ronin-table-cell-fix-left ronin-table-cell-fix-left-last"
                                                style={{
                                                  textAlign: "left",
                                                  position: "sticky",
                                                  left: 0,
                                                }}
                                              >
                                                <div className="gap-2 flex w-[148px] items-center md:w-[auto]">
                                                  <div className="flex w-full items-center justify-between overflow-hidden">
                                                    <div className="flex items-center">
                                                      <div className="mr-12">
                                                        <div className="avatar-module_size-s__pbWkl shrink-0">
                                                          <svg
                                                            viewBox="0 0 80 80"
                                                            fill="none"
                                                            role="img"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="24"
                                                            height="24"
                                                          >
                                                            <mask
                                                              id=":rr:"
                                                              maskUnits="userSpaceOnUse"
                                                              x="0"
                                                              y="0"
                                                              width="80"
                                                              height="80"
                                                            >
                                                              <rect
                                                                width="80"
                                                                height="80"
                                                                rx="160"
                                                                fill="#FFFFFF"
                                                              ></rect>
                                                            </mask>
                                                            <g mask="url(#:rr:)">
                                                              <rect
                                                                width="80"
                                                                height="80"
                                                                fill="#0035FF"
                                                              ></rect>
                                                              <path
                                                                filter="url(#prefix__filter0_f)"
                                                                d="M32.414 59.35L50.376 70.5H72.5v-71H33.728L26.5 13.381l19.057 27.08L32.414 59.35z"
                                                                fill="#FFAEFC"
                                                                transform="translate(6 -6) rotate(238 40 40) scale(1.3)"
                                                              ></path>
                                                              <path
                                                                filter="url(#prefix__filter0_f)"
                                                                d="M22.216 24L0 46.75l14.108 38.129L78 86l-3.081-59.276-22.378 4.005 12.972 20.186-23.35 27.395L22.215 24z"
                                                                fill="#5CFFFF"
                                                                transform="translate(1 -1) rotate(177 40 40) scale(1.3)"
                                                                style={{
                                                                  mixBlendMode:
                                                                    "overlay",
                                                                }}
                                                              ></path>
                                                            </g>
                                                            <defs>
                                                              <filter
                                                                id="prefix__filter0_f"
                                                                filterUnits="userSpaceOnUse"
                                                                colorInterpolationFilters="sRGB"
                                                              >
                                                                <feFlood
                                                                  floodOpacity="0"
                                                                  result="BackgroundImageFix"
                                                                ></feFlood>
                                                                <feBlend
                                                                  in="SourceGraphic"
                                                                  in2="BackgroundImageFix"
                                                                  result="shape"
                                                                ></feBlend>
                                                                <feGaussianBlur
                                                                  stdDeviation="7"
                                                                  result="effect1_foregroundBlur"
                                                                ></feGaussianBlur>
                                                              </filter>
                                                            </defs>
                                                          </svg>
                                                        </div>
                                                      </div>
                                                      <div className="flex flex-col">
                                                        <div className="flex items-center">
                                                          <div className="overflow-hidden">
                                                            <div className="mr-8 flex items-center">
                                                              <div className="flex items-center gap-12 truncate max-w-full">
                                                                <a
                                                                  className="typo-module_t-body-md-strong__B-Sd1 typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9 link-module_link__Nwimt link-module_underline-mode-onlyWhenHover__alkql link-module_monochrome__yqKNC block truncate max-w-full"
                                                                  href="/validator/0x2c96d7b5d1887222025ec9f0be92fb91065d9d87"
                                                                >
                                                                  Third Bunny
                                                                </a>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell"
                                                style={{
                                                  textAlign: "right",
                                                }}
                                              >
                                                <div className="inline-flex">
                                                  <div>
                                                    <div className="flex items-center">
                                                      <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 border-tc-border-text-subdued mr-4 flex items-end border-0 border-b border-dashed">
                                                        10.62
                                                        <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh ml-[2px]">
                                                          %
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell"
                                                style={{
                                                  textAlign: "right",
                                                }}
                                              >
                                                <div className="flex items-center gap-8 overflow-hidden justify-end">
                                                  <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate">
                                                    252,033.87
                                                  </div>
                                                  <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh">
                                                    RON
                                                  </div>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell"
                                                style={{
                                                  textAlign: "right",
                                                }}
                                              >
                                                <div className="inline-flex">
                                                  <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh">
                                                    --
                                                  </div>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell"
                                                style={{
                                                  textAlign: "right",
                                                }}
                                              >
                                                <div className="inline-flex">
                                                  <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3">
                                                    <div className="badge-module_badge__kTvKz badge-module_success-solid__6ZYL7 badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                                                      <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs badge-module_has-left-icon__x3ijB">
                                                        <div className="badge-module_side-dot__hOn9b badge-module_success__E5Zz4"></div>
                                                        Active
                                                      </span>
                                                    </div>
                                                  </div>
                                                </div>
                                              </td>
                                              <td
                                                className="ronin-table-cell"
                                                style={{
                                                  textAlign: "right",
                                                }}
                                              >
                                                <div>
                                                  <button className="button-module_button__Z331g button-module_intent-primary__SAO1x button-module_size-small__Nes6W button-module_button-root__0roWY">
                                                    Stake
                                                  </button>
                                                </div>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="pagination-module_container__YETeD mt-24">
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
                                          <svg
                                            viewBox="0 0 20 20"
                                            width="20"
                                            height="20"
                                          >
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
                                          <svg
                                            viewBox="0 0 20 20"
                                            width="20"
                                            height="20"
                                          >
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
                                <div
                                  role="tabpanel"
                                  tabIndex="-1"
                                  aria-hidden="true"
                                  className="dango-tabs-tabpane"
                                  id="rc-tabs-1-panel-renounced"
                                  aria-labelledby="rc-tabs-1-tab-renounced"
                                  style={{ display: "none" }}
                                ></div>
                              </div>
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
                    id="rc-tabs-0-panel-staking"
                    aria-labelledby="rc-tabs-0-tab-staking"
                    style={{ display: "none" }}
                  ></div>
                  <div
                    role="tabpanel"
                    tabIndex="-1"
                    aria-hidden="true"
                    className="dango-tabs-tabpane"
                    id="rc-tabs-0-panel-activity"
                    aria-labelledby="rc-tabs-0-tab-activity"
                    style={{ display: "none" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Staking;
