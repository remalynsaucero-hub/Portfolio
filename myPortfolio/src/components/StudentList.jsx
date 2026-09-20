import SearchBar from "./SearchBar";
import StudentCard from "./StudentCard";

function StudentList() {
  return (
    <section className="student-section">
      <h2>Student Records</h2>

      <SearchBar />

      <div className="students">
        <StudentCard
          name="Malena"
          id="2026-001"
          course="BSIT"
          year="3rd Year"
        />

        <StudentCard
          name="Maria"
          id="2026-002"
          course="BSIT"
          year="3rd Year"
        />

        <StudentCard
          name="John"
          id="2026-003"
          course="BSIT"
          year="2nd Year"
        />
      </div>
    </section>
  );
}

export default StudentList;