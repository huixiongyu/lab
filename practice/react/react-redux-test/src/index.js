import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './AppRouter';
// import { Provider } from 'react-redux';
// import store from './store';

// const App = (
//   <Provider store={store}>
//     <TodoList />
//   </Provider>
// )

ReactDOM.render(
  <AppRouter />,
  document.getElementById('root')
);
