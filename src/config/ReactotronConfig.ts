/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-non-null-assertion */

import Reactotron from 'reactotron-react-js';
import { reactotronRedux } from 'reactotron-redux';
import reactotronSaga from 'reactotron-redux-saga';

// Reactotron.configure({ name: 'Courses Platform', environment: 'development' })
//   .use(reactotronRedux())
//   .use(reactotronSaga({ except: [''] }))
//   .connect();

declare global {
  interface Console {
    tron: any;
  }
}

if (process.env.ENVIRONMENT === 'development') {
  const tron = Reactotron.configure()
    .use(reactotronRedux())
    .use(reactotronSaga({ except: [''] }))
    .connect();

  tron.clear!();

  console.tron = tron;
}
