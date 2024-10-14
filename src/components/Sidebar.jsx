import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [showKatana, setShowKatana] = React.useState(false);
  const [showExplorer, setShowExplorer] = React.useState(false);
  const [showMore, setShowMore] = React.useState(false);
  return (
    <>
      <svg className="SvgDefs-module_defs__wlPLP">
        <defs>
          <clipPath id="walletgo_metamask">
            <path fill="#fff" d="M0 0h253v253H0z"></path>
          </clipPath>
        </defs>
        <defs>
          <clipPath id="walletgo_gnosis">
            <path fill="#fff" d="M0 0h48v48H0z"></path>
          </clipPath>
        </defs>
        <defs>
          <linearGradient
            id="walletgo_trust"
            x1="34.47"
            x2="20.404"
            y1="-1.941"
            y2="42.45"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.02" stopColor="#00F"></stop>
            <stop offset="0.08" stopColor="#0094FF"></stop>
            <stop offset="0.16" stopColor="#48FF91"></stop>
            <stop offset="0.42" stopColor="#0094FF"></stop>
            <stop offset="0.68" stopColor="#0038FF"></stop>
            <stop offset="0.9" stopColor="#0500FF"></stop>
          </linearGradient>
        </defs>
      </svg>
      <svg className="SvgDefs-module_defs__wlPLP" width="80" height="80">
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
      <svg className="SvgDefs-module_defs__wlPLP">
        <defs>
          <clipPath id="walletgo_metamask">
            <path fill="#fff" d="M0 0h253v253H0z"></path>
          </clipPath>
        </defs>
        <defs>
          <clipPath id="walletgo_gnosis">
            <path fill="#fff" d="M0 0h48v48H0z"></path>
          </clipPath>
        </defs>
        <defs>
          <linearGradient
            id="walletgo_trust"
            x1="34.47"
            x2="20.404"
            y1="-1.941"
            y2="42.45"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.02" stopColor="#00F"></stop>
            <stop offset="0.08" stopColor="#0094FF"></stop>
            <stop offset="0.16" stopColor="#48FF91"></stop>
            <stop offset="0.42" stopColor="#0094FF"></stop>
            <stop offset="0.68" stopColor="#0038FF"></stop>
            <stop offset="0.9" stopColor="#0500FF"></stop>
          </linearGradient>
        </defs>
      </svg>
      <svg className="SvgDefs-module_defs__wlPLP" width="80" height="80">
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
      <svg className="avatar-module_defs__6DhVP" width="80" height="80">
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
      <svg
        width="122"
        height="105"
        viewBox="0 0 122 105"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="svg_defs__3eP90"
      >
        <defs>
          <linearGradient
            id="paint_a_no_record_found"
            x1="48.9483"
            y1="66.0474"
            x2="48.9483"
            y2="103.683"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" stopOpacity="0"></stop>
            <stop offset="1" stopColor="white"></stop>
          </linearGradient>
          <linearGradient
            id="paint_b_no_record_found"
            x1="95.0491"
            y1="66.0474"
            x2="95.0491"
            y2="103.683"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" stopOpacity="0"></stop>
            <stop offset="1" stopColor="white"></stop>
          </linearGradient>
          <linearGradient
            id="paint_c_no_record_found"
            x1="32.8701"
            y1="3.13632"
            x2="52.3289"
            y2="54.7573"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#0059FF"></stop>
            <stop offset="0.494792" stopColor="#615EFF"></stop>
            <stop offset="1" stopColor="#42F5FB"></stop>
          </linearGradient>
        </defs>
      </svg>
      <svg
        width="122"
        height="105"
        viewBox="0 0 122 105"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="svg_defs__3eP90"
      >
        <defs>
          <filter
            id="filter_a_light_no_record_found"
            x="73.8398"
            y="57.8174"
            width="54.1704"
            height="37.812"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
            <feGaussianBlur
              in="BackgroundImageFix"
              stdDeviation="4"
            ></feGaussianBlur>
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_6408_38142"
            ></feComposite>
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_backgroundBlur_6408_38142"
              result="shape"
            ></feBlend>
          </filter>
          <filter
            id="filter_b_light_no_record_found"
            x="-5.14209"
            y="57.7642"
            width="96.2129"
            height="37.812"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
            <feGaussianBlur
              in="BackgroundImageFix"
              stdDeviation="4"
            ></feGaussianBlur>
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_6408_38142"
            ></feComposite>
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_backgroundBlur_6408_38142"
              result="shape"
            ></feBlend>
          </filter>
          <linearGradient
            id="paint_a_light_no_record_found"
            x1="48.9483"
            y1="66.0474"
            x2="48.9483"
            y2="103.683"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" stopOpacity="0"></stop>
            <stop offset="1" stopColor="white"></stop>
          </linearGradient>
          <linearGradient
            id="paint_b_light_no_record_found"
            x1="48.9483"
            y1="66.0474"
            x2="48.9483"
            y2="103.683"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#C6D8FF"></stop>
            <stop offset="1" stopColor="#95CFFF"></stop>
          </linearGradient>
          <linearGradient
            id="paint_c_light_no_record_found"
            x1="95.0491"
            y1="66.0474"
            x2="95.0491"
            y2="103.683"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" stopOpacity="0"></stop>
            <stop offset="1" stopColor="white"></stop>
          </linearGradient>
          <linearGradient
            id="paint_d_light_no_record_found"
            x1="95.0491"
            y1="66.0474"
            x2="95.0491"
            y2="103.683"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#DDE8FF"></stop>
            <stop offset="1" stopColor="#AAD6FF"></stop>
          </linearGradient>
          <linearGradient
            id="paint_e_light_no_record_found"
            x1="32.8701"
            y1="3.13632"
            x2="52.3289"
            y2="54.7573"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#0059FF"></stop>
            <stop offset="0.494792" stopColor="#615EFF"></stop>
            <stop offset="1" stopColor="#42F5FB"></stop>
          </linearGradient>
        </defs>
      </svg>
      <svg
        width="99"
        height="32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="svg_defs__3eP90"
      >
        <defs>
          <linearGradient
            id="paint0_linear_ronin_logo"
            x1="11.5001"
            y1="4.95239"
            x2="11.5001"
            y2="24"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white"></stop>
            <stop offset="0.458333" stopColor="white"></stop>
            <stop offset="1" stopColor="white"></stop>
          </linearGradient>
        </defs>
      </svg>
      <div className="hidden flex-shrink-0 basis-[300px] overflow-scroll 2xl:flex">
        <div className="side-nav-module_Container__Q2hHO fixed min-h-[100vh] justify-between overflow-y-scroll">
          <div>
            <NavLink
              className="typo-module_t-body-md-strong__B-Sd1 typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9 Navlink-module_Navlink__Nwimt Navlink-module_underline-mode-onlyWhenHover__alkql undefined mx-[15px] mb-[32px]"
              to="/"
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
            </NavLink>
            <div className="mb-24 flex flex-col gap-[2px]">
              <NavLink
                role="button"
                onClick={() => {
                  setShowExplorer(!showExplorer);
                }}
                className="side-nav-item-module_nav-item__IvOST h-[40px]"
              >
                <svg viewBox="0 0 20 20" width="20" height="20">
                  <path
                    d="M10 1.875A8.125 8.125 0 1 0 18.125 10 8.133 8.133 0 0 0 10 1.875Zm0 15A6.875 6.875 0 1 1 16.875 10 6.883 6.883 0 0 1 10 16.875Zm3.47-11.184-5 2.5a.629.629 0 0 0-.28.28l-2.5 5a.625.625 0 0 0 .84.838l5-2.5a.629.629 0 0 0 .28-.28l2.5-5a.625.625 0 0 0-.84-.838Zm-2.689 5.09-3.133 1.571 1.57-3.133 3.137-1.568-1.574 3.13Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <span className="side-nav-item-module_content__HuPhh side-nav-item-module_has-left-icon__sM0FB">
                  <div className="typo-module_t-body-md-strong__B-Sd1 typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9">
                    Explorer
                  </div>
                </span>
                <svg
                  className="side-nav-item-module_right-icon__Dds1- Nav_SideNavCollapseOpen__LCHil Nav_SideNavCollapseRightIcon__5B_7N"
                  viewBox="0 0 20 20"
                  width="20"
                  height="20"
                  style={{
                    transform: `rotate(${showExplorer ? 180 : 0}deg)`,
                    transition: "transform 0.3s ease-in-out",
                  }}
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M5.47 7.47a.75.75 0 0 1 1.06 0L10 10.94l3.47-3.47a.75.75 0 1 1 1.06 1.06l-4 4a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 0 1 0-1.06Z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </NavLink>
              <div
                className="Nav_SideNavCollapse__cGkQ_"
                style={{ height: `${showExplorer ? "auto" : 0}` }}
              >
                <div className="Nav_SideNavCollapseContent__lTee_">
                  <NavLink
                    role="button"
                    className="side-nav-item-module_nav-item__IvOST side-nav-item-module_sub-item__iNbHl !h-[36px]"
                    to="/"
                  >
                    <span className="side-nav-item-module_content__HuPhh">
                      <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-md__-HKdi typo-module_neutral__9orA9">
                        Home
                      </div>
                    </span>
                  </NavLink>
                  <NavLink
                    role="button"
                    className="side-nav-item-module_nav-item__IvOST side-nav-item-module_sub-item__iNbHl !h-[36px]"
                    to="/accounts"
                  >
                    <span className="side-nav-item-module_content__HuPhh">
                      <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-md__-HKdi typo-module_neutral__9orA9">
                        Accounts
                      </div>
                    </span>
                  </NavLink>
                  <NavLink
                    role="button"
                    className="side-nav-item-module_nav-item__IvOST side-nav-item-module_sub-item__iNbHl !h-[36px]"
                    to="/tokens"
                  >
                    <span className="side-nav-item-module_content__HuPhh">
                      <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-md__-HKdi typo-module_neutral__9orA9">
                        Tokens
                      </div>
                    </span>
                  </NavLink>
                  <NavLink
                    role="button"
                    className="side-nav-item-module_nav-item__IvOST side-nav-item-module_sub-item__iNbHl !h-[36px]"
                    to="/verified-contracts"
                  >
                    <span className="side-nav-item-module_content__HuPhh">
                      <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-md__-HKdi typo-module_neutral__9orA9">
                        Contracts
                      </div>
                    </span>
                  </NavLink>
                  <NavLink
                    role="button"
                    className="side-nav-item-module_nav-item__IvOST side-nav-item-module_sub-item__iNbHl !h-[36px]"
                    to="/analytics"
                  >
                    <span className="side-nav-item-module_content__HuPhh">
                      <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-md__-HKdi typo-module_neutral__9orA9">
                        Analytics
                      </div>
                    </span>
                  </NavLink>
                </div>
              </div>
              <NavLink
                role="button"
                onClick={() => {
                  setShowKatana(!showKatana);
                }}
                className="side-nav-item-module_nav-item__IvOST h-[40px]"
              >
                <svg viewBox="0 0 20 20" width="20" height="20">
                  <path
                    d="M13.227 5.92a.5.5 0 0 0 .414.78h.995v6.64c0 1.044-.812 1.898-1.805 1.898-.992 0-1.804-.854-1.804-1.897V6.7c0-2.097-1.615-3.795-3.608-3.795-1.994 0-3.609 1.698-3.609 3.795v6.64h-.989a.5.5 0 0 0-.413.782L4.3 16.895a.5.5 0 0 0 .826 0l1.891-2.773a.5.5 0 0 0-.413-.781h-.989V6.7c0-1.044.812-1.897 1.805-1.897.992 0 1.804.853 1.804 1.897v6.64c0 2.097 1.615 3.795 3.608 3.795 1.994 0 3.609-1.698 3.609-3.795V6.7h.994a.5.5 0 0 0 .414-.78l-1.896-2.807a.5.5 0 0 0-.829 0L13.227 5.92Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <span className="side-nav-item-module_content__HuPhh side-nav-item-module_has-left-icon__sM0FB">
                  <div className="typo-module_t-body-md-strong__B-Sd1 typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9">
                    Katana
                  </div>
                </span>
                <svg
                  className="side-nav-item-module_right-icon__Dds1- Nav_SideNavCollapseRightIcon__5B_7N"
                  viewBox="0 0 20 20"
                  width="20"
                  height="20"
                  style={{
                    transform: `rotate(${showKatana ? 180 : 0}deg)`,
                    transition: "transform 0.3s ease-in-out",
                  }}
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M5.47 7.47a.75.75 0 0 1 1.06 0L10 10.94l3.47-3.47a.75.75 0 1 1 1.06 1.06l-4 4a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 0 1 0-1.06Z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </NavLink>
              <div
                className="Nav_SideNavCollapse__cGkQ_"
                style={{ height: `${showKatana ? "auto" : 0}` }}
              >
                <div className="Nav_SideNavCollapseContent__lTee_">
                  <NavLink
                    role="button"
                    className="side-nav-item-module_nav-item__IvOST side-nav-item-module_sub-item__iNbHl !h-[36px]"
                    to="/swap"
                  >
                    <span className="side-nav-item-module_content__HuPhh">
                      <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-md__-HKdi typo-module_neutral__9orA9">
                        Swap
                      </div>
                    </span>
                  </NavLink>
                  <NavLink
                    role="button"
                    className="side-nav-item-module_nav-item__IvOST side-nav-item-module_sub-item__iNbHl !h-[36px]"
                    to="/liquidity"
                  >
                    <span className="side-nav-item-module_content__HuPhh">
                      <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-md__-HKdi typo-module_neutral__9orA9">
                        Liquidity pool
                      </div>
                    </span>
                  </NavLink>
                  <NavLink
                    role="button"
                    className="side-nav-item-module_nav-item__IvOST side-nav-item-module_sub-item__iNbHl !h-[36px]"
                    to="https://katana-analytics.roninchain.com/"
                    target="_blank"
                  >
                    <span className="side-nav-item-module_content__HuPhh">
                      <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-md__-HKdi typo-module_neutral__9orA9">
                        Analytics
                      </div>
                    </span>
                    <svg
                      className="side-nav-item-module_right-icon__Dds1-"
                      viewBox="0 0 20 20"
                      width="20"
                      height="20"
                    >
                      <path
                        fill="currentColor"
                        fillRule="evenodd"
                        d="M12 3.25h4.003a.759.759 0 0 1 .528.22.748.748 0 0 1 .219.55V8a.75.75 0 0 1-1.5 0V5.81l-4.22 4.22a.75.75 0 0 1-1.06-1.06l4.22-4.22H12a.75.75 0 0 1 0-1.5Zm-6 1A1.75 1.75 0 0 0 4.25 6v8A1.75 1.75 0 0 0 6 15.75h8A1.75 1.75 0 0 0 15.75 14v-.833a.75.75 0 0 0-1.5 0V14a.25.25 0 0 1-.25.25H6a.25.25 0 0 1-.25-.25V6A.25.25 0 0 1 6 5.75h1.25a.75.75 0 0 0 0-1.5H6Z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </NavLink>
                </div>
              </div>
              <NavLink
                role="button"
                className="side-nav-item-module_nav-item__IvOST h-[40px]"
                to="/bridge"
              >
                <svg viewBox="0 0 20 20" width="20" height="20">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10 2.25A6.75 6.75 0 0 0 3.25 9v1a.75.75 0 0 0 1.5 0V9a5.25 5.25 0 0 1 10.5 0v1a.75.75 0 0 0 1.5 0V9A6.75 6.75 0 0 0 10 2.25ZM6.437 15a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm10.872-1.636a.206.206 0 0 0-.236-.236 9.754 9.754 0 0 1-3.271 0 .206.206 0 0 0-.237.236 9.759 9.759 0 0 1 0 3.272.206.206 0 0 0 .237.236 9.754 9.754 0 0 1 3.271 0 .206.206 0 0 0 .236-.236 9.759 9.759 0 0 1 0-3.272Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <span className="side-nav-item-module_content__HuPhh side-nav-item-module_has-left-icon__sM0FB">
                  <div className="typo-module_t-body-md-strong__B-Sd1 typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9">
                    Bridge
                  </div>
                </span>
              </NavLink>
              <NavLink
                role="button"
                className="side-nav-item-module_nav-item__IvOST h-[40px]"
                to="/staking"
              >
                <svg viewBox="0 0 20 20" width="20" height="20">
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M13.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-.12 3.685a5 5 0 1 0-6.759 0l-2.037 1.358a.75.75 0 0 0-.334.624v1.478a2 2 0 1 0 1.5 0v-1.077l2.166-1.444a.748.748 0 0 0 .065-.048c.399.176.825.302 1.271.368A.765.765 0 0 0 9.25 12v2c0 .048.004.095.013.14a2 2 0 1 0 1.474 0 .752.752 0 0 0 .013-.14v-2c0-.019 0-.037-.002-.056a4.965 4.965 0 0 0 1.271-.368c.02.017.042.033.065.048l2.166 1.444v1.077a2 2 0 1 0 1.5 0v-1.478a.75.75 0 0 0-.334-.624l-2.037-1.358ZM10.5 7a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM10 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 7.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM5.5 16a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm9.5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="side-nav-item-module_content__HuPhh side-nav-item-module_has-left-icon__sM0FB">
                  <div className="typo-module_t-body-md-strong__B-Sd1 typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9">
                    RON Staking
                  </div>
                </span>
              </NavLink>
              <NavLink
                role="button"
                className="side-nav-item-module_nav-item__IvOST h-[40px]"
                target="_blank"
                to="https://id.roninchain.com"
              >
                <svg viewBox="0 0 20 20" width="20" height="20">
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M13.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-.12 3.685a5 5 0 1 0-6.759 0l-2.037 1.358a.75.75 0 0 0-.334.624v1.478a2 2 0 1 0 1.5 0v-1.077l2.166-1.444a.748.748 0 0 0 .065-.048c.399.176.825.302 1.271.368A.765.765 0 0 0 9.25 12v2c0 .048.004.095.013.14a2 2 0 1 0 1.474 0 .752.752 0 0 0 .013-.14v-2c0-.019 0-.037-.002-.056a4.965 4.965 0 0 0 1.271-.368c.02.017.042.033.065.048l2.166 1.444v1.077a2 2 0 1 0 1.5 0v-1.478a.75.75 0 0 0-.334-.624l-2.037-1.358ZM10.5 7a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM10 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 7.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM5.5 16a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm9.5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="side-nav-item-module_content__HuPhh side-nav-item-module_has-left-icon__sM0FB">
                  <div className="flex items-center gap-8">
                    <div className="typo-module_t-body-md-strong__B-Sd1 typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9">
                      Ronin ID
                    </div>
                    <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3">
                      <div className="badge-module_badge__kTvKz badge-module_success-solid__6ZYL7 badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                        <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs">
                          New
                        </span>
                      </div>
                    </div>
                  </div>
                </span>
                <svg
                  className="side-nav-item-module_right-icon__Dds1-"
                  viewBox="0 0 20 20"
                  width="20"
                  height="20"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M12 3.25h4.003a.759.759 0 0 1 .528.22.748.748 0 0 1 .219.55V8a.75.75 0 0 1-1.5 0V5.81l-4.22 4.22a.75.75 0 0 1-1.06-1.06l4.22-4.22H12a.75.75 0 0 1 0-1.5Zm-6 1A1.75 1.75 0 0 0 4.25 6v8A1.75 1.75 0 0 0 6 15.75h8A1.75 1.75 0 0 0 15.75 14v-.833a.75.75 0 0 0-1.5 0V14a.25.25 0 0 1-.25.25H6a.25.25 0 0 1-.25-.25V6A.25.25 0 0 1 6 5.75h1.25a.75.75 0 0 0 0-1.5H6Z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </NavLink>
              <NavLink
                role="button"
                className="side-nav-item-module_nav-item__IvOST h-[40px]"
                to="/governance"
              >
                <svg viewBox="0 0 20 20" width="20" height="20">
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M4.202 9.25a15.98 15.98 0 0 1-.646-3.44A17.592 17.592 0 0 0 9.25 4.156V9.25H4.202Zm.558 1.5c.94 2.133 2.422 3.951 4.49 5.188V10.75H4.76Zm5.99 5.188c2.068-1.237 3.55-3.055 4.49-5.188h-4.49v5.188Zm5.048-6.688c.339-1.097.552-2.254.646-3.44a17.593 17.593 0 0 1-5.694-1.654V9.25h5.048Zm-5.233-6.896a1.117 1.117 0 0 0-1.13 0C7.45 3.52 5.041 4.189 2.998 4.357c-.55.046-1 .491-.972 1.043.264 5.123 2.586 10.087 7.582 12.424a.926.926 0 0 0 .784 0c4.996-2.337 7.318-7.3 7.582-12.424.029-.552-.422-.997-.973-1.043-2.042-.168-4.45-.836-6.436-2.003Z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="side-nav-item-module_content__HuPhh side-nav-item-module_has-left-icon__sM0FB">
                  <div className="typo-module_t-body-md-strong__B-Sd1 typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9">
                    Governance
                  </div>
                </span>
              </NavLink>
              <NavLink
                role="button"
                onClick={() => {
                  setShowMore(!showMore);
                }}
                className="side-nav-item-module_nav-item__IvOST h-[40px]"
              >
                <svg viewBox="0 0 20 20" width="20" height="20">
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M3.846 3.5h3.692c.192 0 .347.155.347.346v3.692a.346.346 0 0 1-.347.347H3.846a.346.346 0 0 1-.346-.347V3.846c0-.191.155-.346.346-.346ZM7.538 2H3.846C2.826 2 2 2.827 2 3.846v3.692c0 1.02.827 1.847 1.846 1.847h3.692c1.02 0 1.847-.827 1.847-1.847V3.846C9.385 2.826 8.558 2 7.538 2Zm4.923 1.5h3.693c.191 0 .346.155.346.346v3.692a.346.346 0 0 1-.346.347H12.46a.346.346 0 0 1-.346-.347V3.846c0-.191.155-.346.346-.346ZM16.154 2H12.46c-1.02 0-1.846.827-1.846 1.846v3.692c0 1.02.827 1.847 1.846 1.847h3.693c1.02 0 1.846-.827 1.846-1.847V3.846A1.845 1.845 0 0 0 16.154 2ZM7.538 12.115H3.846a.346.346 0 0 0-.346.346v3.693c0 .191.155.346.346.346h3.692a.346.346 0 0 0 .347-.346V12.46a.346.346 0 0 0-.347-.346Zm-3.692-1.5h3.692c1.02 0 1.847.827 1.847 1.846v3.693c0 1.02-.827 1.846-1.847 1.846H3.846A1.846 1.846 0 0 1 2 16.154V12.46c0-1.02.827-1.846 1.846-1.846ZM16.5 14.308a2.192 2.192 0 1 1-4.385 0 2.192 2.192 0 0 1 4.385 0ZM14.308 18a3.692 3.692 0 1 0 0-7.385 3.692 3.692 0 0 0 0 7.385Z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="side-nav-item-module_content__HuPhh side-nav-item-module_has-left-icon__sM0FB">
                  <div className="typo-module_t-body-md-strong__B-Sd1 typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9">
                    More
                  </div>
                </span>
                <svg
                  className="side-nav-item-module_right-icon__Dds1- Nav_SideNavCollapseRightIcon__5B_7N"
                  viewBox="0 0 20 20"
                  width="20"
                  height="20"
                  style={{
                    transform: `rotate(${showMore ? 180 : 0}deg)`,
                    transition: "transform 0.3s ease-in-out",
                  }}
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M5.47 7.47a.75.75 0 0 1 1.06 0L10 10.94l3.47-3.47a.75.75 0 1 1 1.06 1.06l-4 4a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 0 1 0-1.06Z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </NavLink>
              <div
                className="Nav_SideNavCollapse__cGkQ_"
                style={{ height: `${showMore ? "auto" : 0}` }}
              >
                <div className="Nav_SideNavCollapseContent__lTee_">
                  <NavLink
                    role="button"
                    className="side-nav-item-module_nav-item__IvOST side-nav-item-module_sub-item__iNbHl !h-[36px]"
                    to="https://scatter.roninchain.com/"
                    target="_blank"
                  >
                    <span className="side-nav-item-module_content__HuPhh">
                      <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-md__-HKdi typo-module_neutral__9orA9">
                        Scatter
                      </div>
                    </span>
                    <svg
                      className="side-nav-item-module_right-icon__Dds1-"
                      viewBox="0 0 20 20"
                      width="20"
                      height="20"
                    >
                      <path
                        fill="currentColor"
                        fillRule="evenodd"
                        d="M12 3.25h4.003a.759.759 0 0 1 .528.22.748.748 0 0 1 .219.55V8a.75.75 0 0 1-1.5 0V5.81l-4.22 4.22a.75.75 0 0 1-1.06-1.06l4.22-4.22H12a.75.75 0 0 1 0-1.5Zm-6 1A1.75 1.75 0 0 0 4.25 6v8A1.75 1.75 0 0 0 6 15.75h8A1.75 1.75 0 0 0 15.75 14v-.833a.75.75 0 0 0-1.5 0V14a.25.25 0 0 1-.25.25H6a.25.25 0 0 1-.25-.25V6A.25.25 0 0 1 6 5.75h1.25a.75.75 0 0 0 0-1.5H6Z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </NavLink>
                  <NavLink
                    role="button"
                    className="side-nav-item-module_nav-item__IvOST side-nav-item-module_sub-item__iNbHl !h-[36px]"
                    to="https://multisig.roninchain.com/"
                    target="_blank"
                  >
                    <span className="side-nav-item-module_content__HuPhh">
                      <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-md__-HKdi typo-module_neutral__9orA9">
                        Multisig Wallet
                      </div>
                    </span>
                    <svg
                      className="side-nav-item-module_right-icon__Dds1-"
                      viewBox="0 0 20 20"
                      width="20"
                      height="20"
                    >
                      <path
                        fill="currentColor"
                        fillRule="evenodd"
                        d="M12 3.25h4.003a.759.759 0 0 1 .528.22.748.748 0 0 1 .219.55V8a.75.75 0 0 1-1.5 0V5.81l-4.22 4.22a.75.75 0 0 1-1.06-1.06l4.22-4.22H12a.75.75 0 0 1 0-1.5Zm-6 1A1.75 1.75 0 0 0 4.25 6v8A1.75 1.75 0 0 0 6 15.75h8A1.75 1.75 0 0 0 15.75 14v-.833a.75.75 0 0 0-1.5 0V14a.25.25 0 0 1-.25.25H6a.25.25 0 0 1-.25-.25V6A.25.25 0 0 1 6 5.75h1.25a.75.75 0 0 0 0-1.5H6Z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </NavLink>
                  <NavLink
                    role="button"
                    className="side-nav-item-module_nav-item__IvOST side-nav-item-module_sub-item__iNbHl !h-[36px]"
                    to="https://docs.roninchain.com/"
                    target="_blank"
                  >
                    <span className="side-nav-item-module_content__HuPhh">
                      <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-md__-HKdi typo-module_neutral__9orA9">
                        Docs
                      </div>
                    </span>
                    <svg
                      className="side-nav-item-module_right-icon__Dds1-"
                      viewBox="0 0 20 20"
                      width="20"
                      height="20"
                    >
                      <path
                        fill="currentColor"
                        fillRule="evenodd"
                        d="M12 3.25h4.003a.759.759 0 0 1 .528.22.748.748 0 0 1 .219.55V8a.75.75 0 0 1-1.5 0V5.81l-4.22 4.22a.75.75 0 0 1-1.06-1.06l4.22-4.22H12a.75.75 0 0 1 0-1.5Zm-6 1A1.75 1.75 0 0 0 4.25 6v8A1.75 1.75 0 0 0 6 15.75h8A1.75 1.75 0 0 0 15.75 14v-.833a.75.75 0 0 0-1.5 0V14a.25.25 0 0 1-.25.25H6a.25.25 0 0 1-.25-.25V6A.25.25 0 0 1 6 5.75h1.25a.75.75 0 0 0 0-1.5H6Z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <div className="theme-switch-module_container__rSnZp mt-12">
            <div className="theme-switch-module_left-el__BzDiI">
              <svg
                style={{ color: "var(--dg-tc-icon-dim)" }}
                viewBox="0 0 20 20"
                width="20"
                height="20"
              >
                <path
                  fill="currentColor"
                  d="M4.726 12.39a7.664 7.664 0 0 0 7.524-9.134c-.064-.327.238-.62.545-.492A7.666 7.666 0 0 1 9.835 17.5a7.666 7.666 0 0 1-7.071-4.705c-.129-.307.165-.609.492-.545.476.092.967.14 1.47.14Z"
                ></path>
              </svg>
              <div className="typo-module_t-display-xs__6p9-C typo-module_mobile-t-display-xs__Qj9y2 typo-module_neutral__9orA9 typo-module_dim__qoQFh">
                Theme
              </div>
            </div>
            <div className="theme-switch-module_switch-container__kLTZu">
              <label className="switch-module_switch__M6-tU switch-module_primary__CrQz8 switch-module_large__VlKV1 switch-module_switch-root__2xj6b switch-module_wrapper__5-2P1">
                <input type="checkbox" className="switch-module_input__YKZRj" />
                <span className="switch-module_track__QNvnO">
                  <span className="switch-module_thumb__cunvF"></span>
                </span>
              </label>
              <div className="theme-switch-module_icon-on-track__9hWx1 theme-switch-module_left-icon__4xRmO">
                <svg viewBox="0 0 20 20" width="16" height="16">
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M10 2c.308 0 .558.25.558.558v.744a.558.558 0 1 1-1.116 0v-.744c0-.308.25-.558.558-.558Zm4.465 8a4.465 4.465 0 1 1-8.93 0 4.465 4.465 0 0 1 8.93 0Zm-3.907 6.698a.558.558 0 1 0-1.116 0v.744a.558.558 0 0 0 1.116 0v-.744Zm5.099-12.355a.558.558 0 0 1 0 .79l-.526.526a.558.558 0 0 1-.79-.79l.527-.526a.558.558 0 0 1 .789 0ZM5.659 15.131a.558.558 0 1 0-.79-.79l-.526.527a.558.558 0 1 0 .79.789l.526-.526ZM18 10c0 .308-.25.558-.558.558h-.744a.558.558 0 1 1 0-1.116h.744c.308 0 .558.25.558.558Zm-14.698.558a.558.558 0 1 0 0-1.116h-.744a.558.558 0 0 0 0 1.116h.744Zm12.355 5.099a.558.558 0 0 1-.79 0l-.526-.526a.558.558 0 1 1 .79-.79l.526.527a.558.558 0 0 1 0 .789ZM4.869 5.659a.558.558 0 1 0 .79-.79l-.527-.526a.558.558 0 0 0-.789.79l.526.526Z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <div className="theme-switch-module_icon-on-track__9hWx1 theme-switch-module_right-icon__V6qB2 theme-switch-module_visible__9A9sX">
                <svg viewBox="0 0 20 20" width="16" height="16">
                  <path
                    fill="currentColor"
                    d="M4.726 12.39a7.664 7.664 0 0 0 7.524-9.134c-.064-.327.238-.62.545-.492A7.666 7.666 0 0 1 9.835 17.5a7.666 7.666 0 0 1-7.071-4.705c-.129-.307.165-.609.492-.545.476.092.967.14 1.47.14Z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
