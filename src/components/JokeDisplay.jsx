// Step 1: Accept props
const JokeDisplay = ({ joke, loading }) => {
  return (
    <div className="joke-container">
      {/* Step 2 & 3 */}
      <p>{loading ? "Loading..." : joke}</p>
    </div>
  );
};

export default JokeDisplay;
