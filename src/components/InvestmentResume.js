import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Col, Row } from "reactstrap";

const generateDataPie = (investments) =>{
  const totalAmount = investments && investments.reduce( ( sum, { amount } ) => sum + parseFloat(amount), 0)
  const totalFixedAmount = investments && investments.filter( inv => inv.type_investment === 'Fixo').reduce( ( sum, { amount } ) => sum +  parseFloat(amount) , 0);
  const totalVariableAmount= investments && investments.filter( inv => inv.type_investment === 'Variável').reduce( ( sum, { amount } ) => sum +  parseFloat(amount) , 0);
  const porcFixedAmount = parseFloat(totalFixedAmount / totalAmount).toFixed(4)*100
  const porcVariableAmount = parseFloat(totalVariableAmount / totalAmount).toFixed(4)*100

  const dataPie = {
    labels: ['%Renta Fixa', '%Renta Variável'],
    datasets: [
      {
        label: 'Investimentos de acordo ao tipo',
        fontFamily: 'Lato',
        backgroundColor: [
          '#5dbe95',
          '#1d5a6e',
        ],
        hoverBackgroundColor: [
        '#428b6c',
        '#3e8ca6',
        ],
        data: [porcFixedAmount, porcVariableAmount]
      }
    ]
  }
  return dataPie
}

class InvestmentResume extends React.Component {
  render() {
    const { investments } = this.props
    const dataPie = generateDataPie(investments);
    return (
      <div className="mb-5">
        <Row>
          <Col md="8" className="offset-md-2">
              <Pie
                  data={dataPie}
                  options={{
                  title:{
                      display:true,
                      text:'Resumo da Carteira',
                      fontSize:20,
                      fontFamily: 'Lato',
                  },
                  legend:{
                      display:true,
                      position:'right'
                  }
                  }}
              />
          </Col>
        </Row>
      </div>
    );
  }
}

export default InvestmentResume;