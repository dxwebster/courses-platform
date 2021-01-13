// ReactotronConfig.js
import { reactotronRedux } from 'reactotron-redux';
import Reactotron from 'reactotron-react-js';

// then add it to the plugin list
const reactotron = Reactotron.configure({ name: 'React JS' })
  .use(reactotronRedux()) //  <- here i am!
  .connect(); //Don't forget about me!

export default reactotron;
