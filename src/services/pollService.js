import { apiUrl } from "../constants";
import axios from 'axios';
// import { authHeader } from 'helpers';


function listPolls() {
  return axios.get(`${apiUrl}/poll/`)
    .then(response => response.data).then(polls => polls);
}

/* Create a new poll */
function createPoll(newPollData) {
  return axios.post(`${apiUrl}/poll/`, newPollData)
    .then(response => response.data).then(newPoll => newPoll);
}

function votePoll(){
  
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
};

export default pollService;
