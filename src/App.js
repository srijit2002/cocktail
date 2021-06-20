import React from "react";
import GlobalStyle from "./global";
import Navbar from "./Components/Navbar";
import { AppProvider } from "./context";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./Pages/Home"
import About from "./Pages/About"
import ErrorPage from "./Pages/ErrorPage"
import Cocktail from "./Pages/Cocktail"
const App = () => {


  return (
    <AppProvider>
      <GlobalStyle />
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/"><Home/></Route>
          <Route path="/about"><About/></Route>
          <Route path="/cocktail/:id"><Cocktail/></Route>
          <Route path="*"><ErrorPage/></Route>
        </Switch>
      </Router>
    </AppProvider>

  );
}


export default App;
