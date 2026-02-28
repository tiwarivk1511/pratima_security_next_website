import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar"; 
import Footer from "./components/Footer";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import WelcomeBar from "./components/Welcomebar";

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
    "Security Guard Agency in Ghaziabad", 
    "Best Security Services Noida", 
    "Security Company near Lalkuan Ghaziabad", 
    "Professional Security Guards Delhi NCR", 
    "Pratima Security Services Ghaziabad",
    "Security Guard recruitment Ghaziabad",
    "Industrial Security Noida"
  ],
  authors: [{ name: "Pratima Security Services" }],
  
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://pratimasecurservice.com/",
    siteName: "Pratima Security Services",
    title: "Pratima Security Services | Trusted Protection in Ghaziabad & Noida",
    description: "24/7 Professional Security Protection for your Business and Home. Your safety is our mission.",
    images: [
      {
        url: "https://img1.wsimg.com/isteam/ip/f997cb5d-e6b8-4e6c-b940-a6a129efa554/IMG-20210220-WA0004-removebg-preview.png",
        width: 1200,
        height: 630,
        alt: "Pratima Security Services Guard",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Pratima Security Services",
    images: ["https://img1.wsimg.com/isteam/ip/f997cb5d-e6b8-4e6c-b940-a6a129efa554/IMG-20210220-WA0004-removebg-preview.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background text-foreground`} suppressHydrationWarning>
        <AppRouterCacheProvider>
          {/* ADVANCED STRUCTURED DATA (Local Business + Services) */}
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
                // "geo": {
                //   "@type": "GeoCoordinates",
                //   "latitude": 28.6436,
                //   "longitude": 77.4601
                // },
                "hasOfferCatalog": {
                  "@type": "OfferCatalog",
                  "name": "Security Services",
                  "itemListElement": [
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Industrial Security" } },
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Residential Security" } },
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Event Security" } }
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
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}

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