import type { Metadata } from "next";
import { Geist, Geist_Mono, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Footer } from "@/components/ui/footer";
import { WhatsappButton } from "@/components/ui/whatsapp-button";

const ibmPlexSans = IBM_Plex_Sans({subsets:['latin'],variable:'--font-sans'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://queryholic.in"),
  title: "Queryholic | Engineering The Future",
  description: "Engineering The Future Through Software, Electronics & Intelligence. We build intelligent digital and engineering solutions.",
  keywords: ["Software Development", "Electronics", "Artificial Intelligence", "IoT", "Engineering", "Queryholic", "Tech Agency"],
  authors: [{ name: "Queryholic" }],
  creator: "Queryholic",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://queryholic.in",
    title: "Queryholic | Engineering The Future",
    description: "Engineering The Future Through Software, Electronics & Intelligence. We build intelligent digital and engineering solutions.",
    siteName: "Queryholic",
    images: [
      {
        url: "https://res.cloudinary.com/drqsvwrjt/image/upload/v1769694504/queryholic_profile-removebg-preview_azlcg4.png",
        width: 1200,
        height: 630,
        alt: "Queryholic - Engineering The Future",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Queryholic | Engineering The Future",
    description: "Engineering The Future Through Software, Electronics & Intelligence.",
    images: ["https://res.cloudinary.com/drqsvwrjt/image/upload/v1769694504/queryholic_profile-removebg-preview_azlcg4.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "https://res.cloudinary.com/drqsvwrjt/image/upload/v1769694504/queryholic_profile-removebg-preview_azlcg4.png",
    apple: "https://res.cloudinary.com/drqsvwrjt/image/upload/v1769694504/queryholic_profile-removebg-preview_azlcg4.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("dark h-full", "antialiased", geistSans.variable, geistMono.variable, "font-sans", ibmPlexSans.variable)}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden">
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsappButton />
      </body>
    </html>
  );
}
