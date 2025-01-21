import React, { useState, useMemo } from "react";
const employees = [
    { id: 1, name: "Alice", department: "HR", salary: 45000 },
    { id: 2, name: "Bob", department: "Engineering", salary: 75000 },
    { id: 3, name: "Charlie", department: "Engineering", salary: 65000 },
    { id: 4, name: "David", department: "Marketing", salary: 50000 },
    { id: 5, name: "Eva", department: "HR", salary: 48000 },
  ];
const EmployeeList = () => {
  // Simulating a large dataset
  

  const [searchTerm, setSearchTerm] = useState("");
  const [sortType, setSortType] = useState("name");

  // Memoized filtered and sorted employees list
  const filteredAndSortedEmployees = useMemo(() => {
    console.log("Filtering and sorting employees...");
    let filtered = employees;

    // Filter employees based on search term
    if (searchTerm) {
      filtered = employees.filter((employee) =>
        employee.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Sort employees based on selected sort type
    return filtered.sort((a, b) => {
      if (sortType === "name") {
        return a.name.localeCompare(b.name);
      } else if (sortType === "salary") {
        return b.salary - a.salary;
      } else if (sortType === "department") {
        return a.department.localeCompare(b.department);
      }
      return 0;
    });
  }, [searchTerm, sortType, employees]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Employee List</h1>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          padding: "10px",
          marginBottom: "10px",
          width: "100%",
          boxSizing: "border-box",
        }}
      />

      {/* Sort Dropdown */}
      <select
        value={sortType}
        onChange={(e) => setSortType(e.target.value)}
        style={{ padding: "10px", marginBottom: "20px" }}
      >
        <option value="name">Sort by Name</option>
        <option value="salary">Sort by Salary</option>
        <option value="department">Sort by Department</option>
      </select>

      {/* Employee List */}
      <ul>
        {filteredAndSortedEmployees.map((employee) => (
          <li key={employee.id} style={{ marginBottom: "10px" }}>
            <strong>Name:</strong> {employee.name}, <strong>Department:</strong>{" "}
            {employee.department}, <strong>Salary:</strong> ₹{employee.salary}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;
