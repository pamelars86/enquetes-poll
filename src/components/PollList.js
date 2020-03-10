import React, { Component } from "react";
import { Table, Row, Col, Alert, UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle, } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';



const PollOptions = () =>{
  return (

    <UncontrolledDropdown>
    <DropdownToggle title="Mais ações" className="c-my-classplans__toggle">
      <FontAwesomeIcon icon="ellipsis-h" />
    </DropdownToggle>
    <DropdownMenu className="label-item__dropdown-menu" right>
      <DropdownItem
        title="Ver enquete"
        tag={Link}
      >
        <FontAwesomeIcon icon="eye" />
        {' '}
        Ver
      </DropdownItem>
      <DropdownItem divider className="label-item__divider" />
      <DropdownItem
        title="Editar enquete"
        tag={Link}
      >
        <FontAwesomeIcon icon="pencil-alt" />
        {' '}
        Editar
      </DropdownItem>
      <DropdownItem divider className="label-item__divider" />
    </DropdownMenu>
  </UncontrolledDropdown>
  )
}

const PollTable = (props) => {
  
  const { polls } = props;
  return(

    <Table>
      <thead>
        <tr className="text-center">
          <th>Id</th>
          <th>Descrição</th>
          <th>Opções</th>
          <th>Remover</th>
        </tr>
      </thead>
      <tbody>
        {!polls || polls.length <= 0 ? (
          <tr>
            <td colSpan="6" align="center">
              <b>Não tem enquetes disponíveis no momento</b>
            </td>
          </tr>
        ) : (
          polls.map(poll => (
            <tr className="text-center" key={poll.poll_id}>
              <td>{poll.poll_id}</td>
              <td><p className="c-poll-list__description">{poll.poll_description && poll.poll_description.trim()}</p></td>
              <td>{poll.options.length}</td>
              <td>
                <PollOptions {...props} pollId={poll.poll_id}/>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </Table>
  )
}

const PollList = props => {
    const { deletePoll, polls, isFetching } = props;

    if(isFetching){
      return(
        <Alert color="warning" className="text-center">Carregando ...</Alert>
      )
    }
    return (
      <Row>
        <Col sm="12">
          <PollTable polls={polls} deletePoll={deletePoll}/>
        </Col>
      </Row>
    );
}

export default PollList;