import React, { useState } from 'react';
import UserNavbar from './UserNavbar';
import { useAuth } from "../provider/authProvider";
import api from '../api/petAdoption';
import { useNavigate } from 'react-router-dom';
import PetCard from './PetCard';
import backgroundImage from '../assets/image.png';

const UserPets = () => {
  const navigate = useNavigate();
  const { token } = useAuth();

  const [petType, setPetType] = useState('');
  const [petsList, setPetsList] = useState([]);
  const [error, setError] = useState(null);
  
  // Filter pets based on the type entered
  const handleSubmit = async () => {
    
    const input = {
      "type": petType
    }

    const response = await api.post("/pets", input, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    // console.log(response.data);
    setPetsList(response.data);
  };

  const returnToHome = () => {
    navigate("/user", { replace: true });
  }

  return (
    <div>
      <div style={{textAlign: 'center'}}>
      <UserNavbar />
      <div>
      <h1 style={styles.title}>Search Pets by Type</h1>
      
      <div style={styles.inputContainer}>
        <label htmlFor="petType" style={styles.label}>Enter Type of Pet:</label>
        <br /> <br />
        <input
          type="text"
          id="petType"
          value={petType}
          onChange={(e) => setPetType(e.target.value)}
          style={styles.input}
        />
      </div>
      
      <button onClick={handleSubmit} style={styles.button}>Submit</button>
      <br /><br />
      <button onClick={returnToHome} style={styles.button}>Return to Home</button>
      
      {error ? (
        <p style={{ color: "red" }}>Failed to fetch pets: {error}</p>
      ) : petsList.length > 0 ? (
        <div style={styles.cardContainer}>
          {petsList.map((pet) => (
            <PetCard key={pet.id} pet={pet} />
          ))}
        </div>
      ) : (
        <p></p>
      )}
      
    </div>

      
    </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    backgroundColor: '#f0f0f0',
    textAlign: 'center',
    width: '300px',
    margin: 'auto',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    marginTop: '100px',
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },
  title: {
    fontSize: '24px',
    marginBottom: '20px',
  },
  inputContainer: {
    marginBottom: '20px',
  },
  label: {
    fontSize: '16px',
    marginRight: '10px',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    width: '20%',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  cardContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px", // Spacing between cards
    padding: "20px",
  },
  button: {
    padding: '10px 20px',
    backgroundColor: "#48A6A7",
    color: 'white',
    fontSize: '16px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  list: {
    marginTop: '20px',
    textAlign: 'left',
    paddingLeft: '0',
    listStyleType: 'none',
  },
  listItem: {
    fontSize: '18px',
    padding: '5px 0',
  },
};

export default UserPets;

