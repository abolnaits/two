import logo from './logo.svg';
//import './App.css';
import Nav from './Nav.js';
import About from './About.js';
import Services from './Services.js';
import Item from './Item.js';

//react router
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';



function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Nav></Nav>
          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/about" component={About}/>
            <Route path="/services" exact component={Services}/>
            <Route path="/services/:id" component={Item}/>
          </Switch>
        </header>
      </div>
    </Router>
  );
}

//Home page
const Home = () =>{
  return(
    <div>
      <h1>Home Page</h1>
    </div>
  )
};

export default App;
