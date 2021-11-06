import "./App.css";
// import Dashboard from "./components/Dashboard";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import ActivityForm from "./components/resonsiveactivityform";
import dashboard from "./components/Dashboard";
// import activity from "./components/resonsiveactivityform";

function App() {
  return (
    <>
    <Router>
    <Switch>
      <Route exact path="/components/Dashboard" component={dashboard} />
      <Route exact path="/components/resonsiveactivityform" component={ActivityForm} />
    </Switch>
  </Router>
  </>
  );
}

export default App;
