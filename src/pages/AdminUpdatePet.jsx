import React, { useState } from "react";
import AdminNavbar from "./AdminNavbar";
import api from '../api/petAdoption';
import { useNavigate } from "react-router-dom";
import { useAuth } from "../provider/authProvider";

const AdminUpdatePet = () => {

  const navigate = useNavigate();
  const { token } = useAuth();

  const [petDetails, setPetDetails] = useState({
    Id: "",
    type: "",
    breed: "",
    age: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPetDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Pet Details Submitted: ", petDetails);

    const pet = {
        "type": petDetails.type,
        "breed": petDetails.breed,
        "age": petDetails.age,
        // "isAdopted": false,
        // "user_id": 0
    }

    const response = await api.put(`/admin/pets/${Number(petDetails.Id)}`, pet, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      
      console.log(response.data);
      console.log(response);

    if(response.status === 202) {
        navigate("/admin/pets", { replace: true });
    }

  };

  const goToHome = () => {
    navigate("/admin", { replace: true });
  }

  return (
    <div>
        <AdminNavbar />
        <div style={styles.container}>
            <h2 style={styles.heading}>Update Pet details</h2>
            <form onSubmit={handleSubmit} style={styles.form}>
            <div style={styles.formGroup}>
                <label htmlFor="type" style={styles.label}>
                    Id
                </label>
                <input
                    type="text"
                    id="Id"
                    name="Id"
                    value={petDetails.Id}
                    onChange={handleChange}
                    style={styles.input}
                    placeholder="e.g., 1, 2"
                    required
                />
                </div>
                <div style={styles.formGroup}>
                <label htmlFor="type" style={styles.label}>
                    Type
                </label>
                <input
                    type="text"
                    id="type"
                    name="type"
                    value={petDetails.type}
                    onChange={handleChange}
                    style={styles.input}
                    placeholder="e.g., Dog, Cat"
                    required
                />
                </div>
                <div style={styles.formGroup}>
                <label htmlFor="breed" style={styles.label}>
                    Breed
                </label>
                <input
                    type="text"
                    id="breed"
                    name="breed"
                    value={petDetails.breed}
                    onChange={handleChange}
                    style={styles.input}
                    placeholder="e.g., Golden Retriever"
                    required
                />
                </div>
                <div style={styles.formGroup}>
                <label htmlFor="age" style={styles.label}>
                    Age
                </label>
                <input
                    type="number"
                    id="age"
                    name="age"
                    value={petDetails.age}
                    onChange={handleChange}
                    style={styles.input}
                    placeholder="e.g., 2"
                    required
                    min="0"
                />
                </div>
                <button type="submit" style={styles.submitButton}>
                Update Pet Details
                </button>
                <button onClick={goToHome} style={styles.submitButton}>
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

export default AdminUpdatePet;
