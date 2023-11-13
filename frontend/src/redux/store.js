import {applyMiddleware, combineReducers, legacy_createStore} from 'redux';
import thunk from 'redux-thunk';
import {reducer as authReducer} from './authentication/reducer'
import {reducer as detailsReducer} from './details/reducer'
import {reducer as doubtReducer} from './doubts/reducer'

const rootReducer = combineReducers({
   authReducer,
   detailsReducer,
   doubtReducer
})

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))