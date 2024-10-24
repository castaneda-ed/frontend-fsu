import { Link } from "react-router-dom";

// Exports a professor card to Professors list
export default function ProfessorCard({ professor }) {
  return (
    <li>
      <img src={professor.image} alt="Proffesor Image" />
      <section className="info">
        <h2>{professor.name}</h2>
        <h3>{professor.email}</h3>
        <Link to={`/faculty/${professor.id}`}>More info</Link>
      </section>
    </li>
  );
}
