/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import Reactotron from 'reactotron-react-js';
import { reactotronRedux } from 'reactotron-redux';
import reactotronSaga from 'reactotron-redux-saga';

const reactotron = Reactotron.configure({ name: 'Courses Platform', environment: 'development' })
  .use(reactotronRedux())
  .use(reactotronSaga({ except: [''] }))
  .connect();

export default reactotron;
