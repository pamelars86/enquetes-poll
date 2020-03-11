import React from 'react';
import { Row, Col } from 'reactstrap';
import { Bar } from 'react-chartjs-2';

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
  const statsId = statsPoll.votes.map(t => t.option_id);
  const quantity = statsPoll.votes.map(t => t.qty);
  const dataBarChart = {
    labels: statsId,
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

        <Col sm="12"><h4>Informações da enquete</h4></Col>
        <Col sm="12">
            <h5>{activePoll.poll_description}</h5>
            {activePoll.options.map((o, i)=> (
              <p key={o.option_id}>{o.option_id} - {o.option_description}</p>
            ))}
        </Col>
      </Row>

      <Row>
        <Col><h4>Quantidade de votos por opção</h4></Col>
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
              display: true,
              position: 'right',
            },
            scales: {
              xAxes: [{
                ticks: {
                  display: true,
                },
              }],
            },
          }}
        />
        </Col>
      </Row>
      
    </div>
  );
};
export default StatsPoll;
