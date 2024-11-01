import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "@/components/providers/Provider";
import { cn } from "@/lib/utils";
import Navbar from "@/components/header/Navbar";
import Footer from "@/components/Footer";
import { ClerkProvider } from "@clerk/nextjs";



// Import Google Font
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sigma-Sale",
  description: "Experience the sale at your convinience",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
    <html lang="en" suppressHydrationWarning={true}>
      <body className={cn("bg-background mt-20 w-full h-full text-primary", inter.className)}>
        <Provider>
          <div className="w-full h-full flex flex-col min-h-screen">
            <Navbar />                     
            <main className="flex-1">{children}</main>            
            <Footer />
          </div>
        </Provider>
      </body>
    </html>
    </ClerkProvider>
  );
}
