import React from "react";
import { Input, Label, Button, Col, Row, Form, FormGroup } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Field, FieldArray, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import { requiredValidator } from '../../helpers/validators';

const renderField = ({
    input,
    label,
    type,
    meta: { touched, error, warning },
  }) => (
    <div className="mb-1">
      <Input
        {...input}
        placeholder={label}
        type={type}
        autoFocus
      />
      { touched
        && ((error && (
        <span className="error-message-text">
          {error}
        </span>
        ))
        || (warning && (
        <span>
          {' '}
          {warning}
          {' '}
        </span>
        )))
      }
    </div>
  );

  const renderAlternatives2 = ({ fields, meta: { error } }) => (
    <Row>
      <Col md="12">
  
        {fields.map((alternative, i) => (
          <Row key={alternative}>
            <Col sm="1" xs="1">
              <Field
                name="option_id"
                type="radio"
                component="input"
                normalize={value => parseInt(value, 10)}
                value={i}
              />
            </Col>
            <Col sm="6" xs="9">
              <p>{`${alternative}.option_description`}</p>
            </Col>
  
          </Row>
        ))}
        <Row>{ error && <span className="error-message-text">{error}</span>}</Row>
      </Col>
    </Row>
  );
  

class VotePollForm extends React.Component {

  render() {
    const {
        handleSubmit, activePoll,
      } = this.props;

    return (
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
            <Col sm="12">
              <h3>{`Enquete N° ${activePoll.poll_id}`}</h3>
            </Col>
        </Row>
        <Row className="mb-3">
            <Col sm="12">
                <h4>Descrição</h4>
                <p>
                  {activePoll.poll_description}
                </p>
            </Col>
        </Row>
        <Row>
          <Col>
            <Label for="poll_description">Selecione uma das opções</Label>
            <div>
            {activePoll && activePoll.options && activePoll.options.map((option, i) => (
              <div key={option.option_id}>
                <Field name="option_id" component="input" type="radio" value={`${option.option_id}`} />
                {option.option_description}
              </div>
            ))}
            </div>
          </Col>
        </Row>
        <Row className="mb-5">
            <Col sm="12" className="text-center">
                <Button><FontAwesomeIcon icon="save" />{' Votar'}</Button>
            </Col>
        </Row>
      </Form>
    );
  }
}

export default VotePollForm;