import './App.css';
import Navbar from './components/nav'
import Home from './pages/Home'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/' exact component={Home}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
