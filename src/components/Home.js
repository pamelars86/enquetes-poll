import React, { Component } from "react";
import { Col, Container, Row, Button } from "reactstrap";
import PollList from "./PollList";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

class Home extends Component {

  componentDidMount() {
    const { listPolls } = this.props;
    listPolls();
  }

  render() {
    const { isFetching, deletePoll, polls, isCreated, listPolls, isDeleted} = this.props;

    if (isCreated || isDeleted) {
      listPolls();
    }

    return (
      <Container style={{ marginTop: "20px" }} className="c-main-home">
        <Row className="title-section text-center">
          <Col>
            <h3 className="m-4">Enquetes disponíveis</h3>
          </Col>
        </Row>
        <Row className="title-section text-right mb-3">
          <Col>
            <Link className="btn btn-secondary" to="/create-poll"><FontAwesomeIcon icon="plus" /> Criar nova</Link>
          </Col>
        </Row>
        <Row>
          <Col>
            <PollList
              polls={polls}
              deletePoll={deletePoll}
              isFetching={isFetching}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;