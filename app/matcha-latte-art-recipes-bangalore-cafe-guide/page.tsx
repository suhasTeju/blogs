import React from "react";
import { Link } from "@heroui/link";
import { Card, CardBody } from "@heroui/card";
import { Divider } from "@heroui/divider";
import { button as buttonStyles } from "@heroui/theme";
import { Metadata } from "next";
import Image from "next/image";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Matcha Latte Art & Creative Recipes: From Traditional to Instagram-Worthy | Bangalore Cafe Guide",
  description: "Master matcha latte art and discover creative matcha recipes from Mocha and Matcha Cafe's expert baristas. Traditional techniques meet modern creativity in Koramangala's top matcha destination.",
  keywords: "matcha latte art Bangalore, matcha recipes creative, matcha latte techniques, instagram matcha art, matcha drinks recipes, matcha cafe Koramangala, matcha barista skills, matcha dessert recipes Bangalore",
  openGraph: {
    title: "Matcha Latte Art & Creative Recipes: From Traditional to Instagram-Worthy",
    description: "Learn professional matcha latte art techniques and creative recipes from Bangalore's premier matcha cafe. Traditional meets modern creativity.",
    url: "https://blog.mochaandmatcha.in/matcha-latte-art-recipes-bangalore-cafe-guide",
    siteName: "Mocha and Matcha Cafe Blog",
    type: "article",
  },
  alternates: {
    canonical: "https://blog.mochaandmatcha.in/matcha-latte-art-recipes-bangalore-cafe-guide",
  },
};

