import immutablePersistenceTransform from '../services/ImmutablePersistenceTransform'
import { AsyncStorage } from 'react-native'

const REDUX_PERSIST = {
  active: true,
  reducerVersion: '1.0',
  storeConfig: {
    key: 'primary',
    storage: AsyncStorage,
    // Reducer keys that you do NOT want stored to persistence here.
    blacklist: ['nav'],
    // Optionally, just specify the keys you DO want stored to persistence.
    // An empty array means 'don't store any reducers'.
    // whitelist: [],
    transforms: [immutablePersistenceTransform]
  }
}

export default REDUX_PERSIST
