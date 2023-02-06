import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";
import Guess from "./Guess";

function GuessList({ guessList, answer }) {
  return (
    <div className="guess-results">
      {range(0, NUM_OF_GUESSES_ALLOWED).map((item) => (
        <Guess key={item} guess={guessList[item]} answer={answer} />
      ))}
    </div>
  );
}

export default GuessList;
