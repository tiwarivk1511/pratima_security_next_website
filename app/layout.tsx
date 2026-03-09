import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar"; 
import Footer from "./components/Footer";
import WelcomeBar from "./components/Welcomebar";
import ThemeRegistry from "./ThemeRegistry"; // Import your new registry

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: "#0f172a",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://pratimasecurservice.com/'),
  title: {
    default: "Best Security Guard Agency in Ghaziabad & Noida | Pratima Security Services",
    template: "%s | #1 Security Agency in Delhi NCR"
  },
  description: "Pratima Security Services: Top-rated security guard provider in Ghaziabad, Noida & Delhi NCR. Specialist in Industrial, Residential, and Event protection with 24/7 monitoring.",
  keywords: [
    "Security Guard Agency in Ghaziabad", "Security Guard Agency in Noida", "Security Services Ghaziabad", "Security Services Noida", "Security Services Delhi NCR", "Industrial Security Ghaziabad", 
    "Residential Security Noida", "Event Security Delhi NCR", "24/7 Security Monitoring Ghaziabad", "CCTV Installation Noida", "Access Control Systems Delhi NCR", "Fire Safety Services Ghaziabad", 
    "Emergency Response Planning Noida", "Security Consulting Delhi NCR", "Risk Assessment & Management Ghaziabad", "Personal Bodyguard Services Noida", "Mobile Patrol Services Delhi NCR", "Loss Prevention Services Ghaziabad", 
    "VIP Protection Services Noida", "Security Training & Drills Delhi NCR", "Security Services in Noida","Security Services in Ghaziabad","Security Services in Delhi","Security Services in Delhi NCR", "Security Company near Lalkuan Ghaziabad",
    "Professional Security Guards Delhi NCR", "Pratima Security Services Ghaziabad", "Pratima Security Services Noida", "Pratima Security Services Delhi NCR", "Best Security Agency in Ghaziabad", "Best Security Agency in Noida", "Best Security Agency in Delhi NCR", 
    "Top Security Company Ghaziabad", "Top Security Company Noida", "Top Security Company Delhi NCR", "Industrial Security Services Ghaziabad", "Residential Security Services Noida", "Event Security Services Delhi NCR", "24/7 Monitoring Services Ghaziabad", "Security Guard Recruitment Noida", 
    "Facility Management Services Delhi NCR", "CCTV Installation & Maintenance Ghaziabad", "Access Control Systems Noida", "Fire Safety Services Delhi NCR", "Emergency Response Planning Ghaziabad", "Security Consulting Noida", "Risk Assessment & Management Delhi NCR", "Personal Bodyguard Services Ghaziabad", 
    "Mobile Patrol Services Noida", "Loss Prevention Services Delhi NCR", "VIP Protection Services Ghaziabad", "Security Training & Drills Noida", "Remote Video Surveillance Delhi NCR", "Alarm Response Services Ghaziabad", "Security Audits & Inspections Noida", "Event Crowd Management Delhi NCR", "Executive Protection Ghaziabad", 
    "K9 Security Services Noida", "Maritime Security Services Delhi NCR", "Construction Site Security Ghaziabad", "Retail Security Services Noida", "Warehouse Security Services Delhi NCR", "Hospital Security Services Ghaziabad", "Educational Institution Security Noida", "Government Building Security Delhi NCR", "Bank Security Services Ghaziabad", 
    "Airport Security Services Noida", "Hotel Security Services Delhi NCR", "Parking Lot Security Ghaziabad", "Residential Complex Security Noida", "Industrial Facility Security Delhi NCR", "Event Venue Security Ghaziabad", "Personal Protection Services Noida", "Security Escort Services Delhi NCR", "Security System Installation Ghaziabad", "Security System Maintenance Noida", 
    "Remote Security Monitoring Delhi NCR", "Access Control Management Ghaziabad", "Fire Safety Management Noida", "Emergency Response Services Delhi NCR", "Security Consulting Services Ghaziabad", "Risk Assessment Services Noida", "Security Training Services Delhi NCR", "Security Drills & Exercises Ghaziabad", "Remote Video Surveillance Services Noida", "Alarm Response Services Delhi NCR", 
    "Security Audits & Inspections Ghaziabad", "Event Crowd Management Services Noida", "Executive Protection Services Delhi NCR", "K9 Security Services Ghaziabad", "Maritime Security Services Noida", "Construction Site Security Services Delhi NCR", "Retail Security Services Ghaziabad", "Warehouse Security Services Noida", "Hospital Security Services Delhi NCR", "Educational Institution Security Services Ghaziabad", 
    "Government Building Security Services Noida", "Bank Security Services Delhi NCR", "Airport Security Services Ghaziabad", "Hotel Security Services Noida", "Parking Lot Security Services Delhi NCR", "Residential Complex Security Services Ghaziabad", "Industrial Facility Security Services Noida", "Event Venue Security Services Delhi NCR", "Personal Protection Services Ghaziabad", "Security Escort Services Noida", "Security System Installation Services Delhi NCR", 
    "Security System Maintenance Services Ghaziabad", "Remote Security Monitoring Services Noida", "Access Control Management Services Delhi NCR", "Fire Safety Management Services Ghaziabad", "Emergency Response Services Noida", "Security Consulting Services Delhi NCR", "Facility Management Services Ghaziabad", "CCTV Installation & Maintenance Noida", "Access Control Systems Delhi NCR", "Fire Safety Services Ghaziabad", "Emergency Response Planning Noida", "Security Consulting Delhi NCR", 
    "Risk Assessment & Management Ghaziabad", "Personal Bodyguard Services Noida", "Mobile Patrol Services Delhi NCR", "Loss Prevention Services Ghaziabad", "VIP Protection Services Noida", "Security Training & Drills Delhi NCR", "Remote Video Surveillance Ghaziabad", "Alarm Response Services Noida", "Security Audits & Inspections Delhi NCR", "Event Crowd Management Ghaziabad", "Executive Protection Noida", "K9 Security Services Delhi NCR", "Maritime Security Services Ghaziabad", "Construction Site Security Noida",
     "Retail Security Services Delhi NCR", "Warehouse Security Services Ghaziabad", "Payroll staffing services", 
  ],
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: "Pratima Security Services" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://pratimasecurservice.com/",
    siteName: "Pratima Security Services",
    title: "Pratima Security Services | Trusted Protection in Ghaziabad & Noida",
    description: "24/7 Professional Security Protection for your Business and Home. Your safety is our mission.",
    images: [{ url: "https://img1.wsimg.com/isteam/ip/f997cb5d-e6b8-4e6c-b940-a6a129efa554/IMG-20210220-WA0004-removebg-preview.png", width: 1200, height: 630, alt: "Pratima Security Services Guard" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pratima Security Services",
    images: ["https://img1.wsimg.com/isteam/ip/f997cb5d-e6b8-4e6c-b940-a6a129efa554/IMG-20210220-WA0004-removebg-preview.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background text-foreground`}
      suppressHydrationWarning={true}>
        {/* Wrap everything in our Client-side ThemeRegistry */}
        <ThemeRegistry>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "SecurityService",
                "@id": "https://pratimasecurservice.com/#organization",
                "name": "Pratima Security Services",
                "url": "https://pratimasecurservice.com/",
                "logo": "https://pratimasecurservice.com/logo.png",
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+91-9818152112",
                  "contactType": "customer service",
                  "areaServed": "IN",
                  "availableLanguage": ["en", "Hindi"]
                },
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Shop No 2, Shankar Vihar, Lalkuan",
                  "addressLocality": "Ghaziabad",
                  "addressRegion": "Uttar Pradesh",
                  "postalCode": "201009",
                  "addressCountry": "IN"
                },
                
                "hasOfferCatalog": {
                  "@type": "OfferCatalog",
                  "name": "Security Services",
                  "itemListElement": [
                  
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Industrial Security" } },
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Residential Security" } },
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Event Security" } },
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "24/7 Monitoring" } },
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Security Guard Recruitment" } },
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Facility Management" } },
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "CCTV Installation & Maintenance" } },
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Access Control Systems" } },
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Fire Safety Services" } },
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Emergency Response Planning" } },
                    {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "Security Consulting" } },
                    {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "Risk Assessment & Management" } },
                    {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "Personal Bodyguard Services" } },
                    {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "Mobile Patrol Services" } },
                    {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "Loss Prevention Services" } },
                    {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "VIP Protection Services" } },
                    {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "Security Training & Drills" } },
                    {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "Remote Video Surveillance" } },
                    {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "Alarm Response Services" } },
                    {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "Security Audits & Inspections" } },
                    {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "Event Crowd Management" } },
                    {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "Executive Protection" } },
                    {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "K9 Security Services" } },
                    {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "Maritime Security Services" } },
                    {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "Construction Site Security" } },
                    {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "Retail Security Services" } },
                    {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "Warehouse Security Services" } },
                    {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "Hospital Security Services" } },
                    {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "Educational Institution Security" } },
                    {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "Government Building Security" } },
                    {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "Bank Security Services" } },
                    {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "Airport Security Services" } },
                    {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "Hotel Security Services" } },
                    {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "Parking Lot Security" } },
                    {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "Residential Complex Security" } },
                    {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "Industrial Facility Security" } },
                    {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "Event Venue Security" } },
                    {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "Personal Protection Services" } },
                    {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "Security Escort Services" } },
                    {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "Security System Installation" } },
                    {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "Security System Maintenance" } },
                    {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "Remote Security Monitoring" } },
                    {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "Access Control Management" } },
                    {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "Fire Safety Management" } },
                    {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "Emergency Response Services" } },
                    {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "Security Consulting Services" } },
                    {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "Risk Assessment Services" } },
                    {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "Security Training Services" } },
                    {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "Security Drills & Exercises" } },
                    {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "Remote Video Surveillance Services" } },
                    {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "Alarm Response Services" } },
                    {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "Security Audits & Inspections" } },
                    {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "Event Crowd Management Services" } },
                    {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "Executive Protection Services" } },
                    {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "K9 Security Services" } },
                    {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "Maritime Security Services" } },
                    {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "Construction Site Security Services" } },
                    {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "Retail Security Services" } },
                    {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "Warehouse Security Services" } },
                    {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "Hospital Security Services" } },
                    {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "Educational Institution Security Services" } },
                    {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "Government Building Security Services" } },
                    {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "Bank Security Services" } },
                    {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "Airport Security Services" } },
                    {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "Hotel Security Services" } },
                    {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "Parking Lot Security Services" } },
                    {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "Residential Complex Security Services" } },
                    {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "Industrial Facility Security Services" } },
                    {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "Event Venue Security Services" } },
                    {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "Personal Protection Services" } },
                    {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "Security Escort Services" } },
                    {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "Security System Installation Services" } },
                    {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "Security System Maintenance Services" } },
                    {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "Remote Security Monitoring Services" } },
                    {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "Access Control Management Services" } },
                    {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "Fire Safety Management Services" } },
                    {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "Emergency Response Services" } },
                    {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "Security Consulting Services" } },

                    // location based keyword stuffing for better local SEO
                    
  {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "Industrial Security Services in Ghaziabad" } },
  {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "Residential Security Services in Noida" } },
  {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "Event Security Services in Delhi NCR" } },
  {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "Facility Management Services in Delhi NCR" } },
  {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "Security Guard Recruitment in Noida" } },
  {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "Personal Bodyguard Services in Ghaziabad" } },
  {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "CCTV Installation & Maintenance in Ghaziabad" } },
  {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "Construction Site Security in Delhi NCR" } },
  {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "Warehouse Security Services in Noida" } },
  {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "Hospital Security Services in Delhi NCR" } },
  {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "Bank Security Services in Ghaziabad" } },
  {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "Fire Safety Management in Noida" } },
  {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "24/7 Monitoring Services in Delhi NCR" } },
  {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "Executive Protection in Delhi NCR" } },
  {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "Retail Security Services in Noida" } },

                    // facility management services with location-based keyword stuffing
                    
  {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "Facility Management Services in Delhi NCR" } },
  {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "Industrial Facility Management in Ghaziabad" } },
  {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "Commercial Facility Management in Noida" } },
  {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "Residential Facility Management in Noida" } },
  {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "Hospital Facility Management in Ghaziabad" } },
  {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "Educational Institution Facility Management in Delhi NCR" } },
  {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "Warehouse Facility Security & Management in Ghaziabad" } },
  {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "Healthcare Facility Maintenance in Noida" } },
  {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "Government Building Facility Management in Delhi NCR" } },
  {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "Corporate Office Facility Maintenance in Noida" } },
  {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "Retail Facility Management in Delhi NCR" } },
  {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "Hotel Facility Security & Management in Ghaziabad" } },

                      // payroll services with location-based keyword stuffing
                      {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "Payroll Management Services in Delhi NCR" } },
  {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "Employee Payroll Solutions in Noida" } },
  {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "Salary Processing Services in Ghaziabad" } },
  {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "Statutory & Tax Compliance Services in Noida" } },
  {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "Employee Benefits & PF Management in Delhi NCR" } },
  {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "Time & Attendance Tracking Solutions in Ghaziabad" } },
  {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "Outsourced Payroll Services in Noida" } },
  {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "Payroll Reporting & Analytics in Delhi NCR" } },
  {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "HR & Payroll Consulting in Ghaziabad" } },

                      // security guard job services with location-based keyword stuffing
                      
  {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "Security Guard Job Openings in Noida & Ghaziabad" } },
  {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "Professional Security Guard Training in Delhi NCR" } },
  {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "Security Guard Recruitment Services in Noida" } },
  {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "Security Guard Placement Services in Ghaziabad" } },
  {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "Urgent Security Guard Vacancies in Delhi NCR" } },
  {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "Security Guard Career Opportunities in Noida" } },
  {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "Ex-Servicemen Security Job Services in Ghaziabad" } },
  {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "Corporate Security Staffing Solutions in Delhi NCR" } },

                      //common user search queries with location-based keyword stuffing
                    
  {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "Best Security Services in Ghaziabad" } },
  {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "Top Security Services in Noida" } },
  {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "Security Services Near Me in Delhi NCR" } },
  {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "Professional Security Guard Services in Noida" } },
  {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "24/7 Emergency Security Services in Ghaziabad" } },
  {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "Affordable Facility Management in Delhi NCR" } },
  {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "Licensed & Insured Security Company in Noida" } },
  {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "Event Security Services Near Me in Ghaziabad" } },
  {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "CCTV & Access Control Services in Delhi NCR" } },
  {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "Reliable Payroll Services in Noida" } },
  {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "Security Guard Jobs Near Me in Ghaziabad" } },
  {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "Top-Rated Security Agency in Delhi NCR" } },


                      // security and housekeeping services and Noida, Ghaziabad, Delhi & Prayagraj location-based keyword variations as needed
                      {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "Security and Housekeeping Services in Delhi NCR" } },
  {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "Industrial Security and Housekeeping Services in Ghaziabad" } },
  {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "Commercial Security and Housekeeping Services in Noida" } },
  {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "Best Security and Housekeeping Services in Prayagraj" } },
  {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "Residential Society Security & Maintenance in Noida" } },
  {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "Hospital Security and Housekeeping Services in Delhi NCR" } },
  {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "Educational Institution Facility Services in Prayagraj" } },
  {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "Warehouse Security and Housekeeping in Ghaziabad" } },
  {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "Event Security and Housekeeping Services in Delhi NCR" } },
  {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "Corporate Facility Management Solutions in Noida" } }
                  ]
                },
                
                "openingHours": "Mo-Sa 09:00-19:00",
                "sameAs": [
                  "https://www.facebook.com/PSSDelhi1/",
                  "https://www.linkedin.com/company/pratima-security-services/"
                ]
              })
            }}
          />

          <WelcomeBar/>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  );
}


