import type { Metadata } from "next";

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
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
