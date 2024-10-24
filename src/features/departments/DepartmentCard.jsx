import { Link } from "react-router-dom";

// Exports a department card to DepartmentList
export default function DepartmentCard({ department }) {
  const shortDescription = department.description.slice(0, 100) + "...";

  return (
    <li>
      <img src={department.image} alt="Department Image" />
      <section className="info">
        <h2>{department.name}</h2>
        <h3>{department.info}</h3>
        <p>{shortDescription}</p>
        <Link to={`/departments/${department.id}`}>More info</Link>
      </section>
    </li>
  );
}
