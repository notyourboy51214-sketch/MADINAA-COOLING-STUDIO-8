/**
 * Madina Cooling Service Point
 * Verified business constants, review records, and service signals.
 */

export const BUSINESS_INFO = {
  name: "Madina Cooling Service Point",
  urduName: "مدینہ کولنگ سروس پوائنٹ",
  tagline: "Cooling problems need clear next steps.",
  category: "Air conditioning repair service",
  phone: "+92 345 4805813",
  phoneRaw: "+923454805813",
  phoneTel: "tel:+923454805813",
  whatsappUrl: "https://wa.me/923454805813?text=Assalam%20o%20Alaikum%2C%20I%20would%20like%20to%20enquire%20about%20Madina%20Cooling%20Service%20Point%20for%20AC%20service.",
  whatsappDirectUrl: "https://wa.me/923454805813",
  facebookUrl: "https://www.facebook.com/bluebirdgroup3/",
  address: {
    line1: "PIA Main Boulevard, Block E",
    area: "PIA Housing Scheme",
    city: "Lahore",
    postalCode: "54770",
    country: "Pakistan",
    full: "PIA Main Boulevard, Block E, PIA Housing Scheme, Lahore 54770, Pakistan",
  },
  // Real Google Maps direct profile link and navigation directions for Madina Cooling Service Point
  mapsProfileUrl: "https://www.google.com/maps/search/?api=1&query=Madina+Cooling+Service+Point,+PIA+Main+Boulevard,+Block+E,+PIA+Housing+Scheme,+Lahore+54770,+Pakistan",
  mapsDirectionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Madina+Cooling+Service+Point,+PIA+Main+Boulevard,+Block+E,+PIA+Housing+Scheme,+Lahore+54770,+Pakistan",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Madina+Cooling+Service+Point,+PIA+Main+Boulevard,+Block+E,+PIA+Housing+Scheme,+Lahore+54770,+Pakistan",
  mapsEmbedUrl: "https://maps.google.com/maps?q=Madina+Cooling+Service+Point,+PIA+Main+Boulevard,+Block+E,+PIA+Housing+Scheme,+Lahore,+Pakistan&t=&z=16&ie=UTF8&iwloc=&output=embed",
  mapsEmbedQuery: "Madina+Cooling+Service+Point+PIA+Main+Boulevard+Block+E+PIA+Housing+Scheme+Lahore+Pakistan",
  listedHours: "Closed · Opens 9 AM Monday",
  rating: 4.8,
  reviewCount: 405,
} as const;

export const REVIEW_THEMES = [
  {
    topic: "PROFESSIONAL TEAM",
    mentions: 29,
    context: "Appears as a recurring Google review theme reflecting technician conduct and cooperative service.",
  },
  {
    topic: "REASONABLE CHARGES",
    mentions: 21,
    context: "Appears as a recurring Google review theme regarding transparent service expenditure.",
  },
  {
    topic: "PROFESSIONAL TECHNICIAN",
    mentions: 11,
    context: "Appears as a recurring Google review theme on workmanship and hands-on skill.",
  },
  {
    topic: "GAS LEAK REPAIR",
    mentions: 10,
    context: "Appears as a recurring Google review theme concerning refrigerant line and leak troubleshooting.",
  },
] as const;

export const CUSTOMER_REVIEWS = [
  {
    id: "review-subhan",
    author: "Subhan Nadeem",
    source: "Google Customer Review",
    rating: 5,
    highlight: "Installation of five air conditioners: four bedrooms and a TV lounge",
    feedback:
      "Installed five air conditioners across four bedrooms and one TV lounge. Good finishing, neat and tidy external work, and the work was completed on schedule. Would recommend Madina Cooling Service Point.",
    tags: ["AC Installation", "5 Units", "Neat Finish", "PIA Scheme"],
  },
  {
    id: "review-hanzala",
    author: "Hanzala Azeem",
    source: "Google Customer Review",
    rating: 5,
    highlight: "Satisfying work, cooperative service, reasonable package",
    feedback:
      "Satisfying work and a thoroughly professional experience. Very cooperative service, reasonable package, and a trustworthy, friendly impression throughout the visit.",
    tags: ["Satisfying Work", "Reasonable Package", "Cooperative"],
  },
  {
    id: "review-hassan",
    author: "Hassan Zahoor",
    source: "Google Customer Review",
    rating: 5,
    highlight: "AC installation and annual servicing with competitive pricing",
    feedback:
      "Engaged for AC installation and annual servicing. Good work, competitive pricing, and a positive overall recommendation for household cooling needs in Lahore.",
    tags: ["Installation", "Annual Servicing", "Competitive"],
  },
] as const;

