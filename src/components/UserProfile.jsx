import React, { useState, useEffect } from "react";
import './UserProfile.css'
import { getCurrentUserProfile } from "../services/user-service";

function UserProfile() {
  const [profile, setProfile] = useState({});

    useEffect(() => {
        getCurrentUserProfile().then((userProfile) => {
            setProfile(userProfile)
        })
    }, [])


  return (
    <div className="container">
      <h1>User Profile</h1>
      <div className="profile">
        <img  alt="user" src={profile?.images?.length?profile.images[0].url:null} />
        <p>ID: {profile.id}</p>
        <p>Name: {profile.display_name}</p>
        <p>Email: {profile.email}</p>
        <p>URL: {profile.href}</p>
      </div>
    </div>
  );
}

export default UserProfile;
