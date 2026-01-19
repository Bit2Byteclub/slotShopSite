import type { ReactNode } from "react";

interface PolicyLayoutProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
  maxWidth?: "4xl" | "5xl" | "6xl" | "7xl";
}

// reusable layout wrapper for policy and informational pages
export default function PolicyLayout({ 
  title, 
  subtitle, 
  children, 
  maxWidth = "4xl" 
}: PolicyLayoutProps) {
  const widthClass = `max-w-${maxWidth}`;
  
  return (
    <div className="px-8 md:px-12 lg:px-16 py-12">
      <div className={`w-full ${widthClass} mx-auto`}>
        <h1 className="text-4xl font-bold text-[#0F172B] mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-[#45556C] mb-8">{subtitle}</p>
        )}
        {children}
      </div>
    </div>
  );
}
