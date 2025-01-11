import type { Metadata } from "next";
import "../globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/Header";
import { SanityLive } from "@/sanity/lib/live";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
 
export const metadata: Metadata = {
  title: "Bazario.CO",
  description: "Bazario.CO is a platform for buying and selling used products. We make it easy to find what you need and sell what you don't.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider dynamic>
    <html lang="en">
      <body>
        <main>
          <Header />
        {children}
        <Footer />
        </main>
        <Toaster />
        <SanityLive />
      </body>
    </html>
    </ClerkProvider>
  );
}
