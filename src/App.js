import logo from './Assets/avatar.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div className="App-menu">
          <a href="#">Home</a>
          <a href="#">Projects</a>
          <a href="#">Resume</a>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hi There! 👋
        </p>
        <p>
          I'm Long Nguyen
        </p>
      </header>
    </div>
  );
}

export default App;
