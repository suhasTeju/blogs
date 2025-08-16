import React from "react";
import { Link } from "@heroui/link";
import { Card, CardBody } from "@heroui/card";
import { Divider } from "@heroui/divider";
import { button as buttonStyles } from "@heroui/theme";
import { Metadata } from "next";
import Image from "next/image";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "How to Make Perfect Matcha at Home: Complete Guide from Bangalore's Top Matcha Experts",
  description: "Master the art of preparing ceremonial-grade matcha at home with step-by-step instructions from Mocha and Matcha Cafe's Kyoto-trained experts. Learn proper whisking technique, water temperature, and avoid common mistakes.",
  keywords: "how to make matcha at home, matcha preparation guide, ceremonial matcha whisking technique, matcha tools chasen chawan, perfect matcha recipe, matcha mistakes to avoid, matcha preparation Bangalore, buy matcha Koramangala",
  openGraph: {
    title: "How to Make Perfect Matcha at Home: Complete Guide from Bangalore's Top Matcha Experts",
    description: "Master ceremonial-grade matcha preparation at home with expert techniques from Kyoto-trained masters. Step-by-step guide with common mistakes to avoid.",
    url: "https://blog.mochaandmatcha.in/how-to-make-perfect-matcha-at-home-bangalore-guide",
    siteName: "Mocha and Matcha Cafe Blog",
    type: "article",
  },
  alternates: {
    canonical: "https://blog.mochaandmatcha.in/how-to-make-perfect-matcha-at-home-bangalore-guide",
  },
};

