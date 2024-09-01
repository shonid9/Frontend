import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="bg-white shadow-md py-12">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to the Restaurant Management System</h1>
          <p className="text-gray-600 mb-8">
            Manage your restaurant efficiently with our comprehensive management tools. Track shifts, communicate with staff, and streamline your operations.
          </p>
          <a
            href="#features"
            className="bg-blue-600 text-white px-6 py-3 rounded-md shadow-md hover:bg-blue-700 transition duration-300"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Our Features</h2>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white shadow-md rounded-md p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Shift Management</h3>
                <p className="text-gray-600">
                  Easily manage shifts, track working hours, and ensure your staff is always in the right place at the right time.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white shadow-md rounded-md p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Real-Time Chat</h3>
                <p className="text-gray-600">
                  Enable seamless communication between your staff with our integrated chat feature.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white shadow-md rounded-md p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Analytics & Reports</h3>
                <p className="text-gray-600">
                  Gain insights into your restaurant's performance with detailed analytics and reports.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-blue-600 py-12">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-blue-200 mb-8">
            Join us today and take your restaurant management to the next level.
          </p>
          <a
            href="#"
            className="bg-white text-blue-600 px-6 py-3 rounded-md shadow-md hover:bg-gray-100 transition duration-300"
          >
            Sign Up Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
