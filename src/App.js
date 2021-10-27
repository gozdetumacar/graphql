import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';
import LaunchDetailsPage from './pages/LaunchDetailsPage/LaunchDetailsPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage}>
          </Route>
          <Route path="/details" component={LaunchDetailsPage}>
           </Route>
          <Route component={NotFoundPage}>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
