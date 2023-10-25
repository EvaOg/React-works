import { useState } from "react";
import data from "../data/data";

function Avatar({ person, size, onClick }) {
  return (
    <div className="avatar-div">
      <img
        className="avatar-pic"
        src={person.imageUrl}
        alt={person.name}
        width={size}
        height={size}
        onClick={onClick}
      />
      <p>{person.name}</p>
    </div>
  );
}

const Profile = (props) => {
  let [currentAvatarDiv, setCurrentAvatarDiv] = useState(0);

  const btnOnclickNext = () => {
    setCurrentAvatarDiv(currentAvatarDiv + 1);
    if (currentAvatarDiv === 2) {
      setCurrentAvatarDiv(() => (currentAvatarDiv = 0));
    }
  };

  const btnOnclickPrev = () => {
    setCurrentAvatarDiv(currentAvatarDiv - 1);
    if (currentAvatarDiv === 0) {
      setCurrentAvatarDiv(() => (currentAvatarDiv = 2));
    }
  };

  return (
    <>
      <Avatar
        size={data[currentAvatarDiv].size}
        person={data[currentAvatarDiv].person}
      />
      <button className="btn" onClick={btnOnclickPrev}>
        {" "}
        prev
      </button>
      <button className="btn" onClick={btnOnclickNext}>
        {" "}
        next
      </button>
    </>
  );
};

export default Profile;
