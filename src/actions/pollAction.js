import {
    pollService,
  } from '../services';
  import {reset} from 'redux-form';

  
  export const LIST_POLLS = 'LIST_POLLS';
  export const LIST_POLLS_SUCCESS = 'LIST_POLLS_SUCCESS';
  export const LIST_POLLS_FAILURE = 'LIST_POLLS_FAILURE';
  
  export const CREATE_POLL = 'CREATE_POLL';
  export const CREATE_POLL_SUCCESS = 'CREATE_POLL_SUCCESS';
  export const CREATE_POLL_FAILURE = 'CREATE_POLL_FAILURE';
  
  export const DELETE_POLL = 'DELETE_POLL';
  export const DELETE_POLL_SUCCESS = 'DELETE_POLL_SUCCESS';
  export const DELETE_POLL_FAILURE = 'DELETE_POLL_FAILURE';
  
  // List all polls
  export const listPolls = () => {
    function requestPolls() {
      return {
        type: LIST_POLLS,
      };
    }
  
    function fetchListPollsSuccess(polls) {
      return {
        type: LIST_POLLS_SUCCESS,
        polls,
      };
    }
  
    function fetchListPollsFailure(error) {
      return {
        type: LIST_POLLS_FAILURE,
        error,
      };
    }
    return (dispatch) => {
      dispatch(requestPolls());
      return pollService.listPolls()
        .then(
          (polls) => {
            dispatch(fetchListPollsSuccess(polls));
          },
          (error) => {
            dispatch(fetchListPollsFailure(error));
          },
        );
    };
  };
  
  // Create a new poll
  export const createPoll = (props) => {
    function createNewPoll() {
      return {
        type: CREATE_POLL,
      };
    }
  
    function createPollSuccess(newPoll) {
      return {
        type: CREATE_POLL_SUCCESS,
        newPoll,
      };
    }
  
    function createPollFailure(error) {
      return {
        type: CREATE_POLL_FAILURE,
        error,
      };
    }
    return (dispatch) => {
      dispatch(createNewPoll(props));
      return pollService.createPoll(props).then(
        (newPoll) => {
          dispatch(createPollSuccess(newPoll));
          dispatch(reset('create_poll'));
        },
        (error) => {
          dispatch(createPollFailure(error));
        },
      );
    };
  };
  
  
  // delete a poll
  export const deletePoll= (idPoll) => {
    function deleteSelectedPoll() {
      return {
        type: DELETE_POLL,
      };
    }
  
    function deletePollSuccess(idPoll) {
      return {
        type: DELETE_POLL_SUCCESS,
        idPoll,
      };
    }
  
    function deletePollFailure(error) {
      return {
        type: DELETE_POLL_FAILURE,
        error,
      };
    }
    return (dispatch) => {
      dispatch(deleteSelectedPoll(idPoll));
      return pollService.deletePoll(idPoll)
        .then(
          (idPoll) => {
            dispatch(deletePollSuccess(idPoll));
          },
          (error) => {
            dispatch(deletePollFailure(error));
          },
        );
    };
  };