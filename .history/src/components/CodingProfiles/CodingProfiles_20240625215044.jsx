import React from "react";
import styles from "./CodingProfiles.module.css";
import profiles from "../../data/profiles.json";

export const CodingProfiles = () => {
  return (
    <section className={styles.container} id="coding-profiles">
      <h2 className={styles.title}>Coding Profiles</h2>
      <div className={styles.content}>
        {profiles.map((profile, id) => (
          <div key={id} className={styles.profile}>
            <div className={styles.profileImageContainer}>
              <img
                src={"..assets/codingprofiles/Leetcode.png"}
                alt={`${profile.username} Avatar`}
                className={styles.avatar}
              />
            </div>
            <div className={styles.profileDetails}>
              <h3>{profile.username}</h3>
              <p>{profile.platform}</p>
              <a href={profile.profileUrl} target="_blank" rel="noopener noreferrer">
                View Profile
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};