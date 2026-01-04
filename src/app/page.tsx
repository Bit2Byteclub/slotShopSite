"use client";
import Image from "next/image";
import dynamic from "next/dynamic";

import * as icon from "./assets/icons";
import {
  Icon,
  StatCard,
  Tag,
} from "./_components/homeComponents";
import { motion } from "framer-motion";

// dynamic imports for heavy components
const FeaturedSlots = dynamic(() => import("./_components/homeComponents/featuredSlots"), {
  loading: () => <div className="text-center py-8">Loading featured slots...</div>,
});

const Review = dynamic(() => import("./_components/homeComponents/review"), {
  loading: () => <div className="w-90 max-w-sm h-64 bg-gray-100 rounded-xl animate-pulse" />,
});

// main landing page
export default function Home() {
  return (
    <div className="px-4 sm:px-8 md:px-12 lg:px-16 overflow-x-hidden">
      <div className="w-full max-w-7xl mx-auto rounded-lg p-4 sm:p-6 m-2 font-sans">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-stretch gap-6 md:gap-8"
        >
          {/* mobile image (shows first on mobile) */}
          <div className="md:hidden w-full h-64 sm:h-80 relative overflow-hidden rounded-2xl">
            <Image
              src="/homeSlotPicture.png"
              alt="Premium used slot machine available for sale"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
          </div>

          {/* left: text and buttons at bottom */}
          <div className="w-full md:w-1/2 flex flex-col justify-between bg-transparent">
            <div>
              <div className="w-fit px-4 py-2 bg-[#B8E5DF] mb-4 rounded-full shadow-lg shadow-primary/30">
                <p className="text-center text-[#0F172B] text-sm font-normal leading-5">
                  ★ Trusted Since xxxx
                </p>
              </div>
              <h1 className="font-normal mb-1 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight tracking-tight">
                Vegas-Quality Slots.
              </h1>
              <h1 className="font-normal mb-6 text-[#B8E5DF] text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight tracking-tight">
                Bargain Prices
              </h1>
              <p className="text-[#45556C]">
                Turn your venue into a jackpot destination with premium used
                slot machines that pack the thrill of Vegas at prices that make
                sense for your business. Each machine is casino-tested,
                certified, and ready to generate revenue from day one.
              </p>
            </div>

            <div className="flex gap-3 mt-6">
              <motion.button
                type="button"
                aria-label="Browse our collection of over 300 slot machine models"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="flex-1 px-4 py-2 bg-[#0F172B] shadow-lg text-white rounded-[14px] text-base font-normal leading-6"
              >
                Browse 300+ Models
              </motion.button>
              <motion.button
                type="button"
                aria-label="Get a free consultation about your venue needs"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="flex-1 px-4 py-2 border border-[#B8E5DF] shadow-lg text-black rounded-[14px] text-base font-normal leading-6"
              >
                Get Free Consultation
              </motion.button>
            </div>

            {/* tags */}
            <div className="mt-6 text-[#45556C] flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2">
                <Icon
                  icon={icon.medalIcon}
                  size="w-8 h-8"
                  bgColor="bg-primary"
                  rounded="rounded-lg"
                ></Icon>
                <p className="text-sm">Maintenance Services</p>
              </div>
              <div className="flex items-center gap-2">
                <Icon
                  icon={icon.truckIcon}
                  size="w-8 h-8"
                  bgColor="bg-secondary"
                  rounded="rounded-lg"
                ></Icon>
                <p className="text-sm">Nationwide Shipping</p>
              </div>
              <div className="flex items-center gap-2">
                <Icon
                  icon={icon.personIcon}
                  size="w-8 h-8"
                  bgColor="bg-primary-light"
                  rounded="rounded-lg"
                ></Icon>
                <p className="text-sm">Expert Setup</p>
              </div>
            </div>
          </div>

          {/* right: image placeholder (hidden on mobile, shows on md+) */}
          <div className="hidden md:flex md:w-1/2 items-center justify-center overflow-hidden">
            <div className="relative w-11/12 h-[550px]">
              <Image
                src="/homeSlotPicture.png"
                alt="Premium used slot machine available for sale"
                fill
                className="object-cover rounded-2xl"
                priority
                sizes="(max-width: 768px) 0vw, 50vw"
              />
            </div>
          </div>
        </motion.div>
      </div>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 my-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="w-full"
        >
          <StatCard
            title="300+ Models"
            description="Vintage to classics to latest video reels"
            width="w-full"
          >
            <Icon icon={icon.StockIcon} iconSize="w-6 h-6"></Icon>
          </StatCard>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          className="w-full"
        >
          <StatCard
            title="Vetted Slot Machines"
            description="High Quality Machines"
            width="w-full"
          >
            <Icon icon={icon.thumbUpIcon} iconSize="w-6 h-6"></Icon>
          </StatCard>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          className="w-full"
        >
          <StatCard title="33+" description="Years Combined Experience" width="w-full">
            <Icon icon={icon.clockIcon} iconSize="w-6 h-6"></Icon>
          </StatCard>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.5 }}
          className="w-full"
        >
          <StatCard title="Great" description="Customer Service" width="w-full">
            <Icon icon={icon.headphoneIcon} iconSize="w-6 h-6"></Icon>
          </StatCard>
        </motion.div>
        </div>
      </div>

      {/* featured products */}
      <div className="w-full max-w-7xl mx-auto flex flex-col gap-6 items-center justify-center mt-4 px-4 sm:px-6 lg:px-0 my-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col gap-4 items-center justify-center"
        >
          <Tag
            title="Hot Deals"
            className="w-fit px-3 py-2 rounded-2xl flex flex-nowrap items-center justify-center gap-2 bg-secondary/20 border border-secondary"
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

        <div className="w-full flex flex-row gap-6 items-center justify-center">
          <FeaturedSlots />
        </div>
      </div>

      {/* why choose us section */}
      <div className="flex flex-col gap-6 flex-wrap items-center justify-center mt-4 sm:m-6 p-4">
        <p>Why Choose Us?</p>
        <p className="lg:w-2xl sm:h-12 text-[#45556C] text-center mx-auto">
          We&apos;re not just selling machines—we&apos;re partnering with you for
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
              descName="lg:w-[440px] text-left max-w-full overflow-hidden"
              description="Professionally refurbished machines tested to perfection. Every slot is casino-ready."
            >
              <Tag
                title="Certified"
                bgColor="bg-[#F1F5F9]"
                rounded="rounded-full"
                size="w-20 h-8"
                shimmer={true}
              />
            </StatCard>

            <div className="absolute -top-5 -left-5 m-2">
              <Icon
                icon={icon.ShieldIcon}
                iconSize="w-6 h-6"
                size="w-20 h-20"
                bgColor="bg-primary"
                className="shadow-lg"
                shadow={true}
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
                shimmer={true}
              />
            </StatCard>

            <div className="absolute -top-5 -left-5 sm:left-auto sm:-right-5 m-2">
              <Icon
                icon={icon.DollarIcon}
                iconSize="w-6 h-6"
                size="w-18 h-18"
                bgColor="bg-secondary"
                className="shadow-lg"
                shadow={true}
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
                shimmer={true}
              />
            </StatCard>

            <div className="absolute -top-5 -left-5 sm:left-auto sm:-right-5 m-2">
              <Icon
                icon={icon.GridIcon}
                iconSize="w-6 h-6"
                size="w-18 h-18"
                bgColor="bg-primary-light"
                className="shadow-lg"
                shadow={true}
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
                shimmer={true}
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
                shimmer={true}
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
                shimmer={true}
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
      
      {/* review section */}
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
            comment="Purchased 3 machines for my bar. They&apos;ve already paid for themselves in just 4 months! Great quality and service."
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
            comment="Best investment I&apos;ve made for my gaming lounge. Customers love the variety and the machines run flawlessly."
            name="James Martinez"
            info="Gaming Lounge Owner, Nevada"
          ></Review>
        </motion.div>
      </motion.div>
    </div>
  );
}
