import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Menu from './components/ui/Menu';
import Popular from './components/Popular/Popular';
import Movie from './components/Movie/Movie';
import './App.css';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Menu />
        <Switch>
          <Route exact path='/' component={Popular} />
          <Route path='/movie/:id' component={Movie} />
          <Route path='*' render={() => <Redirect to='/' />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
