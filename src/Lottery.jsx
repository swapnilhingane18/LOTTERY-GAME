import { useState, useEffect } from "react";
import "./Lottery.css";
import Ticket from "./TicketNumber.jsx";
import confetti from "canvas-confetti";

/* 🎟️ Generate random ticket */
function generateTicket() {
  return [
    Math.floor(Math.random() * 10),
    Math.floor(Math.random() * 10),
    Math.floor(Math.random() * 10),
  ];
}

/* ➕ Sum of ticket */
function sum(arr) {
  return arr.reduce((a, b) => a + b, 0);
}

/* 🎆 FIREWORKS EFFECT */
function fireWorks() {
  confetti({
    particleCount: 200,
    spread: 120,
    startVelocity: 45,
    origin: { y: 0.6 },
  });

  confetti({
    particleCount: 150,
    angle: 60,
    spread: 100,
    origin: { x: 0 },
  });

  confetti({
    particleCount: 150,
    angle: 120,
    spread: 100,
    origin: { x: 1 },
  });
}

/* 🎊 CONFETTI FALLING EFFECT */
function fallingConfetti() {
  confetti({
    particleCount: 120,
    spread: 70,
    origin: { y: 0 },
  });
}

/* 🎰 LOTTERY COMPONENT */
export default function Lottery({ winningSum = 15 }) {
  const [ticket, setTicket] = useState(generateTicket());
  const isWinner = sum(ticket) === winningSum;

  /* 🔥 RUN BOTH EFFECTS WHEN USER WINS */
  useEffect(() => {
    if (isWinner) {
      fireWorks();          // crack fireworks
      fallingConfetti();    // falling confetti
    }
  }, [isWinner]);

  return (
    <div className="lottery-container">
      <h1>Lottery Game!</h1>

      <Ticket ticket={ticket} />

      <button onClick={() => setTicket(generateTicket())}>
        Buy New Ticket
      </button>

      <h3>
        {isWinner ? "🎉 Congratulations, you won!" : "Try Again"}
      </h3>
    </div>
  );
}
