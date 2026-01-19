import { BUSINESS_INFO, getEmailLink } from "@/constants/businessInfo";
import { ContactInfo } from "@/app/_components/policyComponents/PolicyComponents";

export default function TermsOfServicePage() {
  return (
    <div className="px-8 md:px-12 lg:px-16 py-12">
      <div className="w-full max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-[#0F172B] mb-8">
          Terms of Service
        </h1>

        <div className="space-y-8 text-[#45556C]">
          {/* introduction */}
          <section>
            <p className="leading-relaxed">
              The following Terms and Conditions are entered into by and between
              You and Used Slot Shop (&quot;Company&quot;, &quot;we&quot;, or &quot;us&quot;). The following
              terms and conditions, together with any documents they expressly
              incorporate by reference (collectively, these &quot;Terms of Use&quot;),
              govern your access to and use of{" "}
              <span className="text-[#0F172B] font-medium">
                www.usedslotshop.com
              </span>
              , including any content, functionality and services offered on or
              through{" "}
              <span className="text-[#0F172B] font-medium">
                www.usedslotshop.com
              </span>{" "}
              (the &quot;Website&quot;), whether as a guest or a registered user.
            </p>
            <p className="leading-relaxed mt-4">
              Please read the Terms of Use carefully before you start to use the
              Website. By using the Website or by clicking to accept or agree to
              the Terms of Use when this option is made available to you, you
              accept and agree to be bound and abide by these Terms of Use and
              our Privacy Policy, incorporated herein by reference.
            </p>
          </section>

          {/* changes to terms */}
          <section>
            <h2 className="text-2xl font-semibold text-[#0F172B] mb-4">
              Changes To the Terms Of Use
            </h2>
            <p className="leading-relaxed">
              We may revise and update these Terms of Use from time to time in
              our sole discretion. All changes are effective immediately when we
              post them, and apply to all access to and use of the Website
              thereafter. Your continued use of the Website following the
              posting of revised Terms of Use means that you accept and agree to
              the changes.
            </p>
          </section>

          {/* privacy */}
          <section>
            <h2 className="text-2xl font-semibold text-[#0F172B] mb-4">
              Privacy
            </h2>
            <p className="leading-relaxed">
              Your use of the Website is also subject to the Company&apos;s Privacy
              Policy. Please review our Privacy Policy, which also governs the
              Website and informs users of our data collection practices.
            </p>
          </section>

          {/* accessing the website */}
          <section>
            <h2 className="text-2xl font-semibold text-[#0F172B] mb-4">
              Accessing The Website And Account Security
            </h2>
            <p className="leading-relaxed mb-4">
              We reserve the right to withdraw or amend this Website and any
              service or material we provide on the Website in our sole
              discretion without notice. We will not be liable if for any reason
              all or any part of the Website is unavailable at any time or for
              any period.
            </p>
            <p className="leading-relaxed">
              To access the Website or some of the resources it offers, you may
              be asked to provide certain registration details or other
              information. It is a condition of your use of the Website that all
              the information you provide is correct, current, and complete. If
              you choose, or are provided with, a user name, password or any
              other piece of information as part of our security procedures, you
              must treat such information as confidential.
            </p>
          </section>

          {/* no unlawful use */}
          <section>
            <h2 className="text-2xl font-semibold text-[#0F172B] mb-4">
              No Unlawful Or Prohibited Use And Intellectual Property
            </h2>
            <p className="leading-relaxed mb-4">
              You are granted a non-exclusive, non-transferable, revocable
              license to access and use the Website and the resources available
              for download from the Website strictly in accordance with these
              Terms of Use.
            </p>
            <p className="leading-relaxed mb-4">
              As a condition of your use of the Website, you warrant to the
              Company that you will not use the Website for any purpose that is
              unlawful or prohibited by these Terms. All content included as
              part of the Service, such as text, graphics, logos, images, as
              well as the compilation thereof, and any software used on the
              Website, is the property of the Company or its suppliers and
              protected by copyright and other laws.
            </p>
            <p className="leading-relaxed">
              The Company name, the Company logo, and all related names, logos,
              product and service names, designs, and slogans are trademarks of
              the Company or its affiliates or licensors. You must not use such
              marks without the prior written permission of the Company.
            </p>
          </section>

          {/* educational purposes */}
          <section>
            <h2 className="text-2xl font-semibold text-[#0F172B] mb-4">
              For Educational And Informational Purposes Only
            </h2>
            <p className="leading-relaxed">
              The information contained on this Website and the resources
              available for download through this Website are for educational
              and informational purposes only. The information is not intended
              as, and shall not be understood or construed as legal, financial,
              tax, medical, health, or any other professional advice.
            </p>
          </section>

          {/* accuracy */}
          <section>
            <h2 className="text-2xl font-semibold text-[#0F172B] mb-4">
              Accuracy And Personal Responsibility
            </h2>
            <p className="leading-relaxed mb-4">
              We have done our best to ensure that the information provided on
              this Website and the resources available for download are accurate
              and provide valuable information, but we cannot guarantee the
              accuracy of the information.
            </p>
            <p className="leading-relaxed">
              By using this Website, you accept personal responsibility for the
              results of your actions. You agree to take full responsibility for
              any harm or damage you suffer as a result of the use, or non-use,
              of the information available on this Website.
            </p>
          </section>

          {/* no guarantees */}
          <section>
            <h2 className="text-2xl font-semibold text-[#0F172B] mb-4">
              No Guarantees As To Results
            </h2>
            <p className="leading-relaxed">
              You agree that the Company has not made any guarantees about the
              results of taking any action, whether recommended on this Website
              or not. The Company provides educational and informational
              resources that are intended to help users of this Website succeed.
            </p>
          </section>

          {/* email communications */}
          <section>
            <h2 className="text-2xl font-semibold text-[#0F172B] mb-4">
              Email And Other Electronic Communications
            </h2>
            <p className="leading-relaxed">
              Visiting the Website or sending emails to the Company constitutes
              electronic communications. You consent to receive electronic
              communications and you agree that all agreements, notices,
              disclosures, and other communications that we provide to you
              electronically satisfy any legal requirement that such
              communications be in writing.
            </p>
          </section>

          {/* communication services */}
          <section>
            <h2 className="text-2xl font-semibold text-[#0F172B] mb-4">
              Use Of Communication Services
            </h2>
            <p className="leading-relaxed mb-4">
              The Website may contain bulletin board services, chat areas, news
              groups, forums, communities, personal web pages, calendars, blog
              comment sections and/or other message or communication facilities
              (collectively, &quot;Communication Services&quot;).
            </p>
            <p className="leading-relaxed">
              By way of example, and not as a limitation, you agree that when
              using a Communication Service, you will not: defame, abuse,
              harass, stalk, threaten or otherwise violate the legal rights of
              others; publish, post, upload, distribute or disseminate any
              inappropriate, profane, defamatory, infringing, obscene, indecent
              or unlawful content; upload files that contain viruses or any
              other similar software that may damage the operation of another&apos;s
              computer; violate any applicable laws or regulations.
            </p>
          </section>

          {/* materials provided */}
          <section>
            <h2 className="text-2xl font-semibold text-[#0F172B] mb-4">
              Materials Provided To The Website
            </h2>
            <p className="leading-relaxed">
              The Company does not claim ownership of the materials you provide
              to the Website. However, by posting, uploading, inputting,
              providing, or submitting your Submission you are granting the
              Company permission to use your Submission in connection with the
              operation of their Internet businesses.
            </p>
          </section>

          {/* links to third party */}
          <section>
            <h2 className="text-2xl font-semibold text-[#0F172B] mb-4">
              Links To Third Party Websites And Services
            </h2>
            <p className="leading-relaxed">
              The Website may contain links to other Websites (&quot;Linked
              Websites&quot;). The Linked Websites are not under the control of the
              Company and the Company is not responsible for the contents of any
              Linked Website. The Company is providing these links to you only
              as a convenience.
            </p>
          </section>

          {/* sms */}
          <section>
            <h2 className="text-2xl font-semibold text-[#0F172B] mb-4">SMS</h2>
            <p className="leading-relaxed mb-4">
              Welcome text, appointment reminders. You can cancel the SMS
              service at any time. Simply text &quot;STOP&quot; to the shortcode. Upon
              sending &quot;STOP,&quot; we will confirm your unsubscribe status via SMS.
            </p>
            <p className="leading-relaxed">
              If you experience issues with the messaging program, reply with
              the keyword HELP for more assistance, or reach out directly to{" "}
              <a
                href={getEmailLink()}
                className="text-primary hover:underline"
              >
                {BUSINESS_INFO.contact.emailLower}
              </a>
            </p>
          </section>

          {/* no refunds */}
          <section>
            <h2 className="text-2xl font-semibold text-[#0F172B] mb-4">
              No Refunds
            </h2>
            <p className="leading-relaxed">
              All sales are final, and the Company does not offer any
              money-back guarantees. You recognize and agree that you shall not
              be entitled to a refund for any purchase under any circumstances.
            </p>
          </section>

          {/* no warranties */}
          <section>
            <h2 className="text-2xl font-semibold text-[#0F172B] mb-4">
              No Warranties
            </h2>
            <p className="leading-relaxed">
              THE COMPANY MAKES NO WARRANTIES REGARDING THE PERFORMANCE OR
              OPERATION OF THIS WEBSITE. THE COMPANY FURTHER MAKES NO
              REPRESENTATIONS OR WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, AS
              TO THE INFORMATION, CONTENTS, MATERIALS, DOCUMENTS, PROGRAMS,
              PRODUCTS, BOOKS, OR SERVICES INCLUDED ON OR THROUGH THIS WEBSITE.
            </p>
          </section>

          {/* limitation of liability */}
          <section>
            <h2 className="text-2xl font-semibold text-[#0F172B] mb-4">
              Limitation of Liability
            </h2>
            <p className="leading-relaxed">
              YOU AGREE TO ABSOLVE THE COMPANY OF ANY AND ALL LIABILITY OR LOSS
              THAT YOU OR ANY PERSON OR ENTITY ASSOCIATED WITH YOU MAY SUFFER OR
              INCUR AS A RESULT OF USE OF THE INFORMATION CONTAINED ON THIS
              WEBSITE. TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO
              EVENT SHALL THE COMPANY BE LIABLE FOR ANY DIRECT, INDIRECT,
              PUNITIVE, INCIDENTAL, SPECIAL, CONSEQUENTIAL DAMAGES OR ANY
              DAMAGES WHATSOEVER.
            </p>
          </section>

          {/* dispute resolution */}
          <section>
            <h2 className="text-2xl font-semibold text-[#0F172B] mb-4">
              Dispute Resolution
            </h2>
            <p className="leading-relaxed">
              You hereby expressly waive any and all claims you may have, now or
              in the future, arising out of or relating to this Website, the
              Company, and any and all contracts you enter into with the
              Company. To the extent that you attempt to assert any such claim,
              you hereby expressly agree to present such claim only in the state
              or federal courts that are geographically nearest to Kingman, AZ.
            </p>
          </section>

          {/* indemnification */}
          <section>
            <h2 className="text-2xl font-semibold text-[#0F172B] mb-4">
              Indemnification
            </h2>
            <p className="leading-relaxed">
              You agree to indemnify, defend, and hold harmless the Company, its
              officers, directors, employees, agents and third parties, for any
              losses, costs, liabilities and expenses (including reasonable
              attorneys&apos; fees) relating to or arising out of your use of or
              inability to use the Website or services.
            </p>
          </section>

          {/* termination */}
          <section>
            <h2 className="text-2xl font-semibold text-[#0F172B] mb-4">
              Termination And Access Restriction
            </h2>
            <p className="leading-relaxed">
              The Company reserves the right, in its sole discretion, to
              terminate your access to the Website and the related services or
              any portion thereof at any time, without notice.
            </p>
          </section>

          {/* entire agreement */}
          <section>
            <h2 className="text-2xl font-semibold text-[#0F172B] mb-4">
              Entire Agreement
            </h2>
            <p className="leading-relaxed">
              Unless otherwise specified herein, this agreement, along with the
              Privacy Policy and Disclaimer, constitutes the entire agreement
              between the user and the Company with respect to the Website and
              it supersedes all prior or contemporaneous communications.
            </p>
          </section>

          {/* contact */}
          <section className="bg-gray-50 p-6 rounded-xl">
            <h2 className="text-2xl font-semibold text-[#0F172B] mb-4">
              Contact Us
            </h2>
            <p className="leading-relaxed mb-4">
              The Company welcomes your questions or comments regarding the
              Terms:
            </p>
            <ContactInfo showPhone={false} />
          </section>
        </div>
      </div>
    </div>
  );
}
