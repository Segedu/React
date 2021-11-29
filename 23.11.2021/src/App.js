import logo from './logo.svg';
import './App.css';
import LogInWithValidation from './components/LogInWithValidation';
import GetFromJsonPlaceholder from './components/GetPosts';

function App() {
  return (
    <div className="App">
      <LogInWithValidation />
      <GetFromJsonPlaceholder />
    </div>
  );
}

export default App;