// import type { Metadata, Viewport } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import Navbar from "./components/Navbar"; 
// import Footer from "./components/Footer";
// import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
// import WelcomeBar from "./components/Welcomebar";

// const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
// const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

// export const viewport: Viewport = {
//   themeColor: "#0f172a",
//   width: "device-width",
//   initialScale: 1,
// };

// export const metadata: Metadata = {
//   metadataBase: new URL('https://pratimasecurservice.com/'),
//   title: {
//     default: "Best Security Guard Agency in Ghaziabad & Noida | Pratima Security Services",
//     template: "%s | #1 Security Agency in Delhi NCR"
//   },
//   description: "Pratima Security Services: Top-rated security guard provider in Ghaziabad, Noida & Delhi NCR. Specialist in Industrial, Residential, and Event protection with 24/7 monitoring.",
//   keywords: [
//     "Security Guard Agency in Ghaziabad",
//     "Security Guard Agency in Noida",
//     "Security Guard Agency in Delhi NCR",
//     "Security Services Ghaziabad",
//     "Security Services Noida",
//     "Security Services in Delhi NCR",
//     "Security Services in Ghaziabad",
//     "Security Services in Noida",
//     "Security Services in Delhi NCR",
//     "Best Security Services Noida", 
//     "Security Company near Lalkuan Ghaziabad", 
//     "Professional Security Guards Delhi NCR", 
//     "Pratima Security Services Ghaziabad",
//     "Security Guard recruitment Ghaziabad",
//     "Industrial Security Noida",
//     "Security Services for Events Delhi NCR",
//     "24/7 Security Monitoring Ghaziabad",
//     "Residential Security Services Noida",
//     "CCTV Installation & Maintenance Delhi NCR",
//     "Facility Management Services Ghaziabad",
//     "Access Control Systems Noida",
//     "Fire Safety Services Delhi NCR",
//     "Emergency Response Planning Ghaziabad",
//     "Security Consulting Noida",
//     "Risk Assessment & Management Delhi NCR",
//     "Personal Bodyguard Services Ghaziabad",
//     "Mobile Patrol Services Noida",
//     "Loss Prevention Services Delhi NCR",
//     "VIP Protection Services Ghaziabad",
//     "Security Training & Drills Noida",
//     "Remote Video Surveillance Delhi NCR",
//     "Alarm Response Services Ghaziabad",
//     "Security Audits & Inspections Noida",
//   ],
//   authors: [{ name: "Pratima Security Services" }],
  
