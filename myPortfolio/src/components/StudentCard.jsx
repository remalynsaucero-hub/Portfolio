function StudentCard({ name, id, course, year }) {
  return (
    <div className="student-card">
      <h3>{name}</h3>
      <p><b>ID:</b> {id}</p>
      <p><b>Course:</b> {course}</p>
      <p><b>Year:</b> {year}</p>

      <button>Edit</button>
      <button className="delete">Delete</button>
    </div>
  );
}

export default StudentCard;