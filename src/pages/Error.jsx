const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-bold mb-4">Oops!</h1>
        <p className="text-lg mb-6">
          Something went wrong. The page you're looking for does not exist.
        </p>
        <p className="text-sm text-gray-500 mb-8">Error Code: 404</p>
        <a
          href="/"
          className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-200"
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
};

export default Error;
