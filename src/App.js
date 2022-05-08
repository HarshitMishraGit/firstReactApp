// import logo from './logo.svg';
import './App.css';
import New from './components/flowbite/New';
import Form from './components/form/Form';
import Hello from './components/Hello.js';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      {/* <Navbar title="Navbar"/> */}
      <Navbar title="EditorX" />
      <header className="App-header">
        <Form/>
        <Hello />
        <New/>
      </header>
    </div>
  );
}

export default App;
