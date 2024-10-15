import React, { useState } from "react";
import "./Swap.css";
import { WalletSDK } from "@roninnetwork/wallet-sdk";
import BottomAssetPopup from "../components/BottomAssetPopup";
import AssetPopup from "../components/AssetPopup";
import Header from "../components/Header";
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
          <Header />
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
