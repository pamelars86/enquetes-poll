import React from 'react';
import { Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = ({ year, version }) => (
  <div className="c-footer text-center">
    <Row className="c-footer__section-info-contact">
      <Col xs="12">
        <FontAwesomeIcon
          className="btn__icon"
          icon="envelope"
        />
        {' '}
        <a
          href="mailto:contato@luxfacta.com"
          className="c-footer__contact-info-link"
          target="_blank"
          rel="noopener noreferrer"
          title="contato@luxfacta.com.br"
        >
          contato@luxfacta.com.br
        </a>
      </Col>
    </Row>
    <Row className="c-footer__section-copyright">
      <Col xs="12">
        {`© ${year} Luxfacta - versão ${version}`}
      </Col>
    </Row>
  </div>
);
export default Footer;
