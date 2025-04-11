export default function DataVisualizationPage() {
    return (
      <div className="min-h-screen px-6 py-12 bg-white text-gray-900">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-extrabold mb-4 text-indigo-700">Data Visualization</h1>
          <p className="text-lg mb-6">
            We create beautiful and interactive dashboards that help you understand your data and make informed decisions.
          </p>
  
          <ul className="list-disc list-inside space-y-2 mb-10 text-gray-800">
            <li>Dynamic charts & graphs</li>
            <li>Real-time updates</li>
            <li>Custom KPI dashboards</li>
            <li>Admin-friendly interfaces</li>
          </ul>
  
          <div className="bg-gray-50 border-l-4 border-indigo-500 p-6 rounded shadow">
            <h2 className="text-2xl font-semibold mb-2 text-indigo-600">Example Project: SalesPulse</h2>
            <p className="text-gray-700">
              A real-time sales dashboard for a retail chain, showing revenue, customer footfall, and product trends across multiple stores.
            </p>
          </div>
        </div>
      </div>
    );
  }
  