import logo from './logo.svg';
import './App.css';
import Click_event from './Components/Click_event';
import Click_event_usingClassComponent from './Components/Click_event_usingClassComponent';


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Click_event name="Az with props"> </Click_event>
      <Click_event_usingClassComponent name="Azmath" data="Testing data"> </Click_event_usingClassComponent>
    </div>
  );
}

export default App;
