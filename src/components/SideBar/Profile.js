import React from "react";
import profileData from "../../data/profile";
function Profile() {
  return (
    <div
      style={{ textAlign: "center", marginTop: "15px", marginBottom: "23px" }}
    >
      <img
        style={{
          height: "140px",
          borderRadius: "70px",
          border: "8px solid #2C2F3F",
          marginBottom: "15px",
        }}
        src={profileData.photo}
        alt="profile"
      />
      <p
        style={{
          color: "#ffffff",
          fontSize: "19pt",
          fontWeight: "bold",
          marginBottom: "23px",
        }}
      >
        {profileData.name}
      </p>
    </div>
  );
}

export default Profile;
