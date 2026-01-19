"use client";
import { useState } from "react";
import Image from "next/image";
import { MdPhone, MdEmail, MdLocationOn, MdAccessTime, MdLightbulb } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { validateContactForm, type FormErrors } from "@/utils/validation";
import { BUSINESS_INFO, getMapsEmbedUrl } from "@/constants/businessInfo";

// reusable form field component
interface FormFieldProps {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  placeholder: string;
  required?: boolean;
  error?: string;
  multiline?: boolean;
  rows?: number;
}

// form field component
function FormField({ label, name, type = "text", value, onChange, placeholder, required = false, error, multiline = false, rows = 5 }: FormFieldProps) {
  // input styles
  const inputClasses = `w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary bg-[#F3F3F5] ${
    error ? 'border-red-500' : 'border-gray-300'
  } ${multiline ? 'resize-none' : ''}`;

  return (
    <div>
      <label className="block text-sm font-medium text-[#0F172B] mb-2">
        {label} {required && '*'}
      </label>
      {multiline ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          rows={rows}
          className={inputClasses}
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className={inputClasses}
        />
      )}
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}

// reusable contact info item
interface ContactItemProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  bgColor?: string;
}

// contact info item component
function ContactItem({ icon, label, value, bgColor = "bg-primary" }: ContactItemProps) {
  return (
    <div className="flex items-center gap-3">
      <div className={`w-10 h-10 ${bgColor} rounded-lg flex items-center justify-center`}>
        {icon}
      </div>
      <div>
        <p className="text-sm text-[#45556C]">{label}</p>
        <p className="font-medium text-[#0F172B]">{value}</p>
      </div>
    </div>
  );
}

// main contact us page component
export default function ContactUsPage() {
  // form state
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // form submission handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const validationErrors = validateContactForm(formData);
    setErrors(validationErrors);
    
    if (Object.keys(validationErrors).length === 0) {
      // valid submission case
      setSubmitStatus('success');
      // TODO: Send to backend API
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          name: "",
          businessName: "",
          email: "",
          phone: "",
          message: "",
        });
        setSubmitStatus('idle');
      }, 3000);
    } else {
      setSubmitStatus('error');
    }
  };

  // form field change handler
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="px-8 md:px-12 lg:px-16">
      <div className="w-full max-w-7xl mx-auto py-12">
        {/* hero section */}
        <div className="relative mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* left side (text content) */}
            <div className="space-y-6">
              <div className="inline-block">
                <h1 className="text-5xl font-medium text-[#0F172B] pb-4 border-b-[3px] border-[#FEAA95]">
                  Let&apos;s Talk About Your Venue
                </h1>
              </div>
              <p className="text-[#45556C] text-lg">
                Send us a message regarding your needs and we will get back to
                you as soon as we can!
              </p>

              {/* contact info */}
              <div className="space-y-4 pt-4">
                <ContactItem 
                  icon={<MdPhone className="text-xl text-[#0F172B]" />}
                  label="Call us anytime"
                  value={BUSINESS_INFO.contact.phone}
                />
                <ContactItem 
                  icon={<MdEmail className="text-xl text-[#0F172B]" />}
                  label="Email us anytime"
                  value={BUSINESS_INFO.contact.email}
                />
              </div>

              {/* review card */}
              <div className="inline-block bg-white rounded-2xl shadow-lg p-4 mt-6">
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-sm text-[#45556C]">
                  Serving our community since {BUSINESS_INFO.established}
                </p>
              </div>
            </div>

            {/* right side (image) */}
            <div className="relative h-[400px] rounded-3xl overflow-hidden">
              <Image
                src="/placeholder.jpeg"
                alt="Storefront"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                onError={(e) => {
                  e.currentTarget.src = "/homeSlotPicture.png";
                }}
              />
            </div>
          </div>
        </div>

        {/* form and info section */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* contact form */}
          <div className="bg-white rounded-3xl shadow-lg p-8">
            <h2 className="text-2xl font-medium text-[#0F172B] mb-2">
              Send Us a Message
            </h2>
            <p className="text-[#45556C] mb-6">
              Fill out the form below and we&apos;ll get back to you within 24 hours.
              We promise - a real person will respond!
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <FormField
                  label="Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Smith"
                  required
                  error={errors.name}
                />
                <FormField
                  label="Business Name"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  placeholder="Your Bar or Venue"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <FormField
                  label="Email Address"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  error={errors.email}
                />
                <FormField
                  label="Phone Number"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(555) 123-4567"
                  required
                  error={errors.phone}
                />
              </div>

              <FormField
                label="How Can We Help?"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your venue, what type of machines you're interested in, or any questions you have..."
                required
                multiline
                rows={5}
                error={errors.message}
              />

              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg mb-4">
                  Thank you! Your message has been sent successfully. We&apos;ll get back to you soon.
                </div>
              )}

              {submitStatus === 'error' && Object.keys(errors).length > 0 && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-4">
                  Please correct the errors above before submitting.
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-secondary hover:bg-secondary/90 text-white font-medium py-3 px-6 rounded-xl transition-colors duration-200"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* right side (info cards) */}
          <div className="space-y-6">
            {/* showroom card */}
            <div className="bg-white rounded-3xl shadow-lg p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shrink-0">
                  <MdLocationOn className="text-2xl text-[#0F172B]" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-[#0F172B] mb-2">
                    Visit Our Showroom
                  </h3>
                  <p className="text-[#4A5565]">
                    {BUSINESS_INFO.address.street}
                    <br />
                    {BUSINESS_INFO.address.cityState}
                    <br />
                    {BUSINESS_INFO.address.country}
                  </p>
                </div>
              </div>
              
              {/* google maps embed */}
              <div className="w-full h-64 rounded-xl mt-4 overflow-hidden shadow-md">
                <iframe
                  src={getMapsEmbedUrl()}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Used Slot Shop Location"
                />
              </div>
            </div>

            {/* business hours card */}
            <div className="bg-white rounded-3xl shadow-lg p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center shrink-0">
                  <MdAccessTime className="text-2xl text-[#0F172B]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-medium text-[#0F172B] mb-4">
                    Business Hours
                  </h3>
                  <div className="space-y-2">
                    {BUSINESS_INFO.hours.map((schedule, index) => (
                      <div key={index} className="flex justify-between">
                        <span className="text-[#4A5565]">{schedule.days}</span>
                        <span className="font-medium text-[#4A5565]">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-[#4A5565] mt-4 flex items-center gap-2">
                    <MdLightbulb className="text-lg" /> Need help after hours? Leave us a message and we&apos;ll
                    respond first thing in the morning!
                  </p>
                </div>
              </div>
            </div>

            {/* why customers love us card */}
            <div className="shadow-lg p-8 rounded-2xl bg-linear-to-br from-[#B8E5DF]/30 to-[#FEAA95]/30">
              <h3 className="text-xl font-medium text-[#0F172B] mb-4">
                Why Our Customers Love Us
              </h3>
              <div className="space-y-3">
                {BUSINESS_INFO.features.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <FaCheckCircle className="text-primary" />
                    <span className="text-[#45556C]">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
