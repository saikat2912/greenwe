export default function WebAppsPage() {
    return (
      <div className="min-h-screen p-10">
        <h1 className="text-4xl font-bold mb-4">Custom Web Apps</h1>
        <p className="text-lg mb-6">
          Need something more powerful than a website? We build custom web applications for any business logic.
        </p>
        <ul className="list-disc list-inside space-y-2 mb-10">
          <li>CRMs, booking apps, school portals</li>
          <li>API integrations</li>
          <li>User roles and permissions</li>
          <li>Admin dashboards</li>
        </ul>
  
        <h2 className="text-2xl font-semibold mb-2">Example Project</h2>
        <p>
          <strong>CoachConnect</strong> – A trainer-client management platform where fitness coaches can onboard clients, assign workout routines, and track progress via custom dashboards.
        </p>
      </div>
    );
  }
  