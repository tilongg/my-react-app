import { useState } from "react";
import ProfileHead from "./ProfileHead";
import ProfileBody from "./ProfileBody";

function Profile({userName, occupation, email, location, skills}) {
  const [liked, setLiked] = useState(false);

  return (
    <article>
      <table border="1" cellPadding="10" cellSpacing="0">
        <caption>Profile</caption>
        <ProfileHead userName={userName} occupation={occupation} />
        <ProfileBody email={email} location={location} skills={skills} />
      </table>
        <button
              type="button"
              aria-pressed={liked}
              onClick={() => setLiked((previousLiked) => !previousLiked)}
            >
          {liked ? "Liked" : "Like"} profile
        </button>
    </article>
  );
}

export default Profile;