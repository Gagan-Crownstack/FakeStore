"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ProductNotFound() {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center space-y-6 max-w-md">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-gray-900">
            Product Not Found
          </h1>
          <p className="text-gray-500">
            We couldn't find the product you're looking for. It might have been
            removed or is temporarily unavailable.
          </p>
        </div>

        <div className="space-y-4">
          <div className="text-sm text-gray-600">You can try:</div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors"
            >
              Back to Home
            </Link>
            <button
              onClick={goBack}
              type="button"
              className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Go Back
            </button>
          </div>
        </div>

        <div className="pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-600">
            Need help? Contact our support team
          </p>
        </div>
      </div>
    </div>
  );
}
