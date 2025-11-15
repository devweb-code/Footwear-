import React, { useState } from "react";

// ne pas oublier son keyframes pour une éventuelle réeutilisation en bas.

const StarExplosionButton = ({className}) => {
  const [stars, setStars] = useState([]);

  const colors = [
    "#facc15", // jaune
    "#a855f7", // violet
    "#ec4899", // rose
    "#22d3ee", // cyan
    "#f87171", // rouge clair
  ];

  const handleClick = (e) => {
    const newStars = Array.from({ length: 25 }).map((_, i) => ({
      id: Date.now() + i,
      x: Math.random() * 160 - 80, // direction aléatoire horizontale
      y: Math.random() * 160 - 80, // direction aléatoire verticale
      color: colors[Math.floor(Math.random() * colors.length)],
      scale: (Math.random() * 0.6 + 0.5).toFixed(2),
      duration: (Math.random() * 0.7 + 0.5).toFixed(2), // durée d'animation différente
    }));

    setStars((prev) => [...prev, ...newStars]);

    // Nettoyage après 1s
    setTimeout(() => {
      setStars((prev) => prev.filter((s) => !newStars.includes(s)));
    }, 1000);
  };

  return (
    <div className="sm:relative sm:flex sm:justify-center sm:items-center sm:overflow-visible">
      <button
        onClick={handleClick}
        className={className}
      >
        Order Now
      </button>

      {stars.map((star) => (
        <span
          key={star.id}
          className="absolute text-white"
          style={{
            left: "50%",
            top: "50%",
            transform: `translate(-50%, -50%)`,
            color: star.color,
            fontSize: `${10 + Math.random() * 12} px`,
            animation: `flyStar ${star.duration}s ease-out forwards`,
            "--tx": `${star.x}px`,
            "--ty": `${star.y}px`,
            "--scale": star.scale,
          }}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default StarExplosionButton;

// @keyframes flyStar {
//   0% {
//     opacity: 1;
//     transform: translate(-50%, -50%) scale(var(--scale, 1));
//   }
//   60% {
//     opacity: 1;
//     transform: translate(calc(-50% + var(--tx, 0px)), calc(-50% + var(--ty, 0px)))
//       scale(calc(var(--scale, 1) * 1.2));
//   }
//   100% {
//     opacity: 0;
//     transform: translate(calc(-50% + var(--tx, 0px)), calc(-50% + var(--ty, 0px)))
//       scale(0);
//   }
// }