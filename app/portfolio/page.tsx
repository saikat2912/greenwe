import Link from "next/link";

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-indigo-700 text-center">Our Project Portfolio</h1>
        <p className="text-lg text-gray-600 text-center mb-12">
          Explore some of the impactful solutions we’ve built across AI and Web Development.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="p-6 rounded-lg border hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold mb-2 text-indigo-600">SmartHelp Bot</h2>
            <p className="text-gray-700 mb-2">
              An AI-powered education chatbot that assists students with course recommendations and schedules.
            </p>
            <Link
              href="/services/ai-chatbots"
              className="text-sm text-indigo-700 font-medium hover:underline"
            >
              View Related Service →
            </Link>
          </div>

          <div className="p-6 rounded-lg border hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold mb-2 text-indigo-600">ReadNext</h2>
            <p className="text-gray-700 mb-2">
              A personalized book recommendation system for readers based on their habits and genre preferences.
            </p>
            <Link
              href="/services/recommendation-systems"
              className="text-sm text-indigo-700 font-medium hover:underline"
            >
              View Related Service →
            </Link>
          </div>

          <div className="p-6 rounded-lg border hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold mb-2 text-indigo-600">SalesPulse</h2>
            <p className="text-gray-700 mb-2">
              Real-time dashboard for sales analytics across multiple stores with interactive charts and KPI monitoring.
            </p>
            <Link
              href="/services/data-visualization"
              className="text-sm text-indigo-700 font-medium hover:underline"
            >
              View Related Service →
            </Link>
          </div>

          <div className="p-6 rounded-lg border hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold mb-2 text-indigo-600">GreenRoots Landscaping</h2>
            <p className="text-gray-700 mb-2">
              A modern, SEO-optimized business website with services, gallery, and inquiry form for a landscaping company.
            </p>
            <Link
              href="/services/business-websites"
              className="text-sm text-indigo-700 font-medium hover:underline"
            >
              View Related Service →
            </Link>
          </div>

          <div className="p-6 rounded-lg border hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold mb-2 text-indigo-600">ArtCart</h2>
            <p className="text-gray-700 mb-2">
              A full-featured e-commerce platform for handmade products, with seller dashboards and secure payments.
            </p>
            <Link
              href="/services/ecommerce"
              className="text-sm text-indigo-700 font-medium hover:underline"
            >
              View Related Service →
            </Link>
          </div>

          <div className="p-6 rounded-lg border hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold mb-2 text-indigo-600">CoachConnect</h2>
            <p className="text-gray-700 mb-2">
              A coaching web app to manage clients, assign workouts, and track progress through interactive dashboards.
            </p>
            <Link
              href="/services/web-apps"
              className="text-sm text-indigo-700 font-medium hover:underline"
            >
              View Related Service →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
