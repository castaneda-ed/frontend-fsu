import { useState } from "react";
import DepartmentCard from "./DepartmentCard";
import { useGetDepartmentsQuery } from "../../store/departmentSlice";

import "./DepartmentList.css";

// Function that renders a list of all departments
export default function DepartmentList() {
  const { data: departments, isLoading } = useGetDepartmentsQuery();
  console.log(departments);
  const [filter, setFilter] = useState("");
  const searchRegex = new RegExp(filter, "i");

  if (isLoading) return <h2>Loading departments...</h2>;

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
      <ul className="department-list">
        {departments
          .filter((department) => department.name.match(searchRegex))
          .sort((a, z) => a.name.localeCompare(z.name))
          .map((department) => (
            <DepartmentCard key={department.id} department={department} />
          ))}
      </ul>
    </main>
  );
}
