import {
    LIST_POLLS,
    LIST_POLLS_SUCCESS,
    LIST_POLLS_FAILURE,
  
    CREATE_POLL,
    CREATE_POLL_SUCCESS,
    CREATE_POLL_FAILURE,
  
    DELETE_POLL,
    DELETE_POLL_SUCCESS,
    DELETE_POLL_FAILURE,

  } from '../actions/pollAction';
  import { toast } from 'react-toastify';
  
  const initialState = {
    polls: [],
  };
  
  const optionsSuccess = {
    className: 'alert__ma-toast--success',
    type: 'success',
  };
  
  const optionsError = {
    className: 'alert__ma-toast--error',
    type: 'error',
  };
  
  export const poll = (state = initialState, action) => {
    switch (action.type) {
      case CREATE_POLL:
        return Object.assign({}, state, {
          isRemoved: null,
          isUpdated: null,
          isCreated: false,
        });
      case CREATE_POLL_SUCCESS:
        toast.success('Enquete criada com sucesso', optionsSuccess);
        return Object.assign({}, state, {
          isRemoved: null,
          isUpdated: null,
          isCreated: true,
        });
      case CREATE_POLL_FAILURE:
        toast.error('Ocorreu um erro com sua solicitação', optionsError);
        return Object.assign({}, state, {
          isCreated: false,
          error: action.error,
        });
      case DELETE_POLL: {
          return Object.assign({}, state, {
            isDeleting: true,
            isDeleted: false,
          });
        }
      case DELETE_POLL_SUCCESS: {
          toast.success('Enquete removida com sucesso', optionsSuccess);
          return Object.assign({}, state, {
            isDeleted: true,
          });
        }
      case DELETE_POLL_FAILURE: {
          toast.error('Ocorreu um erro com sua solicitação', optionsError);
          return Object.assign({}, state, {
            error: action.error,
            isDeleted: false,
          });
        }
      case LIST_POLLS:
        return Object.assign({}, state, {
          polls: action.polls,
          isFetchingPolls: true,
          error: null,
          isCreated: false,
          isDeleted: false,
        });
      case LIST_POLLS_SUCCESS:
        return Object.assign({}, state, {
          polls: action.polls,
          isFetchingPolls: false,
          isCreated: false,
          isDeleted: false,
        });
      case LIST_POLLS_FAILURE:
        return Object.assign({}, state, {
          polls: false,
          error: action.error,
          isCreated: false,
          isDeleted: false,
        });
      default:
        return state;
    }
  };
  
  export default poll;
  