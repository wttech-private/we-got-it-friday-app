import { useState, useEffect } from "react";
import "./App.css";
import styled from 'styled-components';

const Message = styled.div`
  font-size: 32px;
  color: purple;
  text-align: center;
`;

const StyledButton = styled.button`
  display: inline-block;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  color: #ffffff;
  background-color: #3498db;
  border-radius: 4px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  transition: all 0.3s ease-in-out;
  margin: 150px;

  &:hover {
    background-color: #2980b9;
    box-shadow: 0 4px 6px rgba(0,0,0,0.3);
    transform: translateY(-2px);
  }

  &:active {
    background-color: #2980b9;
    box-shadow: 0 2px 3px rgba(0,0,0,0.3);
    transform: translateY(1px);
  }
`;

export default function App() {
  const [isFriday, setIsFriday] = useState(null);
  const [minutesToFriday, setMinutesToFriday] = useState(null);

  useEffect(() => {
    async function fetchData() {
      fetch(process.env.REACT_APP_API_URL + '/isFriday', {
        method: "GET",
      })
        .then((response) => response.text())
        .then(setIsFriday);
    }
    fetchData();
  }, []);

  function onClick() {
    fetch(process.env.REACT_APP_API_URL + '/minutesToFriday', {
      method: "GET",
    })
      .then((response) => response.text())
      .then(setMinutesToFriday);
  }

  return (
    <div className="App">
      {isFriday === 'true' ? (
        <Message>Dzisiaj piątek! :D</Message>
      ) : (
        <Message>Dzisiaj nie jest piątek :(</Message>
      )}
      <StyledButton onClick={onClick} >Ile mam jeszcze czekać?</StyledButton>
      {minutesToFriday ? (
        <Message>Zostało jeszcze {minutesToFriday} minut do piątku.</Message>
      ) : null}
    </div>
  );
}
