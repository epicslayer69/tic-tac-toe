import { createStore } from 'redux';

import reducer from './store';

export { appActionTypes } from './store';

export default createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
