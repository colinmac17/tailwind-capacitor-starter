import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="Tailwind Logo" />
        <p className="mt-10 pt-10">
          TailwindCSS Capacitor Demo
        </p>
        <a
          className="text-indigo-500"
          href="https://tailwindcss.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Tailwind
        </a>
        <a
          className="text-indigo-500"
          href="https://capacitorjs.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Capacitor
        </a>
      </header>
    </div>
  );
}

export default App;
