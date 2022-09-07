import { Container } from "./styles";

interface IProps {
  avatar_url: string | undefined,
  username: string | undefined,
  followers: number | undefined,
  count_repositories: number | undefined
}

export default function UserDetail(props: IProps) {
  return( 
    <Container>
      <img />
    </Container>
  )
}

;