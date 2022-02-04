import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Popular from './components/Popular/Popular';
import './App.css';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Popular} />
          <Route path='*' render={() => <Redirect to='/' />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
