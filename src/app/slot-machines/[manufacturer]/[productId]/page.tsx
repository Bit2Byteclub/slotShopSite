"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";

// mock product data
const mockProduct = {
  id: "1",
  name: "Konami K2V African Diamond",
  price: "$999.00",
  manufacturer: "Konami",
  description:
    "African Diamond is a 3 reels slot game with up to 30 paylines by Konami gaming Inc. Explore the wild African savana with this exciting feature packed slot machine for sale. Free games are triggered by landing 3 or 5 scatter symbols. During Free Games, the wild scatter wins are tripled, and additional free games can be won.",
  condition: "Excellent",
  images: [
    "/placeholder.jpeg",
    "/placeholder.jpeg",
    "/placeholder.jpeg",
    "/placeholder.jpeg",
  ],
  specifications: {
    "PAR #69": "",
    Manufacturer: "Konami",
    Model: "K2V African Diamond",
    Type: "Video Slot Machine",
    Reels: "3",
    Paylines: "30",
    "Max Bet": "$5.00",
    Denomination: "Multi-Denomination",
    Cabinet: "Upright Cabinet",
    Condition: "Excellent - Casino Tested",
  },
  features: [
    "Free Games Feature",
    "Wild Scatter Symbols",
    "Tripled Wins During Free Games",
    "Up to 30 Paylines",
    "African Safari Theme",
    "High-Quality Graphics",
    "Bonus Rounds",
    "Progressive Jackpot Compatible",
  ],
};

const mockRecommendations = [
  {
    id: "2",
    name: "China Mystery",
    price: "$1099.00",
    image: "/placeholder.jpeg",
  },
  {
    id: "3",
    name: "China Shores",
    price: "$1299.00",
    image: "/placeholder.jpeg",
  },
  {
    id: "4",
    name: "Lion Festival",
    price: "$1199.00",
    image: "/placeholder.jpeg",
  },
  {
    id: "5",
    name: "Dragon Link",
    price: "$1499.00",
    image: "/placeholder.jpeg",
  },
];

