"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { searchSlotMachines } from "@/services/slotMachineSearch";
import { SlotInventory } from "@/types/slotMachines";
import Product from "@/app/_components/homeComponents/product";
import Tag from "@/app/_components/homeComponents/tag";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SlotInventory[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  // debounced search effect
  useEffect(() => {
    const timer = setTimeout(async () => {
      if (query.trim()) {
        setIsLoading(true);
        setHasSearched(true);
        const data = await searchSlotMachines(query);
        setResults(data);
        setIsLoading(false);
      } else {
        setResults([]);
        setHasSearched(false);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [query]);

  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-12 font-sans">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-medium mb-2">Search Inventory</h1>
        <p className="text-[#314158]">
          Find your perfect slot machine from our collection of 300+ models
        </p>
      </motion.div>

      {/* Search Input */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="max-w-2xl mx-auto mb-12"
      >
        <div className="relative">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by name, description, or provider..."
            className="w-full px-6 py-4 pr-12 text-lg border-2 border-primary rounded-xl shadow-lg
                       focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent
                       placeholder:text-[#62748E] bg-white"
          />
          <svg
            className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 text-[#62748E]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </motion.div>

      {/* Loading State */}
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="w-full bg-white rounded-2xl overflow-hidden shadow-md"
            >
              <div className="relative h-72 p-4 bg-gray-100 overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent"
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.5,
                    ease: "linear",
                  }}
                />
              </div>
              <div className="p-4 space-y-4">
                <div className="h-6 bg-gray-200 rounded w-3/4" />
                <div className="h-4 bg-gray-200 rounded w-1/2" />
                <div className="h-10 bg-gray-200 rounded w-1/3" />
              </div>
            </div>
          ))}
        </motion.div>
      )}

      {/* Initial State */}
      {!isLoading && !hasSearched && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="text-center py-16"
        >
          <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-b from-primary to-primary-light rounded-full flex items-center justify-center">
            <svg
              className="w-12 h-12 text-[#0f172b]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <p className="text-xl text-[#314158]">
            Start typing to search our inventory
          </p>
        </motion.div>
      )}

      {/* No Results State */}
      {!isLoading && hasSearched && results.length === 0 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-center py-16"
        >
          <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
            <svg
              className="w-12 h-12 text-[#62748E]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M12 20a8 8 0 100-16 8 8 0 000 16z"
              />
            </svg>
          </div>
          <p className="text-xl text-[#314158]">
            No machines found for &quot;{query}&quot;
          </p>
          <p className="text-[#62748E] mt-2">
            Try a different search term
          </p>
        </motion.div>
      )}

      {/* Results Grid */}
      {!isLoading && results.length > 0 && (
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1 } },
          }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 justify-items-center"
        >
          {results.map((machine) => (
            <motion.div
              key={machine.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
            >
              <Product
                name={machine.title}
                image={machine.image_path || undefined}
                condition={machine.condition || "Unknown"}
                price={
                  machine.is_on_sale && machine.sale_price
                    ? machine.sale_price.toFixed(2)
                    : machine.price.toFixed(2)
                }
                tag={
                  machine.is_on_sale ? (
                    <Tag
                      title="Sale"
                      bgColor="bg-secondary"
                      textColor="text-white"
                      size="w-16 h-8"
                      shimmer={true}
                    />
                  ) : undefined
                }
              />
            </motion.div>
          ))}
        </motion.div>
      )}

      {/* Results Count */}
      {!isLoading && hasSearched && results.length > 0 && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-[#62748E] mt-8"
        >
          Found {results.length} machine{results.length !== 1 ? "s" : ""}
        </motion.p>
      )}
    </div>
  );
}
