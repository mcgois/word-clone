import { checkGuess } from "../../game-helpers";
import { range } from "../../utils";

function Guess({ guess = "", answer }) {
  const check = checkGuess(guess, answer);

  return (
    <p className="guess">
      {range(0, 5).map((i) => {
        if (!check) {
          return <span key={i} className="cell"></span>;
        }

        const letter = check[i];
        const status = letter.status;
        return (
          <span key={i} className={`cell ${status}`}>
            {letter.letter}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
