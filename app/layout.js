import { DM_Sans as FontSans } from "next/font/google";
import { getSEOTags } from "@/libs/seo";
import ClientLayout from "@/components/LayoutClient";
import config from "@/config";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster"

// import { cn } from "@/lib/utils"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans"
});

export const viewport = {
  // Will use color in the URL bar of supported browsers
  themeColor: config.colors.main,
  width: "device-width",
  initialScale: 1,
};

// This adds default SEO tags to all pages in our app.
// You can override them in each page passing params to getSOTags() function.
export const metadata = getSEOTags();

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={fontSans.className}>
      <body>
        {/* ClientLayout contains all the client wrappers (toast messages, tooltips, etc.) */}
        <Toaster />
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
