import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello world from ReactJS
        </p>
        <a
          className="App-link"
          href="https://reactjs.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          React Dev
        </a>
      </header>
    </div>
  );
}

export default App;
