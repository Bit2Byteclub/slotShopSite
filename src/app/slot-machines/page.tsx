"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getActiveManufacturers } from "@/services/manufacturers";
import { Manufacturer } from "@/types/slotMachines";

// animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

// loading skeleton component
function LoadingState() {
  return (
    <div className="px-4 sm:px-8 md:px-12 lg:px-16 py-12">
      <div className="w-full max-w-7xl mx-auto">
        <div className="animate-pulse">
          <div className="h-12 bg-gray-200 rounded w-1/3 mb-4"></div>
          <div className="h-6 bg-gray-200 rounded w-2/3 mb-12"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="bg-gray-200 rounded-xl h-64"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// empty state component
function EmptyState() {
  return (
    <div className="px-4 sm:px-8 md:px-12 lg:px-16 py-12">
      <div className="w-full max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-[#0F172B] mb-4">
          No Slot Machines Available
        </h1>
        <p className="text-lg text-[#45556C]">
          Check back soon for new inventory!
        </p>
      </div>
    </div>
  );
}

// manufacturer card component
function ManufacturerCard({ manufacturer }: { manufacturer: Manufacturer }) {
  const machineText = manufacturer.machine_count === 1 ? "machine" : "machines";

  return (
    <motion.div variants={itemVariants}>
      <Link href={`/slot-machines/${manufacturer.slug}`}>
        <div className="group relative bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer h-64">
          {/* image container */}
          <div className="relative h-48 bg-gray-50 flex items-center justify-center overflow-hidden">
            <Image
              src={manufacturer.logo_path || "/placeholder.jpeg"}
              alt={`${manufacturer.name} logo`}
              fill
              className="object-contain p-8 group-hover:scale-110 transition-transform duration-300"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
          </div>

          {/* manufacturer info */}
          <div className="p-6 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-[#0F172B] group-hover:text-primary transition-colors">
                {manufacturer.name}
              </h2>
              <p className="text-sm text-[#45556C] mt-1">
                {manufacturer.machine_count} {machineText} available
              </p>
            </div>
            <svg
              className="w-6 h-6 text-[#45556C] group-hover:text-primary group-hover:translate-x-1 transition-all"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

// slot machines main page (displays manufacturers)
export default function SlotMachinesPage() {
  const [manufacturers, setManufacturers] = useState<Manufacturer[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // fetch manufacturers on mount
  useEffect(() => {
    async function loadManufacturers() {
      try {
        const data = await getActiveManufacturers();
        setManufacturers(data);
      } catch (err) {
        setError("Failed to load manufacturers. Please try again later.");
        console.error("Error loading manufacturers:", err);
      } finally {
        setLoading(false);
      }
    }
    loadManufacturers();
  }, []);

  if (loading) return <LoadingState />;
  if (error) return <EmptyState />;
  if (manufacturers.length === 0) return <EmptyState />;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="px-4 sm:px-8 md:px-12 lg:px-16 py-12"
    >
      <div className="w-full max-w-7xl mx-auto">
        {/* header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0F172B] mb-4">
            Browse by Manufacturer
          </h1>
          <p className="text-lg text-[#45556C]">
            Select a manufacturer to explore their collection of premium slot machines
          </p>
        </div>

        {/* manufacturer grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          initial="hidden"
          animate="show"
          variants={containerVariants}
        >
          {manufacturers.map((manufacturer) => (
            <ManufacturerCard key={manufacturer.slug} manufacturer={manufacturer} />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
