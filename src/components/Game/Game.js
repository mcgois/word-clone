import React, { useState } from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

import { WORDS } from "../../data";
import { sample } from "../../utils";
import GuessList from "./GuessList";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guess, setGuess] = useState("");
  const [guessList, setGuessList] = useState([]);

  const result = checkResult();

  function checkResult() {
    if (
      guessList.length >= NUM_OF_GUESSES_ALLOWED &&
      guessList.filter((guess) => guess.guess === answer).length === 0
    ) {
      return false;
    }
    if (guessList.filter((guess) => guess.guess === answer).length > 0) {
      return true;
    }
    return undefined;
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (guess.length < 5) {
      return;
    }

    addGuessToList(guess);
    setGuess("");
  }

  function addGuessToList(g) {
    const newGuess = {
      id: crypto.randomUUID(),
      guess: g,
    };
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
          disabled={result === false}
        />
      </form>
      {result === true && (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in
            <strong> {guessList.length} guesses</strong>.
          </p>
        </div>
      )}
      {result === false && (
        <div className="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </div>
      )}
    </>
  );
}

export default Game;
