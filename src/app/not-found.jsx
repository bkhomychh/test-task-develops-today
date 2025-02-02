import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <main className="flex flex-grow items-center justify-center text-center">
      <div className="max-w-lg p-6  rounded-lg ">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-6">
          Oops! The page you are looking for doesn't exist.
        </p>
        <Link
          href="/"
          className="inline-block bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
          replace>
          Go Back to Home
        </Link>
      </div>
    </main>
  );
}
