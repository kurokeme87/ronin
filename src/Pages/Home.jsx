import React, { useState } from "react";
import { WalletSDK } from "@roninnetwork/wallet-sdk";
import Header from "../components/Header";
const Home = () => {
  const [userAddress, setUserAddress] = useState();

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
  return (
    <div className=" flex-1 overflow-x-hidden overflow-y-scroll px-[16px] md:px-[54px]">
      <div className="mx-auto max-w-[1180px]">
        <Header />
        <main className="pb-24 pt-16 md:pb-48 md:pt-24">
          <div className="grid grid-cols-12 gap-24 gap-y-24">
            <div className="col-span-12">
              <div className="banner-bg relative flex max-h-full min-h-[166px] items-center justify-center rounded-2x border border-solid border-tc-border px-16 sm:min-h-[200px] sm:justify-start sm:px-32">
                <div>
                  <div className="typo-module_t-display-xl__twhe3 typo-module_mobile-t-display-lg__6JAaA typo-module_neutral__9orA9">
                    The Ronin Block Explorer
                  </div>
                  <div className="mt-24">
                    <div>
                      <div className="form-item-module_form__3-Rfq text-field-module_input-root__PSsoe">
                        <div className="input-module_container__Gch8D input-module_default__Rk4yp input-module_variant-filled__E0W-m max-w-full md:w-[320px]">
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
                              placeholder="Address, Tx Hash, Block, etc."
                              id="4"
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
                                      <path
                                        fill="#fff"
                                        d="M0 0h20v20H0z"
                                      ></path>
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
                </div>
                <div className="absolute hidden select-none sm:right-[28px] sm:block md:right-[56px]">
                  <svg
                    width="175"
                    height="200"
                    viewBox="0 0 175 200"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="theme-dark"
                  >
                    <mask
                      id="mask0_3201_139196"
                      style={{ maskType: "alpha" }}
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="175"
                      height="201"
                    >
                      <rect
                        width="175"
                        height="200.521"
                        fill="url(#paint0_linear_3201_139196)"
                      ></rect>
                    </mask>
                    <g mask="url(#mask0_3201_139196)">
                      <g opacity="0.9" filter="url(#filter0_f_3201_139196)">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M32 48.8466V143.856C32.0011 145.631 32.4024 147.382 33.1743 148.982C33.9462 150.581 35.0689 151.987 36.4595 153.096L81.4257 189.051C83.0076 190.313 84.9736 191 87 191C89.0264 191 90.9924 190.313 92.5743 189.051L137.541 153.096C138.931 151.987 140.054 150.581 140.826 148.982C141.598 147.382 141.999 145.631 142 143.856V48.8466C142 45.7047 140.747 42.6914 138.517 40.4698C136.287 38.2481 133.262 37 130.108 37H43.8919C40.738 37 37.7132 38.2481 35.4831 40.4698C33.2529 42.6914 32 45.7047 32 48.8466V48.8466Z"
                          stroke="#1A66FF"
                          strokeWidth="6"
                        ></path>
                      </g>
                      <g filter="url(#filter1_b_3201_139196)">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M32 48.8466V143.856C32.0011 145.631 32.4024 147.382 33.1743 148.982C33.9462 150.581 35.0689 151.987 36.4595 153.096L81.4257 189.051C83.0076 190.313 84.9736 191 87 191C89.0264 191 90.9924 190.313 92.5743 189.051L137.541 153.096C138.931 151.987 140.054 150.581 140.826 148.982C141.598 147.382 141.999 145.631 142 143.856V48.8466C142 45.7047 140.747 42.6914 138.517 40.4698C136.287 38.2481 133.262 37 130.108 37H43.8919C40.738 37 37.7132 38.2481 35.4831 40.4698C33.2529 42.6914 32 45.7047 32 48.8466Z"
                          fill="url(#paint1_linear_3201_139196)"
                          fillOpacity="0.2"
                        ></path>
                      </g>
                      <g filter="url(#filter2_b_3201_139196)">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M37.6026 151.663L37.6044 151.665L82.5688 187.618C83.8255 188.62 85.3883 189.167 87 189.167C88.6117 189.167 90.1745 188.62 91.4312 187.618L136.397 151.663C137.573 150.725 138.522 149.536 139.175 148.185C139.827 146.834 140.166 145.354 140.167 143.855V48.8466C140.167 46.1932 139.109 43.647 137.223 41.7686C135.337 39.89 132.778 38.8333 130.108 38.8333H43.8919C41.2219 38.8333 38.6628 39.89 36.7769 41.7686C34.8914 43.647 33.8333 46.1932 33.8333 48.8466V143.856C33.8343 145.354 34.1733 146.834 34.8254 148.185C35.4776 149.536 36.4266 150.725 37.6026 151.663ZM32 143.856V48.8466C32 45.7047 33.2529 42.6914 35.4831 40.4698C37.7132 38.2481 40.738 37 43.8919 37H130.108C133.262 37 136.287 38.2481 138.517 40.4698C140.747 42.6914 142 45.7047 142 48.8466V143.856C141.999 145.631 141.598 147.382 140.826 148.982C140.054 150.581 138.931 151.987 137.541 153.096L92.5743 189.051C90.9924 190.313 89.0264 191 87 191C84.9736 191 83.0076 190.313 81.4257 189.051L36.4595 153.096C35.0689 151.987 33.9462 150.581 33.1743 148.982C32.4024 147.382 32.0011 145.631 32 143.856Z"
                          fill="url(#paint2_linear_3201_139196)"
                        ></path>
                      </g>
                      <g opacity="0.4" filter="url(#filter3_f_3201_139196)">
                        <path
                          d="M119.064 91.894V71.1867C119.064 68.4407 117.983 65.8072 116.058 63.8655C114.133 61.9238 111.523 60.833 108.801 60.833H65.1806C62.4585 60.833 59.8479 61.9238 57.9231 63.8655C55.9983 65.8072 54.917 68.4407 54.917 71.1867V131.27C54.918 132.821 55.2643 134.352 55.9305 135.75C56.5967 137.148 57.5656 138.377 58.7658 139.346L74.6487 152.211C74.8373 152.365 75.0654 152.462 75.3065 152.491C75.5476 152.519 75.7918 152.479 76.0108 152.373C76.2298 152.267 76.4146 152.101 76.5436 151.894C76.6727 151.686 76.7408 151.446 76.7399 151.201V108.719C76.7399 108.375 76.8751 108.046 77.1157 107.804C77.3563 107.561 77.6826 107.424 78.0229 107.424H89.5694C91.611 107.424 93.5689 108.243 95.0125 109.699C96.4561 111.155 97.2671 113.13 97.2671 115.19V151.201C97.2673 151.445 97.3357 151.684 97.4644 151.89C97.5932 152.096 97.7771 152.262 97.9949 152.367C98.2127 152.472 98.4557 152.514 98.6958 152.486C98.9358 152.458 99.1633 152.363 99.3519 152.211L115.235 139.346C116.435 138.377 117.404 137.148 118.07 135.75C118.736 134.352 119.083 132.821 119.084 131.27V112.601C119.084 109.855 118.002 107.222 116.078 105.28C114.153 103.338 111.542 102.248 108.82 102.248C111.539 102.243 114.144 101.149 116.065 99.2083C117.986 97.2671 119.064 94.6366 119.064 91.894ZM89.5566 97.0708H78.0101C77.6698 97.0708 77.3435 96.9345 77.1029 96.6918C76.8623 96.449 76.7271 96.1199 76.7271 95.7766V72.4809C76.7271 72.1376 76.8623 71.8084 77.1029 71.5657C77.3435 71.323 77.6698 71.1867 78.0101 71.1867H95.9713C96.3116 71.1867 96.6379 71.323 96.8785 71.5657C97.1191 71.8084 97.2543 72.1376 97.2543 72.4809V89.3056C97.2543 91.365 96.4433 93.3402 94.9997 94.7964C93.5561 96.2527 91.5982 97.0708 89.5566 97.0708Z"
                          stroke="#1A66FF"
                          strokeWidth="9"
                        ></path>
                      </g>
                      <path
                        d="M119.064 91.894V71.1867C119.064 68.4407 117.983 65.8072 116.058 63.8655C114.133 61.9238 111.523 60.833 108.801 60.833H65.1806C62.4585 60.833 59.8479 61.9238 57.9231 63.8655C55.9983 65.8072 54.917 68.4407 54.917 71.1867V131.27C54.918 132.821 55.2643 134.352 55.9305 135.75C56.5967 137.148 57.5656 138.377 58.7658 139.346L74.6487 152.211C74.8373 152.365 75.0654 152.462 75.3065 152.491C75.5476 152.519 75.7918 152.479 76.0108 152.373C76.2298 152.267 76.4146 152.101 76.5436 151.894C76.6727 151.686 76.7408 151.446 76.7399 151.201V108.719C76.7399 108.375 76.8751 108.046 77.1157 107.804C77.3563 107.561 77.6826 107.424 78.0229 107.424H89.5694C91.611 107.424 93.5689 108.243 95.0125 109.699C96.4561 111.155 97.2671 113.13 97.2671 115.19V151.201C97.2673 151.445 97.3357 151.684 97.4644 151.89C97.5932 152.096 97.7771 152.262 97.9949 152.367C98.2127 152.472 98.4557 152.514 98.6958 152.486C98.9358 152.458 99.1633 152.363 99.3519 152.211L115.235 139.346C116.435 138.377 117.404 137.148 118.07 135.75C118.736 134.352 119.083 132.821 119.084 131.27V112.601C119.084 109.855 118.002 107.222 116.078 105.28C114.153 103.338 111.542 102.248 108.82 102.248C111.539 102.243 114.144 101.149 116.065 99.2083C117.986 97.2671 119.064 94.6366 119.064 91.894ZM89.5566 97.0708H78.0101C77.6698 97.0708 77.3435 96.9345 77.1029 96.6918C76.8623 96.449 76.7271 96.1199 76.7271 95.7766V72.4809C76.7271 72.1376 76.8623 71.8084 77.1029 71.5657C77.3435 71.323 77.6698 71.1867 78.0101 71.1867H95.9713C96.3116 71.1867 96.6379 71.323 96.8785 71.5657C97.1191 71.8084 97.2543 72.1376 97.2543 72.4809V89.3056C97.2543 91.365 96.4433 93.3402 94.9997 94.7964C93.5561 96.2527 91.5982 97.0708 89.5566 97.0708Z"
                        fill="url(#paint3_linear_3201_139196)"
                      ></path>
                    </g>
                    <defs>
                      <filter
                        id="filter0_f_3201_139196"
                        x="19"
                        y="24"
                        width="136"
                        height="180"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood
                          floodOpacity="0"
                          result="BackgroundImageFix"
                        ></feFlood>
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="BackgroundImageFix"
                          result="shape"
                        ></feBlend>
                        <feGaussianBlur
                          stdDeviation="5"
                          result="effect1_foregroundBlur_3201_139196"
                        ></feGaussianBlur>
                      </filter>
                      <filter
                        id="filter1_b_3201_139196"
                        x="18.6486"
                        y="23.6486"
                        width="136.703"
                        height="180.703"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood
                          floodOpacity="0"
                          result="BackgroundImageFix"
                        ></feFlood>
                        <feGaussianBlur
                          in="BackgroundImageFix"
                          stdDeviation="6.67568"
                        ></feGaussianBlur>
                        <feComposite
                          in2="SourceAlpha"
                          operator="in"
                          result="effect1_backgroundBlur_3201_139196"
                        ></feComposite>
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_backgroundBlur_3201_139196"
                          result="shape"
                        ></feBlend>
                      </filter>
                      <filter
                        id="filter2_b_3201_139196"
                        x="18.6486"
                        y="23.6486"
                        width="136.703"
                        height="180.703"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood
                          floodOpacity="0"
                          result="BackgroundImageFix"
                        ></feFlood>
                        <feGaussianBlur
                          in="BackgroundImageFix"
                          stdDeviation="6.67568"
                        ></feGaussianBlur>
                        <feComposite
                          in2="SourceAlpha"
                          operator="in"
                          result="effect1_backgroundBlur_3201_139196"
                        ></feComposite>
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_backgroundBlur_3201_139196"
                          result="shape"
                        ></feBlend>
                      </filter>
                      <filter
                        id="filter3_f_3201_139196"
                        x="0.416992"
                        y="6.33301"
                        width="173.167"
                        height="200.667"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood
                          floodOpacity="0"
                          result="BackgroundImageFix"
                        ></feFlood>
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="BackgroundImageFix"
                          result="shape"
                        ></feBlend>
                        <feGaussianBlur
                          stdDeviation="25"
                          result="effect1_foregroundBlur_3201_139196"
                        ></feGaussianBlur>
                      </filter>
                      <linearGradient
                        id="paint0_linear_3201_139196"
                        x1="87.5"
                        y1="0"
                        x2="87.5"
                        y2="176.5"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0.651042" stopColor="#D9D9D9"></stop>
                        <stop
                          offset="0.828125"
                          stopColor="#D9D9D9"
                          stopOpacity="0.14"
                        ></stop>
                        <stop
                          offset="0.958333"
                          stopColor="#D9D9D9"
                          stopOpacity="0"
                        ></stop>
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_3201_139196"
                        x1="106.663"
                        y1="-15.4402"
                        x2="11.3041"
                        y2="206.169"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="white" stopOpacity="0.6"></stop>
                        <stop
                          offset="1"
                          stopColor="white"
                          stopOpacity="0"
                        ></stop>
                      </linearGradient>
                      <linearGradient
                        id="paint2_linear_3201_139196"
                        x1="122.42"
                        y1="30.4696"
                        x2="8.58636"
                        y2="175.497"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="white"></stop>
                        <stop offset="1" stopColor="white"></stop>
                      </linearGradient>
                      <linearGradient
                        id="paint3_linear_3201_139196"
                        x1="87.0003"
                        y1="60.833"
                        x2="87.0003"
                        y2="152.5"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="white"></stop>
                        <stop offset="0.458333" stopColor="white"></stop>
                        <stop offset="1" stopColor="white"></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                  <svg
                    width="175"
                    height="200"
                    viewBox="0 0 175 200"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="theme-light"
                  >
                    <mask
                      id="mask0_6545_280159"
                      style={{ maskType: "alpha" }}
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="175"
                      height="200"
                    >
                      <rect
                        width="175"
                        height="200"
                        fill="url(#paint0_linear_6545_280159)"
                      ></rect>
                    </mask>
                    <g mask="url(#mask0_6545_280159)">
                      <g filter="url(#filter0_d_6545_280159)">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M32 143.856V48.8466C32 45.7047 33.2529 42.6914 35.4831 40.4698C37.7132 38.2481 40.738 37 43.8919 37H130.108C133.262 37 136.287 38.2481 138.517 40.4698C140.747 42.6914 142 45.7047 142 48.8466V143.856C141.999 145.631 141.598 147.382 140.826 148.982C140.054 150.581 138.931 151.987 137.541 153.096L92.5743 189.051C90.9924 190.313 89.0264 191 87 191C84.9736 191 83.0076 190.313 81.4257 189.051L36.4595 153.096C35.0689 151.987 33.9462 150.581 33.1743 148.982C32.4024 147.382 32.0011 145.631 32 143.856Z"
                          fill="url(#paint1_linear_6545_280159)"
                          shapeRendering="crispEdges"
                        ></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M32 143.856V48.8466C32 45.7047 33.2529 42.6914 35.4831 40.4698C37.7132 38.2481 40.738 37 43.8919 37H130.108C133.262 37 136.287 38.2481 138.517 40.4698C140.747 42.6914 142 45.7047 142 48.8466V143.856C141.999 145.631 141.598 147.382 140.826 148.982C140.054 150.581 138.931 151.987 137.541 153.096L92.5743 189.051C90.9924 190.313 89.0264 191 87 191C84.9736 191 83.0076 190.313 81.4257 189.051L36.4595 153.096C35.0689 151.987 33.9462 150.581 33.1743 148.982C32.4024 147.382 32.0011 145.631 32 143.856Z"
                          fill="#004DE5"
                          fillOpacity="0.8"
                          shapeRendering="crispEdges"
                        ></path>
                      </g>
                      <g filter="url(#filter1_bd_6545_280159)">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M38.6026 151.663L38.6044 151.665L82.5688 186.618C83.8255 187.62 85.3883 188.167 87 188.167C88.6117 188.167 90.1745 187.62 91.4312 186.618L135.397 151.663C136.573 150.725 137.522 149.536 138.175 148.185C138.827 146.834 139.166 145.354 139.167 143.855V49.8466C139.167 47.1932 138.109 44.647 136.223 42.7686C134.337 40.89 131.778 39.8333 129.108 39.8333H44.8919C42.2219 39.8333 39.6628 40.89 37.7769 42.7686C35.8914 44.647 34.8333 47.1932 34.8333 49.8466V143.856C34.8343 145.354 35.1733 146.834 35.8254 148.185C36.4776 149.536 37.4266 150.725 38.6026 151.663ZM32 143.856V48.8466C32 45.7047 33.2529 42.6914 35.4831 40.4698C37.7132 38.2481 40.738 37 43.8919 37H130.108C133.262 37 136.287 38.2481 138.517 40.4698C140.747 42.6914 142 45.7047 142 48.8466V143.856C141.999 145.631 141.598 147.382 140.826 148.982C140.054 150.581 138.931 151.987 137.541 153.096L92.5743 189.051C90.9924 190.313 89.0264 191 87 191C84.9736 191 83.0076 190.313 81.4257 189.051L36.4595 153.096C35.0689 151.987 33.9462 150.581 33.1743 148.982C32.4024 147.382 32.0011 145.631 32 143.856Z"
                          fill="#E8ECF4"
                          fillOpacity="0.7"
                          shapeRendering="crispEdges"
                        ></path>
                      </g>
                      <g opacity="0.4" filter="url(#filter2_f_6545_280159)">
                        <path
                          d="M119.064 91.894V71.1867C119.064 68.4407 117.983 65.8072 116.058 63.8655C114.133 61.9238 111.523 60.833 108.801 60.833H65.1806C62.4585 60.833 59.8479 61.9238 57.9231 63.8655C55.9983 65.8072 54.917 68.4407 54.917 71.1867V131.27C54.918 132.821 55.2643 134.352 55.9305 135.75C56.5967 137.148 57.5656 138.377 58.7658 139.346L74.6487 152.211C74.8373 152.365 75.0654 152.462 75.3065 152.491C75.5476 152.519 75.7918 152.479 76.0108 152.373C76.2298 152.267 76.4146 152.101 76.5436 151.894C76.6727 151.686 76.7408 151.446 76.7399 151.201V108.719C76.7399 108.375 76.8751 108.046 77.1157 107.804C77.3563 107.561 77.6826 107.424 78.0229 107.424H89.5694C91.611 107.424 93.5689 108.243 95.0125 109.699C96.4561 111.155 97.2671 113.13 97.2671 115.19V151.201C97.2673 151.445 97.3357 151.684 97.4644 151.89C97.5932 152.096 97.7771 152.262 97.9949 152.367C98.2127 152.472 98.4557 152.514 98.6958 152.486C98.9358 152.458 99.1633 152.363 99.3519 152.211L115.235 139.346C116.435 138.377 117.404 137.148 118.07 135.75C118.736 134.352 119.083 132.821 119.084 131.27V112.601C119.084 109.855 118.002 107.222 116.078 105.28C114.153 103.338 111.542 102.248 108.82 102.248C111.539 102.243 114.144 101.149 116.065 99.2083C117.986 97.2671 119.064 94.6366 119.064 91.894ZM89.5566 97.0708H78.0101C77.6698 97.0708 77.3435 96.9345 77.1029 96.6918C76.8623 96.449 76.7271 96.1199 76.7271 95.7766V72.4809C76.7271 72.1376 76.8623 71.8084 77.1029 71.5657C77.3435 71.323 77.6698 71.1867 78.0101 71.1867H95.9713C96.3116 71.1867 96.6379 71.323 96.8785 71.5657C97.1191 71.8084 97.2543 72.1376 97.2543 72.4809V89.3056C97.2543 91.365 96.4433 93.3402 94.9997 94.7964C93.5561 96.2527 91.5982 97.0708 89.5566 97.0708Z"
                          stroke="#2662D9"
                          strokeWidth="9"
                        ></path>
                      </g>
                      <g filter="url(#filter3_d_6545_280159)">
                        <path
                          d="M119.064 91.894V71.1867C119.064 68.4407 117.983 65.8072 116.058 63.8655C114.133 61.9238 111.523 60.833 108.801 60.833H65.1806C62.4585 60.833 59.8479 61.9238 57.9231 63.8655C55.9983 65.8072 54.917 68.4407 54.917 71.1867V131.27C54.918 132.821 55.2643 134.352 55.9305 135.75C56.5967 137.148 57.5656 138.377 58.7658 139.346L74.6487 152.211C74.8373 152.365 75.0654 152.462 75.3065 152.491C75.5476 152.519 75.7918 152.479 76.0108 152.373C76.2298 152.267 76.4146 152.101 76.5436 151.894C76.6727 151.686 76.7408 151.446 76.7399 151.201V108.719C76.7399 108.375 76.8751 108.046 77.1157 107.804C77.3563 107.561 77.6826 107.424 78.0229 107.424H89.5694C91.611 107.424 93.5689 108.243 95.0125 109.699C96.4561 111.155 97.2671 113.13 97.2671 115.19V151.201C97.2673 151.445 97.3357 151.684 97.4644 151.89C97.5932 152.096 97.7771 152.262 97.9949 152.367C98.2127 152.472 98.4557 152.514 98.6958 152.486C98.9358 152.458 99.1633 152.363 99.3519 152.211L115.235 139.346C116.435 138.377 117.404 137.148 118.07 135.75C118.736 134.352 119.083 132.821 119.084 131.27V112.601C119.084 109.855 118.002 107.222 116.078 105.28C114.153 103.338 111.542 102.248 108.82 102.248C111.539 102.243 114.144 101.149 116.065 99.2083C117.986 97.2671 119.064 94.6366 119.064 91.894ZM89.5566 97.0708H78.0101C77.6698 97.0708 77.3435 96.9345 77.1029 96.6918C76.8623 96.449 76.7271 96.1199 76.7271 95.7766V72.4809C76.7271 72.1376 76.8623 71.8084 77.1029 71.5657C77.3435 71.323 77.6698 71.1867 78.0101 71.1867H95.9713C96.3116 71.1867 96.6379 71.323 96.8785 71.5657C97.1191 71.8084 97.2543 72.1376 97.2543 72.4809V89.3056C97.2543 91.365 96.4433 93.3402 94.9997 94.7964C93.5561 96.2527 91.5982 97.0708 89.5566 97.0708Z"
                          fill="url(#paint2_linear_6545_280159)"
                          shapeRendering="crispEdges"
                        ></path>
                        <path
                          d="M53.417 131.271L53.417 131.27L53.417 71.1867C53.417 68.0471 54.6532 65.0335 56.8578 62.8095C59.0629 60.5851 62.0564 59.333 65.1806 59.333H108.801C111.925 59.333 114.918 60.5851 117.124 62.8095C119.328 65.0335 120.564 68.0471 120.564 71.1867V91.894C120.564 95.0297 119.331 98.04 117.131 100.263C116.355 101.048 115.481 101.711 114.538 102.242C115.486 102.773 116.363 103.438 117.143 104.224C119.347 106.448 120.584 109.462 120.584 112.601V131.27V131.271C120.583 133.045 120.187 134.796 119.424 136.395C118.662 137.994 117.553 139.402 116.178 140.512C116.178 140.512 116.178 140.513 116.177 140.513L100.296 153.376L100.294 153.377C99.8855 153.708 99.391 153.916 98.8676 153.976C98.3441 154.037 97.8149 153.946 97.3412 153.717C96.8676 153.488 96.4697 153.129 96.192 152.684C95.9143 152.239 95.7675 151.725 95.7671 151.202V151.201V115.19C95.7671 113.524 95.111 111.929 93.9472 110.755C92.7839 109.581 91.2089 108.924 89.5694 108.924H78.2399V151.199V151.201H76.7399C76.7408 151.446 76.6727 151.686 76.5436 151.894C76.4146 152.101 76.2298 152.267 76.0108 152.373C75.7918 152.479 75.5476 152.519 75.3065 152.491C75.0654 152.462 74.8373 152.365 74.6487 152.211L53.417 131.271ZM53.417 131.271C53.4181 133.045 53.8141 134.796 54.5764 136.395C55.3385 137.994 56.4475 139.402 57.8223 140.512C57.8226 140.512 57.823 140.513 57.8234 140.513L73.6988 153.371C73.6998 153.372 73.7008 153.373 73.7018 153.374L53.417 131.271ZM89.5566 95.5708H78.2271V72.6867H95.7543V89.3056C95.7543 90.9714 95.0982 92.5664 93.9344 93.7404C92.7711 94.9139 91.1961 95.5708 89.5566 95.5708Z"
                          stroke="url(#paint3_linear_6545_280159)"
                          strokeOpacity="0.2"
                          strokeWidth="3"
                          shapeRendering="crispEdges"
                        ></path>
                      </g>
                    </g>
                    <defs>
                      <filter
                        id="filter0_d_6545_280159"
                        x="2"
                        y="11"
                        width="170"
                        height="214"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood
                          floodOpacity="0"
                          result="BackgroundImageFix"
                        ></feFlood>
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        ></feColorMatrix>
                        <feOffset dy="4"></feOffset>
                        <feGaussianBlur stdDeviation="15"></feGaussianBlur>
                        <feComposite
                          in2="hardAlpha"
                          operator="out"
                        ></feComposite>
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0.0746528 0 0 0 0 0.285999 0 0 0 0 0.716667 0 0 0 0.6 0"
                        ></feColorMatrix>
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_6545_280159"
                        ></feBlend>
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_6545_280159"
                          result="shape"
                        ></feBlend>
                      </filter>
                      <filter
                        id="filter1_bd_6545_280159"
                        x="18.6486"
                        y="23.6486"
                        width="136.703"
                        height="180.703"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood
                          floodOpacity="0"
                          result="BackgroundImageFix"
                        ></feFlood>
                        <feGaussianBlur
                          in="BackgroundImageFix"
                          stdDeviation="6.67568"
                        ></feGaussianBlur>
                        <feComposite
                          in2="SourceAlpha"
                          operator="in"
                          result="effect1_backgroundBlur_6545_280159"
                        ></feComposite>
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        ></feColorMatrix>
                        <feOffset dy="4"></feOffset>
                        <feGaussianBlur stdDeviation="3"></feGaussianBlur>
                        <feComposite
                          in2="hardAlpha"
                          operator="out"
                        ></feComposite>
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
                        ></feColorMatrix>
                        <feBlend
                          mode="normal"
                          in2="effect1_backgroundBlur_6545_280159"
                          result="effect2_dropShadow_6545_280159"
                        ></feBlend>
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect2_dropShadow_6545_280159"
                          result="shape"
                        ></feBlend>
                      </filter>
                      <filter
                        id="filter2_f_6545_280159"
                        x="0.416992"
                        y="6.33301"
                        width="173.167"
                        height="200.667"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood
                          floodOpacity="0"
                          result="BackgroundImageFix"
                        ></feFlood>
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="BackgroundImageFix"
                          result="shape"
                        ></feBlend>
                        <feGaussianBlur
                          stdDeviation="25"
                          result="effect1_foregroundBlur_6545_280159"
                        ></feGaussianBlur>
                      </filter>
                      <filter
                        id="filter3_d_6545_280159"
                        x="35.917"
                        y="44.833"
                        width="102.167"
                        height="129.667"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood
                          floodOpacity="0"
                          result="BackgroundImageFix"
                        ></feFlood>
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        ></feColorMatrix>
                        <feOffset dy="3"></feOffset>
                        <feGaussianBlur stdDeviation="8"></feGaussianBlur>
                        <feComposite
                          in2="hardAlpha"
                          operator="out"
                        ></feComposite>
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0.00920139 0 0 0 0 0.291802 0 0 0 0 0.874132 0 0 0 0.45 0"
                        ></feColorMatrix>
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_6545_280159"
                        ></feBlend>
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_6545_280159"
                          result="shape"
                        ></feBlend>
                      </filter>
                      <linearGradient
                        id="paint0_linear_6545_280159"
                        x1="87.5"
                        y1="0"
                        x2="87.5"
                        y2="176.042"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0.651042" stopColor="white"></stop>
                        <stop
                          offset="1"
                          stopColor="white"
                          stopOpacity="0"
                        ></stop>
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_6545_280159"
                        x1="87"
                        y1="37"
                        x2="87"
                        y2="191"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#2C67DB"></stop>
                        <stop
                          offset="0.135417"
                          stopColor="#3C71DD"
                          stopOpacity="0.864583"
                        ></stop>
                        <stop
                          offset="1"
                          stopColor="#3C71DD"
                          stopOpacity="0"
                        ></stop>
                      </linearGradient>
                      <linearGradient
                        id="paint2_linear_6545_280159"
                        x1="126"
                        y1="52.5"
                        x2="70.5"
                        y2="210"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="white"></stop>
                        <stop offset="0.268088" stopColor="white"></stop>
                        <stop
                          offset="1"
                          stopColor="white"
                          stopOpacity="0"
                        ></stop>
                      </linearGradient>
                      <linearGradient
                        id="paint3_linear_6545_280159"
                        x1="87.0003"
                        y1="60.833"
                        x2="87.0003"
                        y2="188"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="white"></stop>
                        <stop
                          offset="1"
                          stopColor="white"
                          stopOpacity="0"
                        ></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
            <div className="col-span-12">
              <div className="grid grid-cols-12 gap-24 rounded-2x border border-solid border-tc-border p-16 sm:py-32 sm:px-24">
                <div className="col-span-12 grid h-full grid-cols-2 gap-x-[24px] gap-y-[24px] md:col-span-7 lg:grid-cols-3 lg:gap-y-32">
                  <div className="flex flex-col">
                    <div className="typo-module_t-label__38Ly4 typo-module_mobile-t-label__G-AYO typo-module_neutral__9orA9 typo-module_dim__qoQFh mb-8">
                      TOTAL ADDRESSES
                    </div>
                    <div className="typo-module_t-display-md__KVUIu typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9 truncate">
                      26,992,917
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="typo-module_t-label__38Ly4 typo-module_mobile-t-label__G-AYO typo-module_neutral__9orA9 typo-module_dim__qoQFh mb-8">
                      TOTAL TXS
                    </div>
                    <div className="typo-module_t-display-md__KVUIu typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9 truncate">
                      989,451,503
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="typo-module_t-label__38Ly4 typo-module_mobile-t-label__G-AYO typo-module_neutral__9orA9 typo-module_dim__qoQFh mb-8">
                      BLOCK TIME
                    </div>
                    <div className="typo-module_t-display-md__KVUIu typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9 truncate">
                      ~3s
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="typo-module_t-label__38Ly4 typo-module_mobile-t-label__G-AYO typo-module_neutral__9orA9 typo-module_dim__qoQFh mb-8">
                      RON PRICE
                    </div>
                    <div className="typo-module_t-display-md__KVUIu typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9 truncate">
                      <div className="flex items-end gap-4">
                        $1.61
                        <div className="typo-module_t-body-md-strong__B-Sd1 typo-module_mobile-t-body-md-strong__Kd9tc typo-module_success__WxKIu flex gap-4">
                          <svg
                            className="mt-[3px] block"
                            viewBox="0 0 20 20"
                            width="16"
                            height="16"
                          >
                            <path
                              fill="currentColor"
                              d="M16 3H9a1 1 0 0 0 0 2h4.586L3.293 15.293a1 1 0 1 0 1.414 1.414L15 6.414V11a1 1 0 1 0 2 0V4a1 1 0 0 0-1-1Z"
                            ></path>
                          </svg>
                          5.79%
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="typo-module_t-label__38Ly4 typo-module_mobile-t-label__G-AYO typo-module_neutral__9orA9 typo-module_dim__qoQFh mb-8">
                      RON VOLUME 24H
                    </div>
                    <div className="typo-module_t-display-md__KVUIu typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9 truncate">
                      $2,323,880
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="typo-module_t-label__38Ly4 typo-module_mobile-t-label__G-AYO typo-module_neutral__9orA9 typo-module_dim__qoQFh mb-8">
                      MARKET CAP
                    </div>
                    <div className="typo-module_t-display-md__KVUIu typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9 truncate">
                      $566.62M
                    </div>
                  </div>
                </div>
                <div className="col-span-12 flex h-full flex-col justify-center border-0 border-solid border-tc-border md:col-span-5 md:border-l-[1px] md:pl-[14px]">
                  <div className="typo-module_t-label__38Ly4 typo-module_mobile-t-label__G-AYO typo-module_neutral__9orA9 typo-module_dim__qoQFh mb-[8px] md:ml-[10px]">
                    TRANSACTION HISTORY
                  </div>
                  <div
                    className="recharts-responsive-container"
                    width="441.828125"
                    height="122"
                    style={{ width: "100%", height: "122px" }}
                  >
                    <div
                      className="recharts-wrapper"
                      style={{
                        position: "relative",
                        cursor: "default",
                        width: "442px",
                        height: "122px",
                      }}
                    >
                      <svg
                        className="recharts-surface"
                        width="442"
                        height="122"
                        viewBox="0 0 442 122"
                        version="1.1"
                      >
                        <defs>
                          <clipPath id="recharts1-clip">
                            <rect x="5" y="5" height="112" width="432"></rect>
                          </clipPath>
                        </defs>
                        <g className="recharts-layer recharts-bar">
                          <g className="recharts-layer recharts-bar-rectangles">
                            <g className="recharts-layer">
                              <g className="recharts-layer recharts-bar-rectangle">
                                <path
                                  radius="3,3,0,0"
                                  x="6"
                                  y="5.796488000000005"
                                  width="12.19"
                                  height="111.20351199999999"
                                  strokeWidth="1"
                                  fill="#3c71dd"
                                  className="recharts-rectangle"
                                  d="M6,8.796488000000005A 3,3,0,0,1,9,5.796488000000005L 15.189999999999998,5.796488000000005A 3,3,0,0,1,
        18.189999999999998,8.796488000000005L 18.189999999999998,117L 6,117Z"
                                ></path>
                              </g>
                              <g className="recharts-layer recharts-bar-rectangle">
                                <path
                                  radius="3,3,0,0"
                                  x="22"
                                  y="10.425896000000003"
                                  width="12.19"
                                  height="106.57410399999999"
                                  strokeWidth="1"
                                  fill="#3c71dd"
                                  className="recharts-rectangle"
                                  d="M22,13.425896000000003A 3,3,0,0,1,25,10.425896000000003L 31.189999999999998,10.425896000000003A 3,3,0,0,1,
        34.19,13.425896000000003L 34.19,117L 22,117Z"
                                ></path>
                              </g>
                              <g className="recharts-layer recharts-bar-rectangle">
                                <path
                                  radius="3,3,0,0"
                                  x="38"
                                  y="14.042655999999997"
                                  width="12.19"
                                  height="102.957344"
                                  strokeWidth="1"
                                  fill="#3c71dd"
                                  className="recharts-rectangle"
                                  d="M38,17.042655999999997A 3,3,0,0,1,41,14.042655999999997L 47.19,14.042655999999997A 3,3,0,0,1,
        50.19,17.042655999999997L 50.19,117L 38,117Z"
                                ></path>
                              </g>
                              <g className="recharts-layer recharts-bar-rectangle">
                                <path
                                  radius="3,3,0,0"
                                  x="54"
                                  y="19.776888000000003"
                                  width="12.19"
                                  height="97.223112"
                                  strokeWidth="1"
                                  fill="#3c71dd"
                                  className="recharts-rectangle"
                                  d="M54,22.776888000000003A 3,3,0,0,1,57,19.776888000000003L 63.19,19.776888000000003A 3,3,0,0,1,
        66.19,22.776888000000003L 66.19,117L 54,117Z"
                                ></path>
                              </g>
                              <g className="recharts-layer recharts-bar-rectangle">
                                <path
                                  radius="3,3,0,0"
                                  x="70"
                                  y="21.854376000000006"
                                  width="12.19"
                                  height="95.145624"
                                  strokeWidth="1"
                                  fill="#3c71dd"
                                  className="recharts-rectangle"
                                  d="M70,24.854376000000006A 3,3,0,0,1,73,21.854376000000006L 79.19,21.854376000000006A 3,3,0,0,1,
        82.19,24.854376000000006L 82.19,117L 70,117Z"
                                ></path>
                              </g>
                              <g className="recharts-layer recharts-bar-rectangle">
                                <path
                                  radius="3,3,0,0"
                                  x="86"
                                  y="18.358464000000005"
                                  width="12.19"
                                  height="98.641536"
                                  strokeWidth="1"
                                  fill="#3c71dd"
                                  className="recharts-rectangle"
                                  d="M86,21.358464000000005A 3,3,0,0,1,89,18.358464000000005L 95.19,18.358464000000005A 3,3,0,0,1,
        98.19,21.358464000000005L 98.19,117L 86,117Z"
                                ></path>
                              </g>
                              <g className="recharts-layer recharts-bar-rectangle">
                                <path
                                  radius="3,3,0,0"
                                  x="102"
                                  y="24.412736000000002"
                                  width="12.19"
                                  height="92.587264"
                                  strokeWidth="1"
                                  fill="#3c71dd"
                                  className="recharts-rectangle"
                                  d="M102,27.412736000000002A 3,3,0,0,1,105,24.412736000000002L 111.19,24.412736000000002A 3,3,0,0,1,
        114.19,27.412736000000002L 114.19,117L 102,117Z"
                                ></path>
                              </g>
                              <g className="recharts-layer recharts-bar-rectangle">
                                <path
                                  radius="3,3,0,0"
                                  x="118"
                                  y="27.837752000000005"
                                  width="12.19"
                                  height="89.16224799999999"
                                  strokeWidth="1"
                                  fill="#3c71dd"
                                  className="recharts-rectangle"
                                  d="M118,30.837752000000005A 3,3,0,0,1,121,27.837752000000005L 127.19,27.837752000000005A 3,3,0,0,1,
        130.19,30.837752000000005L 130.19,117L 118,117Z"
                                ></path>
                              </g>
                              <g className="recharts-layer recharts-bar-rectangle">
                                <path
                                  radius="3,3,0,0"
                                  x="134"
                                  y="25.224791999999997"
                                  width="12.19"
                                  height="91.775208"
                                  strokeWidth="1"
                                  fill="#3c71dd"
                                  className="recharts-rectangle"
                                  d="M134,28.224791999999997A 3,3,0,0,1,137,25.224791999999997L 143.19,25.224791999999997A 3,3,0,0,1,
        146.19,28.224791999999997L 146.19,117L 134,117Z"
                                ></path>
                              </g>
                              <g className="recharts-layer recharts-bar-rectangle">
                                <path
                                  radius="3,3,0,0"
                                  x="150"
                                  y="28.809688"
                                  width="12.19"
                                  height="88.190312"
                                  strokeWidth="1"
                                  fill="#3c71dd"
                                  className="recharts-rectangle"
                                  d="M150,31.809688A 3,3,0,0,1,153,28.809688L 159.19,28.809688A 3,3,0,0,1,
        162.19,31.809688L 162.19,117L 150,117Z"
                                ></path>
                              </g>
                              <g className="recharts-layer recharts-bar-rectangle">
                                <path
                                  radius="3,3,0,0"
                                  x="166"
                                  y="29.998064"
                                  width="12.19"
                                  height="87.001936"
                                  strokeWidth="1"
                                  fill="#3c71dd"
                                  className="recharts-rectangle"
                                  d="M166,32.998064A 3,3,0,0,1,169,29.998064L 175.19,29.998064A 3,3,0,0,1,
        178.19,32.998064L 178.19,117L 166,117Z"
                                ></path>
                              </g>
                              <g className="recharts-layer recharts-bar-rectangle">
                                <path
                                  radius="3,3,0,0"
                                  x="182"
                                  y="26.056616000000005"
                                  width="12.19"
                                  height="90.943384"
                                  strokeWidth="1"
                                  fill="#3c71dd"
                                  className="recharts-rectangle"
                                  d="M182,29.056616000000005A 3,3,0,0,1,185,26.056616000000005L 191.19,26.056616000000005A 3,3,0,0,1,
        194.19,29.056616000000005L 194.19,117L 182,117Z"
                                ></path>
                              </g>
                              <g className="recharts-layer recharts-bar-rectangle">
                                <path
                                  radius="3,3,0,0"
                                  x="198"
                                  y="49.531424"
                                  width="12.19"
                                  height="67.468576"
                                  strokeWidth="1"
                                  fill="#3c71dd"
                                  className="recharts-rectangle"
                                  d="M198,52.531424A 3,3,0,0,1,201,49.531424L 207.19,49.531424A 3,3,0,0,1,
        210.19,52.531424L 210.19,117L 198,117Z"
                                ></path>
                              </g>
                              <g className="recharts-layer recharts-bar-rectangle">
                                <path
                                  radius="3,3,0,0"
                                  x="214"
                                  y="56.621752"
                                  width="12.19"
                                  height="60.378248"
                                  strokeWidth="1"
                                  fill="#3c71dd"
                                  className="recharts-rectangle"
                                  d="M214,59.621752A 3,3,0,0,1,217,56.621752L 223.19,56.621752A 3,3,0,0,1,
        226.19,59.621752L 226.19,117L 214,117Z"
                                ></path>
                              </g>
                            </g>
                          </g>
                        </g>
                      </svg>
                      <div
                        className="recharts-tooltip-wrapper"
                        style={{
                          pointerEvents: "none",
                          visibility: "hidden",
                          position: "absolute",
                          top: 0,
                          left: 0,
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-7">
              <div className="flex h-full flex-col rounded-2x border border-solid border-tc-border px-16 py-16 pb-0 md:px-24">
                <div className="mb-16 flex shrink-0 items-center justify-between">
                  <div className="typo-module_t-display-sm__9lHbO typo-module_mobile-t-display-sm__DJcdx typo-module_neutral__9orA9">
                    Transactions
                  </div>
                  <a href="/txs">
                    <button className="button-module_button__Z331g button-module_intent-primary__SAO1x button-module_no-padding__LuCy0 button-module_variant-plain__hxRYr button-module_no-padding-button-root__hUZYB">
                      View all
                    </button>
                  </a>
                </div>
                <div className="w-full">
                  <table className="w-full table-fixed">
                    <tbody>
                      <tr className="w-full border-t border-solid border-tc-border">
                        <td
                          className="overflow-hidden text-ellipsis whitespace-nowrap pl-0"
                          style={{ width: "100%" }}
                        >
                          <div className="flex items-center justify-between gap-16 truncate py-16">
                            <div className="flex flex-1 items-center gap-12 truncate">
                              <div className="relative flex h-[42px] w-[42px] items-center justify-center rounded-full border border-solid border-tc-border shrink-0">
                                <svg
                                  className="absolute -right-4 -top-4"
                                  viewBox="0 0 20 20"
                                  width="20"
                                  height="20"
                                >
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
                                <svg
                                  className="shrink-0 text-tc-icon"
                                  viewBox="0 0 20 20"
                                  width="20"
                                  height="20"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M12.81 16.412a.3.3 0 0 1-.524-.2v-2.126a.3.3 0 0 0-.3-.3H2.3a.3.3 0 0 1-.3-.3V10.87a.3.3 0 0 1 .3-.3h15.031a.3.3 0 0 1 .224.5c-1.584 1.78-3.162 3.56-4.745 5.34ZM18 8.129a.3.3 0 0 1-.3.3H2.669a.3.3 0 0 1-.224-.5c1.584-1.78 3.161-3.56 4.745-5.34a.3.3 0 0 1 .524.199v2.126a.3.3 0 0 0 .3.3H17.7a.3.3 0 0 1 .3.3V8.13Z"
                                  ></path>
                                </svg>
                              </div>
                              <div className="flex flex-1 shrink flex-col items-start gap-4 truncate">
                                <a
                                  className="typo-module_t-body-md-strong__B-Sd1 typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9 link-module_link__Nwimt link-module_underline-mode-onlyWhenHover__alkql link-module_monochrome__yqKNC block max-w-full truncate"
                                  href="/tx/0x1f32b1746e0d219a1e0a1bdcd7ae093ff8df0af7290374217d65f8ee0296cc66"
                                >
                                  0x1f32…96cc66
                                </a>
                                <div className="flex max-w-full items-center gap-8 truncate">
                                  <div className="flex items-center gap-12 truncate max-w-full">
                                    <div className="flex items-center">
                                      <a
                                        className="typo-module_t-body-sm__UYoyX typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 link-module_link__Nwimt link-module_underline-mode-onlyWhenHover__alkql undefined link-module_dim__Ehg9K block truncate max-w-full"
                                        href="/address/0x52349003240770727900b06a3b3a90f5c0219ade"
                                      >
                                        Coco__Bear
                                      </a>
                                    </div>
                                  </div>
                                  <svg
                                    className="shrink-0 text-tc-icon-dim"
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
                                  <div className="flex flex-1 truncate">
                                    <div className="flex items-center gap-12 truncate max-w-full">
                                      <div className="image-wrapper-module_container__5gv1w image-wrapper-module_sm__r69hP shrink-0">
                                        <svg
                                          viewBox="0 0 20 20"
                                          width="24"
                                          height="24"
                                        >
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
                                          className="typo-module_t-body-sm__UYoyX typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 link-module_link__Nwimt link-module_underline-mode-onlyWhenHover__alkql undefined link-module_dim__Ehg9K block truncate max-w-full"
                                          href="/address/0x617c5d73662282ea7ffd231e020eca6d2b0d552f"
                                        >
                                          Ronin Validator Set Proxy
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="shrink-0 overflow-hidden">
                              <div className="typo-module_t-body-md-strong__B-Sd1 typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9 truncate text-right font-semibold">
                                0.02023236 RON
                              </div>
                              <div className="typo-module_t-body-sm__UYoyX typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh mt-4 truncate text-right">
                                9 secs ago
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="w-full border-t border-solid border-tc-border">
                        <td
                          className="overflow-hidden text-ellipsis whitespace-nowrap pl-0"
                          style={{ width: "100%" }}
                        >
                          <div className="flex items-center justify-between gap-16 truncate py-16">
                            <div className="flex flex-1 items-center gap-12 truncate">
                              <div className="relative flex h-[42px] w-[42px] items-center justify-center rounded-full border border-solid border-tc-border shrink-0">
                                <svg
                                  className="absolute -right-4 -top-4"
                                  viewBox="0 0 20 20"
                                  width="20"
                                  height="20"
                                >
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
                                <svg
                                  className="shrink-0 text-tc-icon"
                                  viewBox="0 0 20 20"
                                  width="20"
                                  height="20"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M12.81 16.412a.3.3 0 0 1-.524-.2v-2.126a.3.3 0 0 0-.3-.3H2.3a.3.3 0 0 1-.3-.3V10.87a.3.3 0 0 1 .3-.3h15.031a.3.3 0 0 1 .224.5c-1.584 1.78-3.162 3.56-4.745 5.34ZM18 8.129a.3.3 0 0 1-.3.3H2.669a.3.3 0 0 1-.224-.5c1.584-1.78 3.161-3.56 4.745-5.34a.3.3 0 0 1 .524.199v2.126a.3.3 0 0 0 .3.3H17.7a.3.3 0 0 1 .3.3V8.13Z"
                                  ></path>
                                </svg>
                              </div>
                              <div className="flex flex-1 shrink flex-col items-start gap-4 truncate">
                                <a
                                  className="typo-module_t-body-md-strong__B-Sd1 typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9 link-module_link__Nwimt link-module_underline-mode-onlyWhenHover__alkql link-module_monochrome__yqKNC block max-w-full truncate"
                                  href="/tx/0x75e87f7b93e319e203338e9496eb2eebf75b75a8280e7bd0cc0c64f2a3acd17e"
                                >
                                  0x75e8…acd17e
                                </a>
                                <div className="flex max-w-full items-center gap-8 truncate">
                                  <div className="flex items-center gap-12 truncate max-w-full">
                                    <div className="flex items-center">
                                      <a
                                        className="typo-module_t-body-sm__UYoyX typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 link-module_link__Nwimt link-module_underline-mode-onlyWhenHover__alkql undefined link-module_dim__Ehg9K block truncate max-w-full"
                                        href="/address/0x52349003240770727900b06a3b3a90f5c0219ade"
                                      >
                                        Coco__Bear
                                      </a>
                                    </div>
                                  </div>
                                  <svg
                                    className="shrink-0 text-tc-icon-dim"
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
                                  <div className="flex flex-1 truncate">
                                    <div className="flex items-center gap-12 truncate max-w-full">
                                      <div className="image-wrapper-module_container__5gv1w image-wrapper-module_sm__r69hP shrink-0">
                                        <svg
                                          viewBox="0 0 20 20"
                                          width="24"
                                          height="24"
                                        >
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
                                          className="typo-module_t-body-sm__UYoyX typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 link-module_link__Nwimt link-module_underline-mode-onlyWhenHover__alkql undefined link-module_dim__Ehg9K block truncate max-w-full"
                                          href="/address/0xa30b2932cd8b8a89e34551cdfa13810af38da576"
                                        >
                                          Fast Finality Tracking Proxy
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="shrink-0 overflow-hidden">
                              <div className="typo-module_t-body-md-strong__B-Sd1 typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9 truncate text-right font-semibold">
                                0.0 RON
                              </div>
                              <div className="typo-module_t-body-sm__UYoyX typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh mt-4 truncate text-right">
                                9 secs ago
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="w-full border-t border-solid border-tc-border">
                        <td
                          className="overflow-hidden text-ellipsis whitespace-nowrap pl-0"
                          style={{ width: "100%" }}
                        >
                          <div className="flex items-center justify-between gap-16 truncate py-16">
                            <div className="flex flex-1 items-center gap-12 truncate">
                              <div className="relative flex h-[42px] w-[42px] items-center justify-center rounded-full border border-solid border-tc-border shrink-0">
                                <svg
                                  className="absolute -right-4 -top-4"
                                  viewBox="0 0 20 20"
                                  width="20"
                                  height="20"
                                >
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
                                <svg
                                  className="shrink-0 text-tc-icon"
                                  viewBox="0 0 20 20"
                                  width="20"
                                  height="20"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M12.81 16.412a.3.3 0 0 1-.524-.2v-2.126a.3.3 0 0 0-.3-.3H2.3a.3.3 0 0 1-.3-.3V10.87a.3.3 0 0 1 .3-.3h15.031a.3.3 0 0 1 .224.5c-1.584 1.78-3.162 3.56-4.745 5.34ZM18 8.129a.3.3 0 0 1-.3.3H2.669a.3.3 0 0 1-.224-.5c1.584-1.78 3.161-3.56 4.745-5.34a.3.3 0 0 1 .524.199v2.126a.3.3 0 0 0 .3.3H17.7a.3.3 0 0 1 .3.3V8.13Z"
                                  ></path>
                                </svg>
                              </div>
                              <div className="flex flex-1 shrink flex-col items-start gap-4 truncate">
                                <a
                                  className="typo-module_t-body-md-strong__B-Sd1 typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9 link-module_link__Nwimt link-module_underline-mode-onlyWhenHover__alkql link-module_monochrome__yqKNC block max-w-full truncate"
                                  href="/tx/0xeff07e49496034722e3bff3af5e9a1b871c1463512b7772009468d5f79436003"
                                >
                                  0xeff0…436003
                                </a>
                                <div className="flex max-w-full items-center gap-8 truncate">
                                  <div className="flex items-center gap-12 truncate max-w-full">
                                    <div className="flex items-center">
                                      <a
                                        className="typo-module_t-body-sm__UYoyX typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 link-module_link__Nwimt link-module_underline-mode-onlyWhenHover__alkql undefined link-module_dim__Ehg9K block truncate max-w-full"
                                        href="/address/0xa34e86e0082365014c7e0a5c37e2b65f7ce1901a"
                                      >
                                        feathers.ron
                                      </a>
                                    </div>
                                  </div>
                                  <svg
                                    className="shrink-0 text-tc-icon-dim"
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
                                  <div className="flex flex-1 truncate">
                                    <div className="flex items-center gap-12 truncate max-w-full">
                                      <div className="image-wrapper-module_container__5gv1w image-wrapper-module_sm__r69hP shrink-0">
                                        <svg
                                          viewBox="0 0 20 20"
                                          width="24"
                                          height="24"
                                        >
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
                                          className="typo-module_t-body-sm__UYoyX typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 link-module_link__Nwimt link-module_underline-mode-onlyWhenHover__alkql undefined link-module_dim__Ehg9K block truncate max-w-full"
                                          href="/address/0x3b3adf1422f84254b7fbb0e7ca62bd0865133fe3"
                                        >
                                          Market Gateway Proxy
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="shrink-0 overflow-hidden">
                              <div className="typo-module_t-body-md-strong__B-Sd1 typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9 truncate text-right font-semibold">
                                0.0 RON
                              </div>
                              <div className="typo-module_t-body-sm__UYoyX typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh mt-4 truncate text-right">
                                9 secs ago
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="w-full border-t border-solid border-tc-border">
                        <td
                          className="overflow-hidden text-ellipsis whitespace-nowrap pl-0"
                          style={{ width: "100%" }}
                        >
                          <div className="flex items-center justify-between gap-16 truncate py-16">
                            <div className="flex flex-1 items-center gap-12 truncate">
                              <div className="relative flex h-[42px] w-[42px] items-center justify-center rounded-full border border-solid border-tc-border shrink-0">
                                <svg
                                  className="absolute -right-4 -top-4"
                                  viewBox="0 0 20 20"
                                  width="20"
                                  height="20"
                                >
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
                                <svg
                                  className="shrink-0 text-tc-icon"
                                  viewBox="0 0 20 20"
                                  width="20"
                                  height="20"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M12.81 16.412a.3.3 0 0 1-.524-.2v-2.126a.3.3 0 0 0-.3-.3H2.3a.3.3 0 0 1-.3-.3V10.87a.3.3 0 0 1 .3-.3h15.031a.3.3 0 0 1 .224.5c-1.584 1.78-3.162 3.56-4.745 5.34ZM18 8.129a.3.3 0 0 1-.3.3H2.669a.3.3 0 0 1-.224-.5c1.584-1.78 3.161-3.56 4.745-5.34a.3.3 0 0 1 .524.199v2.126a.3.3 0 0 0 .3.3H17.7a.3.3 0 0 1 .3.3V8.13Z"
                                  ></path>
                                </svg>
                              </div>
                              <div className="flex flex-1 shrink flex-col items-start gap-4 truncate">
                                <a
                                  className="typo-module_t-body-md-strong__B-Sd1 typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9 link-module_link__Nwimt link-module_underline-mode-onlyWhenHover__alkql link-module_monochrome__yqKNC block max-w-full truncate"
                                  href="/tx/0x9f7d094a83d2fbe62d0d4f4632cbda3519f34617660f5e991f0c40fd78968119"
                                >
                                  0x9f7d…968119
                                </a>
                                <div className="flex max-w-full items-center gap-8 truncate">
                                  <div className="flex items-center gap-12 truncate max-w-full">
                                    <div className="flex items-center">
                                      <a
                                        className="typo-module_t-body-sm__UYoyX typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 link-module_link__Nwimt link-module_underline-mode-onlyWhenHover__alkql undefined link-module_dim__Ehg9K block truncate max-w-full"
                                        href="/address/0x9980335a2cb11cabaa7206d9e18496df1dec3a0d"
                                      >
                                        0x9980…3a0d
                                      </a>
                                    </div>
                                  </div>
                                  <svg
                                    className="shrink-0 text-tc-icon-dim"
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
                                  <div className="flex flex-1 truncate">
                                    <div className="flex items-center gap-12 truncate max-w-full">
                                      <div className="image-wrapper-module_container__5gv1w image-wrapper-module_sm__r69hP shrink-0">
                                        <svg
                                          viewBox="0 0 20 20"
                                          width="24"
                                          height="24"
                                        >
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
                                          className="typo-module_t-body-sm__UYoyX typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 link-module_link__Nwimt link-module_underline-mode-onlyWhenHover__alkql undefined link-module_dim__Ehg9K block truncate max-w-full"
                                          href="/address/0x2b7e3ddd371f4593d3d488e2eff14381d1d3ec58"
                                        >
                                          Kalodium Gacha
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="shrink-0 overflow-hidden">
                              <div className="typo-module_t-body-md-strong__B-Sd1 typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9 truncate text-right font-semibold">
                                0.0 RON
                              </div>
                              <div className="typo-module_t-body-sm__UYoyX typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh mt-4 truncate text-right">
                                9 secs ago
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="w-full border-t border-solid border-tc-border">
                        <td
                          className="overflow-hidden text-ellipsis whitespace-nowrap pl-0"
                          style={{ width: "100%" }}
                        >
                          <div className="flex items-center justify-between gap-16 truncate py-16">
                            <div className="flex flex-1 items-center gap-12 truncate">
                              <div className="relative flex h-[42px] w-[42px] items-center justify-center rounded-full border border-solid border-tc-border shrink-0">
                                <svg
                                  className="absolute -right-4 -top-4"
                                  viewBox="0 0 20 20"
                                  width="20"
                                  height="20"
                                >
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
                                <svg
                                  className="shrink-0 text-tc-icon"
                                  viewBox="0 0 20 20"
                                  width="20"
                                  height="20"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M12.81 16.412a.3.3 0 0 1-.524-.2v-2.126a.3.3 0 0 0-.3-.3H2.3a.3.3 0 0 1-.3-.3V10.87a.3.3 0 0 1 .3-.3h15.031a.3.3 0 0 1 .224.5c-1.584 1.78-3.162 3.56-4.745 5.34ZM18 8.129a.3.3 0 0 1-.3.3H2.669a.3.3 0 0 1-.224-.5c1.584-1.78 3.161-3.56 4.745-5.34a.3.3 0 0 1 .524.199v2.126a.3.3 0 0 0 .3.3H17.7a.3.3 0 0 1 .3.3V8.13Z"
                                  ></path>
                                </svg>
                              </div>
                              <div className="flex flex-1 shrink flex-col items-start gap-4 truncate">
                                <a
                                  className="typo-module_t-body-md-strong__B-Sd1 typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9 link-module_link__Nwimt link-module_underline-mode-onlyWhenHover__alkql link-module_monochrome__yqKNC block max-w-full truncate"
                                  href="/tx/0xba6f08232db2f067f815e42bb83767e89ce3698b91d8409732c66debed8f8773"
                                >
                                  0xba6f…8f8773
                                </a>
                                <div className="flex max-w-full items-center gap-8 truncate">
                                  <div className="flex items-center gap-12 truncate max-w-full">
                                    <div className="flex items-center">
                                      <a
                                        className="typo-module_t-body-sm__UYoyX typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 link-module_link__Nwimt link-module_underline-mode-onlyWhenHover__alkql undefined link-module_dim__Ehg9K block truncate max-w-full"
                                        href="/address/0x5c3b2866e0603211ad7b0db4ad3097022c984ea7"
                                      >
                                        0x5c3b…4ea7
                                      </a>
                                    </div>
                                  </div>
                                  <svg
                                    className="shrink-0 text-tc-icon-dim"
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
                                  <div className="flex flex-1 truncate">
                                    <div className="flex items-center gap-12 truncate max-w-full">
                                      <div className="image-wrapper-module_container__5gv1w image-wrapper-module_sm__r69hP shrink-0">
                                        <svg
                                          viewBox="0 0 20 20"
                                          width="24"
                                          height="24"
                                        >
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
                                          className="typo-module_t-body-sm__UYoyX typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 link-module_link__Nwimt link-module_underline-mode-onlyWhenHover__alkql undefined link-module_dim__Ehg9K block truncate max-w-full"
                                          href="/address/0x58ad3594758b0f74478dbc07168812ddf460a07f"
                                        >
                                          Daily Checkin Proxy
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="shrink-0 overflow-hidden">
                              <div className="typo-module_t-body-md-strong__B-Sd1 typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9 truncate text-right font-semibold">
                                0.0 RON
                              </div>
                              <div className="typo-module_t-body-sm__UYoyX typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh mt-4 truncate text-right">
                                9 secs ago
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-5">
              <div className="flex h-full flex-col rounded-2x border border-solid border-tc-border px-16 py-16 pb-0 md:px-24">
                <div className="mb-16 flex shrink-0 items-center justify-between">
                  <div className="typo-module_t-display-sm__9lHbO typo-module_mobile-t-display-sm__DJcdx typo-module_neutral__9orA9">
                    Blocks
                  </div>
                  <a href="/blocks">
                    <button className="button-module_button__Z331g button-module_intent-primary__SAO1x button-module_no-padding__LuCy0 button-module_variant-plain__hxRYr button-module_no-padding-button-root__hUZYB">
                      View all
                    </button>
                  </a>
                </div>
                <div className="w-full">
                  <table className="w-full table-fixed">
                    <tbody>
                      <tr className="w-full border-t border-solid border-tc-border">
                        <td
                          className="overflow-hidden text-ellipsis whitespace-nowrap pl-0"
                          style={{ width: "100%" }}
                        >
                          <div className="flex items-center justify-between gap-12 truncate">
                            <div className="flex items-center gap-12 truncate py-16">
                              <div className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full border border-solid border-tc-border">
                                <svg
                                  className="text-tc-icon"
                                  viewBox="0 0 20 20"
                                  width="20"
                                  height="20"
                                >
                                  <path
                                    fill="currentColor"
                                    fillRule="evenodd"
                                    d="m10 8.523 6-3.334-5.514-3.063a1 1 0 0 0-.972 0L4 5.189l6 3.334Zm1 1.732v7.333l5.486-3.048a1 1 0 0 0 .514-.874V6.922l-6 3.333ZM3 6.922l6 3.333v7.333L3.514 14.54A1 1 0 0 1 3 13.666V6.922Z"
                                    clipRule="evenodd"
                                  ></path>
                                </svg>
                              </div>
                              <div className="flex flex-col gap-4 truncate">
                                <div className="flex truncate">
                                  #
                                  <a
                                    className="typo-module_t-body-md-strong__B-Sd1 typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9 link-module_link__Nwimt link-module_underline-mode-onlyWhenHover__alkql link-module_monochrome__yqKNC truncate"
                                    href="/block/38970959"
                                  >
                                    38970959
                                  </a>
                                </div>
                                <div className="flex gap-4 truncate">
                                  <div className="typo-module_t-body-sm__UYoyX typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh">
                                    Validated by
                                  </div>
                                  <div className="flex items-center gap-12 truncate max-w-full">
                                    <a
                                      className="typo-module_t-body-sm__UYoyX typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 link-module_link__Nwimt link-module_underline-mode-onlyWhenHover__alkql undefined link-module_dim__Ehg9K block truncate max-w-full"
                                      href="/validator/0x52349003240770727900b06a3b3a90f5c0219ade"
                                    >
                                      Coco__Bear
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="shrink-0">
                              <div className="typo-module_t-body-md-strong__B-Sd1 typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9 text-right font-semibold uppercase">
                                16 TXs
                              </div>
                              <div className="typo-module_t-body-sm__UYoyX typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh truncate text-right">
                                9 secs ago
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="w-full border-t border-solid border-tc-border">
                        <td
                          className="overflow-hidden text-ellipsis whitespace-nowrap pl-0"
                          style={{ width: "100%" }}
                        >
                          <div className="flex items-center justify-between gap-12 truncate">
                            <div className="flex items-center gap-12 truncate py-16">
                              <div className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full border border-solid border-tc-border">
                                <svg
                                  className="text-tc-icon"
                                  viewBox="0 0 20 20"
                                  width="20"
                                  height="20"
                                >
                                  <path
                                    fill="currentColor"
                                    fillRule="evenodd"
                                    d="m10 8.523 6-3.334-5.514-3.063a1 1 0 0 0-.972 0L4 5.189l6 3.334Zm1 1.732v7.333l5.486-3.048a1 1 0 0 0 .514-.874V6.922l-6 3.333ZM3 6.922l6 3.333v7.333L3.514 14.54A1 1 0 0 1 3 13.666V6.922Z"
                                    clipRule="evenodd"
                                  ></path>
                                </svg>
                              </div>
                              <div className="flex flex-col gap-4 truncate">
                                <div className="flex truncate">
                                  #
                                  <a
                                    className="typo-module_t-body-md-strong__B-Sd1 typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9 link-module_link__Nwimt link-module_underline-mode-onlyWhenHover__alkql link-module_monochrome__yqKNC truncate"
                                    href="/block/38970958"
                                  >
                                    38970958
                                  </a>
                                </div>
                                <div className="flex gap-4 truncate">
                                  <div className="typo-module_t-body-sm__UYoyX typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh">
                                    Validated by
                                  </div>
                                  <div className="flex items-center gap-12 truncate max-w-full">
                                    <a
                                      className="typo-module_t-body-sm__UYoyX typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 link-module_link__Nwimt link-module_underline-mode-onlyWhenHover__alkql undefined link-module_dim__Ehg9K block truncate max-w-full"
                                      href="/validator/0x4e7ea047ec7e95c7a02cb117128b94ccdd8356bf"
                                    >
                                      Ronin Catalyst
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="shrink-0">
                              <div className="typo-module_t-body-md-strong__B-Sd1 typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9 text-right font-semibold uppercase">
                                19 TXs
                              </div>
                              <div className="typo-module_t-body-sm__UYoyX typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh truncate text-right">
                                12 secs ago
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="w-full border-t border-solid border-tc-border">
                        <td
                          className="overflow-hidden text-ellipsis whitespace-nowrap pl-0"
                          style={{ width: "100%" }}
                        >
                          <div className="flex items-center justify-between gap-12 truncate">
                            <div className="flex items-center gap-12 truncate py-16">
                              <div className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full border border-solid border-tc-border">
                                <svg
                                  className="text-tc-icon"
                                  viewBox="0 0 20 20"
                                  width="20"
                                  height="20"
                                >
                                  <path
                                    fill="currentColor"
                                    fillRule="evenodd"
                                    d="m10 8.523 6-3.334-5.514-3.063a1 1 0 0 0-.972 0L4 5.189l6 3.334Zm1 1.732v7.333l5.486-3.048a1 1 0 0 0 .514-.874V6.922l-6 3.333ZM3 6.922l6 3.333v7.333L3.514 14.54A1 1 0 0 1 3 13.666V6.922Z"
                                    clipRule="evenodd"
                                  ></path>
                                </svg>
                              </div>
                              <div className="flex flex-col gap-4 truncate">
                                <div className="flex truncate">
                                  #
                                  <a
                                    className="typo-module_t-body-md-strong__B-Sd1 typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9 link-module_link__Nwimt link-module_underline-mode-onlyWhenHover__alkql link-module_monochrome__yqKNC truncate"
                                    href="/block/38970957"
                                  >
                                    38970957
                                  </a>
                                </div>
                                <div className="flex gap-4 truncate">
                                  <div className="typo-module_t-body-sm__UYoyX typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh">
                                    Validated by
                                  </div>
                                  <div className="flex items-center gap-12 truncate max-w-full">
                                    <a
                                      className="typo-module_t-body-sm__UYoyX typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 link-module_link__Nwimt link-module_underline-mode-onlyWhenHover__alkql undefined link-module_dim__Ehg9K block truncate max-w-full"
                                      href="/validator/0x4125217ce8868553e1f61bb030426efd330c2d68"
                                    >
                                      CyberKongz
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="shrink-0">
                              <div className="typo-module_t-body-md-strong__B-Sd1 typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9 text-right font-semibold uppercase">
                                23 TXs
                              </div>
                              <div className="typo-module_t-body-sm__UYoyX typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh truncate text-right">
                                15 secs ago
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="w-full border-t border-solid border-tc-border">
                        <td
                          className="overflow-hidden text-ellipsis whitespace-nowrap pl-0"
                          style={{ width: "100%" }}
                        >
                          <div className="flex items-center justify-between gap-12 truncate">
                            <div className="flex items-center gap-12 truncate py-16">
                              <div className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full border border-solid border-tc-border">
                                <svg
                                  className="text-tc-icon"
                                  viewBox="0 0 20 20"
                                  width="20"
                                  height="20"
                                >
                                  <path
                                    fill="currentColor"
                                    fillRule="evenodd"
                                    d="m10 8.523 6-3.334-5.514-3.063a1 1 0 0 0-.972 0L4 5.189l6 3.334Zm1 1.732v7.333l5.486-3.048a1 1 0 0 0 .514-.874V6.922l-6 3.333ZM3 6.922l6 3.333v7.333L3.514 14.54A1 1 0 0 1 3 13.666V6.922Z"
                                    clipRule="evenodd"
                                  ></path>
                                </svg>
                              </div>
                              <div className="flex flex-col gap-4 truncate">
                                <div className="flex truncate">
                                  #
                                  <a
                                    className="typo-module_t-body-md-strong__B-Sd1 typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9 link-module_link__Nwimt link-module_underline-mode-onlyWhenHover__alkql link-module_monochrome__yqKNC truncate"
                                    href="/block/38970956"
                                  >
                                    38970956
                                  </a>
                                </div>
                                <div className="flex gap-4 truncate">
                                  <div className="typo-module_t-body-sm__UYoyX typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh">
                                    Validated by
                                  </div>
                                  <div className="flex items-center gap-12 truncate max-w-full">
                                    <a
                                      className="typo-module_t-body-sm__UYoyX typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 link-module_link__Nwimt link-module_underline-mode-onlyWhenHover__alkql undefined link-module_dim__Ehg9K block truncate max-w-full"
                                      href="/validator/0x32d619dc6188409cebbc52f921ab306f07db085b"
                                    >
                                      Google
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="shrink-0">
                              <div className="typo-module_t-body-md-strong__B-Sd1 typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9 text-right font-semibold uppercase">
                                21 TXs
                              </div>
                              <div className="typo-module_t-body-sm__UYoyX typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh truncate text-right">
                                18 secs ago
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="w-full border-t border-solid border-tc-border">
                        <td
                          className="overflow-hidden text-ellipsis whitespace-nowrap pl-0"
                          style={{ width: "100%" }}
                        >
                          <div className="flex items-center justify-between gap-12 truncate">
                            <div className="flex items-center gap-12 truncate py-16">
                              <div className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full border border-solid border-tc-border">
                                <svg
                                  className="text-tc-icon"
                                  viewBox="0 0 20 20"
                                  width="20"
                                  height="20"
                                >
                                  <path
                                    fill="currentColor"
                                    fillRule="evenodd"
                                    d="m10 8.523 6-3.334-5.514-3.063a1 1 0 0 0-.972 0L4 5.189l6 3.334Zm1 1.732v7.333l5.486-3.048a1 1 0 0 0 .514-.874V6.922l-6 3.333ZM3 6.922l6 3.333v7.333L3.514 14.54A1 1 0 0 1 3 13.666V6.922Z"
                                    clipRule="evenodd"
                                  ></path>
                                </svg>
                              </div>
                              <div className="flex flex-col gap-4 truncate">
                                <div className="flex truncate">
                                  #
                                  <a
                                    className="typo-module_t-body-md-strong__B-Sd1 typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9 link-module_link__Nwimt link-module_underline-mode-onlyWhenHover__alkql link-module_monochrome__yqKNC truncate"
                                    href="/block/38970955"
                                  >
                                    38970955
                                  </a>
                                </div>
                                <div className="flex gap-4 truncate">
                                  <div className="typo-module_t-body-sm__UYoyX typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh">
                                    Validated by
                                  </div>
                                  <div className="flex items-center gap-12 truncate max-w-full">
                                    <a
                                      className="typo-module_t-body-sm__UYoyX typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 link-module_link__Nwimt link-module_underline-mode-onlyWhenHover__alkql undefined link-module_dim__Ehg9K block truncate max-w-full"
                                      href="/validator/0x2bddcaae1c6ccd53e436179b3fc07307ee6f3ef8"
                                    >
                                      Owl.eth
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="shrink-0">
                              <div className="typo-module_t-body-md-strong__B-Sd1 typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9 text-right font-semibold uppercase">
                                19 TXs
                              </div>
                              <div className="typo-module_t-body-sm__UYoyX typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh truncate text-right">
                                21 secs ago
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
