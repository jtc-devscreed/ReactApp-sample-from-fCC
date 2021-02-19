// import logo from './logo.svg';
import { ReactComponent as Logo } from "./logo.svg";
import './App.css';
import Posts from "./Posts";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src="/logo.svg" className="App-logo" alt="logo" /> */}
        <Logo Style={{ height: 200 }} />
        <h1>React Posts Sharer</h1>
        {/*<p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>*/}
      </header>
      <Posts />
    </div>
  );
}

export default App;
