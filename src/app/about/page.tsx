import { GiTwoCoins } from "react-icons/gi";
import { MdAccessTime, MdLocalShipping, MdSpeed, MdCheckCircle } from "react-icons/md";

export default function AboutPage() {
  return (
    <div className="px-8 md:px-12 lg:px-16 py-12">
      <div className="w-full max-w-7xl mx-auto">
        {/* hero section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-[#0F172B] mb-6">About Us</h1>
          <p className="text-xl text-[#45556C] max-w-3xl mx-auto">
            Your trusted partner for premium used slot machines, delivering excellence through unmatched quality and service.
          </p>
        </div>

        {/* stats grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-3xl shadow-lg p-8 text-center">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
              <GiTwoCoins className="text-2xl md:text-3xl text-[#0F172B]" />
            </div>
            <h3 className="text-3xl font-bold text-[#0F172B] mb-2">300+ Models</h3>
            <p className="text-[#45556C]">Vintage classics to latest video reels</p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8 text-center">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-secondary rounded-2xl flex items-center justify-center mx-auto mb-4">
              <MdAccessTime className="text-2xl md:text-3xl text-[#0F172B]" />
            </div>
            <h3 className="text-3xl font-bold text-[#0F172B] mb-2">33+ Years</h3>
            <p className="text-[#45556C]">Market expertise and experience</p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8 text-center">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-primary-light rounded-2xl flex items-center justify-center mx-auto mb-4">
              <MdLocalShipping className="text-2xl md:text-3xl text-[#0F172B]" />
            </div>
            <h3 className="text-3xl font-bold text-[#0F172B] mb-2">Nationwide</h3>
            <p className="text-[#45556C]">Safe delivery and installation</p>
          </div>
        </div>

        {/* our commitment section */}
        <div className="bg-linear-to-r from-primary/10 to-transparent rounded-3xl p-12 mb-16 border border-primary">
          <h2 className="text-3xl font-bold text-[#0F172B] mb-4">Our Commitment</h2>
          <p className="text-lg text-[#45556C]">
            Delivering excellence through premium service and unmatched quality
          </p>
        </div>

        {/* high-speed quality service section */}
        <div className="mb-16">
          <div className="bg-white rounded-3xl shadow-lg p-12">
            <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6 mb-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 md:w-20 md:h-20 bg-secondary rounded-2xl flex items-center justify-center shrink-0">
                  <MdSpeed className="text-2xl md:text-4xl text-[#0F172B]" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#0F172B] md:hidden">
                  High-Speed Quality Service
                </h2>
              </div>
              <div>
                <h2 className="hidden md:block text-3xl font-bold text-[#0F172B] mb-4">
                  High-Speed Quality Service
                </h2>
                <p className="text-[#45556C] leading-relaxed mb-4 mt-4 md:mt-0">
                  At Used Slot Shop, our high-speed, quality service is the engine that keeps your business spinning profitably. From the moment you request a quote or place an order, our dedicated team springs into action—providing instant online valuations, same-day inspections, and 24-hour order confirmations.
                </p>
                <p className="text-[#45556C] leading-relaxed mb-4">
                  We rigorously inspect and refurbish every machine with certified technicians to ensure it meets your standards, then ship them nationwide on expedited carriers with fully insured packaging.
                </p>
                <p className="text-[#45556C] leading-relaxed">
                  You&apos;ll experience seamless coordination, transparent updates at every step, and lightning-fast delivery.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* vetted used slot machines section */}
        <div className="mb-16">
          <div className="bg-white rounded-3xl shadow-lg p-12">
            <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6 mb-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 md:w-20 md:h-20 bg-primary rounded-2xl flex items-center justify-center shrink-0">
                  <MdCheckCircle className="text-2xl md:text-4xl text-[#0F172B]" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#0F172B] md:hidden">
                  Vetted Used Slot Machines
                </h2>
              </div>
              <div>
                <h2 className="hidden md:block text-3xl font-bold text-[#0F172B] mb-4">
                  Vetted Used Slot Machines
                </h2>
                <p className="text-[#45556C] leading-relaxed mb-4 mt-4 md:mt-0">
                  At Used Slot Shop, every pre-owned unit in our inventory undergoes a rigorous vetting process to guarantee top-tier performance and reliability on day one. We Sale Refurbished slot machines, parts, slot stands.
                </p>
                <p className="text-[#45556C] leading-relaxed mb-4">
                  Our certified technicians disassemble, test, and recondition each component—coin mechanisms, RNG systems, bill validators, and displays—to ensure casino-grade functionality and compliance.
                </p>
                <p className="text-[#45556C] leading-relaxed">
                  We document detailed service histories and provide transparent reports, so you know exactly what you&apos;re getting before you buy. Whether you&apos;re acquiring a single classic reel machine or outfitting a new gaming venue with multiple video slots, you can trust our vetted used machines to deliver seamless operation, player satisfaction, and long-term value.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
