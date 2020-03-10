import { connect } from 'react-redux';
import Home from '../components/Home';
import {
  listPolls, createPoll, deletePoll,
} from '../actions/pollAction';

// state.<reducer's name>.<property>

const mapStateToProps = state => ({
  isFetching: state.poll.isFetchingPolls,
  polls: state.poll.polls,
  error: state.poll.error,
  isDeleted: state.poll.isDeleted,
  isCreated: state.poll.isCreated,
});

const mapDispatchToProps = (dispatch) => {
  return ({
    listPolls: () => dispatch(listPolls()),

    createPoll: (values) => {
      const newPoll = {
        poll_description: values.poll_description,
      }
      dispatch(createPoll(newPoll))
    },
    deletePoll: (idPoll) => dispatch(deletePoll(idPoll)),
} )
};

const HomeContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Home);
  
export default HomeContainer;