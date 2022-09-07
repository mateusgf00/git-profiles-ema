import { useEffect, useState } from "react";
import UserDetail from "../../components/userDetail";
import userService from "../../service/userService";
import { Container, InputSearchContainer } from "./styles";

interface User {
  avatar_url: string,
  username: string,
  followers: number,
  count_repositories: number
}


export default function Home(){
  const [user, setUser] = useState<User>();

  useEffect(() => {
    function search(){
      const input = document.getElementById('search-input') as HTMLInputElement;
      input?.addEventListener("keypress", async(e) => {
          if(e.key === 'Enter'){
              if(input.value){
                  const user = await userService.getUserbyId(input.value);
                  setUser(user);
                  console.log([user].length)

              }


          }
      })
  }
  search();

  },[])
  return(
    <Container>
      <InputSearchContainer>
                <input type="text" id="search-input" placeholder="Search for a user..."/>
      </InputSearchContainer>
      <UserDetail
        username={user?.username}
        avatar_url={user?.avatar_url}
        followers={user?.followers}
        count_repositories={user?.count_repositories}
      />
    </Container>
  )
}