


function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header Section */}
      <header className="bg-blue-600 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-center text-neutral-900 border border border:red-500 rounded-lg px-3 py2 bg-green-400">My App</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content Section */}
      <main className="flex-grow container mx-auto p-4">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Welcome to My App!</h2>
        <p className="text-gray-600">
          This is a basic React application using TypeScript, Tailwind CSS, and Vite. You can
          customize it to fit your project needs.
        </p>
      </main>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white p-4">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} My App. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
