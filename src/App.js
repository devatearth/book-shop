import "./App.css";
import Login from "./Screens/login/Login";
import Author from './Screens/author/Author'
import AuthorDetails from './Screens/authorDetails/AuthorDetails'
import Guest from './Screens/guest/Guest'
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/author" exact component={Author}/>
          <Route path="/author/:id" component={AuthorDetails}/>
          <Route path="/guest" exact component={Guest} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
