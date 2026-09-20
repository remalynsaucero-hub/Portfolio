function StudentForm() {
  return (
    <section className="form-section">
      <h2>Add Student</h2>

      <form>
        <input type="text" placeholder="Student Name" />
        <input type="text" placeholder="Student ID" />
        <input type="text" placeholder="Course" />
        <input type="text" placeholder="Year Level" />

        <button type="submit">Add Student</button>
      </form>
    </section>
  );
}

export default StudentForm;