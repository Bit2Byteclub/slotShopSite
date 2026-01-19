import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import type { Route } from "next";
import { BUSINESS_INFO } from "@/constants/businessInfo";

// footer information and links
const SOCIAL_LINKS = [
  { href: "https://facebook.com", icon: FaFacebook, label: "Facebook" },
  { href: "https://instagram.com", icon: FaInstagram, label: "Instagram" },
  { href: "https://twitter.com", icon: FaXTwitter, label: "Twitter" },
];

const FOOTER_SECTIONS = [
  {
    title: "Site Map",
    links: [
      { href: "/" as Route, text: "Home" },
      { href: "/slot-machines" as Route, text: "Slots" },
      { href: "/about" as Route, text: "About" },
      { href: "/contact-us" as Route, text: "Contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { href: "/warranty" as Route, text: "Warranty" },
      { href: "/return-policy" as Route, text: "Return Policy" },
    ],
  },
];

const LEGAL_LINKS = [
  { href: "/privacy-policy" as Route, text: "Privacy Policy" },
  { href: "/terms-of-service" as Route, text: "Terms of Service" },
];

// footer component
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-black mt-16">
      <div className="border-t border-gray-300"></div>

      <div className="px-4 sm:px-8 md:px-12 lg:px-16 py-8 md:py-12">
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-8 md:gap-12 text-sm sm:text-base">
            {/* company description and social media links */}
            <div className="col-span-2 sm:col-span-3 md:col-span-2 lg:col-span-2">
              <p className="text-gray-700 mb-4 sm:mb-6 leading-relaxed max-w-md text-sm sm:text-base">
                Your trusted partner for premium used slot machines, delivering excellence through unmatched quality and service.
              </p>
              <div className="flex gap-3">
                {SOCIAL_LINKS.map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-10 h-10 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
                  >
                    <Icon size={20} color="white" />
                  </a>
                ))}
              </div>
            </div>

            {/* dynamic footer sections */}
            {FOOTER_SECTIONS.map((section) => (
              <div key={section.title}>
                <h3 className="text-lg font-bold mb-4">{section.title}</h3>
                {/* maps each link */}
                <ul className="space-y-2 font-normal text-gray-700">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href as Route} className="hover:text-primary transition-colors">
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* support section */}
            <div>
              <h3 className="text-lg font-bold mb-4">Support</h3>
              <ul className="space-y-2 font-normal text-gray-700">
                <li>
                  <Link href="/contact-us" className="hover:text-primary transition-colors">
                    Contact us
                  </Link>
                </li>
                <li>
                  <p className="font-normal">
                    {BUSINESS_INFO.address.street},
                    <br />
                    {BUSINESS_INFO.address.cityState}
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-300"></div>

      {/* bottom bar */}
      <div className="bg-white py-6">
        <div className="px-8 md:px-12 lg:px-16">
          <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p className="text-gray-600 font-normal">
              © {currentYear} {BUSINESS_INFO.name}. All rights reserved.
            </p>
            <div className="flex gap-6 flex-wrap justify-center font-normal">
              {LEGAL_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href as Route}
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  {link.text}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
