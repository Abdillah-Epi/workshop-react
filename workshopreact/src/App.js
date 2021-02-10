import Contact from "./Contact";
import Home from "./Home";
import Menu from "./Menu";
import Navbar from "./Navbar";

const { BrowserRouter, Switch, Route } = require("react-router-dom");

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/menu" component={Menu}/>
        </Switch>
      </BrowserRouter>
      <Contact />
    </div>
  );
}

export default App;
