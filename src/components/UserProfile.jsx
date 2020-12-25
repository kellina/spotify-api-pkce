import React, { useState, useEffect } from "react";
import { getCurrentUserProfile } from "../services/user-service";

function UserProfile() {
  const [profile, setProfile] = useState({});

    useEffect(() => {
        getCurrentUserProfile().then((userProfile) => {
            setProfile(userProfile)
        })
    }, [])


  return (
    <div>
      <h1>User Profile</h1>
      <div>
        <p>ID: {profile.id}</p>
        <img  alt="user" src={profile?.images?.length?profile.images[0].url:null} />
        <p>Name: {profile.display_name}</p>
        <p>Email: {profile.email}</p>
        <p>URL: {profile.href}</p>
      </div>
    </div>
  );
}

export default UserProfile;
