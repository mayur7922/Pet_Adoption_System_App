import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../provider/authProvider";
import api from '../api/petAdoption'
import AdminNavbar from "./AdminNavbar";
import backgroundImage from '../assets/image.png';

const AdminPage = () => {

    const navigate = useNavigate();

    const viewAllPets = () => {
        navigate("/admin/pets", { replace: true });
    }

    const addNewPet = () => {
        navigate("/admin/pets/add", { replace: true });
    }

    const updatePetDetails = () => {
        navigate("/admin/pets/update", { replace: true });
    }

    const deletePet = () => {
        navigate("/admin/pets/delete", { replace: true });
    }
    
    return (
      <div>
        <AdminNavbar />
        <div style={styles.container}>
        <div style={styles.content}>
          <h1 style={styles.heading}>Admin Panel</h1>
          <div style={styles.buttonContainer}>
            <button onClick={viewAllPets} style={{ ...styles.button, ...styles.viewButton }}>View All Pets</button>
            <button onClick={addNewPet} style={{ ...styles.button, ...styles.addButton }}>Add New Pet</button>
            <button onClick={updatePetDetails} style={{ ...styles.button, ...styles.updateButton }}>Update Pet Details</button>
            <button onClick={deletePet} style={{ ...styles.button, ...styles.deleteButton }}>Delete a Pet</button>
          </div>
        </div>
      </div>
      </div>
    );
  };

  const styles = {
    container: {
      justifyContent: 'center',
      paddingTop: '220px',
      height: '100vh',
      backgroundColor: '#f3f4f6',
      minHeight: "100vh",
      display: "flex",
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    },
    content: {
      textAlign: 'center',
    },
    heading: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '20px',
    },
    buttonContainer: {
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
    },
    button: {
      width: '200px',
      padding: '10px',
      fontSize: '16px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      color: 'white',
    },
    viewButton: {
        backgroundColor: "#007bff",
    },
    addButton: {
      backgroundColor: '#10b981',
    },
    updateButton: {
      backgroundColor: '#f59e0b',
    },
    deleteButton: {
      backgroundColor: '#ef4444',
    },
  };
  
  export default AdminPage;

