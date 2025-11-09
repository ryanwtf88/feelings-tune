import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Toaster } from "sonner";
import NextTopLoader from "nextjs-toploader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Feelings Tune - অনুভূতির সুর",
  description: "Welcome to Feelings Tune - A Bengali music and cultural content channel. আসসালামু আলাইকুম। প্রিয় ভিউয়ারস, উন্নত এবং সুন্দর ভিডিও মেকিং এর জন্য স্পন্সর এবং ডোনেশন একটা ফ্যাক্ট।",
  keywords: ["Feelings Tune", "Bengali Music", "Islamic Songs", "Cultural Content", "Bangladesh"],
  authors: [{ name: "Feelings Tune" }],
  icons: {
    icon: "https://yt3.ggpht.com/9Ur-zL1RXZn9XYc7aV3ICZwiqJ8pZSuETCsZkRWmkqofkniJhndfSW4H5TH2EXt5wEzHvE7eVIY=s176-c-k-c0x00ffffff-no-rj",
    shortcut: "https://yt3.ggpht.com/9Ur-zL1RXZn9XYc7aV3ICZwiqJ8pZSuETCsZkRWmkqofkniJhndfSW4H5TH2EXt5wEzHvE7eVIY=s176-c-k-c0x00ffffff-no-rj",
    apple: "https://yt3.ggpht.com/9Ur-zL1RXZn9XYc7aV3ICZwiqJ8pZSuETCsZkRWmkqofkniJhndfSW4H5TH2EXt5wEzHvE7eVIY=s176-c-k-c0x00ffffff-no-rj",
  },
  openGraph: {
    title: "Feelings Tune - অনুভূতির সুর",
    description: "Bengali music and cultural content channel",
    type: "website",
    images: ["https://yt3.ggpht.com/9Ur-zL1RXZn9XYc7aV3ICZwiqJ8pZSuETCsZkRWmkqofkniJhndfSW4H5TH2EXt5wEzHvE7eVIY=s176-c-k-c0x00ffffff-no-rj"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextTopLoader color="#3ea896" showSpinner={false} />
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster position="top-center" richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
