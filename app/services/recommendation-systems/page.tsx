export default function RecommendationSystemsPage() {
    return (
      <div className="min-h-screen px-6 py-12 bg-white text-gray-900">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-extrabold mb-4 text-indigo-700">Recommendation Systems</h1>
          <p className="text-lg mb-6">
            Deliver smarter user experiences with personalized content or product recommendations powered by AI.
          </p>
  
          <ul className="list-disc list-inside space-y-2 mb-10 text-gray-800">
            <li>Collaborative & content-based filtering</li>
            <li>Real-time suggestions</li>
            <li>Integration with any platform</li>
            <li>Analytics dashboard</li>
          </ul>
  
          <div className="bg-gray-50 border-l-4 border-indigo-500 p-6 rounded shadow">
            <h2 className="text-2xl font-semibold mb-2 text-indigo-600">Example Project: ReadNext</h2>
            <p className="text-gray-700">
              A book recommendation engine for an online library that suggests titles based on reading history, genre preferences, and trending books.
            </p>
          </div>
        </div>
      </div>
    );
  }
  