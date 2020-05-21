import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from './common/header/index.js';
import Home from './pages/home';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <BrowserRouter>
        <div>
          <Route path="/" exact component={Home}></Route>
          <Route path="/detail" exact render={() => <div>detail</div>}></Route>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
