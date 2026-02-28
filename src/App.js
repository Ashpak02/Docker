import React, { useState } from "react";

export default function App() {
  const [color, setColor] = useState("black");

  const carColors = {
    black: "#111111",
    red: "#8B0000",
    white: "#f5f5f5",
    silver: "#9e9e9e",
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Mahindra Scorpio</h1>
      <p style={styles.subtitle}>The Big Daddy of SUVs</p>

      {/* Car Display */}
      <div style={styles.carWrapper}>
        <div
          style={{
            ...styles.carBody,
            backgroundColor: carColors[color],
          }}
        >
          <div style={styles.window}></div>
          <div style={styles.wheelLeft}></div>
          <div style={styles.wheelRight}></div>
        </div>
      </div>

      {/* Color Selector */}
      <div style={styles.colorSection}>
        <h3>Select Color</h3>
        {Object.keys(carColors).map((c) => (
          <button
            key={c}
            onClick={() => setColor(c)}
            style={{
              ...styles.colorBtn,
              backgroundColor: carColors[c],
              border: c === color ? "3px solid gold" : "none",
            }}
          />
        ))}
      </div>

      {/* Specifications */}
      <div style={styles.specBox}>
        <h2>Specifications</h2>
        <ul>
          <li>Engine: 2.2L mHawk Diesel</li>
          <li>Power: 130–175 HP</li>
          <li>Torque: 300–400 Nm</li>
          <li>Transmission: 6-Speed Manual / Automatic</li>
          <li>Drive Type: RWD / 4WD</li>
          <li>Seating Capacity: 7</li>
        </ul>
      </div>

      {/* Feature Badges */}
      <div style={styles.features}>
        <div style={styles.badge}>LED DRLs</div>
        <div style={styles.badge}>Touchscreen Infotainment</div>
        <div style={styles.badge}>Cruise Control</div>
        <div style={styles.badge}>Airbags</div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
    minHeight: "100vh",
    color: "white",
    textAlign: "center",
    padding: "30px",
    fontFamily: "Arial",
  },
  title: {
    fontSize: "3rem",
    marginBottom: "5px",
  },
  subtitle: {
    marginBottom: "30px",
    fontStyle: "italic",
    color: "#ddd",
  },
  carWrapper: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "30px",
  },
  carBody: {
    width: "400px",
    height: "150px",
    borderRadius: "20px",
    position: "relative",
    transition: "all 0.5s ease",
    boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
  },
  window: {
    width: "180px",
    height: "60px",
    backgroundColor: "#87CEEB",
    position: "absolute",
    top: "20px",
    left: "110px",
    borderRadius: "10px",
  },
  wheelLeft: {
    width: "80px",
    height: "80px",
    backgroundColor: "#000",
    borderRadius: "50%",
    position: "absolute",
    bottom: "-40px",
    left: "40px",
    border: "8px solid #444",
  },
  wheelRight: {
    width: "80px",
    height: "80px",
    backgroundColor: "#000",
    borderRadius: "50%",
    position: "absolute",
    bottom: "-40px",
    right: "40px",
    border: "8px solid #444",
  },
  colorSection: {
    marginBottom: "30px",
  },
  colorBtn: {
    width: "40px",
    height: "40px",
    margin: "10px",
    borderRadius: "50%",
    cursor: "pointer",
  },
  specBox: {
    backgroundColor: "rgba(255,255,255,0.1)",
    padding: "20px",
    borderRadius: "15px",
    maxWidth: "400px",
    margin: "0 auto 30px auto",
    textAlign: "left",
  },
  features: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "15px",
  },
  badge: {
    backgroundColor: "#00c6ff",
    padding: "10px 20px",
    borderRadius: "20px",
    fontWeight: "bold",
  },
};