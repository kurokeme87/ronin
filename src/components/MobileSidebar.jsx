import React from "react";
import useStore from "../store/store";
import { Link } from "react-router-dom";

const MobileSidebar = () => {
  const { setIsMobileSidebarOpen } = useStore();
  const [showKatana, setShowKatana] = React.useState(false);
  const [showExplorer, setShowExplorer] = React.useState(false);
  const [showMore, setShowMore] = React.useState(false);
  return (
    <div
      onClick={setIsMobileSidebarOpen(false)}
      className="dango-drawer dango-drawer-left drawer-module_drawerRoot__uEmP0 dango-drawer-size-large drawer-module_drawer-root__qlABp dango-drawer-open"
      tabIndex="-1"
    >
      <div className="dango-drawer-mask"></div>
      <div
        tabIndex="0"
        aria-hidden="true"
        data-sentinel="start"
        style={{
          width: 0,
          height: 0,
          overflow: "hidden",
          outline: "none",
          position: "absolute",
        }}
      ></div>
      <div className="dango-drawer-content-wrapper">
        <div className="dango-drawer-content" aria-modal="true" role="dialog">
          <div className="drawer-module_wrapperBody__7nseK">
            <div className="drawer-module_body__fGi7v p-0">
              <div className="side-nav-module_Container__Q2hHO h-[calc(100vh_+_50px)] w-full shadow-none md:h-full md:w-[300px] md:shadow-divider-right">
                <div className="absolute top-0 right-0 bottom-0 left-0 z-negative-bg w-full border-0 border-r border-solid border-tc-border bg-tc-bg md:w-[300px]"></div>
                <div className="mb-[22px]   flex h-44 w-44 items-center justify-center">
                  <svg
                    onClick={() => setIsMobileSidebarOpen(false)}
                    className="cursor-pointer text-tc-icon"
                    viewBox="0 0 20 20"
                    width="20"
                    height="20"
                  >
                    <path
                      fill="currentColor"
                      d="M16.7 3.3c-.4-.4-1-.4-1.4 0L10 8.6 4.7 3.3c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4L8.6 10l-5.3 5.3c-.4.4-.4 1 0 1.4.2.2.4.3.7.3.3 0 .5-.1.7-.3l5.3-5.3 5.3 5.3c.2.2.5.3.7.3.2 0 .5-.1.7-.3.4-.4.4-1 0-1.4L11.4 10l5.3-5.3c.4-.4.4-1 0-1.4Z"
                    ></path>
                  </svg>
                </div>
                <div className="mb-24 flex flex-col gap-[2px]">
                  <Link
                    onClick={() => {
                      setShowExplorer(!showExplorer);
                    }}
                    role="button"
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
                      className="side-nav-item-module_right-icon__Dds1- Nav_SideNavCollapseRightIcon__5B_7N"
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
                  </Link>
                  <div
                    className="Nav_SideNavCollapse__cGkQ_"
                    style={{ height: `${showExplorer ? "auto" : 0}` }}
                  >
                    <div className="Nav_SideNavCollapseContent__lTee_">
                      <Link
                        role="button"
                        className="side-nav-item-module_nav-item__IvOST side-nav-item-module_sub-item__iNbHl !h-[36px]"
                        onClick={() => {
                          setIsMobileSidebarOpen(false);
                        }}
                        to="/"
                      >
                        <span className="side-nav-item-module_content__HuPhh">
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-md__-HKdi typo-module_neutral__9orA9">
                            Home
                          </div>
                        </span>
                      </Link>
                      <Link
                        role="button"
                        className="side-nav-item-module_nav-item__IvOST side-nav-item-module_sub-item__iNbHl !h-[36px]"
                        onClick={() => {
                          setIsMobileSidebarOpen(false);
                        }}
                        to="/accounts"
                      >
                        <span className="side-nav-item-module_content__HuPhh">
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-md__-HKdi typo-module_neutral__9orA9">
                            Accounts
                          </div>
                        </span>
                      </Link>
                      <Link
                        role="button"
                        className="side-nav-item-module_nav-item__IvOST side-nav-item-module_sub-item__iNbHl !h-[36px]"
                        onClick={() => {
                          setIsMobileSidebarOpen(false);
                        }}
                        to="/tokens"
                      >
                        <span className="side-nav-item-module_content__HuPhh">
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-md__-HKdi typo-module_neutral__9orA9">
                            Tokens
                          </div>
                        </span>
                      </Link>
                      <Link
                        role="button"
                        className="side-nav-item-module_nav-item__IvOST side-nav-item-module_sub-item__iNbHl !h-[36px]"
                        onClick={() => {
                          setIsMobileSidebarOpen(false);
                        }}
                        to="/verified-contracts"
                      >
                        <span className="side-nav-item-module_content__HuPhh">
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-md__-HKdi typo-module_neutral__9orA9">
                            Contracts
                          </div>
                        </span>
                      </Link>
                      <Link
                        role="button"
                        className="side-nav-item-module_nav-item__IvOST side-nav-item-module_sub-item__iNbHl !h-[36px]"
                        onClick={() => {
                          setIsMobileSidebarOpen(false);
                        }}
                        to="/analytics"
                      >
                        <span className="side-nav-item-module_content__HuPhh">
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-md__-HKdi typo-module_neutral__9orA9">
                            {" "}
                            Analytics
                          </div>
                        </span>
                      </Link>
                    </div>
                  </div>
                  <Link
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
                    >
                      <path
                        fill="currentColor"
                        fillRule="evenodd"
                        d="M5.47 7.47a.75.75 0 0 1 1.06 0L10 10.94l3.47-3.47a.75.75 0 1 1 1.06 1.06l-4 4a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 0 1 0-1.06Z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </Link>
                  <div
                    className="Nav_SideNavCollapse__cGkQ_"
                    style={{ height: `${showKatana ? "auto" : 0}` }}
                  >
                    <div className="Nav_SideNavCollapseContent__lTee_">
                      <Link
                        role="button"
                        className="side-nav-item-module_nav-item__IvOST side-nav-item-module_sub-item__iNbHl !h-[36px]"
                        onClick={() => {
                          setIsMobileSidebarOpen(false);
                        }}
                        to="/swap"
                      >
                        <span className="side-nav-item-module_content__HuPhh">
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-md__-HKdi typo-module_neutral__9orA9">
                            Swap
                          </div>
                        </span>
                      </Link>
                      <Link
                        role="button"
                        className="side-nav-item-module_nav-item__IvOST side-nav-item-module_sub-item__iNbHl !h-[36px]"
                        onClick={() => {
                          setIsMobileSidebarOpen(false);
                        }}
                        to="/liquidity"
                      >
                        <span className="side-nav-item-module_content__HuPhh">
                          <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-md__-HKdi typo-module_neutral__9orA9">
                            Liquidity pool
                          </div>
                        </span>
                      </Link>
                      <Link
                        role="button"
                        className="side-nav-item-module_nav-item__IvOST side-nav-item-module_sub-item__iNbHl !h-[36px]"
                        onClick={() => {
                          setIsMobileSidebarOpen(false);
                        }}
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
                      </Link>
                    </div>
                  </div>
                  <Link
                    role="button"
                    className="side-nav-item-module_nav-item__IvOST side-nav-item-module_active__HX0BJ h-[40px]"
                    onClick={() => {
                      setIsMobileSidebarOpen(false);
                    }}
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
                  </Link>
                  <Link
                    role="button"
                    className="side-nav-item-module_nav-item__IvOST h-[40px]"
                    onClick={() => {
                      setIsMobileSidebarOpen(false);
                    }}
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
                  </Link>
                  <Link
                    role="button"
                    className="side-nav-item-module_nav-item__IvOST h-[40px]"
                    target="_blank"
                    onClick={() => {
                      setIsMobileSidebarOpen(false);
                    }}
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
                  </Link>
                  <Link
                    role="button"
                    className="side-nav-item-module_nav-item__IvOST h-[40px]"
                    onClick={() => {
                      setIsMobileSidebarOpen(false);
                    }}
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
                  </Link>
                  <Link
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
                    >
                      <path
                        fill="currentColor"
                        fillRule="evenodd"
                        d="M5.47 7.47a.75.75 0 0 1 1.06 0L10 10.94l3.47-3.47a.75.75 0 1 1 1.06 1.06l-4 4a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 0 1 0-1.06Z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </Link>
                  <div
                    className="Nav_SideNavCollapse__cGkQ_"
                    style={{ height: `${showMore ? "auto" : 0}` }}
                  >
                    <div className="Nav_SideNavCollapseContent__lTee_">
                      <Link
                        role="button"
                        className="side-nav-item-module_nav-item__IvOST side-nav-item-module_sub-item__iNbHl !h-[36px]"
                        onClick={() => {
                          setIsMobileSidebarOpen(false);
                        }}
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
                      </Link>
                      <Link
                        role="button"
                        className="side-nav-item-module_nav-item__IvOST side-nav-item-module_sub-item__iNbHl !h-[36px]"
                        onClick={() => {
                          setIsMobileSidebarOpen(false);
                        }}
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
                      </Link>
                      <Link
                        role="button"
                        className="side-nav-item-module_nav-item__IvOST side-nav-item-module_sub-item__iNbHl !h-[36px]"
                        onClick={() => {
                          setIsMobileSidebarOpen(false);
                        }}
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
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="block">
                  <div className="my-[4px] border-y-[0.5px] border-solid border-tc-border"></div>
                  <div className="mt-[20px] mb-48 w-[150px]">
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
                  </div>
                </div>
                <div className="theme-switch-module_container__rSnZp mt-auto">
                  <div className="theme-switch-module_left-el__BzDiI">
                    <svg
                      viewBox="0 0 20 20"
                      width="20"
                      height="20"
                      style={{ color: "var(--dg-tc-icon-dim)" }}
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
                      <input
                        type="checkbox"
                        className="switch-module_input__YKZRj"
                      />
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileSidebar;
