import React from 'react'
import useStore from '../store/store'

const BridgeDepositAwaitModal = () => {
    const { setTxState } = useStore()
    return (
        <div className="dialog-root dialog-module_rn-dialog-root__iHv6T">
            <div className="dialog-mask"></div>
            <div tabIndex="-1" className="dialog-wrap" >
                <div role="dialog" aria-labelledby=":r21:" aria-modal="true" className="dialog sm centered w-full max-w-[400px]" >
                    <div tabIndex="0" aria-hidden="true" style={{ width: 0, height: 0, overflow: 'hidden', outline: 'none' }}></div>
                    <div className="dialog-content">
                        <div className="dialog-header">
                            <div className="dialog-title" id=":r21:">
                                <div className="relative flex h-44 w-full items-center justify-center">
                                    <div className="typo-module_t-display-md__KVUIu typo-module_mobile-t-display-md__BsA5M typo-module_neutral__9orA9">Deposit in progress</div>
                                    <button onClick={() => {
                                        setTxState('Initial')
                                    }} className="button-module_button__Z331g button-module_intent-default__f1RNz button-module_size-default__caw9O button-module_icon-button__-UBF4 button-module_variant-plain__hxRYr button-module_button-root__0roWY absolute right-0 top-0">
                                        <span className="button-module_icon-wrapper__VV4f-">
                                            <svg className="button-module_icon__-nXel" viewBox="0 0 20 20" width="16" height="16">
                                                <path fill="currentColor" fillRule="evenodd" d="M2.28 1.22a.75.75 0 0 0-1.06 1.06l7.47 7.47-7.47 7.47a.75.75 0 1 0 1.06 1.06l7.47-7.47 7.47 7.47a.75.75 0 1 0 1.06-1.06l-7.47-7.47 7.47-7.47a.75.75 0 0 0-1.06-1.06L9.75 8.69 2.28 1.22Z" clipRule="evenodd"></path>
                                            </svg>
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="dialog-body">
                            <div style={{ margin: '4rem 4rem' }} className=" flex">
                                <div className="spinner_spinner__Qlj6a mx-auto">
                                    <div className="spinner_ring__NGQNj"></div>
                                    <div className="spinner_insider__KWkXt">
                                        <img src="https://cdn.skymavis.com/explorer-cdn/contract/eth.png" width="60" alt="Ethereum logo" />
                                    </div>
                                </div>
                            </div>
                            <div className="my-24 text-center">
                                <div className="typo-module_t-body-sm__UYoyX typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh">Your deposit will be ready within a minute.</div>
                            </div>
                            <div className="w-full rounded-2x border border-solid border-tc-border p-16">
                                <div className="flex items-center justify-between gap-8 text-tc-text-disabled">
                                    <svg color="#11d473" viewBox="0 0 20 20" width="16" height="16">
                                        <path fill="currentColor" d="M10 2c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8Zm3.707 6.707-4 4a.997.997 0 0 1-1.414 0l-2-2a.999.999 0 1 1 1.414-1.414L9 10.586l3.293-3.293a.999.999 0 1 1 1.414 1.414Z"></path>
                                    </svg>
                                    <div className="h-[2px] flex-1 bg-gradient-to-r from-[#11d473] to-[#737b924d]"></div>
                                    <svg color="" viewBox="0 0 20 20" width="16" height="16">
                                        <path fill="currentColor" d="M10 2c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8Zm3.707 6.707-4 4a.997.997 0 0 1-1.414 0l-2-2a.999.999 0 1 1 1.414-1.414L9 10.586l3.293-3.293a.999.999 0 1 1 1.414 1.414Z"></path>
                                    </svg>
                                </div>
                                <div className="mt-4 flex justify-between">
                                    <div className="flex items-center">
                                        <svg viewBox="0 0 32 32" width="16" height="16">
                                            <g xmlns="http://www.w3.org/2000/svg" fill="none" fillRule="evenodd">
                                                <circle cx="16" cy="16" r="16" fill="#627EEA"></circle>
                                                <g fill="#FFF" fillRule="nonzero">
                                                    <path fillOpacity=".602" d="M16.498 4v8.87l7.497 3.35z"></path>
                                                    <path d="M16.498 4L9 16.22l7.498-3.35z"></path>
                                                    <path fillOpacity=".602" d="M16.498 21.968v6.027L24 17.616z"></path>
                                                    <path d="M16.498 27.995v-6.028L9 17.616z"></path>
                                                    <path fillOpacity=".2" d="M16.498 20.573l7.497-4.353-7.497-3.348z"></path>
                                                    <path fillOpacity=".602" d="M9 16.22l7.498 4.353v-7.701z"></path>
                                                </g>
                                            </g>
                                        </svg>
                                        <div className="typo-module_t-body-sm__UYoyX typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 ml-8 mr-[2px]">Ethereum</div>
                                        <a className="typo-module_t-body-md-strong__B-Sd1 typo-module_mobile-t-body-md-strong__Kd9tc typo-module_neutral__9orA9 link-module_link__Nwimt undefined text-tc-text-dim" href="https://etherscan.io/tx/0x6420a5634554bdc09565b4b572be1ba00346d3691b7187ad7719a3041eb71c98" target="_blank" rel="noreferrer">
                                            <svg viewBox="0 0 20 20" width="16" height="16">
                                                <path fill="currentColor" fillRule="evenodd" d="M12 3.25h4.003a.759.759 0 0 1 .528.22.748.748 0 0 1 .219.55V8a.75.75 0 0 1-1.5 0V5.81l-4.22 4.22a.75.75 0 0 1-1.06-1.06l4.22-4.22H12a.75.75 0 0 1 0-1.5Zm-6 1A1.75 1.75 0 0 0 4.25 6v8A1.75 1.75 0 0 0 6 15.75h8A1.75 1.75 0 0 0 15.75 14v-.833a.75.75 0 0 0-1.5 0V14a.25.25 0 0 1-.25.25H6a.25.25 0 0 1-.25-.25V6A.25.25 0 0 1 6 5.75h1.25a.75.75 0 0 0 0-1.5H6Z" clipRule="evenodd"></path>
                                            </svg>
                                        </a>
                                    </div>
                                    <div className="flex items-center">
                                        <svg viewBox="0 0 28 28" width="16" height="16">
                                            <g fill="none" fillRule="evenodd">
                                                <path d="M14 0C21.7327 0 28 6.26856 28 14C28 21.7327 21.7327 28 14 28C6.26856 28 0 21.7321 0 14C0 6.26856 6.26856 0 14 0Z" fill="#F5AC37"></path>
                                                <path d="M14 0C21.7327 0 28 6.26856 28 14C28 21.7327 21.7327 28 14 28C6.26856 28 0 21.7321 0 14C0 6.26856 6.26856 0 14 0Z" fill="#004DE5"></path>
                                                <path fillRule="evenodd" clipRule="evenodd" d="M7.69995 6.99966V18.2281C7.70008 18.4378 7.74605 18.6448 7.83446 18.8338C7.92288 19.0228 8.05148 19.189 8.21076 19.3201L13.3614 23.5693C13.5426 23.7184 13.7678 23.7996 14 23.7996C14.2321 23.7996 14.4573 23.7184 14.6385 23.5693L19.7891 19.3201C19.9484 19.189 20.077 19.0228 20.1654 18.8338C20.2539 18.6448 20.2998 18.4378 20.3 18.2281V6.99966C20.3 6.62834 20.1564 6.27223 19.901 6.00967C19.6455 5.74711 19.2991 5.59961 18.9378 5.59961H9.06211C8.70085 5.59961 8.35437 5.74711 8.09892 6.00967C7.84346 6.27223 7.69995 6.62834 7.69995 6.99966Z" fill="white"></path>
                                                <path d="M17.6727 12.0869V9.63963C17.6727 9.31511 17.5489 9.00388 17.3284 8.7744C17.1079 8.54493 16.8089 8.41602 16.4971 8.41602H11.5006C11.1888 8.41602 10.8898 8.54493 10.6693 8.7744C10.4488 9.00388 10.325 9.31511 10.325 9.63963V16.7404C10.3251 16.9237 10.3647 17.1046 10.441 17.2698C10.5174 17.435 10.6283 17.5803 10.7658 17.6948L12.5851 19.2152C12.6067 19.2334 12.6329 19.2449 12.6605 19.2483C12.6881 19.2517 12.7161 19.2469 12.7411 19.2344C12.7662 19.2219 12.7874 19.2022 12.8022 19.1777C12.817 19.1532 12.8248 19.1248 12.8247 19.0959V14.0752C12.8247 14.0347 12.8402 13.9958 12.8677 13.9671C12.8953 13.9384 12.9327 13.9223 12.9716 13.9223H14.2942C14.5281 13.9223 14.7524 14.019 14.9177 14.1911C15.0831 14.3632 15.176 14.5966 15.176 14.84V19.0959C15.176 19.1247 15.1838 19.1529 15.1986 19.1773C15.2133 19.2017 15.2344 19.2212 15.2593 19.2337C15.2843 19.2461 15.3121 19.251 15.3396 19.2477C15.3671 19.2445 15.3932 19.2332 15.4148 19.2152L17.2341 17.6948C17.3716 17.5803 17.4826 17.435 17.5589 17.2698C17.6352 17.1046 17.6748 16.9237 17.675 16.7404V14.5341C17.675 14.2096 17.5511 13.8983 17.3306 13.6689C17.1101 13.4394 16.8111 13.3105 16.4993 13.3105C16.8107 13.3099 17.1092 13.1807 17.3292 12.9513C17.5492 12.7219 17.6727 12.411 17.6727 12.0869ZM14.2928 12.6987H12.9702C12.9312 12.6987 12.8938 12.6826 12.8662 12.6539C12.8387 12.6252 12.8232 12.5863 12.8232 12.5457V9.79258C12.8232 9.75202 12.8387 9.71311 12.8662 9.68443C12.8938 9.65574 12.9312 9.63963 12.9702 9.63963H15.0275C15.0665 9.63963 15.1039 9.65574 15.1315 9.68443C15.159 9.71311 15.1745 9.75202 15.1745 9.79258V11.781C15.1745 12.0243 15.0816 12.2578 14.9162 12.4299C14.7509 12.602 14.5266 12.6987 14.2928 12.6987Z" fill="#004DE5"></path>
                                            </g>
                                        </svg>
                                        <div className="typo-module_t-body-sm__UYoyX typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 ml-8 mr-[2px]">Ronin</div>
                                        <div className="progress-circle-loader-module_xsWrapper__D0o2v loader-module_loader-root__jzjTC">
                                            <div className="progress-circle-loader-module_spinner__Pe1S- progress-circle-loader-module_xsSpinner__T6sF3">
                                                <div className="progress-circle-loader-module_halfCircle__r4XG4 progress-circle-loader-module_xsBorder__K8rYr progress-circle-loader-module_defaultIntent__8qhT-" style={{ transform: 'rotate(90deg)' }}></div>
                                                <div className="progress-circle-loader-module_halfCircle__r4XG4 progress-circle-loader-module_xsBorder__K8rYr progress-circle-loader-module_defaultIntent__8qhT-"></div>
                                            </div>
                                            <div className="progress-circle-loader-module_backgroundLoader__mOvYF"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="dialog-footer">
                            <button onClick={() => {
                                setTxState('Initial')
                            }} className="button-module_button__Z331g button-module_intent-default__f1RNz button-module_size-default__caw9O button-module_full__Lcze1 button-module_button-root__0roWY">Close</button>
                        </div>
                    </div>
                    <div tabIndex="0" aria-hidden="true" style={{ width: 0, height: 0, overflow: 'hidden', outline: 'none' }}></div>
                </div>
            </div>
        </div>
    )
}

export default BridgeDepositAwaitModal
