import { Container } from "./styles";

interface IProps {
  login: string | undefined;
  followers: number | undefined;
  public_repos: number | undefined;
}


export default function UserInformation(props: IProps) {
  return (
    <Container>
      <p>
        <strong>Username:</strong> {props.login}
      </p>
      <p>
        <strong>Followers:</strong> {props.followers}
      </p>
      <p>
        <strong>Repositories count:</strong> {props.public_repos}
      </p>
    </Container>
  );
}
