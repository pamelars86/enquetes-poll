import { connect } from 'react-redux';
import {
  reduxForm, formValueSelector, SubmissionError, initialize,
} from 'redux-form';
import CreatePollPage from '../components/poll/CreatePollPage';
import {
    createPoll,
  } from '../actions/pollAction';


const mapStateToProps = (state) => {
  const selector = formValueSelector('create_poll');
  return ({
    poll_description: selector(state, 'poll_description'),
    alternatives: selector(state, 'alternatives'),
  });
};

const mapDispatchToProps = (dispatch) => {

  return ({
    prepareForm: () => {
      dispatch(initialize('create_poll', {
        alternatives: [{}, {}],
      }));
    },
    onSubmit: (values, d, props) => {
      const errors = [];
      let alternativesCleaned = [];


      alternativesCleaned = values.alternatives.map((value, i) => {
        if ((typeof (value.alternativeText) !== 'undefined') && value.alternativeText.trim().length > 0) {
          return value.alternativeText
        }
        return null;
      }).filter(value => Object.keys(value).length !== 0);

      const newPoll = {
        poll_description: values.poll_description,
        options: alternativesCleaned.length > 0 ? alternativesCleaned : [],
      };

      // validations

      if (newPoll && !newPoll.options) {
        errors.general_errors = 'Insira no minimo 2 alternativas';
      }

      if (Object.keys(errors).length !== 0) throw new SubmissionError(errors);

      return dispatch(createPoll(newPoll));
    },
  });
};

const CreatePollPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(reduxForm({
  form: 'create_poll',
})(CreatePollPage));

export default CreatePollPageContainer;
