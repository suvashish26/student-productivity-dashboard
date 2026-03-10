import { useState } from "react"

function AddEntry() {
  const [study, setStudy] = useState("")
  const [sleep, setSleep] = useState("")
  const [attendance, setAttendance] = useState("")
  const [homework, setHomework] = useState("")
  const [date, setDate] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    const entry = {
      study,
      sleep,
      attendance,
      homework,
      date
    }

    console.log(entry)
  }

  return (
    <div className="max-w-xl mx-auto mt-10">
      <h2 className="text-2xl font-semibold mb-6">Add Productivity Entry</h2>

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          type="number"
          placeholder="Study Hours"
          value={study}
          onChange={(e) => setStudy(e.target.value)}
          className="w-full p-2 border rounded"
        />

        <input
          type="number"
          placeholder="Sleep Hours"
          value={sleep}
          onChange={(e) => setSleep(e.target.value)}
          className="w-full p-2 border rounded"
        />

        <input
          type="number"
          placeholder="Attendance %"
          value={attendance}
          onChange={(e) => setAttendance(e.target.value)}
          className="w-full p-2 border rounded"
        />

        <input
          type="number"
          placeholder="Homework Hours"
          value={homework}
          onChange={(e) => setHomework(e.target.value)}
          className="w-full p-2 border rounded"
        />

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full p-2 border rounded"
        />

        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Save Entry
        </button>

      </form>
    </div>
  )
}

export default AddEntry