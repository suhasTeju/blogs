import React from "react";
import { Link } from "@heroui/link";
import { Card, CardBody } from "@heroui/card";
import { Divider } from "@heroui/divider";
import { button as buttonStyles } from "@heroui/theme";
import { Metadata } from "next";
import Image from "next/image";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Authentic Japanese Tea Ceremony in Bangalore: Complete Guide to Chanoyu Tradition at Mocha and Matcha",
  description: "Experience authentic Japanese tea ceremony (chanoyu) in Bangalore. Learn the 400-year-old tradition, proper etiquette, and spiritual significance at Mocha and Matcha Cafe Koramangala.",
  keywords: "Japanese tea ceremony Bangalore, chanoyu tradition India, tea ceremony classes Koramangala, authentic Japanese culture Bangalore, matcha ceremony, traditional tea preparation, Japanese tea etiquette, mindfulness practices Bangalore",
  openGraph: {
    title: "Authentic Japanese Tea Ceremony in Bangalore: Complete Guide to Chanoyu Tradition",
    description: "Experience the 400-year-old Japanese tea ceremony tradition in the heart of Bangalore. Learn proper etiquette, spiritual significance, and authentic preparation methods.",
    url: "https://blog.mochaandmatcha.in/japanese-tea-ceremony-bangalore-authentic-experience",
    siteName: "Mocha and Matcha Cafe Blog",
    type: "article",
  },
  alternates: {
    canonical: "https://blog.mochaandmatcha.in/japanese-tea-ceremony-bangalore-authentic-experience",
  },
};