export default function MatchaLatteArtGuide() {
  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Matcha Latte Art & Creative Recipes: From Traditional to Instagram-Worthy",
            "description": "Complete guide to matcha latte art techniques and creative matcha recipes, from traditional preparation to modern cafe-style presentations.",
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
              "@id": "https://blog.mochaandmatcha.in/matcha-latte-art-recipes-bangalore-cafe-guide"
            }
          })
        }}
      />

      {/* Hero Section */}
      <section className="relative w-full h-[75vh] overflow-hidden">
        <Image
          src="/images/matcha-vs-coffee.svg"
          alt="Beautiful matcha latte art and creative matcha drinks presentation from professional cafe"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/80 flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-5xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Matcha Latte Art & <span className="text-green-300">Creative Recipes</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed">
              From Traditional Techniques to Instagram-Worthy Creations
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                className={buttonStyles({
                  color: "success",
                  radius: "full",
                  variant: "shadow",
                  size: "lg",
                })}
                href="#latte-art-guide"
              >
                Learn Latte Art
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
                Try Our Creations
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
              <p>Master Baristas • Koramangala Creative Team</p>
            </div>
          </div>
          <div className="ml-auto text-right">
            <p>Published: August 16, 2024</p>
            <p>20 min read • Creative Recipes & Techniques</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 pb-12">
        
        {/* Introduction */}
        <section id="latte-art-guide" className="mb-16">
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-8 mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Where Art Meets Ancient Tradition: The Matcha Latte Revolution
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
              <div>
                <p className="text-lg mb-6 leading-relaxed">
                  At <strong>Mocha and Matcha Cafe in Koramangala</strong>, we've discovered something magical: when you combine the 400-year-old Japanese tea ceremony tradition with modern barista artistry, you create drinks that are both Instagram-worthy and soul-nourishing. Our matcha latte art has become legendary among Bangalore's coffee culture enthusiasts, but the real secret isn't just technique—it's respect for the ingredient.
                </p>
                
                <p className="text-lg mb-6 leading-relaxed">
                  This comprehensive guide shares the professional techniques our award-winning baristas use daily, along with creative recipes that have made us the go-to destination for matcha lovers in Bangalore. From traditional presentations to modern Instagram sensations, you'll learn to create matcha drinks that are as beautiful as they are delicious.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-green-800">🎨 What You'll Create:</h3>
                <ul className="space-y-2 text-green-700">
                  <li>✅ Professional matcha latte art patterns</li>
                  <li>✅ Instagram-worthy layered matcha drinks</li>
                  <li>✅ Creative seasonal matcha recipes</li>
                  <li>✅ Traditional and modern presentation styles</li>
                  <li>✅ Matcha-based dessert drinks</li>
                  <li>✅ Cold and hot matcha variations</li>
                </ul>
              </div>
            </div>

            <div className="bg-emerald-100 border-l-4 border-emerald-500 p-6 rounded-r-lg">
              <p className="text-emerald-800">
                <strong>🌟 Barista's Philosophy:</strong> "Great matcha latte art starts with perfect matcha preparation. You can't create beautiful art with poor-quality ingredients or improper technique. Master the fundamentals first, then let creativity flourish." - Chef Kenji, Head Barista
              </p>
            </div>
          </div>
        </section>

        <Divider className="my-12" />

        {/* Fundamentals of Matcha Latte Art */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">
            Fundamentals of Matcha Latte Art: Building the Foundation
          </h2>
          
          <div className="bg-gray-50 rounded-2xl p-8 mb-10">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">🎯 The Three Pillars of Perfect Matcha Latte Art</h3>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <Card className="border-2 border-green-200 bg-green-50 shadow-lg">
                <CardBody className="p-8">
                  <h4 className="text-xl font-bold mb-4 text-green-800 flex items-center">
                    <span className="mr-3 text-2xl">🍵</span> Perfect Matcha Base
                  </h4>
                  <div className="space-y-4">
                    <div className="bg-white rounded-lg p-4">
                      <h5 className="font-bold text-green-700 mb-2">Quality Requirements:</h5>
                      <ul className="text-sm text-green-600 space-y-1">
                        <li>• Ceremonial-grade matcha only</li>
                        <li>• Vibrant jade-green color</li>
                        <li>• Smooth, lump-free consistency</li>
                        <li>• Proper whisking for ideal texture</li>
                      </ul>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <h5 className="font-bold text-green-700 mb-2">Preparation Notes:</h5>
                      <ul className="text-sm text-green-600 space-y-1">
                        <li>• Double-strength for latte base</li>
                        <li>• Temperature: 65-70°C for mixing</li>
                        <li>• Consistency: Slightly thicker than usucha</li>
                      </ul>
                    </div>
                  </div>
                </CardBody>
              </Card>

              <Card className="border-2 border-blue-200 bg-blue-50 shadow-lg">
                <CardBody className="p-8">
                  <h4 className="text-xl font-bold mb-4 text-blue-800 flex items-center">
                    <span className="mr-3 text-2xl">🥛</span> Milk Mastery
                  </h4>
                  <div className="space-y-4">
                    <div className="bg-white rounded-lg p-4">
                      <h5 className="font-bold text-blue-700 mb-2">Milk Selection:</h5>
                      <ul className="text-sm text-blue-600 space-y-1">
                        <li>• Whole milk: Best for latte art</li>
                        <li>• Oat milk: Excellent alternative</li>
                        <li>• Almond milk: Good for lighter patterns</li>
                        <li>• Coconut milk: Unique flavor profile</li>
                      </ul>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <h5 className="font-bold text-blue-700 mb-2">Steaming Technique:</h5>
                      <ul className="text-sm text-blue-600 space-y-1">
                        <li>• Temperature: 60-65°C (cooler than coffee)</li>
                        <li>• Microfoam: Fine, velvety texture</li>
                        <li>• No large bubbles or harsh steaming</li>
                      </ul>
                    </div>
                  </div>
                </CardBody>
              </Card>

              <Card className="border-2 border-purple-200 bg-purple-50 shadow-lg">
                <CardBody className="p-8">
                  <h4 className="text-xl font-bold mb-4 text-purple-800 flex items-center">
                    <span className="mr-3 text-2xl">🎨</span> Artistic Technique
                  </h4>
                  <div className="space-y-4">
                    <div className="bg-white rounded-lg p-4">
                      <h5 className="font-bold text-purple-700 mb-2">Pouring Fundamentals:</h5>
                      <ul className="text-sm text-purple-600 space-y-1">
                        <li>• Steady hand control</li>
                        <li>• Proper pitcher position</li>
                        <li>• Flow rate consistency</li>
                        <li>• Height and angle awareness</li>
                      </ul>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <h5 className="font-bold text-purple-700 mb-2">Pattern Creation:</h5>
                      <ul className="text-sm text-purple-600 space-y-1">
                        <li>• Start with basic shapes</li>
                        <li>• Practice consistent movements</li>
                        <li>• Understand contrast principles</li>
                      </ul>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </div>
          </div>

          <div className="bg-yellow-50 rounded-xl p-6 border-l-4 border-yellow-400">
            <h4 className="font-bold text-yellow-800 mb-3">⚠️ Common Beginner Mistakes</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-bold text-yellow-700 mb-2">Matcha Preparation Errors:</h5>
                <ul className="text-sm text-yellow-700 space-y-1">
                  <li>• Using low-grade matcha (creates muddy color)</li>
                  <li>• Over-diluting the base (weak flavor and color)</li>
                  <li>• Leaving lumps (creates uneven texture)</li>
                  <li>• Wrong temperature (affects color and taste)</li>
                </ul>
              </div>
              <div>
                <h5 className="font-bold text-yellow-700 mb-2">Milk & Pouring Issues:</h5>
                <ul className="text-sm text-yellow-700 space-y-1">
                  <li>• Overheating milk (destroys microfoam)</li>
                  <li>• Pouring too fast (destroys pattern)</li>
                  <li>• Wrong pitcher height (poor control)</li>
                  <li>• Inconsistent flow (irregular patterns)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <Divider className="my-12" />

        {/* Step-by-Step Latte Art Techniques */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">
            Professional Latte Art Techniques: From Basic to Advanced
          </h2>
          
          <div className="space-y-10">
            <Card className="border-l-4 border-green-500 bg-green-50 shadow-lg">
              <CardBody className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-green-800 flex items-center">
                  <span className="mr-3 text-3xl">🌸</span> The Basic Rosetta (Beginner Level)
                </h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold text-green-700 mb-4">Step-by-Step Process:</h4>
                    <ol className="space-y-3 text-green-600">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-3 mt-1 font-bold">1.</span>
                        <div>
                          <strong>Prepare matcha base:</strong> Create concentrated matcha (3g matcha + 40ml water) in wide cup
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-3 mt-1 font-bold">2.</span>
                        <div>
                          <strong>Steam milk perfectly:</strong> Create smooth microfoam, no large bubbles
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-3 mt-1 font-bold">3.</span>
                        <div>
                          <strong>Initial pour:</strong> Start high, thin stream to create base layer
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-3 mt-1 font-bold">4.</span>
                        <div>
                          <strong>Create pattern:</strong> Lower pitcher, increase flow, wiggle side to side
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-3 mt-1 font-bold">5.</span>
                        <div>
                          <strong>Finish:</strong> Quick forward stroke through pattern to create "stem"
                        </div>
                      </li>
                    </ol>
                  </div>
                  <div>
                    <div className="bg-white rounded-lg p-6 shadow-md">
                      <h4 className="font-bold text-green-700 mb-3">💡 Pro Tips for Success</h4>
                      <div className="space-y-3 text-sm text-green-600">
                        <div className="bg-green-100 rounded p-3">
                          <p><strong>Contrast:</strong> Matcha's vibrant green creates beautiful contrast with white milk foam</p>
                        </div>
                        <div className="bg-green-100 rounded p-3">
                          <p><strong>Speed:</strong> Practice consistent wiggle rhythm - not too fast, not too slow</p>
                        </div>
                        <div className="bg-green-100 rounded p-3">
                          <p><strong>Position:</strong> Keep pitcher spout close to surface for defined patterns</p>
                        </div>
                        <div className="bg-green-100 rounded p-3">
                          <p><strong>Practice:</strong> Master this before moving to complex patterns</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>

            <Card className="border-l-4 border-blue-500 bg-blue-50 shadow-lg">
              <CardBody className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-blue-800 flex items-center">
                  <span className="mr-3 text-3xl">💚</span> The Perfect Heart (Intermediate)
                </h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold text-blue-700 mb-4">Technique Breakdown:</h4>
                    <ol className="space-y-3 text-blue-600">
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-3 mt-1 font-bold">1.</span>
                        <div>
                          <strong>Base preparation:</strong> Stronger matcha concentration for better color contrast
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-3 mt-1 font-bold">2.</span>
                        <div>
                          <strong>Center pour:</strong> Start with thin stream in cup center, building base
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-3 mt-1 font-bold">3.</span>
                        <div>
                          <strong>Heart creation:</strong> Lower pitcher to surface, increase flow rate significantly
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-3 mt-1 font-bold">4.</span>
                        <div>
                          <strong>Shape formation:</strong> Allow white circle to form, then stop abruptly
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-3 mt-1 font-bold">5.</span>
                        <div>
                          <strong>Heart point:</strong> Quick linear movement through circle to create heart shape
                        </div>
                      </li>
                    </ol>
                  </div>
                  <div>
                    <div className="bg-white rounded-lg p-6 shadow-md">
                      <h4 className="font-bold text-blue-700 mb-3">🎯 Critical Success Factors</h4>
                      <div className="space-y-3 text-sm text-blue-600">
                        <div className="border-l-4 border-blue-400 pl-3">
                          <p><strong>Timing:</strong> The "stop and strike" must be decisive and quick</p>
                        </div>
                        <div className="border-l-4 border-blue-400 pl-3">
                          <p><strong>Flow control:</strong> Dramatic increase in flow rate creates the white circle</p>
                        </div>
                        <div className="border-l-4 border-blue-400 pl-3">
                          <p><strong>Height change:</strong> Moving from high to low pour is crucial</p>
                        </div>
                        <div className="border-l-4 border-blue-400 pl-3">
                          <p><strong>Symmetry:</strong> Practice centering for perfectly balanced hearts</p>
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
                  <span className="mr-3 text-3xl">🦢</span> The Elegant Swan (Advanced)
                </h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold text-purple-700 mb-4">Master-Level Technique:</h4>
                    <ol className="space-y-3 text-purple-600">
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-3 mt-1 font-bold">1.</span>
                        <div>
                          <strong>Foundation:</strong> Create perfect rosetta base as starting point
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-3 mt-1 font-bold">2.</span>
                        <div>
                          <strong>Body formation:</strong> Use controlled wiggle to create swan body
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-3 mt-1 font-bold">3.</span>
                        <div>
                          <strong>Neck creation:</strong> Precise linear movement to form elegant neck curve
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-3 mt-1 font-bold">4.</span>
                        <div>
                          <strong>Head detail:</strong> Small circular motion at end to create swan head
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-3 mt-1 font-bold">5.</span>
                        <div>
                          <strong>Finishing touches:</strong> Optional: toothpick work for additional details
                        </div>
                      </li>
                    </ol>
                  </div>
                  <div>
                    <div className="bg-white rounded-lg p-6 shadow-md">
                      <h4 className="font-bold text-purple-700 mb-3">⭐ Mastery Requirements</h4>
                      <div className="space-y-3 text-sm text-purple-600">
                        <div className="bg-purple-100 rounded p-3">
                          <p><strong>Prerequisites:</strong> Must master rosetta and heart patterns first</p>
                        </div>
                        <div className="bg-purple-100 rounded p-3">
                          <p><strong>Precision:</strong> Requires excellent hand control and consistency</p>
                        </div>
                        <div className="bg-purple-100 rounded p-3">
                          <p><strong>Patience:</strong> May take 100+ attempts to achieve consistently</p>
                        </div>
                        <div className="bg-purple-100 rounded p-3">
                          <p><strong>Signature move:</strong> Our Koramangala cafe's most requested pattern</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        </section>

        <Divider className="my-12" />

        {/* Creative Matcha Recipes */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">
            Signature Matcha Creations: Beyond the Traditional Latte
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <Card className="border-2 border-teal-300 bg-teal-50 shadow-lg">
              <CardBody className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-teal-800">🌊 Matcha Ocean Layers</h3>
                <h4 className="font-bold text-teal-700 mb-4">Instagram Sensation • Cold Drink</h4>
                
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4">
                    <h5 className="font-bold text-teal-600 mb-2">Ingredients (Serves 1):</h5>
                    <ul className="text-sm text-teal-700 space-y-1">
                      <li>• 3g ceremonial-grade matcha</li>
                      <li>• 50ml warm water (75°C)</li>
                      <li>• 200ml cold coconut milk</li>
                      <li>• 2 tbsp condensed milk</li>
                      <li>• 1 tsp vanilla extract</li>
                      <li>• Ice cubes</li>
                      <li>• Blue spirulina powder (pinch)</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4">
                    <h5 className="font-bold text-teal-600 mb-2">Technique:</h5>
                    <ol className="text-sm text-teal-700 space-y-1">
                      <li>1. Whisk matcha with warm water to perfection</li>
                      <li>2. Mix condensed milk with small amount of coconut milk</li>
                      <li>3. Add blue spirulina to remaining coconut milk</li>
                      <li>4. Layer: Blue milk → White milk → Green matcha</li>
                      <li>5. Pour each layer slowly over spoon back</li>
                    </ol>
                  </div>
                </div>
                
                <div className="mt-4 bg-teal-100 rounded p-3">
                  <p className="text-teal-800 text-xs">
                    <strong>Bangalore Special:</strong> Served in transparent glass to showcase the beautiful ocean-like layers. Perfect for our warm climate!
                  </p>
                </div>
              </CardBody>
            </Card>

            <Card className="border-2 border-rose-300 bg-rose-50 shadow-lg">
              <CardBody className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-rose-800">🌸 Sakura Matcha Foam</h3>
                <h4 className="font-bold text-rose-700 mb-4">Seasonal Special • Hot Drink</h4>
                
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4">
                    <h5 className="font-bold text-rose-600 mb-2">Ingredients (Serves 1):</h5>
                    <ul className="text-sm text-rose-700 space-y-1">
                      <li>• 2g ceremonial-grade matcha</li>
                      <li>• 60ml water (80°C)</li>
                      <li>• 150ml whole milk</li>
                      <li>• 1 tsp sakura syrup</li>
                      <li>• Pink food coloring (1 drop)</li>
                      <li>• Edible rose petals</li>
                      <li>• White chocolate shavings</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4">
                    <h5 className="font-bold text-rose-600 mb-2">Artistic Process:</h5>
                    <ol className="text-sm text-rose-700 space-y-1">
                      <li>1. Prepare traditional matcha base</li>
                      <li>2. Steam milk with sakura syrup</li>
                      <li>3. Add tiny drop of pink coloring to foam</li>
                      <li>4. Create heart latte art with pink foam</li>
                      <li>5. Garnish with rose petals and chocolate</li>
                    </ol>
                  </div>
                </div>
                
                <div className="mt-4 bg-rose-100 rounded p-3">
                  <p className="text-rose-800 text-xs">
                    <strong>Cultural Note:</strong> Honors Japanese cherry blossom season. Popular during February-March in Bangalore.
                  </p>
                </div>
              </CardBody>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <Card className="border-2 border-amber-300 bg-amber-50 shadow-lg">
              <CardBody className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-amber-800">🍯 Golden Matcha Turmeric</h3>
                <h4 className="font-bold text-amber-700 mb-4">Wellness Fusion • Warm/Cold</h4>
                
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4">
                    <h5 className="font-bold text-amber-600 mb-2">Health-Focused Blend:</h5>
                    <ul className="text-sm text-amber-700 space-y-1">
                      <li>• 2g ceremonial-grade matcha</li>
                      <li>• ½ tsp organic turmeric powder</li>
                      <li>• 200ml oat milk</li>
                      <li>• 1 tsp raw honey</li>
                      <li>• Pinch black pepper</li>
                      <li>• ¼ tsp ginger powder</li>
                      <li>• Cinnamon for dusting</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4">
                    <h5 className="font-bold text-amber-600 mb-2">Wellness Benefits:</h5>
                    <ul className="text-sm text-amber-700 space-y-1">
                      <li>• Anti-inflammatory powerhouse</li>
                      <li>• Sustained energy without crash</li>
                      <li>• Antioxidant synergy</li>
                      <li>• Digestive support</li>
                    </ul>
                  </div>
                </div>
              </CardBody>
            </Card>

            <Card className="border-2 border-violet-300 bg-violet-50 shadow-lg">
              <CardBody className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-violet-800">🍓 Matcha Berry Smoothie Bowl</h3>
                <h4 className="font-bold text-violet-700 mb-4">Dessert Drink • Instagram-Perfect</h4>
                
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4">
                    <h5 className="font-bold text-violet-600 mb-2">Base & Toppings:</h5>
                    <ul className="text-sm text-violet-700 space-y-1">
                      <li>• 3g matcha + 100ml coconut milk</li>
                      <li>• 1 frozen banana</li>
                      <li>• ½ cup mixed berries</li>
                      <li>• 2 tbsp Greek yogurt</li>
                      <li>• 1 tbsp chia seeds</li>
                      <li>• Fresh mint leaves</li>
                      <li>• Granola for crunch</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4">
                    <h5 className="font-bold text-violet-600 mb-2">Presentation:</h5>
                    <p className="text-sm text-violet-700">
                      Blend ingredients until smooth, pour into wide bowl, artistically arrange toppings in patterns. Perfect for Bangalore's health-conscious crowd.
                    </p>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        </section>

        <Divider className="my-12" />

        {/* Advanced Techniques and Tools */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">
            Professional Tools & Advanced Techniques
          </h2>
          
          <div className="bg-gray-50 rounded-2xl p-8 mb-10">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">🛠️ Essential Barista Equipment for Matcha Art</h3>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card className="bg-white shadow-lg">
                <CardBody className="p-6">
                  <h4 className="text-lg font-bold mb-4 text-green-800">Core Equipment</h4>
                  <div className="space-y-3">
                    <div className="border-l-4 border-green-500 pl-4">
                      <h5 className="font-bold text-green-700">Milk Steaming Pitcher</h5>
                      <p className="text-sm text-green-600">Sharp spout, 600ml capacity, stainless steel for best control</p>
                      <p className="text-xs text-green-500">Professional grade equipment for best results</p>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4">
                      <h5 className="font-bold text-green-700">Digital Scale</h5>
                      <p className="text-sm text-green-600">0.1g precision for consistent matcha measurements</p>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4">
                      <h5 className="font-bold text-green-700">Thermometer</h5>
                      <p className="text-sm text-green-600">Digital instant-read for precise temperature control</p>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4">
                      <h5 className="font-bold text-green-700">Quality Chasen</h5>
                      <p className="text-sm text-green-600">80-120 tine bamboo whisk for perfect matcha preparation</p>
                    </div>
                  </div>
                </CardBody>
              </Card>

              <Card className="bg-white shadow-lg">
                <CardBody className="p-6">
                  <h4 className="text-lg font-bold mb-4 text-blue-800">Pro-Level Additions</h4>
                  <div className="space-y-3">
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h5 className="font-bold text-blue-700">Etching Tools</h5>
                      <p className="text-sm text-blue-600">Toothpicks, latte art pens for detailed designs</p>
                    </div>
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h5 className="font-bold text-blue-700">Multiple Pitchers</h5>
                      <p className="text-sm text-blue-600">Different sizes for various pattern types</p>
                    </div>
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h5 className="font-bold text-blue-700">Practice Cups</h5>
                      <p className="text-sm text-blue-600">Various sizes for different latte art styles</p>
                    </div>
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h5 className="font-bold text-blue-700">Color Additives</h5>
                      <p className="text-sm text-blue-600">Natural colorings for creative variations</p>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </div>

            <div className="bg-blue-100 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <h4 className="font-bold text-blue-800 mb-3">🎓 Advanced Techniques from Our Masters</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-bold text-blue-700 mb-2">Free-Pour Mastery:</h5>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• Multiple pattern layering in single pour</li>
                    <li>• Color contrast manipulation</li>
                    <li>• Dimensional foam sculptures</li>
                    <li>• Symmetrical pattern development</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-bold text-blue-700 mb-2">Etching Artistry:</h5>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• Japanese-inspired designs (zen gardens, waves)</li>
                    <li>• Seasonal motifs (cherry blossoms, autumn leaves)</li>
                    <li>• Personal customization techniques</li>
                    <li>• Multi-color layered compositions</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Divider className="my-12" />

        {/* Seasonal and Cultural Adaptations */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">
            Bangalore-Inspired Seasonal Matcha Creations
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <Card className="border-2 border-orange-300 bg-orange-50 shadow-lg">
              <CardBody className="p-8">
                <h3 className="text-xl font-bold mb-4 text-orange-800">🌞 Summer Coolers (March-May)</h3>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-bold text-orange-700 mb-3">Iced Matcha Coconut Cooler:</h4>
                    <ul className="text-sm text-orange-600 space-y-1">
                      <li>• Cold-whisked matcha with coconut water</li>
                      <li>• Fresh mint from local Bangalore gardens</li>
                      <li>• Lime zest for citrus brightness</li>
                      <li>• Served over crushed ice with bamboo straw</li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-bold text-orange-700 mb-3">Mango Matcha Fusion:</h4>
                    <ul className="text-sm text-orange-600 space-y-1">
                      <li>• Karnataka mango pulp layers</li>
                      <li>• Matcha ice cream floats</li>
                      <li>• Cardamom-infused cream foam</li>
                      <li>• Perfect for Bangalore's mango season</li>
                    </ul>
                  </div>
                </div>
              </CardBody>
            </Card>

            <Card className="border-2 border-green-300 bg-green-50 shadow-lg">
              <CardBody className="p-8">
                <h3 className="text-xl font-bold mb-4 text-green-800">🌧️ Monsoon Warmers (June-September)</h3>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-bold text-green-700 mb-3">Spiced Matcha Chai Fusion:</h4>
                    <ul className="text-sm text-green-600 space-y-1">
                      <li>• Traditional matcha base with chai spices</li>
                      <li>• Bangalore's favorite: cardamom & ginger</li>
                      <li>• Jaggery sweetening for local taste</li>
                      <li>• Perfect for rainy afternoon contemplation</li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-bold text-green-700 mb-3">Golden Turmeric Matcha:</h4>
                    <ul className="text-sm text-green-600 space-y-1">
                      <li>• Anti-inflammatory wellness blend</li>
                      <li>• Local turmeric and black pepper</li>
                      <li>• Coconut milk from Kerala</li>
                      <li>• Immunity boost during monsoon season</li>
                    </ul>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>

          <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-300">
            <CardBody className="p-8">
              <h3 className="text-xl font-bold mb-6 text-purple-800">🎨 Cultural Fusion: East Meets South</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-4 shadow-md">
                  <h4 className="font-bold text-purple-700 mb-3">Filter Coffee Matcha</h4>
                  <p className="text-sm text-purple-600 mb-2">
                    Honoring Bangalore's coffee culture with matcha-coffee layered presentation
                  </p>
                  <ul className="text-xs text-purple-500 space-y-1">
                    <li>• Chicory-matcha blend</li>
                    <li>• Traditional steel tumbler presentation</li>
                    <li>• Jaggery sweetening option</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-md">
                  <h4 className="font-bold text-purple-700 mb-3">Mysore Pak Matcha</h4>
                  <p className="text-sm text-purple-600 mb-2">
                    Sweet Karnataka treat meets Japanese tradition
                  </p>
                  <ul className="text-xs text-purple-500 space-y-1">
                    <li>• Ghee-infused foam art</li>
                    <li>• Chickpea flour rim dusting</li>
                    <li>• Cardamom-matcha fusion</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-md">
                  <h4 className="font-bold text-purple-700 mb-3">Ragi Matcha Health Bowl</h4>
                  <p className="text-sm text-purple-600 mb-2">
                    Finger millet meets matcha for ultimate nutrition
                  </p>
                  <ul className="text-xs text-purple-500 space-y-1">
                    <li>• Calcium and antioxidant powerhouse</li>
                    <li>• Local ragi sourcing</li>
                    <li>• Perfect post-workout drink</li>
                  </ul>
                </div>
              </div>
            </CardBody>
          </Card>
        </section>

        <Divider className="my-12" />

        {/* Learning and Practice */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">
            Master Your Craft: Learning Resources & Practice Guide
          </h2>
          
          <Card className="bg-gradient-to-br from-green-50 to-teal-50 border-0 shadow-2xl">
            <CardBody className="p-10">
              <h3 className="text-2xl font-bold mb-8 text-green-800 text-center">
                🎓 Learn from Bangalore's Premier Matcha Experts
              </h3>
              
              <div className="grid md:grid-cols-2 gap-10 mb-8">
                <div>
                  <h4 className="text-xl font-bold mb-4 text-green-700">🏫 Mocha and Matcha Masterclasses</h4>
                  <div className="space-y-4">
                    <div className="bg-white rounded-lg p-4 shadow-md">
                      <h5 className="font-bold text-green-600 mb-2">Beginner Latte Art Workshop:</h5>
                      <ul className="text-sm text-green-700 space-y-1">
                        <li>• 2-hour hands-on session</li>
                        <li>• Master basic patterns (heart, rosetta)</li>
                        <li>• All equipment and ingredients provided</li>
                        <li>• Take home practice matcha kit</li>
                        <li>• Certificate of completion</li>
                      </ul>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-md">
                      <h5 className="font-bold text-green-600 mb-2">Advanced Artistry Intensive:</h5>
                      <ul className="text-sm text-green-700 space-y-1">
                        <li>• Full-day immersive experience</li>
                        <li>• Complex patterns and etching techniques</li>
                        <li>• Recipe development workshop</li>
                        <li>• Professional equipment training</li>
                        <li>• Portfolio development guidance</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-xl font-bold mb-4 text-blue-700">📅 Practice Schedule & Tips</h4>
                  <div className="space-y-4">
                    <div className="bg-white rounded-lg p-4 shadow-md">
                      <h5 className="font-bold text-blue-600 mb-2">Daily Practice Routine:</h5>
                      <ul className="text-sm text-blue-700 space-y-1">
                        <li>• <strong>Week 1-2:</strong> Master basic matcha preparation</li>
                        <li>• <strong>Week 3-4:</strong> Focus on consistent milk steaming</li>
                        <li>• <strong>Week 5-6:</strong> Practice basic pour patterns</li>
                        <li>• <strong>Week 7-8:</strong> Develop signature style</li>
                      </ul>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-md">
                      <h5 className="font-bold text-blue-600 mb-2">Home Practice Setup:</h5>
                      <ul className="text-sm text-blue-700 space-y-1">
                        <li>• Start with basic equipment</li>
                        <li>• Practice with water before using matcha</li>
                        <li>• Record your attempts for self-review</li>
                        <li>• Join our WhatsApp practice group</li>
                      </ul>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-md">
                      <h5 className="font-bold text-blue-600 mb-2">Monthly Challenges:</h5>
                      <ul className="text-sm text-blue-700 space-y-1">
                        <li>• Participate in our Instagram contests</li>
                        <li>• Visit monthly showcase events</li>
                        <li>• Connect with local latte art community</li>
                        <li>• Receive feedback from our masters</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 rounded-xl p-6 border-l-4 border-amber-400">
                <h4 className="font-bold text-amber-800 mb-3">🌟 Success Stories from Our Students</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-amber-700 text-sm mb-2">
                      <strong>"From Zero to Instagram Star"</strong> - Priya, Software Engineer
                    </p>
                    <p className="text-amber-600 text-xs">
                      "Started with no barista experience. After 3 months of practice and 2 workshops, my matcha latte art posts get 1000+ likes consistently!"
                    </p>
                  </div>
                  <div>
                    <p className="text-amber-700 text-sm mb-2">
                      <strong>"Opening My Own Cafe"</strong> - Karthik, Entrepreneur
                    </p>
                    <p className="text-amber-600 text-xs">
                      "The skills learned here helped me launch 'Zen Garden Cafe' in HSR Layout. Customers specifically come for our matcha art!"
                    </p>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </section>

        {/* Conclusion */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-teal-600 to-green-600 rounded-3xl p-10 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Create Art, Share Joy, Honor Tradition
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Matcha latte art is more than just Instagram content—it's a bridge between ancient Japanese wisdom and modern creative expression. Every cup you create with love and skill spreads a little more beauty in the world.
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
                🎨 Learn Latte Art Techniques
              </Link>
              <Link
                isExternal
                className={buttonStyles({
                  color: "success",
                  radius: "full",
                  variant: "bordered",
                  size: "lg",
                })}
                href={siteConfig.links.instagram}
              >
                📸 Share Your Creations
              </Link>
            </div>
            
            <p className="text-green-100 text-lg">
              Visit us in Koramangala to taste our signature creations and learn from masters who blend Japanese tradition with Bangalore innovation.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}