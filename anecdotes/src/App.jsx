import { useState } from "react";

const App = () => {

  const anecdotesList = [
    {
      anecdote: "If it hurts, do it more often.",
      votes: 0,
    },
    {
      anecdote: "Adding manpower to a late software project makes it later!",
      votes: 0,
    },
    {
      anecdote:
        "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
      votes: 0,
    },
    {
      anecdote:
        "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
      votes: 0,
    },
    {
      anecdote: "Premature optimization is the root of all evil.",
      votes: 0,
    },
    {
      anecdote:
        "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
      votes: 0,
    },
    {
      anecdote:
        "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
      votes: 0,
    },
    {
      anecdote: "The only way to go fast, is to go well.",
      votes: 0,
    },
  ];

  const [anecdotes, setAnecdotes] = useState(anecdotesList);
  const [selected, setSelected] = useState(0);

  const nextAnecdote = () => {
    const next = Math.floor(Math.random() * anecdotes.length);
    setSelected(next);
  }

  const voteAnecdote = () => {
    const votedAnecdote = anecdotes[selected];
    votedAnecdote.votes = votedAnecdote.votes + 1;

    const updatedAnecdotes = [...anecdotes];
    updatedAnecdotes[selected] = votedAnecdote;

    setAnecdotes(updatedAnecdotes);
  }

  const mostVotedAnecdote = anecdotes.reduce(
    (max, anecdote) => anecdote.votes > max.votes ? anecdote : max, 
    {votes: 0}
  )
  
  return (
    <div>
      <h3>{anecdotes[selected].anecdote}</h3>
      <p> Has {anecdotes[selected].votes} votes</p>

      <button onClick={voteAnecdote}>Vote</button>
      <button onClick={nextAnecdote}>Next anecdote</button>

      {mostVotedAnecdote.votes !== 0 && (
        <>
          <h3>Anecdote with most votes</h3>
          <p> {mostVotedAnecdote.anecdote} </p>
          <p> Has {mostVotedAnecdote.votes} votes </p>
        </>
      )}
    </div>
  );
};

export default App;
