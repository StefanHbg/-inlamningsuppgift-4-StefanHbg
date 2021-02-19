import './App.css';
import { Route, Switch } from 'react-router-dom';
import Events from './components/Events';
import Order from './components/Order';
import Receipt from './components/Receipt';

function App() {
  return (
    <div className="App-header">
    <Switch>
      <Route path="/" component={ Events } exact />
      <Route path="/order/:id" component={ Order } />
      <Route path="/receipt/:id" component={ Receipt } />
    </Switch>  
    </div>
  );
}

export default App;
