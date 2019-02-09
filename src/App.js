import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import User from './pages/User';
import UserNew from './pages/UserNew';
import UserChats from './pages/UserChats';
import UserChat from './pages/UserChat';
import Donor from './pages/Donor';
import DonorNew from './pages/DonorNew';
import DonorItemNew from './pages/DonorItemNew';
import DonorItemChats from './pages/DonorItemChats';
import DonorChat from './pages/DonorChat';
import Error from './pages/Error';
import './../node_modules/bulma/css/bulma.css';

class App extends Component {
  render() {
    return (
      <section className='hero is-light is-bold is-fullheight'>
        <div className='hero-body'>
          <div className='container'>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route exact path='/user' component={User} />
              <Route path='/user/new' component={UserNew} />
              <Route path='/user/chats' component={UserChats} />
              <Route path='/user/chat/:id' component={UserChat} />
              <Route exact path='/donor' component={Donor} />
              <Route path='/donor/new' component={DonorNew} />
              <Route path='/donor/item/new' component={DonorItemNew} />
              <Route path='/donor/item/:id' component={DonorItemChats} />
              <Route path='/donor/chat/:id' component={DonorChat} />
              <Route component={Error} />
            </Switch>
          </div>
        </div>
      </section>
    );
  }
}

export default App;
