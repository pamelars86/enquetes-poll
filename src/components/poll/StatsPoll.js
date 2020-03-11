import React from 'react';
import { Row, Col } from 'reactstrap';
import { Bar } from 'react-chartjs-2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
/*
{
2. "poll_id": 1,
3. "views": 125,
4. "votes": [
5. {"option_id": 1, "qty": 10},
6. {"option_id": 2, "qty": 35},
7. {"option_id": 3, "qty": 1},
8. ]
9. }

*/

const StatsPoll = (props) => {
  const { statsPoll, activePoll } = props;
  const statsNames = activePoll.options.map(t => t.option_description);
  const quantity = statsPoll.votes.map(t => t.qty);
  const dataBarChart = {
    labels: statsNames,
    datasets: [
      {
        label: 'Opções',
        backgroundColor: ['#27213C', '#77567A', '#B287A3', '#D6A2AD', '#E3BAC6'],
        borderColor: ['#27213C', '#77567A', '#B287A3', '#D6A2AD', '#E3BAC6'],
        borderWidth: 1,
        data: quantity,
      },
    ],
  };

  return (
    <div>
      <h3 className="text-center mb-5">{`Estatísticas da enquete N° ${statsPoll.poll_id}`}</h3>
      
      
      <Row>

        <Col sm="12"><h4><strong>Informações da enquete</strong></h4></Col>
        <Col sm="12">
          <small>Vistas: {statsPoll.views}</small>
        </Col>
        <Col sm="12">
            <h5>Descrição:</h5>
            <h6>{activePoll.poll_description}</h6>
            <ul>
              {activePoll.options.map((o, i)=> (
                <li key={o.option_id}>{o.option_description} {`(${statsPoll.votes.filter(vote => vote.option_id === o.option_id )[0].qty})`} </li>
              ))}
            </ul>
        </Col>
      </Row>

      <Row>
        <Col><h4><strong>Quantidade de votos por opção</strong></h4></Col>
      </Row>
        <Row>
          <Col sm="6" className="offset-md-3">
          <Bar
          data={dataBarChart}
          options={{
            title: {
              display: false,
              text: 'Quantidade de votos por opção',
              fontSize: 20,
            },
            legend: {
              display: false,
              position: 'right',
            },
            scales: {
              xAxes: [{
                ticks: {
                  display: false,
                  beginAtZero: true,
                  min: 0
                },
              }],
              yAxes: [{
                ticks: {
                  beginAtZero: true,
                  min: 0
                },
              }],
            },
          }}
        />
        </Col>
      </Row>
      <Row className="text-center mt-3">
        <Col sm="12">
          <div className="mb-3">
            <Link className="btn btn-secondary" role="button" to={`/view-poll/${activePoll.poll_id}`}>
              <FontAwesomeIcon icon="vote-yea" />
              {' Votar'}
            </Link>
          </div>
        </Col>
      </Row> 
      
    </div>
  );
};
export default StatsPoll;
