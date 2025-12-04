"use client";
import type { Metadata } from "next";
import { useState } from "react";
import "./globals.css";
import FeaturedSlots from "./components/homeComponents/featuredSlots";

import * as icon from "./assets/icons";
import {
  Icon,
  StatCard,
  Product,
  Tag,
  Review,
} from "./components/homeComponents";
import { motion } from "framer-motion";

export default function Home() {
  // Everything here will likely be moved down later because I think
  // we'll do a backend call to get the featured slots,
  // so most of this is hardset, but the featured slots will be dynamic
  // but worry about that later

  // also gonna have to make it more responsive later
  return (
    <div>
      <div className="w-full max-w-7xl mx-auto rounded-lg  p-6 m-2 font-sans">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-row items-stretch gap-30"
        >
          {/* Left: text and buttons at bottom */}
          <div className="w-1/2 flex flex-col justify-between bg-transparent">
            <div>
              <div className="w-38 h-6 bg-[#B8E5DF] mb-4 rounded-xl">
                <p className="text-sm text-center text-[#0F172B] ">
                  ★ Trusted Since ____
                </p>
              </div>
              <h1 className="text-3xl font-medium mb-1/2">
                Vegas-Quality Slots.
              </h1>
              <h1 className="text-3xl font-medium mb-6 text-[#B8E5DF]">
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
              <motion.button
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="flex-1 px-4 py-2 bg-[#0F172B] shadow-lg text-white rounded-xl"
              >
                Browse 300+ Models
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="flex-1 px-4 py-2 border border-[#B8E5DF] shadow-lg text-black rounded-xl"
              >
                Get Free Consultation
              </motion.button>
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
        </motion.div>
      </div>
      <div className=" flex flex-row flex-wrap lg:flex-nowrap items-contain justify-center gap-6 lg:m-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <StatCard
            title="300+ Models"
            description="Vintage to classics to latest video reels"
          >
            <Icon icon={icon.StockIcon} iconSize="w-6 h-6"></Icon>
          </StatCard>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <StatCard
            title="Vetted Slot Machines"
            description="High Quality Machines"
          >
            <Icon icon={icon.thumbUpIcon} iconSize="w-6 h-6"></Icon>
          </StatCard>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          <StatCard title="33+" description="Years Combined Experience">
            <Icon icon={icon.clockIcon} iconSize="w-6 h-6"></Icon>
          </StatCard>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.5 }}
        >
          <StatCard title="Great" description="Customer Service">
            <Icon icon={icon.headphoneIcon} iconSize="w-6 h-6"></Icon>
          </StatCard>
        </motion.div>
      </div>
      {/* Featured Products */}
      <div className="flex flex-col gap-6 flex-wrap items-center justify-center mt-4 sm:m-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col gap-4 items-center justify-center"
        >
          <Tag
            title="Hot Deals"
            className="w-fit px-3 rounded-2xl flex flex-nowrap items-center bg-secondary/20 border border-secondary"
            icon={
              <Icon
                icon={icon.starIcon}
                bgColor="bg-transparent"
                className="rounded-full flex items-center justify-center"
              ></Icon>
            }
          ></Tag>

          <p>Featured Slot Machines</p>
          <p className="lg:w-2xl sm:h-12 text-[#45556C] text-center mx-auto">
            Hand-picked machines that deliver maximum entertainment and
            reliability. Limited Inventory Available.
          </p>
        </motion.div>

        <div className="flex flex-row gap-6 items-center justify-center">
          <FeaturedSlots />
        </div>
      </div>
      {/* Why Choose Us Section */}
      <div className="flex flex-col gap-6 flex-wrap items-center justify-center mt-4 sm:m-6 p-4">
        <p>Why Choose Us?</p>
        <p className="lg:w-2xl sm:h-12 text-[#45556C] text-center mx-auto">
          We're not just selling machines—we're partnering with you for
          long-term success.
        </p>

        <motion.div
          initial="hidden"
          viewport={{ once: true }}
          whileInView="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.3, staggerChildren: 0.3 },
            },
          }}
          className="w-full sm:grid sm:grid-cols-6 sm:row-span-3 gap-6"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
            className="mb-4 sm:mb-0 relative col-span-3 row-span-2"
          >
            <StatCard
              width="sm:w-[110%]"
              height="h-full"
              bgColor="bg-white"
              isHover={false}
              className="block p-15 gap-5 border-l-4 border-primary items-start justify-start"
              rounded="rounded-3xl"
              titleName="text-2xl"
              title="Premium Quality"
              descName="lg:w-[440px] text-left"
              description="Professionally refurbished machines tested to perfection. Every slot is casino-ready."
            >
              <Tag
                title="Certified"
                bgColor="bg-[#F1F5F9]"
                rounded="rounded-full"
                size="w-20 h-8"
              />
            </StatCard>

            <div className="absolute -top-5 -left-5 m-2">
              <Icon
                icon={icon.ShieldIcon}
                iconSize="w-6 h-6"
                size="w-20 h-20"
                bgColor="bg-primary"
                className="shadow-lg"
              />
            </div>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
            className="mb-4 sm:mb-0 relative col-span-3 grid"
          >
            <StatCard
              width="sm:w-[90%]"
              height="h-full"
              bgColor="bg-white"
              isHover={false}
              className="block p-8 pl-18 gap-5 items-start justify-start justify-self-end"
              rounded="rounded-3xl"
              titleName="text-2xl"
              title="Unbeatable Prices"
              descName="text-left pr-10"
              description="Save up to 70% compared to new machines. Own the excitement without breaking the bank."
            >
              <Tag
                title="Best Value"
                bgColor="bg-[#F1F5F9]"
                rounded="rounded-full"
                size="w-20 h-8"
              />
            </StatCard>

            <div className="absolute -top-5 -left-5 sm:left-auto sm:-right-5 m-2">
              <Icon
                icon={icon.DollarIcon}
                iconSize="w-6 h-6"
                size="w-18 h-18"
                bgColor="bg-secondary"
                className="shadow-lg"
              />
            </div>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
            className="mb-4 sm:mb-0 relative col-span-3 grid"
          >
            <StatCard
              width="sm:w-[90%]"
              height="h-full"
              bgColor="bg-white"
              isHover={false}
              className="block p-8 pl-18 gap-5 items-start justify-start justify-self-end"
              rounded="rounded-3xl"
              titleName="text-2xl"
              title="Wide Selection"
              descName="text-left pr-10"
              description="From classic reels to modern video slots. Find the perfect machine for your venue."
            >
              <Tag
                title="Popular"
                bgColor="bg-[#F1F5F9]"
                rounded="rounded-full"
                size="w-20 h-8"
              />
            </StatCard>

            <div className="absolute -top-5 -left-5 sm:left-auto sm:-right-5 m-2">
              <Icon
                icon={icon.GridIcon}
                iconSize="w-6 h-6"
                size="w-18 h-18"
                bgColor="bg-primary-light"
                className="shadow-lg"
              />
            </div>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
            className="mb-4 sm:mb-0 relative col-span-2"
          >
            <StatCard
              width="w-auto"
              height="h-full"
              bgColor="bg-gradient-to-r from-primary/10 to-transparent"
              isHover={false}
              className="block border border-primary p-8 pl-18 gap-5 items-start justify-start"
              rounded="rounded-3xl"
              titleName="text-2xl"
              title="Nationwide Delivery"
              descName="text-left"
              description="White-glove delivery and setup nationwide. We handle the heavy lifting for you."
            >
              <Tag
                title="Free Shipping"
                bgColor="bg-[#F1F5F9]"
                rounded="rounded-full"
                size="w-26 h-8"
              />
            </StatCard>

            <div className="absolute -top-5 sm:top-1/20 -left-5 m-2">
              <Icon
                icon={icon.truckIcon}
                iconSize="w-6 h-6"
                size="w-18 h-18"
                bgColor="bg-primary"
                className="shadow-lg"
              />
            </div>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
            className="mb-4 sm:mb-0 relative col-span-2"
          >
            <StatCard
              width="w-auto"
              height="h-full"
              bgColor="bg-gradient-to-r from-secondary/10 to-transparent"
              isHover={false}
              className="block border border-secondary p-8 pl-18 gap-5 items-start justify-start"
              rounded="rounded-3xl"
              titleName="text-2xl"
              title="Maintenance and Repairs"
              descName="text-left"
              description="Each Machine comes with full diagnostic and repair services."
            >
              <Tag
                title="Protected"
                bgColor="bg-[#F1F5F9]"
                rounded="rounded-full"
                size="w-26 h-8"
              />
            </StatCard>

            <div className="absolute -top-5 sm:top-1/20 -left-5 m-2">
              <Icon
                icon={icon.medalIcon}
                iconSize="w-6 h-6"
                size="w-18 h-18"
                bgColor="bg-secondary"
                className="shadow-lg"
              />
            </div>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
            className="mb-4 sm:mb-0 relative col-span-2"
          >
            <StatCard
              width="w-auto"
              height="h-full"
              bgColor="bg-gradient-to-r from-primary-light/10 to-transparent"
              isHover={false}
              className="block border border-primary-light p-8 pl-18 gap-5 items-start justify-start"
              rounded="rounded-3xl"
              titleName="text-2xl"
              title="Expert Support"
              descName="text-left"
              description="25+ years in the business. Our team ensures you get the right machine for your needs."
            >
              <Tag
                title="Trusted"
                bgColor="bg-[#F1F5F9]"
                rounded="rounded-full"
                size="w-26 h-8"
              />
            </StatCard>

            <div className="absolute -top-5 sm:top-1/20 -left-5 m-2">
              <Icon
                icon={icon.personIcon}
                iconSize="w-6 h-6"
                size="w-18 h-18"
                bgColor="bg-primary-light"
                className="shadow-lg"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
      {/* Review Section */}
      <motion.div
        initial="hidden"
        viewport={{ once: true }}
        whileInView="visible"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { delay: 0.2, duration: 0.3, staggerChildren: 0.2 },
          },
        }}
        className="flex flex-row flex-wrap items-center justify-center mt-8 gap-2 lg:gap-4 lg:m-24"
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <Review
            comment="Purchased 3 machines for my bar. They've already paid for themselves in just 4 months! Great quality and service."
            name="Mike Richardson"
            info="Bar Owner, Texas"
          ></Review>
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <Review
            comment="The team went above and beyond. They helped me pick the right machines and handled all the setup. Highly recommend!"
            name="Sarah Chen"
            info="Entertainment Center, California"
          ></Review>
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <Review
            comment="Best investment I've made for my gaming lounge. Customers love the variety and the machines run flawlessly."
            name="James Martinez"
            info="Gaming Lounge Owner, Nevada"
          ></Review>
        </motion.div>
      </motion.div>
    </div>
  );
}
