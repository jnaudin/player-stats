import "./App.css";
import { PlayerList } from "./components/PlayerList";

function App() {
  return (
    <div className="app">
      <header className="app__header">Player stats</header>
      <PlayerList />
    </div>
  );
}

export default App;
