import React from "react";
import { Link, useParams } from "react-router-dom";

const ViewDetails = () => {
  const { studentid } = useParams();

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
          width:"500px",
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
        <h1 style={{ color: "green", marginBottom: "50px" }}>
          STUDENT DETAILS
        </h1>
        <p style={{ marginBottom: "10px" }}>
          <strong>ID:</strong> 1
        </p>
        <p style={{ marginBottom: "10px" }}>
          <strong>NAME:</strong> Anandhu
        </p>
        <p style={{ marginBottom: "10px" }}>
          <strong>PLACE:</strong> Trivandrum
        </p>
        <p style={{ marginBottom: "10px" }}>
          <strong>PHONE:</strong> 8129438086
        </p>
        <Link
          to={"/"}
          style={{
            backgroundColor: "red",
            textDecoration: "none",
            color: "white",
            padding: "5px",
            border: "0px",
            borderRadius: "5px",
            boxShadow:"2px 3px 4px orange"
          }}
          className="btn btn-back"
        >
          BACK
        </Link>
      </div>
    </div>
  );
};

export default ViewDetails;
