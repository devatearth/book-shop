import "./App.css";
import Login from "./pages/login/login";
import Author from './pages/author/author'
import AuthorDetails from './pages/authorDetails/authorDetails'
import Guest from './pages/guest/guest'
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
