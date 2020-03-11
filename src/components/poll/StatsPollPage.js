import React, { Component } from "react";
import { Alert } from "reactstrap";
import HomeOption from "../HomeOption";
import StatsPoll from "./StatsPoll";

class StatsPollPage extends Component {
  componentDidMount() {
      const {
        fetchStatsByPoll, match
      } = this.props;
      fetchStatsByPoll(match.params.id);
    }
  
  render() {
      const { isFetchingStatsPoll, isFetchingPoll, activePoll, statsPoll } = this.props;
    

    return (
      <HomeOption> 
        {isFetchingStatsPoll && <Alert className="alert--warning" color="warning">
          Carregando ...
        </Alert>}
        { !isFetchingStatsPoll && !isFetchingPoll && statsPoll && activePoll && <StatsPoll {...this.props} /> }
      </HomeOption>
    );
  }
}

export default StatsPollPage;