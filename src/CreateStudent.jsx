import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const CreateStudent = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [place, setPlace] = useState("");
  const navigate = useNavigate();
  const [phone, setPhone] = useState("");
  const [validate, setValidate] = useState(false);
  // submitDetails=()=>{

  // }
  const handleSubmit = (e) => {
    e.preventDefault();
    const studentData = { id, name, place, phone };
    console.log(studentData);
    fetch("http://localhost:3000/student", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(studentData),
    })
      .then((res) => {
        alert("student data succesfully saved");
        navigate('/');
      })
      .catch((err) => console.log(err));
  };
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        backgroundColor: "#d4edda",
        margin: "0px",
        marginTop: "0px",
      }}
    >
      <center>
        <h1 style={{ color: "green", margin: " 0" }}>ADD NEW STUDENT</h1>
      </center>
      <div
        className="container"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <form
          onSubmit={handleSubmit}
          style={{
            width: "850px",
            margin: "50px",
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
          action=""
        >
          <label htmlFor="id" style={{ color: "green", marginBottom: "10px" }}>
            ID
          </label>
          <input
            type="text"
            name="id"
            onMouseDown={()=>setValidate(true)}
          
            required 
            id="id"
            value={id}
            onChange={(e) => setId(e.target.value)}
            
            style={{
              marginBottom: "10px",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid green",
              width: "100%",
            }}
            
          />{id.length===0&&validate ?<span className="errorMsg" style={{color:"green",marginBottom:"10px"}}>please enter your id above</span>:null}
          <label
            htmlFor="name"
            style={{ color: "green", marginBottom: "10px" }}
          >
            NAME
          </label>
          <input
            value={name}
            required 
            onChange={(e) => setName(e.target.value)}
            onMouseDown={()=>setValidate(true)}
            type="text"
            name="name"
            id="name"
            style={{
              marginBottom: "10px",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid green",
              width: "100%",
            }}
          />{name.length===0&&validate ?<span className="errorMsg" style={{color:"green",marginBottom:"10px"}}>please enter your id above</span>:null}
          <label
            htmlFor="place"
            style={{ color: "green", marginBottom: "10px" }}
          >
            PLACE
          </label>
          <input
            value={place}
            onChange={(e) => setPlace(e.target.value)}
            onMouseDown={()=>setValidate(true)}
            required 
            type="text"
            name="place"
            id="place"
            style={{
              marginBottom: "10px",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid green",
              width: "100%",
            }}
          />{place.length===0&&validate ?<span className="errorMsg" style={{color:"green",marginBottom:"10px"}}>please enter your id above</span>:null}
          <label
            htmlFor="phone"
            style={{ color: "green", marginBottom: "10px" }}
          >
            PHONE
          </label>
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            onMouseDown={()=>setValidate(true)}
            required 
            type="text"
            name="phone"
            id="phone"
            style={{
              marginBottom: "10px",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid green",
              width: "100%",
            }}
          />{phone.length===0&&validate ?<span className="errorMsg" style={{color:"green",marginBottom:"10px"}}>please enter your id above</span>:null}
          <div className="btm">
            <button
              type="submit"
              style={{
                marginTop: "20px",
                margin: "10px",
                padding: "10px 20px",
                borderRadius: "5px",
                border: "none",
                backgroundColor: "green",
                color: "white",
                cursor: "pointer",
                fontSize: "16px",
              }}
              // onClick={submitDetails()}
            >
              SAVE
            </button>

            <Link to={"/"}>
              <button
                style={{
                  marginTop: "20px",
                  margin: "10px",

                  padding: "10px 20px",
                  borderRadius: "5px",
                  border: "none",
                  backgroundColor: "red",
                  color: "white",
                  cursor: "pointer",
                  fontSize: "16px",
                }}
              >
                BACK
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateStudent;
