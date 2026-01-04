"use client";

import { useState, useEffect, useMemo } from "react";
import Product from "./product";
import Tag from "./tag";
import { getFeaturedSlotMachines } from "@/services/slotMachineByFeatured";
import { SlotInventory } from "@/types/slotMachines";
import { motion } from "framer-motion";

// featured slots component
function FeaturedSlots() {
  const [featuredSlots, setFeaturedSlots] = useState<SlotInventory[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // fetch featured slots (on mount only)
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const data = await getFeaturedSlotMachines();
        setFeaturedSlots(data);
      } catch (err) {
        console.error("Error loading featured slots:", err);
        setError("Failed to load featured slots. Please try again later.");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  // helper function to determine which tag to display
  const getTagComponent = (isOnSale: boolean, index: number) => {
    // 'on sale' tag takes precedence
    if (isOnSale) {
      return (
        <span className="bg-red-500 text-white text-xs px-3 py-1 rounded-full">
          On Sale
        </span>
      );
    }

    // predefined tag configurations
    const tagConfig = [
      { title: "Best Seller", className: "bg-secondary" },
      { title: "New Arrival", className: "bg-primary" },
      { title: "Hot Deal", className: "bg-secondary" },
    ];

    // select tag based on index (default: "Hot Deal")
    const config = tagConfig[index] || tagConfig[2];

    return (
      <Tag
        title={config.title}
        className={`w-fit px-3 py-1 rounded-2xl flex flex-nowrap items-center gap-3 ${config.className} shadow-lg/20`}
      />
    );
  };

  // memoize product elements
  const productElements = useMemo(() => {
    return featuredSlots.map((slot, index) => {
      // determine displayed price
      const displayPrice =
        slot.is_on_sale && slot.sale_price != null
          ? slot.sale_price.toFixed(2)
          : slot.price.toFixed(2);

      return (
        // animated product card
        <motion.div
          key={slot.id}
          variants={{
            hidden: { opacity: 0, y: 10 },
            show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
          }}
          className="shadow-md rounded-xl"
        >
          <Product
            tag={getTagComponent(slot.is_on_sale, index)}
            image={slot.image_path ?? undefined}
            name={slot.title}
            condition={slot.condition ?? "N/A"}
            price={displayPrice}
          />
        </motion.div>
      );
    });
  }, [featuredSlots]);

  // loading state
  if (loading) {
    return <div>Loading featured slots...</div>;
  }

  // error state
  if (error) {
    return (
      <div className="text-red-500 text-center p-4 bg-red-50 rounded-lg">
        {error}
      </div>
    );
  }

  // no featured slots available
  if (featuredSlots.length === 0) {
    return <div>No featured slots available.</div>;
  }

  return (
    // animated grid of featured slots
    <motion.div
      className="w-full grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.15 } },
      }}
    >
      {productElements}
    </motion.div>
  );
}

export default FeaturedSlots;
