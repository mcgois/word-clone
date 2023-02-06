function ResultPanel({ result, tries, answer }) {
  if (result === "won") {
    return (
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong> {tries} guesses</strong>.
        </p>
      </div>
    );
  }

  if (result === "lost") {
    return (
      <div className="sad banner">
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      </div>
    );
  }

  return null;
}

export default ResultPanel;
