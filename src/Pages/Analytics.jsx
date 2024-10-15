import React from "react";

import Header from "../components/Header";
import AnalyticsBody from "./AnalyticsBody";
const Analytics = () => {
  return (
    <div className="mx-auto max-w-[1180px]">
      <Header />
      <main className="pb-24 pt-16 md:pb-48 md:pt-24">
        <div className="typo-module_t-display-xl__twhe3 typo-module_mobile-t-display-lg__6JAaA typo-module_neutral__9orA9 my-40">
          Ronin Analytics
        </div>
        <div className="border-radius relative mt-24 flex flex-col gap-12 rounded-2x border border-solid border-tc-border py-16 px-16 md:grid md:min-h-[228px] md:grid-cols-8 md:grid-rows-2 md:gap-0 md:px-24 md:py-32">
          <div className="border-0 border-solid border-tc-border md:col-span-4 md:min-h-[60px] md:pr-20 lg:col-span-2 lg:mr-20 lg:border-r-[1px] md:mb-20">
            <div className="grid grid-cols-2 md:flex md:items-center md:justify-between">
              <div className="flex flex-col justify-between gap-8">
                <div className="flex h-full min-h-[20px] items-center">
                  <div className="typo-module_t-label__38Ly4 typo-module_mobile-t-label__G-AYO typo-module_neutral__9orA9 typo-module_dim__qoQFh mr-4 uppercase">
                    total addresses
                  </div>
                </div>
                <div className="typo-module_t-display-md__KVUIu typo-module_mobile-t-display-md__BsA5M typo-module_neutral__9orA9 hidden items-baseline md:flex">
                  27,126,630
                </div>
              </div>
              <div className="typo-module_t-body-sm__UYoyX typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 flex items-center md:hidden">
                27,126,630
              </div>
            </div>
          </div>
          <div className="border-0 border-solid border-tc-border md:col-span-4 md:min-h-[60px] md:pr-20 lg:col-span-2 lg:mr-20 lg:border-r-[1px] md:mb-20">
            <div className="grid grid-cols-2 md:flex md:items-center md:justify-between">
              <div className="flex flex-col justify-between gap-8">
                <div className="flex h-full min-h-[20px] items-center">
                  <div className="typo-module_t-label__38Ly4 typo-module_mobile-t-label__G-AYO typo-module_neutral__9orA9 typo-module_dim__qoQFh mr-4 uppercase">
                    total transactions
                  </div>
                </div>
                <div className="typo-module_t-display-md__KVUIu typo-module_mobile-t-display-md__BsA5M typo-module_neutral__9orA9 hidden items-baseline md:flex">
                  991,205,753
                </div>
              </div>
              <div className="typo-module_t-body-sm__UYoyX typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 flex items-center md:hidden">
                991,205,753
              </div>
            </div>
          </div>
          <div className="border-0 border-solid border-tc-border md:col-span-4 md:min-h-[60px] md:pr-20 lg:col-span-2 lg:mr-20 lg:border-r-[1px] md:mb-20">
            <div className="grid grid-cols-2 md:flex md:items-center md:justify-between">
              <div className="flex flex-col justify-between gap-8">
                <div className="flex h-full min-h-[20px] items-center">
                  <div className="typo-module_t-label__38Ly4 typo-module_mobile-t-label__G-AYO typo-module_neutral__9orA9 typo-module_dim__qoQFh mr-4 uppercase">
                    total blocks
                  </div>
                </div>
                <div className="typo-module_t-display-md__KVUIu typo-module_mobile-t-display-md__BsA5M typo-module_neutral__9orA9 hidden items-baseline md:flex">
                  39,014,318
                </div>
              </div>
              <div className="typo-module_t-body-sm__UYoyX typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 flex items-center md:hidden">
                39,014,318
              </div>
            </div>
          </div>
          <div className="border-0 border-solid border-tc-border md:col-span-4 md:min-h-[60px] md:pr-20 lg:col-span-2 md:mb-20">
            <div className="grid grid-cols-2 md:flex md:items-center md:justify-between">
              <div className="flex flex-col justify-between gap-8">
                <div className="flex h-full min-h-[20px] items-center">
                  <div className="typo-module_t-label__38Ly4 typo-module_mobile-t-label__G-AYO typo-module_neutral__9orA9 typo-module_dim__qoQFh mr-4 uppercase">
                    block time
                  </div>
                </div>
                <div className="typo-module_t-display-md__KVUIu typo-module_mobile-t-display-md__BsA5M typo-module_neutral__9orA9 hidden items-baseline md:flex">
                  ~3s
                </div>
              </div>
              <div className="typo-module_t-body-sm__UYoyX typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 flex items-center md:hidden">
                ~3s
              </div>
            </div>
          </div>
          <div className="absolute top-[calc(50%)] ml-24 hidden h-[1px] w-[calc(100%-48px)] border-0 border-t border-solid border-tc-border md:block lg:left-24 lg:ml-0"></div>
          <div className="border-0 border-solid border-tc-border md:col-span-4 md:min-h-[60px] md:pr-20 lg:col-span-2 lg:mr-20 lg:border-r-[1px] md:mt-24">
            <div className="grid grid-cols-2 md:flex md:items-center md:justify-between">
              <div className="flex flex-col justify-between gap-8">
                <div className="flex h-full min-h-[20px] items-center">
                  <div className="typo-module_t-label__38Ly4 typo-module_mobile-t-label__G-AYO typo-module_neutral__9orA9 typo-module_dim__qoQFh mr-4 uppercase">
                    ron volume 24h
                  </div>
                </div>
                <div className="typo-module_t-display-md__KVUIu typo-module_mobile-t-display-md__BsA5M typo-module_neutral__9orA9 hidden items-baseline md:flex">
                  $2.07M
                </div>
              </div>
              <div className="typo-module_t-body-sm__UYoyX typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 flex items-center md:hidden">
                $2.07M
              </div>
            </div>
          </div>
          <div className="border-0 border-solid border-tc-border md:col-span-4 md:min-h-[60px] md:pr-20 lg:col-span-2 lg:mr-20 lg:border-r-[1px] md:mt-24">
            <div className="grid grid-cols-2 md:flex md:items-center md:justify-between">
              <div className="flex flex-col justify-between gap-8">
                <div className="flex h-full min-h-[20px] items-center">
                  <div className="typo-module_t-label__38Ly4 typo-module_mobile-t-label__G-AYO typo-module_neutral__9orA9 typo-module_dim__qoQFh mr-4 uppercase">
                    circulating supply
                  </div>
                </div>
                <div className="typo-module_t-display-md__KVUIu typo-module_mobile-t-display-md__BsA5M typo-module_neutral__9orA9 hidden items-baseline md:flex">
                  352.36M
                </div>
              </div>
              <div className="typo-module_t-body-sm__UYoyX typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 flex items-center md:hidden">
                352.36M
              </div>
            </div>
          </div>
          <div className="border-0 border-solid border-tc-border md:col-span-4 md:min-h-[60px] md:pr-20 lg:col-span-2 lg:mr-20 lg:border-r-[1px] md:mt-24">
            <div className="grid grid-cols-2 md:flex md:items-center md:justify-between">
              <div className="flex flex-col justify-between gap-8">
                <div className="flex h-full min-h-[20px] items-center">
                  <div className="typo-module_t-label__38Ly4 typo-module_mobile-t-label__G-AYO typo-module_neutral__9orA9 typo-module_dim__qoQFh mr-4 uppercase">
                    market cap
                  </div>
                </div>
                <div className="typo-module_t-display-md__KVUIu typo-module_mobile-t-display-md__BsA5M typo-module_neutral__9orA9 hidden items-baseline md:flex">
                  $574.63M
                </div>
              </div>
              <div className="typo-module_t-body-sm__UYoyX typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 flex items-center md:hidden">
                $574.63M
              </div>
            </div>
          </div>
          <div className="border-0 border-solid border-tc-border md:col-span-4 md:min-h-[60px] md:pr-20 lg:col-span-2 md:mt-24">
            <div className="grid grid-cols-2 md:flex md:items-center md:justify-between">
              <div className="flex flex-col justify-between gap-8">
                <div className="flex h-full min-h-[20px] items-center">
                  <div className="typo-module_t-label__38Ly4 typo-module_mobile-t-label__G-AYO typo-module_neutral__9orA9 typo-module_dim__qoQFh mr-4 uppercase">
                    fdv
                  </div>
                </div>
                <div className="typo-module_t-display-md__KVUIu typo-module_mobile-t-display-md__BsA5M typo-module_neutral__9orA9 hidden items-baseline md:flex">
                  $1.59B
                </div>
              </div>
              <div className="typo-module_t-body-sm__UYoyX typo-module_mobile-t-body-sm__tBwWm typo-module_neutral__9orA9 flex items-center md:hidden">
                $1.59B
              </div>
            </div>
          </div>
        </div>
        <AnalyticsBody />
      </main>
    </div>
  );
};

export default Analytics;
