import Quiz from './components/Quiz';
import LanguageToggle from './components/LanguageToggle';
import './App.css'; // Keep base styling if desired, or remove if not needed.

function App() {
  return (
    <div className="App">
      <LanguageToggle />
      <Quiz />
    </div>
  );
}

export default App;
