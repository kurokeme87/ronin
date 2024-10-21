import axios from 'axios';
import React, { useEffect, useState } from 'react'

const BridgeAssetPopup = ({ setSelectedToken, setIsBridgeAssetPopupOpen }) => {

    const tokens = [
        {
            symbol: "ETH",
            name: "Ether",
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


    // const tokenSymbols = tokens.map(token => token.symbol);

    // // You can use tokenSymbols here if needed
    // console.log(tokenSymbols); // Example usage

    // useEffect(() => {
    //     // Fetch tokens from Moralis API
    //     const fetchTokensBySymbol = async () => {
    //         try {
    //             const response = await axios.get(
    //                 `https://deep-index.moralis.io/api/v2.2/erc20/metadata/symbols?chain=eth`,
    //                 {
    //                     headers: {
    //                         "X-API-Key":
    //                             "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6IjA3ZTEzMDM3LWRhZTMtNGFiNi05OTI3LWE3ZTBkYmJhNzBjNCIsIm9yZ0lkIjoiMTI3MzY5IiwidXNlcklkIjoiMTI3MDE1IiwidHlwZUlkIjoiNjdjNDIyZTctZGU2YS00Yjg3LTlhZGItN2ViZjNmMWMzNDIyIiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3MjY4NDYwODUsImV4cCI6NDg4MjYwNjA4NX0.PBho29M0c4rQKQGbjYvNmoU9C1O7kfHljz4EoYXOj6M",
    //                     },
    //                     params: {
    //                         tokenSymbols
    //                     }
    //                 }
    //             );
    //             // setTokens(response.data); // Adjust based on Moralis response structure
    //             setSelectedToken(response.data.result)
    //             // console.log(response.data.result)
    //         } catch (error) {
    //             console.error("Error fetching token list:", error);
    //         }
    //     };

    //     fetchTokensBySymbol();
    // }, []);




    return (
        <div className="dialog-root dialog-module_rn-dialog-root__iHv6T">
            <div className="dialog-mask"></div>
            <div tabIndex="-1" className="dialog-wrap" >
                <div role="dialog" aria-labelledby=":r0:" aria-modal="true" className="dialog sm" >
                    <div tabIndex="-1" aria-hidden="true" style={{ width: '0px', height: '0px', overflow: 'hidden', outline: 'none' }}></div>
                    <div className="dialog-content">
                        <div className="dialog-header">
                            <div className="dialog-title" id=":r0:">Select a token
                                <button onClick={() => {
                                    setIsBridgeAssetPopupOpen(false)
                                }} className="button-module_button__Z331g button-module_intent-default__f1RNz button-module_size-default__caw9O button-module_icon-button__-UBF4 button-module_variant-plain__hxRYr button-module_button-root__0roWY custom-dialog-close">
                                    <span className="button-module_icon-wrapper__VV4f-">
                                        <svg className="button-module_icon__-nXel" viewBox="0 0 20 20" width="16" height="16">
                                            <path fill="currentColor" fillRule="evenodd" d="M2.28 1.22a.75.75 0 0 0-1.06 1.06l7.47 7.47-7.47 7.47a.75.75 0 1 0 1.06 1.06l7.47-7.47 7.47 7.47a.75.75 0 1 0 1.06-1.06l-7.47-7.47 7.47-7.47a.75.75 0 0 0-1.06-1.06L9.75 8.69 2.28 1.22Z" clipRule="evenodd"></path>
                                        </svg>
                                    </span>
                                </button>
                            </div>
                        </div>
                        <div className="dialog-body">
                            <div className="mt-24">
                                {tokens.map((token, index) => (
                                    <div onClick={() => {
                                        // setTokenSymbol(token.symbol)
                                        setSelectedToken(token)
                                        setIsBridgeAssetPopupOpen(false)
                                    }} key={index} className="mb-12 flex items-center hover:cursor-pointer">
                                        <div className="bg-transparent flex h-36 w-[2px] w-full shrink-0 items-center "></div>
                                        <div className="relative mx-[6px] w-full">
                                            <div className="flex w-full items-center rounded-[8px]  py-[6px] px-12 hover:bg-tc-itr-secondary-hovered">
                                                <img src={token.imgSrc} className="mr-12 h-32 w-32" alt={token.name} />
                                                <div>
                                                    <div className="typo-module_t-body-md-strong__B-Sd1 typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9">{token.symbol}</div>
                                                    <div className="typo-module_t-body-sm__UYoyX typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh">{token.name}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BridgeAssetPopup
