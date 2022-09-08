import { IRepositories } from "../../models/repositories";
import Image from 'react-bootstrap/Image';
import {
  Container,
  ContainerUserInformation,
  ContainerNewestRepositories,
  ContainerMostPopularRepositories,
} from "./styles";
import ListRepositories from "../listRepositories";

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
      <Image rounded src={props.avatar_url}/>

      <ContainerUserInformation>
        <p><strong>Username:</strong> {props.login}</p>
        <p><strong>Followers:</strong> {props.followers}</p>
        <p><strong>Repositories count:</strong> {props.public_repos}</p>
      </ContainerUserInformation>
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