export default function PerfectMatchaGuide() {
  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "How to Make Perfect Matcha at Home: Complete Guide from Bangalore's Top Matcha Experts",
            "description": "Comprehensive guide to preparing perfect ceremonial-grade matcha at home, including tools, techniques, common mistakes, and expert tips from Kyoto-trained masters.",
            "author": {
              "@type": "Organization",
              "name": "Mocha and Matcha Cafe",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Koramangala",
                "addressLocality": "Bangalore",
                "addressRegion": "Karnataka",
                "addressCountry": "India"
              }
            },
            "publisher": {
              "@type": "Organization",
              "name": "Mocha and Matcha Cafe"
            },
            "datePublished": "2024-08-16",
            "dateModified": "2024-08-16",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://blog.mochaandmatcha.in/how-to-make-perfect-matcha-at-home-bangalore-guide"
            }
          })
        }}
      />

      {/* Hero Section */}
      <section className="relative w-full h-[75vh] overflow-hidden">
        <Image
          src="/images/ceremonial-matcha-closeup.svg"
          alt="Perfect ceremonial-grade matcha preparation showing proper whisking technique and tools"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/80 flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-5xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              How to Make <span className="text-green-300">Perfect Matcha</span> at Home
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed">
              Master the Art with Guidance from Bangalore's Kyoto-Trained Experts
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                className={buttonStyles({
                  color: "success",
                  radius: "full",
                  variant: "shadow",
                  size: "lg",
                })}
                href="#step-by-step"
              >
                Start Learning
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
                Buy Premium Matcha
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Author Info */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="flex items-center gap-4 text-sm text-gray-600 border-b border-gray-200 pb-6">
          <div className="flex items-center gap-2">
            <span className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">
              M&M
            </span>
            <div>
              <p className="font-semibold text-gray-900">Mocha and Matcha Cafe</p>
              <p>Master Tea Preparers • Koramangala Experts</p>
            </div>
          </div>
          <div className="ml-auto text-right">
            <p>Published: August 16, 2024</p>
            <p>18 min read • Step-by-Step Guide</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 pb-12">
        
        {/* Introduction */}
        <section id="step-by-step" className="mb-16">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              From Koramangala to Your Kitchen: Authentic Matcha Preparation
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
              <div>
                <p className="text-lg mb-6 leading-relaxed">
                  After years of serving ceremonial-grade matcha at our Koramangala location, we've noticed that many customers want to recreate the perfect cup at home. The challenge? Most online guides teach you how to make "matcha-flavored drinks," not authentic ceremonial-grade matcha that honors the 400-year-old Japanese tradition.
                </p>
                
                <p className="text-lg mb-6 leading-relaxed">
                  This comprehensive guide comes from our Kyoto-trained tea masters who've spent years perfecting their technique. We'll teach you not just the steps, but the <em>why</em> behind each movement, the common mistakes that ruin your matcha, and the subtle techniques that transform good matcha into transcendent matcha.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-green-800">🏆 What You'll Master:</h3>
                <ul className="space-y-2 text-green-700">
                  <li>✅ Perfect water temperature and timing</li>
                  <li>✅ Proper whisking technique for ideal foam</li>
                  <li>✅ Choosing and caring for authentic tools</li>
                  <li>✅ Identifying quality ceremonial-grade matcha</li>
                  <li>✅ Common mistakes that ruin flavor</li>
                  <li>✅ Variations: usucha, koicha, and lattes</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-100 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <p className="text-blue-800">
                <strong>💡 Expert Insight:</strong> The difference between good and exceptional matcha lies in understanding the science behind each step. Temperature, timing, and technique aren't arbitrary—they're based on centuries of refinement to maximize flavor, nutrition, and the meditative quality of preparation.
              </p>
            </div>
          </div>
        </section>

        <Divider className="my-12" />

        {/* Essential Tools */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">
            Essential Tools: Your Matcha Preparation Kit
          </h2>
          
          <div className="bg-gray-50 rounded-2xl p-8 mb-10">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">🛠️ The Four Sacred Tools (四つ道具)</h3>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card className="border-2 border-green-200 bg-green-50 shadow-lg">
                <CardBody className="p-8">
                  <h4 className="text-2xl font-bold mb-4 text-green-800 flex items-center">
                    <span className="mr-3 text-3xl">🍵</span> Chawan (茶碗)
                  </h4>
                  <div className="space-y-4">
                    <div className="bg-white rounded-lg p-4">
                      <h5 className="font-bold text-green-700 mb-2">Traditional Tea Bowl</h5>
                      <p className="text-sm text-green-600 mb-2">Wide, shallow bowl perfect for whisking matcha. The irregular shape and rough texture help create better foam.</p>
                      <p className="text-xs text-green-500"><strong>Bangalore Source:</strong> Available at our Koramangala store, ₹2,500-8,000</p>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <h5 className="font-bold text-green-700 mb-2">Budget Alternative:</h5>
                      <p className="text-sm text-green-600">Wide ceramic or pottery bowl (300-500ml capacity) with slightly rough interior texture</p>
                    </div>
                  </div>
                </CardBody>
              </Card>

              <Card className="border-2 border-blue-200 bg-blue-50 shadow-lg">
                <CardBody className="p-8">
                  <h4 className="text-2xl font-bold mb-4 text-blue-800 flex items-center">
                    <span className="mr-3 text-3xl">🎋</span> Chasen (茶筅)
                  </h4>
                  <div className="space-y-4">
                    <div className="bg-white rounded-lg p-4">
                      <h5 className="font-bold text-blue-700 mb-2">Bamboo Whisk</h5>
                      <p className="text-sm text-blue-600 mb-2">Hand-carved with 80-120 fine tines. The secret to perfect, smooth matcha foam that's impossible to achieve with regular whisks.</p>
                      <p className="text-xs text-blue-500"><strong>Bangalore Source:</strong> Premium chasen at our store, ₹3,200-12,000</p>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <h5 className="font-bold text-blue-700 mb-2">Care Instructions:</h5>
                      <p className="text-sm text-blue-600">Rinse with warm water only, never use soap. Store in chasen holder to maintain shape.</p>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 border-purple-200 bg-purple-50 shadow-lg">
                <CardBody className="p-8">
                  <h4 className="text-2xl font-bold mb-4 text-purple-800 flex items-center">
                    <span className="mr-3 text-3xl">🥄</span> Chashaku (茶杓)
                  </h4>
                  <div className="space-y-4">
                    <div className="bg-white rounded-lg p-4">
                      <h5 className="font-bold text-purple-700 mb-2">Bamboo Tea Scoop</h5>
                      <p className="text-sm text-purple-600 mb-2">Precisely measures 1 gram of matcha per scoop. The curved shape prevents matcha from sticking and ensures accurate portioning.</p>
                      <p className="text-xs text-purple-500"><strong>Alternative:</strong> ½ teaspoon measuring spoon (less traditional but functional)</p>
                    </div>
                  </div>
                </CardBody>
              </Card>

              <Card className="border-2 border-orange-200 bg-orange-50 shadow-lg">
                <CardBody className="p-8">
                  <h4 className="text-2xl font-bold mb-4 text-orange-800 flex items-center">
                    <span className="mr-3 text-3xl">🫖</span> Water & Heat Source
                  </h4>
                  <div className="space-y-4">
                    <div className="bg-white rounded-lg p-4">
                      <h5 className="font-bold text-orange-700 mb-2">Temperature Control</h5>
                      <p className="text-sm text-orange-600 mb-2">Digital thermometer or temperature-controlled kettle. Bangalore's hard water should be filtered for best results.</p>
                      <p className="text-xs text-orange-500"><strong>Ideal Setup:</strong> Electric kettle with temperature control + water filter</p>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </div>
          </div>

          <div className="bg-yellow-50 rounded-xl p-6 border-l-4 border-yellow-400">
            <h4 className="font-bold text-yellow-800 mb-3">🛒 Where to Buy in Bangalore</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-bold text-yellow-700 mb-2">Mocha and Matcha Cafe (Recommended):</h5>
                <ul className="text-sm text-yellow-700 space-y-1">
                  <li>• Authentic Japanese tools directly imported</li>
                  <li>• Expert guidance on selection and care</li>
                  <li>• Lifetime maintenance support</li>
                  <li>• Quality guarantee with replacement policy</li>
                </ul>
              </div>
              <div>
                <h5 className="font-bold text-yellow-700 mb-2">Alternative Sources:</h5>
                <ul className="text-sm text-yellow-700 space-y-1">
                  <li>• Online retailers (check authenticity carefully)</li>
                  <li>• Japanese cultural centers in Bangalore</li>
                  <li>• High-end kitchenware stores (limited selection)</li>
                  <li>• Import directly from Japan (higher cost)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <Divider className="my-12" />

        {/* Step-by-Step Process */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">
            The Perfect Cup: Step-by-Step Mastery
          </h2>
          
          <div className="space-y-10">
            <Card className="border-l-4 border-blue-500 bg-blue-50 shadow-lg">
              <CardBody className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-blue-800 flex items-center">
                  <span className="mr-3 text-3xl">1️⃣</span> Preparation & Mise en Place
                </h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold text-blue-700 mb-4">Essential Prep Steps:</h4>
                    <ul className="space-y-3 text-blue-600">
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <div>
                          <strong>Sift your matcha:</strong> Use a fine mesh strainer to remove clumps. This is crucial for smooth texture.
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <div>
                          <strong>Warm your chawan:</strong> Rinse with hot water to bring bowl to optimal temperature.
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <div>
                          <strong>Prepare your chasen:</strong> Briefly soak tines in warm water to soften and prevent breakage.
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <div>
                          <strong>Measure precisely:</strong> 2 grams (2 chashaku scoops) for usucha, 4 grams for koicha.
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <div className="bg-white rounded-lg p-6 shadow-md">
                      <h4 className="font-bold text-blue-700 mb-3">🌡️ Temperature Science</h4>
                      <div className="space-y-3 text-sm text-blue-600">
                        <div className="flex justify-between items-center">
                          <span>Water Temperature:</span>
                          <span className="font-bold">70-80°C (158-176°F)</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Bowl Temperature:</span>
                          <span className="font-bold">40-45°C (104-113°F)</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Room Temperature:</span>
                          <span className="font-bold">22-25°C (ideal)</span>
                        </div>
                      </div>
                      <p className="text-xs text-blue-500 mt-3">
                        <strong>Bangalore Note:</strong> AC rooms may require slightly warmer water
                      </p>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>

            <Card className="border-l-4 border-green-500 bg-green-50 shadow-lg">
              <CardBody className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-green-800 flex items-center">
                  <span className="mr-3 text-3xl">2️⃣</span> The Critical First Addition
                </h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold text-green-700 mb-4">Water Addition Technique:</h4>
                    <ul className="space-y-3 text-green-600">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2 mt-1">•</span>
                        <div>
                          <strong>Amount:</strong> Start with just 30ml (2 tablespoons) of 75°C water
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2 mt-1">•</span>
                        <div>
                          <strong>Pour method:</strong> Pour slowly at bowl's edge, not directly onto matcha powder
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2 mt-1">•</span>
                        <div>
                          <strong>Initial mix:</strong> Gently fold matcha with chasen tip to create smooth paste
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2 mt-1">•</span>
                        <div>
                          <strong>No lumps:</strong> Work out any clumps before adding remaining water
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <div className="bg-white rounded-lg p-6 shadow-md">
                      <h4 className="font-bold text-green-700 mb-3">⚠️ Common Mistakes</h4>
                      <div className="space-y-3 text-sm">
                        <div className="bg-red-100 rounded p-3">
                          <p className="text-red-700"><strong>❌ Adding all water at once:</strong> Creates lumps and uneven mixing</p>
                        </div>
                        <div className="bg-red-100 rounded p-3">
                          <p className="text-red-700"><strong>❌ Water too hot:</strong> Makes matcha bitter and destroys amino acids</p>
                        </div>
                        <div className="bg-red-100 rounded p-3">
                          <p className="text-red-700"><strong>❌ Stirring instead of whisking:</strong> Won't create proper foam texture</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>

            <Card className="border-l-4 border-purple-500 bg-purple-50 shadow-lg">
              <CardBody className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-purple-800 flex items-center">
                  <span className="mr-3 text-3xl">3️⃣</span> Master the Whisking Technique
                </h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold text-purple-700 mb-4">The Sacred Movements:</h4>
                    <div className="space-y-4">
                      <div className="bg-white rounded-lg p-4">
                        <h5 className="font-bold text-purple-600 mb-2">Phase 1: Creating the Base (0-10 seconds)</h5>
                        <ul className="text-sm text-purple-600 space-y-1">
                          <li>• Hold chasen vertically, wrist loose</li>
                          <li>• Quick "W" or "M" motion across bowl bottom</li>
                          <li>• 2-3 rapid strokes per second</li>
                          <li>• Focus on breaking up remaining clumps</li>
                        </ul>
                      </div>
                      <div className="bg-white rounded-lg p-4">
                        <h5 className="font-bold text-purple-600 mb-2">Phase 2: Building Foam (10-20 seconds)</h5>
                        <ul className="text-sm text-purple-600 space-y-1">
                          <li>• Faster whisking, lighter pressure</li>
                          <li>• Bring chasen closer to surface</li>
                          <li>• Create figure-8 or continuous W pattern</li>
                          <li>• Watch for foam formation</li>
                        </ul>
                      </div>
                      <div className="bg-white rounded-lg p-4">
                        <h5 className="font-bold text-purple-600 mb-2">Phase 3: Perfecting Texture (20-30 seconds)</h5>
                        <ul className="text-sm text-purple-600 space-y-1">
                          <li>• Very light, fast movements at surface</li>
                          <li>• Create fine, uniform bubbles</li>
                          <li>• Finish with gentle circular motion</li>
                          <li>• Lift chasen straight up to center foam</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="bg-white rounded-lg p-6 shadow-md">
                      <h4 className="font-bold text-purple-700 mb-3">🎯 Perfect Foam Indicators</h4>
                      <div className="space-y-3 text-sm text-purple-600">
                        <div className="border-l-4 border-green-500 pl-3">
                          <p><strong>✅ Ideal Texture:</strong> Fine, uniform bubbles like silk</p>
                        </div>
                        <div className="border-l-4 border-green-500 pl-3">
                          <p><strong>✅ Color:</strong> Vibrant jade green throughout</p>
                        </div>
                        <div className="border-l-4 border-green-500 pl-3">
                          <p><strong>✅ Consistency:</strong> Smooth, no visible lumps</p>
                        </div>
                        <div className="border-l-4 border-green-500 pl-3">
                          <p><strong>✅ Foam Layer:</strong> 3-5mm thick, stable foam</p>
                        </div>
                      </div>
                      
                      <h5 className="font-bold text-purple-700 mt-4 mb-2">👨‍🍳 Expert Tip:</h5>
                      <p className="text-xs text-purple-600 bg-purple-100 rounded p-2">
                        The sound changes as you whisk correctly. You'll hear a rhythmic "tap-tap-tap" against the bowl when your technique is right.
                      </p>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>

            <Card className="border-l-4 border-orange-500 bg-orange-50 shadow-lg">
              <CardBody className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-orange-800 flex items-center">
                  <span className="mr-3 text-3xl">4️⃣</span> Final Water Addition & Completion
                </h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold text-orange-700 mb-4">Completing Your Matcha:</h4>
                    <ul className="space-y-3 text-orange-600">
                      <li className="flex items-start">
                        <span className="text-orange-500 mr-2 mt-1">•</span>
                        <div>
                          <strong>Add remaining water:</strong> 30-40ml more, bringing total to 60-70ml
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-500 mr-2 mt-1">•</span>
                        <div>
                          <strong>Gentle integration:</strong> 5-10 light whisks to incorporate
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-500 mr-2 mt-1">•</span>
                        <div>
                          <strong>Final foam:</strong> Few surface strokes to resettle foam
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-500 mr-2 mt-1">•</span>
                        <div>
                          <strong>Immediate service:</strong> Drink within 2-3 minutes for best flavor
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <div className="bg-white rounded-lg p-6 shadow-md">
                      <h4 className="font-bold text-orange-700 mb-3">🍵 Serving Wisdom</h4>
                      <div className="space-y-3 text-sm text-orange-600">
                        <p><strong>Traditional way:</strong> Drink in 3 sips, rotate bowl between hands</p>
                        <p><strong>Temperature:</strong> Should be comfortably warm, not hot</p>
                        <p><strong>Pairing:</strong> Traditional wagashi or simple, not-too-sweet treats</p>
                        <p><strong>Timing:</strong> Best on empty stomach or 2 hours after meals</p>
                      </div>
                      
                      <div className="mt-4 bg-orange-100 rounded p-3">
                        <p className="text-orange-800 text-xs">
                          <strong>Bangalore Adaptation:</strong> In our hot climate, slightly cooler serving temperature (60-65°C) is often preferred
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        </section>

        <Divider className="my-12" />

        {/* Common Mistakes Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">
            The 7 Deadly Sins of Matcha Preparation
          </h2>
          
          <div className="bg-red-50 rounded-2xl p-8 mb-10">
            <h3 className="text-2xl font-bold mb-6 text-red-800">❌ What NOT to Do (And How to Fix It)</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <Card className="bg-white border-l-4 border-red-500">
                  <CardBody className="p-6">
                    <h4 className="font-bold text-red-700 mb-3">1. Using Boiling Water</h4>
                    <p className="text-red-600 text-sm mb-3">
                      <strong>Problem:</strong> Destroys amino acids, creates bitter taste, ruins nutritional benefits
                    </p>
                    <p className="text-green-700 text-sm">
                      <strong>Solution:</strong> Water temperature 70-80°C maximum. Let boiling water cool for 10-15 minutes
                    </p>
                  </CardBody>
                </Card>

                <Card className="bg-white border-l-4 border-red-500">
                  <CardBody className="p-6">
                    <h4 className="font-bold text-red-700 mb-3">2. Skipping the Sifting Step</h4>
                    <p className="text-red-600 text-sm mb-3">
                      <strong>Problem:</strong> Lumpy, gritty texture that no amount of whisking can fix
                    </p>
                    <p className="text-green-700 text-sm">
                      <strong>Solution:</strong> Always sift matcha through fine mesh strainer before use
                    </p>
                  </CardBody>
                </Card>

                <Card className="bg-white border-l-4 border-red-500">
                  <CardBody className="p-6">
                    <h4 className="font-bold text-red-700 mb-3">3. Wrong Whisking Pattern</h4>
                    <p className="text-red-600 text-sm mb-3">
                      <strong>Problem:</strong> Circular motions don't create proper foam, may break chasen
                    </p>
                    <p className="text-green-700 text-sm">
                      <strong>Solution:</strong> Use "W" or "M" pattern, never circular stirring
                    </p>
                  </CardBody>
                </Card>

                <Card className="bg-white border-l-4 border-red-500">
                  <CardBody className="p-6">
                    <h4 className="font-bold text-red-700 mb-3">4. Poor Quality Matcha</h4>
                    <p className="text-red-600 text-sm mb-3">
                      <strong>Problem:</strong> Culinary grade tastes bitter, lacks nutrients, wrong color
                    </p>
                    <p className="text-green-700 text-sm">
                      <strong>Solution:</strong> Invest in ceremonial-grade matcha from reputable sources like our Koramangala store
                    </p>
                  </CardBody>
                </Card>
              </div>

              <div className="space-y-6">
                <Card className="bg-white border-l-4 border-red-500">
                  <CardBody className="p-6">
                    <h4 className="font-bold text-red-700 mb-3">5. Incorrect Proportions</h4>
                    <p className="text-red-600 text-sm mb-3">
                      <strong>Problem:</strong> Too much matcha = bitter, too little = weak and watery
                    </p>
                    <p className="text-green-700 text-sm">
                      <strong>Solution:</strong> Stick to 2g matcha : 60-70ml water ratio for usucha
                    </p>
                  </CardBody>
                </Card>

                <Card className="bg-white border-l-4 border-red-500">
                  <CardBody className="p-6">
                    <h4 className="font-bold text-red-700 mb-3">6. Using Metal Whisk</h4>
                    <p className="text-red-600 text-sm mb-3">
                      <strong>Problem:</strong> Can't achieve proper foam texture, may affect taste
                    </p>
                    <p className="text-green-700 text-sm">
                      <strong>Solution:</strong> Invest in authentic bamboo chasen or use proper technique with alternative
                    </p>
                  </CardBody>
                </Card>

                <Card className="bg-white border-l-4 border-red-500">
                  <CardBody className="p-6">
                    <h4 className="font-bold text-red-700 mb-3">7. Letting Matcha Sit</h4>
                    <p className="text-red-600 text-sm mb-3">
                      <strong>Problem:</strong> Foam disappears, flavor deteriorates, color changes
                    </p>
                    <p className="text-green-700 text-sm">
                      <strong>Solution:</strong> Serve and drink immediately after preparation
                    </p>
                  </CardBody>
                </Card>

                <Card className="bg-white border-l-4 border-yellow-500">
                  <CardBody className="p-6">
                    <h4 className="font-bold text-yellow-700 mb-3">💡 Pro Tip</h4>
                    <p className="text-yellow-600 text-sm">
                      Practice with less expensive matcha first. Once you master the technique, upgrade to premium ceremonial grade for the full experience.
                    </p>
                  </CardBody>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <Divider className="my-12" />

        {/* Variations and Recipes */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">
            Beyond Basic: Matcha Variations for Every Occasion
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-10">
            <Card className="border-2 border-green-300 bg-green-50 shadow-lg">
              <CardBody className="p-8">
                <h3 className="text-xl font-bold mb-4 text-green-800">🍵 Usucha (薄茶)</h3>
                <h4 className="font-bold text-green-700 mb-3">Thin Tea - Daily Drinking</h4>
                <div className="space-y-3 text-green-600 text-sm">
                  <p><strong>Ratio:</strong> 2g matcha : 70ml water</p>
                  <p><strong>Texture:</strong> Light foam, smooth consistency</p>
                  <p><strong>Flavor:</strong> Balanced umami and sweetness</p>
                  <p><strong>Best for:</strong> Morning routine, meditation</p>
                  <p><strong>Bangalore timing:</strong> Early morning or evening</p>
                </div>
              </CardBody>
            </Card>

            <Card className="border-2 border-blue-300 bg-blue-50 shadow-lg">
              <CardBody className="p-8">
                <h3 className="text-xl font-bold mb-4 text-blue-800">🍵 Koicha (濃茶)</h3>
                <h4 className="font-bold text-blue-700 mb-3">Thick Tea - Ceremonial</h4>
                <div className="space-y-3 text-blue-600 text-sm">
                  <p><strong>Ratio:</strong> 4g matcha : 40ml water</p>
                  <p><strong>Texture:</strong> Thick, no foam, almost paste-like</p>
                  <p><strong>Flavor:</strong> Intense umami, very concentrated</p>
                  <p><strong>Best for:</strong> Special occasions, contemplation</p>
                  <p><strong>Preparation:</strong> Requires highest grade matcha</p>
                </div>
              </CardBody>
            </Card>

            <Card className="border-2 border-purple-300 bg-purple-50 shadow-lg">
              <CardBody className="p-8">
                <h3 className="text-xl font-bold mb-4 text-purple-800">☕ Matcha Latte</h3>
                <h4 className="font-bold text-purple-700 mb-3">Modern Adaptation</h4>
                <div className="space-y-3 text-purple-600 text-sm">
                  <p><strong>Base:</strong> Perfect usucha preparation</p>
                  <p><strong>Milk:</strong> 120ml steamed milk (not boiling)</p>
                  <p><strong>Sweetener:</strong> Optional, high-quality honey</p>
                  <p><strong>Best for:</strong> Afternoon treat, sharing with friends</p>
                  <p><strong>Bangalore style:</strong> Serve over ice in hot weather</p>
                </div>
              </CardBody>
            </Card>
          </div>

          <Card className="bg-yellow-50 border-2 border-yellow-300">
            <CardBody className="p-8">
              <h3 className="text-xl font-bold mb-6 text-yellow-800">🌟 Advanced Technique: Seasonal Adaptations</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-yellow-700 mb-3">Bangalore Summer (March-May):</h4>
                  <ul className="space-y-2 text-yellow-600 text-sm">
                    <li>• Slightly cooler water temperature (65-70°C)</li>
                    <li>• Serve immediately in pre-chilled chawan</li>
                    <li>• Consider cold whisked matcha over ice</li>
                    <li>• Increase hydration with extra water after drinking</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-yellow-700 mb-3">Monsoon Season (June-September):</h4>
                  <ul className="space-y-2 text-yellow-600 text-sm">
                    <li>• Store matcha with extra desiccant packets</li>
                    <li>• Warm chawan thoroughly before use</li>
                    <li>• Perfect time for traditional hot preparation</li>
                    <li>• Pair with warming spices like ginger (sparingly)</li>
                  </ul>
                </div>
              </div>
            </CardBody>
          </Card>
        </section>

        <Divider className="my-12" />

        {/* Sourcing Quality Matcha */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">
            Sourcing Premium Matcha in Bangalore
          </h2>
          
          <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-0 shadow-2xl">
            <CardBody className="p-10">
              <h3 className="text-2xl font-bold mb-8 text-green-800 text-center">
                🛒 Where to Buy Authentic Ceremonial-Grade Matcha
              </h3>
              
              <div className="grid md:grid-cols-2 gap-10 mb-8">
                <div>
                  <h4 className="text-xl font-bold mb-4 text-green-700">🏆 Mocha and Matcha Cafe (Recommended)</h4>
                  <div className="space-y-4">
                    <div className="bg-white rounded-lg p-4 shadow-md">
                      <h5 className="font-bold text-green-600 mb-2">Why Choose Us:</h5>
                      <ul className="text-sm text-green-700 space-y-1">
                        <li>✓ Direct import from Uji, Japan's premier region</li>
                        <li>✓ Temperature-controlled storage preserves freshness</li>
                        <li>✓ Expert guidance on selection and preparation</li>
                        <li>✓ Authentic tools and accessories available</li>
                        <li>✓ Free preparation lessons with purchase</li>
                      </ul>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-md">
                      <h5 className="font-bold text-green-600 mb-2">Product Range:</h5>
                      <ul className="text-sm text-green-700 space-y-1">
                        <li>• Premium ceremonial grade: ₹1,200-3,800/40g</li>
                        <li>• Competition grade: ₹4,500-8,500/40g</li>
                        <li>• Daily drinking grade: ₹880-1,400/40g</li>
                        <li>• Complete starter kits: ₹6,500-15,000</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-xl font-bold mb-4 text-blue-700">🔍 Quality Identification Guide</h4>
                  <div className="space-y-4">
                    <div className="bg-white rounded-lg p-4 shadow-md">
                      <h5 className="font-bold text-blue-600 mb-2">Visual Indicators:</h5>
                      <ul className="text-sm text-blue-700 space-y-1">
                        <li>• <strong>Color:</strong> Vibrant jade green, never yellowish</li>
                        <li>• <strong>Texture:</strong> Ultra-fine powder, like silk</li>
                        <li>• <strong>Aroma:</strong> Fresh, grassy, oceanic notes</li>
                        <li>• <strong>Packaging:</strong> Sealed, dated, stored cool</li>
                      </ul>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-md">
                      <h5 className="font-bold text-blue-600 mb-2">Taste Test:</h5>
                      <ul className="text-sm text-blue-700 space-y-1">
                        <li>• <strong>First impression:</strong> Natural sweetness</li>
                        <li>• <strong>Umami:</strong> Savory, oceanic depth</li>
                        <li>• <strong>Aftertaste:</strong> Clean, lingering sweetness</li>
                        <li>• <strong>No bitterness:</strong> When prepared correctly</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 rounded-xl p-6 border-l-4 border-red-400">
                <h4 className="font-bold text-red-800 mb-3">⚠️ Avoid These Red Flags</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-bold text-red-700 mb-2">Poor Quality Indicators:</h5>
                    <ul className="text-sm text-red-600 space-y-1">
                      <li>• Suspiciously low prices (under ₹500/40g)</li>
                      <li>• Dull or yellowish color</li>
                      <li>• Strong bitter taste even when prepared correctly</li>
                      <li>• Coarse or gritty texture</li>
                      <li>• No origin information provided</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-bold text-red-700 mb-2">Storage Red Flags:</h5>
                    <ul className="text-sm text-red-600 space-y-1">
                      <li>• Stored at room temperature in shops</li>
                      <li>• Clear packaging exposing to light</li>
                      <li>• No harvest or expiry dates</li>
                      <li>• Mixed with other tea products</li>
                      <li>• Opened packages without proper sealing</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </section>

        {/* Conclusion */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-10 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Master the Art, Honor the Tradition
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Perfect matcha preparation is a journey, not a destination. Each cup is an opportunity to practice mindfulness, patience, and appreciation for centuries of refined wisdom.
            </p>
            
            <div className="flex gap-4 justify-center flex-wrap mb-8">
              <Link
                isExternal
                className={buttonStyles({
                  color: "default",
                  radius: "full",
                  variant: "solid",
                  size: "lg",
                })}
                href={siteConfig.links.cafe}
              >
                🛒 Buy Premium Matcha & Tools
              </Link>
              <Link
                isExternal
                className={buttonStyles({
                  color: "success",
                  radius: "full",
                  variant: "bordered",
                  size: "lg",
                })}
                href={siteConfig.links.maps}
              >
                📍 Visit Our Koramangala Store
              </Link>
            </div>
            
            <p className="text-green-100 text-lg">
              Need personalized guidance? Visit us in Koramangala for hands-on training with our Kyoto-trained masters.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}