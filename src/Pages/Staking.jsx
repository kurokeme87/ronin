import "./Staking.css";
const Staking = () => {
  return (
    <div className="mx-auto max-w-[1180px]">
      <header className="sticky top-0 z-sticky flex h-[64px] items-center justify-between bg-tc-bg md:h-[80px]">
        <div className="flex items-center gap-24 2xl:hidden">
          <svg
            className="cursor-pointer text-tc-icon"
            viewBox="0 0 20 20"
            width="24"
            height="24"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M17 3H3c-.6 0-1 .4-1 1s.4 1 1 1h14c.6 0 1-.4 1-1s-.4-1-1-1Zm0 6H3c-.6 0-1 .4-1 1s.4 1 1 1h14c.6 0 1-.4 1-1s-.4-1-1-1ZM3 15h14c.6 0 1 .4 1 1s-.4 1-1 1H3c-.6 0-1-.4-1-1s.4-1 1-1Z"
              clipRule="evenodd"
            ></path>
          </svg>
          <a
            className="typo-module_t-body-md-strong__B-Sd1 typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9 link-module_link__Nwimt link-module_underline-mode-onlyWhenHover__alkql undefined"
            href="/"
          >
            <svg
              width="99"
              height="32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.00012207 2.46163V22.2039C0.000354831 22.5726 0.0842659 22.9366 0.245656 23.2689C0.407047 23.6013 0.641793 23.8935 0.932554 24.1239L10.3346 31.595C10.6653 31.8572 11.0764 32 11.5001 32C11.9238 32 12.3349 31.8572 12.6657 31.595L22.0677 24.1239C22.3585 23.8935 22.5932 23.6013 22.7546 23.2689C22.916 22.9366 22.9999 22.5726 23.0001 22.2039V2.46163C23.0001 1.80876 22.7382 1.18264 22.2718 0.720994C21.8055 0.259349 21.1731 0 20.5136 0H2.48661C1.82715 0 1.1947 0.259349 0.728397 0.720994C0.26209 1.18264 0.00012207 1.80876 0.00012207 2.46163V2.46163Z"
                fill="#004DE5"
              ></path>
              <path
                d="M18.2045 11.4066V7.1038C18.2045 6.53321 17.9784 5.98599 17.5759 5.58253C17.1734 5.17906 16.6276 4.95239 16.0584 4.95239H6.93783C6.36867 4.95239 5.82282 5.17906 5.42037 5.58253C5.01791 5.98599 4.79181 6.53321 4.79181 7.1038V19.5887C4.79201 19.911 4.86443 20.2291 5.00372 20.5196C5.14301 20.81 5.34562 21.0654 5.59657 21.2668L8.91754 23.9399C8.95696 23.972 9.00465 23.9922 9.05506 23.9982C9.10547 24.0041 9.15654 23.9956 9.20233 23.9737C9.24812 23.9517 9.28676 23.9172 9.31374 23.8741C9.34073 23.831 9.35496 23.7811 9.35479 23.7302V14.9027C9.35479 14.8313 9.38305 14.7629 9.43336 14.7125C9.48367 14.6621 9.5519 14.6337 9.62304 14.6337H12.0373C12.4642 14.6337 12.8736 14.8037 13.1754 15.1063C13.4773 15.4089 13.6468 15.8194 13.6468 16.2473V23.7302C13.6469 23.7808 13.6612 23.8304 13.6881 23.8733C13.715 23.9162 13.7535 23.9505 13.799 23.9724C13.8446 23.9944 13.8954 24.0029 13.9456 23.9972C13.9957 23.9914 14.0433 23.9716 14.0827 23.9399L17.4037 21.2668C17.6547 21.0654 17.8573 20.81 17.9966 20.5196C18.1359 20.2291 18.2083 19.911 18.2085 19.5887V15.7094C18.2085 15.1389 17.9824 14.5916 17.5799 14.1882C17.1775 13.7847 16.6316 13.558 16.0625 13.558C16.6309 13.557 17.1757 13.3298 17.5773 12.9265C17.9789 12.5231 18.2045 11.9765 18.2045 11.4066ZM12.0346 12.4823H9.62036C9.54922 12.4823 9.48098 12.454 9.43068 12.4036C9.38037 12.3531 9.35211 12.2847 9.35211 12.2134V7.37273C9.35211 7.3014 9.38037 7.233 9.43068 7.18257C9.48098 7.13214 9.54922 7.1038 9.62036 7.1038H13.3759C13.447 7.1038 13.5153 7.13214 13.5656 7.18257C13.6159 7.233 13.6442 7.3014 13.6442 7.37273V10.8688C13.6442 11.2967 13.4746 11.7071 13.1727 12.0097C12.8709 12.3123 12.4615 12.4823 12.0346 12.4823Z"
                fill="url(#paint0_linear_ronin_logo)"
              ></path>
              <path
                d="M38.5473 22.8V18.3986H41.8099L44.7659 22.8H48.5759L45.1381 17.7214C46.1454 17.27 46.9227 16.6192 47.4701 15.769C48.0175 14.9188 48.2912 13.9069 48.2912 12.7331C48.2912 11.5594 48.0212 10.5437 47.4811 9.686C46.9409 8.82829 46.1709 8.16619 45.171 7.69971C44.1711 7.23324 42.9923 7 41.6347 7H35.0001V22.8H38.5473ZM41.6003 15.6H38.685V10H41.6003C42.6751 10 43.4923 10.241 44.0518 10.723C44.6113 11.2049 44.891 11.8973 44.891 12.8C44.891 13.6874 44.6113 14.376 44.0518 14.8656C43.4923 15.3552 42.6751 15.6 41.6003 15.6ZM56.6354 23C57.8812 23 58.9952 22.7309 59.9773 22.1926C60.9593 21.6543 61.7289 20.9076 62.2859 19.9523C62.8428 18.9971 63.1213 17.913 63.1213 16.7C63.1213 15.487 62.8428 14.4029 62.2859 13.4477C61.7289 12.4924 60.9593 11.7457 59.9773 11.2074C58.9952 10.6691 57.8812 10.4 56.6354 10.4C55.3895 10.4 54.2718 10.6691 53.2824 11.2074C52.2931 11.7457 51.5199 12.4924 50.9629 13.4477C50.4059 14.4029 50.1274 15.487 50.1274 16.7C50.1274 17.913 50.4059 18.9971 50.9629 19.9523C51.5199 20.9076 52.2931 21.6543 53.2824 22.1926C54.2718 22.7309 55.3895 23 56.6354 23ZM56.6353 20.2C55.7608 20.2 55.0394 19.8919 54.4709 19.2758C53.9025 18.6597 53.6183 17.8345 53.6183 16.8C53.6183 15.7655 53.9025 14.9403 54.4709 14.3242C55.0394 13.7081 55.7608 13.4 56.6353 13.4C57.5098 13.4 58.2276 13.7081 58.7887 14.3242C59.3499 14.9403 59.6304 15.7655 59.6304 16.8C59.6304 17.8345 59.3499 18.6597 58.7887 19.2758C58.2276 19.8919 57.5098 20.2 56.6353 20.2ZM68.6652 22.8V16.759C68.6652 15.6689 68.9202 14.8475 69.4304 14.2949C69.9405 13.7422 70.6255 13.4659 71.4854 13.4659C72.2579 13.4659 72.8482 13.7044 73.2563 14.1813C73.6643 14.6582 73.8684 15.3812 73.8684 16.3502V22.8H77.2789V15.8051C77.2789 14.0186 76.8307 12.6711 75.9344 11.7626C75.038 10.8542 73.8611 10.4 72.4036 10.4C71.602 10.4 70.866 10.54 70.1955 10.8201C69.5251 11.1002 68.964 11.4977 68.5121 12.0125V10.5817H65.2547V22.8H68.6652ZM82.1274 9C82.7579 9 83.271 8.8046 83.6669 8.41379C84.0628 8.02299 84.2607 7.52874 84.2607 6.93103C84.2607 6.37931 84.0628 5.91954 83.6669 5.55172C83.271 5.18391 82.7579 5 82.1274 5C81.4969 5 80.9838 5.19157 80.5879 5.57471C80.192 5.95785 79.9941 6.43295 79.9941 7C79.9941 7.56705 80.192 8.04215 80.5879 8.42529C80.9838 8.80843 81.4969 9 82.1274 9ZM83.8728 22.8V10.6H80.3819V22.8H83.8728ZM90.3864 22.8V16.759C90.3864 15.6689 90.6415 14.8475 91.1516 14.2949C91.6617 13.7422 92.3467 13.4659 93.2066 13.4659C93.9791 13.4659 94.5694 13.7044 94.9775 14.1813C95.3856 14.6582 95.5896 15.3812 95.5896 16.3502V22.8H99.0001V15.8051C99.0001 14.0186 98.5519 12.6711 97.6556 11.7626C96.7592 10.8542 95.5823 10.4 94.1248 10.4C93.3232 10.4 92.5872 10.54 91.9167 10.8201C91.2463 11.1002 90.6852 11.4977 90.2334 12.0125V10.5817H86.9759V22.8H90.3864Z"
                fill="currentColor"
                className="style_content__v85Qk"
              ></path>
            </svg>
          </a>
        </div>
        <div className="flex items-center gap-24 2xl:hidden">
          <div>
            <svg
              className="cursor-pointer text-tc-icon md:hidden"
              viewBox="0 0 20 20"
              width="24"
              height="24"
            >
              <path
                fill="currentColor"
                d="M13.742 12.328a6.524 6.524 0 1 0-1.414 1.414l3.965 3.965a1 1 0 0 0 1.414-1.414l-3.965-3.965ZM4 8.5a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0Z"
              ></path>
            </svg>
            <div className="hidden w-[320px] md:block">
              <div className="form-item-module_form__3-Rfq text-field-module_input-root__PSsoe">
                <div className="input-module_container__Gch8D input-module_default__Rk4yp max-w-full md:w-[320px]">
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
                      tabIndex="1"
                      placeholder="Address, Tx Hash, Block, etc."
                      id="1"
                      className="input-module_formControl__oYbNL input-module_hasPrefix__Zh5xG input-module_hasSuffix__hiMdC"
                      value=""
                    />
                    <span className="input-module_suffix__nC3z-">
                      <div className="inline-flex items-center gap-4">
                        <svg
                          className="hidden cursor-pointer md:hidden"
                          viewBox="0 0 20 20"
                          width="20"
                          height="20"
                        >
                          <path
                            fill="currentColor"
                            d="M10 4c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6Zm2.386 7.326a.375.375 0 0 1 0 .53l-.53.53a.375.375 0 0 1-.53 0L10 11.062l-1.326 1.325a.375.375 0 0 1-.53 0l-.53-.53a.375.375 0 0 1 0-.53L8.94 10 7.614 8.674a.375.375 0 0 1 0-.53l.53-.53a.375.375 0 0 1 .53 0L10 8.94l1.326-1.326a.375.375 0 0 1 .53 0l.53.53a.375.375 0 0 1 0 .53L11.062 10l1.325 1.326Z"
                          ></path>
                        </svg>
                        <svg viewBox="0 0 20 20" width="20" height="20">
                          <g clipPath="url(#slash_svg__a)">
                            <path
                              fill="var(--dg-tc-sf-dim)"
                              d="M0 4a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4Z"
                            ></path>
                            <path
                              fill="var(--dg-tc-icon)"
                              d="M11.65 4.176h-.978L8 15.109h.979L11.65 4.176Z"
                            ></path>
                          </g>
                          <defs>
                            <clipPath id="slash_svg__a">
                              <path fill="#fff" d="M0 0h20v20H0z"></path>
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <svg
            className="cursor-pointer text-tc-icon"
            viewBox="0 0 20 20"
            width="24"
            height="24"
          >
            <path
              fill="currentColor"
              d="M13 11a1 1 0 1 0 2 0 1 1 0 0 0-2 0Z"
            ></path>
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M12.5 3A1.5 1.5 0 0 1 14 4.5H5.5V5H16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.182A2.182 2.182 0 0 1 2 14.818V4.5c0 .16.026.276.074.36A.942.942 0 0 1 2 4.5C2 3.671 3.171 3 4 3h8.5ZM14 9a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
        <div className="hidden 2xl:flex">
          <div className="w-[320px]">
            <div className="form-item-module_form__3-Rfq text-field-module_input-root__PSsoe">
              <div className="input-module_container__Gch8D input-module_default__Rk4yp max-w-full md:w-[320px]">
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
                    tabIndex="1"
                    placeholder="Address, Tx Hash, Block, etc."
                    id="2"
                    className="input-module_formControl__oYbNL input-module_hasPrefix__Zh5xG input-module_hasSuffix__hiMdC"
                    value=""
                  />
                  <span className="input-module_suffix__nC3z-">
                    <div className="inline-flex items-center gap-4">
                      <svg
                        className="hidden cursor-pointer md:hidden"
                        viewBox="0 0 20 20"
                        width="20"
                        height="20"
                      >
                        <path
                          fill="currentColor"
                          d="M10 4c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6Zm2.386 7.326a.375.375 0 0 1 0 .53l-.53.53a.375.375 0 0 1-.53 0L10 11.062l-1.326 1.325a.375.375 0 0 1-.53 0l-.53-.53a.375.375 0 0 1 0-.53L8.94 10 7.614 8.674a.375.375 0 0 1 0-.53l.53-.53a.375.375 0 0 1 .53 0L10 8.94l1.326-1.326a.375.375 0 0 1 .53 0l.53.53a.375.375 0 0 1 0 .53L11.062 10l1.325 1.326Z"
                        ></path>
                      </svg>
                      <svg viewBox="0 0 20 20" width="20" height="20">
                        <g clipPath="url(#slash_svg__a)">
                          <path
                            fill="var(--dg-tc-sf-dim)"
                            d="M0 4a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4Z"
                          ></path>
                          <path
                            fill="var(--dg-tc-icon)"
                            d="M11.65 4.176h-.978L8 15.109h.979L11.65 4.176Z"
                          ></path>
                        </g>
                        <defs>
                          <clipPath id="slash_svg__a">
                            <path fill="#fff" d="M0 0h20v20H0z"></path>
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden items-center gap-8 2xl:flex">
          <div className="dropdown-module_container__iY02y">
            <div className="dropdown-module_triggerWrapper__nVet0">
              <div className="form-item-module_form__3-Rfq">
                <button
                  className="select-module_select-root__iUjOH select-module_wrapper__Hc5F3 select-module_default__LhAiz select-module_variant-filled__mqpkY select-module_has-prefix__uq3r1 select-module_has-suffix__cxAEt"
                  type="button"
                >
                  <span className="select-module_prefix__CcSAb">
                    <svg viewBox="0 0 20 20" width="20" height="20">
                      <rect
                        width="16"
                        height="16"
                        x="2"
                        y="2"
                        fill="var(--dg-tc-icon-success)"
                        fillOpacity="0.15"
                        rx="8"
                      ></rect>
                      <rect
                        width="8"
                        height="8"
                        x="6"
                        y="6"
                        fill="var(--dg-tc-icon-success)"
                        rx="4"
                      ></rect>
                    </svg>
                  </span>
                  <div className="select-module_input-wrapper__2e9Sr select-module_has-value__gkGdm">
                    <div className="select-module_input__QFtX8">
                      <div className="dropdown-module_wrapper-selected-option__TdgBl">
                        <div className="dropdown-module_selected-option__TFYEe">
                          Mainnet
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
          <button className="button-module_button__Z331g button-module_intent-primary__SAO1x button-module_size-default__caw9O button-module_button-root__0roWY">
            <span className="button-module_icon-wrapper__VV4f-">
              <svg
                className="button-module_icon__-nXel"
                viewBox="0 0 20 20"
                width="16"
                height="16"
              >
                <path
                  fill="currentColor"
                  d="M13 11a1 1 0 1 0 2 0 1 1 0 0 0-2 0Z"
                ></path>
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M12.5 3A1.5 1.5 0 0 1 14 4.5H5.5V5H16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.182A2.182 2.182 0 0 1 2 14.818V4.5c0 .16.026.276.074.36A.942.942 0 0 1 2 4.5C2 3.671 3.171 3 4 3h8.5ZM14 9a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
            Connect Wallet
          </button>
        </div>
      </header>
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
