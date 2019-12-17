import { combineReducers } from 'redux';
import PostReduser from './PostRedusers';
import UserReducer from './UserReduser';

export default combineReducers({
   posts: PostReduser,
   users: UserReducer
});