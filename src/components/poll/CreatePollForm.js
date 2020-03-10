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
        <Row className="mb-3 text-center">
          <Col sm="8" xs="8" className="align-self-center hidden-xs">Opção</Col>
          <Col sm="2" xs="1" className="align-self-center hidden-xs">Remover</Col>
          { fields.length < 5
            ? (
              <Col md="2" sm="6">
                <Button onClick={() => fields.push({})}>
                  <FontAwesomeIcon
                    icon="plus"
                    className="btn__icon"
                  />
                      Adicionar opção
                </Button>
              </Col>
            ) : ''}
        </Row>
  
        {fields.map((alternative, i) => (
          <Row key={alternative}>
            <Col sm="8" xs="9">
              <Field
                type="text"
                component={renderField}
                name={`${alternative}.alternativeText`}
                label="Insira sua alternativa"
              />
            </Col>
            <Col sm="2" xs="1">
              <Button
                type="button"
                title="Remover alternativa"
                color="danger"
                onClick={() => fields.remove(i)}
              >
                <FontAwesomeIcon
                  icon="trash-alt"
                />
              </Button>
            </Col>
  
          </Row>
        ))}
        <Row>{ error && <span className="error-message-text">{error}</span>}</Row>
      </Col>
    </Row>
  );
  
  const RenderAlternatives2 = connect(
    state => ({
      selectedIndex: formValueSelector('create_poll')(state, 'selectedIndex'),
    }),
  )(renderAlternatives2);

class CreatePollForm extends React.Component {

  render() {
    const {
        handleSubmit
      } = this.props;

    return (
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
            <Col sm="12">
              <h3>Criar enquete</h3>
            </Col>
        </Row>
        <Row className="mb-3">
            <Col sm="12">
              <FormGroup>
                <Label for="poll_description">Descrição</Label>
                <Field 
                  type="textarea" 
                  name="poll_description"
                  id="poll_description" 
                  component={renderField}
                  label="Insira uma descrição para a enquete"
                  validate={requiredValidator}
                />
              </FormGroup>
            </Col>
        </Row>
        <Row>
          <Col>
            <Label for="poll_description">Opções</Label>
            <FieldArray
                  name="alternatives"
                  component={RenderAlternatives2}
                  //validate={minLength3Alternatives}
                  //resolution={resolution}
                />
          </Col>
        </Row>
        <Row>
            <Col sm="12" className="text-center">
                <Button><FontAwesomeIcon icon="save" />{' Salvar'}</Button>
            </Col>
        </Row>
      </Form>
    );
  }
}

export default CreatePollForm;