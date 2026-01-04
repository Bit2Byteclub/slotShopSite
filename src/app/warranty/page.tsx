import { ContactInfo } from "@/app/_components/policyComponents/PolicyComponents";

export default function WarrantyPage() {
  return (
    <div className="px-8 md:px-12 lg:px-16 py-12">
      <div className="w-full max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-[#0F172B] mb-8">Warranty</h1>

        <div className="space-y-8 text-[#45556C]">
          {/* introduction */}
          <section>
            <h2 className="text-2xl font-semibold text-[#0F172B] mb-4">
              Slot Machine Warranty
            </h2>
            <p className="leading-relaxed">
              Used Slot Shop stands behind our warranty and our slot machines.
            </p>
          </section>

          {/* warranty coverage */}
          <section>
            <h2 className="text-2xl font-semibold text-[#0F172B] mb-4">
              One-Year Warranty Coverage
            </h2>
            <p className="leading-relaxed mb-4">
              All reel slots, video slots, and video poker machines from Used
              Slot Shop for home use customers come with a one-year warranty.
              The one-year warranty starts from the date you receive your
              machine and extends for one full year.
            </p>
            <p className="leading-relaxed mb-4">
              Any and all parts supplied from our company are covered under
              warranty for a full year. If you have any problems with your
              machine, you can feel free to contact us during business hours.
              When you contact us, please make sure you&apos;re with your slot
              machine so we can troubleshoot your problem.
            </p>
            <p className="leading-relaxed">
              Used Slot Shop will replace any component as part of the warranty.
              All parts are marked with our company name, so if they&apos;re not our
              parts, we will be charging you for the replacement parts. All
              parts that are supplied by Used Slot Shop to repair your machine
              must be returned at the customer&apos;s expense. All slot parts are
              very easy to change out with the help of our technical support.
            </p>
          </section>

          {/* warranty exclusions */}
          <section className="bg-gray-50 p-6 rounded-xl">
            <h2 className="text-2xl font-semibold text-[#0F172B] mb-4">
              Warranty Exclusions
            </h2>
            <p className="leading-relaxed mb-4">
              Used Slot Shop&apos;s limited warranty excludes the following items:
            </p>
            <ul className="space-y-2 list-disc pl-6">
              <li>Light Bulbs</li>
              <li>Fuses</li>
              <li>Breakage of glass or LCD screens</li>
              <li>Light Bulb Starters</li>
            </ul>
          </section>

          {/* contact information */}
          <section>
            <h2 className="text-2xl font-semibold text-[#0F172B] mb-4">
              Contact Us for Warranty Support
            </h2>
            <p className="leading-relaxed mb-4">
              If you need warranty service or have questions about your
              warranty, please contact us:
            </p>
            <ContactInfo />
          </section>

          {/* footer */}
          <div className="text-center pt-8 border-t border-gray-200">
            <p className="text-sm text-[#45556C]">
              © {new Date().getFullYear()} Used Slot Shop. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