export default function ProductPage() {
  const params = useParams();
  const manufacturer = params.manufacturer as string;

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [showSpecifications, setShowSpecifications] = useState(false);
  const [showFeatures, setShowFeatures] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleNextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === mockProduct.images.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? mockProduct.images.length - 1 : prev - 1
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // handle form submission
    console.log("Form submitted:", formData);
    alert("Thank you for your interest! We'll contact you soon.");
    setShowForm(false);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

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
          <Link
            href="/slot-machines"
            className="hover:text-primary transition-colors"
          >
            Manufacturers
          </Link>
          <span>/</span>
          <Link
            href={`/slot-machines/${manufacturer}`}
            className="hover:text-primary transition-colors capitalize"
          >
            {manufacturer}
          </Link>
          <span>/</span>
          <span className="text-[#0F172B] font-medium">
            {mockProduct.name}
          </span>
        </div>

        {/* product section */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-16">
          {/* image gallery */}
          <div className="space-y-4 lg:col-span-2">
            {/* main image */}
            <div className="relative aspect-3/4 lg:aspect-3/4 bg-gray-50 rounded-2xl overflow-hidden">
              <Image
                src={mockProduct.images[currentImageIndex]}
                alt={mockProduct.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              {/* navigation arrows */}
              <button
                onClick={handlePrevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center transition-all shadow-lg"
                aria-label="Previous image"
              >
                <svg
                  className="w-6 h-6 text-[#0F172B]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={handleNextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center transition-all shadow-lg"
                aria-label="Next image"
              >
                <svg
                  className="w-6 h-6 text-[#0F172B]"
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
              </button>
              {/* image counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
                {currentImageIndex + 1} / {mockProduct.images.length}
              </div>
            </div>

            {/* thumbnail strip */}
            <div className="grid grid-cols-4 gap-3">
              {mockProduct.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`relative aspect-square bg-gray-50 rounded-lg overflow-hidden border-2 transition-all ${
                    currentImageIndex === index
                      ? "border-primary"
                      : "border-transparent hover:border-gray-300"
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${mockProduct.name} view ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 25vw, 12vw"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* product info */}
          <div className="space-y-6 lg:col-span-3">
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold text-[#0F172B] mb-4">
                {mockProduct.name}
              </h1>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl lg:text-4xl font-bold text-primary">
                  {mockProduct.price}
                </span>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                  {mockProduct.condition}
                </span>
              </div>
              <p className="text-base lg:text-lg text-[#45556C] leading-relaxed">
                {mockProduct.description}
              </p>
            </div>

            {/* specifications */}
            <div className="bg-gray-50 rounded-xl overflow-hidden border border-gray-200">
              <button
                onClick={() => setShowSpecifications(!showSpecifications)}
                className="w-full flex items-center justify-between p-4 lg:p-6 hover:bg-gray-100 transition-colors"
              >
                <h2 className="text-xl lg:text-2xl font-bold text-[#0F172B]">
                  Specifications
                </h2>
                <svg
                  className={`w-6 h-6 text-[#0F172B] transition-transform duration-300 ${
                    showSpecifications ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <motion.div
                initial={false}
                animate={{
                  height: showSpecifications ? "auto" : 0,
                  opacity: showSpecifications ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-4 lg:px-6 pb-4 lg:pb-6 space-y-3">
                  {Object.entries(mockProduct.specifications).map(
                    ([key, value]) => (
                      <div
                        key={key}
                        className="flex justify-between py-2 border-b border-gray-200 last:border-0"
                      >
                        <span className="font-medium text-[#0F172B]">{key}</span>
                        <span className="text-[#45556C]">{value || "—"}</span>
                      </div>
                    )
                  )}
                </div>
              </motion.div>
            </div>

            {/* features */}
            <div className="bg-gray-50 rounded-xl overflow-hidden border border-gray-200">
              <button
                onClick={() => setShowFeatures(!showFeatures)}
                className="w-full flex items-center justify-between p-4 lg:p-6 hover:bg-gray-100 transition-colors"
              >
                <h2 className="text-xl lg:text-2xl font-bold text-[#0F172B]">Features</h2>
                <svg
                  className={`w-6 h-6 text-[#0F172B] transition-transform duration-300 ${
                    showFeatures ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <motion.div
                initial={false}
                animate={{
                  height: showFeatures ? "auto" : 0,
                  opacity: showFeatures ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-4 lg:px-6 pb-4 lg:pb-6">
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {mockProduct.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-[#45556C]"
                      >
                        <svg
                          className="w-5 h-5 text-primary mt-0.5 shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button
                onClick={() => setShowForm(!showForm)}
                className="w-full bg-primary hover:bg-link text-[#0F172B] font-bold py-3 lg:py-3.5 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl text-sm lg:text-base"
              >
                {showForm ? "Hide Inquiry Form" : "Express Interest"}
              </button>
              <Link href="/contact-us">
                <button className="w-full bg-white hover:bg-gray-50 text-[#0F172B] font-bold py-3 lg:py-3.5 px-6 rounded-xl transition-all duration-300 border-2 border-gray-200 hover:border-primary text-sm lg:text-base">
                  Contact Us for Details
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* inquiry form */}
        {showForm && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mb-16"
          >
            <div className="bg-linear-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <h2 className="text-3xl font-bold text-[#0F172B] mb-2">
                Interested in {mockProduct.name}?
              </h2>
              <p className="text-[#45556C] mb-6">
                Fill out the form below and we&apos;ll get back to you shortly.
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-[#0F172B] mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-[#0F172B] mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-[#0F172B] mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-[#0F172B] mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                    placeholder="I'm interested in purchasing this machine..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#0F172B] hover:bg-[#1e293b] text-primary font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Submit Inquiry
                </button>
              </form>
            </div>
          </motion.div>
        )}

        {/* recommendations */}
        <section>
          <h2 className="text-2xl lg:text-3xl font-bold text-[#0F172B] mb-6">
            You May Also Like
          </h2>
          <div className="flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory scrollbar-hide lg:grid lg:grid-cols-4 lg:gap-6 lg:overflow-visible">
            {mockRecommendations.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="min-w-[85vw] snap-center lg:min-w-0"
              >
                <Link
                  href={`/slot-machines/${manufacturer}/${product.id}`}
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                >
                  <div className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer h-full">
                    <div className="relative aspect-3/4 bg-gray-50 overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-base lg:text-lg font-semibold text-[#0F172B] mb-2 group-hover:text-primary transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-lg lg:text-xl font-bold text-[#0F172B]">
                        {product.price}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </motion.div>
  );
}
