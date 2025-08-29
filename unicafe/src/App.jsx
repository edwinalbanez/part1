import { useState } from "react";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <>
      <h1>Give feedback</h1>
      <button>Good</button>
      <button>Neutral</button>
      <button>Bad</button>

      <Statistics stats={{good, neutral, bad}} />
    </>
  );
};

const Statistics = ({stats}) => {

  const { good, neutral, bad } = stats;
  const total = good + neutral + bad;
  const average = (good - bad) / total;
  const positive = (good / total) * 100;

  if (total === 0) {
    return (
      <>
        <p>No feedback given</p>
      </>
    )
  }

  return (
    <div>
      <h2>Statistics</h2>

      <p>Good  {good} </p>
      <p>Neutral {neutral} </p>
      <p>Bad  {bad} </p>

      <p>All {total}  </p>
      <p>Average {average} </p>
      <p>Positive {positive} %</p>
    </div>
  );
}

export default App;
