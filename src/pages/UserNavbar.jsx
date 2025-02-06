import React from 'react';
import { useNavigate } from "react-router-dom";
import { useAuth } from "../provider/authProvider";

const UserNavbar = () => {

  const { setToken } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    // console.log('Logged out from Navbar!');

    setToken();
    navigate("/login", { replace: true });

  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.leftSection}>User Page</div>
      <button style={styles.logoutButton} onClick={handleLogout}>
        Logout
      </button>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: "#007bff",
    padding: '10px 20px',
    color: 'white',
  },
  leftSection: {
    fontSize: '18px',
  },
  logoutButton: {
    padding: '10px 20px',
    fontSize: '16px',
    color: 'white',
    backgroundColor: '#ef4444',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default UserNavbar;
