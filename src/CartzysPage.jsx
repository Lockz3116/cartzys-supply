// Fully working CartzysPage - homepage loads with perfect seamless marquee and upgraded UI
import React from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';

const products = [
  {
    title: 'Resell Blueprint: Full Course',
    image: '/images/resell-blueprint.png',
    price: '$49.99',
    original: '$199.99',
    subtitle: '🔥 Best Seller',
    stripe: 'https://buy.stripe.com/7sY9AL0IIgiD5TNcrMbfO08',
    details: `The ultimate beginner-to-pro flipping course. Learn how to start, scale, and automate your reselling business with zero prior experience.

You’ll get:
• 30+ HD video lessons walking you through setup to sales
• Secret vendor list with plug pricing
• Monthly strategy updates
• Templates, scripts, and checklists

Perfect for anyone serious about resell income in 2025.`
  },
  {
    title: 'All Supplier Bundle',
    image: '/images/all-suppliers.png',
    price: '$39.99',
    original: '$99.99',
    subtitle: '💼 Most Value',
    stripe: 'https://buy.stripe.com/5kQaEPezyc2n3LF1N8bfO09',
    details: `Get every trusted plug in one bundle.

Includes:
• Reselling Starter Guide
• 2x Watch Vendors
• Clothes + Tech Vendors
• Cologne, Sneaker, Bag suppliers

Trusted by 700+ full-time flippers. Real plugs, low minimums, high ROI.`
  },
  {
    title: 'Fragrance Plug Guide',
    image: '/images/fragrance-guide.png',
    price: '$14.99',
    original: '$49.99',
    subtitle: '🔥 Trending',
    stripe: 'https://buy.stripe.com/5kQbITezyeavgyrbnIbfO0a',
    details: `Smell like $1,000 for $14.99. Unlock access to premium plug vendors for:

• Creed Aventus, Dior Sauvage, Baccarat Rouge
• Bulk pricing for personal use or flipping
• Same scent — fraction of the cost

Instant download. Real tested vendors.`
  },
  {
    title: 'Sneaker Plug',
    image: '/images/sneaker-plug.png',
    price: '$29.99',
    original: '$79.99',
    subtitle: '🏃️‍♂️ Fast Shipping',
    stripe: 'https://buy.stripe.com/7sYfZ9ezy6I3dmf8bwbfO0b',
    details: `The #1 sneaker resale source.

What’s inside:
• 1:1 plug vendors for Yeezys, Jordans, Dunks
• Verified quality + fast shipping
• Connect direct, no markup

Over 100+ flippers using this to move heat weekly.`
  },
  {
    title: 'Custom Vendor Request',
    image: '/images/custom-vendor.png',
    price: '$19.99',
    original: '$59.99',
    subtitle: '💬 Tailored Plug',
    stripe: 'https://buy.stripe.com/dRmcMXezyaYjgyr1N8bfO0c',
    details: `Can’t find a specific product?
We’ll find the plug for you within 24 hours.

Ideal for:
• Niche or rare items
• Private label brand owners
• Exclusive resellers

Message us post-purchase — we’ll hunt it down.`
  },
  {
    title: 'Starter Flip Guide',
    image: '/images/starter-guide.png',
    price: '$9.99',
    original: '$39.99',
    subtitle: '⚡ Quick Start',
    stripe: 'https://buy.stripe.com/cNi5kv8ba9UfcibbnIbfO07',
    details: `Want to flip with $50 or less?

This mini-guide breaks down:
• Best beginner flips by category
• Where to source them cheap
• Sell tactics that work fast

Fast wins, fast cash. Perfect side hustle to test the waters.`
  }
];

