import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import StudentList from "./components/StudentList";
import StudentForm from "./components/StudentForm";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />

      <div className="layout">
        <Sidebar />

        <main className="content">
          <Dashboard />
          <StudentForm />
          <StudentList />
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default App;