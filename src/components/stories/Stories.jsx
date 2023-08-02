import { AuthContext } from "../../context/authContext";
import "./stories.scss";
import React, { useContext, useEffect, useState } from "react";

export const Stories = () => {
    const {currentUser} = useContext(AuthContext)
  const [stories, setStories] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/users?limit=5")
      .then((res) => res.json())
      .then((json) => {
        setStories(json.users)
    })
      .catch((error) => console.log(error));
  }, []);

  // Temporary data
  return (
    <div className="stories">
        <div className="story">
          <img src={currentUser.profilePic} alt="img" />
          <span>{currentUser.name}</span>
          <button>+</button>
        </div>
      {stories.map((story) => (
        <div className="story" key={story.id}>
          <img src={story.image} alt={story.firstName} />
          <span>{story.firstName}</span>
        </div>
      ))}
    </div>
  );
};
