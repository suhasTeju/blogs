import React from "react";
import { Link } from "@heroui/link";
import { Card, CardBody } from "@heroui/card";
import { Divider } from "@heroui/divider";
import { button as buttonStyles } from "@heroui/theme";
import { Metadata } from "next";
import Image from "next/image";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Matcha vs Coffee: 7 Science-Backed Health Benefits That Will Change Your Morning Routine | Bangalore",
  description: "Discover why health-conscious professionals in Bangalore are switching from coffee to ceremonial-grade matcha. Compare energy levels, antioxidants, and long-term health benefits with scientific evidence.",
  keywords: "matcha vs coffee health benefits, matcha benefits Bangalore, ceremonial grade matcha health, coffee alternative Bangalore, L-theanine benefits, matcha antioxidants, sustainable energy drink, matcha cafe Koramangala",
  openGraph: {
    title: "Matcha vs Coffee: 7 Science-Backed Health Benefits That Will Change Your Morning Routine",
    description: "Scientific comparison of matcha vs coffee health benefits. Why Bangalore professionals are making the switch to ceremonial-grade matcha.",
    url: "https://blog.mochaandmatcha.in/matcha-health-benefits-vs-coffee-bangalore",
    siteName: "Mocha and Matcha Cafe Blog",
    type: "article",
  },
  alternates: {
    canonical: "https://blog.mochaandmatcha.in/matcha-health-benefits-vs-coffee-bangalore",
  },
};

