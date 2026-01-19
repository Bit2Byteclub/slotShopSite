import type { ReactNode } from "react";
import { BUSINESS_INFO, getPhoneLink, getEmailLink } from "@/constants/businessInfo";

interface PolicySectionProps {
  title?: string;
  children: ReactNode;
  className?: string;
}

// reusable section wrapper for policy pages
export function PolicySection({ title, children, className = "" }: PolicySectionProps) {
  return (
    <section className={className}>
      {title && (
        <h2 className="text-2xl font-semibold text-[#0F172B] mb-4">
          {title}
        </h2>
      )}
      {children}
    </section>
  );
}

interface InfoBoxProps {
  title: string;
  children: ReactNode;
  variant?: "default" | "warning";
}

// reusable info box for highlighting important policy information
export function InfoBox({ title, children, variant = "default" }: InfoBoxProps) {
  const bgColor = variant === "warning" ? "bg-red-50 border-red-400" : "bg-gray-50";
  const borderColor = variant === "warning" ? "border-l-4" : "";
  
  return (
    <div className={`${bgColor} p-4 rounded-lg ${borderColor}`}>
      <p className="font-medium text-[#0F172B] mb-2">{title}</p>
      <p className="leading-relaxed text-[#45556C]">{children}</p>
    </div>
  );
}

interface ContactInfoProps {
  showPhone?: boolean;
  showEmail?: boolean;
  showHours?: boolean;
}

// reusable contact info section for policy pages
export function ContactInfo({ showPhone = true, showEmail = true, showHours = true }: ContactInfoProps) {
  return (
    <div className="space-y-2">
      {showPhone && (
        <p>
          <strong className="text-[#0F172B]">Phone:</strong>{" "}
          <a
            href={getPhoneLink()}
            className="text-primary hover:underline"
          >
            {BUSINESS_INFO.contact.phone}
          </a>
        </p>
      )}
      {showEmail && (
        <p>
          <strong className="text-[#0F172B]">Email:</strong>{" "}
          <a
            href={getEmailLink()}
            className="text-primary hover:underline"
          >
            {BUSINESS_INFO.contact.emailLower}
          </a>
        </p>
      )}
      {showHours && (
        <>
          <p>
            <strong className="text-[#0F172B]">Business Hours:</strong>
          </p>
          {BUSINESS_INFO.hours.map((schedule, index) => (
            <p key={index}>{schedule.days}: {schedule.hours}</p>
          ))}
        </>
      )}
    </div>
  );
}
