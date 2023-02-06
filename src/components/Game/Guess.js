import { range } from "../../utils";

function Guess({ guess = "" }) {
  const letters = guess.split("");

  return (
    <p className="guess">
      {range(0, 5).map((i) => (
        <span key={i} className="cell">
          {letters[i] || ""}
        </span>
      ))}
      {/* {letters.map((letter, index) => (
        <span key={index} className="cell">
          {letter}
        </span>
      ))} */}
    </p>
  );
}

export default Guess;
