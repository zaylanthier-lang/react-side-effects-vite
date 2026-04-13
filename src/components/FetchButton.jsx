// Step 1: Accept `fetchJoke` as a prop
const FetchButton = ({ fetchJoke }) => {
  return (
    // Step 2: Add onClick
    <button className="fetch-button" onClick={fetchJoke}>
      Get a New Joke
    </button>
  );
};

export default FetchButton;