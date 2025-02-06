import React, { useState } from "react";
import AdminNavbar from "./AdminNavbar";
import api from '../api/petAdoption';
import { useNavigate } from "react-router-dom";
import { useAuth } from "../provider/authProvider";

const AdminDeletePet = () => {

  const navigate = useNavigate();
  const { token } = useAuth();

  const [petId, setPetId] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Pet Id: ", petId);

    try{
        const response = await api.delete(`/admin/pets/${petId}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          console.log(response);
            
        if(response.status === 204) navigate("/admin/pets", { replace: true });
    }catch(error){
        alert("Pet with given Id does not exists!");
    }

  };

  const goToHome = () => {
    navigate("/admin", { replace: true });
  }

  return (
    <div>
        <AdminNavbar />
        <div style={styles.container}>
            <h2 style={styles.heading}>Delete Pet</h2>
            <form onSubmit={handleSubmit} style={styles.form}>
                <div style={styles.formGroup}>
                <label htmlFor="age" style={styles.label}>
                    Id
                </label>
                <input
                    type="text"
                    id="Id"
                    name="Id"
                    value={petId}
                    onChange={(e) => setPetId(e.target.value)}
                    style={styles.input}
                    placeholder="e.g., 1, 2"
                />
                </div>
                <button type="submit" style={styles.submitButton}>
                Delete Pet
                </button>
                <button type="button" onClick={goToHome} style={styles.submitButton}>
                Go to Home Page
                </button>
            </form>
        </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "600px",
    margin: "50px auto",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#fff",
    textAlign: "center",
  },
  heading: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#333",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  formGroup: {
    textAlign: "left",
  },
  label: {
    fontSize: "16px",
    fontWeight: "600",
    marginBottom: "8px",
    display: "block",
    color: "#555",
  },
  input: {
    width: "100%",
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "14px",
  },
  submitButton: {
    padding: "12px 20px",
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "25px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  submitButtonHover: {
    backgroundColor: "#45a049",
  },
};

export default AdminDeletePet;
