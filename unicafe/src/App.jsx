import { useState } from "react";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <>
      <h1>Give feedback</h1>
      <Button text="Good" onClick={() => setGood(good + 1)}  />
      <Button text="Neutral" onClick={() => setNeutral(neutral + 1)} />
      <Button text="Bad" onClick={() => setBad(bad + 1)} />

      <Statistics stats={{ good, neutral, bad }} />
    </>
  );
};

const Button = ({text, onClick}) => <button onClick={onClick}> {text} </button>

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

      <table>
        <tbody>
          <StatisticLine text="Good" value={good} />
          <StatisticLine text="Neutral" value={neutral} />
          <StatisticLine text="Bad" value={bad} />

          <StatisticLine text="All" value={total} />
          <StatisticLine text="Average" value={average} />
          <StatisticLine text="Positive" value={`${positive}%`} />
        </tbody>
      </table>
    </div>
  );
}

const StatisticLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
);

export default App;
