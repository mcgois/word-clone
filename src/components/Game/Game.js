import React, { useState } from "react";

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
        />
      </form>
    </>
  );
}

export default Game;
