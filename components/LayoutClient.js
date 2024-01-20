"use client";

import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "@/components/theme-provider"

// All the client wrappers are here (they can't be in server components)
// 1. SessionProvider: Allow the useSession from next-auth (find out if user is auth or not)
// 3. Toaster: Show Success/Error messages anywhere from the app with toast()
const ClientLayout = ({ children }) => {
  return (
    <>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <SessionProvider>
          {/* Content inside app/page.js files  */}
          {children}

          {/* Show Success/Error messages anywhere from the app with toast() */}
          <Toaster
            toastOptions={{
              duration: 3000,
            }}
          />

        </SessionProvider>
      </ThemeProvider>
    </>
  );
};

export default ClientLayout;
