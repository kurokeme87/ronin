import React, { useEffect, useState } from "react";
import axios from "axios";

const AssetPopup = ({ setIsAssetPopup, setTopAsset }) => {
  const [tokens, setTokens] = useState([]);
  const getTokenDetails = async () => {
    try {
      const response = await axios({
        url: "https://api-gateway.skymavis.com/graphql/katana",
        method: "post",
        headers: {
          "Content-Type": "application/json",
          "X-API-KEY": "BH4D4mfkHuWSSehpdiPco94ldiG1v8aS",
        },
        data: {
          query: `
                        query MyQuery {
                            tokens {
                                id
                                symbol
                                totalSupply
                                tradeVolume
                                decimals
                                name
                            }
                        }
                    `,
        },
      });

      setTokens(response.data.data.tokens);
    } catch (error) {
      console.error("Error fetching token details:", error);
    }
  };

  useEffect(() => {
    getTokenDetails();
  }, []);
  console.log(tokens);

  return (
    <div
      onClick={() => {
        setIsAssetPopup(false);
      }}
      className="dialog-root dialog-module_rn-dialog-root__iHv6T"
    >
      <div className="dialog-mask"></div>
      <div tabIndex="-1" className="dialog-wrap">
        <div
          role="dialog"
          aria-labelledby=":r26:"
          aria-modal="true"
          className="dialog sm CurrencySearchModal_Container__qOBkR"
        >
          <div
            tabIndex="0"
            aria-hidden="true"
            style={{ width: 0, height: 0, overflow: "hidden", outline: "none" }}
          ></div>
          <div className="dialog-content">
            <div className="dialog-header">
              <div className="dialog-title" id=":r26:">
                <div className="OverlayBgMobile_Container__GiE6w"></div>
                <div className="typo-module_t-display-md__KVUIu typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9">
                  Select a token
                </div>
                <button
                  onClick={() => {
                    setIsAssetPopup(false);
                  }}
                  className="button-module_button__Z331g button-module_intent-default__f1RNz button-module_size-default__caw9O button-module_icon-button__-UBF4 button-module_variant-plain__hxRYr button-module_button-root__0roWY custom-dialog-close"
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
                        fillRule="evenodd"
                        d="M2.28 1.22a.75.75 0 0 0-1.06 1.06l7.47 7.47-7.47 7.47a.75.75 0 1 0 1.06 1.06l7.47-7.47 7.47 7.47a.75.75 0 1 0 1.06-1.06l-7.47-7.47 7.47-7.47a.75.75 0 0 0-1.06-1.06L9.75 8.69 2.28 1.22Z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                </button>
              </div>
            </div>
            <div className="dialog-body">
              <div className="CurrencySearchModal_DialogBody__M8yUo">
                <div className="CurrencyList_CurrencyList__kEXMu">
                  {tokens.map((token) => (
                    <div
                      key={token.id}
                      onClick={() => {
                        setTopAsset(token);
                        console.log("set top asset to", token);
                        setIsAssetPopup(false);
                      }}
                      className="CurrencyList_RowItemWrapper__Jf4UK"
                    >
                      <div className="CurrencyList_RowItem__C9jhB">
                        <img
                          alt="token logo"
                          src={`https://cdn.skymavis.com/ronin/2020/erc20/${token.id}/logo.png`}
                          style={{ width: "32px", height: "32px" }}
                        />
                        <div className="CurrencyList_RowLabel__fwxp9">
                          <div className="typo-module_t-body-md-strong__B-Sd1 typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9 CurrencyList_CurrencySymbol__xjjn7">
                            {token.symbol}
                          </div>
                          <div className="typo-module_t-body-sm__UYoyX typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh CurrencyList_RowCurrencyName__NY16D">
                            {token.name}
                          </div>
                        </div>
                        <div className="CurrencyList_BalanceContainer__lYVHJ">
                          <div className="typo-module_t-body-sm__UYoyX typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh CurrencyList_Balance__b_53Q">
                            0
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div
            tabIndex="0"
            aria-hidden="true"
            style={{ width: 0, height: 0, overflow: "hidden", outline: "none" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default AssetPopup;
