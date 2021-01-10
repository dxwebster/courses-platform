import { createStore } from 'redux';
import Reactotron from '../ReactotronConfig';

import rootReducer from './rootReducer';

const store = createStore(rootReducer, Reactotron.createEnhancer());

export default store;
