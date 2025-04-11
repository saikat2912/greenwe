export default function AIChatbotsPage() {
    return (
      <div className="min-h-screen px-6 py-12 bg-white text-gray-900">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-extrabold mb-4 text-indigo-700">AI Chatbots</h1>
          <p className="text-lg mb-6">
            We build custom AI chatbots powered by GPT to automate support, answer queries, and assist customers 24/7.
          </p>
  
          <ul className="list-disc list-inside space-y-2 mb-10 text-gray-800">
            <li>Multilingual support</li>
            <li>Knowledge base integration</li>
            <li>Live handoff to agents</li>
            <li>Embed anywhere (website, WhatsApp, etc.)</li>
          </ul>
  
          <div className="bg-gray-50 border-l-4 border-indigo-500 p-6 rounded shadow">
            <h2 className="text-2xl font-semibold mb-2 text-indigo-600">Example Project: SmartHelp Bot</h2>
            <p className="text-gray-700">
              A chatbot for an education startup that guides users through course selection, answers FAQs, and helps schedule calls with counselors. Deployed on their website and WhatsApp.
            </p>
          </div>
        </div>
      </div>
    );
  }
  