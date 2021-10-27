import React from "react";

function Profile() {
  return (
    <div style={{ textAlign: "center", marginTop: "15px" }}>
      <img
        style={{
          height: "140px",
          borderRadius: "70px",
          border: "8px solid #2C2F3F",
          marginBottom: "15px",
        }}
        src="https://avatars.githubusercontent.com/u/53260091?v=4"
        alt="profile"
      />
      <p style={{ color: "#ffffff", fontSize: "23pt", fontWeight: "bold" }}>
        Pattapon Janchoo
      </p>
    </div>
  );
}

export default Profile;
