import * as actions from '../actions'
import LinkedList from '../linkedList';

const initialState = {
  currentUser: null,
  vocabWords: new LinkedList(),
  currentWord: 0,
  score: 0,
  numSeenWords: 1,
  numQuest: 0,
  loggedIn: false,
  loading: false,
  error: null,
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
      case actions.FETCH_ME_REQUEST:
        return Object.assign({}, state, {loading: true});
      case actions.FETCH_ME_SUCCESS:
        return Object.assign({}, state, {currentUser: action.currentUser, loading: false});
      case actions.FETCH_ME_ERROR:
        return Object.assign({}, state, {error: action.error, loading: false});
      case actions.FETCH_VOCAB_REQUEST:
        return Object.assign({}, state, {loading: true});
      case actions.FETCH_VOCAB_SUCCESS:
        return Object.assign({}, state, {vocabWords: action.vocabWords, loading: false});
      case actions.FETCH_VOCAB_ERROR:
        return Object.assign({}, state, {error: action.error, loading: false});
      case actions.FETCH_LOGIN_REQUEST:
        return Object.assign({}, state, {loading: true});
      case actions.FETCH_LOGIN_SUCCESS:
        return Object.assign({}, state, {loggedIn: true, loading: false});
      case actions.FETCH_LOGIN_ERROR:
        return Object.assign({}, state, {error: action.error, loggedIn: false, loading: false});
      case actions.INCREMENT_NUM_SEEN:
        return Object.assign({}, state, {numSeenWords: ++action.numSeenWords, loggedIn: true, loading:false});
      case actions.INCREMENT_SCORE:
        return Object.assign({}, state, {score: ++state.score, loggedIn: true, loading: false});
      case actions.INCREMENT_NUM_QUEST:
        return Object.assign({}, state, {score: ++state.numSeenWords, loggedIn: true, loading: false});
      default:
        return state;
    }
}