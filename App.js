
import React, { useState } from 'react';

const golfers = [
  { name: "Tiger Woods", video: "https://www.youtube.com/embed/U7X1u7a8Z3I" },
  { name: "Rory McIlroy", video: "https://www.youtube.com/embed/WPzSxhDQCqU" }
];

export default function App() {
  const [guess, setGuess] = useState("");
  const [current, setCurrent] = useState(golfers[0]);
  const [feedback, setFeedback] = useState("");

  const handleGuess = () => {
    if (guess.toLowerCase().includes(current.name.toLowerCase().split(" ")[0])) {
      setFeedback("✅ Correct!");
    } else {
      setFeedback("❌ Try again.");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h1>Guess the Golfer</h1>
      <iframe width="560" height="315" src={current.video} frameBorder="0" allowFullScreen></iframe>
      <div style={{ marginTop: "1rem" }}>
        <input value={guess} onChange={(e) => setGuess(e.target.value)} placeholder="Enter golfer's name" />
        <button onClick={handleGuess}>Guess</button>
        <p>{feedback}</p>
      </div>
    </div>
  );
}
