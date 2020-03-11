import { connect } from 'react-redux';
import {
  reduxForm, formValueSelector, SubmissionError,
} from 'redux-form';
import {
    fetchPoll, fetchStatsByPoll,
  } from '../actions/pollAction';
import StatsPollPage from '../components/poll/StatsPollPage';


const mapStateToProps = (state) => {
  return ({

    isFetchingStatsPoll: state.poll.isFetchingStatsPoll,
    statsPoll: state.poll.statsPoll,
    isFetchingPoll: state.poll.isFetchingPoll,
    activePoll: state.poll.activePoll,
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchPoll: idPoll =>  dispatch(fetchPoll(idPoll)),
    fetchStatsByPoll: idPoll =>  dispatch(fetchStatsByPoll(idPoll)),
})};

const StatsPollPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(StatsPollPage);

export default StatsPollPageContainer;