//   openGraph: {
//     type: "website",
//     locale: "en_IN",
//     url: "https://pratimasecurservice.com/",
//     siteName: "Pratima Security Services",
//     title: "Pratima Security Services | Trusted Protection in Ghaziabad & Noida",
//     description: "24/7 Professional Security Protection for your Business and Home. Your safety is our mission.",
//     images: [
//       {
//         url: "https://img1.wsimg.com/isteam/ip/f997cb5d-e6b8-4e6c-b940-a6a129efa554/IMG-20210220-WA0004-removebg-preview.png",
//         width: 1200,
//         height: 630,
//         alt: "Pratima Security Services Guard",
//       },
//     ],
//   },

//   twitter: {
//     card: "summary_large_image",
//     title: "Pratima Security Services",
//     images: ["https://img1.wsimg.com/isteam/ip/f997cb5d-e6b8-4e6c-b940-a6a129efa554/IMG-20210220-WA0004-removebg-preview.png"],
//   },

//   robots: {
//     index: true,
//     follow: true,
//     googleBot: {
//       index: true,
//       follow: true,
//       'max-image-preview': 'large',
//     },
//   },
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en" className="scroll-smooth" suppressHydrationWarning>
//       <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background text-foreground`} suppressHydrationWarning>
//         <AppRouterCacheProvider>
//           {/* ADVANCED STRUCTURED DATA (Local Business + Services) */}
//           <script
//             type="application/ld+json"
//             dangerouslySetInnerHTML={{
//               __html: JSON.stringify({
//                 "@context": "https://schema.org",
//                 "@type": "SecurityService",
//                 "@id": "https://pratimasecurservice.com/#organization",
//                 "name": "Pratima Security Services",
//                 "url": "https://pratimasecurservice.com/",
//                 "logo": "https://pratimasecurservice.com/logo.png",
//                 "contactPoint": {
//                   "@type": "ContactPoint",
//                   "telephone": "+91-9818152112",
//                   "contactType": "customer service",
//                   "areaServed": "IN",
//                   "availableLanguage": ["en", "Hindi"]
//                 },
//                 "address": {
//                   "@type": "PostalAddress",
//                   "streetAddress": "Shop No 2, Shankar Vihar, Lalkuan",
//                   "addressLocality": "Ghaziabad",
//                   "addressRegion": "Uttar Pradesh",
//                   "postalCode": "201009",
//                   "addressCountry": "IN"
//                 },
//                 // "geo": {
//                 //   "@type": "GeoCoordinates",
//                 //   "latitude": 28.6436,
//                 //   "longitude": 77.4601
//                 // },

