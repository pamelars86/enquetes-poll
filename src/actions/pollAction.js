import {
    pollService,
  } from '../services';
  import {reset} from 'redux-form';
  import history from '../history';

  export const FETCH_POLL = 'FETCH_POLL';
  export const FETCH_POLL_SUCCESS = 'FETCH_POLL_SUCCESS';
  export const FETCH_POLL_FAILURE = 'FETCH_POLL_FAILURE';

  export const LIST_POLLS = 'LIST_POLLS';
  export const LIST_POLLS_SUCCESS = 'LIST_POLLS_SUCCESS';
  export const LIST_POLLS_FAILURE = 'LIST_POLLS_FAILURE';
  
  export const CREATE_POLL = 'CREATE_POLL';
  export const CREATE_POLL_SUCCESS = 'CREATE_POLL_SUCCESS';
  export const CREATE_POLL_FAILURE = 'CREATE_POLL_FAILURE';

  
  export const VOTE_POLL = 'VOTE_POLL';
  export const VOTE_POLL_SUCCESS = 'VOTE_POLL_SUCCESS';
  export const VOTE_POLL_FAILURE = 'VOTE_POLL_FAILURE';
  
  export const DELETE_POLL = 'DELETE_POLL';
  export const DELETE_POLL_SUCCESS = 'DELETE_POLL_SUCCESS';
  export const DELETE_POLL_FAILURE = 'DELETE_POLL_FAILURE';


  export const FETCH_POLL_STATS = 'FETCH_POLL_STATS';
  export const FETCH_POLL_STATS_SUCCESS = 'FETCH_POLL_STATS_SUCCESS';
  export const FETCH_POLL_STATS_FAILURE = 'FETCH_POLL_STATS_FAILURE';
  
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

    //Fetch a Poll
    export const fetchPoll = (idPoll) => {
      function requestPoll() {
        return {
          type: FETCH_POLL,
        };
      }
    
      function fetchPollSuccess(activePoll) {
        return {
          type: FETCH_POLL_SUCCESS,
          activePoll,
        };
      }
    
      function fetchPollFailure(error) {
        return {
          type: FETCH_POLL_FAILURE,
          error,
        };
      }
      return (dispatch) => {
        dispatch(requestPoll());
        return pollService.fetchPoll(idPoll)
          .then(
            (activePoll) => {
              dispatch(fetchPollSuccess(activePoll));
            },
            (error) => {
              dispatch(fetchPollFailure(error));
            },
          );
      };
    };


    //Fetch a Poll'Stats
    export const fetchStatsByPoll = (idPoll) => {
      function requestStatsPoll() {
        return {
          type: FETCH_POLL_STATS,
        };
      }
    
      function fetchStatsByPollSuccess(statsPoll) {
        return {
          type: FETCH_POLL_STATS_SUCCESS,
          statsPoll,
        };
      }
    
      function fetchStatsByPollFailure(error) {
        return {
          type: FETCH_POLL_STATS_FAILURE,
          error,
        };
      }
      return (dispatch) => {
        dispatch(requestStatsPoll());
        return pollService.fetchStatsByPoll(idPoll)
          .then(
            (statsPoll) => {
              dispatch(fetchPoll(idPoll));
              dispatch(fetchStatsByPollSuccess(statsPoll));
            },
            (error) => {
              dispatch(fetchStatsByPollFailure(error));
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


  
  // Vote
  export const votePoll = (idPoll, vote) => {
    function voteNewPoll() {
      return {
        type: VOTE_POLL,
      };
    }
  
    function votePollSuccess() {
      return {
        type: VOTE_POLL_SUCCESS,
      };
    }
  
    function votePollFailure(error) {
      return {
        type: VOTE_POLL_FAILURE,
        error,
      };
    }
    return (dispatch) => {
      dispatch(voteNewPoll());
      return pollService.votePoll(idPoll, vote).then(
        (newPoll) => {
          dispatch(votePollSuccess());
          dispatch(reset('vote_poll'));
          history.push(`/stats-poll/${idPoll}`);
        },
        (error) => {
          dispatch(votePollFailure(error));
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