export const SERVICES_INDEX = [
  {
    number: "01",
    id: "repair",
    title: "AC REPAIR",
    subtitle: "Troubleshooting and mechanical attention",
    description:
      "When an AC stops cooling properly, develops unusual behavior, or needs technical attention, contact the team to discuss the symptoms and arrange an on-site evaluation.",
    keySignals: ["Cooling failure checks", "Electrical & capacitor response", "Drainage blockages", "Unusual operational noise"],
    cta: "Request Repair",
  },
  {
    number: "02",
    id: "gas-leak",
    title: "GAS LEAK REPAIR",
    subtitle: "Refrigerant pressure & line assessment",
    description:
      "Gas-related problems require proper physical checking. A customer describes the issue, the technician inspects piping and flare joints on-site, and any necessary repair or recharge is discussed.",
    keySignals: ["10 Google review mentions", "Pressure gauge reading", "Copper flare inspection", "Refrigerant line checks"],
    cta: "Ask About Gas-Leak Service",
  },
  {
    number: "03",
    id: "servicing",
    title: "AC SERVICING",
    subtitle: "Periodic cleaning & system care",
    description:
      "Regular servicing can be a key part of maintaining an air conditioning system in Lahore's dusty climate. Ask the team about an appropriate seasonal or annual servicing routine for your unit.",
    keySignals: ["Annual servicing mentioned in reviews", "Condenser coil cleaning", "Indoor filter washing", "Blower fan inspection"],
    cta: "Enquire About Servicing",
  },
  {
    number: "04",
    id: "installation",
    title: "AC INSTALLATION",
    subtitle: "Mounting, copper line runs & outdoor placement",
    description:
      "Proper positioning, secure wall mounting, and clean external pipework ensure neat finishing. Multiple reviews highlight multi-unit installations with tidy outdoor finishing.",
    keySignals: ["Residential single & multi-unit", "Neat copper pipe wrapping", "Level indoor bracket mounting", "Firm outdoor bracket support"],
    cta: "Plan Installation",
  },
] as const;

export interface GalleryItem {
  id: string;
  category: "EXTERIOR" | "INSIDE" | "VIDEOS" | "BY OWNER";
  title: string;
  caption: string;
  imagePath: string;
  tag: string;
  isVideoMock?: boolean;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    category: "EXTERIOR",
    title: "Outdoor Condenser Wall Mount",
    caption: "Clean bracket mounting and wrapped copper pipework on residential exterior in Lahore.",
    imagePath: "/src/assets/images/hero_ac_exterior_service_1790530432916.jpg",
    tag: "Exterior Unit",
  },
  {
    id: "gal-2",
    category: "INSIDE",
    title: "Split Indoor Unit Finishing",
    caption: "Precision level installation on interior plaster wall with concealed drainage run.",
    imagePath: "/src/assets/images/ac_indoor_clean_mount_1790530451274.jpg",
    tag: "Indoor Setup",
  },
  {
    id: "gal-3",
    category: "BY OWNER",
    title: "Copper Line & Pressure Valve Inspection",
    caption: "High-pressure service port and insulated refrigerant lines undergoing technical check.",
    imagePath: "/src/assets/images/ac_copper_refrigerant_pipes_1790530464263.jpg",
    tag: "Piping & Valves",
  },
  {
    id: "gal-4",
    category: "BY OWNER",
    title: "Service Point Workshop Desk",
    caption: "PIA Boulevard service desk and technical workshop tools for compressor and part handling.",
    imagePath: "/src/assets/images/madina_service_point_shop_1790530479228.jpg",
    tag: "Service Point",
  },
  {
    id: "gal-5",
    category: "INSIDE",
    title: "Evaporator Fin & Coil Maintenance",
    caption: "Careful fin alignment and debris clearance using specialized fin comb tools.",
    imagePath: "/src/assets/images/ac_coil_fin_cleaning_1790530494987.jpg",
    tag: "Maintenance",
  },
  {
    id: "gal-6",
    category: "VIDEOS",
    title: "Multi-Unit Installation Review (Subhan Nadeem)",
    caption: "Documented customer experience covering 4 bedrooms and 1 TV lounge across residential layout.",
    imagePath: "/src/assets/images/hero_ac_exterior_service_1790530432916.jpg",
    tag: "Customer Video Case",
    isVideoMock: true,
  },
];
