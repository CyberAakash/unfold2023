"use client";

import React from "react";
// import type { NextPage } from "next";
import { SignInButton, ethos } from "ethos-connect";
import Disconnect from "./Disconnect";
import Mint from "./Mint";
import Fund from "./Fund";
import WalletActions from "./WalletActions";
import Link from "next/link";
import { stat } from "fs";

const Dashboard = () => {
  const { status, wallet } = ethos.useWallet();
  return (
    <>
      <div className="flex flex-col items-center justify-start gap-10 overflow-hidden relative w-screen min-h-screen">
        <div className="flex flex-col gap-14 justify-start items-center bg-zinc-200 text-bg1 w-screen relative min-h-screen">
          {/* <div className="p-12 flex-1">Status: {status}</div> */}

          <div className="max-w-7xl mx-aut text-center py-12 px-4 sm:px-6 lg:py-6 lg:px-8 flex-6">
            {!wallet ? (
              <div className="flex flex-col items-center justify-center mt-60 w-full gap-6 p-16 shadow-2xl bg-bg1 text-white rounded-2xl">
                <h2 className="font-semibold text-2xl">Connect to Wallet Now</h2>
                <SignInButton className="inline-flex items-center justify-center  px-5 py-3 border border-transparent text-2xl font-medium rounded-md text-white bg-primary hover:bg-primary/80">
                  Connect
                </SignInButton>
              </div>
            ) : (
              <div className="flex items-center justify-between px-20 w-screen">
                <div className="flex flex-col gap-2 text-xs">
                  <h2 className="text-xl font-extrabold tracking-tight sm:text-4xl">
                    Connected to wallet
                  </h2>
                  <code>{wallet.address}</code>
                  {/* <div className="place-content-center text-base font-medium text-ethos-primary space-x-1">
                  <div>
                    Wallet balance:{" "}
                    <code>{wallet.contents?.suiBalance.toString()}</code> Mist
                  </div>
                  <div className="text-xs text-gray-500">
                    (1 sui is 10^9 Mist)
                  </div>
                </div> */}
                </div>
                {/* <div className="flex flex-col gap-4">
                First, fund this wallet from the Sui faucet:
                <Fund />
                then
                <Mint />
                or
                <WalletActions />
                or
                <Disconnect />
              </div> */}
                <ethos.components.AddressWidget
                // excludeButtons={[
                //   ethos.enums.AddressWidgetButtons.WalletExplorer
                // ]}
                />
              </div>
            )}
          </div>
          {/* <div className="p-12 flex-1 flex justify-end">
          <ethos.components.AddressWidget
          // excludeButtons={[
          //   ethos.enums.AddressWidgetButtons.WalletExplorer
          // ]}
          />
        </div> */}
          {status == "connected" && (
            <Link
              className="bg-bg1 text-white min-w-[50%] p-4 text-center border-bg2 border-2 rounded-lg block"
              href="/store_data_in_wallet"
            >
              Submit Report
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
