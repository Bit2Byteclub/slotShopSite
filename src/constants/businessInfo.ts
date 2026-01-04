// business information
export const BUSINESS_INFO = {
  name: "Used Slot Shop",
  tagline: "Quality Pre-Owned Slot Machines",

  contact: {
    phone: "(928)-418-0549",
    // raw for telephone links
    phoneRaw: "928-418-0549",
    email: "Usedslotshop@yahoo.com",
    emailLower: "usedslotshop@yahoo.com",
  },

  address: {
    street: "8898 Frontera Ranch Road",
    city: "Hackberry",
    state: "Arizona",
    zip: "86411",
    country: "United States",
    // formatted versions
    get full() {
      return `${this.street}, ${this.city}, ${this.state} ${this.zip}`;
    },
    get cityState() {
      return `${this.city}, ${this.state} ${this.zip}`;
    },
    // for Google Maps embed
    get mapsQuery() {
      return `${this.street},${this.city},AZ+${this.zip}`;
    },
  },

  hours: [
    { days: "Monday - Friday", hours: "9am - 5pm", isOpen: true },
    { days: "Saturday", hours: "Closed", isOpen: false },
    { days: "Sunday", hours: "Closed", isOpen: false },
  ],

  social: {
    facebook: "",
    instagram: "",
    twitter: "",
  },

  established: "XXXX",

  features: [
    "Local team you can trust",
    "30-year track record",
    "Quick Response",
  ],
} as const;

// helper functions
export const getPhoneLink = () => `tel:${BUSINESS_INFO.contact.phoneRaw}`;
export const getEmailLink = () => `mailto:${BUSINESS_INFO.contact.emailLower}`;
export const getMapsEmbedUrl = () =>
  `https://www.google.com/maps?q=${BUSINESS_INFO.address.mapsQuery}&output=embed&z=15`;
export const getMapsLink = () =>
  `https://www.google.com/maps?q=${BUSINESS_INFO.address.mapsQuery}`;
