import React, { useState } from "react";
import "./Swap.css";
import { WalletSDK } from "@roninnetwork/wallet-sdk";
import BottomAssetPopup from "../components/BottomAssetPopup";
import AssetPopup from "../components/AssetPopup";
const Swap = () => {
  const [userAddress, setUserAddress] = useState();
  const [isAssetPopup, setIsAssetPopup] = useState(false);
  const [isBottomAssetPopup, setIsBottomAssetPopup] = useState(false);
  const [topAsset, setTopAsset] = useState(null);
  const [bottomAsset, setBottomAsset] = useState(null);
  function checkRoninInstalled() {
    if ("ronin" in window) {
      return true;
    }

    window.open("https://wallet.roninchain.com", "_blank");
    return false;
  }

  async function connectRoninWallet(props) {
    const sdk = new WalletSDK();
    await sdk.connectInjected();

    const isInstalled = checkRoninInstalled();
    if (isInstalled === false) {
      return;
    }

    const accounts = await sdk.requestAccounts();
    if (accounts) {
      setUserAddress(accounts);
    }
  }

  console.log(topAsset, bottomAsset);
  return (
    <>
      <div className=" flex-1 overflow-x-hidden overflow-y-scroll px-[16px] md:px-[54px]">
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
              <button
                onClick={() => {
                  connectRoninWallet();
                }}
                className="button-module_button__Z331g button-module_intent-primary__SAO1x button-module_size-default__caw9O button-module_button-root__0roWY"
              >
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
            <div className="grid place-items-center md:mt-16">
              <div className="views_Container__Idxi2">
                <div className="BoxContainer_BoxContainer__2rbE4">
                  <div className="OverlayBgMobile_Container__GiE6w"></div>
                  <div className="SwapHeader_Container__ckJ_y">
                    <div className="typo-module_t-display-md__KVUIu typo-module_mobile-t-display-xs__Qj9y2 typo-module_neutral__9orA9">
                      Swap
                    </div>
                    <div className="SwapHeader_RightSection__q34qc">
                      <button className="button-module_button__Z331g button-module_intent-default__f1RNz button-module_size-large__Nx98S button-module_button-root__0roWY RefetchPriceBtn_RefreshPriceBtn__CBgLz">
                        <div className="RefetchPriceBtn_CircleLoaderIcon__uI6N8"></div>
                      </button>
                      <div className="UserSetting_UserSettingContainer___Gi50">
                        <div>
                          <button className="button-module_button__Z331g button-module_intent-default__f1RNz button-module_size-default__caw9O button-module_icon-button__-UBF4 button-module_button-root__0roWY UserSetting_SettingIcon__Ojuqt">
                            <span className="button-module_icon-wrapper__VV4f-">
                              <svg
                                className="button-module_icon__-nXel"
                                viewBox="0 0 20 20"
                                width="16"
                                height="16"
                              >
                                <path
                                  fill="currentColor"
                                  d="m17.621 9.015-1.8-.451A5.99 5.99 0 0 0 15.13 6.9l.956-1.593a.5.5 0 0 0-.075-.611l-.711-.707a.5.5 0 0 0-.611-.075L13.1 4.87a5.99 5.99 0 0 0-1.664-.69l-.451-1.801A.5.5 0 0 0 10.5 2h-1a.5.5 0 0 0-.485.379l-.451 1.8A5.992 5.992 0 0 0 6.9 4.87l-1.593-.956a.5.5 0 0 0-.611.075l-.707.711a.5.5 0 0 0-.075.611L4.87 6.9a5.99 5.99 0 0 0-.69 1.664l-1.8.451A.5.5 0 0 0 2 9.5v1a.5.5 0 0 0 .379.485l1.8.451c.145.586.378 1.147.691 1.664l-.956 1.593a.5.5 0 0 0 .075.611l.707.707a.5.5 0 0 0 .611.075L6.9 15.13a5.989 5.989 0 0 0 1.664.69l.451 1.8A.5.5 0 0 0 9.5 18h1a.5.5 0 0 0 .485-.379l.451-1.8a5.988 5.988 0 0 0 1.664-.69l1.593.956a.5.5 0 0 0 .611-.075l.707-.707a.5.5 0 0 0 .075-.611L15.13 13.1a5.988 5.988 0 0 0 .69-1.664l1.8-.451A.5.5 0 0 0 18 10.5v-1a.5.5 0 0 0-.379-.485ZM10 13a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"
                                ></path>
                              </svg>
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="body_CurrencyInputWrapper__l7RCv">
                    <div
                      id="currency-input"
                      className="CurrencyInputPanel_Container__PeTFQ"
                    >
                      <div className="typo-module_t-body-sm__UYoyX typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh">
                        You sell
                      </div>
                      <div className="CurrencyInputPanel_CurrencyInputSection___Kf_5">
                        {topAsset ? (
                          <button
                            onClick={() => {
                              setIsAssetPopup(true);
                            }}
                            className="button-module_button__Z331g button-module_intent-default__f1RNz button-module_size-default__caw9O button-module_button-root__0roWY"
                            style={{ height: "36px", padding: "4px 8px" }}
                          >
                            <div className="CurrencyInputPanel_CurrencySelectBtn__u4vSI">
                              <img
                                alt="token logo"
                                src={`https://cdn.skymavis.com/ronin/2020/erc20/${topAsset?.id}/logo.png`}
                                style={{ width: "24px", height: "24px" }}
                              />
                              <div className="typo-module_t-display-xs__6p9-C typo-module_mobile-t-display-xs__Qj9y2 typo-module_neutral__9orA9">
                                {topAsset?.symbol}
                              </div>
                              <svg viewBox="0 0 20 20" width="20" height="20">
                                <path
                                  fill="currentColor"
                                  fillRule="evenodd"
                                  d="M5.47 7.47a.75.75 0 0 1 1.06 0L10 10.94l3.47-3.47a.75.75 0 1 1 1.06 1.06l-4 4a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 0 1 0-1.06Z"
                                  clipRule="evenodd"
                                ></path>
                              </svg>
                            </div>
                          </button>
                        ) : (
                          <button
                            onClick={() => {
                              setIsAssetPopup(true);
                            }}
                            className="button-module_button__Z331g button-module_intent-default__f1RNz button-module_size-default__caw9O button-module_button-root__0roWY"
                            style={{ height: "36px", padding: "4px 8px" }}
                          >
                            <div className="CurrencyInputPanel_CurrencySelectBtn__u4vSI">
                              <img
                                alt="token logo"
                                src="https://cdn.skymavis.com/ronin/2020/ron/logo.png"
                                style={{ width: "24px", height: "24px" }}
                              />
                              <div className="typo-module_t-display-xs__6p9-C typo-module_mobile-t-display-xs__Qj9y2 typo-module_neutral__9orA9">
                                RON
                              </div>
                              <svg viewBox="0 0 20 20" width="20" height="20">
                                <path
                                  fill="currentColor"
                                  fillRule="evenodd"
                                  d="M5.47 7.47a.75.75 0 0 1 1.06 0L10 10.94l3.47-3.47a.75.75 0 1 1 1.06 1.06l-4 4a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 0 1 0-1.06Z"
                                  clipRule="evenodd"
                                ></path>
                              </svg>
                            </div>
                          </button>
                        )}
                        <input
                          className="numerical-input_Input__VrzdR"
                          inputMode="decimal"
                          autoComplete="off"
                          autoCorrect="off"
                          type="text"
                          pattern="^[0-9]*[.,]?[0-9]*$"
                          placeholder="0"
                          minLength="1"
                          maxLength="79"
                          spellCheck="false"
                          value=""
                          style={{ color: "var(--dg-tc-text)", cursor: "auto" }}
                        />
                      </div>
                    </div>
                    <div className="body_SwitchBtn__n4TXP">
                      <button className="button-module_button__Z331g button-module_intent-default__f1RNz button-module_size-small__Nes6W button-module_icon-button__-UBF4 button-module_variant-plain__hxRYr button-module_button-root__0roWY body_SwitchIcon__Wcbhs">
                        <span className="button-module_icon-wrapper__VV4f-">
                          <svg
                            className="button-module_icon__-nXel"
                            viewBox="0 0 20 20"
                            width="16"
                            height="16"
                          >
                            <path
                              d="M13 14.6V3c0-.6.4-1 1-1s1 .4 1 1v11.6l1.3-1.3c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-3 3c-.4.4-1 .4-1.4 0l-3-3c-.2-.2-.3-.4-.3-.7 0-.3.1-.5.3-.7.4-.4 1-.4 1.4 0l1.3 1.3ZM7 5.4V17c0 .6-.4 1-1 1s-1-.4-1-1V5.4L3.7 6.7c-.4.4-1 .4-1.4 0-.2-.2-.3-.4-.3-.7 0-.3.1-.5.3-.7l3-3c.4-.4 1-.4 1.4 0l3 3c.4.4.4 1 0 1.4-.4.4-1 .4-1.4 0L7 5.4Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </span>
                      </button>
                    </div>
                    <div
                      id="currency-output"
                      className="CurrencyInputPanel_Container__PeTFQ"
                    >
                      <div className="typo-module_t-body-sm__UYoyX typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh">
                        You buy
                      </div>
                      <div className="CurrencyInputPanel_CurrencyInputSection___Kf_5">
                        {bottomAsset ? (
                          <button
                            onClick={() => {
                              setIsAssetPopup(true);
                            }}
                            className="button-module_button__Z331g button-module_intent-default__f1RNz button-module_size-default__caw9O button-module_button-root__0roWY"
                            style={{ height: "36px", padding: "4px 8px" }}
                          >
                            <div className="CurrencyInputPanel_CurrencySelectBtn__u4vSI">
                              <img
                                alt="token logo"
                                src={`https://cdn.skymavis.com/ronin/2020/erc20/${bottomAsset?.id}/logo.png`}
                                style={{ width: "24px", height: "24px" }}
                              />
                              <div className="typo-module_t-display-xs__6p9-C typo-module_mobile-t-display-xs__Qj9y2 typo-module_neutral__9orA9">
                                {bottomAsset?.symbol}
                              </div>
                              <svg viewBox="0 0 20 20" width="20" height="20">
                                <path
                                  fill="currentColor"
                                  fillRule="evenodd"
                                  d="M5.47 7.47a.75.75 0 0 1 1.06 0L10 10.94l3.47-3.47a.75.75 0 1 1 1.06 1.06l-4 4a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 0 1 0-1.06Z"
                                  clipRule="evenodd"
                                ></path>
                              </svg>
                            </div>
                          </button>
                        ) : (
                          <button
                            onClick={() => {
                              setIsBottomAssetPopup(true);
                            }}
                            className="button-module_button__Z331g button-module_intent-primary__SAO1x button-module_size-default__caw9O button-module_button-root__0roWY"
                            style={{ height: "36px", padding: "4px 8px" }}
                          >
                            <div className="CurrencyInputPanel_CurrencySelectBtn__u4vSI">
                              <div className="typo-module_t-display-xs__6p9-C typo-module_mobile-t-display-xs__Qj9y2 typo-module_neutral__9orA9">
                                <div className="typo-module_t-body-sm__UYoyX typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 CurrencyInputPanel_TextSelectToken__5xf6d">
                                  Select token
                                </div>
                              </div>
                              <svg viewBox="0 0 20 20" width="20" height="20">
                                <path
                                  fill="currentColor"
                                  fillRule="evenodd"
                                  d="M5.47 7.47a.75.75 0 0 1 1.06 0L10 10.94l3.47-3.47a.75.75 0 1 1 1.06 1.06l-4 4a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 0 1 0-1.06Z"
                                  clipRule="evenodd"
                                ></path>
                              </svg>
                            </div>
                          </button>
                        )}

                        <input
                          className="numerical-input_Input__VrzdR"
                          inputMode="decimal"
                          autoComplete="off"
                          autoCorrect="off"
                          type="text"
                          pattern="^[0-9]*[.,]?[0-9]*$"
                          placeholder="0"
                          minLength="1"
                          maxLength="79"
                          spellCheck="false"
                          value=""
                          style={{ color: "var(--dg-tc-text)", cursor: "auto" }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="footer_ActionButtonContainer__XrhlS">
                    <button
                      onClick={() => {
                        connectRoninWallet();
                      }}
                      className="button-module_button__Z331g button-module_intent-primary__SAO1x button-module_size-large__Nx98S button-module_full__Lcze1 button-module_button-root__0roWY"
                    >
                      Connect Wallet
                    </button>
                  </div>
                </div>
                <div className="SuggestionWidget_Container__5wKWn">
                  <a href="/liquidity"></a>
                  <a className="typo-module_t-body-md-strong__B-Sd1 typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9 link-module_link__Nwimt undefined SuggestionWidget_Widget__VIuge">
                    <div className="SuggestionWidget_BrightIcon__O6xVZ">
                      <svg viewBox="0 0 20 20" width="9" height="9">
                        <path
                          fill="currentColor"
                          fillRule="evenodd"
                          d="M14.47 7.78a.75.75 0 0 0 1.28-.53 1.5 1.5 0 0 1 1.5-1.5.75.75 0 1 0 0-1.5 1.5 1.5 0 0 1-1.5-1.5.75.75 0 1 0-1.5 0 1.5 1.5 0 0 1-1.5 1.5.75.75 0 1 0 0 1.5 1.5 1.5 0 0 1 1.5 1.5c0 .199.079.39.22.53Zm-7.177 9.927A1 1 0 0 0 9 17a4 4 0 0 1 4-4 1 1 0 0 0 0-2 4 4 0 0 1-4-4 1 1 0 0 0-2 0 4 4 0 0 1-4 4 1 1 0 0 0 0 2 4 4 0 0 1 4 4 1 1 0 0 0 .293.707Z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <div className="typo-module_t-body-sm__UYoyX typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 SuggestionWidget_GradientText__W_8kO">
                      Provide Liquidity
                    </div>
                    <div className="typo-module_t-caption__NjuOd typo-module_mobile-t-caption__aBuJA typo-module_neutral__9orA9 typo-module_dim__qoQFh">
                      Earn pool fee &amp; extra rewards
                    </div>
                    <div className="SuggestionWidget_WidgetSvg__9lPfG">
                      <svg
                        width="90"
                        height="72"
                        viewBox="0 0 90 72"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="0.3">
                          <mask
                            id="mask0_19892_77884"
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="90"
                            height="72"
                            style={{ maskType: "alpha" }}
                          >
                            <rect
                              width="90"
                              height="72"
                              fill="url(#paint0_linear_19892_77884)"
                            ></rect>
                          </mask>
                          <g mask="url(#mask0_19892_77884)">
                            <path
                              d="M2.26135 40.498H32.2028C32.4794 40.498 32.7407 40.6094 32.9295 40.8114C37.764 45.9843 46.6065 55.74 45.4872 55.74H73.0449C73.5972 55.74 74.0449 56.1877 74.0449 56.74V86.748C74.0449 87.3003 73.5972 87.748 73.0449 87.748H45.4872H16.5017C15.9494 87.748 15.5017 87.3003 15.5017 86.748V55.74L1.56495 42.2157C0.920384 41.5902 1.36319 40.498 2.26135 40.498Z"
                              fill="url(#paint1_linear_19892_77884)"
                              fillOpacity="0.4"
                            ></path>
                            <path
                              d="M45.4872 55.74C46.6065 55.74 37.764 45.9843 32.9295 40.8114C32.7407 40.6094 32.4794 40.498 32.2028 40.498H2.26135C1.36319 40.498 0.920384 41.5902 1.56495 42.2157L15.5017 55.74M45.4872 55.74C44.3449 55.74 25.0209 55.74 15.5017 55.74M45.4872 55.74V87.748M45.4872 55.74H73.0449C73.5972 55.74 74.0449 56.1877 74.0449 56.74V86.748C74.0449 87.3003 73.5972 87.748 73.0449 87.748H45.4872M15.5017 55.74V86.748C15.5017 87.3003 15.9494 87.748 16.5017 87.748H45.4872"
                              stroke="white"
                            ></path>
                            <path
                              d="M60.382 40.498H87.3927C88.2819 40.498 88.7288 41.5717 88.1023 42.2027L74.4486 55.9527C74.2609 56.1417 74.0103 56.248 73.7438 56.248H47.1415C46.0272 56.248 54.8283 46.171 59.6428 40.8249C59.8321 40.6147 60.099 40.498 60.382 40.498Z"
                              fill="url(#paint2_linear_19892_77884)"
                              stroke="white"
                            ></path>
                            <path
                              d="M59.801 4.77909L68.4965 2.43181L67.8778 11.4606L58.9617 14.008L59.801 4.77909Z"
                              fill="white"
                              fillOpacity="0.3"
                              stroke="white"
                              strokeLinejoin="round"
                            ></path>
                            <path
                              d="M45.6103 34.8714C41.1103 28.1214 37.5998 17.9277 25.3596 16.8723C15.1609 15.9929 20.0337 30.5719 36.6123 29.2485M45.6088 25.8734C48.9838 23.6234 52.3588 20.2484 54.6088 17.9984"
                              stroke="white"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </g>
                        </g>
                        <defs>
                          <linearGradient
                            id="paint0_linear_19892_77884"
                            x1="40.5"
                            y1="86"
                            x2="40.5"
                            y2="4.00001"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#D9D9D9" stopOpacity="0"></stop>
                            <stop offset="1"></stop>
                          </linearGradient>
                          <linearGradient
                            id="paint1_linear_19892_77884"
                            x1="32.6363"
                            y1="42.0222"
                            x2="37.2886"
                            y2="87.2697"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="white" stopOpacity="0"></stop>
                            <stop
                              offset="0.731428"
                              stopColor="white"
                              stopOpacity="0.54815"
                            ></stop>
                            <stop offset="1" stopColor="white"></stop>
                          </linearGradient>
                          <linearGradient
                            id="paint2_linear_19892_77884"
                            x1="90.4268"
                            y1="38.3139"
                            x2="87.5391"
                            y2="59.1066"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#0059FF"></stop>
                            <stop offset="0.494792" stopColor="#615EFF"></stop>
                            <stop offset="1" stopColor="#42F5FB"></stop>
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </a>
                  <a href="/staking"></a>
                  <a className="typo-module_t-body-md-strong__B-Sd1 typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9 link-module_link__Nwimt undefined SuggestionWidget_Widget__VIuge">
                    <div className="typo-module_t-body-sm__UYoyX typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 SuggestionWidget_GradientText__W_8kO">
                      RON Staking
                    </div>
                    <div className="typo-module_t-caption__NjuOd typo-module_mobile-t-caption__aBuJA typo-module_neutral__9orA9 typo-module_dim__qoQFh">
                      Stake RON and earn rewards
                    </div>
                    <div className="SuggestionWidget_WidgetSvg__9lPfG">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="69"
                        height="56"
                        viewBox="0 0 69 56"
                        fill="none"
                      >
                        <g opacity="0.15">
                          <path
                            d="M7.56944 13.2963C7.56944 12.7601 6.53268 12.3051 5.10775 12.1578C4.97836 10.5379 4.58024 9.35596 4.10748 9.35596C3.63471 9.35596 3.23659 10.536 3.1072 12.1578C1.68393 12.3051 0.645508 12.7582 0.645508 13.2963C0.645508 13.8344 1.68227 14.2875 3.1072 14.4348C3.23659 16.0548 3.63471 17.2367 4.10748 17.2367C4.58024 17.2367 4.97836 16.0566 5.10775 14.4348C6.53102 14.2875 7.56944 13.8344 7.56944 13.2963Z"
                            fill="white"
                          ></path>
                          <path
                            d="M16.296 3.50226C16.296 3.08042 15.4802 2.72507 14.3623 2.60814C14.2616 1.33574 13.9473 0.407227 13.5767 0.407227C13.2061 0.407227 12.8939 1.33574 12.7911 2.60814C11.6732 2.72507 10.8574 3.08042 10.8574 3.50226C10.8574 3.9241 11.6732 4.27946 12.7911 4.39639C12.8939 5.66879 13.2061 6.5973 13.5767 6.5973C13.9473 6.5973 14.2595 5.66879 14.3623 4.39639C15.4802 4.28176 16.296 3.9241 16.296 3.50226Z"
                            fill="white"
                          ></path>
                          <path
                            d="M54.9342 12.3146L46.7429 7.14651C42.9767 4.76904 37.76 5.1043 32.0019 8.71182C20.5597 15.8867 11.3137 33.2727 11.3507 47.5494C11.3681 54.6393 13.6752 59.6303 17.3936 61.9771L25.585 67.1452V67.1476"
                            stroke="white"
                            strokeWidth="0.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M34.4756 7.27441L42.0776 12.0695"
                            stroke="white"
                            strokeWidth="0.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M22.2783 18.1733L29.8804 22.9708"
                            stroke="white"
                            strokeWidth="0.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M14.6787 31.6406L22.2786 36.4381"
                            stroke="white"
                            strokeWidth="0.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M11.3506 47.2856L18.9505 52.0807"
                            stroke="white"
                            strokeWidth="0.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M39.8571 13.6531C45.5782 10.0668 50.7666 9.71267 54.5285 12.0406C58.2925 14.3685 60.628 19.376 60.6454 26.5179C60.6649 33.6597 58.3621 41.5736 54.622 48.6045C50.884 55.6354 45.713 61.7763 39.9898 65.3625C34.2665 68.9512 29.0803 69.303 25.3162 66.9751C21.5522 64.6472 19.2167 59.6396 19.1993 52.4977C19.1798 45.3559 21.4826 37.4443 25.2227 30.4111C28.9607 23.3802 34.1317 17.2417 39.8571 13.6555V13.6531Z"
                            stroke="white"
                            strokeWidth="0.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M40.3509 19.0421C44.8804 16.2019 48.9859 15.9233 51.9649 17.7649C54.944 19.6088 56.7923 23.5704 56.8076 29.2225C56.8228 34.8746 55.0005 41.1406 52.0411 46.7054C49.0816 52.2701 44.9891 57.1313 40.4597 59.9691C35.9302 62.8094 31.8225 63.088 28.8456 61.2464C25.8666 59.4049 24.0182 55.4409 24.003 49.7887C23.9878 44.1366 25.81 37.873 28.7695 32.3059C31.729 26.7412 35.8214 21.8824 40.3531 19.0421H40.3509Z"
                            fill="url(#paint0_linear_19813_10035)"
                            fillOpacity="0.4"
                          ></path>
                          <path
                            d="M40.3509 19.0421C44.8804 16.2019 48.9859 15.9233 51.9649 17.7649C54.944 19.6088 56.7923 23.5704 56.8076 29.2225C56.8228 34.8746 55.0005 41.1406 52.0411 46.7054C49.0816 52.2701 44.9891 57.1313 40.4597 59.9691C35.9302 62.8094 31.8225 63.088 28.8456 61.2464C25.8666 59.4049 24.0182 55.4409 24.003 49.7887C23.9878 44.1366 25.81 37.873 28.7695 32.3059C31.729 26.7412 35.8214 21.8824 40.3531 19.0421H40.3509Z"
                            fill="url(#paint1_linear_19813_10035)"
                          ></path>
                          <path
                            d="M44.1864 35.1117C45.128 34.5215 45.8934 34.996 45.8977 36.1694L45.9086 40.0036C45.9086 40.6505 45.6759 41.4083 45.2737 42.0647L42.6425 46.3616C42.6055 46.423 42.5577 46.4726 42.5099 46.5033C42.3924 46.5764 42.2968 46.5174 42.2968 46.3687L42.2772 38.9718C42.275 38.0912 41.6988 37.7371 40.9942 38.1786L39.0763 39.3803C38.9589 39.4535 38.8632 39.6329 38.8654 39.7793L38.8871 48.5053C38.8871 48.5667 38.8697 48.6375 38.8393 48.706C38.798 48.7957 38.7371 48.8689 38.674 48.9067C38.6262 48.9374 38.5784 48.9468 38.5392 48.9303L35.895 47.9411C35.4906 47.79 35.2535 47.3272 35.2514 46.6827L35.2188 34.3397C35.2166 33.1663 35.9755 31.7355 36.917 31.1429L44.1625 26.6005C45.104 26.0102 45.8695 26.4848 45.8738 27.6582L45.8847 31.9126C45.8869 33.086 45.128 34.5167 44.1886 35.107L44.1864 35.1117ZM42.2576 33.6573L42.2489 30.2009C42.2489 30.0545 42.1532 29.9932 42.0358 30.0663L39.0524 31.9362C38.935 32.0094 38.8393 32.1888 38.8393 32.3376L38.8523 37.1232C38.8523 37.2696 38.948 37.3286 39.0676 37.2531L40.9855 36.0513C41.6922 35.6075 42.262 34.5356 42.2598 33.655"
                            fill="white"
                          ></path>
                        </g>
                        <defs>
                          <linearGradient
                            id="paint0_linear_19813_10035"
                            x1="41.962"
                            y1="66.8835"
                            x2="41.3508"
                            y2="20.7198"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="white" stopOpacity="0"></stop>
                            <stop offset="1" stopColor="white"></stop>
                          </linearGradient>
                          <linearGradient
                            id="paint1_linear_19813_10035"
                            x1="23.5181"
                            y1="10.2459"
                            x2="48.9292"
                            y2="58.5165"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#0059FF"></stop>
                            <stop offset="0.494792" stopColor="#615EFF"></stop>
                            <stop offset="1" stopColor="#42F5FB"></stop>
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      {isAssetPopup && (
        <AssetPopup
          setTopAsset={setTopAsset}
          setIsAssetPopup={setIsAssetPopup}
        />
      )}
      {isBottomAssetPopup && (
        <BottomAssetPopup
          setBottomAsset={setBottomAsset}
          setIsBottomAssetPopup={setIsBottomAssetPopup}
        />
      )}
    </>
  );
};

export default Swap;
