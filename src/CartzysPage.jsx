// Fully working CartzysPage - homepage loads with perfect seamless marquee
import React from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';

const products = [
  {
    title: 'Resell Blueprint: Full Course',
    image: '/images/resell-blueprint.png',
    price: '$99.99',
    original: '$199.99',
    subtitle: '🔥 Best Seller',
    stripe: 'https://buy.stripe.com/aFa14f1MM2rN5TNdvQbfO01',
    details: 'Full course teaching you how to flip products from scratch using real suppliers. Updated monthly.'
  },
  {
    title: 'All Supplier Bundle',
    image: '/images/all-suppliers.png',
    price: '$49.99',
    original: '$99.99',
    subtitle: '💼 Most Value',
    stripe: 'https://buy.stripe.com/eVqaEPfDC5DZeqjfDYbfO02',
    details: 'Includes every verified vendor across all categories: tech, fragrance, sneakers & more.'
  },
  {
    title: 'Fragrance Plug Guide',
    image: '/images/fragrance-guide.png',
    price: '$19.99',
    original: '$49.99',
    subtitle: '🔥 Trending',
    stripe: 'https://buy.stripe.com/7sYdR1ezyeav3LF4ZkbfO03',
    details: 'Direct vendors for high-demand fragrances including Creed, Dior, and more.'
  },
  {
    title: 'Sneaker Plug',
    image: '/images/sneaker-plug.png',
    price: '$39.99',
    original: '$79.99',
    subtitle: '🏃️‍♂️ Fast Shipping',
    stripe: 'https://buy.stripe.com/28EdR11MMgiD95ZbnIbfO04',
    details: 'Verified suppliers for 1:1 sneakers with fast shipping and high quality.'
  },
  {
    title: 'Custom Vendor Request',
    image: '/images/custom-vendor.png',
    price: '$29.99',
    original: '$59.99',
    subtitle: '💬 Tailored Plug',
    stripe: 'https://buy.stripe.com/28EfZ92QQfezdmf2RcbfO05',
    details: 'Can’t find what you need? Submit a custom request and we’ll source it.'
  },
  {
    title: 'Starter Flip Guide',
    image: '/images/starter-guide.png',
    price: '$14.99',
    original: '$39.99',
    subtitle: '⚡ Quick Start',
    stripe: 'https://buy.stripe.com/00waEPfDCaYj3LF1N8bfO06',
    details: 'Get started flipping with minimal budget and easy wins.'
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
    answer: 'The vendors charge anywhere from $20–$90 per product. Some are cheaper than others, this depends on the product'
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
              <div className="absolute top-2 right-2 bg-blue-600 text-xs text-white font-bold px-2 py-1 rounded shadow-md shadow-blue-400/40">SALE</div>
              <img src={p.image} alt={p.title} className="w-full h-40 sm:h-44 object-contain mb-3" />
              <h3 className="text-white font-bold text-md mb-1 leading-tight">{p.title}</h3>
              <p className="text-gray-500 text-sm line-through">{p.original}</p>
              <p className="text-blue-400 text-lg font-bold drop-shadow-[0_0_5px_rgba(66,133,244,0.8)]">{p.price}</p>
              <details className="text-xs mt-2 cursor-pointer">
                <summary className="text-blue-500 underline">What you'll get</summary>
                <p className="text-gray-400 mt-1 text-left">{p.details}</p>
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
