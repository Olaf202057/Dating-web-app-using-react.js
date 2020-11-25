import {createStore} from 'redux'
import rootReducer from '../reducers'

const configStore = () => {
  const store = createStore(rootReducer);
  return store
}

export default configStore;