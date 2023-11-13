import {applyMiddleware, combineReducers, legacy_createStore} from 'redux';
import thunk from 'redux-thunk';
import {reducer as authReducer} from './authentication/reducer'
import {reducer as detailsReducer} from './details/reducer'

const rootReducer = combineReducers({
   authReducer,
   detailsReducer
})

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))