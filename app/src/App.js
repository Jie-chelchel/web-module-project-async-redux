import "./App.css";
import Header from "./components/Header";
import RandomQuotes from "./components/RandomQuotes";
import FetchByName from "./components/SearchByName";

function App() {
  return (
    <div className="App">
      <Header />
      <RandomQuotes />
      <FetchByName />
    </div>
  );
}

export default App;
