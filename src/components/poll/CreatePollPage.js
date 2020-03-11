import React, { Component } from "react";
import { Container } from "reactstrap";
import CreatePollForm from "./CreatePollForm";
import HomeOption from "../HomeOption";
import Home from "../Home";

class CreatePollPage extends Component {
    componentDidMount() {
      const {
        prepareForm,
      } = this.props;
      prepareForm();
    }


  render() {

    return (
      <HomeOption>
        <CreatePollForm {...this.props} />
      </HomeOption>
    );
  }
}

export default CreatePollPage;