import {Route, Switch} from 'react-router-dom';
import './App.css';
import AllMeetup from './pages/AllMeetup';
import NewMeetup from './pages/NewMeetup';
import Favorites from './pages/Favorites';

import Layout from './components/layout/Layout';

function App() {
  return (
    <Layout className="App">
      
      <Switch>
        <Route path='/' exact><AllMeetup/></Route>
        <Route path='/new-meetup'><NewMeetup/></Route>
        <Route path='/favorites'><Favorites/></Route>
      </Switch>
    </Layout>
  );
}

export default App;
