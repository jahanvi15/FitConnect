import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import UserRegister from './UserRegister';
import TrainerRegister from './TrainerRegister';
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route exact path="/">
          <UserRegister/>
        </Route>
        <Route path="/TrainerRegister">
          <TrainerRegister/>
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
