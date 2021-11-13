import "./App.css";
import Portfolio from "./components/Portfolio/Portfolio";
import Store from "./components/Store/Store";
import DropdownList from "./components/DropdownList/DropdownList";

function App() {
  return (
    <div className="App">
      <Portfolio />
      <Store />
      <DropdownList />
    </div>
  );
}

export default App;
