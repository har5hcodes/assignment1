import React, { useState } from "react";

const Home = () => {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center", // Center horizontally
    justifyContent: "center", // Center vertically
    minHeight: "100vh", // Ensure the container takes at least the full viewport height
  };

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    maxWidth: "400px", // Limit the width of the form
  };

  const inputStyle = {
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    marginBottom: "10px",
    width: "100%",
  };

  const buttonStyle = {
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    backgroundColor: "blue",
    color: "white",
    cursor: "pointer",
    marginRight: "10px",
  };

  const tableStyle = {
    marginTop: "20px",
    width: "30%",
    borderCollapse: "collapse",
  };

  const thStyle = {
    backgroundColor: "#f2f2f2",
    padding: "10px",
    textAlign: "left",
  };

  const tdStyle = {
    border: "1px solid #ddd",
    padding: "10px",
  };

  const [dataEntries, setDataEntries] = useState([]);
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [dob, setDob] = useState("");
  const [isListActive, setIsListActive] = useState(false);

  const handleSave = () => {
    const newDataEntry = {
      fname: fname,
      lname: lname,
      dob: dob,
    };
    setDataEntries([...dataEntries, newDataEntry]);
    setFname("");
    setLname("");
    setDob("");
  };

  const handleReset = () => {
    setDataEntries([]);
  };

  const handleList = () => {
    setIsListActive(!isListActive);
  };

  return (
    <div style={containerStyle}>
      <div style={formStyle}>
        <input
          value={fname}
          placeholder="First Name"
          style={inputStyle}
          type="text"
          id="fname"
          name="fname"
          onChange={(e) => {
            setFname(e.target.value);
          }}
        />

        <input
          value={lname}
          placeholder="Last Name"
          style={inputStyle}
          type="text"
          id="lname"
          name="lname"
          onChange={(e) => {
            setLname(e.target.value);
          }}
        />

        <input
          value={dob}
          placeholder="Date of Birth"
          style={inputStyle}
          type="date"
          id="dob"
          name="dob"
          onChange={(e) => {
            setDob(e.target.value);
          }}
        />

        <div
          style={{
            display: "flex",
          }}
        >
          <button style={buttonStyle} onClick={handleSave}>
            Save
          </button>
          <button style={buttonStyle} onClick={handleReset}>
            Reset
          </button>
          <button style={buttonStyle} onClick={handleList}>
            {isListActive ? "Hide List" : "Show List"}
          </button>
        </div>
      </div>
      {isListActive && (
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>First Name</th>
              <th style={thStyle}>Last Name</th>
              <th style={thStyle}>Date of Birth</th>
            </tr>
          </thead>
          <tbody>
            {dataEntries.map((dataEntry) => {
              return (
                <tr>
                  <td style={tdStyle}>{dataEntry.fname}</td>
                  <td style={tdStyle}>{dataEntry.lname}</td>
                  <td style={tdStyle}>{dataEntry.dob}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Home;
