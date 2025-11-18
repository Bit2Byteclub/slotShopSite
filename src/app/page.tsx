"use client";
import type { Metadata } from "next";
import { useState } from "react";
import "./globals.css";

import * as icon from "./assets/icons";
import { Icon, StatCard } from "./components/homeComponents";

export default function Home() {
  // Everything here will likely be moved down later because I think
  // we'll do a backend call to get the featured slots,
  // so most of this is hardset, but the featured slots will be dynamic
  // but worry about that later

  // also gonna have to make it more responsive later
  return (
    <div>
      <div className="w-full max-w-7xl mx-auto rounded-lg  p-6 m-2 font-sans">
        <div className="flex flex-row items-stretch gap-30">
          {/* Left: text and buttons at bottom */}
          <div className="w-1/2 flex flex-col justify-between bg-transparent">
            <div>
              <div className="w-38 h-6 bg-[#B8E5DF] mb-4 rounded-xl">
                <p className="text-sm text-center text-[#0F172B] ">
                  ★ Trusted Since ____
                </p>
              </div>
              <h1 className="text-3xl font-semibold mb-1/2">
                Vegas-Quality Slots.
              </h1>
              <h1 className="text-3xl font-semibold mb-6 text-[#B8E5DF]">
                Bargain Prices
              </h1>
              <p className="text-black">
                Turn your venue into a jackpot destination with premium used
                slot machines that pack the thrill of Vegas at prices that make
                sense for your business. Each machine is casino-tested,
                certified, and ready to generate revenue from day one.
              </p>
            </div>

            <div className="flex gap-3 mt-6">
              <button className="flex-1 px-4 py-2 bg-[#0F172B] shadow-lg text-white rounded-xl">
                Browse 300+ Models
              </button>
              <button className="flex-1 px-4 py-2 border border-[#B8E5DF] shadow-lg text-black rounded-xl">
                Get Free Consultation
              </button>
            </div>
            {/*Added the icons using the Icon component*/}
            <div className="mt-6 text-[#45556C] flex items-center gap-2">
              <Icon
                icon={icon.medalIcon}
                size="w-8 h-8"
                bgColor="bg-primary"
                rounded="rounded-lg"
              ></Icon>
              <p className="text-sm">Maintenance Services</p>
              <Icon
                icon={icon.truckIcon}
                size="w-8 h-8"
                bgColor="bg-secondary"
                rounded="rounded-lg"
              ></Icon>
              <p className="text-sm">Nationwide Shipping</p>
              <Icon
                icon={icon.personIcon}
                size="w-8 h-8"
                bgColor="bg-primary-light"
                rounded="rounded-lg"
              ></Icon>
              <p className="text-sm">Expert Setup</p>
            </div>
          </div>

          {/* Right: image placeholder */}
          <div className="w-lg md:w-1/2 flex items-start justify-end overflow-hidden">
            <img
              src="/homeSlotPicture.png"
              alt="Product preview"
              className="object-cover w-3/4 h-3/4 rounded-2xl"
            />
          </div>
        </div>
      </div>
      <div className="w-full flex flex-row items-contain justify-center gap-6 m-6">
        <StatCard
          title="300+ Models"
          description="Vintage to classics to latest video reels"
        >
          <Icon icon={icon.StockIcon} iconSize="w-6 h-6"></Icon>
        </StatCard>
        <StatCard
          title="Vetted Slot Machines"
          description="High Quality Machines"
        >
          <Icon icon={icon.thumbUpIcon} iconSize="w-6 h-6"></Icon>
        </StatCard>
        <StatCard title="33+" description="Years Combined Experience">
          <Icon icon={icon.clockIcon} iconSize="w-6 h-6"></Icon>
        </StatCard>
        <StatCard title="Great" description="Customer Service">
          <Icon icon={icon.headphoneIcon} iconSize="w-6 h-6"></Icon>
        </StatCard>
      </div>
    </div>
  );
}
