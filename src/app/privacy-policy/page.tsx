import { BUSINESS_INFO, getEmailLink } from "@/constants/businessInfo";
import { ContactInfo } from "@/app/_components/policyComponents/PolicyComponents";

export default function PrivacyPolicyPage() {
  return (
    <div className="px-8 md:px-12 lg:px-16 py-12">
      <div className="w-full max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-[#0F172B] mb-4">
          Privacy Policy
        </h1>
        <p className="text-[#45556C] mb-8">LAST UPDATED July 23, 2025</p>

        <div className="space-y-8 text-[#45556C]">
          {/* introduction */}
          <section>
            <h2 className="text-2xl font-semibold text-[#0F172B] mb-4">
              Introduction
            </h2>
            <p className="leading-relaxed">
              This page (&quot;Privacy Policy&quot; or &quot;Policy&quot;) provides our policies and
              procedures for collecting, using and disclosing your information
              and outlines the security measures we&apos;ve put in place to protect
              the information that you store using Used Slot Shop&apos;s services,
              including the services made available through this web site, and
              any other software or services offered by Used Slot Shop in
              connection with such services (the &quot;Services&quot;). By using these
              Services, you consent to the collection, transfer, processing,
              storage, disclosure and other uses of your information described
              in this Privacy Policy.
            </p>
          </section>

          {/* what information does Used Slot Shop collect and store? */}
          <section>
            <h2 className="text-2xl font-semibold text-[#0F172B] mb-4">
              What information does Used Slot Shop collect and store?
            </h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-medium text-[#0F172B] mb-2">
                  Personal Information
                </h3>
                <p className="leading-relaxed">
                  When expressing an interest in obtaining additional
                  information about the Services or registering to use the
                  Services, Used Slot Shop requires you to provide your personal
                  contact information, such as your name, company name, address,
                  phone number, and email address (these are referred to below
                  as your &quot;Personal Contact Information&quot;). When purchasing the
                  Services, Frontline Legal Nurse Consulting also requires you
                  to provide financial and billing information, such as billing
                  name and address, credit card number, and the number of
                  employees within the organization that will be using the
                  Services (&quot;Billing Information&quot;).
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium text-[#0F172B] mb-2">
                  Data, Diagnostic & Login Information
                </h3>
                <p className="leading-relaxed">
                  Using Used Slot Shop&apos;s Services, you will be able to create,
                  upload, store and share information such as company
                  description, email ID, logo, photos, custom emails, user email
                  IDs, etc. (this is collectively referred to below as &quot;Data&quot;).
                  This information will be stored and maintained on Used Slot
                  Shop&apos;s web site. If you run into technical errors in the
                  course of using the Services, Used Slot Shop may request your
                  permission to obtain a crash report along with certain logging
                  information from your system documenting the error
                  (&quot;Diagnostic Information&quot;). Such information may contain
                  information regarding your Operating System version, hardware,
                  browser version (and .NET version information in case of
                  Windows systems), and your email address, if provided.
                  Additionally, certain login information is maintained in a
                  cookie stored locally on your computer (i.e. not on a server)
                  in order to streamline the login process (&quot;Login
                  Information&quot;).
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium text-[#0F172B] mb-2">
                  Analytics Information
                </h3>
                <p className="leading-relaxed mb-4">
                  As you navigate Used Slot Shop&apos;s website and use our Services,
                  Used Slot Shop may also collect information through the use of
                  frequently used information-gathering tools, such as cookies
                  and Web beacons (&quot;Website Navigational Information&quot;). Website
                  Navigational Information includes standard information from
                  your web browser (such as browser type and browser language),
                  your Internet Protocol (&quot;IP&quot;) address, and the actions you
                  take on Used Slot Shop&apos;s website (such as web pages viewed and
                  links clicked). Collectively, this information is referred to
                  as &quot;Analytics Information.&quot;
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Third party vendors, including Google, use cookies to serve
                    ads based on a user&apos;s prior visits to your website or other
                    websites.
                  </li>
                  <li>
                    Google&apos;s use of advertising cookies enables it and its
                    partners to serve ads to your users based on their visit to
                    your sites and/or other sites on the Internet.
                  </li>
                  <li>
                    Users may opt out of personalized advertising by visiting
                    Ads Settings or by visiting{" "}
                    <a
                      href="http://www.aboutads.info"
                      className="text-primary hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      www.aboutads.info
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium text-[#0F172B] mb-2">
                  Geo-Location Information
                </h3>
                <p className="leading-relaxed">
                  Used Slot Shop does not collect any information regarding your
                  real-time geo-location while using the Services; however, it
                  may do so at some point in the future. We will request your
                  permission before collecting such information.
                </p>
              </div>
            </div>
          </section>

          {/* what does Used Slot Shop do with the information it collects? */}
          <section>
            <h2 className="text-2xl font-semibold text-[#0F172B] mb-4">
              What does Used Slot Shop do with the information it collects?
            </h2>
            <p className="leading-relaxed mb-4">
              Used Slot Shop uses the information it collects in the following
              ways:
            </p>
            <ul className="space-y-3">
              <li>
                <strong className="text-[#0F172B]">
                  Personal Contact Information
                </strong>{" "}
                – We use this information primarily to administer our Services
                to you and provide you with updates and product announcements.
                Per the Privacy and Conditions, we may use some of your
                information for marketing purposes, as explained below.
              </li>
              <li>
                <strong className="text-[#0F172B]">Billing Information</strong>{" "}
                – Used Slot Shop does not store any Billing Information on its
                servers.
              </li>
              <li>
                <strong className="text-[#0F172B]">
                  Data, Diagnostic Information and Login Information
                </strong>{" "}
                – We use this information solely for the purpose of
                administering and improving our Services to you.
              </li>
              <li>
                <strong className="text-[#0F172B]">
                  Analytics Information
                </strong>{" "}
                – Used Slot Shop may use your Analytics Information in
                conjunction with an analytics service such as Google Analytics
                to monitor and analyze use of the Services, for the Services&apos;
                technical administration, to increase the Services&apos;
                functionality and user-friendliness, and to verify users have
                the authorization required for the Services to process their
                requests.
              </li>
            </ul>
          </section>

          {/* sharing & disclosure of private information */}
          <section>
            <h2 className="text-2xl font-semibold text-[#0F172B] mb-4">
              Sharing & Disclosure of Private Information
            </h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-medium text-[#0F172B] mb-2">
                  Third Party Applications and Your Use
                </h3>
                <p className="leading-relaxed">
                  Used Slot Shop provides users with the ability to link to
                  their Data on third party sites such as Facebook, Twitter and
                  LinkedIn. Such linking is at the complete discretion of users.
                  Because of this, Used Slot Shop cannot be held responsible or
                  liable for the linking of user&apos;s Data to such third party
                  sites, nor for how these third party sites use such links.
                </p>
                <p className="leading-relaxed mt-2">
                  All the above categories exclude text messaging originator
                  opt-in data and consent; this information will not be shared
                  with any third parties, excluding aggregators and providers of
                  the Text Message services.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium text-[#0F172B] mb-2">
                  Marketing and Publicity
                </h3>
                <p className="leading-relaxed">
                  Per our Privacy and Conditions, you agree to permit Used Slot
                  Shop to identify you as a customer and to use your name and/or
                  logo in Used Slot Shop&apos;s website and marketing materials.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium text-[#0F172B] mb-2">
                  Sale of Personal Information
                </h3>
                <p className="leading-relaxed">
                  Used Slot Shop does not sell, rent, or trade your private
                  information to any third parties in any way.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium text-[#0F172B] mb-2">
                  Service Providers and Business Partners
                </h3>
                <p className="leading-relaxed">
                  Used Slot Shop may use certain trusted third party companies
                  and individuals to help us provide, analyze, and improve the
                  Services (including, but not limited to, data storage,
                  maintenance services, database management, web analytics,
                  payment processing, and improvement of the Services&apos;
                  features). These third parties may have access to your
                  information strictly for the purposes of performing these
                  tasks on our behalf and under obligations similar to those in
                  this Privacy Policy.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium text-[#0F172B] mb-2">
                  Non-Private or Non-Personal Information
                </h3>
                <p className="leading-relaxed">
                  We may disclose your non-private, aggregated, or otherwise
                  non-personal information, such as usage statistics of our
                  Services, in our discretion.
                </p>
              </div>
            </div>
          </section>

          {/* children under the age of 13 */}
          <section>
            <h2 className="text-2xl font-semibold text-[#0F172B] mb-4">
              Children Under The Age Of 13
            </h2>
            <p className="leading-relaxed">
              Our Website is not intended for children under 13 years of age. No
              one under age 13 may provide any information to or on the Website.
              We do not knowingly collect personal information from children
              under 13. If you are under 13, do not use or provide any
              information on this Website or on or through any of its
              features/register on the Website, make any purchases through the
              Website, use any of the interactive or public comment features of
              this Website or provide any information about yourself to us,
              including your name, address, telephone number, email address, or
              any screen name or user name you may use. If we learn we have
              collected or received personal information from a child under 13
              without verification of parental consent, we will delete that
              information. If you believe we might have any information from or
              about a child under 13, please contact us at{" "}
              <a
                href={getEmailLink()}
                className="text-primary hover:underline"
              >
                {BUSINESS_INFO.contact.emailLower}
              </a>
            </p>
          </section>

          {/* gdpr compliance */}
          <section>
            <h2 className="text-2xl font-semibold text-[#0F172B] mb-4">
              GDPR Compliance for EU Residents
            </h2>
            <p className="leading-relaxed mb-4">
              If you reside in the European Union (&quot;EU&quot;), United Kingdom,
              Lichtenstein, Norway, Iceland or Switzerland, you may have
              additional rights with respect to your personally identifiable
              information (otherwise known as Personal Data). These rights may
              include rights under the EU&apos;s General Data Protection Regulation
              (&quot;GDPR&quot;).
            </p>
            <p className="leading-relaxed mb-4">
              In addition to the principles, practices and policies set forth
              above in this Privacy Policy, Used Slot Shop has adopted the
              following principles to govern its collection and processing of
              Personal Data:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Personal Data shall be processed lawfully, fairly, and in a
                transparent manner.
              </li>
              <li>
                The Personal Data collected will only be those specifically
                required to fulfill Used Slot Shop&apos;s obligations to deliver the
                service.
              </li>
              <li>
                Personal Data shall only be retained for as long as it is
                required to fulfill contractual requirements.
              </li>
              <li>
                Personal Data shall be adequate, relevant, and limited to what
                is necessary in relation to the purposes for which they are
                collected and/or processed.
              </li>
              <li>
                The data subject has the right to request from Used Slot Shop
                access to and rectification or erasure of their Personal Data,
                to object to or request restriction of processing concerning the
                data, or to the right to data portability.
              </li>
            </ul>
          </section>

          {/* ccpa */}
          <section>
            <h2 className="text-2xl font-semibold text-[#0F172B] mb-4">
              California Consumer Privacy Act (CCPA)
            </h2>
            <p className="leading-relaxed">
              Effective on January 1, 2020, the California Consumer Privacy Act
              (CCPA) allows California residents to obtain certain information
              collected by the business with whom they have established business
              relationships. If you are a California resident, you may exercise
              certain rights to access, restrict, or delete your personal
              information.
            </p>
          </section>

          {/* contact */}
          <section className="bg-gray-50 p-6 rounded-xl">
            <h2 className="text-2xl font-semibold text-[#0F172B] mb-4">
              Questions, Complaints and Contacts
            </h2>
            <p className="leading-relaxed mb-4">
              If you have any questions regarding this Privacy Policy, please
              contact us at:
            </p>
            <ContactInfo showPhone={false} />
          </section>
        </div>
      </div>
    </div>
  );
}
