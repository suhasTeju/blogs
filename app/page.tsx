import React from "react";
import { Link } from "@heroui/link";
import { Card, CardBody } from "@heroui/card";
import { button as buttonStyles } from "@heroui/theme";
import { Metadata } from "next";
import Image from "next/image";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "The Ultimate Guide to Ceremonial-Grade Matcha in Bangalore | Mocha and Matcha Cafe",
  description: "Discover authentic ceremonial-grade Japanese matcha in Bangalore. Learn about quality, health benefits, and where to find the best matcha cafe in Koramangala.",
  keywords: "best matcha in Bangalore, ceremonial grade matcha Koramangala, authentic Japanese matcha India, matcha cafe Bangalore",
};

export default function BlogHomePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-[80vh] overflow-hidden">
        <Image
          src="/images/ceremonial-matcha-closeup.svg"
          alt="Close-up of authentic ceremonial grade matcha powder in traditional Japanese chawan bowl"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/60 flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              The Ultimate Guide to <span className="text-green-300">Ceremonial-Grade Matcha</span> in Bangalore
            </h1>
            <p className="text-xl mb-8">
              Why Quality Matters: From Japan to Koramangala
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                className={buttonStyles({
                  color: "success",
                  radius: "full",
                  variant: "shadow",
                  size: "lg",
                })}
                href="#content"
              >
                Read the Guide
              </Link>
              <Link
                isExternal
                className={buttonStyles({ 
                  variant: "bordered", 
                  radius: "full",
                  size: "lg",
                  color: "success"
                })}
                href={siteConfig.links.cafe}
              >
                Visit Our Cafe
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles Grid */}
      <div id="content" className="max-w-6xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Explore Our Matcha Guides
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the world of ceremonial-grade matcha through our comprehensive guides, 
            from health benefits to traditional Japanese tea ceremony
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Health Benefits Card */}
          <Link href="/matcha-health-benefits-vs-coffee-bangalore" className="group">
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden h-full">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/images/matcha-vs-coffee.svg"
                  alt="Health comparison between matcha and coffee"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold mb-2">Matcha vs Coffee</h3>
                  <p className="text-sm opacity-90">7 Science-Backed Health Benefits</p>
                </div>
              </div>
              <CardBody className="p-6">
                <p className="text-gray-600 mb-4">
                  Discover why health-conscious professionals in Bangalore are switching from coffee to ceremonial-grade matcha.
                </p>
                <div className="flex items-center text-green-600 font-semibold">
                  Read More →
                </div>
              </CardBody>
            </Card>
          </Link>

          {/* Tea Ceremony Card */}
          <Link href="/japanese-tea-ceremony-bangalore-authentic-experience" className="group">
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden h-full">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/images/japanese-tea-ceremony.svg"
                  alt="Traditional Japanese tea ceremony setup"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold mb-2">Tea Ceremony</h3>
                  <p className="text-sm opacity-90">Authentic Japanese Tradition</p>
                </div>
              </div>
              <CardBody className="p-6">
                <p className="text-gray-600 mb-4">
                  Experience the 400-year-old Japanese tea ceremony tradition in the heart of Bangalore.
                </p>
                <div className="flex items-center text-green-600 font-semibold">
                  Read More →
                </div>
              </CardBody>
            </Card>
          </Link>

          {/* Preparation Guide Card */}
          <Link href="/how-to-make-perfect-matcha-at-home-bangalore-guide" className="group">
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden h-full">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/images/ceremonial-matcha-closeup.svg"
                  alt="Perfect matcha preparation guide"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold mb-2">Perfect Matcha</h3>
                  <p className="text-sm opacity-90">Home Preparation Guide</p>
                </div>
              </div>
              <CardBody className="p-6">
                <p className="text-gray-600 mb-4">
                  Master the art of preparing ceremonial-grade matcha at home with traditional techniques.
                </p>
                <div className="flex items-center text-green-600 font-semibold">
                  Read More →
                </div>
              </CardBody>
            </Card>
          </Link>

          {/* Latte Art Card */}
          <Link href="/matcha-latte-art-recipes-bangalore-cafe-guide" className="group">
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden h-full">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/images/matcha-grades-comparison.svg"
                  alt="Matcha latte art and creative recipes"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold mb-2">Latte Art</h3>
                  <p className="text-sm opacity-90">Creative Recipes & Techniques</p>
                </div>
              </div>
              <CardBody className="p-6">
                <p className="text-gray-600 mb-4">
                  Learn professional latte art techniques and discover creative matcha recipes.
                </p>
                <div className="flex items-center text-green-600 font-semibold">
                  Read More →
                </div>
              </CardBody>
            </Card>
          </Link>
        </div>

        {/* About Section */}
        <div className="text-center bg-gradient-to-r from-green-50 to-blue-50 rounded-3xl p-10">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">About Mocha and Matcha Cafe</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
            Located in the heart of Koramangala, we bring authentic Japanese matcha culture to Bangalore. 
            Our Kyoto-trained tea masters serve only ceremonial-grade matcha, ensuring you experience 
            the true essence of this ancient tradition.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              isExternal
              className={buttonStyles({
                color: "success",
                radius: "full",
                variant: "shadow",
                size: "lg",
              })}
              href={siteConfig.links.maps}
            >
              🗺️ Find Us in Koramangala
            </Link>
            <Link
              isExternal
              className={buttonStyles({ 
                variant: "bordered", 
                radius: "full",
                size: "lg",
                color: "success"
              })}
              href={siteConfig.links.cafe}
            >
              🌐 Visit Our Website
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}