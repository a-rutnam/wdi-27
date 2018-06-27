
import axios from 'axios';

const CREDENTIALS = 'INSERT_CLIENT_ID_AND_CLIENT_SECRET';

const GitHub = {
  getUserInfo( username ){
    return axios.get(`https://api.github.com/users/${ username }?${ CREDENTIALS }`);
  },
  getUserRepos( username ){
    return axios.get(`https://api.github.com/users/${ username }/repos?${ CREDENTIALS }`);
  }
};

export default GitHub;
