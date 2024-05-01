import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  const [userInput, setUserInput] = useState('');
  const [response, setResponse] = useState('');

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const result = await axios.post(`${process.env.REACT_APP_CHATGPT_BACKEND_URL}/chat`, { message: userInput });
      setResponse(result.data.message);
    } catch (error) {
      console.error('Error fetching response:', error);
      setResponse('Failed to get response');
    }
  };

  return (
    <div>
      <h1>ChatGPT Clone</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={userInput} onChange={handleInputChange} />
        <button type="submit">Send</button>
      </form>
      <p>Response: {response}</p>
    </div>
  );
}

export default App;