import { Container, InputSearchContainer } from "./styles";

export default function Home(){
  return(
    <Container>
      <InputSearchContainer>
                <input type="text" id="search-input" placeholder="Search for a user..."/>
      </InputSearchContainer>
    </Container>
  )
}