import React, { useState } from 'react';
import UserNavbar from './UserNavbar';
import { useAuth } from "../provider/authProvider";
import api from '../api/petAdoption';
import { useNavigate } from 'react-router-dom';

function UserPetsAdopt() {

  const navigate = useNavigate();
  const { token } = useAuth();

  const [petId, setPetId] = useState('');
  const [message, setMessage] = useState('');

  const handleAdoptClick = async () => {

      const input = {
        "pet_id": Number(petId)
      }

      try{
        const response = await api.post("/pets/adopt", input, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setMessage(response.data);
      }catch(error){
        setMessage("Pet is already adopted");
      }

  };

  const returnToHome = () => {
    navigate("/user", { replace: true });
  }

  return (
    <div>
      <UserNavbar />
      <div style={styles.container}>
      <h1 style={styles.heading}>Adopt a Pet</h1>
      <div style={styles.inputContainer}>
        <label htmlFor="petId" style={styles.label}>Enter Pet's ID to Adopt:</label>
        <input 
          type="text" 
          id="petId" 
          value={petId} 
          onChange={(e) => setPetId(e.target.value)}
          placeholder="Enter Pet ID" 
          style={styles.input}
        />
      </div>
      <button onClick={handleAdoptClick} style={styles.button}>Adopt Pet</button>
      <br />
      <button onClick={returnToHome} style={styles.button}>Return to Home</button>
      <h2>{(message.length > 0 ? message : '')}</h2>
    </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    fontFamily: 'Arial, sans-serif'
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '20px',
  },
  inputContainer: {
    marginBottom: '20px',
  },
  label: {
    fontSize: '1rem',
    marginRight: '10px',
  },
  input: {
    padding: '10px',
    fontSize: '1rem',
    borderRadius: '5px',
    border: '1px solid #ccc',
    width: '200px',
  },
  button: {
    backgroundColor: '#48A6A7',  // Blue button
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
};

export default UserPetsAdopt;

