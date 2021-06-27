import logo from './logo.svg';
import './App.css';
import FirstComponent from './components/FirstComponent';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hello World
        </p>
        <FirstComponent defaultMood='sad' newMood='happy'/>
        <FirstComponent defaultMood='angry' newMood='calm'/>
        <Counter />
      </header>
    </div>
  );
}

export default App;