//                 // add the keyword-rich "hasOfferCatalog" to list the specific services offered by Pratima Security Services


                
//                 "openingHours": "Mo-Sa 09:00-19:00",
//                 "sameAs": [
//                   "https://www.facebook.com/PSSDelhi1/",
//                   "https://www.linkedin.com/company/pratima-security-services/"
//                 ]
//               })
//             }}
//           />

//           <WelcomeBar/>
//           <Navbar />
//           <main>{children}</main>
//           <Footer />
//         </AppRouterCacheProvider>
//       </body>
//     </html>
//   );
// }







// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import Navbar from "./components/Navbar"; 
// import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'; // MUI ke liye zaroori
// import WelcomeBar from "./components/Welcomebar";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata: Metadata = {
//   title: "Pratima Security Services | Professional Protection",
//   description: "Leading security guard and facility management services for a safer tomorrow.",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     // suppressHydrationWarning yahan zaroori hai extensions ke error hatane ke liye
//     <html lang="en" className="scroll-smooth" suppressHydrationWarning>
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background text-foreground`}
//         suppressHydrationWarning
//       >
//         <AppRouterCacheProvider>
//           <WelcomeBar/>
//           {/* Global Navigation */}
//           <Navbar />
          
//           <main>
//             {children}
//           </main>

//           {/* Future Footer yahan aayega */}
//         </AppRouterCacheProvider>
//       </body>
//     </html>
//   );
// }