function Navbar() {
  return (
    <nav className="bg-slate-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <h1 className="text-xl font-bold tracking-wide">
          Productivity Dashboard
        </h1>

        {/* Navigation Links */}
        <div className="flex items-center gap-8 text-sm font-medium">
          <a href="#" className="hover:text-sky-400 transition">
            Dashboard
          </a>

          <a href="#" className="hover:text-sky-400 transition">
            Add Entry
          </a>

          <a href="#" className="hover:text-sky-400 transition">
            Analytics
          </a>
        </div>

      </div>
    </nav>
  )
}

export default Navbar