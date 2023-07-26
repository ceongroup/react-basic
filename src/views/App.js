import logo from './logo.svg';
import './App.scss';
import MyComponent from './Example/MyComponent';

let App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello world from ReactJS
        </p>
        <a
          className="App-link"
          href="https://react.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          React.Dev
        </a>
        <br />
        <MyComponent />
      </header>
    </div >
  );
}

export default App;
