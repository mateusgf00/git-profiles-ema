import { useEffect, useState } from "react";
import userService from "../../service/userService";
import { Container, InputSearchContainer } from "./styles";

interface User {
  name: string,
  username: string
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
    </Container>
  )
}