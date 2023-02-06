import React, { useEffect, useState } from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

import { WORDS } from "../../data";
import { sample } from "../../utils";
import GuessList from "./GuessList";
import ResultPanel from "./ResultPanel";

const answer = sample(WORDS);
console.info({ answer });

function Game() {
  const [guess, setGuess] = useState("");
  const [guessList, setGuessList] = useState([]);
  const [resultStatus, setResultStatus] = useState("playing");

  useEffect(() => {
    if (
      guessList.length >= NUM_OF_GUESSES_ALLOWED &&
      !guessList.includes(answer)
    ) {
      setResultStatus("lost");
      return;
    }

    if (guessList.includes(answer)) {
      setResultStatus("won");
    }
  }, [guessList, setResultStatus]);

  function handleSubmit(event) {
    event.preventDefault();

    if (guess.length < 5) {
      return;
    }

    addGuessToList(guess);
    setGuess("");
  }

  function addGuessToList(newGuess) {
    setGuessList([...guessList, newGuess]);
  }

  return (
    <>
      <GuessList guessList={guessList} answer={answer} />
      <form className="guess-input-wrapper" onSubmit={handleSubmit}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          id="guess-input"
          type="text"
          value={guess}
          onChange={(event) => {
            setGuess(event.target.value.toUpperCase());
          }}
          maxLength={5}
          minLength={5}
          disabled={resultStatus === "lost"}
        />
      </form>
      <ResultPanel
        answer={answer}
        tries={guessList.length}
        result={resultStatus}
      />
    </>
  );
}

export default Game;
