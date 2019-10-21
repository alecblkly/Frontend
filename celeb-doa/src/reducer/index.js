import { START_LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE, START_REGISTERING, REGISTRATION_SUCCESS, REGISTRATION_FAILURE, START_DELETION_SCORE, DELETION_SCORE_SUCCESS, DELETION_SCORE_FAILURE, START_QUIZ, QUIZ_SUCCESS, QUIZ_FAILURE, CELEBRITY_FAILURE, START_USERNAME, USERNAME_SUCCESS, USERNAME_FAILURE, START_PASSWORD, PASSWORD_SUCCESS, PASSWORD_FAILURE } from '../actions'

const initialState = {
    loginData: {},
    registerData: {},
    quizScore: [],
    celeb: [],
    isFetching: false,
    error: ""
  };

  //reducer takes in :state = initialState, action
const reducer = (state = initialState, action) => {
    switch (action.type) {

      case START_LOGIN:
        return {
          ...state,
          isFetching: true,
          error: ""
        }

      case LOGIN_SUCCESS:
        return {
          ...state,
          isFetching: false,
          error: '',
          loginData: action.payload
        }

      case LOGIN_FAILURE:
        return {
          ...state,
          error: action.payload,
          isFetching: false
        }
      
      case START_REGISTERING:
        return {
          ...state,
          isFetching: true,
          error: ""
        }

      case REGISTRATION_SUCCESS: 
      return {
        ...state,
        isFetching: false,
        error: '',
        registerData: action.payload
      }

      case REGISTRATION_FAILURE:
        return {
          ...state,
          error: action.payload,
          isFetching: false
        }

      case START_DELETION_SCORE:
        return {
          ...state,
          isFetching: true,
          error: ''
        }

      case DELETION_SCORE_SUCCESS:
        return {
          ...state,
          quizScore: action.payload
        }
      
      case DELETION_SCORE_FAILURE:
        return {
          ...state,
          error: action.payload,
          isFetching: false
        }

      case START_CELEBRITY:
        return {
          ...state, 
          isFetching: true,
          error: ''
        } 
      
      case CELEBRITY_SUCCESS:
        return {
          ...state, 
          isFetching: false,
          error: '',
          celeb: action.payload
        }
      
      case CELEBRITY_FAILURE:
        return {
          ...state,
          error: action.payload,
          isFetching: false
        }

      case START_USERNAME:
        return {
          ...state,
          isFetching: true,
          error: ''
        }
      
      case USERNAME_SUCCESS:
        return {
          ...state,
          isFetching: false,
          error: '',
          loginData: action.payload
        }

      case USERNAME_FAILURE:
        return {
          ...state,
          error: action.payload,
          isFetching: false
        }

      case START_PASSWORD:
        return {
          ...state,
          error: action.payload,
          error:''
        }

      case PASSWORD_SUCCESS:
        return {
          ...state,
          isFetching: false,
          error: '',
          loginData: action.payload
        }

      case PASSWORD_FAILURE:
        return {
          ...state,
          error: action.payload,
          isFetching: false
        }

        default:
            return state;
        }
      };
      
      export default reducer;