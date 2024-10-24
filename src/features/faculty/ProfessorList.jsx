import { useState } from "react";
import ProfessorCard from "./ProfessorCard";
import { useGetFacultyQuery } from "../../store/facultySlice";

// Function that renders a list of all departments
export default function ProfessorList() {
  const { data: professors, isLoading } = useGetFacultyQuery();

  const [filter, setFilter] = useState("");
  const searchRegex = new RegExp(filter, "i");

  if (isLoading) return <h2>Loading faculty...</h2>;

  return (
    <main>
      <h1>University Departments</h1>
      <form>
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => setFilter(e.target.value)}
        />
      </form>
      <ul className="faculty-list">
        {professors
          .filter((professor) => professor.name.match(searchRegex))
          .sort((a, z) => a.name.localeCompare(z.name))
          .map((professor) => (
            <ProfessorCard key={professor.id} professor={professor} />
          ))}
      </ul>
    </main>
  );
}
