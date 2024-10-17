import React, { useState } from 'react';

const RoninBridgeModal = ({ setIsRoninModalOpen, setRoninAddress, roninAddress }) => {
    const isValidRoninAddress = (address) => {
        const roninAddressRegex = /^ronin:0x[a-fA-F0-9]{42}$/;
        return roninAddressRegex.test(address);
    };

    // Example usage
    // const handleAddressChange = (e) => {
    //     const address = e.target.value;
    //     if (isValidRoninAddress(address)) {
    //         setRoninAddress(address);
    //     } else {
    //         console.error("Invalid Ronin address");
    //     }
    // };

    return (
        <div className="dialog-root  dialog-module_rn-dialog-root__iHv6T">
            <div className="dialog-mask"></div>
            <div tabIndex="-1" className="dialog-wrap">
                <div role="dialog" aria-labelledby=":r1:" aria-modal="true" className="dialog sm centered">
                    <div tabIndex="0" aria-hidden="true" style={{ width: 0, height: 0, overflow: 'hidden', outline: 'none' }}></div>
                    <div className="dialog-content">
                        <div className="dialog-header">
                            <div className="dialog-title" id=":r1:">
                                Recipient Address
                                <button onClick={() => {
                                    setIsRoninModalOpen(false)
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
                            <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-md__-HKdi typo-module_neutral__9orA9 typo-module_dim__qoQFh mt-24 mb-8">
                                Ronin address or RNS
                            </div>
                            <div className="relative false">
                                <div>
                                    <div className="form-item-module_form__3-Rfq text-field-module_input-root__PSsoe">
                                        <div className="input-module_container__Gch8D input-module_default__Rk4yp hidden md:block opacity-1">
                                            <div className="input-module_form__2zFJF">
                                                <span className="input-module_prefix__uR1Sx">
                                                    <svg viewBox="0 0 28 28" width="16" height="16">
                                                        <g fill="none" fillRule="evenodd">
                                                            <path d="M14 0C21.7327 0 28 6.26856 28 14C28 21.7327 21.7327 28 14 28C6.26856 28 0 21.7321 0 14C0 6.26856 6.26856 0 14 0Z" fill="#F5AC37"></path>
                                                            <path d="M14 0C21.7327 0 28 6.26856 28 14C28 21.7327 21.7327 28 14 28C6.26856 28 0 21.7321 0 14C0 6.26856 6.26856 0 14 0Z" fill="#004DE5"></path>
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M7.69995 6.99966V18.2281C7.70008 18.4378 7.74605 18.6448 7.83446 18.8338C7.92288 19.0228 8.05148 19.189 8.21076 19.3201L13.3614 23.5693C13.5426 23.7184 13.7678 23.7996 14 23.7996C14.2321 23.7996 14.4573 23.7184 14.6385 23.5693L19.7891 19.3201C19.9484 19.189 20.077 19.0228 20.1654 18.8338C20.2539 18.6448 20.2998 18.4378 20.3 18.2281V6.99966C20.3 6.62834 20.1564 6.27223 19.901 6.00967C19.6455 5.74711 19.2991 5.59961 18.9378 5.59961H9.06211C8.70085 5.59961 8.35437 5.74711 8.09892 6.00967C7.84346 6.27223 7.69995 6.62834 7.69995 6.99966Z" fill="white"></path>
                                                            <path d="M17.6727 12.0869V9.63963C17.6727 9.31511 17.5489 9.00388 17.3284 8.7744C17.1079 8.54493 16.8089 8.41602 16.4971 8.41602H11.5006C11.1888 8.41602 10.8898 8.54493 10.6693 8.7744C10.4488 9.00388 10.325 9.31511 10.325 9.63963V16.7404C10.3251 16.9237 10.3647 17.1046 10.441 17.2698C10.5174 17.435 10.6283 17.5803 10.7658 17.6948L12.5851 19.2152C12.6067 19.2334 12.6329 19.2449 12.6605 19.2483C12.6881 19.2517 12.7161 19.2469 12.7411 19.2344C12.7662 19.2219 12.7874 19.2022 12.8022 19.1777C12.817 19.1532 12.8248 19.1248 12.8247 19.0959V14.0752C12.8247 14.0347 12.8402 13.9958 12.8677 13.9671C12.8953 13.9384 12.9327 13.9223 12.9716 13.9223H14.2942C14.5281 13.9223 14.7524 14.019 14.9177 14.1911C15.0831 14.3632 15.176 14.5966 15.176 14.84V19.0959C15.176 19.1247 15.1838 19.1529 15.1986 19.1773C15.2133 19.2017 15.2344 19.2212 15.2593 19.2337C15.2843 19.2461 15.3121 19.251 15.3396 19.2477C15.3671 19.2445 15.3932 19.2332 15.4148 19.2152L17.2341 17.6948C17.3716 17.5803 17.4826 17.435 17.5589 17.2698C17.6352 17.1046 17.6748 16.9237 17.675 16.7404V14.5341C17.675 14.2096 17.5511 13.8983 17.3306 13.6689C17.1101 13.4394 16.8111 13.3105 16.4993 13.3105C16.8107 13.3099 17.1092 13.1807 17.3292 12.9513C17.5492 12.7219 17.6727 12.411 17.6727 12.0869ZM14.2928 12.6987H12.9702C12.9312 12.6987 12.8938 12.6826 12.8662 12.6539C12.8387 12.6252 12.8232 12.5863 12.8232 12.5457V9.79258C12.8232 9.75202 12.8387 9.71311 12.8662 9.68443C12.8938 9.65574 12.9312 9.63963 12.9702 9.63963H15.0275C15.0665 9.63963 15.1039 9.65574 15.1315 9.68443C15.159 9.71311 15.1745 9.75202 15.1745 9.79258V11.781C15.1745 12.0243 15.0816 12.2578 14.9162 12.4299C14.7509 12.602 14.5266 12.6987 14.2928 12.6987Z" fill="#004DE5"></path>
                                                        </g>
                                                    </svg>
                                                </span>
                                                <input onChange={(e) => { setRoninAddress(e.target.value) }} placeholder="Enter Ronin address or RNS" className="input-module_formControl__oYbNL input-module_hasPrefix__Zh5xG input-module_hasSuffix__hiMdC" />
                                                <span className="input-module_suffix__nC3z-">
                                                    <svg role="button" viewBox="0 0 20 20" width="16" height="16">
                                                        <path fill="currentColor" fillRule="evenodd" d="M5 3.5h10a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5H5a.5.5 0 0 1-.5-.5V4a.5.5 0 0 1 .5-.5ZM15 2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2ZM7 6.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5H7ZM6.25 10A.75.75 0 0 1 7 9.25h6a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75ZM7 12.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5H7Z" clipRule="evenodd"></path>
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="relative">
                                        <div className="form-item-module_form__3-Rfq text-field-module_input-root__PSsoe">
                                            <div className="textarea-module_container__ySQMV textarea-module_default__77bog block md:hidden opacity-1">
                                                <div className="textarea-module_form__YZx2Y">
                                                    <textarea placeholder="Enter Ronin address or RNS" className="textarea-module_formControl__hodJS"></textarea>
                                                </div>
                                            </div>
                                        </div>
                                        <svg role="button" className="absolute top-[-28px] right-0 block md:hidden" viewBox="0 0 20 20" width="20" height="20">
                                            <path fill="currentColor" fillRule="evenodd" d="M5 3.5h10a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5H5a.5.5 0 0 1-.5-.5V4a.5.5 0 0 1 .5-.5ZM15 2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2ZM7 6.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5H7ZM6.25 10A.75.75 0 0 1 7 9.25h6a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75ZM7 12.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5H7Z" clipRule="evenodd"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="hidden">
                                    <div className="break-all">
                                        <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-md__-HKdi typo-module_neutral__9orA9 w-full items-center gap-4 truncate">
                                            <div className="typo-module_t-body-md__XGPoD typo-module_mobile-t-body-md__-HKdi typo-module_neutral__9orA9 typo-module_dim__qoQFh inline"></div>
                                        </div>
                                        <div className="typo-module_t-body-sm__UYoyX typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh"></div>
                                    </div>
                                    <svg role="button" className="absolute right-16 hidden md:block" viewBox="0 0 20 20" width="20" height="20">
                                        <path fill="currentColor" fillRule="evenodd" d="M5 3.5h10a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5H5a.5.5 0 0 1-.5-.5V4a.5.5 0 0 1 .5-.5ZM15 2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2ZM7 6.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5H7ZM6.25 10A.75.75 0 0 1 7 9.25h6a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75ZM7 12.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5H7Z" clipRule="evenodd"></path>
                                    </svg>
                                </div>
                            </div>
                            <div className="form-helper-module_helper__eR9Mn form-helper-module_primary__U2jen mt-24">
                                <svg className="form-helper-module_icon__MxH0s" viewBox="0 0 20 20" width="20" height="20">
                                    <path fill="currentColor" d="M10 2c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8Zm1 11.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4ZM10 8a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path>
                                </svg>
                                <div className="typo-module_t-body-sm__UYoyX typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 typo-module_dim__qoQFh">
                                    Please ensure the address is accurate and not an exchange wallet. <br /> Tokens sent to an incorrect address cannot be recovered.
                                </div>
                            </div>
                        </div>
                        <div className="dialog-footer">
                            <div className="flex flex-col-reverse items-center justify-end gap-16 md:ml-auto md:flex-row">
                                <button onClick={() => {
                                    setIsRoninModalOpen(false)
                                }} type="button" className="button-module_button__Z331g button-module_intent-primary__SAO1x button-module_size-default__caw9O button-module_button-root__0roWY w-full md:w-fit" disabled={isValidRoninAddress(roninAddress)}>
                                    Confirm
                                </button>
                            </div>
                        </div>
                    </div>
                    <div tabIndex="0" aria-hidden="true" style={{ width: 0, height: 0, overflow: 'hidden', outline: 'none' }}></div>
                </div>
            </div>
        </div>
    );
};

export default RoninBridgeModal;
