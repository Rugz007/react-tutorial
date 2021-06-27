import logo from './logo.svg';
import './App.css';
import FirstComponent from './components/FirstComponent';

function App() {
  const logMessage = () =>
  {
    console.log("This is our message")
  }
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hello World
        </p>
        <FirstComponent mood='sad' logFunction={logMessage}>
          <button>Make me happy :)</button>
        </FirstComponent>
      </header>
    </div>
  );
}

export default App;
