import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const HomeOption = (props) => {
  const { children } = props;
  return (
    <Container style={{ marginTop: "20px" }} className="c-main-home">
      <div className="mb-3">
        <Link className="btn btn-secondary" role="button" to="/">
          <FontAwesomeIcon icon="arrow-circle-left" />
          {' Voltar'}
        </Link>
      </div> 
    {children}
    </Container>
  );
};
export default HomeOption;
