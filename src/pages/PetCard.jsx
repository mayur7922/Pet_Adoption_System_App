import React from "react";

const PetCard = ({ pet }) => {
  return (
    <div style={styles.card}>
      <h3 style={styles.cardTitle}>{pet.type}</h3>
      <p style={styles.cardText}>
        <strong>Id:</strong> {pet.id}
      </p>
      <p style={styles.cardText}>
        <strong>Breed:</strong> {pet.breed}
      </p>
      <p style={styles.cardText}>
        <strong>Status:</strong> {pet.isAdopted ? "Adopted" : "Not Adopted"}
      </p>
      <p style={styles.cardText}>
        <strong>Age:</strong> {pet.age} years
      </p>
    </div>
  );
};

const styles = {
  card: {
    backgroundColor: "#ffffff",
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "20px",
    margin: "10px",
    width: "250px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    transition: "transform 0.2s, box-shadow 0.2s",
  },
  cardTitle: {
    fontSize: "20px",
    fontWeight: "600",
    marginBottom: "10px",
    color: "#4CAF50",
  },
  cardText: {
    fontSize: "16px",
    margin: "5px 0",
    color: "#555",
  },
  cardHover: {
    transform: "scale(1.05)",
    boxShadow: "0px 6px 10px rgba(0, 0, 0, 0.2)",
  },
};

export default PetCard;
