import React, { useState, useEffect } from "react";

const GitHubInfoCard = ({ username }) => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        if (!response.ok) {
          throw new Error(`User not found (${response.status})`);
        }
        const data = await response.json();
        setUserData(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchGitHubData();
  }, [username]);

  if (error) {
    return <p style={{ color: "#ff4d4f", fontWeight: "bold" }}>⚠️ Error: {error}</p>;
  }

  if (!userData) {
    return <p style={{ textAlign: "center" }}>⏳ Loading...</p>;
  }

  return (
    <div style={styles.card}>
      <img
        src={userData.avatar_url}
        alt={`${userData.login}'s avatar`}
        style={styles.avatar}
      />
      <h2 style={styles.name}>{userData.name || "Name not available"}</h2>
      <p style={styles.username}>@{userData.login}</p>
      <p style={styles.bio}>{userData.bio || "No bio available"}</p>
      <div style={styles.stats}>
        <div style={styles.statBox}>
          <strong>{userData.followers}</strong>
          <span>Followers</span>
        </div>
        <div style={styles.statBox}>
          <strong>{userData.following}</strong>
          <span>Following</span>
        </div>
        <div style={styles.statBox}>
          <strong>{userData.public_repos}</strong>
          <span>Repos</span>
        </div>
      </div>
      <a
        href={userData.html_url}
        target="_blank"
        rel="noopener noreferrer"
        style={styles.button}
      >
        🔗 View GitHub Profile
      </a>
    </div>
  );
};

const styles = {
  card: {
    background: "linear-gradient(145deg, #ffffff, #f0f0f0)",
    borderRadius: "15px",
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
    width: "320px",
    padding: "25px",
    textAlign: "center",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: "#333",
    margin: "2rem auto",
    transition: "transform 0.3s ease",
  },
  avatar: {
    borderRadius: "50%",
    width: "110px",
    height: "110px",
    objectFit: "cover",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    marginBottom: "20px",
  },
  name: {
    fontSize: "1.4rem",
    margin: "10px 0 5px",
  },
  username: {
    color: "#666",
    fontSize: "0.95rem",
    marginBottom: "10px",
  },
  bio: {
    fontStyle: "italic",
    fontSize: "0.95rem",
    color: "#444",
    marginBottom: "20px",
  },
  stats: {
    display: "flex",
    justifyContent: "space-around",
    marginBottom: "20px",
    borderTop: "1px solid #eee",
    paddingTop: "15px",
  },
  statBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontSize: "0.85rem",
    color: "#555",
  },
  button: {
    display: "inline-block",
    textDecoration: "none",
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "12px 18px",
    borderRadius: "8px",
    fontWeight: "bold",
    fontSize: "0.9rem",
    boxShadow: "0 5px 10px rgba(0, 123, 255, 0.3)",
    transition: "background 0.3s ease, transform 0.2s ease",
  },
};

export default GitHubInfoCard;
