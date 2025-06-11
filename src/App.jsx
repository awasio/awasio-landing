import React from "react";

export default function App() {
  return (
    <main className="bg-white text-gray-900 w-full min-h-screen flex flex-col items-center justify-between px-6 py-12">
        <div className="text-center max-w-4xl">
          <img
            src="/public/logo-awasio.png"
            alt="AWASIO Logo"
            className="mx-auto w-48 mb-6"
          />
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
            Your Property Investment is Our Priority.
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            AWASIO empowers NRIs to <span className="font-semibold">Buy</span>, <span className="font-semibold">Sell</span>, <span className="font-semibold">Invest</span>, and <span className="font-semibold">Manage</span> their properties in India—seamlessly, securely, and transparently.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-2xl shadow-lg transition">
              Get Started
            </button>
            <button className="border border-gray-300 hover:border-gray-500 text-gray-700 font-medium py-3 px-6 rounded-2xl transition">
              Learn More
            </button>
          </div>
        </div>

        <section className="mt-20 w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="text-left">
            <h2 className="text-2xl font-bold mb-4">Why AWASIO?</h2>
            <ul className="space-y-4 text-gray-700">
              <li>✅ Real-time property insights and management - live updates</li>
              <li>✅ Property development and constrctuions based on ratios - eg: 50-50, 60-40</li>
              <li>✅ End-to-end legal and documentation support - transparent and secure</li>
              <li>✅ Blockchain-secured smart contracts - future-proof</li>
              <li>✅ On-demand property visits, maintain, Rent collections and Manage - One stop shop</li>
            </ul>
          </div>
          <div>
            <video
              src="/public/intro-awasio.mp4"
              controls
              className="rounded-2xl w-full shadow-lg"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </section>

        <section className="mt-24 w-full max-w-5xl">
          <h2 className="text-2xl font-bold text-center mb-8">What Our Users Say</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="p-6 bg-gray-100 rounded-xl shadow">
              <p className="text-gray-800 italic">
                “AWASIO helped me sell my Hyderabad apartment without stepping out of London. Seamless and secure.”
              </p>
              <div className="mt-4 text-sm text-gray-500">- Anjali R., UK</div>
            </div>
            <div className="p-6 bg-gray-100 rounded-xl shadow">
              <p className="text-gray-800 italic">
                “From investment tracking to tenant issues, AWASIO takes care of it all. Brilliant service!”
              </p>
              <div className="mt-4 text-sm text-gray-500">- Rohit M., UAE</div>
            </div>
            <div className="p-6 bg-gray-100 rounded-xl shadow">
              <p className="text-gray-800 italic">
                “The app gave me real-time updates and peace of mind. I finally feel in control of my property back home.”
              </p>
              <div className="mt-4 text-sm text-gray-500">- Deepika S., Canada</div>
            </div>
          </div>
        </section>

        <footer className="mt-20 text-sm text-gray-400 text-center">
          © {new Date().getFullYear()} AWASIO. All rights reserved.
        </footer>
      </main>
  );
}