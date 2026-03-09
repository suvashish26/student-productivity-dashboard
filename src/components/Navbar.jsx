function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-blue-600 text-white px-6 py-4">
      
      {/* Logo / Title */}
      <h1 className="text-xl font-bold">
        📊 Productivity Dashboard
      </h1>

      {/* Navigation Links */}
      <div className="flex gap-6">
        <a href="#" className="hover:text-gray-200">Dashboard</a>
        <a href="#" className="hover:text-gray-200">Add Entry</a>
      </div>

    </nav>
  )
}

export default Navbar