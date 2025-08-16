import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@heroui/link";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen text-foreground bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <div className="relative flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
            <footer className="w-full bg-gray-50 border-t border-gray-200 py-8 mt-16">
              <div className="max-w-4xl mx-auto px-4 text-center">
                <div className="grid md:grid-cols-3 gap-8 mb-6">
                  <div>
                    <h3 className="font-bold text-green-800 mb-3">🍵 Mocha & Matcha Cafe</h3>
                    <p className="text-sm text-gray-600">
                      Authentic ceremonial-grade Japanese matcha in the heart of Koramangala, Bangalore.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-3">Visit Us</h4>
                    <p className="text-sm text-gray-600">
                      Koramangala, Bangalore<br />
                      Tea Ceremonies: Saturdays 4-6 PM
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-3">Connect</h4>
                    <div className="flex justify-center gap-4 text-sm">
                      <Link isExternal href={siteConfig.links.instagram} className="text-gray-600 hover:text-green-600">
                        Instagram
                      </Link>
                      <Link isExternal href={siteConfig.links.maps} className="text-gray-600 hover:text-green-600">
                        Google Maps
                      </Link>
                      <Link isExternal href={siteConfig.links.zomato} className="text-gray-600 hover:text-green-600">
                        Zomato
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="border-t border-gray-300 pt-4">
                  <p className="text-sm text-gray-500">
                    © 2024 Mocha and Matcha Cafe. Bringing authentic Japanese matcha culture to Bangalore.
                  </p>
                </div>
              </div>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
