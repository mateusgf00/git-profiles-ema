import { IRepositories } from "../../models/repositories";
import Image from "react-bootstrap/Image";
import { Container } from "./styles";
import ListRepositories from "../listRepositories";
import UserInformation from "../userInformation";

interface IProps {
  avatar_url: string | undefined;
  login?: string;
  followers: number | undefined;
  public_repos: number | undefined;
  newestRepositories: [IRepositories] | undefined;
  mostPopularRepositories: [IRepositories] | undefined;
}

export default function UserDetail(props: IProps) {
  return (
    <Container>
      <Image rounded src={props.avatar_url} />
      <UserInformation
        login={props.login}
        followers={props.followers}
        public_repos={props.public_repos}
      />
      <ListRepositories
        repositories={props.newestRepositories}
        title="Newest Repos"
      />
      <ListRepositories
        repositories={props.mostPopularRepositories}
        title="Most Popular Repos"
      />
    </Container>
  );
}
