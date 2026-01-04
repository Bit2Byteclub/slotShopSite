"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import {
  getMachinesByManufacturer,
  getManufacturerClassifications,
} from "@/services/manufacturers";
import { getImageUrl } from "@/services/machineDetails";
import { SlotInventory } from "@/types/slotMachines";

export default function ManufacturerPage() {
  const params = useParams();
  const manufacturer = params.manufacturer as string;
  
  const [machines, setMachines] = useState<SlotInventory[]>([]);
  const [classifications, setClassifications] = useState<{ name: string; count: number }[]>([]);
  const [selectedClassification, setSelectedClassification] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  // convert slug to display name
  const manufacturerName = manufacturer
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      const [machinesData, classificationsData] = await Promise.all([
        getMachinesByManufacturer(manufacturer.replace("-", " "), selectedClassification || undefined),
        getManufacturerClassifications(manufacturer.replace("-", " ")),
      ]);
      setMachines(machinesData);
      setClassifications(classificationsData);
      setLoading(false);
    }
    loadData();
  }, [manufacturer, selectedClassification]);

  const featuredMachines = machines.filter((m) => m.is_featured).slice(0, 3);
  const exploreMachines = machines.filter((m) => !m.is_featured).slice(0, 6);

  if (loading) {
    return (
      <div className="px-4 sm:px-8 md:px-12 lg:px-16 py-12">
        <div className="w-full max-w-7xl mx-auto animate-pulse">
          <div className="h-10 bg-gray-200 rounded w-1/4 mb-6"></div>
          <div className="h-12 bg-gray-200 rounded w-1/2 mb-4"></div>
          <div className="h-6 bg-gray-200 rounded w-2/3 mb-12"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="bg-gray-200 rounded-2xl h-96"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (machines.length === 0) {
    return (
      <div className="px-4 sm:px-8 md:px-12 lg:px-16 py-12">
        <div className="w-full max-w-7xl mx-auto">
          <Link href="/slot-machines" className="text-primary hover:text-link mb-6 inline-block">
            ← Back to Manufacturers
          </Link>
          <div className="text-center py-20">
            <h1 className="text-4xl font-bold text-[#0F172B] mb-4">
              No {manufacturerName} Machines Available
            </h1>
            <p className="text-lg text-[#45556C] mb-8">
              Check back soon for new inventory!
            </p>
            <Link href="/slot-machines">
              <button className="bg-primary hover:bg-link text-[#0F172B] font-bold py-3 px-8 rounded-xl transition-all">
                Browse Other Manufacturers
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="px-4 sm:px-8 md:px-12 lg:px-16 py-12"
    >
      <div className="w-full max-w-7xl mx-auto">
        {/* breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-sm text-[#45556C]">
          <Link href="/slot-machines" className="hover:text-primary transition-colors">
            Manufacturers
          </Link>
          <span>/</span>
          <span className="text-[#0F172B] font-medium">{manufacturerName}</span>
        </div>

        {/* header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0F172B] mb-4">
            {manufacturerName} Slot Machines
          </h1>
          <p className="text-lg text-[#45556C]">
            Premium quality {manufacturerName} machines - casino tested and certified
          </p>
        </div>

        {/* classification filter */}
        {classifications.length > 1 && (
          <div className="mb-12">
            <h2 className="text-lg font-semibold text-[#0F172B] mb-4">Filter by Type</h2>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setSelectedClassification(null)}
                className={`px-4 py-2 rounded-full font-medium transition-all ${
                  selectedClassification === null
                    ? "bg-primary text-[#0F172B]"
                    : "bg-gray-100 text-[#45556C] hover:bg-gray-200"
                }`}
              >
                All ({machines.length + exploreMachines.length})
              </button>
              {classifications.map((classification) => (
                <button
                  key={classification.name}
                  onClick={() => setSelectedClassification(classification.name)}
                  className={`px-4 py-2 rounded-full font-medium transition-all ${
                    selectedClassification === classification.name
                      ? "bg-primary text-[#0F172B]"
                      : "bg-gray-100 text-[#45556C] hover:bg-gray-200"
                  }`}
                >
                  {classification.name} ({classification.count})
                </button>
              ))}
            </div>
          </div>
        )}

        {/* featured products section */}
        {featuredMachines.length > 0 && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-[#0F172B] mb-8">Latest Arrivals</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredMachines.map((machine, index) => (
                <motion.div
                  key={machine.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link href={`/slot-machines/${manufacturer}/${machine.slug}`}>
                    <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer">
                      {/* Image */}
                      <div className="relative h-64 bg-gray-50 overflow-hidden">
                        <Image
                          src={getImageUrl(machine.image_path)}
                          alt={machine.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-300"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        <span className="absolute top-4 right-4 bg-primary text-[#0F172B] px-3 py-1 rounded-full text-sm font-medium">
                          {machine.condition}
                        </span>
                        {machine.is_on_sale && machine.sale_price && (
                          <span className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                            Sale!
                          </span>
                        )}
                      </div>

                      {/* Info */}
                      <div className="p-6">
                        <h3 className="text-xl font-semibold text-[#0F172B] mb-2 group-hover:text-primary transition-colors line-clamp-2">
                          {machine.title}
                        </h3>
                        <div className="flex items-center gap-2">
                          {machine.is_on_sale && machine.sale_price ? (
                            <>
                              <p className="text-2xl font-bold text-red-600">
                                ${machine.sale_price.toFixed(2)}
                              </p>
                              <p className="text-lg text-[#45556C] line-through">
                                ${machine.price.toFixed(2)}
                              </p>
                            </>
                          ) : (
                            <p className="text-2xl font-bold text-[#0F172B]">
                              ${machine.price.toFixed(2)}
                            </p>
                          )}
                        </div>
                        {machine.classification && (
                          <p className="text-sm text-[#45556C] mt-2">
                            {machine.classification}
                          </p>
                        )}
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {/* explore more section */}
        {exploreMachines.length > 0 && (
          <section>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-[#0F172B]">Explore More</h2>
              {machines.length > 9 && (
                <Link
                  href={`/slot-machines/${manufacturer}/all`}
                  className="text-primary hover:text-link font-medium flex items-center gap-2 transition-colors"
                >
                  View All
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              )}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
              {exploreMachines.map((machine, index) => (
                <motion.div
                  key={machine.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + index * 0.05 }}
                >
                  <Link href={`/slot-machines/${manufacturer}/${machine.slug}`}>
                    <div className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer">
                      {/* Image */}
                      <div className="relative aspect-square bg-gray-50 overflow-hidden">
                        <Image
                          src={getImageUrl(machine.image_path)}
                          alt={machine.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-300"
                          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                        />
                      </div>

                      {/* info */}
                      <div className="p-3">
                        <h3 className="text-sm font-medium text-[#0F172B] mb-1 truncate group-hover:text-primary transition-colors">
                          {machine.title}
                        </h3>
                        <p className="text-sm font-bold text-[#0F172B]">
                          ${machine.is_on_sale && machine.sale_price ? machine.sale_price.toFixed(2) : machine.price.toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </section>
        )}
      </div>
    </motion.div>
  );
}
