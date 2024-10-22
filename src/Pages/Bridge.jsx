import React, { useEffect, useState } from "react";
import BridgeModal from "../components/BridgeModal";
import Header from "../components/Header";
import { UseWallet } from "../services/useWallet";
import { useAccount } from "wagmi";
import { ethers, utils } from 'ethers'
import { WalletSDK } from "@roninnetwork/wallet-sdk";
import RoninBridgeModal from "../components/RoninBridgeModal";
import BridgeDepositModal from "../components/BridgeDepositModal";
import axios from "axios";
import BridgeAssetPopup from "../components/BridgeAssetPopup";
import BridgeDepositAwaitModal from "../components/BridgeDepositAwaitModal";
import useStore from "../store/store";

const Bridge = () => {
  const tokens = [
    {
      symbol: "ETH",
      name: "Ethereum",
      token_address: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
      imgSrc: "https://cdn.skymavis.com/explorer-cdn/contract/eth.png"
    },
    {
      symbol: "AXS",
      name: "Axie Infinity Shard",
      token_address: '0xBB0E17EF65F82Ab018d8EDd776e8DD940327B28b',
      imgSrc: "https://assets.axieinfinity.com/explorer/images/contract-icon/axs.png"
    },
    {
      symbol: "SLP",
      name: "Smooth Love Potion",
      token_address: '0xCC8Fa225D80b9c7D42F96e9570156c65D6cAAa25',
      imgSrc: "https://assets.axieinfinity.com/explorer/images/contract-icon/slp.png"
    },
    {
      symbol: "USDC",
      name: "USD Coin",
      token_address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
      imgSrc: "https://assets.axieinfinity.com/explorer/images/contract-icon/usdc-48.png"
    },
    {
      symbol: "PIXEL",
      name: "Pixel",
      token_address: '0x3429d03c6F7521AeC737a0BBF2E5ddcef2C3Ae31',
      imgSrc: "https://cdn.skymavis.com/dapps/token/pixel-icon.png"
    },
    {
      symbol: "BANANA",
      name: "Banana",
      token_address: '0x94e496474F1725f1c1824cB5BDb92d7691A4F03a',
      imgSrc: "https://cdn.skymavis.com/dapps/token/banana-icon.png"
    },
    {
      symbol: "APRS",
      name: "Apeiros",
      token_address: '0x95b4B8CaD3567B5d7EF7399C2aE1d7070692aB0D',
      imgSrc: "https://lh3.googleusercontent.com/jsy4Okyd0vOt07yKELRQqVh3tPoxu1N1_NG-4JbdGrufW5Kd1552hTO3crOdb4RaHxjmc-Gf0rHAw0Q5afJHlxg9mVUNDf3A3SM1q1oxU0SlB1No622cVsi1B-tvo7RaMyPJlZ-z"
    },
    {
      symbol: "YGG",
      name: "Yield Guild Games Token",
      token_address: '0x25f8087EAD173b73D6e8B84329989A8eEA16CF73',
      imgSrc: "https://storage.googleapis.com/sm-common-cdn/dapps/token/ygg-icon.png"
    },
    {
      symbol: "WBTC",
      name: "Wrapped Bitcoin",
      token_address: '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
      imgSrc: "https://cdn.skymavis.com/ronin/2020/erc20/0x7e73630f81647bcfd7b1f2c04c1c662d17d4577e/logo.png"
    },
    {
      symbol: "AEC",
      name: "Axie Egg Coin",
      token_address: '0x0c7cF86188632e16AF00415214155950684466A8',
      imgSrc: "https://scatter.roninchain.com/tokens/aec.png"
    }
  ];




  const [accounts, setAccounts] = useState()
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isRoninModalOpen, setIsRoninModalOpen] = useState(false)
  const [isBridgeAssetPopupOpen, setIsBridgeAssetPopupOpen] = useState(false)
  const [isDepositModalOpen, setIsDepositModalOpen] = useState(false)
  const [isDepositAwaitOpen, setIsDepositAwaitOpen] = useState(false)
  const [roninAddress, setRoninAddress] = useState(null)
  const [walletBalance, setWalletBalance] = useState(null);
  const [selectedToken, setSelectedToken] = useState(tokens[0])
  const [inputValue, setInputValue] = useState("0.00");
  const [walletAssets, setWalletAssets] = useState(null)
  const { txState, setTxState } = useStore()
  const { address, connector } = useAccount();
  const { bridgeTokens } = UseWallet()

  const getCurrentAccount = async () => {
    if (typeof window.ethereum !== 'undefined') {
      const accounts = await window.ethereum.request({ method: 'eth_accounts' });
      if (accounts.length > 0) {
        console.log('Currently connected account:', accounts[0]);
        setAccounts(accounts[0])
      } else {
        console.log('No connected accounts found.');
      }
    } else {
      console.log('Ethereum wallet is not installed.');
    }
  };

  // Call the getCurrentAccount function when needed, for example on component mount
  useEffect(() => {
    getCurrentAccount();
  }, []);


  useEffect(() => {
    // Fetch tokens from Moralis API
    const fetchTokens = async () => {
      try {
        const response = await axios.get(
          `https://deep-index.moralis.io/api/v2.2/wallets/${address}/tokens`,
          {
            headers: {
              "X-API-Key":
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6IjA3ZTEzMDM3LWRhZTMtNGFiNi05OTI3LWE3ZTBkYmJhNzBjNCIsIm9yZ0lkIjoiMTI3MzY5IiwidXNlcklkIjoiMTI3MDE1IiwidHlwZUlkIjoiNjdjNDIyZTctZGU2YS00Yjg3LTlhZGItN2ViZjNmMWMzNDIyIiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3MjY4NDYwODUsImV4cCI6NDg4MjYwNjA4NX0.PBho29M0c4rQKQGbjYvNmoU9C1O7kfHljz4EoYXOj6M",
            },
          }
        );
        // setTokens(response.data); // Adjust based on Moralis response structure
        setWalletAssets(response.data.result)
        // console.log(response.data.result)
      } catch (error) {
        console.error("Error fetching token list:", error);
      }
    };

    fetchTokens();
  }, []);


  // const tokenSymbols = tokens.map(token => token.symbol);
  // console.log(tokenSymbols)
  // useEffect(() => {
  //   // Fetch tokens from Moralis API
  //   const fetchTokensBySymbol = async () => {
  //     try {
  //       const response = await axios.get(
  //         `https://deep-index.moralis.io/api/v2.2/erc20/metadata/symbols?chain=eth`,
  //         {
  //           headers: {
  //             "X-API-Key":
  //               "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6IjA3ZTEzMDM3LWRhZTMtNGFiNi05OTI3LWE3ZTBkYmJhNzBjNCIsIm9yZ0lkIjoiMTI3MzY5IiwidXNlcklkIjoiMTI3MDE1IiwidHlwZUlkIjoiNjdjNDIyZTctZGU2YS00Yjg3LTlhZGItN2ViZjNmMWMzNDIyIiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3MjY4NDYwODUsImV4cCI6NDg4MjYwNjA4NX0.PBho29M0c4rQKQGbjYvNmoU9C1O7kfHljz4EoYXOj6M",
  //           },
  //           params: {
  //             symbols: tokenSymbols
  //           }
  //         }
  //       );
  //       console.log(tokens.length)
  //       console.log(response.data)
  //       const matchedTokens = response.data.filter(token =>
  //         tokens.some(t => t.name === token.name)
  //       );
  //       console.log(matchedTokens);

  //       // setTokens(response.data); // Adjust based on Moralis response structure
  //       // setSelectedToken(response.data.result)
  //       // console.log(response.data.result)
  //     } catch (error) {
  //       console.error("Error fetching token list:", error);
  //     }
  //   };

  //   fetchTokensBySymbol();
  // }, []);


  console.log(walletAssets)
  const getWalletBalance = async () => {
    if (typeof window.ethereum !== 'undefined' && accounts) {
      const balance = await window.ethereum.request({
        method: 'eth_getBalance',
        params: [accounts, 'latest'],
      });
      const balanceInEth = utils.formatEther(balance);
      setWalletBalance(balanceInEth);
      console.log('Wallet balance:', balanceInEth);
    } else {
      console.log('Ethereum wallet is not installed or no account connected.');
    }
  };

  const handleBridge = async () => {
    try {
      const provider = new ethers.providers.Web3Provider(await connector.getProvider()); // Get the provider for the connected wallet
      const chainId = await provider.getSigner().getChainId(); // Get current chain ID
      console.log(selectedToken)

      // Call bridgeTokens and pass in the provider, address, and chainId
      await bridgeTokens({
        token: selectedToken,
        amount: inputValue,
        provider: provider,
        accountAddress: accounts,
        chainId: chainId,
        txState: txState,
        setTxState: setTxState
      })

    } catch (error) {
      console.error("Error during bridging:", error);
    }
  };



  useEffect(() => {
    if (accounts) {
      getWalletBalance();
    }
  }, [accounts]);

  console.log(walletBalance)
  console.log(txState)
  console.log(accounts)
  return (
    <>
      <div className=" flex-1 overflow-x-hidden overflow-y-scroll px-[16px] md:px-[54px]">
        <div className="mx-auto max-w-[1180px]">
          <Header />
          <main className="pb-24 pt-16 md:pb-48 md:pt-24">
            <div className="flex justify-center md:mt-16 md:pb-0">
              <div className="flex w-full max-w-[480px] flex-col">
                <div className="w-full overflow-auto rounded-[16px] border border-solid border-tc-border bg-tc-bg p-16 md:p-24">
                  <div>
                    <div className="mb-16 flex items-center justify-between">
                      <div className="typo-module_t-display-md__KVUIu typo-module_mobile-t-display-md__BsA5M typo-module_neutral__9orA9 pb-8">
                        Deposit
                      </div>
                      <div className="flex gap-8">
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
                                    id="rc-tabs-0-tab-erc20"
                                    aria-controls="rc-tabs-0-panel-erc20"
                                  >
                                    Tokens
                                  </div>
                                </div>
                                <div className="dango-tabs-tab">
                                  <div
                                    role="tab"
                                    aria-selected="false"
                                    className="dango-tabs-tab-btn"
                                    tabIndex="0"
                                    id="rc-tabs-0-tab-erc721"
                                    aria-controls="rc-tabs-0-panel-erc721"
                                  >
                                    NFTs
                                  </div>
                                </div>
                                <div
                                  className="dango-tabs-ink-bar dango-tabs-ink-bar-animated"
                                  style={{ left: "6px", width: "87px" }}
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
                                id="rc-tabs-0-panel-erc20"
                                aria-labelledby="rc-tabs-0-tab-erc20"
                              ></div>
                              <div
                                role="tabpanel"
                                tabIndex="-1"
                                aria-hidden="true"
                                className="dango-tabs-tabpane"
                                id="rc-tabs-0-panel-erc721"
                                aria-labelledby="rc-tabs-0-tab-erc721"
                                style={{ display: "none" }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="min-h-[calc(100%-158px)] w-full">
                      <div>
                        <form>
                          <div className="mb-8 flex w-full flex-col items-center gap-8 md:flex-row">
                            <div className="flex w-full flex-col">
                              <div className="typo-module_t-body-sm__UYoyX typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh mb-4">
                                From
                              </div>
                              {accounts ?
                                <button className="button-module_button__Z331g button-module_intent-default__f1RNz button-module_size-large__Nx98S button-module_button-root__0roWY flex justify-start rounded-[10px] px-12 py-8">
                                  <div className="flex items-center gap-12">
                                    <div className="relative">
                                      <div className="image-wrapper-module_container__5gv1w image-wrapper-module_md__bnf-N mr-8">
                                        <img
                                          src={selectedToken ? selectedToken.imgSrc : "https://cdn.skymavis.com/explorer-cdn/contract/eth.png"}
                                          width="100%"
                                          height="100%"
                                          alt="address-icon"
                                        />
                                      </div>
                                      <div style={{
                                        right: '2px'
                                      }} className="absolute  bottom-[-4px] flex h-[18px] w-[18px] items-center justify-center rounded-[50%] bg-[#000]">
                                        <div className="flex h-[16px] w-[16px] items-center justify-center rounded-[50%] bg-[#fff] p-[2px] text-[#000] [&>svg]:h-[14px] [&>svg]:w-[14px]">
                                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 253 253">
                                            <g strokeLinecap="round" strokeLinejoin="round" clipPath="url(#walletgo_metamask)">
                                              <path fill="#E2761B" stroke="#E2761B" d="m242.1 8.5-99.5 73.9L161 38.8l81.1-30.3Z"></path>
                                              <path fill="#E4761B" stroke="#E4761B" d="m12.4 8.5 98.7 74.6-17.5-44.3L12.4 8.5Zm193.9 171.3-26.5 40.6 56.7 15.6 16.3-55.3-46.5-.9Zm-204.4.9L18.1 236l56.7-15.6-26.5-40.6-46.4.9Z"></path>
                                              <path fill="#E4761B" stroke="#E4761B" d="m71.6 111.2-15.8 23.9 56.3 2.5-2-60.5-38.5 34.1Zm111.3 0-39-34.8-1.3 61.2 56.2-2.5-15.9-23.9ZM74.8 220.4l33.8-16.5-29.2-22.8-4.6 39.3Zm71.1-16.5 33.9 16.5-4.7-39.3-29.2 22.8Z"></path>
                                              <path fill="#D7C1B3" stroke="#D7C1B3" d="m179.8 220.4-33.9-16.5 2.7 22.1-.3 9.3 31.5-14.9Zm-105 0 31.5 14.9-.2-9.3 2.5-22.1-33.8 16.5Z"></path>
                                              <path fill="#233447" stroke="#233447" d="m106.8 166.5-28.2-8.3 19.9-9.1 8.3 17.4Zm40.9 0 8.3-17.4 20 9.1-28.3 8.3Z"></path>
                                              <path fill="#CD6116" stroke="#CD6116" d="m74.8 220.4 4.8-40.6-31.3.9 26.5 39.7ZM175 179.8l4.8 40.6 26.5-39.7-31.3-.9Zm23.8-44.7-56.2 2.5 5.2 28.9 8.3-17.4 20 9.1 22.7-23.1ZM78.6 158.2l20-9.1 8.2 17.4 5.3-28.9-56.3-2.5 22.8 23.1Z"></path>
                                              <path fill="#E4751F" stroke="#E4751F" d="m55.8 135.1 23.6 46-.8-22.9-22.8-23.1Zm120.3 23.1-1 22.9 23.7-46-22.7 23.1Zm-64-20.6-5.3 28.9 6.6 34.1 1.5-44.9-2.8-18.1Zm30.5 0-2.7 18 1.2 45 6.7-34.1-5.2-28.9Z"></path>
                                              <path fill="#F6851B" stroke="#F6851B" d="m147.8 166.5-6.7 34.1 4.8 3.3 29.2-22.8 1-22.9-28.3 8.3Zm-69.2-8.3.8 22.9 29.2 22.8 4.8-3.3-6.6-34.1-28.2-8.3Z"></path>
                                              <path fill="#C0AD9E" stroke="#C0AD9E" d="m148.3 235.3.3-9.3-2.5-2.2h-37.7l-2.3 2.2.2 9.3-31.5-14.9 11 9 22.3 15.5h38.3l22.4-15.5 11-9-31.5 14.9Z"></path>
                                              <path fill="#161616" stroke="#161616" d="m145.9 203.9-4.8-3.3h-27.7l-4.8 3.3-2.5 22.1 2.3-2.2h37.7l2.5 2.2-2.7-22.1Z"></path>
                                              <path fill="#763D16" stroke="#763D16" d="m246.3 87.2 8.5-40.8-12.7-37.9-96.2 71.4 37 31.3 52.3 15.3 11.6-13.5-5-3.6 8-7.3-6.2-4.8 8-6.1-5.3-4ZM-.2 46.4l8.5 40.8-5.4 4 8 6.1-6.1 4.8 8 7.3-5 3.6 11.5 13.5 52.3-15.3 37-31.3L12.4 8.5-.2 46.4Z"></path>
                                              <path fill="#F6851B" stroke="#F6851B" d="m235.2 126.5-52.3-15.3 15.9 23.9-23.7 46 31.2-.4h46.5l-17.6-54.2ZM71.6 111.2l-52.3 15.3-17.4 54.2h46.4l31.1.4-23.6-46 15.8-23.9Zm71 26.4 3.3-57.7 15.2-41.1H93.6l15 41.1 3.5 57.7 1.2 18.2.1 44.8h27.7l.2-44.8 1.3-18.2Z"></path>
                                            </g>
                                          </svg>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="inline-flex flex-col items-start">
                                      <div className="typo-module_t-body-sm__UYoyX typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh">{selectedToken.name}</div>
                                      <div className="typo-module_t-body-sm__UYoyX typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 truncate font-medium md:max-w-[125px]">
                                        {accounts.slice(0, 6) + '...' + accounts.slice(-4)}
                                      </div>
                                    </div>
                                  </div>
                                </button>
                                :
                                <button className="button-module_button__Z331g button-module_intent-default__f1RNz button-module_size-large__Nx98S button-module_button-root__0roWY flex justify-start rounded-[10px] px-12 py-8">
                                  <div className="flex items-center gap-12">
                                    <div className="relative">
                                      <svg
                                        viewBox="0 0 32 32"
                                        width="28"
                                        height="28"
                                      >
                                        <g
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          fillRule="evenodd"
                                        >
                                          <circle
                                            cx="16"
                                            cy="16"
                                            r="16"
                                            fill="#627EEA"
                                          ></circle>
                                          <g fill="#FFF" fillRule="nonzero">
                                            <path
                                              fillOpacity=".602"
                                              d="M16.498 4v8.87l7.497 3.35z"
                                            ></path>
                                            <path d="M16.498 4L9 16.22l7.498-3.35z"></path>
                                            <path
                                              fillOpacity=".602"
                                              d="M16.498 21.968v6.027L24 17.616z"
                                            ></path>
                                            <path d="M16.498 27.995v-6.028L9 17.616z"></path>
                                            <path
                                              fillOpacity=".2"
                                              d="M16.498 20.573l7.497-4.353-7.497-3.348z"
                                            ></path>
                                            <path
                                              fillOpacity=".602"
                                              d="M9 16.22l7.498 4.353v-7.701z"
                                            ></path>
                                          </g>
                                        </g>
                                      </svg>
                                    </div>
                                    <div className="inline-flex flex-col items-start">
                                      <div className="typo-module_t-body-sm__UYoyX typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh">
                                        Ethereum
                                      </div>
                                      <div className="typo-module_t-body-sm__UYoyX typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh truncate font-medium md:max-w-[125px]">
                                        --
                                      </div>
                                    </div>
                                  </div>
                                </button>}
                            </div>
                            <div className="hidden pt-24 md:block">
                              <button
                                type="button"
                                className="button-module_button__Z331g button-module_intent-default__f1RNz button-module_size-small__Nes6W button-module_icon-button__-UBF4 button-module_button-root__0roWY"
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
                                      d="M3 9h14c.4 0 .7-.2.9-.6.2-.4.1-.8-.2-1.1l-5-5c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4L14.6 7H3c-.6 0-1 .4-1 1s.4 1 1 1Zm4.3 8.7c.2.2.4.3.7.3.3 0 .5-.1.7-.3.4-.4.4-1 0-1.4L5.4 13H17c.6 0 1-.4 1-1s-.4-1-1-1H3c-.4 0-.7.2-.9.6-.2.4-.1.8.2 1.1l5 5Z"
                                      clipRule="evenodd"
                                    ></path>
                                  </svg>
                                </span>
                              </button>
                            </div>
                            <div className="relative mt-[18px] flex w-full flex-col md:mt-0">
                              <button

                                type="button"
                                className="button-module_button__Z331g button-module_intent-default__f1RNz button-module_size-small__Nes6W button-module_icon-button__-UBF4 button-module_button-root__0roWY absolute top-[-18px] left-1/2 inline-flex -translate-x-1/2 md:hidden"
                              >
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
                              <div className="typo-module_t-body-sm__UYoyX typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh mb-4">
                                To
                              </div>
                              <button
                                onClick={(e) => {
                                  e.preventDefault()
                                  setIsRoninModalOpen(true)
                                }}
                                className="button-module_button__Z331g button-module_intent-default__f1RNz button-module_size-large__Nx98S button-module_button-root__0roWY flex justify-start rounded-[10px] px-12 py-8">
                                <div className="flex items-center gap-12">
                                  <svg
                                    viewBox="0 0 28 28"
                                    width="28"
                                    height="28"
                                  >
                                    <g fill="none" fillRule="evenodd">
                                      <path
                                        d="M14 0C21.7327 0 28 6.26856 28 14C28 21.7327 21.7327 28 14 28C6.26856 28 0 21.7321 0 14C0 6.26856 6.26856 0 14 0Z"
                                        fill="#F5AC37"
                                      ></path>
                                      <path
                                        d="M14 0C21.7327 0 28 6.26856 28 14C28 21.7327 21.7327 28 14 28C6.26856 28 0 21.7321 0 14C0 6.26856 6.26856 0 14 0Z"
                                        fill="#004DE5"
                                      ></path>
                                      <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M7.69995 6.99966V18.2281C7.70008 18.4378 7.74605 18.6448 7.83446 18.8338C7.92288 19.0228 8.05148 19.189 8.21076 19.3201L13.3614 23.5693C13.5426 23.7184 13.7678 23.7996 14 23.7996C14.2321 23.7996 14.4573 23.7184 14.6385 23.5693L19.7891 19.3201C19.9484 19.189 20.077 19.0228 20.1654 18.8338C20.2539 18.6448 20.2998 18.4378 20.3 18.2281V6.99966C20.3 6.62834 20.1564 6.27223 19.901 6.00967C19.6455 5.74711 19.2991 5.59961 18.9378 5.59961H9.06211C8.70085 5.59961 8.35437 5.74711 8.09892 6.00967C7.84346 6.27223 7.69995 6.62834 7.69995 6.99966Z"
                                        fill="white"
                                      ></path>
                                      <path
                                        d="M17.6727 12.0869V9.63963C17.6727 9.31511 17.5489 9.00388 17.3284 8.7744C17.1079 8.54493 16.8089 8.41602 16.4971 8.41602H11.5006C11.1888 8.41602 10.8898 8.54493 10.6693 8.7744C10.4488 9.00388 10.325 9.31511 10.325 9.63963V16.7404C10.3251 16.9237 10.3647 17.1046 10.441 17.2698C10.5174 17.435 10.6283 17.5803 10.7658 17.6948L12.5851 19.2152C12.6067 19.2334 12.6329 19.2449 12.6605 19.2483C12.6881 19.2517 12.7161 19.2469 12.7411 19.2344C12.7662 19.2219 12.7874 19.2022 12.8022 19.1777C12.817 19.1532 12.8248 19.1248 12.8247 19.0959V14.0752C12.8247 14.0347 12.8402 13.9958 12.8677 13.9671C12.8953 13.9384 12.9327 13.9223 12.9716 13.9223H14.2942C14.5281 13.9223 14.7524 14.019 14.9177 14.1911C15.0831 14.3632 15.176 14.5966 15.176 14.84V19.0959C15.176 19.1247 15.1838 19.1529 15.1986 19.1773C15.2133 19.2017 15.2344 19.2212 15.2593 19.2337C15.2843 19.2461 15.3121 19.251 15.3396 19.2477C15.3671 19.2445 15.3932 19.2332 15.4148 19.2152L17.2341 17.6948C17.3716 17.5803 17.4826 17.435 17.5589 17.2698C17.6352 17.1046 17.6748 16.9237 17.675 16.7404V14.5341C17.675 14.2096 17.5511 13.8983 17.3306 13.6689C17.1101 13.4394 16.8111 13.3105 16.4993 13.3105C16.8107 13.3099 17.1092 13.1807 17.3292 12.9513C17.5492 12.7219 17.6727 12.411 17.6727 12.0869ZM14.2928 12.6987H12.9702C12.9312 12.6987 12.8938 12.6826 12.8662 12.6539C12.8387 12.6252 12.8232 12.5863 12.8232 12.5457V9.79258C12.8232 9.75202 12.8387 9.71311 12.8662 9.68443C12.8938 9.65574 12.9312 9.63963 12.9702 9.63963H15.0275C15.0665 9.63963 15.1039 9.65574 15.1315 9.68443C15.159 9.71311 15.1745 9.75202 15.1745 9.79258V11.781C15.1745 12.0243 15.0816 12.2578 14.9162 12.4299C14.7509 12.602 14.5266 12.6987 14.2928 12.6987Z"
                                        fill="#004DE5"
                                      ></path>
                                    </g>
                                  </svg>
                                  <div className="inline-flex flex-col items-start">
                                    <div className="typo-module_t-body-sm__UYoyX typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh">
                                      Ronin
                                    </div>
                                    <div className="typo-module_t-body-sm__UYoyX typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh truncate font-medium md:max-w-[125px]">
                                      {roninAddress ? roninAddress.slice(0, 6) + '...' + roninAddress.slice(-4) : '--'}
                                    </div>
                                  </div>
                                </div>
                              </button>
                            </div>
                          </div>
                          <div className="mb-16">
                            <div className="flex h-full flex-col rounded-[10px] border bg-tc-itr-secondary p-16 false">
                              <div className="flex">
                                <div onClick={() => {
                                  setIsBridgeAssetPopupOpen(true)
                                }} className="flex flex-col">
                                  <div className="typo-module_t-body-sm__UYoyX typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh">
                                    Token
                                  </div>
                                  <div className="my-4 flex w-fit items-center hover:cursor-pointer">
                                    <div className="image-wrapper-module_container__5gv1w image-wrapper-module_md__bnf-N mr-8">
                                      <img
                                        src={selectedToken ? selectedToken.imgSrc : "https://cdn.skymavis.com/explorer-cdn/contract/eth.png"}
                                        width="100%"
                                        height="100%"
                                        alt="address-icon"
                                      />
                                    </div>
                                    <div className="typo-module_t-display-md__KVUIu typo-module_mobile-t-display-md__BsA5M typo-module_neutral__9orA9">
                                      {selectedToken ? selectedToken.symbol : 'ETH'}
                                    </div>
                                    <svg
                                      viewBox="0 0 20 20"
                                      width="24"
                                      height="24"
                                    >
                                      <path
                                        fill="currentColor"
                                        fillRule="evenodd"
                                        d="M5.47 7.47a.75.75 0 0 1 1.06 0L10 10.94l3.47-3.47a.75.75 0 1 1 1.06 1.06l-4 4a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 0 1 0-1.06Z"
                                        clipRule="evenodd"
                                      ></path>
                                    </svg>
                                  </div>
                                </div>
                                <div className="flex h-full w-full flex-col items-end pt-24">
                                  <div className="flex items-center gap-8">
                                    <input
                                      placeholder="0"
                                      value={inputValue}
                                      className="text-display-m relative w-full overflow-hidden overflow-ellipsis whitespace-nowrap border-0 bg-transparent p-0 text-right text-inherit"
                                      onChange={(e) => {
                                        setInputValue(e.target.value)
                                      }}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="inline-flex items-baseline gap-4 overflow-hidden">
                                <div className="typo-module_t-body-sm__UYoyX typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh max-w-[80%] shrink-0 truncate md:max-w-[90%]">
                                  Balance: {walletBalance ? Number(walletBalance).toFixed(4) : '--'}
                                </div>
                                <div
                                  onClick={() => {
                                    walletBalance && setInputValue(Number(walletBalance).toFixed(4))
                                  }}
                                  className="typo-module_t-body-md-strong__B-Sd1 typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9 text-tc-itr-link"
                                  role="button"
                                >
                                  Max
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="mb-16 flex items-baseline justify-between">
                            <div className="flex items-baseline gap-4">
                              <div className="typo-module_t-body-sm__UYoyX typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh body-sm flex-1">
                                Gas fee estimated
                              </div>
                              <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-md__-HKdi typo-module_neutral__9orA9 typo-module_dim__qoQFh">
                                <div>
                                  <svg
                                    viewBox="0 0 20 20"
                                    width="20"
                                    height="20"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M10 2c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8Zm1 11.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4ZM10 8a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
                                    ></path>
                                  </svg>
                                </div>
                              </div>
                            </div>
                            <div className="typo-module_t-body-sm__UYoyX typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 inline">
                              <div className="typo-module_t-body-sm__UYoyX typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh inline pr-4">
                                -- ETH
                              </div>
                              ~$--
                            </div>
                          </div>
                          {accounts ? <button
                            disabled={!roninAddress && !address}
                            onClick={(e) => {
                              handleBridge()
                              e.preventDefault();
                            }}
                            // role="submit"
                            className="button-module_button__Z331g button-module_intent-primary__SAO1x button-module_size-default__caw9O button-module_full__Lcze1 button-module_button-root__0roWY"
                          >
                            {roninAddress ? "Deposit" : "Enter Recipient Address"}
                          </button> :
                            <button
                              onClick={(e) => {
                                setIsModalOpen(true);
                                e.preventDefault();
                              }}
                              // role="submit"
                              className="button-module_button__Z331g button-module_intent-primary__SAO1x button-module_size-default__caw9O button-module_full__Lcze1 button-module_button-root__0roWY"
                            >
                              Connect Wallet
                            </button>}
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="mx-auto mt-16 flex w-full max-w-[480px] items-center justify-between overflow-auto rounded-[16px] border border-solid border-tc-border bg-tc-bg py-16 px-24 hover:bg-tc-sf">
                  <div className="flex items-center gap-[6px]">
                    <div className="typo-module_t-body-md-strong__B-Sd1 typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9">
                      Transactions
                    </div>
                    <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3">
                      <div className="badge-module_badge__kTvKz badge-module_default-solid__76z0J badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                        <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs">
                          0
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-[6px] rounded-full bg-tc-sf py-[5px] px-12">
                    <div className="typo-module_t-body-sm__UYoyX typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh hidden md:block">
                      Pending withdrawal
                    </div>
                    <div className="typo-module_t-body-sm__UYoyX typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh block md:hidden">
                      Pending
                    </div>
                    <div className="badge-module_container__WY-ll badge-module_badge-root__ROif3">
                      <div className="badge-module_badge__kTvKz badge-module_default-solid__76z0J badge-module_size-small__R4QMA badge-module_normal__BL5Nt">
                        <span className="text-module_text__ChjB4 text-module_text-3__69BSH text-module_default__oQBba badge-module_text__LlQYs">
                          0
                        </span>
                      </div>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </main >
        </div >
      </div >
      {isModalOpen && (
        <BridgeModal
          setIsModalOpen={setIsModalOpen}
          isModalOpen={isModalOpen}
        />
      )}
      {
        isRoninModalOpen && <RoninBridgeModal setIsRoninModalOpen={setIsRoninModalOpen} roninAddress={roninAddress} setRoninAddress={setRoninAddress} />
      }

      {
        txState === 'Success' && <BridgeDepositModal selectedToken={selectedToken} />
      }
      {txState === 'Initalized' && <BridgeDepositAwaitModal selectedToken={selectedToken} />}
      {isBridgeAssetPopupOpen && <BridgeAssetPopup setIsBridgeAssetPopupOpen={setIsBridgeAssetPopupOpen} setSelectedToken={setSelectedToken} />}
    </>
  );
};

export default Bridge;
