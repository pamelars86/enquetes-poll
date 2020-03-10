import React, { Component } from "react";
import { Container } from "reactstrap";
import { Link } from 'react-router-dom';
import CreatePollForm from "./CreatePollForm";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class CreatePollPage extends Component {
    componentDidMount() {
      const {
        prepareForm,
      } = this.props;
      prepareForm();
    }


  render() {

    return (
      <Container style={{ marginTop: "20px" }} className="c-main-home">
        <div className="mb-3">
          <Link className="btn btn-secondary" role="button" to="/">
            <FontAwesomeIcon icon="arrow-circle-left" />
            {' Voltar'}
          </Link>
        </div>
        <CreatePollForm {...this.props} />
      </Container>
    );
  }
}

export default CreatePollPage;