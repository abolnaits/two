import logo from './logo.svg';
//import './App.css';
import Nav from './Nav.js';
import About from './About.js';
import Services from './Services.js';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav></Nav>
        <About></About>
        <Services></Services>
      </header>
    </div>
  );
}

export default App;
