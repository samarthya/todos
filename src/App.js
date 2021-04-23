import './App.css';
import Header from './Header.js';
import Item from './Item.js';

function App() {
  return (
    <div className="App">
      <Header />
      <ol>
        <Item done={false} text={"First Todo"} />
      </ol>
    </div >
  );
}

export default App;
