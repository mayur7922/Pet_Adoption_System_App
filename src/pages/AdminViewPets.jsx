import React, { useEffect, useState } from 'react';
import AdminNavbar from './AdminNavbar';
import { useAuth } from "../provider/authProvider";
import api from '../api/petAdoption';
import { useNavigate } from 'react-router-dom';
import PetCard from './PetCard';

const AdminViewPets = () => {

    const navigate = useNavigate();
    const { token } = useAuth();

    const [petsList, setPetsList] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const viewAllPets = async () => {
          try {
            const response = await api.get("/admin/pets", {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            });
            setPetsList(response.data);
          } catch (err) {
            console.error("Error fetching pets:", err);
            setError(err.message); // Set the error state
          }
        };
    
        viewAllPets(); // Call the API only once when the component mounts
      }, [token]);

      const returnToHome = () => {
        navigate("/admin", { replace: true });
      }

return (
    <div style={{textAlign: "center"}}>
      <AdminNavbar />
      {error ? (
        <p style={{ color: "red" }}>Failed to fetch pets: {error}</p>
      ) : petsList.length > 0 ? (
        <div style={styles.cardContainer}>
          {petsList.map((pet) => (
            <PetCard key={pet.id} pet={pet} />
          ))}
        </div>
      ) : (
        <p>Loading pets...</p>
      )}
      <br />
      <button onClick={returnToHome} style={styles.button}>Return to Home</button>
    </div>
  );
};

const styles = {
  cardContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px", // Spacing between cards
    padding: "20px",
  },
  button: {
    backgroundColor: '#007BFF',  // Blue button
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
};

export default AdminViewPets;

