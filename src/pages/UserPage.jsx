import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../provider/authProvider";
import api from '../api/petAdoption';
import UserNavbar from './UserNavbar';

const UserPage = () => {

    const navigate = useNavigate();

    const searchPets = () => {
        navigate("/pets", { replace: true });
    }

    const adoptPet = () => {
        navigate("/pets/adopt", { replace: true });
    }

    const returnPet = () => {
      navigate("/pets/return", { replace: true });
    }

    return (
        <div>
            <UserNavbar />
            <div style={styles.container}>
                <button onClick={searchPets} style={styles.button}>Search Pets</button>
                <button onClick={adoptPet} style={styles.button}>Adopt a Pet</button>
                <button onClick={returnPet} style={styles.button}>Return a Pet</button>
            </div>
        </div>
      );
    };
    
    const styles = {
      container: {
        display: 'flex',
        flexDirection: 'column',
        paddingTop: '250px',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f0f0f0',  // Background color for the page
      },
      button: {
        backgroundColor: "#007bff",
        color: 'white',
        fontSize: '18px',
        padding: '15px 30px',
        margin: '10px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        width: '200px',  // Set width to make buttons equal size
      },
};

export default UserPage;
