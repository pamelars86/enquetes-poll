import { connect } from 'react-redux';
import {
  reduxForm, formValueSelector, SubmissionError, initialize,
} from 'redux-form';
import CreatePollPage from '../components/poll/CreatePollPage';
import {
    listPolls, createPoll, deletePoll,
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
        alternatives: [{}, {}, {}],
        selectedIndex: 0,
      }));
    },
    onSubmit: (values, d, props) => {
      const errors = [];
      let alternativesCleaned = [];


      alternativesCleaned = values.alternatives.map((value, i) => {
        if ((typeof (value.alternativeText) !== 'undefined') && value.alternativeText.trim().length > 0) {
          return {
            is_correct: (i === values.selectedIndex),
            text: value.alternativeText,
          };
        }
        return {};
      }).filter(value => Object.keys(value).length !== 0);

      const newPoll = {
        statement: values.poll_description,
        alternatives: alternativesCleaned.length > 0 ? alternativesCleaned : [],
      };

      // validations

      if (newPoll && !newPoll.alternatives) {
        errors.general_errors = 'Insira no minimo 3 alternativas';
      }

      if (newPoll && newPoll.alternatives && newPoll.alternatives.length > 0) {
        if (newPoll && newPoll.alternatives.filter(alternative => alternative.is_correct === true).length === 0) {
          errors.general_errors = 'Campo obrigatório. Selecione uma resposta correta';
        }
      }

      console.log("POLL NUEVA");
      console.log(newPoll);

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
