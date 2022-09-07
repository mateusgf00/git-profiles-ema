
class UserService {
 
   async getUserbyId(username: string){
       const response = await fetch(
       `https://api.github.com/users/${username}`
       );

       return response.json();
   }
   async getRepositories(username: string){
       const response = await fetch(
       `https://api.github.com/users/${username}/repos`
       );

       return response.json();
   }
}

export default new UserService();