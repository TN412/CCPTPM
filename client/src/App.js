import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('/api/data');
      setData(response.data.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  const checkHealth = async () => {
    try {
      const response = await axios.get('/api/health');
      setMessage(`Server status: ${response.data.status}`);
    } catch (error) {
      setMessage('Error connecting to server');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>React + Node.js Full-Stack App</h1>
        <p>Welcome to your full-stack application!</p>
      </header>

      <main className="App-main">
        <section className="section">
          <h2>Server Connection</h2>
          <button onClick={checkHealth} className="btn">
            Check Server Health
          </button>
          {message && <p className="message">{message}</p>}
        </section>

        <section className="section">
          <h2>Data from API</h2>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ul className="data-list">
              {data.map(item => (
                <li key={item.id} className="data-item">
                  {item.name}
                </li>
              ))}
            </ul>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
