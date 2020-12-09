import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';
import './App.css';
import TodoList from './components/TodoList'
import DoneListContainer from './containers/DoneListContainer'
import NotFound from './components/NotFound'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Todo List</h3>
      </header>
      <BrowserRouter>
        <ul>
          {/* <li><NavLink to="/">nav link</NavLink></li> */}
          {/* <li><Redirect to="/login"></Redirect></li> */}
          <li><NavLink to="/">go to list page</NavLink></li>
          <li><NavLink to="/done">go to done page</NavLink></li>
        </ul>
        <Switch>
          <Route path="/done" component={DoneListContainer} />
          <Route exact path="/" component={TodoList} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
