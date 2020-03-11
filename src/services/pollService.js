import { apiUrl } from "../constants";
import axios from 'axios';
// import { authHeader } from 'helpers';

function fetchPoll(idPoll) {

  return axios.get(`${apiUrl}/poll/${idPoll}`)
    .then(response => response.data).then(polls => polls);
}

function listPolls() {
  return axios.get(`${apiUrl}/poll/`)
    .then(response => response.data).then(polls => polls);
}

/* Create a new poll */
function createPoll(newPollData) {
  return axios.post(`${apiUrl}/poll/`, newPollData)
    .then(response => response.data).then(newPoll => newPoll);
}

/* vote poll */
//Post /poll/:id/vote
function votePoll(idPoll, option) {
  return axios.post(`${apiUrl}/poll/${idPoll}/vote/`, option)
    .then(response => response.data).then(newPoll => newPoll);
}

/* get poll's stats */
function fetchStatsByPoll(idPoll) {
  return axios.get(`${apiUrl}/poll/${idPoll}/stats/`)
    .then(response => response.data).then(statsPoll => statsPoll);
}


// Delete a poll given its ID
function deletePoll(idPoll) {
  return axios.delete(`${apiUrl}/${idPoll}/`)
    .then(response => response.data).then(() => idPoll);
}

const pollService = {
  listPolls,
  createPoll,
  deletePoll,
  votePoll,
  fetchStatsByPoll,
  fetchPoll,
};

export default pollService;