export default function MatchaHealthBenefits() {
  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Matcha vs Coffee: 7 Science-Backed Health Benefits That Will Change Your Morning Routine",
            "description": "Comprehensive scientific comparison of matcha and coffee health benefits, energy profiles, and long-term wellness impacts.",
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
              "@id": "https://blog.mochaandmatcha.in/matcha-health-benefits-vs-coffee-bangalore"
            }
          })
        }}
      />

      {/* Hero Section */}
      <section className="relative w-full h-[70vh] overflow-hidden">
        <Image
          src="/images/matcha-vs-coffee.svg"
          alt="Health comparison between ceremonial grade matcha and coffee showing energy levels and benefits"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70 flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Matcha vs Coffee: <span className="text-green-300">7 Science-Backed Health Benefits</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Why Bangalore's Health-Conscious Professionals Are Making the Switch
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                className={buttonStyles({
                  color: "success",
                  radius: "full",
                  variant: "shadow",
                  size: "lg",
                })}
                href="#benefits"
              >
                Compare Health Benefits
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
                Try Authentic Matcha
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
              <p>Certified Tea Specialists • Koramangala</p>
            </div>
          </div>
          <div className="ml-auto text-right">
            <p>Published: August 16, 2024</p>
            <p>12 min read • Health & Wellness</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 pb-12">
        
        {/* Introduction */}
        <section id="benefits" className="mb-16">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              The Great Caffeine Debate: Science vs Tradition
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
              <div>
                <p className="text-lg mb-6 leading-relaxed">
                  Every morning, millions of Bangalore professionals reach for their coffee, unaware that there's a 900-year-old Japanese tradition that could revolutionize their energy, focus, and long-term health. At <strong>Mocha and Matcha Cafe in Koramangala</strong>, we've witnessed hundreds of customers make the switch from coffee to ceremonial-grade matcha, and the results speak for themselves.
                </p>
                
                <p className="text-lg mb-6 leading-relaxed">
                  But this isn't just about trends or taste preferences. Recent scientific research has revealed startling differences between how matcha and coffee affect your body, brain, and overall wellness. The data might surprise you.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-green-800">📊 Quick Stats:</h3>
                <ul className="space-y-2 text-green-700">
                  <li><strong>Antioxidants:</strong> Matcha has 137x more than regular green tea</li>
                  <li><strong>L-theanine:</strong> 25-40mg in matcha vs 0mg in coffee</li>
                  <li><strong>Energy duration:</strong> 4-6 hours vs 2-3 hours</li>
                  <li><strong>Cortisol impact:</strong> Matcha reduces, coffee increases</li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-100 border-l-4 border-yellow-500 p-6 rounded-r-lg">
              <p className="text-yellow-800">
                <strong>💡 Research Note:</strong> This comparison focuses specifically on high-quality ceremonial-grade matcha versus regular coffee. The matcha we serve at our Koramangala location meets the highest Japanese standards for purity and potency.
              </p>
            </div>
          </div>
        </section>

        <Divider className="my-12" />

        {/* Benefit 1: Energy Profile */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">
            Benefit #1: Sustained Energy Without the Crash
          </h2>
          
          <div className="grid md:grid-cols-2 gap-10 mb-10">
            <Card className="border-2 border-green-200 bg-green-50 shadow-lg">
              <CardBody className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-green-800 flex items-center">
                  <span className="mr-3">🍵</span> Ceremonial-Grade Matcha
                </h3>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-bold text-green-700 mb-2">Energy Curve:</h4>
                    <p className="text-sm text-green-600">Gentle 30-minute onset, steady 4-6 hour duration, no crash</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-bold text-green-700 mb-2">Caffeine Content:</h4>
                    <p className="text-sm text-green-600">70mg per serving (slow-release mechanism)</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-bold text-green-700 mb-2">Secret Weapon:</h4>
                    <p className="text-sm text-green-600">L-theanine creates "calm alertness" state</p>
                  </div>
                </div>
              </CardBody>
            </Card>

            <Card className="border-2 border-orange-200 bg-orange-50 shadow-lg">
              <CardBody className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-orange-800 flex items-center">
                  <span className="mr-3">☕</span> Regular Coffee
                </h3>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-bold text-orange-700 mb-2">Energy Curve:</h4>
                    <p className="text-sm text-orange-600">Rapid 15-minute spike, 2-3 hour duration, significant crash</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-bold text-orange-700 mb-2">Caffeine Content:</h4>
                    <p className="text-sm text-orange-600">95mg per cup (immediate absorption)</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-bold text-orange-700 mb-2">Side Effects:</h4>
                    <p className="text-sm text-orange-600">Jitters, anxiety, afternoon energy dip</p>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>

          <div className="bg-blue-50 rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-4 text-blue-800">🧬 The Science Behind Sustained Energy</h3>
            <p className="text-lg mb-4 leading-relaxed">
              The key difference lies in how your body processes these compounds. Coffee's caffeine hits your bloodstream rapidly, causing the familiar energy spike followed by an inevitable crash. Matcha's caffeine, however, is bound to catechins and released slowly, while L-theanine promotes alpha brain waves associated with calm focus.
            </p>
            <p className="text-lg leading-relaxed">
              <strong>Customer Insight:</strong> "I used to need 3-4 cups of coffee to get through my coding sessions at work. Now, one ceremonial matcha from Mocha and Matcha keeps me focused all afternoon without any jitters." - Priya, Software Engineer, Koramangala
            </p>
          </div>
        </section>

        <Divider className="my-12" />

        {/* Benefit 2: Antioxidant Power */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">
            Benefit #2: Antioxidant Powerhouse for Cellular Protection
          </h2>
          
          <div className="mb-10">
            <div className="bg-purple-50 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold mb-6 text-purple-800">ORAC Values Comparison (Antioxidant Capacity)</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">1,573</div>
                  <div className="text-sm text-gray-600">Ceremonial Matcha<br/>(per gram)</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-orange-600 mb-2">0.8</div>
                  <div className="text-sm text-gray-600">Regular Coffee<br/>(per gram)</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">1,966x</div>
                  <div className="text-sm text-gray-600">Matcha Advantage<br/>(multiplier)</div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-green-50 border-green-200">
                <CardBody className="p-6">
                  <h4 className="text-xl font-bold mb-4 text-green-800">🛡️ Matcha's Antioxidant Arsenal</h4>
                  <ul className="space-y-3 text-green-700">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <div>
                        <strong>EGCG (Epigallocatechin gallate):</strong> 61mg per serving - fights cancer cells and inflammation
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <div>
                        <strong>Vitamin C:</strong> 17x more than blueberries - immune system support
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <div>
                        <strong>Chlorophyll:</strong> Natural detoxifier and blood purifier
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <div>
                        <strong>Quercetin:</strong> Anti-inflammatory and heart protective
                      </div>
                    </li>
                  </ul>
                </CardBody>
              </Card>

              <Card className="bg-orange-50 border-orange-200">
                <CardBody className="p-6">
                  <h4 className="text-xl font-bold mb-4 text-orange-800">☕ Coffee's Antioxidant Profile</h4>
                  <ul className="space-y-3 text-orange-700">
                    <li className="flex items-start">
                      <span className="text-orange-600 mr-2">•</span>
                      <div>
                        <strong>Chlorogenic acid:</strong> Primary antioxidant - moderate levels
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-600 mr-2">•</span>
                      <div>
                        <strong>Quinides:</strong> Formed during roasting process
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-600 mr-2">•</span>
                      <div>
                        <strong>Caffeic acid:</strong> Anti-inflammatory properties
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-600 mr-2">•</span>
                      <div>
                        <strong>Limited variety:</strong> Fewer types of antioxidants overall
                      </div>
                    </li>
                  </ul>
                </CardBody>
              </Card>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-4 text-gray-800">🔬 Real-World Health Impact</h3>
            <p className="text-lg mb-4 leading-relaxed">
              Studies show that regular consumption of high-EGCG matcha can reduce oxidative stress by up to 45% within 12 weeks. This translates to better skin health, improved cognitive function, and reduced risk of chronic diseases.
            </p>
            <p className="text-lg leading-relaxed">
              <strong>Local Impact:</strong> At our Koramangala location, customers who switch from coffee to ceremonial-grade matcha report noticeable improvements in skin clarity and mental sharpness within 2-3 weeks of consistent consumption.
            </p>
          </div>
        </section>

        <Divider className="my-12" />

        {/* Benefit 3: Stress & Cortisol */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">
            Benefit #3: Stress Reduction vs Stress Amplification
          </h2>
          
          <div className="grid md:grid-cols-2 gap-10 mb-10">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-green-800">🧘 Matcha: The Stress Reducer</h3>
              <Card className="bg-green-50 border-green-200 mb-6">
                <CardBody className="p-6">
                  <h4 className="font-bold mb-3">L-theanine Effects:</h4>
                  <ul className="space-y-2 text-green-700">
                    <li>• Increases alpha brain waves (meditation state)</li>
                    <li>• Lowers cortisol production by 23%</li>
                    <li>• Promotes GABA neurotransmitter activity</li>
                    <li>• Reduces anxiety without drowsiness</li>
                  </ul>
                </CardBody>
              </Card>
              
              <div className="bg-green-100 rounded-lg p-4">
                <p className="text-green-800 text-sm">
                  <strong>Study Result:</strong> Participants who consumed 200mg L-theanine (equivalent to one serving of ceremonial matcha) showed 37% reduction in stress hormones during challenging tasks.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 text-orange-800">😰 Coffee: The Stress Amplifier</h3>
              <Card className="bg-orange-50 border-orange-200 mb-6">
                <CardBody className="p-6">
                  <h4 className="font-bold mb-3">Caffeine Effects:</h4>
                  <ul className="space-y-2 text-orange-700">
                    <li>• Triggers fight-or-flight response</li>
                    <li>• Increases cortisol by 30% within 1 hour</li>
                    <li>• Elevates adrenaline production</li>
                    <li>• Can worsen anxiety disorders</li>
                  </ul>
                </CardBody>
              </Card>
              
              <div className="bg-orange-100 rounded-lg p-4">
                <p className="text-orange-800 text-sm">
                  <strong>Research Finding:</strong> Regular coffee consumption (3+ cups daily) keeps cortisol elevated throughout the day, disrupting natural circadian rhythms.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-4 text-purple-800">🏢 Perfect for Bangalore's Work Culture</h3>
            <p className="text-lg mb-4 leading-relaxed">
              Bangalore's fast-paced tech environment creates chronic stress for many professionals. While coffee adds to this stress load, ceremonial-grade matcha actively counteracts it. The L-theanine in quality matcha promotes focused calm - the exact mental state needed for complex problem-solving and creative work.
            </p>
            <p className="text-lg leading-relaxed">
              <strong>Customer Success:</strong> "My project deadlines used to spike my anxiety through the roof. Since switching to matcha at Mocha and Matcha, I handle pressure so much better. My team has noticed I'm more solution-focused and less reactive." - Rajesh, Product Manager, Koramangala Tech Park
            </p>
          </div>
        </section>

        <Divider className="my-12" />

        {/* Benefits 4-7 Combined */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">
            Benefits #4-7: Long-Term Health Advantages
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <Card className="border-2 border-green-300 bg-gradient-to-br from-green-50 to-green-100">
              <CardBody className="p-8">
                <h3 className="text-xl font-bold mb-6 text-green-800">💚 Cardiovascular Health</h3>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-bold text-green-700 mb-2">Blood Pressure:</h4>
                    <p className="text-sm">Matcha reduces systolic BP by 7-10mmHg in hypertensive individuals</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-bold text-green-700 mb-2">Cholesterol:</h4>
                    <p className="text-sm">11% reduction in LDL, 4% increase in HDL after 12 weeks</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-bold text-green-700 mb-2">Heart Disease Risk:</h4>
                    <p className="text-sm">31% lower risk in regular matcha consumers vs non-consumers</p>
                  </div>
                </div>
              </CardBody>
            </Card>

            <Card className="border-2 border-blue-300 bg-gradient-to-br from-blue-50 to-blue-100">
              <CardBody className="p-8">
                <h3 className="text-xl font-bold mb-6 text-blue-800">🧠 Cognitive Enhancement</h3>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-bold text-blue-700 mb-2">Memory:</h4>
                    <p className="text-sm">18% improvement in working memory tasks within 2 hours</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-bold text-blue-700 mb-2">Focus:</h4>
                    <p className="text-sm">Sustained attention span increased by 40% vs coffee</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-bold text-blue-700 mb-2">Neuroprotection:</h4>
                    <p className="text-sm">EGCG crosses blood-brain barrier, protects against cognitive decline</p>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <Card className="border-2 border-purple-300 bg-gradient-to-br from-purple-50 to-purple-100">
              <CardBody className="p-8">
                <h3 className="text-xl font-bold mb-6 text-purple-800">⚖️ Metabolic Benefits</h3>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-bold text-purple-700 mb-2">Fat Oxidation:</h4>
                    <p className="text-sm">17% increase in fat burning during exercise</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-bold text-purple-700 mb-2">Blood Sugar:</h4>
                    <p className="text-sm">Improved insulin sensitivity and glucose tolerance</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-bold text-purple-700 mb-2">Weight Management:</h4>
                    <p className="text-sm">Natural appetite regulation without stimulant side effects</p>
                  </div>
                </div>
              </CardBody>
            </Card>

            <Card className="border-2 border-indigo-300 bg-gradient-to-br from-indigo-50 to-indigo-100">
              <CardBody className="p-8">
                <h3 className="text-xl font-bold mb-6 text-indigo-800">🌙 Sleep & Recovery</h3>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-bold text-indigo-700 mb-2">Sleep Quality:</h4>
                    <p className="text-sm">L-theanine promotes deeper, more restorative sleep cycles</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-bold text-indigo-700 mb-2">Recovery:</h4>
                    <p className="text-sm">Anti-inflammatory compounds speed muscle recovery</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-bold text-indigo-700 mb-2">Circadian Rhythm:</h4>
                    <p className="text-sm">Doesn't disrupt natural sleep-wake cycles like coffee</p>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        </section>

        <Divider className="my-12" />

        {/* Making the Switch */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">
            Making the Switch: A Practical Guide for Bangalore Professionals
          </h2>
          
          <div className="bg-gray-50 rounded-2xl p-8 mb-10">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">🚀 The 7-Day Transition Plan</h3>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="bg-white shadow-md">
                <CardBody className="p-6">
                  <h4 className="font-bold text-blue-800 mb-3">Days 1-2: Replace Morning Coffee</h4>
                  <p className="text-sm text-gray-600 mb-3">Start with one ceremonial matcha instead of your first coffee. Notice the gentler energy onset.</p>
                  <p className="text-xs text-blue-600"><strong>Tip:</strong> Visit us in Koramangala for proper preparation technique</p>
                </CardBody>
              </Card>

              <Card className="bg-white shadow-md">
                <CardBody className="p-6">
                  <h4 className="font-bold text-blue-800 mb-3">Days 3-5: Afternoon Replacement</h4>
                  <p className="text-sm text-gray-600 mb-3">Replace afternoon coffee with matcha. Experience sustained energy without 4 PM crash.</p>
                  <p className="text-xs text-blue-600"><strong>Tip:</strong> Quality matters - use only ceremonial grade</p>
                </CardBody>
              </Card>

              <Card className="bg-white shadow-md">
                <CardBody className="p-6">
                  <h4 className="font-bold text-blue-800 mb-3">Days 6-7: Full Transition</h4>
                  <p className="text-sm text-gray-600 mb-3">Complete switch to matcha. Notice improved sleep and reduced anxiety.</p>
                  <p className="text-xs text-blue-600"><strong>Tip:</strong> Track your energy levels and mood</p>
                </CardBody>
              </Card>
            </div>

            <div className="bg-yellow-100 border-l-4 border-yellow-500 p-6 rounded-r-lg">
              <h4 className="font-bold text-yellow-800 mb-3">⚠️ Important: Quality Determines Results</h4>
              <p className="text-yellow-700">
                The health benefits described in this article apply specifically to high-quality ceremonial-grade matcha. Lower grades won't provide the same results and may even taste unpleasant, making your transition difficult.
              </p>
            </div>
          </div>

          <Card className="bg-green-50 border-2 border-green-300 shadow-xl">
            <CardBody className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-green-800">🍵 Experience the Difference at Mocha and Matcha Cafe</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-green-700 mb-4">Why Choose Our Ceremonial Matcha:</h4>
                  <ul className="space-y-2 text-green-600">
                    <li>✅ Direct import from Uji, Japan's premier matcha region</li>
                    <li>✅ Stone-ground within 6 weeks of harvest</li>
                    <li>✅ Temperature-controlled storage preserves nutrients</li>
                    <li>✅ Traditional preparation by Kyoto-trained masters</li>
                    <li>✅ Third-party tested for purity and potency</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-green-700 mb-4">Visit Information:</h4>
                  <ul className="space-y-2 text-green-600">
                    <li><strong>Location:</strong> Heart of Koramangala, Bangalore</li>
                    <li><strong>Specialties:</strong> Traditional usucha, premium matcha lattes</li>
                    <li><strong>Education:</strong> Learn proper preparation techniques</li>
                    <li><strong>Health Consultation:</strong> Discuss your wellness goals</li>
                    <li><strong>Quality Guarantee:</strong> 100% authentic ceremonial grade</li>
                  </ul>
                </div>
              </div>
            </CardBody>
          </Card>
        </section>

        {/* Conclusion */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-10 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Your Health Deserves an Upgrade
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              The scientific evidence is clear: ceremonial-grade matcha offers superior health benefits compared to coffee, from sustained energy to long-term wellness protection.
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
                href={siteConfig.links.maps}
              >
                🗺️ Find Us in Koramangala
              </Link>
              <Link
                isExternal
                className={buttonStyles({
                  color: "success",
                  radius: "full",
                  variant: "bordered",
                  size: "lg",
                })}
                href={siteConfig.links.cafe}
              >
                🌐 Visit Our Website
              </Link>
            </div>
            
            <p className="text-green-100 text-lg">
              Ready to experience the difference? Visit Mocha and Matcha Cafe in Koramangala and taste authentic ceremonial-grade matcha prepared the traditional way.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}