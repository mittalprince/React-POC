import logo from './logo.svg';
import './App.css';

import TeamManagement from './team-management/App';

function App() {
  return (
    <div>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
      <div className="container">
        <TeamManagement/>
      </div>
    </div>
  );
}

export default App;
