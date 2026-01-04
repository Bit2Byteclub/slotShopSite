import { BUSINESS_INFO, getPhoneLink, getEmailLink } from "@/constants/businessInfo";
import { ContactInfo } from "@/app/_components/policyComponents/PolicyComponents";

export default function ReturnPolicyPage() {
  return (
    <div className="px-8 md:px-12 lg:px-16 py-12">
      <div className="w-full max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-[#0F172B] mb-8">
          Return Policy
        </h1>

        <div className="space-y-8 text-[#45556C]">
          {/* introduction */}
          <section>
            <p className="leading-relaxed">
              We ship only quality items free of defects and workmanship. The
              product you purchase from Used Slot Shop must follow exchange
              procedures and guidelines by the purchaser.
            </p>
          </section>

          {/* return guidelines */}
          <section>
            <h2 className="text-2xl font-semibold text-[#0F172B] mb-4">
              Return & Exchange Guidelines
            </h2>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-medium text-[#0F172B] mb-2">
                  1. Used or Refurbished Items
                </p>
                <p className="leading-relaxed">
                  Used or refurbished items are final and cannot be returned or
                  refunded.
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-medium text-[#0F172B] mb-2">
                  2. New Product Returns
                </p>
                <p className="leading-relaxed">
                  New product sales may be returned for an equal exchange of
                  another item, or parts may be subject to a 20% restocking fee.
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-medium text-[#0F172B] mb-2">
                  3. E-proms and Electrical Parts
                </p>
                <p className="leading-relaxed">
                  E-proms and electrical parts are sold &quot;As Is&quot; and are not
                  returnable for exchange or refunds. Used Slot Shop cannot be
                  certain these items will be installed correctly.
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-medium text-[#0F172B] mb-2">
                  4. Return Timeframe
                </p>
                <p className="leading-relaxed">
                  Refunds and exchanges must be completed within 30 days from
                  the date of purchase and are subject to all of our
                  return/refund provisions and penalties.
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-medium text-[#0F172B] mb-2">
                  5. Initiating a Return
                </p>
                <p className="leading-relaxed">
                  To initiate a return or exchange, you must contact Used Slot
                  Shop at{" "}
                  <a
                    href={getPhoneLink()}
                    className="text-primary hover:underline"
                  >
                    {BUSINESS_INFO.contact.phone}
                  </a>{" "}
                  or email us at{" "}
                  <a
                    href={getEmailLink()}
                    className="text-primary hover:underline"
                  >
                    {BUSINESS_INFO.contact.emailLower}
                  </a>
                  . Do not send anything to us prior to getting our specific
                  return instructions.
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-medium text-[#0F172B] mb-2">
                  6. Shipping Costs
                </p>
                <p className="leading-relaxed">
                  All shipping costs and return shipping charges are paid by the
                  customer, and no refunds will be made on any shipping costs or
                  portions of any order as it relates to any shipping fees or
                  shipping costs.
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-medium text-[#0F172B] mb-2">
                  7. Insurance Requirements
                </p>
                <p className="leading-relaxed">
                  All returns in excess of $100.00 must be shipped and insured
                  for full value against damages. The cost of reshipping any
                  item to you in the event of merchandise exchange is also your
                  responsibility. Used Slot Shop will not pay for any shipping
                  charges whatsoever (few exceptions may apply).
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-medium text-[#0F172B] mb-2">
                  8. Return Condition Requirements
                </p>
                <p className="leading-relaxed">
                  Items returned for either exchange or refund must be in their
                  original condition and shipped back in their original
                  packaging to be acceptable for exchange. Credits and refunds
                  are issued only after the return is received and inspected by
                  Used Slot Shop and confirmed to be in sellable condition. If
                  the item is returned used or must be repackaged for resale, a
                  25% restocking fee will be charged. If the returned item is no
                  longer in saleable condition, the item(s) will be returned to
                  you and no credit or exchange will be permitted unless you
                  informed the delivery company of delivery damages on the
                  original arrival.
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-medium text-[#0F172B] mb-2">
                  9. Special Orders
                </p>
                <p className="leading-relaxed">
                  All special orders require a 50% non-refundable deposit before
                  any custom order can begin.
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-medium text-[#0F172B] mb-2">
                  10. Credit Processing
                </p>
                <p className="leading-relaxed">
                  Once a return item is received, we will credit back to the
                  buyer&apos;s credit card or an exchange will be made in accordance
                  with our terms stated above.
                </p>
              </div>
            </div>
          </section>

          {/* damaged items */}
          <section>
            <h2 className="text-2xl font-semibold text-[#0F172B] mb-4">
              Damaged Items Policy
            </h2>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                <p className="font-medium text-[#0F172B] mb-2">
                  1. Inspection Responsibility
                </p>
                <p className="leading-relaxed">
                  It is the customer&apos;s sole responsibility to inspect all
                  shipments when being delivered.
                </p>
              </div>

              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                <p className="font-medium text-[#0F172B] mb-2">
                  2. Report Damages Immediately
                </p>
                <p className="leading-relaxed">
                  Report any damages to us immediately! Report shipping-related
                  damage directly to the shipping or freight company and also
                  notify us so there are no delays.
                </p>
              </div>

              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                <p className="font-medium text-[#0F172B] mb-2">
                  3. Damage Notification Timeline
                </p>
                <p className="leading-relaxed">
                  Notification of damages must be made to us within 5 days of
                  receipt of damaged goods. The customer is responsible for
                  notifying the delivery company of shipping damages. Keep all
                  shipping materials as they will be needed to show the shipping
                  company. It is very important that you notify us immediately
                  of any damages so we can properly advise you.
                </p>
              </div>

              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                <p className="font-medium text-[#0F172B] mb-2">
                  4. Expediting Damage Claims
                </p>
                <p className="leading-relaxed">
                  To speed the damage goods claim process, you can email us with
                  pictures showing the damages found to{" "}
                  <a
                    href={getEmailLink()}
                    className="text-primary hover:underline"
                  >
                    {BUSINESS_INFO.contact.emailLower}
                  </a>
                  . Upon receipt of the pictures, we will arrange for a
                  replacement to be shipped and advise you on what to do with
                  the damaged item.
                </p>
              </div>
            </div>
          </section>

          {/* contact information */}
          <section className="bg-primary/10 p-6 rounded-xl">
            <h2 className="text-2xl font-semibold text-[#0F172B] mb-4">
              Contact Us
            </h2>
            <p className="leading-relaxed mb-4">
              For return inquiries or to initiate a return, please contact us:
            </p>
            <ContactInfo />
          </section>
        </div>
      </div>
    </div>
  );
}
