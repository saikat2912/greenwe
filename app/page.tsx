import React from "react";
import { Button } from "@/component/ui/button";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="py-20 text-center bg-gray-100">
        <h1 className="text-5xl font-bold mb-4">Empowering Your Digital Future</h1>
        <p className="text-lg mb-6 max-w-xl mx-auto">
          We provide top-notch AI solutions and web development services to help businesses grow smarter and faster.
        </p>
        <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">Lets Build Together</Button>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Our Services</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <Link href="/services/ai-chatbots" className="p-6 shadow rounded-lg border text-center hover:bg-gray-50">
              <h3 className="text-xl font-semibold mb-2">AI Chatbots</h3>
              <p>Custom GPT-powered chatbots for support and automation.</p>
            </Link>
            <Link href="/services/recommendation-systems" className="p-6 shadow rounded-lg border text-center hover:bg-gray-50">
              <h3 className="text-xl font-semibold mb-2">Recommendation Systems</h3>
              <p>Boost engagement with personalized content/product suggestions.</p>
            </Link>
            <Link href="/services/data-visualization" className="p-6 shadow rounded-lg border text-center hover:bg-gray-50">
              <h3 className="text-xl font-semibold mb-2">Data Visualization</h3>
              <p>Interactive dashboards for smarter business insights.</p>
            </Link>
            <Link href="/services/business-websites" className="p-6 shadow rounded-lg border text-center hover:bg-gray-50">
              <h3 className="text-xl font-semibold mb-2">Business Websites</h3>
              <p>Responsive, fast-loading, and SEO-optimized websites.</p>
            </Link>
            <Link href="/services/ecommerce" className="p-6 shadow rounded-lg border text-center hover:bg-gray-50">
              <h3 className="text-xl font-semibold mb-2">E-commerce Solutions</h3>
              <p>Online stores with full cart, payment, and dashboard features.</p>
            </Link>
            <Link href="/services/web-apps" className="p-6 shadow rounded-lg border text-center hover:bg-gray-50">
              <h3 className="text-xl font-semibold mb-2">Custom Web Apps</h3>
              <p>CRMs, portals, and dynamic tools tailored to your needs.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-indigo-600 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
        <p className="mb-6">Lets discuss your idea and turn it into reality.</p>
        <a href="mailto:your@email.com" className="bg-white text-indigo-700 font-medium px-6 py-2 rounded hover:bg-gray-200">
          Contact Us
        </a>
      </section>
    </main>
  );
}
