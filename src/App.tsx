import './App.css';
import Stars from './components/Stars'

export let count: number = 5;

function App() {
  return (
      <Stars count={5} />
  );
}

export default App;
