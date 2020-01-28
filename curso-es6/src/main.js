import axios from 'axios';

async function getUserFromGithub(user) {
    try {
        const response = await axios.get(`https://api.github.com/users/${user}`);
        return console.log(response.data);
    } catch(err) {
        console.warn(`Usuário não encontrado! ${err}`);
    }
   
    
}

getUserFromGithub('andre-euz');
getUserFromGithub('andre-euz23232');
  
