export default function WebAppsPage() {
    return (
      <div className="min-h-screen px-6 py-12 bg-white text-gray-900">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-extrabold mb-4 text-indigo-700">Custom Web Apps</h1>
          <p className="text-lg mb-6">
            We develop powerful, scalable web applications customized for your unique business processes.
          </p>
  
          <ul className="list-disc list-inside space-y-2 mb-10 text-gray-800">
            <li>CRMs, booking apps, school portals</li>
            <li>API integrations</li>
            <li>User roles and permissions</li>
            <li>Admin dashboards</li>
          </ul>
  
          <div className="bg-gray-50 border-l-4 border-indigo-500 p-6 rounded shadow">
            <h2 className="text-2xl font-semibold mb-2 text-indigo-600">Example Project: CoachConnect</h2>
            <p className="text-gray-700">
              A trainer-client management platform where fitness coaches can onboard clients, assign workout routines, and track progress via dashboards.
            </p>
          </div>
        </div>
      </div>
    );
  }
  