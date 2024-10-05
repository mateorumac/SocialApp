import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [profileInfo, setProfileInfo] = useState({
    name: user.name,
    bio: user.bio,
    profileImage: user.profileImage,
  });
  const [newImage, setNewImage] = useState(null);

  const handleImageUpload = (e) => {
    setNewImage(e.target.files[0]);
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("name", profileInfo.name);
    formData.append("bio", profileInfo.bio);
    if (newImage) {
      formData.append("profileImage", newImage);
    }

    const res = await axios.put(`/api/profile/${user.id}`, formData);
    setProfileInfo(res.data);
  };

  return (
    <div>
      <h1>My Profile</h1>
      <input
        type="text"
        value={profileInfo.name}
        onChange={(e) => setProfileInfo({ ...profileInfo, name: e.target.value })}
      />
      <textarea
        value={profileInfo.bio}
        onChange={(e) => setProfileInfo({ ...profileInfo, bio: e.target.value })}
      />
      <input type="file" onChange={handleImageUpload} />
      <button onClick={handleSubmit}>Save Profile</button>
    </div>
  );
};

export default Profile;