const faqs = [
  {
    question: 'How will I receive the links?',
    answer: 'Once you purchase, the vendor links are INSTANTLY sent through email'
  },
  {
    question: 'Whats does buying a vendor get me?',
    answer: 'Buying a vendor gives you instant access to a trusted, reliable supplier that sells quality products for low. This allows you to buy products for cheap and sell them for more, making a profit.'
  },
  {
    question: 'Why should i choose your vendors over other resellers?',
    answer: 'I started reselling 7 years ago, and after years worth of time and thousands invested in testing hundreds of vendors I managed to find the best suppliers with good prices and high quality products. Unlike other resellers I personally have access to the best high quality vendors in the world'
  },
  {
    question: 'How will I receive access to the vendors?',
    answer: 'After you complete your purchase the vendor will be emailed to you immediately. Make sure to click the “Download” button to get access'
  },
  {
    question: 'Do the vendors ship worldwide?',
    answer: 'Yes! My vendors ship worldwide, which means you don’t have to worry about not being able to resell in your country.'
  },
  {
    question: 'What if i never got the links?',
    answer: 'The vendor links are sent to your email and the confirmation page immediately after purchasing. Make sure you click the “Download” button to get access. If in a rare case you didn’t receive them, please contact @cartzys on Instagram. Please provide proof of purchase and I will be happy to send them to you immediately!'
  },
  {
    question: 'How much do the vendors charge for products?',
    answer: 'The vendors charge anywhere from $20–$90 per product. Some are cheaper than others, this depends on the product.'
  }
];

export default function CartzysPage() {
  const bannerItems = [
    'INSTANT DELIVERY 📬',
    '50% OFF ALL SUPPLIER BUNDLE ✅',
    'NOT A PHYSICAL PRODUCT 🔥',
    'JOIN RESELL PLUGS 🛒'
  ];

  return (
    <div className="relative text-white min-h-screen bg-[url('/images/bg-money.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="w-full bg-black overflow-hidden border-b border-zinc-800">
        <div className="animate-marquee-xl flex whitespace-nowrap gap-16 text-white text-xs sm:text-sm py-2 px-4">
          {Array.from({ length: 10 }).flatMap((_, i) =>
            bannerItems.map((item, index) => (
              <span key={`${i}-${index}`} className="px-4">
                {item}
              </span>
            ))
          )}
        </div>
      </div>

      <header className="text-center py-10">
        <img src="/images/logo.png" alt="Cartzys Logo" className="mx-auto w-24 mb-2" />
        <h1 className="text-lg font-semibold text-gray-300">Premium Vendors </h1>
      </header>

      <main className="px-4 sm:px-6 pb-20 max-w-6xl mx-auto">
        <h2 className="text-center text-xl font-semibold uppercase tracking-widest mb-8">THE PLUGS.</h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {products.map((p, idx) => (
            <div key={idx} className="bg-zinc-900 p-4 rounded-xl shadow-md text-center relative">
              <div className="absolute top-2 right-2 bg-green-600 text-xs text-white font-bold px-2 py-1 rounded shadow-md shadow-green-400/40">{p.subtitle}</div>
              <img src={p.image} alt={p.title} className="w-full h-40 sm:h-44 object-contain mb-3" />
              <h3 className="text-white font-bold text-md mb-1 leading-tight">{p.title}</h3>
              <p className="text-gray-500 text-sm line-through">{p.original}</p>
              <p className="text-blue-400 text-lg font-bold drop-shadow-[0_0_5px_rgba(66,133,244,0.8)]">{p.price}</p>
              <details className="text-xs mt-2 cursor-pointer">
                <summary className="text-green-400 underline">What you'll get</summary>
                <div className="text-gray-300 mt-2 bg-green-900/30 p-2 rounded text-left whitespace-pre-line text-[0.75rem] leading-relaxed">
                  {p.details}
                </div>
              </details>
              <a href={p.stripe} target="_blank" rel="noreferrer">
                <button className="w-full mt-3 bg-[#4285F4] hover:bg-blue-700 px-4 py-2 rounded font-semibold text-white text-xs uppercase shadow-lg shadow-blue-500/30">Buy Now</button>
              </a>
            </div>
          ))}
        </div>

        <section className="mt-20 max-w-2xl mx-auto">
          <h3 className="text-center text-lg font-semibold mb-6 uppercase text-white tracking-wide">FREQUENTLY ASKED.</h3>
          <div className="space-y-4">
            {faqs.map((f, idx) => (
              <details key={idx} className="bg-zinc-800 p-4 rounded-md">
                <summary className="cursor-pointer font-medium text-white flex justify-between items-center gap-2">
                  <div className="flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-blue-400" />
                    <span>{f.question}</span>
                  </div>
                  <ChevronDown className="w-4 h-4 text-gray-500" />
                </summary>
                <p className="text-sm text-gray-400 mt-2 leading-relaxed">{f.answer}</p>
              </details>
            ))}
          </div>
        </section>
      </main>

      <footer className="text-center py-6 text-xs text-gray-500">
        Digital product — instant access. All sales final. | © 2025 Cartzys Supply
      </footer>
    </div>
  );
}
