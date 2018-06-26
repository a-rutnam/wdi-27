
import axios from 'axios';

const CREDENTIALS = 'INSERT_API_CREDENTIALS_HERE'

const GitHub = {
  getUserInfo( username ){
    return axios.get(`https://api.github.com/users/${ username }?${ CREDENTIALS }`);
  }
  // getUserRepos - different API request
};

export default GitHub;
