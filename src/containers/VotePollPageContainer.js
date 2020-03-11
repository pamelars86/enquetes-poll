import { connect } from 'react-redux';
import {
  reduxForm, formValueSelector, SubmissionError,
} from 'redux-form';
import VotePollPage from '../components/poll/VotePollPage';
import {
    fetchPoll, votePoll,
  } from '../actions/pollAction';


const mapStateToProps = (state) => {
  const selector = formValueSelector('vote_poll');
  return ({
    poll_description: selector(state, 'poll_description'),
    options: selector(state, 'options'),

    isFetchingPoll: state.poll.isFetchingPoll,
    activePoll: state.poll.activePoll,
  });
};

const mapDispatchToProps = (dispatch) => {

  return ({
    onSubmit: (values, d, props) => {

      const vote = {
        option_id: values.option_id
      }

      return dispatch(votePoll(props.activePoll.poll_id, vote));
    },

    
    fetchPoll: idPoll => { 
      dispatch(fetchPoll(idPoll))},
  });
};

const VotePollPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(reduxForm({
  form: 'vote_poll',
})(VotePollPage));

export default VotePollPageContainer;
