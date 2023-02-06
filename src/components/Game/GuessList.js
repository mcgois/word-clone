function GuessList({ guessList }) {
  return (
    <div className="guess-results">
      {guessList.map((item) => (
        <p key={item.id} className="guess">
          {item.guess}
        </p>
      ))}
    </div>
  );
}

export default GuessList;
