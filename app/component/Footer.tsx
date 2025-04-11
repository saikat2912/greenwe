// components/Footer.tsx

export default function Footer() {
    return (
      <footer className="bg-gray-100 text-gray-700 py-8 mt-20">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-lg font-semibold mb-2">Greenwe</h3>
          <p className="text-sm mb-4">
            Building future-ready AI and web solutions for modern businesses.
          </p>
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Greenwe. All rights reserved.
          </p>
        </div>
      </footer>
    );
  }
  