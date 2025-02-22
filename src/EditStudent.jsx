import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditStudent = () => {
  const { studentid } = useParams();
  const navigate = useNavigate();
  const [studentData, setStudentData] = useState({
    id: "",
    name: "",
    place: "",
    phone: "",
  });

  useEffect(() => {
    fetch(`http://localhost:3000/student/${studentid}`)
      .then((res) => res.json())
      .then((data) => setStudentData(data))
      .catch((err) => console.log(err.message));
  }, [studentid]);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3000/student/${studentid}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(studentData),
    })
      .then((res) => {
        alert("Student data successfully updated");
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        backgroundColor: "#d4edda",
        margin: "0px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className="container"
        style={{
          width: "500px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          border: "2px solid green",
          padding: "20px",
          borderRadius: "10px",
          backgroundColor: "white",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h1 style={{ color: "green", marginBottom: "30px" }}>EDIT STUDENT DETAILS</h1>
        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <label htmlFor="id" style={{ color: "green", marginBottom: "10px" }}>
            ID
          </label>
          <input
          required
            type="text"
            name="id"
            id="id"
            value={studentData.id}
            onChange={handleChange}
            style={{
              marginBottom: "10px",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid green",
              width: "100%",
            }}
            readOnly
          />
          <label htmlFor="name" style={{ color: "green", marginBottom: "10px" }}>
            NAME
          </label>
          <input
            type="text"
            required
            name="name"
            id="name"
            value={studentData.name}
            onChange={handleChange}
            style={{
              marginBottom: "10px",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid green",
              width: "100%",
            }}
          />
          <label htmlFor="place" style={{ color: "green", marginBottom: "10px" }}>
            PLACE
          </label>
          <input
            type="text"
            required
            name="place"
            id="place"
            value={studentData.place}
            onChange={handleChange}
            style={{
              marginBottom: "10px",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid green",
              width: "100%",
            }}
          />
          <label htmlFor="phone" style={{ color: "green", marginBottom: "10px" }}>
            PHONE
          </label>
          <input
            type="text"
            required
            name="phone"
            id="phone"
            value={studentData.phone}
            onChange={handleChange}
            style={{
              marginBottom: "10px",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid green",
              width: "100%",
            }}
          />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <button
              type="submit"
              style={{
                marginTop: "20px",
                padding: "10px 20px",
                borderRadius: "5px",
                border: "none",
                backgroundColor: "green",
                color: "white",
                cursor: "pointer",
                fontSize: "16px",
              }}
            >
              UPDATE
            </button>
            <button
              type="button"
              onClick={() => navigate("/")}
              style={{
                marginTop: "20px",
                padding: "10px 20px",
                borderRadius: "5px",
                border: "none",
                backgroundColor: "red",
                color: "white",
                cursor: "pointer",
                fontSize: "16px",
              }}
            >
              CANCEL
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditStudent;