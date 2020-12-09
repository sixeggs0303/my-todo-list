import "./css/Text.css"
import Title from "antd/lib/typography/Title";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation";
import NotFound from "./components/NotFound";
import TodoList from "./components/TodoList";
import DoneListContainer from "./containers/DoneListContainer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title className="title-text"> Todo List</Title>
      </header>
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route exact path="/done" component={DoneListContainer} />
          <Route exact path="/" component={TodoList} />
          <Route exact path="/notFound" component={NotFound} />
          <Redirect to="/notFound" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
