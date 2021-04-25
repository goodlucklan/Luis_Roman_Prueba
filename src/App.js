import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from './components/Layout'
import './styles/style.css'
import 'materialize-css/dist/css/materialize.css'
import Home from "./components/Home";
import Login from "./components/Login";
function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Login" component={Login} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
