import React, { useEffect, useState } from "react";
import "./StudentTable.css"; // Import the CSS file for styling
import { Link, useNavigate } from "react-router-dom";

function StudentTable() {
  const [student, setStudent] = useState([]);
  const navigate =useNavigate();


  useEffect(() => {
    fetch("http://localhost:3000/student")
      .then((res) => res.json())
      .then((data) => setStudent(data))
      .catch((err) => {
        console.log(err);
      });
  }, []);
  
    const displayDetails = (studentid) => {
      navigate(`/create/edit/view/${studentid}`);
    };
    
  

  return (
    <div>
      <center>
        <h1>Student Records</h1>
      </center>

      <button
        style={{
          backgroundColor: "blueViolet",
          border: "0",
          height: "35px",
          padding: "5px",
          borderRadius: "5px",
          color: "white",
          cursor: "pointer",
        }}
      >
        <Link style={{ textDecoration: "none", color: "white" }} to={"/create"}>
          Add New Student{" "}
        </Link>
      </button>

      <div
        className="table-container"
        style={{ alignContent: "center", marginTop: "20px" }}
      >
        <table className="styled-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>PLACE</th>
              <th>PHONE</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {student &&
              student.map((item) => (<tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.place}</td>
                <td>{item.phone}</td>
                <td style={{ gap: "10px" }}>
                  <button
                    style={{
                      margin: "5px",
                      backgroundColor: "#93C572",
                      
                      padding: "5px",
                      borderRadius: "5px",
                      border: "0px",
                    }}
                    onClick={()=>displayDetails(item.id)}
                  >
                    View
                  </button>
                  <button
                    style={{
                      margin: "5px",
                      backgroundColor: "blueviolet",
                      color:"white",
                      padding: "5px",
                      borderRadius: "5px",
                      border: "0px",
                    }}
                  >
                    Edit
                  </button>
                  <button
                    style={{
                      margin: "5px",
                      backgroundColor: "orangered",
                      
                      padding: "5px",
                      borderRadius: "5px",
                      border: "0px",
                      color: "white",
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>)
                
              )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StudentTable;
