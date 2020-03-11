  import React, { Component } from "react";
  import { Alert } from "reactstrap";
  import VotePollForm from "./VotePollForm";
  import HomeOption from "../HomeOption";
  
  class VotePollPage extends Component {
    componentDidMount() {
        const {
          fetchPoll, match
        } = this.props;
        fetchPoll(match.params.id);
        console.log("holaaa");
      }
    
    render() {
        const { isFetchingPoll, activePoll } = this.props;
  
      return (
        <HomeOption>
          {isFetchingPoll && <Alert className="alert--warning" color="warning">
            Carregando ...
          </Alert>}
          { !isFetchingPoll &&  activePoll && <VotePollForm {...this.props} /> }
        </HomeOption>
      );
    }
  }
  
  export default VotePollPage;