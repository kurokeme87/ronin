import React from "react";

const HeaderConnected = () => {
  return (
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
      <a
        className="typo-module_t-body-md-strong__B-Sd1 typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9 link-module_link__Nwimt link-module_underline-mode-onlyWhenHover__alkql undefined"
        href="/address/0x00d5170C5b0FaD854236147B0EAFf040dD2E8aCF"
      >
        <svg
          className="cursor-pointer text-tc-icon"
          viewBox="0 0 20 20"
          width="24"
          height="24"
        >
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M12.828 8.828a4 4 0 1 1-5.656-5.656 4 4 0 0 1 5.656 5.656ZM4 14.77C4 11.905 7.997 11 10 11c2.002 0 6 .905 6 3.77V18H4v-3.23Z"
            clipRule="evenodd"
          ></path>
        </svg>
      </a>
      <button className="button-module_button__Z331g button-module_intent-default__f1RNz button-module_size-default__caw9O button-module_icon-button__-UBF4 button-module_variant-plain__hxRYr button-module_button-root__0roWY">
        <span className="button-module_icon-wrapper__VV4f-">
          <svg
            className="button-module_icon__-nXel"
            viewBox="0 0 20 20"
            width="16"
            height="16"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="m13.6 5 2.7-2.7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-14 14c-.2.2-.4.3-.7.3-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l2.5-2.5c-1-.9-1.9-1.9-2.4-2.7-.5-.6-.5-1.5 0-2.2C3.6 7.1 6.4 4 10 4c1.3 0 2.5.4 3.6 1ZM7 10c0 .5.1.9.3 1.3l4-4c-.4-.2-.8-.3-1.3-.3-1.7 0-3 1.3-3 3Zm1.4 5.8 8.2-8.2c.175.22.35.42.51.6.202.232.378.432.49.6.5.7.5 1.6 0 2.3-1.2 1.8-4 4.9-7.6 4.9-.5 0-1.1-.1-1.6-.2Z"
              clipRule="evenodd"
            ></path>
          </svg>
        </span>
      </button>
      <div className="shrink-0 cursor-pointer">
        <div className="avatar-module_size-m__BgVbo">
          <svg
            viewBox="0 0 80 80"
            fill="none"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
          >
            <mask
              id=":r5:"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="80"
              height="80"
            >
              <rect width="80" height="80" rx="160" fill="#FFFFFF"></rect>
            </mask>
            <g mask="url(#:r5:)">
              <rect width="80" height="80" fill="#E3E8F2"></rect>
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
                style={{ mixBlendMode: "overlay" }}
              ></path>
            </g>
            <defs>
              <filter
                id="prefix__filter0_f"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
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
    </div>
  );
};

export default HeaderConnected;