export default function JapaneseTeaCeremony() {
  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Authentic Japanese Tea Ceremony in Bangalore: Complete Guide to Chanoyu Tradition",
            "description": "Comprehensive guide to experiencing authentic Japanese tea ceremony in Bangalore, including history, etiquette, spiritual significance, and where to participate.",
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
              "@id": "https://blog.mochaandmatcha.in/japanese-tea-ceremony-bangalore-authentic-experience"
            }
          })
        }}
      />

      {/* Hero Section */}
      <section className="relative w-full h-[75vh] overflow-hidden">
        <Image
          src="/images/japanese-tea-ceremony.svg"
          alt="Traditional Japanese tea ceremony setup with chawan, chasen, and ceremonial matcha in authentic setting"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/70 flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-5xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Authentic <span className="text-green-300">Japanese Tea Ceremony</span> in Bangalore
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed">
              Experience 400 Years of Chanoyu Tradition in the Heart of Koramangala
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                className={buttonStyles({
                  color: "success",
                  radius: "full",
                  variant: "shadow",
                  size: "lg",
                })}
                href="#ceremony-guide"
              >
                Learn the Tradition
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
                Book Tea Ceremony
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
              <p>Kyoto-Trained Tea Masters • Koramangala</p>
            </div>
          </div>
          <div className="ml-auto text-right">
            <p>Published: August 16, 2024</p>
            <p>15 min read • Cultural Experience</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 pb-12">
        
        {/* Introduction */}
        <section id="ceremony-guide" className="mb-16">
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              From Kyoto to Koramangala: Bringing Ancient Wisdom to Modern Bangalore
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
              <div>
                <p className="text-lg mb-6 leading-relaxed">
                  In the bustling tech hub of Bangalore, where innovation moves at lightning speed, there exists a timeless practice that teaches us to slow down, find presence, and discover beauty in simplicity. The Japanese tea ceremony, or <em>chanoyu</em> (茶の湯), literally "hot water for tea," is far more than just preparing and drinking matcha—it's a moving meditation, a cultural bridge, and a pathway to mindfulness.
                </p>
                
                <p className="text-lg mb-6 leading-relaxed">
                  At <strong>Mocha and Matcha Cafe in Koramangala</strong>, our Kyoto-trained tea masters bring this 400-year-old tradition to life every Saturday, offering Bangalore's first authentic Japanese tea ceremony experience. What makes our sessions unique isn't just the ceremonial-grade matcha or traditional tools—it's our commitment to preserving the true spirit and philosophy behind this sacred practice.
                </p>
              </div>
              
              <div className="relative h-80 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/cafe-interior-japanese.svg"
                  alt="Japanese-inspired interior of Mocha and Matcha Cafe showing traditional tea ceremony space"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="bg-red-100 border-l-4 border-red-500 p-6 rounded-r-lg">
              <p className="text-red-800">
                <strong>🎌 Cultural Respect:</strong> We approach the tea ceremony with deep reverence for Japanese culture. Our ceremonies are led by masters who trained under 15th-generation tea ceremony instructors in Kyoto, ensuring authentic transmission of this sacred tradition.
              </p>
            </div>
          </div>
        </section>

        <Divider className="my-12" />

        {/* History and Philosophy */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">
            The Soul of Chanoyu: Philosophy Behind the Practice
          </h2>
          
          <div className="bg-gray-50 rounded-2xl p-8 mb-10">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">四規 (Shi-Ki): The Four Principles of Tea Ceremony</h3>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card className="border-2 border-red-200 bg-red-50 shadow-lg">
                <CardBody className="p-8">
                  <h4 className="text-2xl font-bold mb-4 text-red-800 flex items-center">
                    <span className="mr-3 text-3xl">和</span> Wa (Harmony)
                  </h4>
                  <p className="text-red-700 mb-4">
                    Harmony with others, with nature, and with the utensils. In our Bangalore sessions, we emphasize how this principle applies to modern life—finding balance between technology and tradition, work and rest.
                  </p>
                  <div className="bg-white rounded-lg p-4">
                    <h5 className="font-bold text-red-700 mb-2">Modern Application:</h5>
                    <p className="text-sm text-red-600">Creating harmonious relationships in Bangalore's diverse, multicultural environment</p>
                  </div>
                </CardBody>
              </Card>

              <Card className="border-2 border-blue-200 bg-blue-50 shadow-lg">
                <CardBody className="p-8">
                  <h4 className="text-2xl font-bold mb-4 text-blue-800 flex items-center">
                    <span className="mr-3 text-3xl">敬</span> Kei (Respect)
                  </h4>
                  <p className="text-blue-700 mb-4">
                    Respect for all participants, regardless of social status. This principle resonates deeply in Bangalore's professional culture, where hierarchy often defines interactions.
                  </p>
                  <div className="bg-white rounded-lg p-4">
                    <h5 className="font-bold text-blue-700 mb-2">Modern Application:</h5>
                    <p className="text-sm text-blue-600">Practicing equality and mindful communication in professional and personal relationships</p>
                  </div>
                </CardBody>
              </Card>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 border-green-200 bg-green-50 shadow-lg">
                <CardBody className="p-8">
                  <h4 className="text-2xl font-bold mb-4 text-green-800 flex items-center">
                    <span className="mr-3 text-3xl">清</span> Sei (Purity)
                  </h4>
                  <p className="text-green-700 mb-4">
                    Physical and spiritual cleanliness. Not just the ceremonial washing of hands and mouth, but purification of mind and heart—essential in our digitally overwhelmed age.
                  </p>
                  <div className="bg-white rounded-lg p-4">
                    <h5 className="font-bold text-green-700 mb-2">Modern Application:</h5>
                    <p className="text-sm text-green-600">Digital detox, mental clarity, and creating clean, focused spaces for productivity</p>
                  </div>
                </CardBody>
              </Card>

              <Card className="border-2 border-purple-200 bg-purple-50 shadow-lg">
                <CardBody className="p-8">
                  <h4 className="text-2xl font-bold mb-4 text-purple-800 flex items-center">
                    <span className="mr-3 text-3xl">寂</span> Jaku (Tranquility)
                  </h4>
                  <p className="text-purple-700 mb-4">
                    Inner peace achieved through the practice of the first three principles. In Bangalore's fast-paced environment, this tranquility becomes a refuge and source of strength.
                  </p>
                  <div className="bg-white rounded-lg p-4">
                    <h5 className="font-bold text-purple-700 mb-2">Modern Application:</h5>
                    <p className="text-sm text-purple-600">Stress management, emotional regulation, and finding peace amid urban chaos</p>
                  </div>
                </CardBody>
              </Card>
            </div>
          </div>

          <div className="bg-amber-50 rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-4 text-amber-800">🏯 Historical Context: From Sen no Rikyū to Bangalore</h3>
            <p className="text-lg mb-4 leading-relaxed">
              The tea ceremony as we know it was refined by Sen no Rikyū (1522-1591), who transformed it from an elaborate display of wealth into a spiritual practice emphasizing simplicity and mindfulness. His philosophy of <em>wabi-sabi</em>—finding beauty in imperfection and impermanence—offers profound wisdom for modern life.
            </p>
            <p className="text-lg leading-relaxed">
              At our Koramangala location, we honor this lineage while making the practice accessible to Bangalore's diverse community. Our sessions blend traditional authenticity with cultural sensitivity, creating a space where ancient wisdom meets contemporary needs.
            </p>
          </div>
        </section>

        <Divider className="my-12" />

        {/* The Ceremony Steps */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">
            The Sacred Choreography: Step-by-Step Ceremony Guide
          </h2>
          
          <div className="mb-10">
            <div className="bg-blue-50 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold mb-6 text-blue-800">お手前 (Otemae): The Prescribed Movements</h3>
              <p className="text-lg mb-4 leading-relaxed">
                Every gesture in the tea ceremony has meaning and purpose, refined over centuries to create maximum harmony and beauty. At Mocha and Matcha Cafe, we teach these movements not as rigid rules, but as meditation in motion.
              </p>
            </div>

            <div className="space-y-8">
              <Card className="border-l-4 border-green-500 bg-white shadow-lg">
                <CardBody className="p-8">
                  <h4 className="text-xl font-bold mb-4 text-green-800 flex items-center">
                    <span className="mr-3 text-2xl">1️⃣</span> 入席 (Nyūseki) - Entering the Tea Space
                  </h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-bold text-green-700 mb-3">Traditional Elements:</h5>
                      <ul className="space-y-2 text-green-600">
                        <li>• Remove shoes and bow before entering</li>
                        <li>• Admire the hanging scroll (kakemono)</li>
                        <li>• Examine the flower arrangement (chabana)</li>
                        <li>• Kneel in seiza position (formal sitting)</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-bold text-green-700 mb-3">Bangalore Adaptation:</h5>
                      <ul className="space-y-2 text-green-600">
                        <li>• Mindful transition from busy street to sacred space</li>
                        <li>• Appreciation of seasonal elements in our decor</li>
                        <li>• Modified sitting positions for comfort</li>
                        <li>• Gradual introduction to traditional etiquette</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-4 bg-green-100 rounded-lg p-4">
                    <p className="text-green-800 text-sm">
                      <strong>Mindfulness Focus:</strong> This phase teaches presence and transition—crucial skills for busy professionals transitioning from work mode to personal time.
                    </p>
                  </div>
                </CardBody>
              </Card>

              <Card className="border-l-4 border-blue-500 bg-white shadow-lg">
                <CardBody className="p-8">
                  <h4 className="text-xl font-bold mb-4 text-blue-800 flex items-center">
                    <span className="mr-3 text-2xl">2️⃣</span> 道具拝見 (Dōgu Haiken) - Appreciating the Utensils
                  </h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-bold text-blue-700 mb-3">Traditional Utensils:</h5>
                      <ul className="space-y-2 text-blue-600">
                        <li>• <strong>Chawan (茶碗):</strong> Tea bowl, often handcrafted and irregular</li>
                        <li>• <strong>Chasen (茶筅):</strong> Bamboo whisk with 120 tines</li>
                        <li>• <strong>Chashaku (茶杓):</strong> Bamboo tea scoop</li>
                        <li>• <strong>Natsume (棗):</strong> Tea caddy for matcha powder</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-bold text-blue-700 mb-3">Cultural Significance:</h5>
                      <ul className="space-y-2 text-blue-600">
                        <li>• Each utensil has history and provenance</li>
                        <li>• Imperfections are celebrated (wabi-sabi)</li>
                        <li>• Seasonal appropriateness is considered</li>
                        <li>• Function and beauty are unified</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-4 bg-blue-100 rounded-lg p-4">
                    <p className="text-blue-800 text-sm">
                      <strong>Modern Lesson:</strong> Learning to appreciate craftsmanship and find beauty in everyday objects—a practice that enriches daily life in our mass-produced world.
                    </p>
                  </div>
                </CardBody>
              </Card>

              <Card className="border-l-4 border-purple-500 bg-white shadow-lg">
                <CardBody className="p-8">
                  <h4 className="text-xl font-bold mb-4 text-purple-800 flex items-center">
                    <span className="mr-3 text-2xl">3️⃣</span> 清め (Kiyome) - Ritual Purification
                  </h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-bold text-purple-700 mb-3">Purification Process:</h5>
                      <ul className="space-y-2 text-purple-600">
                        <li>• Ceremonial cleaning of each utensil</li>
                        <li>• Specific movements for each item</li>
                        <li>• Use of fukusa (silk cloth) for cleaning</li>
                        <li>• Mindful, deliberate actions throughout</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-bold text-purple-700 mb-3">Symbolic Meaning:</h5>
                      <ul className="space-y-2 text-purple-600">
                        <li>• Physical cleaning represents mental clearing</li>
                        <li>• Preparation of space and self</li>
                        <li>• Respect for tools and tradition</li>
                        <li>• Creating sacred from ordinary</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-4 bg-purple-100 rounded-lg p-4">
                    <p className="text-purple-800 text-sm">
                      <strong>Contemporary Application:</strong> This practice teaches mindful preparation and the importance of creating clean, organized spaces—essential for mental clarity in our cluttered world.
                    </p>
                  </div>
                </CardBody>
              </Card>

              <Card className="border-l-4 border-orange-500 bg-white shadow-lg">
                <CardBody className="p-8">
                  <h4 className="text-xl font-bold mb-4 text-orange-800 flex items-center">
                    <span className="mr-3 text-2xl">4️⃣</span> 点茶 (Tencha) - Preparing the Matcha
                  </h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-bold text-orange-700 mb-3">Preparation Steps:</h5>
                      <ul className="space-y-2 text-orange-600">
                        <li>• Warm the chawan with hot water</li>
                        <li>• Measure exactly 2 grams of ceremonial matcha</li>
                        <li>• Add 60ml of 80°C water in specific manner</li>
                        <li>• Whisk in "W" pattern for perfect foam</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-bold text-orange-700 mb-3">Sensory Experience:</h5>
                      <ul className="space-y-2 text-orange-600">
                        <li>• Sound of bamboo whisk against ceramic</li>
                        <li>• Aroma of fresh, high-quality matcha</li>
                        <li>• Visual beauty of jade-green foam</li>
                        <li>• Texture of perfectly whisked tea</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-4 bg-orange-100 rounded-lg p-4">
                    <p className="text-orange-800 text-sm">
                      <strong>Mastery Element:</strong> Perfect matcha requires practice and attention—teaching patience and the value of developing skills through repetition and mindfulness.
                    </p>
                  </div>
                </CardBody>
              </Card>

              <Card className="border-l-4 border-red-500 bg-white shadow-lg">
                <CardBody className="p-8">
                  <h4 className="text-xl font-bold mb-4 text-red-800 flex items-center">
                    <span className="mr-3 text-2xl">5️⃣</span> 饗応 (Kyōō) - Offering and Receiving
                  </h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-bold text-red-700 mb-3">Serving Protocol:</h5>
                      <ul className="space-y-2 text-red-600">
                        <li>• Present bowl with most beautiful side facing guest</li>
                        <li>• Guest receives with both hands and bow</li>
                        <li>• Rotate bowl 90° clockwise before drinking</li>
                        <li>• Three sips traditionally consumed</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-bold text-red-700 mb-3">Etiquette Meaning:</h5>
                      <ul className="space-y-2 text-red-600">
                        <li>• Mutual respect between host and guest</li>
                        <li>• Appreciation for hospitality</li>
                        <li>• Mindful consumption and gratitude</li>
                        <li>• Creating connection through shared ritual</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-4 bg-red-100 rounded-lg p-4">
                    <p className="text-red-800 text-sm">
                      <strong>Life Lesson:</strong> Learning gracious giving and receiving—skills that enhance all relationships and create deeper connections in our often superficial social interactions.
                    </p>
                  </div>
                </CardBody>
              </Card>
            </div>
          </div>
        </section>

        <Divider className="my-12" />

        {/* Benefits and Modern Application */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">
            Why Bangalore Professionals Are Embracing Tea Ceremony
          </h2>
          
          <div className="bg-gray-50 rounded-2xl p-8 mb-10">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Modern Benefits of Ancient Practice</h3>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <Card className="bg-white shadow-lg border-t-4 border-blue-500">
                <CardBody className="p-6">
                  <h4 className="text-lg font-bold mb-4 text-blue-800">🧘 Stress Reduction</h4>
                  <ul className="space-y-2 text-blue-600 text-sm">
                    <li>• 40% reduction in cortisol levels during ceremony</li>
                    <li>• Promotes parasympathetic nervous system activation</li>
                    <li>• Creates mental reset from work pressures</li>
                    <li>• Develops emotional regulation skills</li>
                  </ul>
                </CardBody>
              </Card>

              <Card className="bg-white shadow-lg border-t-4 border-green-500">
                <CardBody className="p-6">
                  <h4 className="text-lg font-bold mb-4 text-green-800">🎯 Enhanced Focus</h4>
                  <ul className="space-y-2 text-green-600 text-sm">
                    <li>• Improves sustained attention by 35%</li>
                    <li>• Develops single-pointed concentration</li>
                    <li>• Trains mind to be present-moment aware</li>
                    <li>• Enhances task-switching abilities</li>
                  </ul>
                </CardBody>
              </Card>

              <Card className="bg-white shadow-lg border-t-4 border-purple-500">
                <CardBody className="p-6">
                  <h4 className="text-lg font-bold mb-4 text-purple-800">🤝 Social Connection</h4>
                  <ul className="space-y-2 text-purple-600 text-sm">
                    <li>• Creates authentic interpersonal bonds</li>
                    <li>• Develops cultural sensitivity and awareness</li>
                    <li>• Provides shared meaningful experience</li>
                    <li>• Enhances communication and empathy</li>
                  </ul>
                </CardBody>
              </Card>
            </div>

            <div className="bg-yellow-100 border-l-4 border-yellow-500 p-6 rounded-r-lg">
              <h4 className="font-bold text-yellow-800 mb-3">💼 Professional Applications</h4>
              <p className="text-yellow-700">
                Many tech leaders in Bangalore report that tea ceremony principles improve their leadership skills, decision-making under pressure, and ability to create calm, focused work environments. The practice teaches patience, attention to detail, and respect for process—all valuable in professional settings.
              </p>
            </div>
          </div>
        </section>

        <Divider className="my-12" />

        {/* Tea Ceremony Philosophy */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">
            The Art of Tea Ceremony: More Than Just Drinking Tea
          </h2>
          
          <Card className="bg-gradient-to-br from-green-50 to-blue-50 border-0 shadow-lg">
            <CardBody className="p-8">
              <div className="bg-red-50 rounded-xl p-6 border-l-4 border-red-400">
                <h4 className="font-bold text-red-800 mb-3">🎎 The Philosophy Behind the Practice</h4>
                <p className="text-red-700 mb-3">
                  The Japanese tea ceremony represents centuries of refined culture, where every movement has meaning and every moment teaches mindfulness. This ancient practice brings together art, philosophy, and human connection in a single shared experience.
                </p>
                <p className="text-red-700 text-sm">
                  "In Bangalore's fast-paced environment, the tea ceremony offers something precious—a return to mindfulness, beauty, and human connection. Each ceremony is a bridge between ancient wisdom and modern needs."
                </p>
              </div>
            </CardBody>
          </Card>
        </section>

        {/* Conclusion */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-3xl p-10 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Experience Authentic Japanese Culture in Bangalore
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Join us for a transformative journey into the heart of Japanese tea ceremony tradition, where ancient wisdom meets modern mindfulness practice.
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
                📅 Book Tea Ceremony Session
              </Link>
              <Link
                isExternal
                className={buttonStyles({
                  color: "warning",
                  radius: "full",
                  variant: "bordered",
                  size: "lg",
                })}
                href={siteConfig.links.maps}
              >
                🗺️ Find Our Koramangala Location
              </Link>
            </div>
            
            <p className="text-orange-100 text-lg">
              Every Saturday, step away from the digital world and into a space of beauty, mindfulness, and authentic cultural connection.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}