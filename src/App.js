import React, { useEffect, useState } from "react";

export default function App() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const skyColor = `linear-gradient(to top, 
    hsl(${200 - time * 0.1}, 70%, ${60 - time * 0.02}%),
    hsl(${210 - time * 0.1}, 80%, ${40 - time * 0.02}%)
  )`;

  return (
    <div style={{ ...styles.container, background: skyColor }}>
      
      {/* Sun */}
      <div
        style={{
          ...styles.sun,
          top: 100 + Math.sin(time * 0.01) * 30,
        }}
      />

      {/* Clouds */}
      <div style={{ ...styles.cloud, left: `${(time * 0.5) % 100}%` }} />
      <div style={{ ...styles.cloud, left: `${(time * 0.3 + 40) % 100}%`, top: 120 }} />

      {/* Birds */}
      <div style={{ ...styles.bird, left: `${(time * 1.5) % 100}%`, top: 150 }}>🕊</div>
      <div style={{ ...styles.bird, left: `${(time * 1.2 + 30) % 100}%`, top: 180 }}>🕊</div>

      {/* Mountains */}
      <div style={styles.mountainLeft}></div>
      <div style={styles.mountainRight}></div>

      {/* River */}
      <div style={styles.river}></div>

      {/* Trees */}
      <div style={{ ...styles.tree, left: "10%" }}></div>
      <div style={{ ...styles.tree, left: "80%" }}></div>

      {/* Fireflies */}
      {[...Array(10)].map((_, i) => (
        <div
          key={i}
          style={{
            ...styles.firefly,
            left: `${(i * 13 + time) % 100}%`,
            top: `${300 + Math.sin(time * 0.02 + i) * 20}px`,
            opacity: 0.5 + Math.sin(time * 0.05 + i) * 0.5,
          }}
        />
      ))}
    </div>
  );
}

const styles = {
  container: {
    width: "100vw",
    height: "100vh",
    overflow: "hidden",
    position: "relative",
    transition: "background 1s linear",
  },
  sun: {
    width: 100,
    height: 100,
    borderRadius: "50%",
    background: "radial-gradient(circle, #FFD700, #FFA500)",
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
    boxShadow: "0 0 80px #FFD700",
  },
  cloud: {
    width: 120,
    height: 60,
    background: "white",
    borderRadius: 50,
    position: "absolute",
    top: 80,
    boxShadow: "30px 10px 0 0 white, 60px 0px 0 0 white",
  },
  bird: {
    position: "absolute",
    fontSize: "24px",
  },
  mountainLeft: {
    position: "absolute",
    bottom: "200px",
    left: "0",
    width: "50%",
    height: "300px",
    background: "#2e8b57",
    clipPath: "polygon(0% 100%, 50% 0%, 100% 100%)",
  },
  mountainRight: {
    position: "absolute",
    bottom: "200px",
    right: "0",
    width: "50%",
    height: "300px",
    background: "#3cb371",
    clipPath: "polygon(0% 100%, 50% 0%, 100% 100%)",
  },
  river: {
    position: "absolute",
    bottom: "0",
    width: "100%",
    height: "200px",
    background: "linear-gradient(to top, #1e90ff, #00bfff)",
    animation: "flow 3s infinite linear",
  },
  tree: {
    position: "absolute",
    bottom: "200px",
    width: 40,
    height: 100,
    background: "#8B4513",
    borderRadius: 10,
    boxShadow: "0 -60px 0 40px #228B22",
  },
  firefly: {
    position: "absolute",
    width: 8,
    height: 8,
    background: "yellow",
    borderRadius: "50%",
    boxShadow: "0 0 10px yellow",
  },
};