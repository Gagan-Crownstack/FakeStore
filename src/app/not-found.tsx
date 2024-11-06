"use client";
import Link from "next/link";

export const metadata = {
  title: "404 - Page Not Found",
};

export default function NotFound() {
  return (
    <html>
      <body>
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
          <div className="text-center px-4">
            <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold text-gray-800">
                Page not found
              </h2>
              <p className="text-gray-600 max-w-lg mx-auto">
                Sorry, we couldn't find the page you're looking for. The page
                might have been removed, had its name changed, or is temporarily
                unavailable.
              </p>
              <div className="flex justify-center gap-4">
                <Link
                  href="/"
                  className="inline-flex items-center px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                >
                  Go back home
                </Link>
                <button
                  onClick={() => window.history.back()}
                  className="inline-flex items-center px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Go back
                </button>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
