import Navbar from "./components/Navbar"
import AddEntry from "./pages/AddEntry"

function App() {
  return (
    <>
      <Navbar />
    <AddEntry/>
      <main className="max-w-7xl mx-auto p-6">
        <h1 className="text-3xl font-semibold">Dashboard</h1>
      </main>
    </>
  )
}

export default App